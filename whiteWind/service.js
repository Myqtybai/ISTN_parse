import { CameraParse } from "./camera.parse.js";
import { ComponentParse } from "./component.parse.js";
import { PhoneParse } from "./phone.parse.js";
import { TelevisionParse } from "./television.parse.js";

export const windService = async () => {
  console.log("wind");
  const phoneParse = new PhoneParse("https://shop.kz/smartfony/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=");
  const cameraParse = new CameraParse("https://shop.kz/fotoapparaty/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/");
  const television = new TelevisionParse("https://shop.kz/televizory/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=");
  const componentParseProccess = new ComponentParse("https://shop.kz/protsessory/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=", 4); //Процесор
  const componentParsePlata = new ComponentParse("https://shop.kz/materinskie-platy/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=", 12); //Материнская плата
  const componentParseOzu = new ComponentParse("https://shop.kz/operativnaya-pamyat/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=", 10); //озу
  const componentParseVideoCard = new ComponentParse("https://shop.kz/videokarty/filter/almaty-is-v_nalichii-or-ojidaem-or-dostavim/apply/?PAGEN_1=", 2); //Видео карта
  /*
https://docs.nestjs.com/modules
*/
  await phoneParse.main();
  await cameraParse.main();
  await television.main();
  await componentParseProccess.main();
  await componentParsePlata.main();
  await componentParseOzu.main();
  await componentParseVideoCard.main();
};
