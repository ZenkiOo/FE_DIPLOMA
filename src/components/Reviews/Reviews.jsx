import './css/reviews.css';
import './css/slick.css';
import './css/slick-theme.css';
import { nanoid } from 'nanoid';
import ReviewsList from '../data/ReviewsList';
import Review from './Review';
import Slider from 'react-slick';

export default function Reviews() {
  function groupItems(arr) {
    const grouppedItems = [];
    for (let i = 0; i < arr.length; i += 2) {
      const group = [],
        el = arr[i];
      group.push(el);
      if (arr[i + 1]) group.push(arr[i + 1]);
      grouppedItems.push(group);
    }
    return grouppedItems;
  }

  const sortedReviews = groupItems(new ReviewsList().reviews);
  const reviewItems = sortedReviews.map((item) => {
    return (
      <div className="reviews__item" key={nanoid()}>
        <Review item={item[0]} />
        {item[1] && <Review item={item[1]} />}
      </div>
    );
  });

  return (
    <section className="reviews_container">
      <div className="reviews">
        <h3 className="reviews__title">отзывы</h3>
        <Slider
          {...{
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 1200,
            autoplaySpeed: 5000,
            customPaging: () => <button></button>,
          }}
        >
          {reviewItems}
        </Slider>
      </div>
    </section>
  );
}
