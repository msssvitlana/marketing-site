export type NavigationItem = {
  id: string;
  label: string;
  link?: string;
  children?: NavigationItem[];
};

export type NavCategory = {
  id: string;
  label: string;
  anchor: string;
};
