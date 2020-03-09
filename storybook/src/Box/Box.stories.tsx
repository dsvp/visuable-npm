/** @jsx jsx */
import Box from "./Box";
import { jsx, css } from "@emotion/core";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "components|Box",
  component: Box,
  decorators: [withKnobs]
};

export const box = () => {
  const children = text("children", "Box");
  const width = text("width", "auto");
  const height = text("height", "auto");
  const padding = text("padding", "30px");
  const background = text("background", "#f5f5f5");

  return (
    <Box
      width={width}
      height={height}
      padding={padding}
      background={background}
    >
      {children}
    </Box>
  );
};

box.story = {
  name: "Default"
};

const boxWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    color: #000;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const allBoxes = () => {
  const children = text("children", "Box");
  const width = text("width", "auto");
  const height = text("height", "auto");
  const padding = text("padding", "30px");
  const background = text("background", "#f5f5f5");
  return (
    <div css={boxWrapper}>
      <div>
        <div className="description">normal</div>
        <Box
          width={width}
          height={height}
          padding={padding}
          background={background}
        >
          {children}
        </Box>
      </div>
    </div>
  );
};
