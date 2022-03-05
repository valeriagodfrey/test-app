export const mediaWidths = {
  desktop: 1024,
  largeDesktop: 1200,
  extraLargeDesktop: 1439,
};

export const media = {
  desktop: `@media screen and (min-width: ${mediaWidths.desktop + 1}px)`,
  largeDesktop: `@media screen and (min-width: ${mediaWidths.largeDesktop + 1}px)`,
  extraLargeDesktop: `@media screen and (min-width: ${mediaWidths.extraLargeDesktop + 1}px)`,
};
