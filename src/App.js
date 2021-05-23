import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useWindowSize } from "./context/useWindowSize";
import { useLibrary } from "./context/LibraryProvider";
import { ACTIONS } from "./context/libraryReducer";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { LoginPage } from "./components/LoginPage";
import { Categories } from "./components/Categories";
import { VideoDisplay } from "./components/VideoDisplay";
import { VideoPage } from "./components/VideoPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Footer } from "./components/Footer";
import { UserProfile } from "./private/UserProfile";
import { LikedVideos } from "./private/LikedVideos";
import { WatchLater } from "./private/WatchLater";
import { Playlist } from "./private/Playlist";
import { PlaylistContent } from "./private/PlaylistContent";

export default function App() {
  const [, width] = useWindowSize();

  const {
    state: { toastMessage, toastActive },
    dispatch
  } = useLibrary();

  useEffect(() => {
    function notify() {
      setTimeout(() => {
        dispatch({ TYPE: ACTIONS.TOGGLE_TOAST, payload: { toggle: false } });
        toast(`${toastMessage}`, {
          className: "toast-class",
          closeButton: true
        });
      }, 1000);
    }

    toastActive && notify();
  }, [toastActive]);

  return (
    <div className="App">
      <Navigation />
      <div style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/videos" element={<VideoDisplay />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <PrivateRoute path="/profile" element={<UserProfile />} />
          <PrivateRoute path="/likedvideo" element={<LikedVideos />} />
          <PrivateRoute path="/watchlater" element={<WatchLater />} />
          <PrivateRoute path="/playlist" element={<Playlist />} />
          <PrivateRoute path="/likedvideo/:videoId" element={<VideoPage />} />
          <PrivateRoute path="/watchlater/:videoId" element={<VideoPage />} />
          <PrivateRoute
            path="/playlist/:playlistId"
            element={<PlaylistContent />}
          />
          <PrivateRoute
            path="/playlist/:playlistId/:videoId"
            element={<VideoPage />}
          />
        </Routes>
      </div>

      <ToastContainer />

      <Footer />
      {width < 600 && (
        <div style={{ height: "10vh", backgroundColor: "#171717" }}></div>
      )}
    </div>
  );
}
