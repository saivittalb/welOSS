import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Communities from "./views/Communities";
import Events from "./views/Events";
import Programs from "./views/Programs";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/explore" />
  },
  {
    path: "/explore",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
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
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
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
  }
];
