import { useLanguage } from "@/contexts/LanguageContext"
import en from "../../translations/en.json"
import es from "../../translations/es.json"
import fr from "../../translations/fr.json"
import vi from "../../translations/vi.json"
const translations = { en, es, fr, vi }

function ServicesList(params) {
  const { locale } = useLanguage();
  const t = translations[locale];

  const services = t?.services;
  return (
    <div className="w-full">
      {services?.map((e, i) => {
        return (
          <div
            key={i}
            className=" text-right border-t-2 border-[#061e5e] justify-end flex p-5 pl-[42%]  "
          >
            <img
              src="https://assets-global.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg"
              loading="lazy"
              alt=""
            />
            <p className="paragraph hero-feature-paragraph">{e}</p>
          </div>
        );
      })}
      <div className=" text-right border-t-2 border-[#061e5e] justify-end flex p-5 pl-[42%] ">
        <p className="paragraph hero-feature-paragraph ">
          <span className="text-[#E2255E]">{t.andMuchMore}</span>
        </p>
      </div>
    </div>
  );
}
export default ServicesList;
