// Twoje dane — zmień wartości oznaczone jako TODO
export const site = {
  name: 'Bartosz Zawłocki',
  initials: 'BZ',
  email: 'kontakt@example.com', // TODO
  github: 'https://github.com/', // TODO
  linkedin: 'https://www.linkedin.com/', // TODO
};

// Teksty w dwóch językach
export const siteText = {
  pl: {
    role: 'Inżynier mechatroniki',
    tagline: 'Projektuję i buduję maszyny — od modelu CAD, przez elektronikę, po firmware.',
    location: 'Polska',
    status: 'Otwarty na praktyki i pracę',
    about: [
      'Jestem mechatronikiem, który lubi, gdy projekt przechodzi całą drogę: od szkicu i obliczeń, przez model 3D i płytkę PCB, aż po działający prototyp na biurku.',
      'Najlepiej czuję się na styku mechaniki, elektroniki i programowania — tam, gdzie trzeba zrozumieć cały układ, a nie tylko jeden jego element.',
    ],
    skills: [
      { group: 'CAD / Mechanika', items: ['SolidWorks', 'Fusion 360', 'Druk 3D', 'Obróbka CNC', 'MES / FEA'] },
      { group: 'Elektronika', items: ['KiCad', 'Projektowanie PCB', 'Lutowanie SMD', 'Oscyloskop', 'Napędy BLDC'] },
      { group: 'Embedded', items: ['C / C++', 'STM32', 'ESP32', 'FreeRTOS', 'CAN / I²C / SPI'] },
      { group: 'Automatyka / Software', items: ['Python', 'ROS 2', 'MATLAB / Simulink', 'PLC (TIA Portal)', 'Git'] },
    ],
  },
  en: {
    role: 'Mechatronics engineer',
    tagline: 'I design and build machines — from CAD models, through electronics, to firmware.',
    location: 'Poland',
    status: 'Open to internships and jobs',
    about: [
      "I'm a mechatronics engineer who enjoys taking a project all the way: from sketches and calculations, through the 3D model and PCB, to a working prototype on my desk.",
      "I'm most at home where mechanics, electronics and software meet — where you have to understand the whole system, not just one part of it.",
    ],
    skills: [
      { group: 'CAD / Mechanical', items: ['SolidWorks', 'Fusion 360', '3D printing', 'CNC machining', 'FEA'] },
      { group: 'Electronics', items: ['KiCad', 'PCB design', 'SMD soldering', 'Oscilloscope', 'BLDC drives'] },
      { group: 'Embedded', items: ['C / C++', 'STM32', 'ESP32', 'FreeRTOS', 'CAN / I²C / SPI'] },
      { group: 'Automation / Software', items: ['Python', 'ROS 2', 'MATLAB / Simulink', 'PLC (TIA Portal)', 'Git'] },
    ],
  },
};
