import breakpoints from "../constants/breakpoints";

export const mediaQueries = {
  small: `@media only screen and (max-width: ${breakpoints.small}px)`,
  medium: `@media only screen and (max-width: ${breakpoints.medium}px)`,
  desktop: `@media only screen and (max-width: ${breakpoints.desktop}px)`,
  wideScreen: `@media only screen and (min-width: ${breakpoints.wideScreen}px)`,
};
