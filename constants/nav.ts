import { createNavChildren } from "@/helper/utils";
import { NavCategory, NavigationItem } from "@/types/nav";

const navCategories: NavCategory[] = [
  {
    id: "outdoor",
    label: "Зовнішня реклама",
    anchor: "outdoor-advertising",
  },
  {
    id: "window",
    label: "Оформлення вітрин і декор інтер'єру",
    anchor: "window-display-decor",
  },
  {
    id: "print",
    label: "Поліграфія і широкоформатний друк",
    anchor: "print-large-format",
  },
  {
    id: "nonpromo",
    label: "Нерекламна продукція",
    anchor: "non-promotional-products",
  },
];

const navChildrenServices = [
  {
    id: "all-services",
    label: "Всі послуги",
    link: "/services",
  },
  ...createNavChildren("/services", navCategories),
];
const navChildrenPortfolio = [
  {
    id: "all-services",
    label: "Всі послуги",
    link: "/portfolio",
  },
  ...createNavChildren("/portfolio", navCategories),
];

export const navigation: NavigationItem[] = [
  {
    id: "home",
    label: "Головна",
    link: "/",
  },
  {
    id: "about",
    label: "Про компанію",
    link: "/about",
  },
  {
    id: "services",
    label: "Послуги",
    children: navChildrenServices,
  },
  {
    id: "portfolio",
    label: "Портфоліо",
    children: navChildrenPortfolio,
  },
  {
    id: "contacts",
    label: "Контакти",
    link: "/contacts",
  },
];
