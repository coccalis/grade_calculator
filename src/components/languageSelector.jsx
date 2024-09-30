import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { CountryFlags } from "../assets/icons/CountryFlagIcons";

const languages = [
  { code: "en", lang: "EN" },
  { code: "el", lang: "EL" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex flex-row w-full justify-start">
      {languages.map((lng) => {
        return (
          <Button
            disableRipple
            size="sm"
            className={`bg-transparent ${
              lng.code === i18n.language ? `font-bold underline` : `font-normal`
            }  text-[#405e89]`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <CountryFlags lng={lng.lang} /> {lng.lang}
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
