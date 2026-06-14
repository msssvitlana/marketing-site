import { ServiceCategory, NavigationItem } from "@/types/nav";

export const withBlurClick = (
  e: React.MouseEvent<HTMLElement>,
  callback?: () => void,
) => {
  callback?.();

  e.currentTarget.blur();
};

export const createNavChildren = (
  baseURL: string,
  categories: readonly ServiceCategory[],
): NavigationItem[] =>
  categories.map(({ id, label, anchor }) => ({
    id,
    label,
    link: `${baseURL}#${anchor}`,
  }));
