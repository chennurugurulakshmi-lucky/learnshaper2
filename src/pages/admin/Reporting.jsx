function Reporting() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Reporting</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600 mb-4">
          View learner progress and course completion reports.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Total Participants: 1245</li>
          <li>Completed Courses: 890</li>
          <li>In Progress: 210</li>
          <li>Yet to Start: 145</li>
        </ul>
      </div>
    </div>
  );
}

export default Reporting;