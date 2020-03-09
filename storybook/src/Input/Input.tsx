/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type InputProps = {
  /** 인풋의 형식을 설정합니다. */
  type:
    | "checkbox"
    | "email"
    | "file"
    | "radio"
    | "password"
    | "text"
    | "tel"
    | "url"
    | "number";
  /** 인풋의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 인풋의 예시 텍스트를 설정합니다. */
  placeholder?: string;
  /** 인풋의 네임 및 아이디를 설정합니다. */
  id?: string;
  /** 인풋의 수정 가능여부를 설정합니다. */
  disabled?: boolean;
  /** 인풋의 체크 가능여부를 설정합니다. */
  checked?: boolean;
};

/** `Input` 컴포넌트는 인풋을 간편하게 생성할 때 사용합니다.  */
const Input = ({
  type,
  width,
  placeholder,
  id,
  disabled,
  checked
}: InputProps) => {
  return (
    <div
      className={"visuable-input-" + type + "-" + id}
      css={[style, types[type], { width }]}
    >
      <input
        {...{ type }}
        {...{ placeholder }}
        name={id}
        id={id}
        {...{ disabled }}
        {...{ checked }}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  width: "100%",
  placeholder: "Input here!",
  id: "component",
  disabled: false,
  checked: false
};

const style = css`
  input[type="text"],
  input[type="password"],
  input[type="number"],
  input[type="tel"],
  input[type="email"],
  input[type="url"] {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    font-size: 16px;
  }
`;

const types = {
  text: css``,
  password: css``,
  number: css``,
  email: css``,
  tel: css``,
  url: css``,
  checkbox: css``,
  radio: css``,
  file: css``
};

export default Input;
