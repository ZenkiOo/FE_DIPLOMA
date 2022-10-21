import PropTypes from 'prop-types';

export default function Review({ item }) {
  return (
    <div className="reviews__item_review">
      <div className="reviews__item_review_img">
        <img src={item.img} alt="" />
      </div>
      <div className="reviews__item_review_content">
        <span className="reviews__item_review_content_name">
          {item.reviewer}
        </span>
        <p className="reviews__item_review_content_text">
        <span>“</span>
        {item.text}
        <span>”</span>
        </p>
      </div>
    </div>
  );
}

Review.propTypes = {
  item: PropTypes.object,
};
