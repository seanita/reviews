import Review from './Review';
const Reviews = ({ reviews }) => {
  return (
    <section>
      {reviews.map((review) => {
        return <Review key={review.id} {...review} />;
      })}
    </section>
  );
};
export default Reviews;
