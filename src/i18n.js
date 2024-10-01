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
          tab1: "Minimum Grade Calculator",
          tab2: "Grade Breakdown",
          inputTH: "Theory Percentage ",
          inputLB: "Lab Percentage",
          inputTHG: "Theory Grade",
          inputLBG: "Lab Grade",
          inputTLG: "Total Grade",
          buttonClTH: "Calculate theory grade",
          buttonClLB: "Calculate lab grade",
          error: "Please enter the percentage",
          resultTH: "The minimum theory grade required to pass is:",
          resultLB: "The minimum lab grade required to pass is:",
          resultTLGTH: "The grade you scored in lab is: ",
          resultTLGLB: "The grade you scored in theory is: ",
          warning:
            "Please ensure that the percentages are within the allowed range.",
          grderror: "The grade must be between 0 and 10.",
          resultInvalid: "The result exceeds the maximum grade limit of 10.",
          toolTip1: "This tool helps you calculate the grade you need to pass.",
          toolTip2:
            "This tool helps you find the grade you got either in theory or in the lab.",
        },
      },
      el: {
        translation: {
          tab1: "Υπολογιστής Ελάχιστου Βαθμού",
          tab2: "Ανάλυση Τελικού Βαθμού",
          inputTH: "Ποσοστό Θεωρίας",
          inputLB: "Ποσοστό Εργαστηρίου",
          inputLBG: "Βαθμός Εργαστηρίου",
          inputTHG: "Βαθμός Θεωρίας",
          inputTLG: "Συνολικός Βαθμός",
          buttonClTH: "Υπολογισμός βαθμού θεωρίας",
          buttonClLB: "Υπολογισμός βαθμού εργαστηρίου",
          error: "Παρακαλώ εισάγετε το ποσοστό",
          resultTH:
            "Η ελάχιστη βαθμολογία στη θεωρία που απαιτείται για να περάσετε είναι:",
          resultLB:
            "Η ελάχιστη βαθμολογία στο εργαστήριο που απαιτείται για να περάσετε είναι:",
          resultTLGTH: "Ο βαθμός που πήρατε στην εργαστήριο είναι: ",
          resultTLGLB: "Ο βαθμός που πήρατε στο θεωρία είναι: ",
          warning:
            "Παρακαλώ βεβαιωθείτε ότι τα ποσοστά είναι εντός των επιτρεπόμενων ορίων.",
          grderror: "Ο βαθμός πρέπει να είναι μεταξύ 0 και 10",
          resultInvalid:
            "Το αποτέλεσμα υπερβαίνει το μέγιστο όριο βαθμολογίας 10.",
          toolTip1:
            "Αυτό το εργαλείο σας βοηθά να υπολογίσετε το βαθμό που χρειάζεστε για να περάσετε.",
          toolTip2:
            "Αυτό το εργαλείο σας βοηθά να βρείτε τον βαθμό που πήρατε είτε στην θεωρία είτε στο εργαστήριο.",
        },
      },
    },
  });
