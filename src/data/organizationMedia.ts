// Logos live in public/images/organizations/ and are served as plain static files.
const image = (key: string, alt: string) => ({ src: `/images/organizations/${key}.webp`, alt });

export const organizationMedia = {
  revigurize: image("revigurize", "Revigurize app icon"),
  qita: image("qita", "Qita by BRI app icon"),
  mytelkomsel: image("mytelkomsel", "MyTelkomsel app icon"),
  umi: image("umi", "Universitas Muslim Indonesia logo"),
  darmstadt: image("darmstadt", "Technische Universität Darmstadt logo"),
  ui: image("ui", "Universitas Indonesia emblem"),
  apple: image("apple", "Apple logo"),
};
