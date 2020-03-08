import { configure, addParameters } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(
  require.context("../src", true, /\.stories\.(js|mdx|tsx)$/),
  module,
  addParameters({
    backgrounds: [
      { name: "white", value: "#fff", default: true },
      { name: "lightgray", value: "lightgray" },
      { name: "gray", value: "gray" },
      { name: "black", value: "#000" }
    ]
  })
);
