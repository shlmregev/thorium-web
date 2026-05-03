import { ThPreferences, DefaultKeys } from "./preferences";
import { defaultPreferences } from "./defaultPreferences";
import { ThLayoutUI } from "./models";

export const myPreferences: ThPreferences<DefaultKeys> = {
  ...defaultPreferences,
  theming: {
    ...defaultPreferences.theming,
    layout: {
      ...defaultPreferences.theming.layout,
      ui: {
        reflow: ThLayoutUI.stacked,
        fxl: ThLayoutUI.stacked,
        webPub: ThLayoutUI.stacked,
      }
    }
  },
  settings: {
    ...defaultPreferences.settings,
    keys: {
      ...defaultPreferences.settings.keys,
      columns: {
        keys: ["auto", 1],
        default: 1
      }
    }
  }
};
