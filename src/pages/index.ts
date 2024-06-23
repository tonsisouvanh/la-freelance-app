import React from "react";

export const HomePage = React.lazy(() => import("./home/HomePage"));
export const SigninPage = React.lazy(() => import("./signin/SigninPage"));
export const SignupPage = React.lazy(() => import("./signup/SignupPage"));
export const AboutPage = React.lazy(() => import("./about/AboutPage"));


export const ProjectBoardPage = React.lazy(
  () => import("./project-board/ProjectBoardPage")
);
export const FreelanceSignupPage = React.lazy(
  () => import("./freelance-signup/FreelanceSignupPage")
);
export const PostProjectPage = React.lazy(
  () => import("./project-post/PostProjectPage")
);
export const ChatPage = React.lazy(() => import("./chat/ChatPage"));
export const ProjectsPage = React.lazy(
  () => import("./project-list/ProjectsPage")
);
export const NotFoundPage = React.lazy(() => import("./NotFoundPage"));
export const ProjectPage = React.lazy(
  () => import("./project-detail/ProjectPage")
);
export const GuestProfilePage = React.lazy(
  () => import("./guestProfile/GuestProfilePage")
);

export const ClientProfilePage = React.lazy(
  () => import("./clientProfile/ClientProfilePage")
);

export const AllChatPage = React.lazy(() => import("./chat/AllChatPage"));
