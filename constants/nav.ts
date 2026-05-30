import { NavigationItem } from "@/types/nav";

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
    children: [
      {
        id: "outdoor",
        label: "Зовнішня реклама",
        link: "/services#outdoor-advertising",
      },
      {
        id: "window",
        label: "Оформлення вітрин і декор інтер'єру",
        link: "/services#window-display-decor",
      },
      {
        id: "print",
        label: "Поліграфія і широкоформатний друк",
        link: "/services#print-large-format",
      },
      {
        id: "nonpromo",
        label: "Нерекламна продукція",
        link: "/services#non-promotional-products",
      },
    ],
  },
  {
    id: "portfolio",
    label: "Портфоліо",
    link: "/portfolio",
  },
  {
    id: "contacts",
    label: "Контакти",
    link: "/contacts",
  },
];
