import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import ExploreLang from "./views/ExploreLang";
import ExploreRepo from "./views/ExploreRepo";
import UserProfile from "./views/UserProfile";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import Learn from "./views/Learn";
import BlogPosts from "./views/BlogPosts";
import Communities from "./views/Communities";
import Events from "./views/Events";
import Programs from "./views/Programs";
import Forum from "./views/Forum";
import Newsletter from "./views/Newsletter";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/explore-lang" />
  },
  {
    path: "/explore-lang",
    layout: DefaultLayout,
    component: ExploreLang
  },
  {
    path: "/explore-repo",
    layout: DefaultLayout,
    component: ExploreRepo
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/events",
    layout: DefaultLayout,
    component: Events
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  // {
  //   path: "/programs",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  {
    path: "/programs",
    layout: DefaultLayout,
    component: Programs
  },
  {
    path: "/learn",
    layout: DefaultLayout,
    component: Learn
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/communities",
    layout: DefaultLayout,
    component: Communities
  },
  {
    path: "/forum",
    layout: DefaultLayout,
    component: Forum
  },
  {
    path: "/newsletter",
    layout: DefaultLayout,
    component: Newsletter
  }
];
