/** @jsx jsx */
import Input from "./Input";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "components|Input",
  component: Input,
  decorators: [withKnobs]
};

export const input = () => {
  const type = select(
    "type",
    ["checkbox", "email", "file", "radio", "password", "text", "tel", "url"],
    "text"
  );
  const width = text("width", "100%");
  const placeholder = text("placeholder", "Input here!");
  const id = text("id", "component");
  const disabled = boolean("disabled", false);
  const checked = boolean("checked", false);

  return (
    <Input
      type={type}
      width={width}
      placeholder={placeholder}
      id={id}
      disabled={disabled}
      checked={checked}
    />
  );
};

input.story = {
  name: "Default"
};

const inputWrapper = css`
  .description {
    margin-bottom: 2rem;
    color: #000;
  }
  .inputs {
    width: 200px;
    margin-bottom: 50px;
  }
`;

export const allInputs = () => {
  const width = text("width", "100%");
  const placeholder = text("placeholder", "Input here!");
  const id = text("id", "component");
  const disabled = boolean("disabled", false);
  const checked = boolean("checked", false);

  return (
    <div css={inputWrapper}>
      <div className="inputs">
        <div className="description">text</div>
        <Input
          type="text"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">password</div>
        <Input
          type="password"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">number</div>
        <Input
          type="number"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">email</div>
        <Input
          type="email"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">tel</div>
        <Input
          type="tel"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">url</div>
        <Input
          type="url"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">checkbox</div>
        <Input
          type="checkbox"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">radio</div>
        <Input
          type="radio"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="inputs">
        <div className="description">file</div>
        <Input
          type="file"
          width={width}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          checked={checked}
        />
      </div>
    </div>
  );
};
