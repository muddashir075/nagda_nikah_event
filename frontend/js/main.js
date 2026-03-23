// ===== TRANSLATIONS =====
const translations = {
  hi: {
    'nav-home':       'होम',
    'nav-about':      'परिचय',
    'nav-organizers': 'आयोजक',
    'nav-speakers':   'अतिथि',
    'nav-schedule':   'सरपरस्त',
    'nav-contact':    'संपर्क',
    'nav-register':   'अभी पंजीकरण करें',
    'hero-tag':       'पाया २ब ग्रुप नागदा की जानिब से',
    'hero-h1':        'सामुहिक निकाह सम्मेलन',
    'hero-sub':       'सदर मुस्लिम पंचायत नागदा के तत्वावधान में',
    'meta-date':      '२६ अप्रैल २०२६',
    'meta-day':       'रविवार (इतवार)',
    'meta-venue':     'बाबा की बावड़ी, रसुलपुर रोड, नागदा, देवास',
    'hero-learn':     'और जानें',
    'hero-register':  'अभी पंजीकरण करें',
    'about-h2':       'कार्यक्रम के बारे में',
    'about-sub':      'एक पवित्र और यादगार आयोजन',
    'about-desc':     'पाया २ब ग्रुप नागदा और सदर मुस्लिम पंचायत नागदा के संयुक्त तत्वावधान में सामुहिक निकाह सम्मेलन का आयोजन किया जा रहा है। यह आयोजन समाज के सभी वर्गों के लिए एक पवित्र अवसर है जहाँ निःशुल्क सामुहिक निकाह संपन्न कराए जाएंगे।',
    'card1-h3':       'निःशुल्क निकाह',
    'card1-p':        'सामुहिक निकाह सम्मेलन में निःशुल्क निकाह संपन्न कराए जाएंगे।',
    'card2-h3':       'सामाजिक एकता',
    'card2-p':        'समाज के सभी वर्गों को एक मंच पर लाने का प्रयास।',
    'card3-h3':       'विशिष्ट अतिथि',
    'card3-p':        'राजनीतिक व सामाजिक क्षेत्र के विशिष्ट अतिथियों की उपस्थिति।',
    'org-h2':         'मुख्य अतिथि',
    'org-sub':        'विशेष रूप से आमंत्रित गणमान्य व्यक्ति',
    'guest1-role':    'अध्यक्ष, म.प्र. कांग्रेस कमेटी',
    'guest2-role':    'वरिष्ठ नेता',
    'guest3-role':    'विधायक, देवास',
    'guest4-role':    'शहर काजी, देवास सीनियर',
    'guest5-role':    'मुख्य शहर काजी, इंदौर',
    'guest6-role':    'अध्यक्ष, म.प्र. किसान कांग्रेस',
    'guest7-role':    'जिला कांग्रेस अध्यक्ष, इंदौर',
    'guest8-role':    'जिला किसान कांग्रेस अध्यक्ष',
    'patron-h2':      'सरपरस्त',
    'patron-sub':     'इस आयोजन के संरक्षक',
    'supporters-h3':  'सहयोगी — नागदा, देवास व आसपास के क्षेत्र',
    'team-h2':        'आयोजक समिति',
    'team-sub':       'पाया २ब ग्रुप नागदा',
    'team1-role':     'इवेंट निदेशक',
    'team2-role':     'सह-संस्थापक',
    'team3-role':     'मार्केटिंग प्रमुख',
    'team4-role':     'संचालन प्रबंधक',
    'reg-h2':         'पंजीकरण करें',
    'reg-sub':        'निकाह सम्मेलन में भाग लेने के लिए पंजीकरण करें',
    'reg-name':       'आपका नाम',
    'reg-email':      'आपका ईमेल',
    'reg-phone':      'फ़ोन नंबर',
    'reg-btn':        'पंजीकरण जमा करें',
    'footer-quick':   'त्वरित लिंक',
    'footer-contact': 'संपर्क करें',
    'footer-follow':  'हमें फॉलो करें',
    'footer-copy':    '© २०२६ सामुहिक निकाह सम्मेलन नागदा | सर्वाधिकार सुरक्षित |',
    'footer-privacy': 'गोपनीयता नीति',
    'footer-terms':   'नियम और शर्तें',
  },
  en: {
    'nav-home':       'Home',
    'nav-about':      'About',
    'nav-organizers': 'Organizers',
    'nav-speakers':   'Guests',
    'nav-schedule':   'Patrons',
    'nav-contact':    'Contact',
    'nav-register':   'Register Now',
    'hero-tag':       'Presented by YA RAB Group Nagda',
    'hero-h1':        'Collective Nikah Conference',
    'hero-sub':       'Under the auspices of Sadar Muslim Panchayat Nagda',
    'meta-date':      '26 April 2026',
    'meta-day':       'Sunday',
    'meta-venue':     'Baba Ki Baodi, Rasulpur Road, Nagda, Dewas',
    'hero-learn':     'Learn More',
    'hero-register':  'Register Now',
    'about-h2':       'About the Event',
    'about-sub':      'A sacred and memorable gathering',
    'about-desc':     'YA RAB Group Nagda and Sadar Muslim Panchayat Nagda are jointly organizing a Collective Nikah Conference. This is a sacred occasion for all sections of society where free collective Nikah ceremonies will be conducted on 26 April 2026, Sunday at Baba Ki Baodi, Rasulpur Road, Nagda, Dewas.',
    'card1-h3':       'Free Nikah Ceremony',
    'card1-p':        'Collective Nikah ceremonies will be conducted free of charge for all participants.',
    'card2-h3':       'Social Unity',
    'card2-p':        'Bringing all sections of society together on one platform.',
    'card3-h3':       'Distinguished Guests',
    'card3-p':        'Presence of prominent political and social dignitaries.',
    'org-h2':         'Chief Guests',
    'org-sub':        'Specially invited dignitaries',
    'guest1-role':    'President, M.P. Congress Committee',
    'guest2-role':    'Senior Leader',
    'guest3-role':    'MLA, Dewas',
    'guest4-role':    'City Qazi, Dewas Senior',
    'guest5-role':    'Chief City Qazi, Indore',
    'guest6-role':    'President, M.P. Kisan Congress',
    'guest7-role':    'District Congress President, Indore',
    'guest8-role':    'District Kisan Congress President',
    'patron-h2':      'Patrons',
    'patron-sub':     'Guardians of this event',
    'supporters-h3':  'Supporters — Nagda, Dewas & Surrounding Areas',
    'team-h2':        'Organising Committee',
    'team-sub':       'YA RAB Group Nagda',
    'team1-role':     'Event Director',
    'team2-role':     'Co-Founder',
    'team3-role':     'Marketing Head',
    'team4-role':     'Operations Manager',
    'reg-h2':         'Register Now',
    'reg-sub':        'Register to participate in the Nikah Conference',
    'reg-name':       'Your Name',
    'reg-email':      'Your Email',
    'reg-phone':      'Phone Number',
    'reg-btn':        'Submit Registration',
    'footer-quick':   'Quick Links',
    'footer-contact': 'Contact Us',
    'footer-follow':  'Follow Us',
    'footer-copy':    '© 2026 Collective Nikah Conference Nagda | All rights reserved |',
    'footer-privacy': 'Privacy Policy',
    'footer-terms':   'Terms & Conditions',
  }
};

// Default language: Hindi (since the event is Hindi-first)
let currentLang = 'hi';

function applyTranslation(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (el.tagName === 'INPUT') {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  document.getElementById('langLabel').textContent = lang === 'hi' ? 'EN' : 'हिं';
  document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'hi' ? 'en' : 'hi';
  applyTranslation(currentLang);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background = window.scrollY > 50
    ? 'rgba(13, 0, 21, 0.98)'
    : 'rgba(13, 0, 21, 0.85)';
});

// ===== REGISTRATION FORM =====
const form    = document.getElementById('registerForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = currentLang === 'hi'
    ? 'शुक्रिया! हम जल्द संपर्क करेंगे।'
    : 'Thank you! We will be in touch soon.';
  formMsg.style.color = '#a3e635';
  form.reset();
});
