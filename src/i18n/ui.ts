import { url } from '../data/url';

export const languages = { pl: 'Polski', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pl';

export const categoryKeys = ['robotyka', 'elektronika', 'cad', 'embedded', 'automatyka'] as const;
export type Category = (typeof categoryKeys)[number];

export const ui = {
  pl: {
    'nav.projects': 'Projekty',
    'nav.about': 'O mnie',
    'nav.skills': 'Umiejętności',
    'nav.contact': 'Kontakt',
    'nav.aria': 'Główna nawigacja',
    'nav.skip': 'Przejdź do treści',
    'nav.home': 'strona główna',
    'nav.theme': 'Przełącz motyw jasny / ciemny',
    'nav.switchLang': 'Switch to English',
    'hero.cta': 'Zobacz projekty',
    'hero.contact': 'Kontakt',
    'hero.summary': 'Podsumowanie',
    'hero.titleBlock': 'TABLICZKA RYSUNKOWA',
    'hero.projects': 'Projekty',
    'hero.areas': 'Obszary',
    'hero.years': 'Lata',
    'hero.location': 'Lokalizacja',
    'hero.scale': 'SKALA 1:1',
    'projects.eyebrow': '01 / projekty',
    'projects.title': 'Co zbudowałem',
    'projects.filter': 'Filtruj projekty',
    'projects.all': 'Wszystkie',
    'projects.empty': 'Brak projektów w tej kategorii.',
    'projects.shown': 'Pokazano projekty:',
    'projects.tech': 'Technologie',
    'about.eyebrow': '02 / o mnie',
    'about.title': 'Mechanika, elektronika i kod w jednym',
    'skills.eyebrow': '03 / umiejętności',
    'skills.title': 'Narzędzia i technologie',
    'contact.eyebrow': '04 / kontakt',
    'contact.title': 'Masz projekt, praktyki albo pytanie?',
    'contact.lead': 'Napisz — odpowiadam zwykle w ciągu jednego, dwóch dni.',
    'project.back': 'Wszystkie projekty',
    'project.spec': 'SPECYFIKACJA',
    'project.specAria': 'Specyfikacja projektu',
    'project.category': 'Kategoria',
    'project.date': 'Data',
    'project.role': 'Rola',
    'project.duration': 'Czas trwania',
    'project.github': 'Kod na GitHubie',
    'project.demo': 'Zobacz demo',
    'project.newer': '← Poprzedni',
    'project.older': 'Następny →',
    'project.other': 'Inne projekty',
    'footer.sheet': 'REV. A · ARKUSZ 1/1',
    'cat.robotyka': 'Robotyka',
    'cat.elektronika': 'Elektronika',
    'cat.cad': 'CAD / Mechanika',
    'cat.embedded': 'Embedded',
    'cat.automatyka': 'Automatyka',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.aria': 'Main navigation',
    'nav.skip': 'Skip to content',
    'nav.home': 'home page',
    'nav.theme': 'Toggle light / dark theme',
    'nav.switchLang': 'Przełącz na polski',
    'hero.cta': 'See projects',
    'hero.contact': 'Contact',
    'hero.summary': 'Summary',
    'hero.titleBlock': 'TITLE BLOCK',
    'hero.projects': 'Projects',
    'hero.areas': 'Areas',
    'hero.years': 'Years',
    'hero.location': 'Location',
    'hero.scale': 'SCALE 1:1',
    'projects.eyebrow': '01 / projects',
    'projects.title': 'What I built',
    'projects.filter': 'Filter projects',
    'projects.all': 'All',
    'projects.empty': 'No projects in this category.',
    'projects.shown': 'Projects shown:',
    'projects.tech': 'Technologies',
    'about.eyebrow': '02 / about',
    'about.title': 'Mechanics, electronics and code in one',
    'skills.eyebrow': '03 / skills',
    'skills.title': 'Tools and technologies',
    'contact.eyebrow': '04 / contact',
    'contact.title': 'Got a project, internship or question?',
    'contact.lead': 'Drop me a message — I usually reply within a day or two.',
    'project.back': 'All projects',
    'project.spec': 'SPECIFICATION',
    'project.specAria': 'Project specification',
    'project.category': 'Category',
    'project.date': 'Date',
    'project.role': 'Role',
    'project.duration': 'Duration',
    'project.github': 'Code on GitHub',
    'project.demo': 'Watch demo',
    'project.newer': '← Previous',
    'project.older': 'Next →',
    'project.other': 'Other projects',
    'footer.sheet': 'REV. A · SHEET 1/1',
    'cat.robotyka': 'Robotics',
    'cat.elektronika': 'Electronics',
    'cat.cad': 'CAD / Mechanical',
    'cat.embedded': 'Embedded',
    'cat.automatyka': 'Automation',
  },
} as const;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)['pl']) => ui[lang][key];
}

export function homePath(lang: Lang) {
  return url(lang === 'pl' ? '' : 'en/');
}

export function projectPath(lang: Lang, slug: string) {
  return url(lang === 'pl' ? `projekty/${slug}/` : `en/projects/${slug}/`);
}
