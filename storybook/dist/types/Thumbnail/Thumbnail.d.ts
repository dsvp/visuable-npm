/// <reference types="react" />
declare type ThumbnailProps = {
    /** 썸네일의 형식을 설정합니다. */
    type: "image" | "video";
    /** 썸네일의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 썸네일의 높이를 임의로 설정합니다. */
    height?: string | number;
    /** 썸네일의 리소스를 설정합니다. */
    src?: string;
    /** 썸네일의 어두운 정도를 설정합니다. */
    fade?: number;
    /** 썸네일의 투명도를 설정합니다. */
    opacity?: number;
};
/** `Thumbnail` 컴포넌트는 썸네일을 간편하게 생성할 때 사용합니다.  */
declare const Thumbnail: {
    ({ type, width, height, src, fade, opacity }: ThumbnailProps): JSX.Element;
    defaultProps: {
        type: string;
        width: string;
        height: string;
        src: string;
        fade: number;
        opacity: number;
    };
};
export default Thumbnail;
