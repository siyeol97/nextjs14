import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

// dynamic metadata를 위해 자동으로 호출
export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //Parallel Request
  // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);

  return (
    <>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
