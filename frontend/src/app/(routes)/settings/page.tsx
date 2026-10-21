"use client";

import { useAuth } from "@/hooks/useAuth";
import { SettingsSheet } from "@/components/settings/settings-sheet";

export default function SettingsPage() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) return null;

  return <SettingsSheet />;
}