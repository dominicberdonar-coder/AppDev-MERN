import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-3 w-72 hover:shadow-lg transition-shadow duration-200">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-lg font-semibold">{student.name}</h2>
        <p className="text-blue-100 text-sm">{student.course} — Year {student.yearLevel}</p>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium text-gray-700">Sex:</span> {student.sex}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium text-gray-700">Age:</span> {student.age}
        </p>
        <p className="text-gray-600 text-sm mb-3">
          <span className="font-medium text-gray-700">Email:</span> {student.email}
        </p>
        <Link
          to={`/student/${student.id}`}
          className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;
