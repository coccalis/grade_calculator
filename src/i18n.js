import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          title: "Calculate your grade!",
          inputTH: "Theory Percentage ",
          inputLB: "Lab Percentage",
          inputLBG: "Lab Grade",
          buttonCl: "Calculate",
          error: "Please enter the percentage",
          result: "The minimum theory grade required to pass is:",
        },
      },
      el: {
        translation: {
          title: "Υπολογίστε τον βαθμό σας!",
          inputTH: "Ποσοστό Θεωρίας",
          inputLB: "Ποσοστό Εργαστηρίου",
          inputLBG: "Βαθμός Εργαστηρίου",
          buttonCl: "Υπολογισμός",
          error: "Παρακαλώ εισάγετε το ποσοστό",
          result:
            "Η ελάχιστη βαθμολογία στη θεωρία που απαιτείται για να περάσετε είναι:",
        },
      },
    },
  });
