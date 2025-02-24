import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePageComponents as Home } from "../pages/Home";
import { PostsPageComponents as Posts } from "../pages/Posts";
import { ProfilePageComponents as Profile } from "../pages/Profile";
import { CommonPageComponents as Common } from "../pages/Common";

const LoadingFallback = () => <div>Loading...</div>;

export default function DefaultRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home.Main />} />
        <Route path="/posts" element={<Posts.Main />}>
          <Route path="new" element={<Posts.New />} />
          <Route path=":id" element={<Posts.Detail />} />
          <Route path=":id/edit" element={<Posts.Edit />} />
        </Route>
        <Route path="/profile" element={<Profile.Main />} />
        <Route path="*" element={<Common.NotFound />} />
      </Routes>
    </Suspense>
  );
}
