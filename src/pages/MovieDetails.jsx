import { useState, useEffect, Suspense } from "react";
import { getFilmsById } from "../servises/api";
import {
  Outlet,
  useNavigate,
  useLocation,
  NavLink,
  useParams,
} from "react-router-dom";
import { Link, FlexBox, Box, Button, IMG, BorderBox, Ul } from "../App.styled";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const releaseDate = movie?.release_date.split("").splice(0, 4).join("");
  const userScore = Math.round(movie?.vote_average * 10);
  const genres = movie?.genres.map((elem) => elem.name).join(" ");

  useEffect(() => {
    getFilmsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <>
      <Button onClick={handleGoBack} type="button">
        Go back
      </Button>
      <BorderBox>
        <FlexBox>
          <IMG src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
          <Box>
            <h2>
              {movie.title}({releaseDate})
            </h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </Box>
        </FlexBox>
      </BorderBox>
      <BorderBox>
        <p>Additional information</p>
        <Ul>
          <li>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </li>
        </Ul>
      </BorderBox>
      <Suspense fallback={<p>Subpaje is loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
