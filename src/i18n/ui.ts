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
    'nav.contact': 'Kontakt',
    'nav.aria': 'Główna nawigacja',
    'nav.skip': 'Przejdź do treści',
    'nav.home': 'strona główna',
    'nav.theme': 'Przełącz motyw jasny / ciemny',
    'nav.switchLang': 'Switch to English',
    'hero.cta': 'Zobacz projekty',
    'hero.contact': 'Kontakt',
    'projects.title': 'Projekty',
    'projects.tech': 'Technologie',
    'about.title': 'O mnie',
    'skills.title': 'Umiejętności',
    'contact.title': 'Kontakt',
    'contact.lead': 'Praktyki, współpraca albo pytanie o projekt — napisz.',
    'project.back': 'Wszystkie projekty',
    'project.specAria': 'Specyfikacja projektu',
    'project.role': 'Rola',
    'project.duration': 'Czas trwania',
    'project.github': 'Kod na GitHubie',
    'project.demo': 'Zobacz demo',
    'project.newer': '← Poprzedni',
    'project.older': 'Następny →',
    'project.other': 'Inne projekty',
    'cat.robotyka': 'Robotyka',
    'cat.elektronika': 'Elektronika',
    'cat.cad': 'CAD / Mechanika',
    'cat.embedded': 'Embedded',
    'cat.automatyka': 'Automatyka',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.aria': 'Main navigation',
    'nav.skip': 'Skip to content',
    'nav.home': 'home page',
    'nav.theme': 'Toggle light / dark theme',
    'nav.switchLang': 'Przełącz na polski',
    'hero.cta': 'See projects',
    'hero.contact': 'Contact',
    'projects.title': 'Projects',
    'projects.tech': 'Technologies',
    'about.title': 'About',
    'skills.title': 'Skills',
    'contact.title': 'Contact',
    'contact.lead': 'Internships, collaboration or a question about a project — get in touch.',
    'project.back': 'All projects',
    'project.specAria': 'Project specification',
    'project.role': 'Role',
    'project.duration': 'Duration',
    'project.github': 'Code on GitHub',
    'project.demo': 'Watch demo',
    'project.newer': '← Previous',
    'project.older': 'Next →',
    'project.other': 'Other projects',
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
