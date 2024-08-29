import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

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
    <div className="flex flex-row w-full justify-end">
      {languages.map((lng) => {
        return (
          <Button
            disableRipple
            className={`bg-transparent ${
              lng.code === i18n.language ? `font-bold underline` : `font-normal`
            }  text-white`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
