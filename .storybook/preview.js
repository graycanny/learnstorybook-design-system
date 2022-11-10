import React from "react";

//! Global decorator to apply the styles to all stories https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators

import { GlobalStyle } from "../src/shared/global";

//! Global Parameters https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
