// ===============================
// App Info
// ===============================
export const APP_NAME = "LearnShaper";


// ===============================
// User Roles
// ===============================
export const ROLES = {
  ADMIN: "admin",
  LEARNER: "learner",
};


// ===============================
// Route Paths
// ===============================
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  // Learner
  COURSES: "/learner/courses",
  MY_COURSES: "/learner/my-courses",
  COURSE_DETAIL: "/learner/courses/:id",
  LESSON_PLAYER: "/learner/lesson/:id",

  // Admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_COURSES: "/admin/courses",
  ADMIN_USERS: "/admin/users",
};


// ===============================
// Local Storage Keys
// ===============================
export const STORAGE_KEYS = {
  USERS: "learnshaper_users",
  CURRENT_USER: "learnshaper_current_user",
};


// ===============================
// Default Values
// ===============================
export const DEFAULT_AVATAR =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export const DEFAULT_COURSE_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";