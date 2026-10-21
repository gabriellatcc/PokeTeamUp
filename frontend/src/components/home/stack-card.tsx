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
  const iconColor =
    iconColorClass.startsWith("var(") || iconColorClass.startsWith("oklch")
      ? iconColorClass
      : `var(--color-${iconColorClass.replace(/^text-/, "")})`;
  const [detailText, isActive] = specificDetail ?? [];
  return (
    <Card className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-2 border-foreground bg-card p-6 shadow-[0_6px_0_0_#1e293b] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#1e293b]">
      {version && (
        <span className="absolute top-4 right-4 rounded-md border border-foreground/10 bg-card px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-foreground/80 shadow-xs">
          {version}
        </span>
      )}

      <CardHeader className="p-0 pb-3">
        <CardTitle className="flex items-center gap-3 pr-12">
          {/* Ícone */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card border border-card">
            <Icon
              className="text-2xl transition-transform duration-200 group-hover:scale-110"
              style={{ color: iconColor }}
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-['Press_Start_2P',monospace] text-sm font-bold leading-snug tracking-tight text-foreground break-words">
              {title}
            </span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-0 pt-1">
        <p className="text-xs font-normal leading-relaxed text-foreground/80">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-0 pt-3">
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