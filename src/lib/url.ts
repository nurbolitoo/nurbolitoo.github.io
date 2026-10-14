// Добавляет base-путь сайта (нужно, если сайт живёт не в корне домена).
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
