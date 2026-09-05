-- Buddha's Wisdom Chat — Initial Schema
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. PROFILES
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT,
  country TEXT,
  preferred_language TEXT DEFAULT 'en' CHECK (preferred_language IN ('ru','en','hi','es','fr','de','zh','ja')),
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user','admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ============================================
-- 2. CHAT MESSAGES
-- ============================================
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  character_id TEXT NOT NULL,
  content TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user','assistant')),
  language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own messages"
  ON chat_messages FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own messages"
  ON chat_messages FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_chat_messages_user_character
  ON chat_messages (user_id, character_id, created_at DESC);

-- ============================================
-- 3. TRANSLATIONS
-- ============================================
CREATE TABLE IF NOT EXISTS translations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  message_id UUID REFERENCES chat_messages ON DELETE CASCADE NOT NULL,
  target_language TEXT NOT NULL,
  translated_content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own translations"
  ON translations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own translations"
  ON translations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_translations_message
  ON translations (message_id, target_language);

-- ============================================
-- 4. COMMUNITY POSTS
-- ============================================
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  media_url TEXT,
  media_type TEXT CHECK (media_type IN ('youtube','image','link','tiktok','instagram')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Auth users read posts"
  ON community_posts FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Users insert own posts"
  ON community_posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own posts"
  ON community_posts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users delete own posts"
  ON community_posts FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 5. RETREATS
-- ============================================
CREATE TABLE IF NOT EXISTS retreats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  url TEXT,
  created_by UUID REFERENCES auth.users,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE retreats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read retreats"
  ON retreats FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert retreats"
  ON retreats FOR INSERT
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update retreats"
  ON retreats FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can delete retreats"
  ON retreats FOR DELETE
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- 6. RETREAT STORIES (отзывы)
-- ============================================
CREATE TABLE IF NOT EXISTS retreat_stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  retreat_id UUID REFERENCES retreats ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE retreat_stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read stories"
  ON retreat_stories FOR SELECT
  USING (true);

CREATE POLICY "Users insert own stories"
  ON retreat_stories FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own stories"
  ON retreat_stories FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 7. TRIGGER: auto-create profile on signup
-- ============================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, preferred_language)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name'),
    COALESCE(NEW.raw_user_meta_data->>'language', 'en')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger only on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================
-- 8. SEED DATA: retreats
-- ============================================
INSERT INTO retreats (name, location, description, url) VALUES
  ('Dhamma Giri', 'Igatpuri, Maharashtra, India', 'One of the world''s largest Vipassana meditation centers. 10-day silent retreats.', 'https://www.dhamma.org'),
  ('Plum Village', 'Dordogne, France', 'Thich Nhat Hanh''s community. Mindfulness practice in a beautiful French countryside setting.', 'https://plumvillage.org'),
  ('Insight Meditation Society (IMS)', 'Barre, Massachusetts, USA', 'Founded in 1975. Vipassana and Metta retreats in the Western tradition.', 'https://dharma.org'),
  ('Spirit Rock', 'Woodacre, California, USA', 'West Coast vipassana center. Daylong and residential retreats.', 'https://spiritrock.org'),
  ('Suan Mokkh', 'Surat Thani, Thailand', 'Traditional Thai forest monastery. 10-day retreats in the Ajahn Buddhadasa tradition.', 'https://suanmokkh.org'),
  ('Tushita', 'Dharamsala, Himachal Pradesh, India', 'FPMT center near Dalai Lama''s residence. Buddhist philosophy and meditation.', 'https://tushita.de'),
  ('Kopan Monastery', 'Kathmandu, Nepal', 'Tibetan Buddhist monastery. Annual November meditation course.', 'https://kopanmonastery.com'),
  ('Root Institute', 'Bodh Gaya, Bihar, India', 'FPMT center near the Mahabodhi Temple. Lama Chöpa and other programs.', 'https://rootinstitute.com');
