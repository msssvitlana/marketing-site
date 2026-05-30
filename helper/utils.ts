const withBlurClick = (
  e: React.MouseEvent<HTMLElement>,
  callback?: () => void,
) => {
  callback?.();

  e.currentTarget.blur();
};

export default withBlurClick;
