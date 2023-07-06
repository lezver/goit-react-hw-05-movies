import './AboutMovie.scss';

export const AboutMovie = ({ data }) => {
  const {
    title,
    original_title,
    vote_average,
    overview,
    genres,
    backdrop_path,
  } = data;

  return (
    <div className="about-movie">
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
        }
        alt={title}
      />
      <ul>
        <li>
          <h3>{title && original_title}</h3>
        </li>
        <li>
          <span>User score: {vote_average?.toString().slice(0, 3)}</span>
        </li>
        <li>
          <h4>Overview</h4>
        </li>
        <li>
          <span>{overview}</span>
        </li>
        <li>
          <h5>Genres</h5>
        </li>
        <li>
          <ul>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
