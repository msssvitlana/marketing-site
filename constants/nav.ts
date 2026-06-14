import { createNavChildren } from "@/helper/utils";
import { NavigationItem, ServiceCategory } from "@/types/nav";

const serviceCategories: ServiceCategory[] = [
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

const allServicesItem: NavigationItem = {
  id: "all-services",
  label: "Всі послуги",
  link: "/services",
};

const allPortfolioItem: NavigationItem = {
  id: "all-portfolio",
  label: "Всі роботи",
  link: "/portfolio",
};

const navChildrenServices: NavigationItem[] = [
  allServicesItem,
  ...createNavChildren("/services", serviceCategories),
];
const navChildrenPortfolio: NavigationItem[] = [
  allPortfolioItem,
  ...createNavChildren("/portfolio", serviceCategories),
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
