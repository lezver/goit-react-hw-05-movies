import './SearchMovie.scss';
import { HiSearch } from 'react-icons/hi';

export const SearchMovie = ({ search, onChange, value }) => {
  const handlerForm = e => {
    e.preventDefault();
    const input = e.target.elements[0];
    const btn = e.target.elements[1];

    input.value && search();

    btn.disabled = true;

    setTimeout(() => {
      btn.disabled = false;
    }, 1500);
  };

  return (
    <form className="search-form" onSubmit={handlerForm}>
      <label>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
        />
      </label>
      <button type="submit">
        <HiSearch size={20} />
      </button>
    </form>
  );
};
