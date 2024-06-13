// renders the Swap tokens heading in the project with the swap card component
import SwapCard from "./Components/SwapCard";
import { useLanguage } from "@/contexts/LanguageContext";
import en from "../../translations/en.json"
import es from "../../translations/es.json"
import fr from "../../translations/fr.json"
import vi from "../../translations/vi.json"
const translations = { en, es, fr, vi }

function SwapSection(params) {
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <div className="w-[95%] m-auto relative z-10 ">
      <h3 className="max-w-full uppercase styled-border p-auto m-auto lg:m-0 md:m-0 sm:m-0 text-center">
        {t?.TitleSwap}
      </h3>
      <SwapCard />
    </div>
  );
}
export default SwapSection;
