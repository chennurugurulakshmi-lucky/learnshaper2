function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-medium">Total Courses</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">24</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-medium">Total Learners</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">1,245</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-medium">Active Courses</h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">18</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;