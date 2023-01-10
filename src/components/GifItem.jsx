import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <figure className="card">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
