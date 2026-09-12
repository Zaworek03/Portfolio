// Buduje adres z uwzględnieniem `base` z astro.config.mjs (np. /Portfolio/)
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
