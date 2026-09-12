// Dane kontaktowe
export const site = {
  name: 'Bartosz Zawłocki',
  email: 'zawlockibartosz@icloud.com',
  github: 'https://github.com/Zaworek03',
};

// Teksty w dwóch językach
export const siteText = {
  pl: {
    role: 'Student mechatroniki',
    tagline: 'Projektuję i buduję maszyny — od modelu CAD, przez elektronikę, po oprogramowanie sterownika.',
    location: 'Polska',
    mailSubject: 'Portfolio zapytanie',
    about: [
      'Studiuję mechatronikę na Politechnice Poznańskiej. Najbardziej lubię, gdy projekt przechodzi całą drogę: od szkicu i obliczeń, przez model 3D i płytkę PCB, aż po działający prototyp.',
      'Najlepiej czuję się na styku mechaniki, elektroniki i programowania — tam, gdzie trzeba zrozumieć cały układ, a nie tylko jeden jego element.',
    ],
    skills: [
      { group: 'Automatyka', items: ['Siemens S7-1200 / TIA Portal (SCL)', 'B&R Automation Studio (ST, mapp)', 'Panele HMI', 'RFID / IO-Link', 'Modbus TCP, OPC UA', 'Systemy wizyjne'] },
      { group: 'Elektronika', items: ['KiCad — schematy i PCB', 'Dobór elementów', 'Lutowanie SMD'] },
      { group: 'Embedded', items: ['C / C++', 'ESP32-S3 (ESP-IDF, rejestry)', 'PWM, ADC', 'Regulacja PD'] },
      { group: 'Software / Mechanika', items: ['C# / .NET, Blazor', 'MS SQL', 'Git', 'Druk 3D'] },
    ],
  },
  en: {
    role: 'Mechatronics student',
    tagline: 'I design and build machines — from CAD models, through electronics, to controller software.',
    location: 'Poland',
    mailSubject: 'Portfolio zapytanie',
    about: [
      "I study mechatronics at Poznań University of Technology. I enjoy taking a project all the way: from sketches and calculations, through the 3D model and PCB, to a working prototype.",
      "I'm most at home where mechanics, electronics and software meet — where you have to understand the whole system, not just one part of it.",
    ],
    skills: [
      { group: 'Automation', items: ['Siemens S7-1200 / TIA Portal (SCL)', 'B&R Automation Studio (ST, mapp)', 'HMI panels', 'RFID / IO-Link', 'Modbus TCP, OPC UA', 'Machine vision'] },
      { group: 'Electronics', items: ['KiCad — schematics and PCB', 'Component selection', 'SMD soldering'] },
      { group: 'Embedded', items: ['C / C++', 'ESP32-S3 (ESP-IDF, registers)', 'PWM, ADC', 'PD control'] },
      { group: 'Software / Mechanical', items: ['C# / .NET, Blazor', 'MS SQL', 'Git', '3D printing'] },
    ],
  },
};
