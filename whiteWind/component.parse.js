import cheerio from "cheerio";
import { get } from "../get.js";
import shema from "../model/product.js";
export class ComponentParse {
  constructor(uri, maxIndex) {
    this.uri = uri;
    this.maxIndex = maxIndex;
  }
  async load(index) {
    const data = await get(this.uri + index);
    const selector = await cheerio.load(data);
    return selector;
  }
  async save(data) {
    const candidate = await shema.findOne({ title: data.title });
    if (!candidate) new shema({ ...data, type: "component", shop: "Белый ветер" }).save();
  }
  async parse(index) {
    const selector = await this.load(index);
    selector(".bx_catalog_list_home .bx_catalog_item.double").each(async (i) => {
      let title = selector(".bx_catalog_list_home .bx_catalog_item_title_text").eq(i).text();
      let prise = selector(".bx_catalog_list_home .bx_catalog_item_price")
        .eq(i)
        .clone()
        .children()
        .remove()
        .text()
        .replace(/\s/g, "")
        .split("₸")[0]
        .replace(/[a-zа-яё]/gi, "");

      let description = selector(".bx_catalog_list_home .bx_catalog_item_articul").eq(i).text().split("/");
      let image = "https:" + selector(".bx_catalog_list_home .bx_catalog_item_images").eq(i).css("background-image").split("'")[1];
      description = description.map((item) => item.replace(/\n/g, "").replace(/\t/g, "").replace(" ", ""));
      let product = { title, prise, image, description };
      await this.save(product);
    });
  }
  async main() {
    for (let i = 1; i <= this.maxIndex; i++) {
      this.parse(i);
    }
  }
}
