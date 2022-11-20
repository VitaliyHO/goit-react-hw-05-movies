import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../servises/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <h1>Reviews</h1>
      {reviews.length ? <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Autor: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul> : <p>We don't have any reviews for this movie.</p>}
    </>
  );
};

export default Reviews;