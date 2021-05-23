import { useParams, Link } from "react-router-dom";
import { useLibrary } from "../context/LibraryProvider";
import { VideoCard } from "../components/VideoCard";
import { Loader } from "../components/Loader";

export function PlaylistContent() {
  const { playlistId } = useParams();
  const {
    state: { playlist, videoList, isLoading }
  } = useLibrary();

  const selectedPlaylist = playlist?.find(({ _id }) => _id == playlistId);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="page-layout">
      <div className="page-head">{selectedPlaylist?.__playlistname}</div>
      <div className="page-container">
        {selectedPlaylist?.videoList.map(({ __video }) => {
          const video = videoList?.find(({ _id }) => _id == __video);
          return (
            <Link
              to={`/playlist/${selectedPlaylist?._id}/${video?._id}`}
              key={video?._id}
            >
              <VideoCard video={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
