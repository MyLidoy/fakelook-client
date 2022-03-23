// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  postsUrl: "https://localhost:44349/api/Posts",
  loginUrl:"https://localhost:44349/api/Auth/Login",
  signUpUrl:"https://localhost:44349/api/Auth/SignUp",
  publishPostUrl:"https://localhost:44349/api/Posts/publish",
  forgotPasswordtUrl:"https://localhost:44349/api/Auth/ForgotPassword",
  addlikeUrl:"https://localhost:44349/api/Likes/add",
  revokeLikeUrl:"https://localhost:44349/api/Likes/Revoke",
  countLikesUrl:"https://localhost:44349/api/Likes/CountLikes",
  getAllLikseByPostUrl:"https://localhost:44349/api/Likes",
  addCommentUrl:"https://localhost:44349/add",
  deleteCommentUrl:"https://localhost:44349/Delete",
  getAllCommentsByPostId:"https://localhost:44349/GetComment",
  getAllUsersURL:"https://localhost:44349/api/Auth/GetAllUsers",
  addTagUrl:"https://localhost:44349/api/Tag/add",
  GetPostByFilter: "https://localhost:44349/api/Posts/getByFilter"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
