import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        title: "Кадровые процессы автоматизированы, с возвращением!",
        content: {
          description:
            "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. Earth orbits around the Sun in 365.256 solar days, a period known as an Earth side real year. During this time, Earth rotates about its axis 366.256 times, that is, a side real year has 366.256 side real days.",
          source: "Source: ",
        },
      },
    },
    en: {
      translation: {
        title: "HR processes are automated, welcome back!",
        content: {
          description:
            "Die Erde ist der dritte Planet von der Sonne und das einzige astronomische Objekt, von dem bekannt ist, dass es Leben beherbergt. Nach radiometrischen Datierungsschätzungen und anderen Beweisen hat sich die Erde vor über 4,5 Milliarden Jahren gebildet. Die Schwerkraft der Erde interagiert mit anderen Objekten im Weltraum, insbesondere mit Sonne und Mond, dem einzigen natürlichen Satelliten der Erde. Die Erde umkreist die Sonne in 365.256 Sonnentagen, einer Periode, die als erdseitiges reales Jahr bekannt ist. Während dieser Zeit dreht sich die Erde 366,256-mal um ihre Achse, dh ein reales Seitenjahr hat 366,256 reale Seitentage.",
          source: "Quelle: ",
        },
      },
    },
  },
  lng: "en",
  supportedLngs: ["ru", "en"],
});
export default i18n;
