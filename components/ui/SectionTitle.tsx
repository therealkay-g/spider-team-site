import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { KineticText } from "@/components/ui/KineticText";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, className, centered = true }: SectionTitleProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <KineticText className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 block">
        {title}
      </KineticText>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-spider-accent mt-6",
        centered ? "mx-auto" : "mx-0"
      )} />
    </div>
  );
};
