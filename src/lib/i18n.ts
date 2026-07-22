import { Locale } from '@/types'

type TranslationKeys = {
  nav: {
    home: string
    chat: string
    characters: string
    episodes: string
    teachings: string
    theses: string
    gallery: string
    quiz: string
    community: string
    videos: string
    retreats: string
    profile: string
    about: string
    contact: string
    admin: string
    donate: string
    blockChat: string
    blockLearn: string
    blockFilm: string
  }
  home: {
    heroTitle: string
    heroSubtitle: string
    startChat: string
    thesisOfDay: string
    readMore: string
    quoteStrip: string
    featuresTitle: string
    blockChatTitle: string
    blockChatDesc: string
    blockLearnTitle: string
    blockLearnDesc: string
    blockFilmTitle: string
    blockFilmDesc: string
  }
  auth: {
    login: string
    register: string
    email: string
    password: string
    displayName: string
    loginButton: string
    registerButton: string
    or: string
    noAccount: string
    hasAccount: string
    loggingIn: string
    registering: string
    error: string
  }
  chat: {
    title: string
    placeholder: string
    send: string
    listen: string
    stop: string
    autoVoice: string
    typing: string
    chooseCharacter: string
    newChat: string
  }
  about: {
    title: string
    description: string
    mission: string
    series: string
    community: string
  }
  contact: {
    title: string
    name: string
    email: string
    message: string
    send: string
    sent: string
  }
  admin: {
    translations: string
    article: string
    translationsFor: string
    saveAll: string
    retranslateAll: string
    saved: string
  }
  common: {
    loading: string
    error: string
    save: string
    cancel: string
    delete: string
    back: string
    showOriginal: string
    showTranslation: string
  }
  practice: {
    title: string
    intro: string
    meditationTitle: string
    meditationDesc: string
    angerTitle: string
    angerDesc: string
    compassionTitle: string
    compassionDesc: string
    resonantBreathing: string
    reminderTitle: string
    reminderText: string
    mettaTitle: string
    mettaText: string
    listenMetta: string
    copyMetta: string
  }
  teachings: {
    pageTitle: string
    sectionDharmachakra: string
    sectionTeachings: string
    sectionPractices: string
  }
}

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home', chat: 'Chat', characters: 'Characters', episodes: 'Episodes',
      teachings: 'Teachings, Dharmachakra & Practice', theses: 'Theses', gallery: 'Gallery', quiz: 'Quiz',
      community: 'Community', videos: 'Videos', retreats: 'Retreats', profile: 'Profile',
      about: 'About', contact: 'Contact', admin: 'Admin', donate: 'Donate',
      blockChat: 'Chat', blockLearn: 'From Under the Bodhi Tree', blockFilm: 'Film',
    },
    home: {
      heroTitle: "Buddha's Wisdom Chat",
      heroSubtitle: 'Explore the teachings of the Buddha through AI-powered conversations',
      startChat: 'Start Chat', thesisOfDay: 'Thesis of the Day', readMore: 'Read More',
      quoteStrip: '"The mind is everything. What you think you become." — Buddha',
      featuresTitle: 'Explore',
      blockChatTitle: 'Chat & Communication',
      blockChatDesc: 'Talk with Buddha, Ananda, Yashodhara and other characters. Ask questions, get answers, share your thoughts with the community.',
      blockLearnTitle: 'From Under the Bodhi Tree',
      blockLearnDesc: 'Core teachings of the Buddha, theses of modern teachers, preliminary practices. Understand the essence of the Dharma.',
      blockFilmTitle: 'Film & Discussion',
      blockFilmDesc: 'Scenes from the Buddha series, your videos with explanations, discussion of key moments on the path to enlightenment.',
    },
    auth: {
      login: 'Login', register: 'Register', email: 'Email', password: 'Password',
      displayName: 'Display Name', loginButton: 'Sign In', registerButton: 'Create Account',
      or: 'or', noAccount: "Don't have an account?", hasAccount: 'Already have an account?',
      loggingIn: 'Signing in...', registering: 'Creating account...', error: 'Authentication error',
    },
    chat: {
      title: 'Chat with Buddha', placeholder: 'Ask the Buddha a question...', send: 'Send',
      listen: 'Listen', stop: 'Stop', autoVoice: 'Auto-voice reply', typing: 'Thinking...',
      chooseCharacter: 'Choose a character', newChat: 'New Chat',
    },
    about: {
      title: 'About the Project',
      description: 'A fan community dedicated to the 2013 TV series "Buddha". Connect with fellow fans, explore teachings, and chat with characters from the show.',
      mission: 'Our mission is to create a community where fans can explore the profound teachings presented in the series, connect with each other, and engage in meaningful conversations about wisdom, compassion, and the path to inner peace.',
      series: 'This project is a tribute to the beloved 2013 TV series "Buddha", which tells the story of Siddhartha Gautama\'s journey to enlightenment.',
      community: 'Through AI-powered character chats, community discussions, curated video content, and information about meditation retreats worldwide, we aim to bring the spirit of the series to life.',
    },
    contact: {
      title: 'Contact Us', name: 'Name', email: 'Email', message: 'Message',
      send: 'Send message', sent: 'Message sent!',
    },
    admin: {
      translations: 'Translation Management', article: 'Article', translationsFor: 'Translations for',
      saveAll: 'Save all', retranslateAll: 'Retranslate all via AI', saved: 'Translations saved',
    },
    common: {
      loading: 'Loading...', error: 'Error', save: 'Save', cancel: 'Cancel',
      delete: 'Delete', back: 'Back', showOriginal: 'Show original', showTranslation: 'Show translation',
    },
    practice: {
      title: 'Preliminary Practice',
      intro: 'Practical steps to begin working with the mind and cultivating compassion',
      meditationTitle: 'How to Start Meditating',
      meditationDesc: 'A simple technique: focus on your breath for 5–10 minutes a day. Sit comfortably, close your eyes, and follow each inhale and exhale. When the mind wanders, gently bring attention back to the breath.',
      angerTitle: 'Working with Anger',
      angerDesc: 'Practice mindfulness: when anger arises, pause before reacting. Observe the sensation in the body, breathe into it, and allow the emotion to pass without acting on it. Acceptance is the first step to transformation.',
      compassionTitle: 'Developing Compassion',
      compassionDesc: 'Practice mettā (loving-kindness): sit quietly and repeat phrases of well-wishing — "May I be happy. May I be peaceful. May all beings be happy." Start with yourself, then extend to loved ones, neutral people, difficult people, and finally all beings.',
      resonantBreathing: 'Try Resonant Breathing',
      reminderTitle: 'Anger Reminder',
      reminderText: 'Anger is like a wave: it comes and goes. Stop. Breathe. Observe. Do not act from anger — act from awareness.',
      mettaTitle: 'Listen to the Metta Formula',
      mettaText: 'May I be happy. May I be peaceful. May all beings be happy.',
      listenMetta: '🎧 Play Metta',
      copyMetta: 'Copy text',
    },
    teachings: { pageTitle: 'Teachings, Dharmachakra & Practices', sectionDharmachakra: 'Dharmachakra', sectionTeachings: "Buddha's Teachings", sectionPractices: 'Practices' },
  },
  ru: {
    nav: {
      home: 'Главная', chat: 'Чат', characters: 'Герои', episodes: 'Эпизоды',
      teachings: 'Учения дхармачакра и практики', theses: 'Тезисы', gallery: 'Галерея', quiz: 'Викторина',
      community: 'Сообщество', videos: 'Видео', retreats: 'Ретриты', profile: 'Профиль',
      about: 'О проекте', contact: 'Контакты', admin: 'Админ', donate: 'Поддержать',
      blockChat: 'Чат', blockLearn: 'Из-под дерева Бодхи', blockFilm: 'Фильм',
    },
    home: {
      heroTitle: 'Мудрость Будды',
      heroSubtitle: 'Исследуйте учения Будды через диалог с ИИ',
      startChat: 'Начать чат', thesisOfDay: 'Тезис дня', readMore: 'Подробнее',
      quoteStrip: '«Ум — это всё. То, что ты думаешь, тем ты и становишься». — Будда',
      featuresTitle: 'Исследовать',
      blockChatTitle: 'Чат и общение',
      blockChatDesc: 'Общайтесь с Буддой, Анандой, Ясодхарой и другими персонажами. Задавайте вопросы, получайте ответы, делитесь мыслями с сообществом.',
      blockLearnTitle: 'Из-под дерева Бодхи',
      blockLearnDesc: 'Основные учения Будды, тезисы современных учителей, предварительные практики. Поймите суть Дхармы.',
      blockFilmTitle: 'Фильм и обсуждение',
      blockFilmDesc: 'Сцены из сериала «Будда», ваши роли с пояснениями, обсуждение ключевых моментов на пути к просветлению.',
    },
    auth: {
      login: 'Вход', register: 'Регистрация', email: 'Электронная почта', password: 'Пароль',
      displayName: 'Имя', loginButton: 'Войти', registerButton: 'Создать аккаунт',
      or: 'или', noAccount: 'Нет аккаунта?', hasAccount: 'Уже есть аккаунт?',
      loggingIn: 'Вход...', registering: 'Создание аккаунта...', error: 'Ошибка авторизации',
    },
    chat: {
      title: 'Чат с Буддой', placeholder: 'Задайте вопрос Будде...', send: 'Отправить',
      listen: 'Слушать', stop: 'Стоп', autoVoice: 'Авто-озвучка', typing: 'Думает...',
      chooseCharacter: 'Выберите персонажа', newChat: 'Новый чат',
    },
    about: {
      title: 'О проекте',
      description: 'Фан-сообщество, посвящённое сериалу «Будда» 2013 года. Общайтесь с единомышленниками, изучайте учения и общайтесь с персонажами сериала.',
      mission: 'Наша миссия — создать сообщество, где фанаты смогут исследовать глубокие учения сериала, общаться друг с другом и вести 의미ные беседы о мудрости, сострадании и пути к внутреннему миру.',
      series: 'Этот проект — дань любви сериалу «Будда» 2013 года, который рассказывает историю пути Сиддхартхи Гаутамы к просветлению.',
      community: 'Через ИИ-чаты с персонажами, обсуждения в сообществе, отобранные видео и информацию о медитативных ретритах по всему миру мы стремимся воплотить дух сериала в жизнь.',
    },
    contact: {
      title: 'Свяжитесь с нами', name: 'Имя', email: 'Электронная почта',
      message: 'Сообщение', send: 'Отправить', sent: 'Сообщение отправлено!',
    },
    admin: {
      translations: 'Управление переводами', article: 'Статья', translationsFor: 'Переводы для',
      saveAll: 'Сохранить все', retranslateAll: 'Перевести всё заново через AI', saved: 'Переводы сохранены',
    },
    common: {
      loading: 'Загрузка...', error: 'Ошибка', save: 'Сохранить', cancel: 'Отмена',
      delete: 'Удалить', back: 'Назад', showOriginal: 'Показать оригинал', showTranslation: 'Показать перевод',
    },
    practice: {
      title: 'Предварительная практика',
      intro: 'Практические шаги для начала работы с умом и развития сострадания',
      meditationTitle: 'Как начать медитировать',
      meditationDesc: 'Простая техника: сосредоточьтесь на дыхании на 5–10 минут в день. Сядьте удобно, закройте глаза и следите за каждым вдохом и выдохом. Когда ум отвлекается, мягко верните внимание к дыханию.',
      angerTitle: 'Как работать с гневом',
      angerDesc: 'Практикуйте осознанность: когда возникает гнев, сделайте паузу перед реакцией. Наблюдайте ощущение в теле, дышите в него и позвольте эмоции пройти без действия. Принятие — первый шаг к трансформации.',
      compassionTitle: 'Развитие сострадания',
      compassionDesc: 'Практикуйте метту (любящую доброту): тихо сядьте и повторяйте слова пожеланий — «Пусть я буду счастлив. Пусть я буду в покое. Пусть все существа будут счастливы». Начните с себя, затем расширьте на близких, нейтральных, сложных людей и всех существ.',
      resonantBreathing: 'Попробуйте резонансное дыхание',
      reminderTitle: 'Напоминание в момент гнева',
      reminderText: 'Гнев — как волна: он приходит и уходит. Остановись. Дыши. Наблюдай. Не действуй из гнева — действуй из осознанности.',
      mettaTitle: 'Прослушайте метта-формулу',
      mettaText: 'Пусть я буду счастлив. Пусть я буду в покое. Пусть все существа будут счастливы.',
      listenMetta: '🎧 Прослушать метту',
      copyMetta: 'Скопировать',
    },
    teachings: { pageTitle: 'Учения Дхармачакра и Практики', sectionDharmachakra: 'Дхармачакра', sectionTeachings: 'Учения Будды', sectionPractices: 'Практики' },
  },
  hi: {
    nav: {
      home: 'होम', chat: 'चैट', characters: 'पात्र', episodes: 'एपिसोड',
      teachings: 'शिक्षाएँ, धर्मचक्र और अभ्यास', theses: 'थीसिस', gallery: 'गैलरी', quiz: 'प्रश्नोत्तरी',
      community: 'समुदाय', videos: 'वीडियो', retreats: 'रिट्रीट', profile: 'प्रोफ़ाइल',
      about: 'परियोजना के बारे में', contact: 'संपर्क', admin: 'एडमिन', donate: 'समर्थन',
      blockChat: 'चैट', blockLearn: 'बोधि वृक्ष के नीचे', blockFilm: 'फ़िल्म',
    },
    home: {
      heroTitle: 'बुद्ध की ज्ञान चैट',
      heroSubtitle: 'AI-संचालित वार्तालापों के माध्यम से बुद्ध की शिक्षाओं का अन्वेषण करें',
      startChat: 'चैट शुरू करें', thesisOfDay: 'आज का थीसिस', readMore: 'और पढ़ें',
      quoteStrip: '"मन ही सब कुछ है। जो तुम सोचते हो, वही बन जाते हो।" — बुद्ध',
      featuresTitle: 'अन्वेषण करें',
      blockChatTitle: 'चैट और संचार',
      blockChatDesc: 'बुद्ध, आनंद, यशोधरा और अन्य पात्रों से बात करें। प्रश्न पूछें, उत्तर प्राप्त करें।',
      blockLearnTitle: 'बोधि वृक्ष के नीचे',
      blockLearnDesc: 'बुद्ध की मूल शिक्षाएँ, आधुनिक शिक्षकों के थीसिस, प्रारंभिक अभ्यास।',
      blockFilmTitle: 'फ़िल्म और चर्चा',
      blockFilmDesc: 'बुद्ध श्रृंखला से दृश्य, आपके वीडियो और स्पष्टीकरण, प्रमुख क्षणों पर चर्चा।',
    },
    auth: {
      login: 'लॉगिन', register: 'रजिस्टर', email: 'ईमेल', password: 'पासवर्ड',
      displayName: 'प्रदर्शन नाम', loginButton: 'साइन इन', registerButton: 'खाता बनाएं',
      or: 'या', noAccount: 'खाता नहीं है?', hasAccount: 'पहले से खाता है?',
      loggingIn: 'साइन इन हो रहा है...', registering: 'खाता बना रहे हैं...', error: 'प्रमाणीकरण त्रुटि',
    },
    chat: {
      title: 'बुद्ध से चैट करें', placeholder: 'बुद्ध से एक प्रश्न पूछें...', send: 'भेजें',
      listen: 'सुनें', stop: 'रोकें', autoVoice: 'ऑटो-वॉयस', typing: 'सोच रहे हैं...',
      chooseCharacter: 'एक पात्र चुनें', newChat: 'नई चैट',
    },
    about: {
      title: 'परियोजना के बारे में',
      description: '\u2018बुद्ध\u2019 2013 के टीवी श्रृंखला के समर्पित फैन समुदाय। साथी प्रशंसकों से जुड़ें, शिक्षाओं का पता लगाएं, और शो के पात्रों से चैट करें।',
      mission: 'हमारा मिशन एक ऐसा समुदाय बनाना है जहां प्रशंसक श्रृंखला में प्रस्तुत गहन शिक्षाओं का पता लगा सकें, एक दूसरे से जुड़ सकें, और ज्ञान, करुणा और आंतरिक शांति के मार्ग के बारे में सार्थक बातचीत कर सकें।',
      series: 'यह परियोजना प्रिय 2013 के टीवी श्रृंखला \'बुद्ध\' को समर्पित है, जो सिद्धार्थ गौतम की ज्ञान प्राप्ति की यात्रा की कहानी बताती है।',
      community: 'AI-संचालित पात्र चैट, समुदाय चर्चाओं, क्यूरेटेड वीडियो सामग्री और दुनिया भर में ध्यान रिट्रीट के बारे में जानकारी के माध्यम से, हम श्रृंखला की भावना को जीवंत करने का लक्ष्य रखते हैं।',
    },
    contact: {
      title: 'संपर्क करें', name: 'नाम', email: 'ईमेल',
      message: 'संदेश', send: 'संदेश भेजें', sent: 'संदेश भेजा गया!',
    },
    admin: {
      translations: 'अनुवाद प्रबंधन', article: 'लेख', translationsFor: 'के लिए अनुवाद',
      saveAll: 'सभी सहेजें', retranslateAll: 'AI से सभी पुनः अनुवाद करें', saved: 'अनुवाद सहेजे गए',
    },
    common: {
      loading: 'लोड हो रहा है...', error: 'त्रुटि', save: 'सहेजें', cancel: 'रद्द करें',
      delete: 'हटाएं', back: 'वापस', showOriginal: 'मूल दिखाएं', showTranslation: 'अनुवाद दिखाएं',
    },
    practice: {
      title: 'प्रारंभिक अभ्यास',
      intro: 'मन से काम शुरू करने और करुणा विकसित करने के व्यावहारिक कदम',
      meditationTitle: 'ध्यान कैसे शुरू करें',
      meditationDesc: 'एक सरल तकनीक: दिन में 5–10 मिनट के लिए अपनी सांस पर ध्यान केंद्रित करें। आराम से बैठें, आँखें बंद करें, और हर सांस का पालन करें। जब मन भटके, तो धीरे से ध्यान वापस सांस पर लाएं।',
      angerTitle: 'क्रोध से कैसे निपटें',
      angerDesc: 'सचेतनता का अभ्यास करें: जब क्रोध उठे, प्रतिक्रिया करने से पहले रुकें। शरीर में संवेदना का निरीक्षण करें, उसमें सांस लें, और बिना कार्रवाई किए भावना को बीतने दें। स्वीकृति परिवर्तन का पहला कदम है।',
      compassionTitle: 'करुणा का विकास',
      compassionDesc: 'मेट्टा (प्रेम-करुणा) का अभ्यास करें: शांत बैठें और कल्याण के वाक्य दोहराएं — "मैं सुखी होऊँ। मैं शांत होऊँ। सभी प्राणी सुखी हों।" अपने आप से शुरू करें, फिर प्रियजनों, तटस्थ लोगों, कठिन लोगों और सभी प्राणियों तक विस्तारित करें।',
      resonantBreathing: 'अनुनाद श्वास आज़माएं',
      reminderTitle: 'गुस्से की याद दिलाने वाला',
      reminderText: 'गुस्सा एक लहर की तरह है: यह आता है और जाता है। रुको। साँस लो। देखो। गुस्से से काम मत करो — जागरूकता से काम करो।',
      mettaTitle: 'मेट्टा सूत्र सुनें',
      mettaText: 'मैं सुखी होऊँ। मैं शांत होऊँ। सभी प्राणी सुखी हों।',
      listenMetta: '🎧 मेट्टा सुनें',
      copyMetta: 'कॉपी करें',
    },
    teachings: { pageTitle: 'धर्मचक्र शिक्षाएँ और अभ्यास', sectionDharmachakra: 'धर्मचक्र', sectionTeachings: 'बुद्ध की शिक्षाएँ', sectionPractices: 'अभ्यास' },
  },
  es: {
    nav: {
      home: 'Inicio', chat: 'Chat', characters: 'Personajes', episodes: 'Episodios',
      teachings: 'Enseñanzas, Dharmachakra y Práctica', theses: 'Tesis', gallery: 'Galería', quiz: 'Quiz',
      community: 'Comunidad', videos: 'Videos', retreats: 'Retiros', profile: 'Perfil',
      about: 'Acerca de', contact: 'Contacto', admin: 'Administrador', donate: 'Donar',
      blockChat: 'Chat', blockLearn: 'Bajo el Árbol Bodhi', blockFilm: 'Película',
    },
    home: {
      heroTitle: 'Chat de la Sabiduría del Buda',
      heroSubtitle: 'Explora las enseñanzas del Buda a través de conversaciones con IA',
      startChat: 'Iniciar Chat', thesisOfDay: 'Tesis del Día', readMore: 'Leer Más',
      quoteStrip: '"La mente lo es todo. Lo que piensas, eso te conviertes." — Buda',
      featuresTitle: 'Explorar',
      blockChatTitle: 'Chat y Comunicación',
      blockChatDesc: 'Habla con Buda, Ananda, Yashodhara y otros personajes. Haz preguntas y comparte tus pensamientos.',
      blockLearnTitle: 'Bajo el Árbol Bodhi',
      blockLearnDesc: 'Enseñanzas centrales del Buda, tesis de maestros modernos, prácticas preliminares.',
      blockFilmTitle: 'Película y Discusión',
      blockFilmDesc: 'Escenas de la serie Buda, tus videos con explicaciones, discusión de momentos clave.',
    },
    auth: {
      login: 'Iniciar sesión', register: 'Registrarse', email: 'Correo electrónico', password: 'Contraseña',
      displayName: 'Nombre', loginButton: 'Entrar', registerButton: 'Crear cuenta',
      or: 'o', noAccount: '¿No tienes cuenta?', hasAccount: '¿Ya tienes cuenta?',
      loggingIn: 'Entrando...', registering: 'Creando cuenta...', error: 'Error de autenticación',
    },
    chat: {
      title: 'Habla con el Buda', placeholder: 'Haz una pregunta al Buda...', send: 'Enviar',
      listen: 'Escuchar', stop: 'Detener', autoVoice: 'Voz automática', typing: 'Pensando...',
      chooseCharacter: 'Elige un personaje', newChat: 'Nuevo Chat',
    },
    about: {
      title: 'Acerca de',
      description: 'Una comunidad de fans dedicada a la serie de televisión Buda de 2013',
      mission: 'Nuestra misión es crear una comunidad donde los fans puedan explorar las profundas enseñanzas presentadas en la serie, conectarse entre sí y entablar conversaciones significativas sobre la sabiduría, la compasión y el camino hacia la paz interior.',
      series: 'Este proyecto es un homenaje a la querida serie de televisión "Buda" de 2013, que cuenta la historia del viaje de Siddhartha Gautama hacia la iluminación.',
      community: 'A través de chats con personajes impulsados por IA, discusiones comunitarias, contenido de video seleccionado e información sobre retiros de meditación en todo el mundo, buscamos dar vida al espíritu de la serie.',
    },
    contact: {
      title: 'Contacto', name: 'Nombre', email: 'Correo electrónico',
      message: 'Mensaje', send: 'Enviar', sent: '¡Mensaje enviado!',
    },
    admin: {
      translations: 'Traducciones', article: 'Artículo', translationsFor: 'Traducciones para',
      saveAll: 'Guardar todo', retranslateAll: 'Retraducir todo', saved: 'Guardado',
    },
    common: {
      loading: 'Cargando...', error: 'Error', save: 'Guardar', cancel: 'Cancelar',
      delete: 'Eliminar', back: 'Volver', showOriginal: 'Mostrar original', showTranslation: 'Mostrar traducción',
    },
    practice: {
      title: 'Práctica Preliminar',
      intro: 'Pasos prácticos para comenzar a trabajar con la mente y cultivar la compasión',
      meditationTitle: 'Cómo empezar a meditar',
      meditationDesc: 'Una técnica simple: concéntrate en tu respiración durante 5–10 minutos al día. Siéntate cómodamente, cierra los ojos y sigue cada inhalación y exhalación. Cuando la mente divague, regresa suavemente la atención a la respiración.',
      angerTitle: 'Trabajar con la ira',
      angerDesc: 'Practica la atención plena: cuando surja la ira, haz una pausa antes de reaccionar. Observa la sensación en el cuerpo, respira hacia ella y permite que la emoción pase sin actuar. La aceptación es el primer paso hacia la transformación.',
      compassionTitle: 'Desarrollar la compasión',
      compassionDesc: 'Practica la mettā (amor bondadoso): siéntate en silencio y repite frases de bienestar — "Que yo sea feliz. Que yo esté en paz. Que todos los seres sean felices." Comienza contigo mismo, luego extiende a seres queridos, personas neutras, personas difíciles y finalmente a todos los seres.',
      resonantBreathing: 'Prueba la Respiración Resonante',
      reminderTitle: 'Recordatorio de Ira',
      reminderText: 'La ira es como una ola: va y viene. Detente. Respira. Observa. No actúes desde la ira — actúa desde la consciencia.',
      mettaTitle: 'Escucha la Fórmula Metta',
      mettaText: 'Que yo sea feliz. Que yo esté en paz. Que todos los seres sean felices.',
      listenMetta: '🎧 Escuchar Metta',
      copyMetta: 'Copiar',
    },
    teachings: { pageTitle: 'Enseñanzas, Dharmachakra y Prácticas', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Enseñanzas del Buda', sectionPractices: 'Prácticas' },
  },
  fr: {
    nav: {
      home: 'Accueil', chat: 'Chat', characters: 'Personnages', episodes: 'Épisodes',
      teachings: 'Enseignements, Dharmachakra et Pratique', theses: 'Thèses', gallery: 'Galerie', quiz: 'Quiz',
      community: 'Communauté', videos: 'Vidéos', retreats: 'Retraites', profile: 'Profil',
      about: 'À propos', contact: 'Contact', admin: 'Administrateur', donate: 'Donner',
      blockChat: 'Chat', blockLearn: 'Sous l\'Arbre Bodhi', blockFilm: 'Film',
    },
    home: {
      heroTitle: 'Chat de la Sagesse du Bouddha',
      heroSubtitle: 'Découvrez les enseignements du Bouddha grâce aux conversations IA',
      startChat: 'Commencer le Chat', thesisOfDay: 'Thèse du Jour', readMore: 'Lire la Suite',
      quoteStrip: '"L\'est tout. Ce que tu penses, tu le deviens." — Bouddha',
      featuresTitle: 'Explorer',
      blockChatTitle: 'Chat et Communication',
      blockChatDesc: 'Parlez avec Bouddha, Ananda, Yashodhara et d\'autres personnages. Posez des questions et partagez vos pensées.',
      blockLearnTitle: 'Sous l\'Arbre Bodhi',
      blockLearnDesc: 'Enseignements fondamentaux du Bouddha, thèses de maîtres modernes, pratiques préliminaires.',
      blockFilmTitle: 'Film et Discussion',
      blockFilmDesc: 'Scènes de la série Bouddha, vos vidéos avec explications, discussion des moments clés.',
    },
    auth: {
      login: 'Connexion', register: 'Inscription', email: 'E-mail', password: 'Mot de passe',
      displayName: 'Nom', loginButton: 'Se connecter', registerButton: 'Créer un compte',
      or: 'ou', noAccount: 'Pas de compte ?', hasAccount: 'Déjà un compte ?',
      loggingIn: 'Connexion...', registering: 'Création du compte...', error: 'Erreur d\'authentification',
    },
    chat: {
      title: 'Parler avec le Bouddha', placeholder: 'Posez une question au Bouddha...', send: 'Envoyer',
      listen: 'Écouter', stop: 'Arrêter', autoVoice: 'Réponse vocal automatique', typing: 'Réflexion...',
      chooseCharacter: 'Choisissez un personnage', newChat: 'Nouveau Chat',
    },
    about: {
      title: 'À propos',
      description: 'Une communauté de fans dédiée à la série télévisée Bouddha de 2013',
      mission: 'Notre mission est de créer une communauté où les fans peuvent explorer les enseignements profonds présentés dans la série, se connecter les uns aux autres et engager des conversations significatives sur la sagesse, la compassion et le chemin vers la paix intérieure.',
      series: 'Ce projet est un hommage à la série télévisée "Bouddha" de 2013, qui raconte l\'histoire du voyage de Siddhartha Gautama vers l\'illumination.',
      community: 'À travers des discussions communautaires, du contenu vidéo sélectionné et des informations sur les retraites de méditation dans le monde entier, nous visons à donner vie à l\'esprit de la série.',
    },
    contact: {
      title: 'Contact', name: 'Nom', email: 'E-mail',
      message: 'Message', send: 'Envoyer', sent: 'Message envoyé !',
    },
    admin: {
      translations: 'Traductions', article: 'Article', translationsFor: 'Traductions pour',
      saveAll: 'Tout enregistrer', retranslateAll: 'Tout retraduire', saved: 'Enregistré',
    },
    common: {
      loading: 'Chargement...', error: 'Erreur', save: 'Sauvegarder', cancel: 'Annuler',
      delete: 'Supprimer', back: 'Retour', showOriginal: 'Afficher l\'original', showTranslation: 'Afficher la traduction',
    },
    practice: {
      title: 'Pratique Préliminaire',
      intro: 'Étapes pratiques pour commencer à travailler avec l\'esprit et cultiver la compassion',
      meditationTitle: 'Comment commencer à méditer',
      meditationDesc: 'Une technique simple : concentrez-vous sur votre respiration pendant 5–10 minutes par jour. Asseyez-vous confortablement, fermez les yeux et suivez chaque inhalation et exhalation. Lorsque l\'esprit s\'égare, ramenez doucement l\'attention au souffle.',
      angerTitle: 'Travailler avec la colère',
      angerDesc: 'Pratiquez la pleine conscience : lorsque la colère surgit, faites une pause avant de réagir. Observez la sensation dans le corps, respirez dans elle et laissez l\'émotion passer sans agir. L\'acceptation est le premier pas vers la transformation.',
      compassionTitle: 'Développer la compassion',
      compassionDesc: 'Pratiquez la mettā (amour bienveillant) : asseyez-vous silencieusement et répétez des phrases de souhait de bien-être — "Que je sois heureux. Que je sois en paix. Que tous les êtres soient heureux." Commencez par vous-même, puis étendez aux êtres chers, aux personnes neutres, aux personnes difficiles et enfin à tous les êtres.',
      resonantBreathing: 'Essayez la Respiration Résonante',
      reminderTitle: 'Rappel Colère',
      reminderText: "La colère est comme une vague : elle vient et s'en va. Arrête-toi. Respire. Observe. N'agis pas sous l'effet de la colère — agis avec conscience.",
      mettaTitle: 'Écoutez la Formule Metta',
      mettaText: 'Que je soit heureux. Que je sois en paix. Que tous les êtres soient heureux.',
      listenMetta: '🎧 Écouter Metta',
      copyMetta: 'Copier',
    },
    teachings: { pageTitle: 'Enseignements, Dharmachakra et Pratiques', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Enseignements du Bouddha', sectionPractices: 'Pratiques' },
  },
  de: {
    nav: {
      home: 'Startseite', chat: 'Chat', characters: 'Charaktere', episodes: 'Episoden',
      teachings: 'Lehren, Dharmachakra und Praxis', theses: 'Thesen', gallery: 'Galerie', quiz: 'Quiz',
      community: 'Gemeinschaft', videos: 'Videos', retreats: 'Rückzüge', profile: 'Profil',
      about: 'Über uns', contact: 'Kontakt', admin: 'Administrator', donate: 'Spenden',
      blockChat: 'Chat', blockLearn: 'Unter dem Bodhi-Baum', blockFilm: 'Film',
    },
    home: {
      heroTitle: 'Buddhas Weisheits-Chat',
      heroSubtitle: 'Erkunde die Lehren Buddhas durch KI-gestützte Gespräche',
      startChat: 'Chat starten', thesisOfDay: 'These des Tages', readMore: 'Weiterlesen',
      quoteStrip: '"Der Geist ist alles. Was du denkst, das wirst du." — Buddha',
      featuresTitle: 'Erkunden',
      blockChatTitle: 'Chat & Kommunikation',
      blockChatDesc: 'Sprich mit Buddha, Ananda, Yashodhara und anderen Charakteren. Stelle Fragen und teile deine Gedanken.',
      blockLearnTitle: 'Unter dem Bodhi-Baum',
      blockLearnDesc: 'Zentrale Lehren Buddhas, Thesen moderner Lehrer, Vorübungen.',
      blockFilmTitle: 'Film & Diskussion',
      blockFilmDesc: 'Szenen aus der Buddha-Serie, deine Videos mit Erklärungen, Diskussion über Schlüsselmomente.',
    },
    auth: {
      login: 'Anmelden', register: 'Registrieren', email: 'E-Mail', password: 'Passwort',
      displayName: 'Anzeigename', loginButton: 'Einloggen', registerButton: 'Konto erstellen',
      or: 'oder', noAccount: 'Kein Konto?', hasAccount: 'Bereits ein Konto?',
      loggingIn: 'Anmelden...', registering: 'Konto wird erstellt...', error: 'Authentifizierungsfehler',
    },
    chat: {
      title: 'Mit Buddha chatten', placeholder: 'Stelle Buddha eine Frage...', send: 'Senden',
      listen: 'Hören', stop: 'Stopp', autoVoice: 'Auto-Stimme', typing: 'Nachdenken...',
      chooseCharacter: 'Wähle einen Charakter', newChat: 'Neuer Chat',
    },
    about: {
      title: 'Über uns',
      description: 'Eine Fan-Gemeinschaft, die der Buddha-Fernsehserie von 2013 gewidmet ist',
      mission: 'Unsere Mission ist es, eine Gemeinschaft zu schaffen, in der Fans die tiefgreifenden Lehren der Serie erkunden, sich miteinander vernetzen und bedeutungsvolle Gespräche über Weisheit, Mitgefühl und den Weg zum inneren Frieden führen können.',
      series: 'Dieses Projekt ist eine Hommage an die beliebte Fernsehserie "Buddha" aus dem Jahr 2013, die die Geschichte der Reise von Siddhartha Gautama zur Erleuchtung erzählt.',
      community: 'Durch KI-gestützte Charakter-Chats, Gemeinschaftsdiskussionen, kuratierte Videoinhalte und Informationen über Meditations-Retreats auf der ganzen Welt möchten wir den Geist der Serie zum Leben erwecken.',
    },
    contact: {
      title: 'Kontakt', name: 'Name', email: 'E-Mail',
      message: 'Nachricht', send: 'Senden', sent: 'Nachricht gesendet!',
    },
    admin: {
      translations: 'Übersetzungen', article: 'Artikel', translationsFor: 'Übersetzungen für',
      saveAll: 'Alle speichern', retranslateAll: 'Alle übersetzen', saved: 'Gespeichert',
    },
    common: {
      loading: 'Laden...', error: 'Fehler', save: 'Speichern', cancel: 'Abbrechen',
      delete: 'Löschen', back: 'Zurück', showOriginal: 'Original anzeigen', showTranslation: 'Übersetzung anzeigen',
    },
    practice: {
      title: 'Vorübungen',
      intro: 'Praktische Schritte, um mit dem Geist zu arbeiten und Mitgefühl zu kultivieren',
      meditationTitle: 'Wie man mit der Meditation beginnt',
      meditationDesc: 'Eine einfache Technik: Konzentrieren Sie sich 5–10 Minuten täglich auf Ihren Atem. Sitzen Sie bequem, schließen Sie die Augen und folgen Sie jedem Ein- und Ausatmen. Wenn der Geist abschweift, bringen Sie die Aufmerksamkeit sanft zum Atem zurück.',
      angerTitle: 'Mit Ärger umgehen',
      angerDesc: 'Üben Sie Achtsamkeit: Wenn Ärger aufkommt, machen Sie eine Pause, bevor Sie reagieren. Beobachten Sie die Empfindung im Körper, atmen Sie hinein und lassen Sie die Emotion vorbeigehen, ohne zu handeln. Akzeptanz ist der erste Schritt zur Verwandlung.',
      compassionTitle: 'Mitgefühl entwickeln',
      compassionDesc: 'Üben Sie Mettā (liebende Güte): Sitzen Sie ruhig und wiederholen Sie Wünsche des Wohlergehens — „Möge ich glücklich sein. Möge ich in Frieden sein. Möge aller Wesen glücklich sein." Beginnen Sie mit sich selbst und erweitern Sie es auf Geliebte, neutrale Menschen, schwierige Menschen und schließlich alle Wesen.',
      resonantBreathing: 'Atme resonant',
      reminderTitle: 'Wut-Erinnerung',
      reminderText: 'Wut ist wie eine Welle: sie kommt und geht. Anhalten. Atmen. Beobachten. Handle nicht aus Wut — handle mit Bewusstsein.',
      mettaTitle: 'Hören Sie die Metta-Formel',
      mettaText: 'Möge ich glücklich sein. Möge ich in Frieden sein. Mögen alle Wesen glücklich sein.',
      listenMetta: '🎧 Metta anhören',
      copyMetta: 'Kopieren',
    },
    teachings: { pageTitle: 'Lehren, Dharmachakra und Praktiken', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Buddhas Lehren', sectionPractices: 'Praktiken' },
  },
  zh: {
    nav: {
      home: '首页', chat: '聊天', characters: '角色', episodes: '剧集',
      teachings: '教义、法轮与修行', theses: '论文', gallery: '画廊', quiz: '问答',
      community: '社区', videos: '视频', retreats: '修行', profile: '个人资料',
      about: '关于', contact: '联系我们', admin: '管理员', donate: '支持',
      blockChat: '聊天', blockLearn: '菩提树下', blockFilm: '电影',
    },
    home: {
      heroTitle: '佛陀智慧聊天',
      heroSubtitle: '通过AI对话探索佛陀的教导',
      startChat: '开始聊天', thesisOfDay: '今日论文', readMore: '阅读更多',
      quoteStrip: '"心是一切。你所想的，你就会成为。" — 佛陀',
      featuresTitle: '探索',
      blockChatTitle: '聊天与交流',
      blockChatDesc: '与佛陀、阿难、耶输陀罗和其他角色交谈。提问、获取答案、分享想法。',
      blockLearnTitle: '菩提树下',
      blockLearnDesc: '佛陀的核心教导、现代老师的论点、前行修法。理解法的本质。',
      blockFilmTitle: '电影与讨论',
      blockFilmDesc: '佛陀系列的场景、您的视频和解释、关键时刻的讨论。',
    },
    auth: {
      login: '登录', register: '注册', email: '电子邮件', password: '密码',
      displayName: '显示名称', loginButton: '登录', registerButton: '创建账户',
      or: '或', noAccount: '没有账户？', hasAccount: '已有账户？',
      loggingIn: '登录中...', registering: '创建账户中...', error: '认证错误',
    },
    chat: {
      title: '与佛陀聊天', placeholder: '向佛陀提问...', send: '发送',
      listen: '聆听', stop: '停止', autoVoice: '自动语音', typing: '思考中...',
      chooseCharacter: '选择角色', newChat: '新对话',
    },
    about: {
      title: '关于',
      description: '一个致力于2013年电视剧《佛陀》的粉丝社区',
      mission: '我们的使命是创建一个社区，让粉丝可以探索剧中呈现的深刻教义，彼此联系，围绕智慧、慈悲和内心平静之道展开有意义的对话。',
      series: '这个项目是对2013年电视剧《佛陀》的致敬，讲述了悉达多·乔达摩走向觉悟的旅程。',
      community: '通过AI驱动的角色聊天、社区讨论、精选视频内容和全球冥想禅修信息，我们旨在让这部剧的精神栩栩如生。',
    },
    contact: {
      title: '联系我们', name: '姓名', email: '电子邮件',
      message: '消息', send: '发送', sent: '消息已发送！',
    },
    admin: {
      translations: '翻译', article: '文章', translationsFor: '翻译为',
      saveAll: '全部保存', retranslateAll: '全部重新翻译', saved: '已保存',
    },
    common: {
      loading: '加载中...', error: '错误', save: '保存', cancel: '取消',
      delete: '删除', back: '返回', showOriginal: '显示原文', showTranslation: '显示翻译',
    },
    practice: {
      title: '前行修法',
      intro: '开始修心和培养慈悲的实用步骤',
      meditationTitle: '如何开始冥想',
      meditationDesc: '简单技巧：每天专注于呼吸5–10分钟。舒适坐下，闭上眼睛，跟随每一次吸气和呼气。当心念散乱时，温柔地将注意力带回呼吸。',
      angerTitle: '处理愤怒',
      angerDesc: '练习正念：当愤怒生起时，在反应之前暂停。观察身体中的感受，向它呼吸，让情绪自然流过而不行动。接受是转化的第一步。',
      compassionTitle: '培养慈悲',
      compassionDesc: '修习慈心（mettā）：安静坐下，重复祝福的话语——"愿我快乐。愿我平安。愿一切众生快乐。"从自己开始，然后扩展到亲人、中立的人、困难的人，最后到一切众生。',
      resonantBreathing: '尝试共振呼吸',
      reminderTitle: '愤怒提醒',
      reminderText: '愤怒如浪潮：来时来，去时去。停下。呼吸。观察。不要从愤怒出发行动 — 从觉知出发。',
      mettaTitle: '聆听慈心公式',
      mettaText: '愿我快乐。愿我平静。愿一切众生快乐。',
      listenMetta: '🎧 播放慈心',
      copyMetta: '复制',
    },
    teachings: { pageTitle: '法轮教义与修行', sectionDharmachakra: '法轮', sectionTeachings: '佛陀教义', sectionPractices: '修行' },
  },
  ja: {
    nav: {
      home: 'ホーム', chat: 'チャット', characters: 'キャラクター', episodes: 'エピソード',
      teachings: 'ダルマチャクラと修行', theses: '論文', gallery: 'ギャラリー', quiz: 'クイズ',
      community: 'コミュニティ', videos: '動画', retreats: 'リトリート', profile: 'プロフィール',
      about: '概要', contact: 'お問い合わせ', admin: '管理者', donate: '寄付',
      blockChat: 'チャット', blockLearn: '菩提樹の下で', blockFilm: '映画',
    },
    home: {
      heroTitle: 'ブッダの知恵チャット',
      heroSubtitle: 'AI会話を通じてブッダの教えを探る',
      startChat: 'チャット開始', thesisOfDay: '今日の論文', readMore: '続きを読む',
      quoteStrip: '"心がすべて。考えることが、あなたの存在になる。" — ブッダ',
      featuresTitle: '探る',
      blockChatTitle: 'チャットと交流',
      blockChatDesc: 'ブッダ、アナンダ、ヤーショダラー他のキャラクターと話す。質問し、答えを受け取り、想法を分かち合う。',
      blockLearnTitle: '菩提樹の下で',
      blockLearnDesc: 'ブッダの核心的な教え、現代の老師の論点、前行修行。ダharmaの本質を理解する。',
      blockFilmTitle: '映画と議論',
      blockFilmDesc: 'ブッダシリーズのシーン、あなたの動画と解説、重要な瞬間の議論。',
    },
    auth: {
      login: 'ログイン', register: '登録', email: 'メール', password: 'パスワード',
      displayName: '表示名', loginButton: 'サインイン', registerButton: 'アカウント作成',
      or: 'または', noAccount: 'アカウントをお持ちでない方', hasAccount: 'アカウントをお持ちの方',
      loggingIn: 'サインイン中...', registering: 'アカウント作成中...', error: '認証エラー',
    },
    chat: {
      title: 'ブッダとチャット', placeholder: 'ブッダに質問する...', send: '送信',
      listen: '聞く', stop: '停止', autoVoice: '自動音声', typing: '考え中...',
      chooseCharacter: 'キャラクターを選択', newChat: '新しいチャット',
    },
    about: {
      title: '概要',
      description: '2013年のテレビシリーズ「ブッダ」に捧げられたファンコミュニティ',
      mission: '私たちの使命は、ファンがシリーズに提示される深い教えを探求し、互いに繋がり、知恵、慈悲、内なる平和への道について意味のある会話ができるコミュニティを作ることです。',
      series: 'このプロジェクトは、2013年のテレビシリーズ「ブッダ」への献辞であり、釈迦牟尼の悟りへの旅を物語っています。',
      community: 'AIを活用したキャラクターチャット、コミュニティディスカッション、厳選されたビデオコンテンツ、世界中の瞑想リトリート情報通じて、シリーズの精神を活かすことを目指しています。',
    },
    contact: {
      title: 'お問い合わせ', name: '名前', email: 'メールアドレス',
      message: 'メッセージ', send: '送信', sent: 'メッセージ送信完了！',
    },
    admin: {
      translations: '翻訳', article: '記事', translationsFor: 'の翻訳',
      saveAll: 'すべて保存', retranslateAll: 'すべて再翻訳', saved: '保存済み',
    },
    common: {
      loading: '読み込み中...', error: 'エラー', save: '保存', cancel: 'キャンセル',
      delete: '削除', back: '戻る', showOriginal: '原文を表示', showTranslation: '翻訳を表示',
    },
    practice: {
      title: '前行修行',
      intro: '心を働きかけ、慈悲を育むための実践的ステップ',
      meditationTitle: '瞑想の始め方',
      meditationDesc: '簡単な技法：毎日5〜10分間、呼吸に集中します。楽な姿勢で座り、目を閉じて、それぞれの吸入と呼出に従います。心が散らばったときは、優しく呼吸に注意を戻します。',
      angerTitle: '怒りと向き合う',
      angerDesc: 'マインドフルネスを実践します：怒りが起きたら、反応する前に一時停止。体の感覚を観察し、そこに呼吸し、行動せずに感情が通り過ぎるのを許します。受容は変容への第一歩です。',
      compassionTitle: '慈悲を育てる',
      compassionDesc: 'メッター（慈愛）を実践します：静かに座り、幸福の願いを繰り返します——「私が幸せでありますように。私が平和でありますように。すべての生きとし生けるものが幸せでありますように。」自分から始めて、愛する人、中立の人、難しい人、そしてすべての生きとし生けるものに広げます。',
      resonantBreathing: '共鳴呼吸を試す',
      reminderTitle: '怒りのリマインダー',
      reminderText: '怒りは波のようなもの：来て、去る。止まる。呼吸する。観察する。怒りから行動せず — 確信から行動する。',
      mettaTitle: 'メタの公式を聴く',
      mettaText: '私が幸せでありますように。私が平和でありますように。すべての生きとし生けるものが幸せでありますように。',
      listenMetta: '🎧 メタを再生',
      copyMetta: 'コピー',
    },
    teachings: { pageTitle: 'ダルマチャクラの教えと修行', sectionDharmachakra: 'ダルマチャクラ', sectionTeachings: 'ブッダの教え', sectionPractices: '修行' },
  },
  pt: {
    nav: {
      home: 'Início', chat: 'Chat', characters: 'Personagens', episodes: 'Episódios',
      teachings: 'Ensinos, Dharmachakra e Prática', theses: 'Teses', gallery: 'Galeria', quiz: 'Quiz',
      community: 'Comunidade', videos: 'Vídeos', retreats: 'Retiros', profile: 'Perfil',
      about: 'Sobre', contact: 'Contato', admin: 'Admin', donate: 'Apoiar',
      blockChat: 'Chat', blockLearn: 'Sob a Árvore Bodhi', blockFilm: 'Filme',
    },
    home: {
      heroTitle: 'Chat da Sabedoria do Buda',
      heroSubtitle: 'Explore os ensinos do Buda através de conversas com IA',
      startChat: 'Iniciar Chat', thesisOfDay: 'Tese do Dia', readMore: 'Ler Mais',
      quoteStrip: '"A mente é tudo. O que você pensa, isso você se torna." — Buda',
      featuresTitle: 'Explorar',
      blockChatTitle: 'Chat e Comunicação',
      blockChatDesc: 'Converse com Buda, Ananda, Yashodhara e outros personagens. Faça perguntas e compartilhe seus pensamentos.',
      blockLearnTitle: 'Sob a Árvore Bodhi',
      blockLearnDesc: 'Ensinos fundamentais do Buda, teses de mestres modernos, práticas preliminares.',
      blockFilmTitle: 'Filme e Discussão',
      blockFilmDesc: 'Cenas da série Buda, seus vídeos com explicações, discussão de momentos-chave.',
    },
    auth: {
      login: 'Entrar', register: 'Registrar', email: 'E-mail', password: 'Senha',
      displayName: 'Nome', loginButton: 'Entrar', registerButton: 'Criar Conta',
      or: 'ou', noAccount: 'Não tem conta?', hasAccount: 'Já tem conta?',
      loggingIn: 'Entrando...', registering: 'Criando conta...', error: 'Erro de autenticação',
    },
    chat: {
      title: 'Converse com o Buda', placeholder: 'Faça uma pergunta ao Buda...', send: 'Enviar',
      listen: 'Ouvir', stop: 'Parar', autoVoice: 'Voz automática', typing: 'Pensando...',
      chooseCharacter: 'Escolha um personagem', newChat: 'Novo Chat',
    },
    about: {
      title: 'Sobre o Projeto',
      description: 'Uma comunidade de fãs dedicada à série de TV Buda de 2013',
      mission: 'Nossa missão é criar uma comunidade onde os fãs possam explorar os profundos ensinos apresentados na série, conectar-se e ter conversas significativas.',
      series: 'Este projeto é uma homenagem à série de TV "Buda" de 2013, que conta a história da jornada de Siddhartha Gautama rumo à iluminação.',
      community: 'Através de chats com personagens por IA, discussões comunitárias e informações sobre retiros de meditação, buscamos dar vida ao espírito da série.',
    },
    contact: {
      title: 'Contato', name: 'Nome', email: 'E-mail',
      message: 'Mensagem', send: 'Enviar', sent: 'Mensagem enviada!',
    },
    admin: {
      translations: 'Traduções', article: 'Artigo', translationsFor: 'Traduções para',
      saveAll: 'Salvar tudo', retranslateAll: 'Retraduzir tudo', saved: 'Salvo',
    },
    common: {
      loading: 'Carregando...', error: 'Erro', save: 'Salvar', cancel: 'Cancelar',
      delete: 'Excluir', back: 'Voltar', showOriginal: 'Mostrar original', showTranslation: 'Mostrar tradução',
    },
    practice: {
      title: 'Prática Preliminar',
      intro: 'Passos práticos para começar a trabalhar com a mente e cultivar a compaixão',
      meditationTitle: 'Como começar a meditar',
      meditationDesc: 'Uma técnica simples: concentre-se na sua respiração por 5–10 minutos por dia. Sente-se confortavelmente, feche os olhos e siga cada inspiração e expiração. Quando a mente divagar, traga suavemente a atenção de volta à respiração.',
      angerTitle: 'Trabalhar com a raiva',
      angerDesc: 'Pratique a atenção plena: quando a raiva surgir, faça uma pausa antes de reagir. Observe a sensação no corpo, respire para dentro dela e permita que a emoção passe sem agir. A aceitação é o primeiro passo para a transformação.',
      compassionTitle: 'Desenvolver a compaixão',
      compassionDesc: 'Pratique a mettā (amor bondoso): sente-se silenciosamente e repita frases de bem-estar — "Que eu seja feliz. Que eu esteja em paz. Que todos os seres sejam felizes." Comece com você mesmo, depois estenda a entes queridos, pessoas neutras, pessoas difíceis e finalmente a todos os seres.',
      resonantBreathing: 'Experimente a Respiração Ressonante',
      reminderTitle: 'Lembrete de Raiva',
      reminderText: 'A raiva é como uma onda: vai e vem. Pare. Respire. Observe. Não aja pela raiva — aja pela consciência.',
      mettaTitle: 'Ouça a Fórmula Metta',
      mettaText: 'Que eu seja feliz. Que eu esteja em paz. Que todos os seres sejam felizes.',
      listenMetta: '🎧 Ouvir Metta',
      copyMetta: 'Copiar',
    },
    teachings: { pageTitle: 'Ensinos, Dharmachakra e Práticas', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Ensinos do Buda', sectionPractices: 'Práticas' },
  },
  th: {
    nav: {
      home: 'หน้าแรก', chat: 'แชท', characters: 'ตัวละคร', episodes: 'ตอน',
      teachings: 'ธรรมะ ธัมมจักร และการปฏิบัติ', theses: 'theses', gallery: 'แกลเลอรี', quiz: 'แบบทดสอบ',
      community: 'ชุมชน', videos: 'วิดีโอ', retreats: 'สถานปฏิบัติธรรม', profile: 'โปรไฟล์',
      about: 'เกี่ยวกับ', contact: 'ติดต่อ', admin: 'แอดมิน', donate: 'สนับสนุน',
      blockChat: 'แชท', blockLearn: 'ใต้ต้นโพธิ์', blockFilm: 'ภาพยนตร์',
    },
    home: {
      heroTitle: 'แชทแห่งปัญญาพระพุทธเจ้า',
      heroSubtitle: 'สำรวจคำสอนของพระพุทธเจ้าผ่านการสนทนาด้วย AI',
      startChat: 'เริ่มแชท', thesisOfDay: 'thesis ประจำวัน', readMore: 'อ่านเพิ่มเติม',
      quoteStrip: '"จิตเป็นทุกสิ่ง สิ่งที่ท่านคิด ท่านก็เป็นสิ่งนั้น" — พระพุทธเจ้า',
      featuresTitle: 'สำรวจ',
      blockChatTitle: 'แชทและการสื่อสาร',
      blockChatDesc: 'พูดคุยกับพระพุทธเจ้า พระอานนท์ พระนางยโศธรา และตัวละครอื่นๆ ถามคำถามและแบ่งปันความคิด',
      blockLearnTitle: 'ใต้ต้นโพธิ์',
      blockLearnDesc: 'คำสอนหลักของพระพุทธเจ้า คำสอนของครูสมัยใหม่ การปฏิบัติเบื้องต้น',
      blockFilmTitle: 'ภาพยนตร์และการอภิปราย',
      blockFilmDesc: 'ฉากจากซีรีส์พระพุทธเจ้า วิดีโอของคุณพร้อมคำอธิบาย การอภิปรายช่วงเวลาสำคัญ',
    },
    auth: {
      login: 'เข้าสู่ระบบ', register: 'สมัครสมาชิก', email: 'อีเมล', password: 'รหัสผ่าน',
      displayName: 'ชื่อที่แสดง', loginButton: 'เข้าสู่ระบบ', registerButton: 'สร้างบัญชี',
      or: 'หรือ', noAccount: 'ไม่มีบัญชี?', hasAccount: 'มีบัญชีแล้ว?',
      loggingIn: 'กำลังเข้าสู่ระบบ...', registering: 'กำลังสร้างบัญชี...', error: 'ข้อผิดพลาดในการยืนยันตัวตน',
    },
    chat: {
      title: 'แชทกับพระพุทธเจ้า', placeholder: 'ถามคำถามกับพระพุทธเจ้า...', send: 'ส่ง',
      listen: 'ฟัง', stop: 'หยุด', autoVoice: 'เสียงอัตโนมัติ', typing: 'กำลังคิด...',
      chooseCharacter: 'เลือกตัวละคร', newChat: 'แชทใหม่',
    },
    about: {
      title: 'เกี่ยวกับโครงการ',
      description: 'ชุมชนแฟนคลับที่อุทิศให้กับละครโทรทัศน์เรื่องพระพุทธเจ้าปี 2013',
      mission: 'พันธกิจของเราคือการสร้างชุมชนที่แฟนคลับสามารถสำรวจคำสอนลึกซึ้งจากละคร เชื่อมต่อกัน และสนทนาอย่างมีความหมาย',
      series: 'โครงการนี้เป็นการคารวะต่อละครโทรทัศน์ "พระพุทธเจ้า" ปี 2013 ซึ่งเล่าเรื่องการเดินทางสู่การรู้แจ้งของเจ้าชายสิทธัตถะ',
      community: 'ผ่านการแชทตัวละครด้วย AI การอภิปรายในชุมชน และข้อมูลเกี่ยวกับสถานปฏิบัติธรรมทั่วโลก เราประสงค์จะทำให้จิตวิญญาณของละครมีชีวิต',
    },
    contact: {
      title: 'ติดต่อเรา', name: 'ชื่อ', email: 'อีเมล',
      message: 'ข้อความ', send: 'ส่ง', sent: 'ส่งข้อความแล้ว!',
    },
    admin: {
      translations: 'การแปล', article: 'บทความ', translationsFor: 'การแปลสำหรับ',
      saveAll: 'บันทึกทั้งหมด', retranslateAll: 'แปลใหม่ทั้งหมด', saved: 'บันทึกแล้ว',
    },
    common: {
      loading: 'กำลังโหลด...', error: 'ข้อผิดพลาด', save: 'บันทึก', cancel: 'ยกเลิก',
      delete: 'ลบ', back: 'กลับ', showOriginal: 'แสดงต้นฉบับ', showTranslation: 'แสดงคำแปล',
    },
    practice: {
      title: 'การปฏิบัติเบื้องต้น',
      intro: 'ขั้นตอนการปฏิบัติจริงเพื่อเริ่มทำงานกับจิตใจและพัฒนาความเมตตา',
      meditationTitle: 'วิธีเริ่มนั่งสมาธิ',
      meditationDesc: 'เทคนิคง่ายๆ: จดจ่อกับลมหายใจวันละ 5–10 นาที นั่งสบายๆ หลับตา และติดตามลมหายใจเข้าและออก เมื่อจิตล่องลอย ให้พาความตระหนักกลับมาที่ลมหายใจอย่างนุ่มนวล',
      angerTitle: 'ทำงานกับความโกรธ',
      angerDesc: 'ฝึกสติ: เมื่อความโกรธเกิดขึ้น หยุดก่อนตอบสนอง สังเกตความรู้สึกในร่างกาย หายใจเข้าไปในนั้น และปล่อยให้อารมณ์ผ่านไปโดยไม่ลงมือทำ การยอมรับเป็นขั้นแรกสู่การเปลี่ยนแปลง',
      compassionTitle: 'พัฒนาความเมตตา',
      compassionDesc: 'ฝึกเมตตา (mettā): นั่งเงียบๆ และทบทวนคำอวยพร — "ขอให้ข้าพเจ้ามีความสุข ขอให้ข้าพเจ้าสงบ ขอให้สัตว์ทั้งปวงมีความสุข" เริ่มจากตัวเอง แล้วขยายไปยังคนรัก คนทั่วไป คนที่ลำบาก และในที่สุดก็สัตว์ทั้งปวง',
      resonantBreathing: 'ลองฝึกหายใจสั่นพ้อง',
      reminderTitle: 'เตือนสติเมื่อโกรธ',
      reminderText: 'ความโกรธเหมือนคลื่น: มาแล้วก็ไป หยุด หายใจ สังเกต อย่าทำจากความโกรธ — ทำจากสติ',
      mettaTitle: 'ฟังสูตรเมตตา',
      mettaText: 'ขอให้ข้าพเจ้ามีความสุข ขอให้ข้าพเจ้ามีความสงบ ขอให้สัตว์ทั้งปวงมีความสุข',
      listenMetta: '🎧 เล่นเมตตา',
      copyMetta: 'คัดลอก',
    },
    teachings: { pageTitle: 'ธรรมะ ธัมมจักร และการปฏิบัติ', sectionDharmachakra: 'ธัมมจักร', sectionTeachings: 'คำสอนของพระพุทธเจ้า', sectionPractices: 'การปฏิบัติ' },
  },
  vi: {
    nav: {
      home: 'Trang chủ', chat: 'Trò chuyện', characters: 'Nhân vật', episodes: 'Tập phim',
      teachings: 'Giáo lý, Pháp Luân và Thực hành', theses: 'Luận đề', gallery: 'Thư viện ảnh', quiz: 'Trắc nghiệm',
      community: 'Cộng đồng', videos: 'Video', retreats: 'Khóa tu', profile: 'Hồ sơ',
      about: 'Giới thiệu', contact: 'Liên hệ', admin: 'Quản trị', donate: 'Hỗ trợ',
      blockChat: 'Trò chuyện', blockLearn: 'Dưới cây Bồ Đề', blockFilm: 'Phim',
    },
    home: {
      heroTitle: 'Trò chuyện Trí tuệ Phật',
      heroSubtitle: 'Khám phá giáo lý Phật thông qua đối thoại với AI',
      startChat: 'Bắt đầu trò chuyện', thesisOfDay: 'Luận đề hôm nay', readMore: 'Đọc thêm',
      quoteStrip: '"Tâm là tất cả. Bạn nghĩ gì, bạn trở thành đó." — Đức Phật',
      featuresTitle: 'Khám phá',
      blockChatTitle: 'Trò chuyện và Giao tiếp',
      blockChatDesc: 'Trò chuyện với Phật, A-nan-da, Da-xu-đa-la và các nhân vật khác. Đặt câu hỏi và chia sẻ suy nghĩ.',
      blockLearnTitle: 'Dưới cây Bồ Đề',
      blockLearnDesc: 'Giáo lý cốt lõi của Phật, luận đề của các thầy hiện đại, thực hành sơ khởi.',
      blockFilmTitle: 'Phim và Thảo luận',
      blockFilmDesc: 'Cảnh từ series Phật, video giải thích, thảo luận về những khoảnh khắc quan trọng.',
    },
    auth: {
      login: 'Đăng nhập', register: 'Đăng ký', email: 'Email', password: 'Mật khẩu',
      displayName: 'Tên hiển thị', loginButton: 'Đăng nhập', registerButton: 'Tạo tài khoản',
      or: 'hoặc', noAccount: 'Chưa có tài khoản?', hasAccount: 'Đã có tài khoản?',
      loggingIn: 'Đang đăng nhập...', registering: 'Đang tạo tài khoản...', error: 'Lỗi xác thực',
    },
    chat: {
      title: 'Trò chuyện với Phật', placeholder: 'Đặt câu hỏi với Phật...', send: 'Gửi',
      listen: 'Nghe', stop: 'Dừng', autoVoice: 'Tự động đọc', typing: 'Đang suy nghĩ...',
      chooseCharacter: 'Chọn nhân vật', newChat: 'Cuộc trò chuyện mới',
    },
    about: {
      title: 'Giới thiệu',
      description: 'Cộng đồng fan hâm mộ dành cho bộ phim truyền hình Phật năm 2013',
      mission: 'Sứ mệnh của chúng tôi là tạo ra một cộng đồng nơi các fan có thể khám phá những giáo lý sâu sắc từ bộ phim, kết nối với nhau và có những cuộc trò chuyện ý nghĩa.',
      series: 'Dự án này là lời tri ân đến bộ phim truyền hình "Phật" năm 2013, kể về hành trình giác ngộ của Thái tử Siddhartha Gautama.',
      community: 'Thông qua trò chuyện nhân vật AI, thảo luận cộng đồng và thông tin về các khóa tu thiền định trên toàn thế giới, chúng tôi mong muốn mang lại tinh thần của bộ phim.',
    },
    contact: {
      title: 'Liên hệ', name: 'Tên', email: 'Email',
      message: 'Tin nhắn', send: 'Gửi', sent: 'Đã gửi tin nhắn!',
    },
    admin: {
      translations: 'Quản lý dịch thuật', article: 'Bài viết', translationsFor: 'Dịch cho',
      saveAll: 'Lưu tất cả', retranslateAll: 'Dịch lại tất cả', saved: 'Đã lưu',
    },
    common: {
      loading: 'Đang tải...', error: 'Lỗi', save: 'Lưu', cancel: 'Hủy',
      delete: 'Xóa', back: 'Quay lại', showOriginal: 'Hiển thị bản gốc', showTranslation: 'Hiển thị bản dịch',
    },
    practice: {
      title: 'Thực Hành Sơ Khởi',
      intro: 'Các bước thực hành để bắt đầu làm việc với tâm trí và phát triển lòng từ bi',
      meditationTitle: 'Cách bắt đầu thiền',
      meditationDesc: 'Một kỹ thuật đơn giản: tập trung vào hơi thở 5–10 phút mỗi ngày. Ngồi thoải mái, nhắm mắt và theo dõi từng hơi thở vào và ra. Khi tâm lang thang, nhẹ nhàng đưa sự chú ý trở lại hơi thở.',
      angerTitle: 'Làm việc với cơn giận',
      angerDesc: 'Thực hành chánh niệm: khi cơn giận nổi lên, dừng lại trước khi phản ứng. Quan sát cảm giác trong cơ thể, thở vào đó và để cảm xúc trôi qua mà không hành động. Chấp nhận là bước đầu tiên đến sự chuyển hóa.',
      compassionTitle: 'Phát triển lòng từ bi',
      compassionDesc: 'Thực hành mettā (tâm từ): ngồi yên tĩnh và lặp lại những lời chúc phúc — "Nguyện tôi được hạnh phúc. Nguyện tôi được bình an. Nguyện tất cả chúng sinh được hạnh phúc." Bắt đầu từ bản thân, sau đó mở rộng đến người thân, người trung tính, người khó khăn và cuối cùng là tất cả chúng sinh.',
      resonantBreathing: 'Thực hành Hơi thở Cộng hưởng',
      reminderTitle: 'Nhắc nhở về Giận dữ',
      reminderText: 'Giận dữ như sóng: đến rồi đi. Dừng lại. Thở. Quan sát. Đừng hành động từ giận dữ — hãy hành động từ tỉnh thức.',
      mettaTitle: 'Nghe Công thức Metta',
      mettaText: 'Nguyện cho con được hạnh phúc. Nguyện cho con được an bình. Nguyện cho tất cả chúng sinh được hạnh phúc.',
      listenMetta: '🎧 Phát Metta',
      copyMetta: 'Sao chép',
    },
    teachings: { pageTitle: 'Giáo lý, Pháp Luân và Thực hành', sectionDharmachakra: 'Pháp Luân', sectionTeachings: 'Giáo lý của Đức Phật', sectionPractices: 'Thực hành' },
  },
  ko: {
    nav: {
      home: '홈', chat: '채팅', characters: '인물', episodes: '에피소드',
      teachings: '가르침, 다르마차크라와 수행', theses: '논문', gallery: '갤러리', quiz: '퀴즈',
      community: '커뮤니티', videos: '영상', retreats: '수련회', profile: '프로필',
      about: '소개', contact: '문의', admin: '관리자', donate: '후원',
      blockChat: '채팅', blockLearn: '보리수 아래서', blockFilm: '영화',
    },
    home: {
      heroTitle: '붓다의 지혜 채팅',
      heroSubtitle: 'AI 대화를 통해 붓다의 가르침을 탐구하세요',
      startChat: '채팅 시작', thesisOfDay: '오늘의 논문', readMore: '더 읽기',
      quoteStrip: '"마음이 모든 것이다. 네가 생각하는 것이 네가 되는 것이다." — 붓다',
      featuresTitle: '탐구',
      blockChatTitle: '채팅과 소통',
      blockChatDesc: '붓다, 아난다, 야소다라 및 기타 인물과 대화하세요. 질문하고 생각을 나누세요.',
      blockLearnTitle: '보리수 아래서',
      blockLearnDesc: '붓다의 핵심 가르침, 현대 스승들의 논문, 예비 수련.',
      blockFilmTitle: '영화와 토론',
      blockFilmDesc: '붓다 시리즈 장면, 설명과 함께하는 영상, 핵심 순간 토론.',
    },
    auth: {
      login: '로그인', register: '회원가입', email: '이메일', password: '비밀번호',
      displayName: '표시 이름', loginButton: '로그인', registerButton: '계정 만들기',
      or: '또는', noAccount: '계정이 없으신가요?', hasAccount: '이미 계정이 있으신가요?',
      loggingIn: '로그인 중...', registering: '계정 생성 중...', error: '인증 오류',
    },
    chat: {
      title: '붓다와 채팅', placeholder: '붓다에게 질문하세요...', send: '보내기',
      listen: '듣기', stop: '중지', autoVoice: '자동 음성', typing: '생각 중...',
      chooseCharacter: '인물 선택', newChat: '새 채팅',
    },
    about: {
      title: '소개',
      description: '2013년 텔레비전 시리즈 붓다에 바치는 팬 커뮤니티',
      mission: '우리의 사명은 팬들이 시리즈의 깊은 가르침을 탐구하고, 서로 연결하고, 의미 있는 대화를 나눌 수 있는 커뮤니티를 만드는 것입니다.',
      series: '이 프로젝트는 2013년 텔레비전 시리즈 "붓다"에 대한 헌사이며, 싯다르타 가우타마의 깨달음 여정을 이야기합니다.',
      community: 'AI 기반 인물 채팅, 커뮤니티 토론, 세계 각국의 명상 수련회 정보를 통해 시리즈의 정신을 살리고자 합니다.',
    },
    contact: {
      title: '문의', name: '이름', email: '이메일',
      message: '메시지', send: '보내기', sent: '메시지가 전송되었습니다!',
    },
    admin: {
      translations: '번역 관리', article: '기사', translationsFor: '번역 대상',
      saveAll: '모두 저장', retranslateAll: '모두 재번역', saved: '저장 완료',
    },
    common: {
      loading: '로딩 중...', error: '오류', save: '저장', cancel: '취소',
      delete: '삭제', back: '뒤로', showOriginal: '원문 보기', showTranslation: '번역 보기',
    },
    practice: {
      title: '예비 수련',
      intro: '마음과 자비를 기르기 위한 실천적 단계',
      meditationTitle: '명상 시작하기',
      meditationDesc: '간단한 기법: 매일 5~10분 동안 호흡에 집중합니다. 편안하게 앉아 눈을 감고 각각의 들숨과 날숨을 따릅니다. 마음이 흩어지면 부드럽게 호흡에 주의를 돌립니다.',
      angerTitle: '분노와 함께하기',
      angerDesc: '마음챙김을 실천합니다: 분노가 일어날 때 반응하기 전에 멈추세요. 몸의 감각을 관찰하고, 그곳으로 호흡하고, 행동하지 않고 감정이 지나가도록 허용합니다. 수용은 변화의 첫 번째 단계입니다.',
      compassionTitle: '자비 기르기',
      compassionDesc: '메타(사랑의 친절)를 실천합니다: 조용히 앉아 행복의 기원을 반복합니다 — "제가 행복하길 바랍니다. 제가 평화롭길 바랍니다. 모든 중생이 행복하길 바랍니다." 자신부터 시작하여, 사랑하는 사람, 중립적인 사람, 어려운 사람, 그리고 모든 중생에게 확장합니다.',
      resonantBreathing: '공명 호흡 시도',
      reminderTitle: '분노 상기',
      reminderText: '분노는 파도와 같다: 오고 간다. 멈추라. 호흡하라. 관찰하라. 분노에서 행동하지 말라 — 각성에서 행동하라.',
      mettaTitle: '메타 공식 듣기',
      mettaText: '제가 행복하길 바랍니다. 제가 평화롭길 바랍니다. 모든 중생이 행복하길 바랍니다.',
      listenMetta: '🎧 메타 재생',
      copyMetta: '복사',
    },
    teachings: { pageTitle: '가르침, 다르마차크라와 수행', sectionDharmachakra: '다르마차크라', sectionTeachings: '붓다의 가르침', sectionPractices: '수행' },
  },
  id: {
    nav: {
      home: 'Beranda', chat: 'Obrolan', characters: 'Karakter', episodes: 'Episode',
      teachings: 'Ajaran, Dharmachakra & Praktik', theses: 'Tesis',
      community: 'Komunitas', videos: 'Video', retreats: 'Retret', profile: 'Profil',
      gallery: 'Galeri', quiz: 'Kuis',
      about: 'Tentang', contact: 'Kontak', admin: 'Admin', donate: 'Dukung',
      blockChat: 'Obrolan', blockLearn: 'Di Bawah Pohon Bodhi', blockFilm: 'Film',
    },
    home: {
      heroTitle: 'Obrolan Kebijaksanaan Buddha',
      heroSubtitle: 'Jelajahi ajaran Buddha melalui percakapan AI',
      startChat: 'Mulai Obrolan', thesisOfDay: 'Tesis Hari Ini', readMore: 'Baca Selengkapnya',
      quoteStrip: '"Pikiran adalah segalanya. Apa yang Anda pikirkan, itulah Anda." — Buddha',
      featuresTitle: 'Jelajahi',
      blockChatTitle: 'Obrolan dan Komunikasi',
      blockChatDesc: 'Bicaralah dengan Buddha, Ananda, Yashodhara dan karakter lainnya. Ajukan pertanyaan dan bagikan pikiran Anda.',
      blockLearnTitle: 'Di Bawah Pohon Bodhi',
      blockLearnDesc: 'Ajaran inti Buddha, tesis guru-guru modern, praktik pendahuluan.',
      blockFilmTitle: 'Film dan Diskusi',
      blockFilmDesc: 'Serie Buddha, video Anda dengan penjelasan, diskusi momen-momen kunci.',
    },
    auth: {
      login: 'Masuk', register: 'Daftar', email: 'Email', password: 'Kata Sandi',
      displayName: 'Nama Tampilan', loginButton: 'Masuk', registerButton: 'Buat Akun',
      or: 'atau', noAccount: 'Belum punya akun?', hasAccount: 'Sudah punya akun?',
      loggingIn: 'Masuk...', registering: 'Membuat akun...', error: 'Kesalahan autentikasi',
    },
    chat: {
      title: 'Obrolan dengan Buddha', placeholder: 'Ajukan pertanyaan ke Buddha...', send: 'Kirim',
      listen: 'Dengar', stop: 'Berhenti', autoVoice: 'Suara otomatis', typing: 'Berpikir...',
      chooseCharacter: 'Pilih karakter', newChat: 'Obrolan Baru',
    },
    about: {
      title: 'Tentang Proyek',
      description: 'Komunitas penggemar yang didedikasikan untuk serial TV Buddha tahun 2013',
      mission: 'Misi kami adalah menciptakan komunitas di mana penggemar dapat menjelajahi ajaran mendalam dari serial, terhubung satu sama lain, dan terlibat dalam percakapan bermakna.',
      series: 'Proyek ini adalah penghormatan kepada serial TV "Buddha" tahun 2013, yang menceritakan perjalanan Siddhartha Gautama menuju pencerahan.',
      community: 'Melalui obrolan karakter AI, diskusi komunitas, dan informasi tentang retret meditasi di seluruh dunia, kami bertujuan untuk menghidupkan semangat serial.',
    },
    contact: {
      title: 'Hubungi Kami', name: 'Nama', email: 'Email',
      message: 'Pesan', send: 'Kirim', sent: 'Pesan terkirim!',
    },
    admin: {
      translations: 'Terjemahan', article: 'Artikel', translationsFor: 'Terjemahan untuk',
      saveAll: 'Simpan semua', retranslateAll: 'Terjemahkan ulang', saved: 'Tersimpan',
    },
    common: {
      loading: 'Memuat...', error: 'Kesalahan', save: 'Simpan', cancel: 'Batal',
      delete: 'Hapus', back: 'Kembali', showOriginal: 'Tampilkan asli', showTranslation: 'Tampilkan terjemahan',
    },
    practice: {
      title: 'Praktik Pendahuluan',
      intro: 'Langkah praktis untuk mulai bekerja dengan pikiran dan mengembangkan belas kasih',
      meditationTitle: 'Cara mulai bermeditasi',
      meditationDesc: 'Teknik sederhana: fokus pada napas Anda selama 5–10 menit sehari. Duduklah dengan nyaman, tutup mata, dan ikuti setiap tarikan dan hembusan napas. Ketika pikiran melayang, kembalikan perhatian dengan lembut ke napas.',
      angerTitle: 'Bekerja dengan amarah',
      angerDesc: 'Praktikkan kesadaran penuh: ketika amarah muncul, berhenti sebelum bereaksi. Amati sensasi di tubuh, bernapas ke dalamnya, dan biarkan emosi berlalu tanpa bertindak. Penerimaan adalah langkah pertama menuju transformasi.',
      compassionTitle: 'Mengembangkan belas kasih',
      compassionDesc: 'Praktikkan mettā (cinta kasih): duduklah dalam keheningan dan ulangi ungkapan kesejahteraan — "Semoga saya bahagia. Semoga saya damai. Semoga semua makhluk bahagia." Mulailah dari diri sendiri, lalu luaskan kepada orang terkasih, orang netral, orang sulit, dan akhirnya semua makhluk.',
      resonantBreathing: 'Coba Pernafasan Resonan',
      reminderTitle: 'Pengingat Kemarahan',
      reminderText: 'Kemarahan seperti ombak: datang dan pergi. Berhenti. Bernapas. Amati. Jangan bertindak dari kemarahan — bertindaklah dari kesadaran.',
      mettaTitle: 'Dengarkan Formula Metta',
      mettaText: 'Semoga saya bahagia. Semoga saya damai. Semoga semua makhluk bahagia.',
      listenMetta: '🎧 Putar Metta',
      copyMetta: 'Salin',
    },
    teachings: { pageTitle: 'Ajaran, Dharmachakra & Praktik', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Ajaran Buddha', sectionPractices: 'Praktik' },
  },
  ms: {
    nav: {
      home: 'Laman Utama', chat: 'Sembang', characters: 'Watak', episodes: 'Episod',
      teachings: 'Ajaran, Dharmachakra & Amalan', theses: 'Tesis',
      community: 'Komuniti', videos: 'Video', retreats: 'Retreat', profile: 'Profil',
      gallery: 'Galeri', quiz: 'Kuiz',
      about: 'Tentang', contact: 'Hubungi', admin: 'Admin', donate: 'Sokong',
      blockChat: 'Sembang', blockLearn: 'Di Bawah Pokok Bodhi', blockFilm: 'Filem',
    },
    home: {
      heroTitle: 'Sembang Kebijaksanaan Buddha',
      heroSubtitle: 'Terokai ajaran Buddha melalui perbualan AI',
      startChat: 'Mulakan Sembang', thesisOfDay: 'Tesis Hari Ini', readMore: 'Baca Lagi',
      quoteStrip: '"Fikiran adalah segala-galanya. Apa yang anda fikirkan, itulah anda." — Buddha',
      featuresTitle: 'Terokai',
      blockChatTitle: 'Sembang dan Komunikasi',
      blockChatDesc: 'Bercakap dengan Buddha, Ananda, Yashodhara dan watak lain. Tanya soalan dan kongsi fikiran anda.',
      blockLearnTitle: 'Di Bawah Pokok Bodhi',
      blockLearnDesc: 'Ajaran teras Buddha, tesis guru moden, amalan awal.',
      blockFilmTitle: 'Filem dan Perbincangan',
      blockFilmDesc: 'Siri Buddha, video anda dengan penjelasan, perbincangan momen penting.',
    },
    auth: {
      login: 'Log masuk', register: 'Daftar', email: 'E-mel', password: 'Kata laluan',
      displayName: 'Nama Paparan', loginButton: 'Log Masuk', registerButton: 'Cipta Akaun',
      or: 'atau', noAccount: 'Tiada akaun?', hasAccount: 'Sudah ada akaun?',
      loggingIn: 'Log masuk...', registering: 'Mencipta akaun...', error: 'Ralat pengesahan',
    },
    chat: {
      title: 'Sembang dengan Buddha', placeholder: 'Tanya soalan kepada Buddha...', send: 'Hantar',
      listen: 'Dengar', stop: 'Berhenti', autoVoice: 'Suara automatik', typing: 'Berpikir...',
      chooseCharacter: 'Pilih watak', newChat: 'Sembang Baru',
    },
    about: {
      title: 'Tentang Proyek',
      description: 'Komuniti peminat yang dikhaskan untuk siri TV Buddha tahun 2013',
      mission: 'Misi kami adalah mencipta komuniti di mana peminat dapat meneroka ajaran mendalam dari siri, berhubung antara satu sama lain, dan terlibat dalam perbualan bermakna.',
      series: 'Projek ini adalah penghormatan kepada siri TV "Buddha" tahun 2013, yang menceritakan perjalanan Siddhartha Gautama ke arah pencerahan.',
      community: 'Melalui sembang watak AI, perbincangan komuniti, dan maklumat tentang retreat meditasi di seluruh dunia, kami berhasrat untuk menghidupkan semangat siri.',
    },
    contact: {
      title: 'Hubungi Kami', name: 'Nama', email: 'E-mel',
      message: 'Mesej', send: 'Hantar', sent: 'Mesej dihantar!',
    },
    admin: {
      translations: 'Terjemahan', article: 'Artikel', translationsFor: 'Terjemahan untuk',
      saveAll: 'Simpan semua', retranslateAll: 'Terjemah semula', saved: 'Disimpan',
    },
    common: {
      loading: 'Memuatkan...', error: 'Ralat', save: 'Simpan', cancel: 'Batal',
      delete: 'Padam', back: 'Kembali', showOriginal: 'Tunjuk asal', showTranslation: 'Tunjuk terjemahan',
    },
    practice: {
      title: 'Amalan Awalan',
      intro: 'Langkah praktikal untuk mula bekerja dengan minda dan mengembangkan belas kasihan',
      meditationTitle: 'Cara mula bermeditasi',
      meditationDesc: 'Teknik mudah: fokus pada pernafasan anda selama 5–10 minit sehari. Duduklah dengan selesa, tutup mata, dan ikuti setiap tarikan dan hembusan nafas. Apabila minda melayang, bawa perhatian kembali ke nafas dengan lembut.',
      angerTitle: 'Bekerja dengan kemarahan',
      angerDesc: 'Amalkan kesedaran penuh: apabila kemarahan muncul, berhenti sebelum bertindak balas. Perhatikan sensasi dalam badan, nafas ke dalamnya, dan biarkan emosi berlalu tanpa bertindak. Penerimaan adalah langkah pertama menuju transformasi.',
      compassionTitle: 'Membangunkan belas kasihan',
      compassionDesc: 'Amalkan mettā (kasih sayang): duduk dalam keheningan dan ulang ungkapan kesejahteraan — "Semoga saya gembira. Semoga saya aman. Semoga semua makhluk gembira." Mulakan dengan diri sendiri, kemudian luaskan kepada orang tersayang, orang neutral, orang sukar, dan akhirnya semua makhluk.',
      resonantBreathing: 'Cuba Pernafasan Resonan',
      reminderTitle: 'Peringatan Kemarahan',
      reminderText: 'Kemarahan seperti ombak: datang dan pergi. Berhenti. Bernafas. Perhati. Jangan bertindak dari kemarahan — bertindaklah dari kesedaran.',
      mettaTitle: 'Dengar Formula Metta',
      mettaText: 'Semoga saya gembira. Semoga saya aman. Semoga semua makhluk gembira.',
      listenMetta: '🎧 Main Metta',
      copyMetta: 'Salin',
    },
    teachings: { pageTitle: 'Ajaran, Dharmachakra & Amalan', sectionDharmachakra: 'Dharmachakra', sectionTeachings: 'Ajaran Buddha', sectionPractices: 'Amalan' },
  },
  si: {
    nav: {
      home: 'මුල් පිටුව', chat: 'කතාබහ', characters: 'චරිත', episodes: 'කොටස්',
      teachings: 'උපදේශ, ධර්මචක්‍ර සහ ප්‍රායෝගික', theses: 'න්‍යායන්', gallery: 'ගැලරිය', quiz: 'ප්‍රශ්නාවලිය',
      community: 'ප්‍රජාව', videos: 'වීඩියෝ', retreats: 'ධ්‍යාන මධ්‍යස්ථාන', profile: 'පැතිකඩ',
      about: 'පිළිබඳව', contact: 'සම්බන්ධ වන්න', admin: 'පරිපාලක', donate: 'සහාය වන්න',
      blockChat: 'කතාබහ', blockLearn: 'බෝධි වෘක්ෂය යටතේ', blockFilm: 'චිත්‍රපටය',
    },
    home: {
      heroTitle: 'බුද්ධ ප්‍රඥා කතාබහ',
      heroSubtitle: 'AI සංවාද හරහා බුදුන් වහන්සේගේ ඉගැන්වීම් ගවේෂණය කරන්න',
      startChat: 'කතාබහ ආරම්භ කරන්න', thesisOfDay: 'අද දින න්‍යාය', readMore: 'තව කියවන්න',
      quoteStrip: '"මනස සියල්ලයි. ඔබ සිතන දෙය ඔබ වෙනවා." — බුදුන් වහන්සේ',
      featuresTitle: 'ගවේෂණය කරන්න',
      blockChatTitle: 'කතාබහ සහ සන්නිවේදනය',
      blockChatDesc: 'බුදුන් වහන්සේ, ආනන්ද, යශෝධරා සහ අනෙකුත් චරිත සමඟ කතා කරන්න.',
      blockLearnTitle: 'බෝධි වෘක්ෂය යටතේ',
      blockLearnDesc: 'බුදුන් වහන්සේගේ මූලික ඉගැන්වීම්, නූතන ගුරුවරුන්ගේ න්‍යායන්.',
      blockFilmTitle: 'චිත්‍රපටය සහ සාකච්ඡාව',
      blockFilmDesc: 'බුද්ධ මාලාවේ දර්ශන, ඔබේ වීඩියෝ සහ පැහැදිලි කිරීම්.',
    },
    auth: {
      login: 'පිවිසෙන්න', register: 'ලියාපදිංචි වන්න', email: 'විද්‍යුත් තැපෑල', password: 'මුරපදය',
      displayName: 'නම', loginButton: 'පිවිසෙන්න', registerButton: 'ගිණුමක් සාදන්න',
      or: 'හෝ', noAccount: 'ගිණුමක් නැද්ද?', hasAccount: 'දැනටමත් ගිණුමක් තිබේද?',
      loggingIn: 'පිවිසෙමින්...', registering: 'ගිණුම සාදමින්...', error: 'සත්‍යාපන දෝෂයකි',
    },
    chat: {
      title: 'බුදුන් වහන්සේ සමඟ කතා කරන්න', placeholder: 'බුදුන් වහන්සේට ප්‍රශ්නයක් අසන්න...', send: 'යවන්න',
      listen: 'ඇසුම', stop: 'නවත්වන්න', autoVoice: 'ස්වයංක්‍රීය හඬ', typing: 'සිතමින්...',
      chooseCharacter: 'චරිතයක් තෝරන්න', newChat: 'නව කතාබහක්',
    },
    about: {
      title: 'ප්‍රකාශය ගැන',
      description: '2013 බුද්ධ රූපවාහිනී මාලාවට කැපවූ රසික ප්‍රජාවකි',
      mission: 'අපගේ මෙහෙවර වන්නේ රසිකයින්ට ගැඹුරු ඉගැන්වීම් ගවේෂණය කළ හැකි, එකිනෙකා සමඟ සම්බන්ධ විය හැකි සහ අර්ථවත් සංවාදවල නිරත විය හැකි ප්‍රජාවක් නිර්මාණය කිරීමයි.',
      series: 'මෙම ව්‍යාපෘතිය 2013 බුද්ධ රූපවාහිනී මාලාවට කළ ගරු කිරීමකි.',
      community: 'AI චරිත කතාබහ, ප්‍රජා සාකච්ඡා සහ ලොව පුරා ධ්‍යාන මධ්‍යස්ථාන පිළිබඳ තොරතුරු හරහා මාලාවේ ආත්මය ජීවමාන කිරීමට අපි උත්සාහ කරමු.',
    },
    contact: {
      title: 'සම්බන්ධ වන්න', name: 'නම', email: 'විද්‍යුත් තැපෑල',
      message: 'පණිවිඩය', send: 'යවන්න', sent: 'පණිවිඩය යැවීය!',
    },
    admin: {
      translations: 'පරිවර්තන', article: 'ලිපිය', translationsFor: 'සඳහා පරිවර්තන',
      saveAll: 'සියල්ල සුරකින්න', retranslateAll: 'නැවත පරිවර්තනය කරන්න', saved: 'සුරැකීය',
    },
    common: {
      loading: 'පූරණය වෙමින්...', error: 'දෝෂයකි', save: 'සුරකින්න', cancel: 'අවලංගු කරන්න',
      delete: 'මකන්න', back: 'ආපසු', showOriginal: 'මුල් පෙන්වන්න', showTranslation: 'පරිවර්තනය පෙන්වන්න',
    },
    practice: {
      title: 'මූලික ප්‍රායෝගිකත්වය',
      intro: 'සිත සමඟ කටයුතු කිරීමට සහ කරුණාව වර්ධනය කිරීමට ප්‍රායෝගික පියවර',
      meditationTitle: 'ධ්‍යානය කෙසේ ආරම්භ කරන්න',
      meditationDesc: 'සරල ක්‍රමයක්: දිනකට මිනිත්තු 5–10ක් ඔබේ හුස්ම මත අවධානය යොමු කරන්න. සුවපහසුවට හිඳ, ඇස් වසා, සෑම හුස්මක් සහ හුස්මක් අනුගමනය කරන්න. සිත විසිරී යන විට, මෘදුවට අවධානය හුස්ම වෙත ආපසු ගෙන එන්න.',
      angerTitle: 'කෝපය සමඟ වැඩ කිරීම',
      angerDesc: 'සිහිකල්පනාව පුහුණු කරන්න: කෝපය මතු වූ විට, ප්‍රතිචාර දැක්වීමට පෙර නවත්වන්න. ශරීරයේ හැඟීම නිරීක්ෂණය කර, එය තුළට හුස්ම ගන්න, ක්‍රියා නොකර ආවේගය ගමන් කිරීමට ඉඩ දෙන්න. පිළිගැනීම පරිවර්තනයට පළමු පියවරයි.',
      compassionTitle: 'කරුණාව වර්ධනය කිරීම',
      compassionDesc: 'මෙත්තා (ප්‍රේම-කරුණාව) පුහුණු කරන්න: නිහඬව හිඳ, සුව පැතුම් යළි යළි කියන්න — "මම සතුටින් සිටින්නම්. මම සාමකාමී වන්නම්. සියලු සත්ත්වයෝ සතුටින් සිටින්නෝය." ඔබේ තමාගෙන් ආරම්භ කරන්න, ඉන්පසු ආදරණීයයන්ට, මධ්‍යස්ථ පුද්ගලයින්ට, අපහසු පුද්ගලයින්ට සහ අවසානයේ සියලු සත්ත්වයන්ට පුළුල් කරන්න.',
      resonantBreathing: 'අනුනාද හුස්ම අත්හදා බලන්න',
      reminderTitle: 'කෝපය මතක් කිරීම',
      reminderText: 'කෝපය රැළි වැනිය: එය එනවා, යනවා. නතර වන්න. හුස්ම ගන්න. නිරීක්ෂණය කරන්න. කෝපයෙන් ක්‍රියා නොකරන්න — දැනුවත්භාවයෙන් ක්‍රියා කරන්න.',
      mettaTitle: 'මෙත්තා සූත්‍රය අසන්න',
      mettaText: 'මම සතුටින් සිටිමි. මම සාමකාමීව සිටිමි. සියලු සත්ත්වයෝ සතුටින් සිටිත්වා.',
      listenMetta: '🎧 මෙත්තා අසන්න',
      copyMetta: 'පිටපත් කරන්න',
    },
    teachings: { pageTitle: 'ධර්මචක්‍ර උපදේශ සහ ප්‍රායෝගික', sectionDharmachakra: 'ධර්මචක්‍රය', sectionTeachings: 'බුදුන්ගේ උපදේශ', sectionPractices: 'ප්‍රායෝගික' },
  },
  my: {
    nav: {
      home: 'ပင်မစာမျက်နှာ', chat: 'စကားပြော', characters: 'ဇာတ်ကောင်', episodes: 'ဇာတ်လမ်း',
      teachings: 'သင်ကြားမှုများ ဓမ္မစကြာနှင့် အားထုတ်မှု', theses: 'စာတမ်းများ', gallery: 'ပုံတန်း', quiz: 'မေးခွန်း',
      community: 'လူမှုအသိုက်', videos: 'ဗီဒီယို', retreats: 'တရားအားထုတ်ရာ', profile: 'ကိုယ်ရေး',
      about: 'အကြောင်းအရာ', contact: 'ဆက်သွယ်ရန်', admin: 'စီမံခန့်ခွဲသူ', donate: 'ထောက်ပံ့',
      blockChat: 'စကားပြော', blockLearn: 'ဘုရားသစ်ပင်အောက်တွင်', blockFilm: 'ရုပ်ရှင်',
    },
    home: {
      heroTitle: 'ဗုဒ္ဓ၏ပညာစကားပြော',
      heroSubtitle: 'AI ဖြင့် ဗုဒ္ဓ၏သွန်သင်ချက်များကို လေ့လာပါ',
      startChat: 'စကားပြောစတင်ပါ', thesisOfDay: 'ယနေ့၏စာတမ်း', readMore: 'ပိုဖတ်ပါ',
      quoteStrip: '"စိတ်သည် အလုံးစုံဖြစ်သည်။ သင်ဘာစဉ်းစားသည်ဖြစ်၍ သင်ဖြစ်လာသည်။" — ဗုဒ္ဓ',
      featuresTitle: 'လေ့လာပါ',
      blockChatTitle: 'စကားပြောနှင့် ဆက်သွယ်ရေး',
      blockChatDesc: 'ဗုဒ္ဓ၊ အာနန္ဒာ၊ ရာဇုံဓရာနှင့် အခြားဇာတ်ကောင်များနှင့် စကားပြောပါ။',
      blockLearnTitle: 'ဘုရားသစ်ပင်အောက်တွင်',
      blockLearnDesc: 'ဗုဒ္ဓ၏အဓိကသွန်သင်ချက်များ၊ ခေတ်ပေါ�်ဆရာတော်များ၏စာတမ်းများ။',
      blockFilmTitle: 'ရုပ်ရှင်နှင့် ဆွေးနွေးပွဲ',
      blockFilmDesc: 'ဗုဒ္ဓဇာတ်လမ်းတွဲမှ ဇာတ်ကွက်များ၊ သင့်ဗီဒီယိုများနှင့် ရှင်းလင်းချက်များ။',
    },
    auth: {
      login: 'ဝင်ရောက်', register: 'စာရင်းသွင်း', email: 'အီးမေးလ်', password: 'စကားဝှက်',
      displayName: 'နာမည်', loginButton: 'ဝင်ရောက်', registerButton: 'အကောင့်ဖန်တီး',
      or: 'သို့မဟုတ်', noAccount: 'အကောင့်မရှိဘူးလား?', hasAccount: 'အကောင့်ရှိပြီးသားလား?',
      loggingIn: 'ဝင်နေသည်...', registering: 'အကောင့်ဖန်တီးနေသည်...', error: 'အတည်ပြုခြင်းအမှား',
    },
    chat: {
      title: 'ဗုဒ္ဓနှင့် စကားပြောပါ', placeholder: 'ဗုဒ္ဓအား မေးခွန်းတစ်ခုမေးပါ...', send: 'ပို့ဆောင်ရန်',
      listen: 'နားထောင်', stop: 'ရပ်တန့်', autoVoice: 'အလိုအလျောက်အသံ', typing: 'စဉ်းစားနေသည်...',
      chooseCharacter: 'ဇာတ်ကောင်ရွေးပါ', newChat: 'အသစ်စကားပြောပါ',
    },
    about: {
      title: 'စီမံကိန်းအကြောင်း',
      description: '2013 ဗုဒ္ဓရုပ်သွင်းဇာတ်လမ်းတွဲကို လှူဒါန်းထားသော အရောင်သည်အသိုက်',
      mission: 'ကျွန်ုပ်တို့၏မစ်ရှင်မှာ အရောင်သည်များအား နက်နဲသောသွန်သင်ချက်များကို လေ့လာနိုင်ပြီး အဓိပ္ပာယ်ရှိသော စကားပြောဆိုမှုများ ပြုလုပ်နိုင်သည့် လူမှုအသိုက်တစ်ခု ဖန်တီးရန်ဖြစ်သည်။',
      series: 'ဤစီမံကိန်းသည် 2013 ဗုဒ္ဓရုပ်သွင်းဇာတ်လမ်းတွဲကို ဂုဏ်ပြုခြင်းဖြစ်သည်။',
      community: 'AI ဇာတ်ကောင်စကားပြောဆိုမှု၊ လူမှုအသိုက်ဆွေးနွေးပွဲများနှင့် ကမ္ဘာတစ်ဝိုက်မှ တရားအားထုတ်ရာ အချက်အလက်များဖြင့် ဇာတ်လမ်းတွဲ၏ စိတ်ဓာတ်ကို ရှင်သန်စေရန် ကြိုးပမ်းပါသည်။',
    },
    contact: {
      title: 'ဆက်သွယ်ရန်', name: 'နာမည်', email: 'အီးမေးလ်',
      message: 'မက်ဆေ့ချ်', send: 'ပို့ဆောင်ရန်', sent: 'မက်ဆေ့ချ်ပို့ပြီးပါပြီ!',
    },
    admin: {
      translations: 'ဘာသာပြန်ခြင်း', article: 'ဆောင်းပါး', translationsFor: 'အတွက် ဘာသာပြန်ခြင်း',
      saveAll: 'အားလုံးသိမ်းဆည်းပါ', retranslateAll: 'အားလုံးပြန်ဘာသာပြန်ပါ', saved: 'သိမ်းဆည်းပြီးပါပြီ',
    },
    common: {
      loading: 'ဖွင့်နေသည်...', error: 'အမှား', save: 'သိမ်းဆည်းရန်', cancel: 'ပယ်ဖျက်ရန်',
      delete: 'ဖျက်ရန်', back: 'နောက်သို့', showOriginal: 'မူရင်းပြရန်', showTranslation: 'ဘာသာပြန်ပြရန်',
    },
    practice: {
      title: 'အစပြုလေ့ကျင့်ခြင်း',
      intro: 'စိတ်နှင့် လက်တွဲလုပ်ဆောင်ရန်နှင့် သနားကရုဏာ ဖွံ့ဖြိုးစေရန် အသုံးဝင်သော အဆင့်များ',
      meditationTitle: 'ဘယ်လို တရားထိုင်မလဲ',
      meditationDesc: 'ရိုးရှင်းသော နည်းလမ်း — တစ်နေ့လျှင် မိနစ် ၅-၁၀ မိနစ် အသက်ရှူနှုန်းကို အာရုံစိုက်ပါ။ သက်သောင့်သက်သာ ထိုင်ပြီး မျက်စိမှိတ်ကာ အသက်ရှူဝင်ရှိုက်တိုင်းကို လိုက်နာပါ။ စိတ်ပျံ့လွင့်သွားသောအခါ အသက်ရှူနှုန်းထံသို့ နူးညံ့စွာ ပြန်လည်ဦးတည်ပါ။',
      angerTitle: 'ဒေါသနှင့် ဆက်ဆံခြင်း',
      angerDesc: 'သတိရှိမှုကို လေ့ကျင့်ပါ — ဒေါသထွက်လာသောအခါ တုံ့ပြန်မှုမပြုမီ ရပ်တန့်ပါ။ ကိုယ်ခန္ဓာရှိ ခံစားချက်ကို စောင့်ကြည့်ပြီး အသက်ရှူဝင်ပါ၊ အပြုအမူမပြုဘဲ စိတ်ခံစားမှု ဖြတ်သန်းခွင့်ပြုပါ။ လက်ခံခြင်းသည် ပြောင်းလဲမှု၏ ပထမဆုံး အဆင့်ဖြစ်သည်။',
      compassionTitle: 'သနားကရုဏာ ဖွံ့ဖြိုးခြင်း',
      compassionDesc: 'မေတ္တာ (ချစ်ခြင်းမေတ္တာ) ကို လေ့ကျင့်ပါ — ငြိမ်သက်စွာ ထိုင်ပြီး ကောင်းကျိုးဆန္ဒများကို ထပ်ခါတလဲလဲ ပြောပါ — "ကျွန်ုပ် ပျော်ရွှင်ပါစေ။ ကျွန်ုပ် ငြိမ်ချမ်းပါစေ။ သတ္တဝါအားလုံး ပျော်ရွှင်ကြပါစေ။" ကိုယ်တိုင်မှ စတင်ပြီး ချစ်ခင်ရသူ၊ ကြားနေပုဂ္ဂိုလ်၊ ခက်ခဲသည့် ပုဂ္ဂိုလ်နှင့် နောက်ဆုံးတွင် သတ္တဝါအားလုံးထံ ချဲ့ကျယ်ပါ။',
      resonantBreathing: 'တုန်ခါမှု အသက်ရှူမှု စမ်းကြည့်ပါ',
      reminderTitle: 'ဒေါသ သတိပေးချက်',
      reminderText: 'ဒေါသသည် လှိုင်းကဲ့သို့ဖြစ်သည် — လာပြီးသွားသည်။ ရပ်ပါ။ အသက်ရှူပါ။ ကြည့်ပါ။ ဒေါသဖြင့် မလုပ်ပါနဲ့ — သတိဖြင့် လုပ်ပါ။',
      mettaTitle: 'မေတ္တာ နားထောင်ပါ',
      mettaText: 'ငါ ပျော်ရွှင်ပါစေ။ ငါ ငြိမ်ချမ်းပါစေ။ သတ္တဝါအားလုံး ပျော်ရွှင်ကြပါစေ။',
      listenMetta: '🎧 မေတ္တာ ဖွင့်ပါ',
      copyMetta: 'ကူးယူပါ',
    },
    teachings: { pageTitle: 'သင်ကြားမှုများ ဓမ္မစကြာနှင့် အားထုတ်မှုများ', sectionDharmachakra: 'ဓမ္မစကြာ', sectionTeachings: 'ဘုရားရှင်၏ သင်ကြားမှုများ', sectionPractices: 'အားထုတ်မှုများ' },
  },
  ne: {
    nav: {
      home: 'गृहपृष्ठ', chat: 'च्याट', characters: 'पात्र', episodes: 'एपिसोड',
      teachings: 'शिक्षाहरू, धर्मचक्र र अभ्यास', theses: 'थीसिस', gallery: 'ग्यालरी', quiz: 'प्रश्नोत्तरी',
      community: 'समुदाय', videos: 'भिडियो', retreats: 'ध्यान केन्द्र', profile: 'प्रोफाइल',
      about: 'बारेमा', contact: 'सम्पर्क', admin: 'प्रशासक', donate: 'सहयोग',
      blockChat: 'च्याट', blockLearn: 'बोधिवृक्ष तल', blockFilm: 'चलचित्र',
    },
    home: {
      heroTitle: 'बुद्धको प्रज्ञा च्याट',
      heroSubtitle: 'AI वार्तालाप मार्फत बुद्धका उपदेशहरू अन्वेषण गर्नुहोस्',
      startChat: 'च्याट सुरु गर्नुहोस्', thesisOfDay: 'आजको थीसिस', readMore: 'थप पढ्नुहोस्',
      quoteStrip: '"मन नै सबै कुरा हो। तपाईंले के सोच्नुहुन्छ, त्यही बन्नुहुन्छ।" — बुद्ध',
      featuresTitle: 'अन्वेषण गर्नुहोस्',
      blockChatTitle: 'च्याट र सञ्चार',
      blockChatDesc: 'बुद्ध, आनन्द, यशोधरा र अन्य पात्रहरूसँग कुरा गर्नुहोस्।',
      blockLearnTitle: 'बोधिवृक्ष तल',
      blockLearnDesc: 'बुद्धका मूल उपदेश, आधुनिक शिक्षकहरूका थीसिस।',
      blockFilmTitle: 'चलचित्र र छलफल',
      blockFilmDesc: 'बुद्ध श्रृंखलाका दृश्य, तपाईंका भिडियो र व्याख्या।',
    },
    auth: {
      login: 'लगइन', register: 'दर्ता', email: 'इमेल', password: 'पासवर्ड',
      displayName: 'नाम', loginButton: 'लगइन', registerButton: 'खाता बनाउनुहोस्',
      or: 'वा', noAccount: 'खाता छैन?', hasAccount: 'पहिले नै खाता छ?',
      loggingIn: 'लगइन हुँदै...', registering: 'खाता बनाउँदै...', error: 'प्रमाणीकरण त्रुटि',
    },
    chat: {
      title: 'बुद्धसँग च्याट गर्नुहोस्', placeholder: 'बुद्धलाई प्रश्न सोध्नुहोस्...', send: 'पठाउनुहोस्',
      listen: 'सुन्नुहोस्', stop: 'रोक्नुहोस्', autoVoice: 'स्वचालित आवाज', typing: 'सोच्दै...',
      chooseCharacter: 'पात्र छान्नुहोस्', newChat: 'नयाँ च्याट',
    },
    about: {
      title: 'परियोजना बारेमा',
      description: '2013 को बुद्ध टेलिभिजन श्रृंखलालाई समर्पित प्रशंसक समुदाय',
      mission: 'हाम्रो मिशन एउटा त्यस्तो समुदाय बनाउनु हो जहाँ प्रशंसकहरूले गहन उपदेशहरू अन्वेषण गर्न सक्छन्।',
      series: 'यो परियोजना 2013 को बुद्ध टेलिभिजन श्रृंखलालाई श्रद्धाञ्जली हो।',
      community: 'AI पात्र च्याट, समुदाय छलफल र ध्यान केन्द्रहरूको जानकारी मार्फत श्रृंखलाको भावनालाई जीवन्त बनाउने लक्ष्य राख्छौं।',
    },
    contact: {
      title: 'सम्पर्क गर्नुहोस्', name: 'नाम', email: 'इमेल',
      message: 'सन्देश', send: 'पठाउनुहोस्', sent: 'सन्देश पठाइयो!',
    },
    admin: {
      translations: 'अनुवाद', article: 'लेख', translationsFor: 'का लागि अनुवाद',
      saveAll: 'सबै सेभ गर्नुहोस्', retranslateAll: 'सबै पुनरावृत्ति गर्नुहोस्', saved: 'सेभ भयो',
    },
    common: {
      loading: 'लोड हुँदै...', error: 'त्रुटि', save: 'सेभ', cancel: 'रद्द',
      delete: 'मेटाउनुहोस्', back: 'फिर्ता', showOriginal: 'मूल देखाउनुहोस्', showTranslation: 'अनुवाद देखाउनुहोस्',
    },
    practice: {
      title: 'प्रारम्भिक अभ्यास',
      intro: 'मनसँग काम गर्न र करुणा विकास गर्न व्यावहारिक कदमहरू',
      meditationTitle: 'ध्यान कसरी सुरु गर्ने',
      meditationDesc: 'सरल प्रविधि: दैनिक ५–१० मिनेट आफ्नो श्वासमा ध्यान केन्द्रित गर्नुहोस्। आरामदायी बस्नुहोस्, आँखा बन्द गर्नुहोस्, र प्रत्येक श्वास आउने र जानेमा अनुसरण गर्नुहोस्। मन भटक्दा, श्वासमा सहजै ध्यान फिर्ता ल्याउनुहोस्।',
      angerTitle: 'रिससँग कसरी काम गर्ने',
      angerDesc: 'सचेतना अभ्यास गर्नुहोस्: रिस उठ्दा प्रतिक्रिया गर्नुअघि रोक्नुहोस्। शरीरमा भएको अनुभूति अवलोकन गर्नुहोस्, त्यसमा श्वास लिनुहोस्, र कार्य नगरी भावना बगिन दिनुहोस्। स्वीकार गर्नु परिवर्तनको पहिलो कदम हो।',
      compassionTitle: 'करुणा विकास गर्ने',
      compassionDesc: 'मेट्ता (प्रेम-करुणा) अभ्यास गर्नुहोस्: शान्त बस्नुहोस् र कल्याणका वाक्यहरू दोहोर्याउनुहोस् — "म सुखी होऊँ। म शान्त होऊँ। सबै प्राणी सुखी होऊन्।" आफ्नो आफूबाट सुरु गर्नुहोस्, त्यसपछि प्रियजन, तटस्थ मानिस, कठिन मानिस र अन्तमा सबै प्राणीमा विस्तार गर्नुहोस्।',
      resonantBreathing: 'अनुनाद श्वास प्रयास गर्नुहोस्',
      reminderTitle: 'रिस याद गराउने',
      reminderText: 'रिस ढुंगाको लहर जस्तो हो: आउँछ र जान्छ। रोक्नुहोस्। श्वास फेर्नुहोस्। हेर्नुहोस्। रिसबाट काम नगर्नुहोस् — सचेतनाबाट काम गर्नुहोस्।',
      mettaTitle: 'मेट्ता सूत्र सुन्नुहोस्',
      mettaText: 'म सुखी होऊँ। म शान्त होऊँ। सबै प्राणी सुखी होऊन्।',
      listenMetta: '🎧 मेट्ता बजाउनुहोस्',
      copyMetta: 'प्रतिलिपि गर्नुहोस्',
    },
    teachings: { pageTitle: 'धर्मचक्र शिक्षाहरू र अभ्यासहरू', sectionDharmachakra: 'धर्मचक्र', sectionTeachings: 'बुद्धका शिक्षाहरू', sectionPractices: 'अभ्यासहरू' },
  },
  bo: {
    nav: {
      home: 'གཙོ་ངོས།', chat: 'སྐད་ཆ།', characters: 'སྒྲུང་མི།', episodes: 'ལེ་ཚན།',
      teachings: 'སྟོན་པ། ཆོས་ཀྱི་འཁོར་ལོ། སྒོམ།', theses: 'དཔྱད་རྩོམ།', gallery: 'པར་ཁུལ།', quiz: 'དྲི་བ།',
      community: 'ཚོགས་པ།', videos: 'བརྙན་འཕྲིན།', retreats: 'སྒོམ་གནས།', profile: 'ངོ་སྤྲོད།',
      about: 'སྐོར།', contact: 'འབྲེལ་བ།', admin: 'དོ་དམ།', donate: 'རོགས་རམ།',
      blockChat: 'སྐད་ཆ།', blockLearn: 'བྱང་ཆུབ་ཤིང་འོག', blockFilm: 'གློག་བརྙན།',
    },
    home: {
      heroTitle: 'བཅོམ་ལྡན་འདས་ཀྱི་ཤེས་རབ་སྐད་ཆ།',
      heroSubtitle: 'AI སྐད་ཆ་བརྒྱུད་དེ་བཅོམ་ལྡན་འདས་ཀྱི་སྟོན་པ་འཚོལ་ཞིབ།',
      startChat: 'སྐད་ཆ་འགོ་བརྩམ།', thesisOfDay: 'དེ་རིང་གི་དཔྱད་རྩོམ།', readMore: 'མུ་མཐུད་དུ་ཀློག',
      quoteStrip: '"ཡིད་ནི་ཐམས་ཅད་ཡིན། ཁྱེད་ཀྱིས་སེམས་པ་དེ་ཁྱེད་ཡིན།" — བཅོམ་ལྡན་འདས།',
      featuresTitle: 'འཚོལ་ཞིབ།',
      blockChatTitle: 'སྐད་ཆ་དང་འབྲེལ་བ།',
      blockChatDesc: 'བཅོམ་ལྡན་འདས། ཨཱ་ནན། ཡཱ་ཤོ་དྷ་ར། དང་སྒྲུང་མི་གཞན་དག་དང་སྐད་ཆ་བྱེད།',
      blockLearnTitle: 'བྱང་ཆུབ་ཤིང་འོག',
      blockLearnDesc: 'བཅོམ་ལྡན་འདས་ཀྱི་གནད་གཙོ་བོའི་སྟོན་པ། དེང་སྐབས་ཀྱི་སྟོན་པ་ཚོའི་དཔྱད་རྩོམ།',
      blockFilmTitle: 'གློག་བརྙན་དང་སྐད་ཆ།',
      blockFilmDesc: 'བཅོམ་ལྡན་འདས་ཀྱི་སྒྲུང་ལྗོངས་ཀྱི་ལྟ་ཚུལ། ཁྱེད་ཀྱི་བརྙན་དང་འགྲེལ་བཤད།',
    },
    auth: {
      login: 'ནང་འཛུལ།', register: 'ཐོ་འགོད།', email: 'གློག་འཕྲིན།', password: 'གསང་ཨང་།',
      displayName: 'མིང་།', loginButton: 'ནང་འཛུལ།', registerButton: 'རྩིས་ཁྲ་གསར་བཟོ།',
      or: 'ཡང་ན།', noAccount: 'རྩིས་ཁྲ་མེད།', hasAccount: 'རྩིས་ཁྲ་ཡོད།',
      loggingIn: 'ནང་འཛུལ་བཞིན་པ།', registering: 'རྩིས་ཁྲ་གསར་བཟཞིན་པ།', error: 'དབྱེ་བཞེས་ནོར་འཁྲུལ།',
    },
    chat: {
      title: 'བཅོམ་ལྡན་འདས་དང་སྐད་ཆ།', placeholder: 'བཅོམ་ལྡན་འདས་ལ་དྲི་བ་འདྲི།', send: 'སྐྱེལ།',
      listen: 'ཉན།', stop: 'མཚམས་འཇོག', autoVoice: 'རང་འགུལ་སྒྲ།', typing: 'བསམ་བློ་གཏོད་བཞིན་པ།',
      chooseCharacter: 'སྒྲུང་མི་འདེམ།', newChat: 'སྐད་ཆ་གསར་པ།',
    },
    about: {
      title: 'ལས་གཞིའི་སྐོར།',
      description: '2013 ལོའི་བཅོམ་ལྡན་འདས་ཀྱི་བརྙན་འཕྲིན་སྒྲུང་ལྗོངས་ལ་འབུལ་བའི་དགའ་མཁན་ཚོགས་པ།',
      mission: 'ང་ཚོའི་དམིགས་ཡུལ་ནི་དགའ་མཁན་ཚོས་སྒྲུང་ལྗོངས་ཀྱི་ཟབ་མོའི་སྟོན་པ་འཚོལ་ཞིབ་བྱེད་ཐུབ་པའི་ཚོགས་པ་ཞིག་གསར་འབྱེད་བྱ་རྒྱླྀ་ནི་རེད།',
      series: 'ལས་གཞི་འདི་ནི་2013 ལོའི་བཅོམ་ལྡན་འདས་ཀྱི་བརྙན་འཕྲིན་སྒྲུང་ལྗོངས་ལ་གུས་བཀུར་ཞུ་བ་ཡིན།',
      community: 'AI སྒྲུང་མིའི་སྐད་ཆ། ཚོགས་པའི་སྐད་ཆ། དང་འཛམ་གླིང་ཡོངས་ཀྱི་སྒོམ་གནས་ཀྱི་ཆ་འཕྲིན་བརྒྱུད་དེ་སྒྲུང་ལྗོངས་ཀྱི་བླ་སྲོལ་གསོན་པོར་གྱུར་བར་བྱ་རྒྱུ་ཡིན།',
    },
    contact: {
      title: 'འབྲེལ་བ།', name: 'མིང་།', email: 'གློག་འཕྲིན།',
      message: 'འཕྲིན་ཡིག', send: 'སྐྱེལ།', sent: 'འཕྲིན་ཡིག་བསྐྱལ་སོང་།',
    },
    admin: {
      translations: 'ལོ་ཙྱ།', article: 'རྩོམ་ཡིག', translationsFor: 'ཀྱི་ལོ་ཙྱ།',
      saveAll: 'ཚང་མ་ཉར།', retranslateAll: 'ཚང་མ་བསྐྱར་ལོ་ཙྱ།', saved: 'ཉར་ཚགས་བྱས།',
    },
    common: {
      loading: 'སྣོན་བཞིན་པ།', error: 'ནོར་འཁྲུལ།', save: 'ཉར།', cancel: 'འདོར།',
      delete: 'སུབ།', back: 'ཕྱིར་ལོག', showOriginal: 'མ་ཡིག་སྟོན།', showTranslation: 'ལོ་ཙྱ་སྟོན།',
    },
    practice: {
      title: 'སྔོན་འགྲོའི་སྒོམ།',
      intro: 'སེམས་དང་ལྷན་དུ་ལས་ཀ་བྱེད་པ་དང་སྙིང་རྗེ་འཕེལ་བའི་ལག་ལེན་གྱི་ขั�མ་རིམ།',
      meditationTitle: 'སྒོམ་ཇི་ལྟར་འགོ་བརྩམ།',
      meditationDesc: 'སྟབས་བདེ་བའི་ཐབས་ལམ། ཉིན་ལྟར་སྐར་མ་ལྔ་ནས་བཅུའི་བར་དུ་དབུགས་ཀྱི་རྒྱུ་ལམ་ལ་དམིགས་བསྡད། སྟབས་བདེ་བཞིན་བཞུགས་ལ། མིག་སྒྲིམ་ཞིང་དབུགས་འགྲོ་འོག་ཚང་མར་རྗེས་སུ་འབྲངས། སེམས་གཡེང་དུས་སུ་སྙིང་རྗེ་བཞིན་དབུགས་ཀྱི་རྒྱུ་ལམ་དུ་དམིགས་པ་ཕྱིར་ལོག',
      angerTitle: 'ཁོང་ཁྲོ་དང་ལས་ཀ་བྱེད་པ།',
      angerDesc: 'དྲན་ཤེས་ལ་སྦྱོང་། ཁོང་ཁ�ལ་ཐོན་དུས་ལན་མ་སྤྲད་གོང་དུ་མཚམས་འཇོག ལུས་པོའི་ཚོར་བར་ལྟ་ཞིབ། དེ་ནང་དབུགས་རྒྱུག བྱ་བ་མ་བྱས་པར་ཚོར་བ་འགྲོ་བར་འཇུག དང་ལེན་ནི་བསྒྱུར་བཅོས་ཀྱི་སྲིད་པ་དང་པོ།',
      compassionTitle: 'སྙིང་རྗེ་འཕེལ་བ།',
      compassionDesc: 'མི་མཐུན་པའི་བྱམས་བརྩེ་ལ་སྦྱོང་། ཞི་བཞིན་བཞུགས་ལ་བདེ་བའི་སྨོན་འདུན་ཡང་ཡང་བརྗོད། "ང་བདེ་བར་གྱུར་ཅིག ང་ཞི་བདེར་གྱུར་ཅིག སེམས་ཅན་ཐམས་ཅད་བདེ་བར་གྱུར་ཅིག" རང་ལས་འགོ་བརྩམས་ནས་གཉེན་ཉེ། ལྷོད་ཀྱི་མི། དཀའ་མོའི་མི། མཐར་ཐམས་ཅད་སེམས་ཅན་དུ་རྒྱས་པར་གྱུར་ཅིག',
      resonantBreathing: 'རྗེས་འཐེན་དབུགས་འབྱིན་ཚོད་ལྟ།',
      reminderTitle: 'ཁྲོ་བའི་དྲན་སྐུལ།',
      reminderText: 'ཁྲོ་བ་རླབས་ལྟ་བུ་ཡིན། འོང་བ་དང་འགྲོ། ལྷོད་ལ་ཕབ། དབུགས་འབྱིན། ལྟ། ཁྲོ་བ་ལས་མ་སྤྱད། ཤེས་རབ་ལས་སྤྱད།',
      mettaTitle: 'མཐུན་སེམས་སྙིང་པོ་ཉན།',
      mettaText: 'བདེ་བ་འཐོབ་པར་གྱུར་ཅིག ཞི་བ་འཐོབ་པར་གྱུར་ཅིག སེམས་ཅན་ཐམས་ཅད་བདེ་བ་འཐོབ་པར་གྱུར་ཅིག',
      listenMetta: '🎧 མཐུན་སེམས་ཉན།',
      copyMetta: 'བཀོད།',
    },
    teachings: { pageTitle: 'སྟོན་པ། ཆོས་ཀྱི་འཁོར་ལོ། སྒོམ།', sectionDharmachakra: 'ཆོས་ཀྱི་འཁོར་ལོ།', sectionTeachings: 'སངས་རྒྱས་ཀྱི་སྟོན་པ།', sectionPractices: 'སྒོམ།' },
  },
}

export type { TranslationKeys }
export default translations
