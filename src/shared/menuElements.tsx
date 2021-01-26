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
} from "@fortawesome/free-solid-svg-icons";

interface MenuElements {
  icon: IconDefinition;
  content: string;
}

export const menuElements: MenuElements[] = [
  { icon: faPortrait, content: "zdjęcie" },
  { icon: faFileAlt, content: "dane osobowe" },
  { icon: faAddressCard, content: "dane kontaktowe" },
  { icon: faLanguage, content: "języki obce" },
  { icon: faFistRaised, content: "mocne strony" },
  { icon: faHiking, content: "hobby" },
  { icon: faUniversity, content: "dyplomy" },
  { icon: faIndustry, content: "doświadczenie" },
  { icon: faFileWord, content: "kompetencje" },
  { icon: faWindowMaximize, content: "projekty" },
];
