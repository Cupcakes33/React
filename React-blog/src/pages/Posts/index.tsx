import React from 'react'

const Main = React.lazy(() => import("./Main"));
const Detail = React.lazy(() => import("./Detail"));
const New = React.lazy(() => import("./New"));
const Edit = React.lazy(() => import("./Edit"));

export const PostsPageComponents = {
  Main,
  Detail,
  New,
  Edit,
};
