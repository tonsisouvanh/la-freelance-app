// src/utils/tailwindMerge.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function tailwindMerge(
  ...classes: (string | undefined | null | boolean)[]
) {
  return twMerge(clsx(classes));
}
