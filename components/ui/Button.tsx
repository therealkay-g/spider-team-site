import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-spider-accent text-spider-black hover:bg-white transition-colors font-bold",
    secondary: "glass text-white hover:bg-white/10 transition-colors",
    ghost: "bg-transparent text-white hover:bg-white/5 transition-colors",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full text-sm transition-all active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
