const Review = ({ name, job, image, text }) => {
  return (
    <article>
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <h3>{job}</h3>
        <p>{text}</p>
        <button>surprise me</button>
      </div>
    </article>
  );
};
export default Review;
