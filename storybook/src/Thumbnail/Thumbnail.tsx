/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ThumbnailProps = {
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
const Thumbnail = ({
  type,
  width,
  height,
  src,
  fade,
  opacity
}: ThumbnailProps) => {
  return (
    <div
      className={"visuable-thumbnail-" + type}
      css={[style, types[type], { width }, { height }, { opacity }]}
    >
      {type === "image" && <img src={src} />}
      {type === "video" && (
        <video autoPlay loop playsInline muted>
          <source src={src + ".mp4"} type="video/mp4" />
          <source src={src + ".webm"} type="video/webm" />
        </video>
      )}
      {fade && <div className="fade" css={{ opacity: fade }} />}
    </div>
  );
};

Thumbnail.defaultProps = {
  type: "image",
  width: "100%",
  height: "600px",
  src: "https://source.unsplash.com/daily?kitty",
  fade: 0,
  opacity: 1
};

const style = css`
  position: relative;
  overflow: hidden;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .fade {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
  }
`;

const types = {
  image: css`
    background: #f5f5f5;
  `,
  video: css`
    background: #f5f5f5;
  `
};

export default Thumbnail;
