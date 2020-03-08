/// <reference types="react" />
declare type BoxProps = {
    /** 박스 안의 들어갈 컨텐츠입니다. */
    children: React.ReactNode;
    /** 박스의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 박스의 높이를 임의로 설정합니다. */
    height?: string | number;
    /** 박스의 안쪽 여백을 임의로 설정합니다. */
    padding?: string | number;
    /** 박스의 배경색을 설정합니다. */
    background?: string;
};
/** `Box` 컴포넌트는 박스 형태의 컴포넌트를 생성하기 위해 사용합니다.  */
declare const Box: {
    ({ children, width, height, padding, background }: BoxProps): JSX.Element;
    defaultProps: {
        children: string;
        width: string;
        height: string;
        padding: string;
        background: string;
    };
};
export default Box;
