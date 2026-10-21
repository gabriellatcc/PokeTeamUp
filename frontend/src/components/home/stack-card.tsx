import type { StackItem } from "@/lib/content/stack-content";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const StackCard: React.FC<StackItem> = ({
  version,
  title,
  description,
  iconClass: Icon,
  iconColorClass,
  specificDetail
}) => {
  const isRawColor = /^(var\(|oklch\(|hsl\(|rgb\(|#|color-mix\()/.test(iconColorClass);

  const iconColor = isRawColor
    ? iconColorClass
    : `var(--color-${iconColorClass.replace(/^text-/, "")})`;
  const [detailText, isActive] = specificDetail ?? [];
  return (
    <Card className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border-2 border-foreground/10 border-b-4 border-b-foreground;50 bg-secondary/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--shadow-color)]/30 hover:border-b-foreground/50 hover:shadow-md dark:hover:border-foreground/80 dark:hover:shadow-[0_0_5px_-2px_var(--chart-2)]">
      {version && (
        <span className="absolute top-4 right-4 border border-foreground/10 rounded-xl bg-secondary/75 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-foreground/80">
          {version}
        </span>
      )}

      <CardHeader className="p-0 pb-3">
        <CardTitle className="flex items-center gap-3 pr-12">
         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/15 bg-[color-mix(in_srgb,var(--icon-color)_15%,transparent)] dark:bg-[color-mix(in_srgb,var(--icon-color)_10%,transparent)]"
            style={{ "--icon-color": iconColor } as React.CSSProperties}
          >
            <Icon
              className="text-2xl transition-transform duration-200 group-hover:scale-110"
              style={{ color: iconColor }}
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-['Press_Start_2P',monospace] text-base font-bold leading-snug tracking-tight text-foreground break-words">
              {title}
            </span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-0">
        <p className="text-1xl font-normal leading-relaxed text-foreground/80">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-0">
        {specificDetail && (
          <div className="mt-6 flex w-full items-center justify-between border-t border-foreground pt-3 text-[11px]">
            <span className="font-semibold uppercase tracking-wider text-foreground/80">
              {detailText}
            </span>
            <span
              className={`font-bold uppercase tracking-wider ${
                isActive ? "text-chart-4" : "text-destructive"
              }`}
            >
              {isActive ? "Active" : "Currently Inactive"}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};