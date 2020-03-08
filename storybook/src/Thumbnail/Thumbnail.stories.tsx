/** @jsx jsx */
import Thumbnail from "./Thumbnail";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, select, number } from "@storybook/addon-knobs";

export default {
  title: "components|Thumbnail",
  component: Thumbnail,
  decorators: [withKnobs]
};

export const thumbnail = () => {
  const type = select("type", ["image", "video"], "image");
  const width = text("width", "100%");
  const height = text("height", "600px");
  const src = text("src", "https://source.unsplash.com/daily?kitty");
  const fade = number("fade", 0);
  const opacity = number("opacity", 1);

  return (
    <Thumbnail
      type={type}
      width={width}
      height={height}
      src={src}
      fade={fade}
      opacity={opacity}
    />
  );
};

thumbnail.story = {
  name: "Default"
};

const thumbnailWrapper = css`
  .description {
    margin-bottom: 0.5rem;
    color: #000;
  }
  [class^="thumbnails"] {
    width: 400px;
    float: left;
    margin-right: 30px;
  }
  .thumbnails-custom {
    width: auto;
  }
`;

export const allThumbnails = () => {
  return (
    <div css={thumbnailWrapper}>
      <div className="thumbnails">
        <div className="description">image</div>
        <Thumbnail type="image" src="https://source.unsplash.com/daily?kitty" />
      </div>
      <div className="thumbnails">
        <div className="description">video</div>
        <Thumbnail type="video" src="https://bolbbalgan4.com/videos/bol4-2" />
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={thumbnailWrapper}>
      <div className="thumbnails-custom">
        <div className="description">image 200 x 300</div>
        <Thumbnail
          width="200px"
          height="300px"
          type="image"
          src="https://source.unsplash.com/daily?kitty"
        />
      </div>
      <div className="thumbnails-custom">
        <div className="description">video 300 x 200</div>
        <Thumbnail
          width="300px"
          height="200px"
          type="video"
          src="https://bolbbalgan4.com/videos/bol4-2"
        />
      </div>
    </div>
  );
};
