import ContentfulImage from "./contentful-image";

export default function Avatar({ name, picture }) {
  return (
    <div>
      <ContentfulImage
        src={picture.url}
        width="75"
        height="75"
        style={{ borderRadius: "50%" }}
        alt={name}
      />
    </div>
  );
}
