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
  const label = text("children", "BUTTON");
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
      {label}
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
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">black</div>
        <Button theme="black">button</Button>
      </div>
      <div>
        <div className="description">white</div>
        <Button theme="white">button</Button>
      </div>
      <div>
        <div className="description">blue</div>
        <Button theme="blue">button</Button>
      </div>
      <div>
        <div className="description">red</div>
        <Button theme="red">button</Button>
      </div>
      <div>
        <div className="description">transparent</div>
        <Button theme="transparent">button</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">black</div>
        <Button disabled theme="black">
          button
        </Button>
      </div>
      <div>
        <div className="description">white</div>
        <Button disabled theme="white">
          button
        </Button>
      </div>
      <div>
        <div className="description">blue</div>
        <Button disabled theme="blue">
          button
        </Button>
      </div>
      <div>
        <div className="description">red</div>
        <Button disabled theme="red">
          button
        </Button>
      </div>
      <div>
        <div className="description">transparent</div>
        <Button disabled theme="transparent">
          button
        </Button>
      </div>
    </div>
  );
};

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};
