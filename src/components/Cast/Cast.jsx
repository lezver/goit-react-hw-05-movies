import { getCast } from 'services/Api';
import { useParams } from 'react-router-dom';

import './Cast.scss';
import { useEffect, useState } from 'react';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const response = await getCast(id);

      return setCast([...response.data.cast]);
    };

    fetchCast();
  }, []);

  return (
    <ul className="cast">
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : 'https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg'
            }
            alt={name}
          />
          <h3>{name}</h3>
          <span>{character}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
