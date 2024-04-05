import React from "react";

export const HomePage = React.lazy(() => import("./home/HomePage"));

// export { default as SigninPage } from "./signin/SigninPage";
// export { default as SignupPage } from "./signup/SignupPage";
// export { default as AboutPage } from "./about/AboutPage";
// export { default as ProjectBoardPage } from "./project-board/ProjectBoardPage";
// export { default as FreelanceSignupPage } from "./freelance-signup/FreelanceSignupPage";
// export { default as PostProjectPage } from "./project-post/PostProjectPage";
// export { default as ChatPage } from "./chat/ChatPage";
// export { default as ProjectsPage } from "./project-list/ProjectsPage";
// export { default as NotFoundPage } from "./NotFoundPage";
// export { default as ProjectPage } from "./project-detail/ProjectPage";
// export { default as GuestProfilePage } from "./guest-profile/GuestProfilePage";

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
  () => import("./guest-profile/GuestProfilePage")
);
