import { warning } from "framer-motion";
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
          inputTHG: "Theory Grade",
          inputLBG: "Lab Grade",
          buttonCl: "Calculate",
          error: "Please enter the percentage",
          resultTH: "The minimum theory grade required to pass is:",
          resultLB: "The minimum lab grade required to pass is:",
          warning:
            "Please ensure that the percentages are within the allowed range.",
          grderror: "The grade must be between 0 and 10.",
        },
      },
      el: {
        translation: {
          title: "Υπολογίστε τον βαθμό σας!",
          inputTH: "Ποσοστό Θεωρίας",
          inputLB: "Ποσοστό Εργαστηρίου",
          inputLBG: "Βαθμός Εργαστηρίου",
          inputTHG: "Βαθμός Θεωρίας",
          buttonCl: "Υπολογισμός",
          error: "Παρακαλώ εισάγετε το ποσοστό",
          resultTH:
            "Η ελάχιστη βαθμολογία στη θεωρία που απαιτείται για να περάσετε είναι:",
          resultLB:
            "Η ελάχιστη βαθμολογία στο εργαστήριο που απαιτείται για να περάσετε είναι:",
          warning:
            "Παρακαλώ βεβαιωθείτε ότι τα ποσοστά είναι εντός των επιτρεπόμενων ορίων.",
          grderror: "Ο βαθμός πρέπει να είναι μεταξύ 0 και 10",
        },
      },
    },
  });
