const base = "https://hazemgherissi.com";

export default function sitemap() {
  const maintenant = new Date();
  return [
    { url: base, lastModified: maintenant, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/mentions-legales`, lastModified: maintenant, changeFrequency: "yearly", priority: 0.2 },
  ];
}
