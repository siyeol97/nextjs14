import { API_URL } from '../app/(home)/page';

const getVideo = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h6>{JSON.stringify(video)}</h6>;
}