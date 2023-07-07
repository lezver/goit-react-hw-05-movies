import { getReviews } from 'services/Api';
import { useParams } from 'react-router-dom';
import './Reviews.scss';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getReviews(id);

      return setReviews([...response.data.results]);
    };

    fetchReviews();
  }, [reviews]);

  return (
    <>
      {reviews.length ? (
        <ul className="reviews">
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>Sorry, we have no reviews yet...</h3>
      )}
    </>
  );
};

export default Reviews;
