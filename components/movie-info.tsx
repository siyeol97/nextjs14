import { API_URL } from '../app/constants';

export const getMovie = async (id: string) => {
  //await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
