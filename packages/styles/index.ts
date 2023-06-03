export * from "./theme";
export * from "./createStyles";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import "next/app";

export const {
  augmentDocumentWithEmotionCache: withDocumentEmotionCache,
  withAppEmotionCache,
} = createEmotionSsrAdvancedApproach({ key: "asha" });
