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
}

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home', chat: 'Chat', characters: 'Characters', episodes: 'Episodes',
      teachings: 'Teachings', theses: 'Theses', gallery: 'Gallery', quiz: 'Quiz',
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
  },
  ru: {
    nav: {
      home: 'Главная', chat: 'Чат', characters: 'Герои', episodes: 'Эпизоды',
      teachings: 'Учения', theses: 'Тезисы', gallery: 'Галерея', quiz: 'Викторина',
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
  },
  hi: {
    nav: {
      home: 'होम', chat: 'चैट', characters: 'पात्र', episodes: 'एपिसोड',
      teachings: 'शिक्षाएँ', theses: 'थीसिस', gallery: 'गैलरी', quiz: 'प्रश्नोत्तरी',
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
  },
  es: {
    nav: {
      home: 'Inicio', chat: 'Chat', characters: 'Personajes', episodes: 'Episodios',
      teachings: 'Enseñanzas', theses: 'Tesis', gallery: 'Galería', quiz: 'Quiz',
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
  },
  fr: {
    nav: {
      home: 'Accueil', chat: 'Chat', characters: 'Personnages', episodes: 'Épisodes',
      teachings: 'Enseignements', theses: 'Thèses', gallery: 'Galerie', quiz: 'Quiz',
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
  },
  de: {
    nav: {
      home: 'Startseite', chat: 'Chat', characters: 'Charaktere', episodes: 'Episoden',
      teachings: 'Lehren', theses: 'Thesen', gallery: 'Galerie', quiz: 'Quiz',
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
  },
  zh: {
    nav: {
      home: '首页', chat: '聊天', characters: '角色', episodes: '剧集',
      teachings: '教义', theses: '论文', gallery: '画廊', quiz: '问答',
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
  },
  ja: {
    nav: {
      home: 'ホーム', chat: 'チャット', characters: 'キャラクター', episodes: 'エピソード',
      teachings: '教え', theses: '論文', gallery: 'ギャラリー', quiz: 'クイズ',
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
  },
  pt: {
    nav: {
      home: 'Início', chat: 'Chat', characters: 'Personagens', episodes: 'Episódios',
      teachings: 'Ensinos', theses: 'Teses', gallery: 'Galeria', quiz: 'Quiz',
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
  },
  th: {
    nav: {
      home: 'หน้าแรก', chat: 'แชท', characters: 'ตัวละคร', episodes: 'ตอน',
      teachings: 'คำสอน', theses: 'theses', gallery: 'แกลเลอรี', quiz: 'แบบทดสอบ',
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
  },
  vi: {
    nav: {
      home: 'Trang chủ', chat: 'Trò chuyện', characters: 'Nhân vật', episodes: 'Tập phim',
      teachings: 'Giáo lý', theses: 'Luận đề', gallery: 'Thư viện ảnh', quiz: 'Trắc nghiệm',
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
  },
  ko: {
    nav: {
      home: '홈', chat: '채팅', characters: '인물', episodes: '에피소드',
      teachings: '가르침', theses: '논문', gallery: '갤러리', quiz: '퀴즈',
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
  },
  id: {
    nav: {
      home: 'Beranda', chat: 'Obrolan', characters: 'Karakter', episodes: 'Episode',
      teachings: 'Ajaran', theses: 'Tesis', gallery: 'Galeri', quiz: 'Kuis',
      community: 'Komunitas', videos: 'Video', retreats: 'Retret', profile: 'Profil',
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
  },
  ms: {
    nav: {
      home: 'Laman Utama', chat: 'Sembang', characters: 'Watak', episodes: 'Episod',
      teachings: 'Ajaran', theses: 'Tesis', gallery: 'Galeri', quiz: 'Kuiz',
      community: 'Komuniti', videos: 'Video', retreats: 'Retreat', profile: 'Profil',
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
  },
  si: {
    nav: {
      home: 'මුල් පිටුව', chat: 'කතාබහ', characters: 'චරිත', episodes: 'කොටස්',
      teachings: 'ඉගැන්වීම්', theses: 'න්‍යායන්', gallery: 'ගැලරිය', quiz: 'ප්‍රශ්නාවලිය',
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
  },
  my: {
    nav: {
      home: 'ပင်မစာမျက်နှာ', chat: 'စကားပြော', characters: 'ဇာတ်ကောင်', episodes: 'ဇာတ်လမ်း',
      teachings: 'သွန်သင်ချက်များ', theses: 'စာတမ်းများ', gallery: 'ပုံတန်း', quiz: 'မေးခွန်း',
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
  },
  ne: {
    nav: {
      home: 'गृहपृष्ठ', chat: 'च्याट', characters: 'पात्र', episodes: 'एपिसोड',
      teachings: 'उपदेश', theses: 'थीसिस', gallery: 'ग्यालरी', quiz: 'प्रश्नोत्तरी',
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
  },
  bo: {
    nav: {
      home: 'གཙོ་ངོས།', chat: 'སྐད་ཆ།', characters: 'སྒྲུང་མི།', episodes: 'ལེ་ཚན།',
      teachings: 'སྟོན་པ།', theses: 'དཔྱད་རྩོམ།', gallery: 'པར་ཁུལ།', quiz: 'དྲི་བ།',
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
  },
}

export type { TranslationKeys }
export default translations
