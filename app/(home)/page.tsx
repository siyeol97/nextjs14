import Link from 'next/link';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  return await response.json();
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
