import revigurize from "@/assets/organizations/revigurize.webp.asset.json";
import qita from "@/assets/organizations/qita.webp.asset.json";
import mytelkomsel from "@/assets/organizations/mytelkomsel.webp.asset.json";
import umi from "@/assets/organizations/umi.webp.asset.json";
import darmstadt from "@/assets/organizations/darmstadt.webp.asset.json";
import ui from "@/assets/organizations/ui.webp.asset.json";
import apple from "@/assets/organizations/apple.webp.asset.json";

const image = (asset: { url: string }, key: string, alt: string) => ({
  src: import.meta.env.DEV ? asset.url : `/images/organizations/${key}.webp`,
  alt,
});

export const organizationMedia = {
  revigurize: image(revigurize, "revigurize", "Revigurize app icon"),
  qita: image(qita, "qita", "Qita by BRI app icon"),
  mytelkomsel: image(mytelkomsel, "mytelkomsel", "MyTelkomsel app icon"),
  umi: image(umi, "umi", "Universitas Muslim Indonesia logo"),
  darmstadt: image(darmstadt, "darmstadt", "Technische Universität Darmstadt logo"),
  ui: image(ui, "ui", "Universitas Indonesia emblem"),
  apple: image(apple, "apple", "Apple logo"),
};