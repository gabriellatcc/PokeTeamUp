import { useMemo } from "react";

import { SiteNavItem, BASE_NAV_ITEMS } from "../lib/content/site-content";

export function useSiteNavItems(): SiteNavItem[] {
  return useMemo(() => {
    const items: SiteNavItem[] = [...BASE_NAV_ITEMS];
    return items;
  }, [BASE_NAV_ITEMS]);
}
