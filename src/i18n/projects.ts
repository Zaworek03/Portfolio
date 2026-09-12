import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './ui';

export interface LocalizedProject {
  slug: string;
  entry: CollectionEntry<'projects'>;
}

// Pliki: src/content/projects/<slug>/pl.md oraz opcjonalnie en.md.
// Brak tłumaczenia → używana jest wersja polska.
export async function getProjects(lang: Lang): Promise<LocalizedProject[]> {
  const bySlug = new Map<string, Partial<Record<Lang, CollectionEntry<'projects'>>>>();

  for (const entry of await getCollection('projects')) {
    const [slug, entryLang] = entry.id.split('/') as [string, Lang];
    bySlug.set(slug, { ...bySlug.get(slug), [entryLang]: entry });
  }

  return [...bySlug.entries()]
    .map(([slug, versions]) => ({ slug, entry: versions[lang] ?? versions.pl ?? versions.en! }))
    .sort(
      (a, b) =>
        Number(b.entry.data.featured) - Number(a.entry.data.featured) ||
        b.entry.data.date.getTime() - a.entry.data.date.getTime(),
    );
}
