"use client";

import { ReactNode, useMemo } from "react";
import { useStore } from "react-redux";

import { DefaultKeys, ThPreferences } from "@/preferences/preferences";
import { myPreferences } from "@/preferences/myPreferences";

import { ThPreferencesProvider } from "@/preferences/ThPreferencesProvider";
import { ThReduxPreferencesAdapter } from "@/lib/ThReduxPreferencesAdapter";

import { RootState } from "@/lib/store";

export const StatefulPreferencesProvider = ({ 
  children,
  initialPreferences = myPreferences as ThPreferences<DefaultKeys>
}: { 
  children: ReactNode;
  initialPreferences?: ThPreferences<DefaultKeys>;
}) => {
  const store = useStore<RootState>();
  
  const adapter = useMemo(() => {
    return new ThReduxPreferencesAdapter<DefaultKeys>(store, initialPreferences);
  }, [store, initialPreferences]);
  
  return (
    <ThPreferencesProvider adapter={ adapter }>
      { children }
    </ThPreferencesProvider>
  );
}
