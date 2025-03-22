// app/components/ui/SectionTitle.tsx
type SectionTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}