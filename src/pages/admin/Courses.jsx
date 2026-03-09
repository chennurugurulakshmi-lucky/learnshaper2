function Courses() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Courses</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="mb-4 text-gray-600">
          Manage all your courses here. Create, edit, and publish courses.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Create New Course
        </button>
      </div>
    </div>
  );
}

export default Courses;