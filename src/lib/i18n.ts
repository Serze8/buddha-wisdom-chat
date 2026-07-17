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
  }
  home: {
    heroTitle: string
    heroSubtitle: string
    startChat: string
    thesisOfDay: string
    readMore: string
    quoteStrip: string
    featuresTitle: string
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
}

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home', chat: 'Chat', characters: 'Characters', episodes: 'Episodes',
      teachings: 'Teachings', theses: 'Theses', gallery: 'Gallery', quiz: 'Quiz',
      community: 'Community', videos: 'Videos', retreats: 'Retreats', profile: 'Profile',
      about: 'About', contact: 'Contact', admin: 'Admin', donate: 'Donate',
    },
    home: {
      heroTitle: "Buddha's Wisdom Chat",
      heroSubtitle: 'Explore the teachings of the Buddha through AI-powered conversations',
      startChat: 'Start Chat', thesisOfDay: 'Thesis of the Day', readMore: 'Read More',
      quoteStrip: '"The mind is everything. What you think you become." — Buddha',
      featuresTitle: 'Explore',
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
  },
  ru: {
    nav: {
      home: 'Главная', chat: 'Чат', characters: 'Герои', episodes: 'Эпизоды',
      teachings: 'Учения', theses: 'Тезисы', gallery: 'Галерея', quiz: 'Викторина',
      community: 'Сообщество', videos: 'Видео', retreats: 'Ретриты', profile: 'Профиль',
      about: 'О проекте', contact: 'Контакты', admin: 'Админ', donate: 'Поддержать',
    },
    home: {
      heroTitle: 'Мудрость Будды',
      heroSubtitle: 'Исследуйте учения Будды через диалог с ИИ',
      startChat: 'Начать чат', thesisOfDay: 'Тезис дня', readMore: 'Подробнее',
      quoteStrip: '«Ум — это всё. То, что ты думаешь, тем ты и становишься». — Будда',
      featuresTitle: 'Исследовать',
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
  },
  hi: {
    nav: {
      home: 'होम', chat: 'चैट', characters: 'पात्र', episodes: 'एपिसोड',
      teachings: 'शिक्षाएँ', theses: 'थीसिस', gallery: 'गैलरी', quiz: 'प्रश्नोत्तरी',
      community: 'समुदाय', videos: 'वीडियो', retreats: 'रिट्रीट', profile: 'प्रोफ़ाइल',
      about: 'परियोजना के बारे में', contact: 'संपर्क', admin: 'एडमिन', donate: 'समर्थन',
    },
    home: {
      heroTitle: 'बुद्ध की ज्ञान चैट',
      heroSubtitle: 'AI-संचालित वार्तालापों के माध्यम से बुद्ध की शिक्षाओं का अन्वेषण करें',
      startChat: 'चैट शुरू करें', thesisOfDay: 'आज का थीसिस', readMore: 'और पढ़ें',
      quoteStrip: '"मन ही सब कुछ है। जो तुम सोचते हो, वही बन जाते हो।" — बुद्ध',
      featuresTitle: 'अन्वेषण करें',
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
  },
  es: {
    nav: {
      home: 'Inicio', chat: 'Chat', characters: 'Personajes', episodes: 'Episodios',
      teachings: 'Enseñanzas', theses: 'Tesis', gallery: 'Galería', quiz: 'Quiz',
      community: 'Comunidad', videos: 'Videos', retreats: 'Retiros', profile: 'Perfil',
      about: 'Acerca de', contact: 'Contacto', admin: 'Administrador', donate: 'Donar',
    },
    home: {
      heroTitle: 'Chat de la Sabiduría del Buda',
      heroSubtitle: 'Explora las enseñanzas del Buda a través de conversaciones con IA',
      startChat: 'Iniciar Chat', thesisOfDay: 'Tesis del Día', readMore: 'Leer Más',
      quoteStrip: '"La mente lo es todo. Lo que piensas, eso te conviertes." — Buda',
      featuresTitle: 'Explorar',
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
  },
  fr: {
    nav: {
      home: 'Accueil', chat: 'Chat', characters: 'Personnages', episodes: 'Épisodes',
      teachings: 'Enseignements', theses: 'Thèses', gallery: 'Galerie', quiz: 'Quiz',
      community: 'Communauté', videos: 'Vidéos', retreats: 'Retraites', profile: 'Profil',
      about: 'À propos', contact: 'Contact', admin: 'Administrateur', donate: 'Donner',
    },
    home: {
      heroTitle: 'Chat de la Sagesse du Bouddha',
      heroSubtitle: 'Découvrez les enseignements du Bouddha grâce aux conversations IA',
      startChat: 'Commencer le Chat', thesisOfDay: 'Thèse du Jour', readMore: 'Lire la Suite',
      quoteStrip: '"L\'est tout. Ce que tu penses, tu le deviens." — Bouddha',
      featuresTitle: 'Explorer',
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
  },
  de: {
    nav: {
      home: 'Startseite', chat: 'Chat', characters: 'Charaktere', episodes: 'Episoden',
      teachings: 'Lehren', theses: 'Thesen', gallery: 'Galerie', quiz: 'Quiz',
      community: 'Gemeinschaft', videos: 'Videos', retreats: 'Rückzüge', profile: 'Profil',
      about: 'Über uns', contact: 'Kontakt', admin: 'Administrator', donate: 'Spenden',
    },
    home: {
      heroTitle: 'Buddhas Weisheits-Chat',
      heroSubtitle: 'Erkunde die Lehren Buddhas durch KI-gestützte Gespräche',
      startChat: 'Chat starten', thesisOfDay: 'These des Tages', readMore: 'Weiterlesen',
      quoteStrip: '"Der Geist ist alles. Was du denkst, das wirst du." — Buddha',
      featuresTitle: 'Erkunden',
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
  },
  zh: {
    nav: {
      home: '首页', chat: '聊天', characters: '角色', episodes: '剧集',
      teachings: '教义', theses: '论文', gallery: '画廊', quiz: '问答',
      community: '社区', videos: '视频', retreats: '修行', profile: '个人资料',
      about: '关于', contact: '联系我们', admin: '管理员', donate: '支持',
    },
    home: {
      heroTitle: '佛陀智慧聊天',
      heroSubtitle: '通过AI对话探索佛陀的教导',
      startChat: '开始聊天', thesisOfDay: '今日论文', readMore: '阅读更多',
      quoteStrip: '"心是一切。你所想的，你就会成为。" — 佛陀',
      featuresTitle: '探索',
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
  },
  ja: {
    nav: {
      home: 'ホーム', chat: 'チャット', characters: 'キャラクター', episodes: 'エピソード',
      teachings: '教え', theses: '論文', gallery: 'ギャラリー', quiz: 'クイズ',
      community: 'コミュニティ', videos: '動画', retreats: 'リトリート', profile: 'プロフィール',
      about: '概要', contact: 'お問い合わせ', admin: '管理者', donate: '寄付',
    },
    home: {
      heroTitle: 'ブッダの知恵チャット',
      heroSubtitle: 'AI会話を通じてブッダの教えを探る',
      startChat: 'チャット開始', thesisOfDay: '今日の論文', readMore: '続きを読む',
      quoteStrip: '"心がすべて。考えることが、あなたの存在になる。" — ブッダ',
      featuresTitle: '探る',
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
  },
}

export type { TranslationKeys }
export default translations
