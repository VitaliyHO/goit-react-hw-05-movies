import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, ImgList, Li, ListLink, Ul } from "../App.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Container>
      <Ul>
        {movies.map((movie) => (
          <Li key={movie.id}>
            <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImgList
                src={BASE_IMG_URL + movie.poster_path}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </ListLink>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
