// Key names for localStorage
const USERS_KEY = "learnshaper_users";
const CURRENT_USER_KEY = "learnshaper_current_user";

// Get all users
export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Register new user
export const registerUser = (userData) => {
  const users = getUsers();

  // Check if email already exists
  const userExists = users.find(
    (user) => user.email === userData.email
  );

  if (userExists) {
    throw new Error("User already exists with this email");
  }

  const newUser = {
    id: Date.now(),
    role: "learner",
    ...userData,
  };

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify([...users, newUser])
  );

  return newUser;
};

// Login user
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return user;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Get current logged-in user
export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Delete user (Admin)
export const deleteUser = (id) => {
  const users = getUsers();
  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(updatedUsers)
  );
};