import { useLanguage } from "@/contexts/LanguageContext";
export default function LanguageSelector() {
    const { locale, setLocale } = useLanguage();
    const changeLanguage = (event) => {
      const newLocale = event.target.value;
      setLocale(newLocale);
    };
    return (
      <select style={{background:'transparent', marginBottom:'13px'}} onChange={changeLanguage} value={locale}>
        <option style={{background:'black'}} value="en">English</option>
        <option style={{background:'black'}} value="es">Spanish</option>
        <option style={{background:'black'}} value="fr">French</option>
        <option style={{background:'black'}} value="vi">Vietnamese</option>
      </select>
    );
  }