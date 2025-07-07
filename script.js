const translations = {
  ar: {
    student_platform: 'منصة الطالب',
    home: 'الرئيسية',
    welcome: 'مرحباً، الطالب',
    library: 'المكتبة الإلكترونية',
    calendar: 'التقويم التفاعلي',
    timer: 'الساعة والكرنومتر',
    location: 'موقعي',
    games: 'الألعاب الذهنية',
    notes: 'المذكرات',
    chat: 'الدردشة الذكية',
    departments: 'الأقسام الدراسية',
    arabic: 'اللغة العربية',
    french: 'اللغة الفرنسية',
    english: 'اللغة الإنجليزية',
    german: 'اللغة الألمانية',
    education: 'التربية والتعليم',
    lib_section: 'المكتبات الإلكترونية',
    noor: 'مكتبة نور',
    kotobati: 'كتوباتي',
    alqamar: 'مكتبة القمر',
    alberuni: 'مكتبة البيروني',
    current_time: 'الساعة الحالية:',
    start_btn: 'ابدأ الكرنومتر',
    reset_btn: 'إعادة التعيين',
    math_game: 'لعبة حسابية بسيطة',
    math_question: 'ما نتيجة:',
    check_btn: 'تحقق',
    notes_title: 'ملاحظاتك',
    save_btn: 'احفظ',
    saved_status: 'تم الحفظ.',
    location_title: 'موقعي الحالي',
    location_info: 'سيتم تحديد موقعك باستخدام خدمة تحديد المواقع الجغرافية.',
    location_btn: 'اعرض موقعي',
    location_fail: 'لم نتمكن من تحديد موقعك.',
    location_unsupported: 'المتصفح لا يدعم تحديد المواقع.',
    chat_info: 'هذه مجرد واجهة تجريبية.',
    chat_placeholder: 'اكتب رسالة...',
    chat_btn: 'إرسال',
    correct_answer: 'إجابة صحيحة!',
    wrong_answer: 'إجابة خاطئة، حاول مجدداً.',
    location_coords: (lat, lon) => `خط العرض: ${lat} - خط الطول: ${lon}`,
    copyright: '© 2025 آية مصدق',
  },
  en: {
    student_platform: 'Student Platform',
    home: 'Home',
    welcome: 'Welcome, Student',
    library: 'Digital Library',
    calendar: 'Interactive Calendar',
    timer: 'Clock & Stopwatch',
    location: 'My Location',
    games: 'Brain Games',
    notes: 'Notes',
    chat: 'Smart Chat',
    departments: 'Departments',
    arabic: 'Arabic',
    french: 'French',
    english: 'English',
    german: 'German',
    education: 'Education',
    lib_section: 'Digital Libraries',
    noor: 'Noor Library',
    kotobati: 'Kotobati',
    alqamar: 'Al-Qamar Library',
    alberuni: 'Al-Biruni Library',
    current_time: 'Current time:',
    start_btn: 'Start Timer',
    reset_btn: 'Reset',
    math_game: 'Simple Math Game',
    math_question: 'What is:',
    check_btn: 'Check',
    notes_title: 'Your Notes',
    save_btn: 'Save',
    saved_status: 'Saved.',
    location_title: 'My Current Location',
    location_info:
      'Your location will be detected using the geolocation service.',
    location_btn: 'Show My Location',
    location_fail: 'Unable to determine your location.',
    location_unsupported: 'Geolocation is not supported by this browser.',
    chat_info: 'This is a demo interface.',
    chat_placeholder: 'Type a message...',
    chat_btn: 'Send',
    correct_answer: 'Correct answer!',
    wrong_answer: 'Wrong answer, try again.',
    location_coords: (lat, lon) => `Latitude: ${lat} - Longitude: ${lon}`,
    copyright: '© 2025 Aya Msaddak',
  },
  fr: {
    student_platform: 'Plateforme Étudiant',
    home: 'Accueil',
    welcome: 'Bienvenue, étudiant',
    library: 'Bibliothèque numérique',
    calendar: 'Calendrier interactif',
    timer: 'Horloge et chronomètre',
    location: 'Ma position',
    games: 'Jeux cérébraux',
    notes: 'Notes',
    chat: 'Chat intelligent',
    departments: 'Départements',
    arabic: 'Arabe',
    french: 'Français',
    english: 'Anglais',
    german: 'Allemand',
    education: 'Éducation',
    lib_section: 'Bibliothèques numériques',
    noor: 'Bibliothèque Noor',
    kotobati: 'Kotobati',
    alqamar: 'Bibliothèque Al-Qamar',
    alberuni: 'Bibliothèque Al-Biruni',
    current_time: 'Heure actuelle:',
    start_btn: 'Démarrer le chronomètre',
    reset_btn: 'Réinitialiser',
    math_game: 'Jeu de calcul simple',
    math_question: 'Quel est le résultat de:',
    check_btn: 'Vérifier',
    notes_title: 'Vos notes',
    save_btn: 'Enregistrer',
    saved_status: 'Enregistré.',
    location_title: 'Ma position actuelle',
    location_info:
      'Votre position sera détectée par le service de géolocalisation.',
    location_btn: 'Afficher ma position',
    location_fail: 'Impossible de déterminer votre position.',
    location_unsupported:
      'La géolocalisation n’est pas prise en charge par ce navigateur.',
    chat_info: 'Ceci est une interface de démonstration.',
    chat_placeholder: 'Écrivez un message...',
    chat_btn: 'Envoyer',
    correct_answer: 'Bonne réponse !',
    wrong_answer: 'Mauvaise réponse, essayez encore.',
    location_coords: (lat, lon) => `Latitude : ${lat} - Longitude : ${lon}`,
    copyright: '© 2025 Aya Msaddak',
  },
  de: {
    student_platform: 'Studierendenplattform',
    home: 'Startseite',
    welcome: 'Willkommen, Student',
    library: 'Digitale Bibliothek',
    calendar: 'Interaktiver Kalender',
    timer: 'Uhr & Stoppuhr',
    location: 'Mein Standort',
    games: 'Denkspiele',
    notes: 'Notizen',
    chat: 'Intelligenter Chat',
    departments: 'Fachbereiche',
    arabic: 'Arabisch',
    french: 'Französisch',
    english: 'Englisch',
    german: 'Deutsch',
    education: 'Pädagogik',
    lib_section: 'Digitale Bibliotheken',
    noor: 'Noor-Bibliothek',
    kotobati: 'Kotobati',
    alqamar: 'Al-Qamar-Bibliothek',
    alberuni: 'Al-Biruni-Bibliothek',
    current_time: 'Aktuelle Uhrzeit:',
    start_btn: 'Stoppuhr starten',
    reset_btn: 'Zurücksetzen',
    math_game: 'Einfaches Mathe-Spiel',
    math_question: 'Was ist:',
    check_btn: 'Prüfen',
    notes_title: 'Deine Notizen',
    save_btn: 'Speichern',
    saved_status: 'Gespeichert.',
    location_title: 'Mein aktueller Standort',
    location_info:
      'Ihr Standort wird über den Geolokalisierungsdienst ermittelt.',
    location_btn: 'Standort anzeigen',
    location_fail: 'Standort konnte nicht bestimmt werden.',
    location_unsupported:
      'Geolokalisierung wird von diesem Browser nicht unterstützt.',
    chat_info: 'Dies ist eine Demo-Oberfläche.',
    chat_placeholder: 'Nachricht eingeben...',
    chat_btn: 'Senden',
    correct_answer: 'Richtige Antwort!',
    wrong_answer: 'Falsche Antwort, versuch’s noch mal.',
    location_coords: (lat, lon) => `Breitengrad: ${lat} - Längengrad: ${lon}`,
    copyright: '© 2025 Aya Msaddak',
  },
};
function applyLanguage(lang) {
  const t = translations[lang] || translations.ar;

  document.querySelector('.logo h1').textContent = t.student_platform;
  document.getElementById('page-title').textContent = t.home;
  document.querySelector('.user-profile span').textContent = t.welcome;
  document.getElementById('copyright-text').textContent = t.copyright;

  const navLabels = [
    'library',
    'calendar',
    'timer',
    'location',
    'games',
    'notes',
    'chat',
  ];
  navLabels.forEach((id) => {
    const link = document.querySelector(`a[href="#${id}"]`);
    if (link)
      link.innerHTML = `<i class="icon">${
        link.querySelector('.icon')?.textContent || ''
      }</i> ${t[id]}`;
  });

  document.querySelector('.study-sections h3').textContent = t.departments;

  document.querySelectorAll('.department').forEach((dept) => {
    const key = dept.getAttribute('data-dept');
    dept.querySelector('h4').textContent = t[key] || key;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const languageSelectSidebar = document.querySelector(
    '.language-switcher select'
  );
  const languageSelectMobile = document.querySelector(
    '.language-switcher-mobile select'
  );

  const savedLang = localStorage.getItem('selected-language') || 'ar';

  if (languageSelectSidebar) languageSelectSidebar.value = savedLang;
  if (languageSelectMobile) languageSelectMobile.value = savedLang;

  applyLanguage(savedLang);
  loadSection('library');

  function handleLanguageChange(selectedLang) {
    localStorage.setItem('selected-language', selectedLang);

    if (languageSelectSidebar) languageSelectSidebar.value = selectedLang;
    if (languageSelectMobile) languageSelectMobile.value = selectedLang;

    applyLanguage(selectedLang);

    const currentSection =
      document.getElementById('page-title').dataset.section || 'library';
    loadSection(currentSection);
  }

  if (languageSelectSidebar) {
    languageSelectSidebar.addEventListener('change', function () {
      handleLanguageChange(this.value);
    });
  }

  if (languageSelectMobile) {
    languageSelectMobile.addEventListener('change', function () {
      handleLanguageChange(this.value);
    });
  }

  // تحميل الأقسام الديناميكية
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      loadSection(sectionId);
    });
  });

  // تحميل الأقسام الدراسية
  const departments = document.querySelectorAll('.department');
  departments.forEach((dept) => {
    dept.addEventListener('click', function () {
      const deptName = this.getAttribute('data-dept');
      loadDepartment(deptName);
    });
  });
});

function loadSection(sectionId) {
  const contentSections = document.querySelector('.content-sections');
  const pageTitle = document.getElementById('page-title');
  const lang = localStorage.getItem('selected-language') || 'ar';
  const t = translations[lang];

  let content = '';
  let title = '';

  switch (sectionId) {
    case 'library':
      title = t.library;
      content = `
          <div class="library-section">
            <h3>${t.lib_section}</h3>
            <br/>
            <div class="libraries-grid">
              <a href="https://www.noor-book.com" target="_blank" class="library-card">
                <img src="assets/images/noor-logo.jpg" alt="${t.noor}">
                <span>${t.noor}</span>
              </a>
              <a href="https://www.kotobati.com" target="_blank" class="library-card">
                <img src="assets/images/kotobati-logo.png" alt="${t.kotobati}">
                <span>${t.kotobati}</span>
              </a>
              <a href="https://www.alqamar.org" target="_blank" class="library-card">
                <img src="assets/images/alqamar-logo.png" alt="${t.alqamar}">
                <span>${t.alqamar}</span>
              </a>
              <a href="https://www.alberuni.org" target="_blank" class="library-card">
                <img src="assets/images/alberuni-logo.png" alt="${t.alberuni}">
                <span>${t.alberuni}</span>
              </a>
            </div>
          </div>
        `;
      break;

    case 'calendar':
      title = t.calendar;
      content = `
          <div class="calendar-section">
            <h3>${t.calendar}</h3>
            <br/>
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=ar.tn%23holiday%40group.v.calendar.google.com&mode=MONTH&bgcolor=%2300000000" 
              style="border: 0; background-color: transparent;" 
              width="100%" 
              height="600" 
              frameborder="0" 
              scrolling="no">
            </iframe>
          </div>
        `;
      break;

    case 'timer':
      title = t.timer;
      content = `
          <div class="timer-section">
            <h3>${t.timer}</h3>
             <br/>
            <p>${t.current_time}</p>
            <div id="clock" style="font-size: 2rem; margin: 15px 0;"></div>
            <button onclick="startTimer()">${t.start_btn}</button>
            <button onclick="resetTimer()">${t.reset_btn}</button>
            <div id="stopwatch" style="font-size: 1.5rem; margin-top: 10px;">00:00</div>
          </div>
        `;
      break;

    case 'location':
      title = t.location;
      content = `
          <div class="location-section">
            <h3>${t.location_title}</h3>
            <p>${t.location_info}</p>
             <br/>
            <button onclick="getLocation()">${t.location_btn}</button>
            <div id="location-result" style="margin-top: 15px;"></div>
          </div>
        `;
      break;

    case 'games':
      title = t.games;
      content = `
          <div class="games-section">
            <h3>${t.math_game}</h3>
            <p>${t.math_question} <span id="num1"></span> + <span id="num2"></span></p>
            <br/>
            <input type="number" id="answer" />
            <button onclick="checkAnswer()">${t.check_btn}</button>
            <p id="game-result" style="margin-top: 10px;"></p>
          </div>
        `;
      break;

    case 'notes':
      title = t.notes;
      content = `
          <div class="notes-section">
            <h3>${t.notes_title}</h3>
            <br/>
            <textarea id="notes-area" rows="10" style="width:100%;"></textarea>
            <button onclick="saveNotes()">${t.save_btn}</button>
            <p id="notes-status" style="margin-top:10px;"></p>
          </div>
        `;
      break;

    case 'chat':
      title = t.chat;
      content = `
          <div class="chat-section">
            <h3>${t.chat}</h3>
            <p>${t.chat_info}</p>
            <br/>
            <input type="text" placeholder="${t.chat_placeholder}" style="width: 100%; margin-bottom: 10px;" />
            <button>${t.chat_btn}</button>
          </div>
        `;
      break;

    default:
      title = t.home;
      content = `<p>${t.welcome}</p>`;
  }

  pageTitle.textContent = title;
  pageTitle.dataset.section = sectionId;
  contentSections.innerHTML = content;

  if (sectionId === 'timer') initClock();
  if (sectionId === 'games') generateQuestion();
  if (sectionId === 'notes') loadNotes();
}

function initClock() {
  setInterval(() => {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
  }, 1000);
}

let timerInterval,
  seconds = 0;
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById('stopwatch').textContent =
      String(Math.floor(seconds / 60)).padStart(2, '0') +
      ':' +
      String(seconds % 60).padStart(2, '0');
  }, 1000);
}
function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  document.getElementById('stopwatch').textContent = '00:00';
}

function getLocation() {
  const output = document.getElementById('location-result');
  const lang = localStorage.getItem('selected-language') || 'ar';
  const t = translations[lang];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        output.textContent = t.location_coords(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        output.textContent = t.location_fail;
      }
    );
  } else {
    output.textContent = t.location_unsupported;
  }
}

let correctAnswer = 0;
function generateQuestion() {
  const n1 = Math.floor(Math.random() * 10);
  const n2 = Math.floor(Math.random() * 10);
  correctAnswer = n1 + n2;
  document.getElementById('num1').textContent = n1;
  document.getElementById('num2').textContent = n2;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const result = document.getElementById('game-result');
  const lang = localStorage.getItem('selected-language') || 'ar';
  const t = translations[lang];

  if (userAnswer === correctAnswer) {
    result.textContent = t.correct_answer;
  } else {
    result.textContent = t.wrong_answer;
  }
}

function saveNotes() {
  const content = document.getElementById('notes-area').value;
  const lang = localStorage.getItem('selected-language') || 'ar';
  const t = translations[lang];

  localStorage.setItem('student-notes', content);
  document.getElementById('notes-status').textContent = t.saved_status;
}

function loadNotes() {
  const saved = localStorage.getItem('student-notes');
  document.getElementById('notes-area').value = saved || '';
}

function loadDepartment(deptName) {
  // هنا سيتم تحميل محتوى القسم الدراسي المحدد
  alert('سيتم تحميل قسم: ' + deptName);
}
