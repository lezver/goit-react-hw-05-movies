import './AboutMovie.scss';
import PropTypes from 'prop-types';

export const AboutMovie = ({ data }) => (
  <div className="about-movie">
    <img
      src={
        data?.backdrop_path
          ? `https://image.tmdb.org/t/p/w400${data?.backdrop_path}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
      }
      alt={data?.title ?? 'no name'}
    />
    <ul>
      <li>
        <h3>{data?.title ?? data?.original_title ?? 'No name'}</h3>
      </li>
      <li>
        <span>
          User score: {data?.vote_average?.toString().slice(0, 3) ?? 0}
        </span>
      </li>
      <li>
        <h4>Overview</h4>
      </li>
      <li>
        <span>{data?.overview ?? 'Coming soon.'}</span>
      </li>
      <li>
        <h5>Genres</h5>
      </li>
      <li>
        <ul>
          {data?.genres?.map(({ id, name }) => <li key={id}>{name}</li>) ?? (
            <li>
              <span>Coming soon.</span>
            </li>
          )}
        </ul>
      </li>
    </ul>
  </div>
);

AboutMovie.propTypes = {
  data: PropTypes.object.isRequired,
};
