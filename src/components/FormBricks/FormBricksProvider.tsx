'use client';

import { useEffect } from 'react';
import formbricks from '@formbricks/js';
import { usePathname, useSearchParams } from 'next/navigation';

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize the SDK
    formbricks.setup({
      environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID!,
      appUrl: "https://app.formbricks.com", 
    });
  }, []);

  useEffect(() => {
    // Tells Formbricks the page changed so it can trigger route-specific surveys
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}