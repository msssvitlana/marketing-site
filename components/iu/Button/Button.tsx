import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
