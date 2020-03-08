/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: "black" | "white" | "blue" | "red" | "transparent";
  /** 버튼의 크기를 설정합니다. */
  size: "small" | "medium" | "big";
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  children,
  theme,
  size,
  disabled,
  width,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={"visuable-button-" + theme}
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "button",
  theme: "black",
  size: "medium",
  width: "auto"
};

const style = css`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1em;
    margin-right: 1em;
  }
`;

const themes = {
  black: css`
    background: #232323;
    color: #fff;
    svg {
      fill: #fff;
    }
    &:hover:enabled {
      background: #555;
    }
    &:active:enabled {
      background: #555;
    }
    &:disabled {
      background: #555;
      color: #eee;
      svg {
        fill: #eee;
      }
    }
  `,
  white: css`
    background: #f5f5f5;
    color: #000;
    svg {
      fill: #000;
    }
    &:hover:enabled {
      background: #fff;
    }
    &:active:enabled {
      background: #fff;
    }
    &:disabled {
      color: #555;
      svg {
        fill: #555;
      }
    }
  `,
  blue: css`
    background: #0775c4;
    color: #fff;
    svg {
      fill: #fff;
    }
    &:hover:enabled {
      background: #2da4fb;
    }
    &:active:enabled {
      background: #2da4fb;
    }
    &:disabled {
      color: #70c3ff;
      svg {
        fill: #70c3ff;
      }
    }
  `,
  red: css`
    background: #f61229;
    color: #fff;
    svg {
      fill: #fff;
    }
    &:hover:enabled {
      background: #fb3232;
    }
    &:active:enabled {
      background: #fb3232;
    }
    &:disabled {
      color: #e25656;
      svg {
        fill: #e25656;
      }
    }
  `,
  transparent: css`
    background: transparent;
    color: #000;
    svg {
      fill: #000;
    }
    &:hover:enabled {
      background: transparent;
    }
    &:active:enabled {
      background: transparent;
    }
    &:disabled {
      color: #a59a9a;
      svg {
        fill: #a59a9a;
      }
    }
  `
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};

export default Button;
