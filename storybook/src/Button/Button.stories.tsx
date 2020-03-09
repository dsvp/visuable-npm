/** @jsx jsx */
import Button from "./Button";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|Button",
  component: Button,
  decorators: [withKnobs]
};

export const button = () => {
  const children = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select(
    "theme",
    ["black", "white", "blue", "red", "transparent"],
    "black"
  );
  const disabled = boolean("disabled", false);
  const width = text("width", "");
  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {children}
    </Button>
  );
};

button.story = {
  name: "Default"
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    color: #000;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const allButtons = () => {
  const children = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const disabled = boolean("disabled", false);
  const width = text("width", "");
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">black</div>
        <Button theme="black" size={size} disabled={disabled} width={width}>
          {children}
        </Button>
      </div>
      <div>
        <div className="description">white</div>
        <Button theme="white" size={size} disabled={disabled} width={width}>
          {children}
        </Button>
      </div>
      <div>
        <div className="description">blue</div>
        <Button theme="blue" size={size} disabled={disabled} width={width}>
          {children}
        </Button>
      </div>
      <div>
        <div className="description">red</div>
        <Button theme="red" size={size} disabled={disabled} width={width}>
          {children}
        </Button>
      </div>
      <div>
        <div className="description">transparent</div>
        <Button
          theme="transparent"
          size={size}
          disabled={disabled}
          width={width}
        >
          {children}
        </Button>
      </div>
    </div>
  );
};
