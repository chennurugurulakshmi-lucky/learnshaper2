// Mock course data (temporary frontend storage)

let courses = [
  {
    id: 1,
    title: "React Masterclass",
    instructor: "Lakshmi",
    price: 999,
    rating: 4.8,
    students: 1200,
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description: "Learn React from basics to advanced with projects.",
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    instructor: "Rahul",
    price: 799,
    rating: 4.6,
    students: 950,
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description: "Deep dive into modern JavaScript concepts.",
  },
];

// Get all courses
export const getCourses = () => {
  return courses;
};

// Get course by ID
export const getCourseById = (id) => {
  return courses.find((course) => course.id === Number(id));
};

// Add new course
export const addCourse = (newCourse) => {
  const course = {
    ...newCourse,
    id: courses.length + 1,
  };
  courses.push(course);
  return course;
};

// Update course
export const updateCourse = (id, updatedData) => {
  courses = courses.map((course) =>
    course.id === Number(id)
      ? { ...course, ...updatedData }
      : course
  );
  return getCourseById(id);
};

// Delete course
export const deleteCourse = (id) => {
  courses = courses.filter(
    (course) => course.id !== Number(id)
  );
};