export default function getUrl(url: string): string {
  if (!url.includes("https")) {
    return `https://${url}`;
  }

  return url;
}
