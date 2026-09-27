import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";

function StudentList({ students }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Student List</h1>
          <Link
            to="/add-student"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            + Add Student
          </Link>
        </div>

        <p className="text-gray-500 mb-6">
          Total Students: {students.length}
        </p>

        <div className="flex flex-wrap justify-center">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentList;
