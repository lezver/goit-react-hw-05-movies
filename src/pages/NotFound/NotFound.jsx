import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import { ImHome } from 'react-icons/im';

const NotFound = () => {
  const navigate = useNavigate();

  const backToHome = () => navigate('/', { replace: true });

  return (
    <section className="not-found">
      <h2>Sorry, this page could not be found...</h2>
      <button type="button" onClick={backToHome}>
        <ImHome size={20} />
        Back to Home
      </button>
    </section>
  );
};

export default NotFound;
