import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Searched from "../pages/Searched/Searched";
import VideoPlayer from "../pages/VideoPlayer/VideoPlayer";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

import ProfileVideos from "../Components/ProfileVideos/ProfileVideos";
import PlayList from "../Components/PlayList/PlayList";
import Tweets from "../Components/Tweets/Tweets";
import Following from "../Components/Following/Following.jsx";

import AppLayout from "../Components/AppLayout/AppLayout.jsx";

function AppRouters() {
  return (
    <Routes>

      <Route element={<AppLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Searched />} />

        <Route path="/watch/:id" element={<VideoPlayer />} />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileVideos />} />
          <Route path="playlist" element={<PlayList />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="following" element={<Following />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />

      </Route>

      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}

export default AppRouters;