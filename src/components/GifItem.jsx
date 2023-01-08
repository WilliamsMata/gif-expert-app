export const GifItem = ({ title, url }) => {
  return (
    <figure className="card">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
