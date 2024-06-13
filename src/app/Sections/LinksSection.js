// renders the links to our social media 
import { Arrow_45 } from "../SVGS/Arrows";
import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../translations/en.json"
import es from "../../translations/es.json"
import fr from "../../translations/fr.json"
import vi from "../../translations/vi.json"
const translations = { en, es, fr, vi }

function LinksSection({ lastStage }) {
  const { locale } = useLanguage();
  const t = translations[locale];
  const links = t?.links

  return (
    <div className={`flex flex-col pt-11 w-[66%] m-auto  min-w-[300px] relative z-10 glass-blur`}>
      <div className="text-center w-full h-[72px]">
        <div className="text-xl font-bold text-center pb-10">
          <h2>Excellez Design Express</h2>
        </div>
      </div>
      <div className="w-full">
        <div
          className="grid grid-cols-2 p-8 w-[90%] m-auto"
          style={{ gridColumnGap: 0, gridRowGap: 0 }}
        >
          {links.map((e, i) => (
            <div
              key={i}
              className={` border-2 border-[#061e5e] border-x-0 p-4 ${i % 2 == 1 ? "text-right border-x-2" : "border-l-2"
                }`}
            >
              <p className="capitalize text-[#524E65]  text-[10px] m-0 ">
                {e.caption}
              </p>
              <div
                className={`flex ${i % 2 == 1 ? "justify-end" : "justify-start"
                  }`}
              >
                <h3
                  className={`uppercase whitespace-nowrap text-[12px] md:text-[16px] lg:text-[24px] sm:text-[12px] m-0 flex justify-center items-center ${i % 2 == 1 ? "text-right" : ""
                    }`}
                >
                  {e.app}
                </h3>
                {Arrow_45}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div
            className="w-[200px] h-[200px] absolute mx-auto translate-y-[calc(-100%-45px)]"
            ref={lastStage}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default LinksSection;
