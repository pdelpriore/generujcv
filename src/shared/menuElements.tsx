import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faPortrait,
  faFileAlt,
  faLanguage,
  faFistRaised,
  faHiking,
  faUniversity,
  faIndustry,
  faFileWord,
  faWindowMaximize,
  faAddressCard,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface MenuElements {
  icon: IconDefinition;
  content: string;
}

interface LanguageLevelValue {
  [key: string]: number;
}

interface CountryCode {
  [key: string]: string;
}

export const menuElements: MenuElements[] = [
  { icon: faPortrait, content: "zdjęcie" },
  { icon: faAddressCard, content: "dane osobowe" },
  { icon: faFileAlt, content: "dane kontaktowe" },
  { icon: faLanguage, content: "języki obce" },
  { icon: faFistRaised, content: "mocne strony" },
  { icon: faHiking, content: "hobby" },
  { icon: faUniversity, content: "dyplomy" },
  { icon: faIndustry, content: "doświadczenie" },
  { icon: faFileWord, content: "kompetencje" },
  { icon: faWindowMaximize, content: "projekty" },
];

export const languagelevels: string[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const languageLevelValue: LanguageLevelValue = languagelevels.reduce(
  (accumulator, current, index) => ({ ...accumulator, [current]: index + 1 }),
  {}
);

export const contactIcons: IconDefinition[] = [
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faLinkedin,
];

export const countryCode: CountryCode = {
  polski: "pl",
  czeski: "cz",
  słowacki: "sk",
  słoweński: "si",
  węgierski: "hu",
  rumuński: "ro",
  bułgarski: "bg",
  białoruski: "by",
  ukraiński: "ua",
  rosyjski: "ru",
  angielski: "gb",
  niemiecki: "de",
  francuski: "fr",
  włoski: "it",
  hiszpański: "es",
  portugalski: "pt",
  holenderski: "nl",
  niderlandzki: "nl",
  szwedzki: "se",
  norweski: "no",
  islandzki: "is",
  grecki: "gr",
  japoński: "jp",
  chiński: "cn",
  mandaryński: "cn",
  wietnamski: "vn",
  koreański: "kr",
};
