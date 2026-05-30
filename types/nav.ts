export type NavigationItem = {
  id: string;
  label: string;
  link?: string;
  children?: NavigationItem[];
};
