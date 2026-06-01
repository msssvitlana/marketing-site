type IconProps = {
  width: number;
  height: number;
  name: string;
  className?: string;
};

const Icon = ({ width, height, name, className }: IconProps) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/icons/icons.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
