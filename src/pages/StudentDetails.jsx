import { useParams, Link } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Not Found</h2>
          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            ← Back to Student List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Student List
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold">{student.name}</h1>
            <p className="text-blue-100 mt-1">Student ID: {student.id}</p>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Course</p>
                <p className="text-lg font-medium text-gray-800">{student.course}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year Level</p>
                <p className="text-lg font-medium text-gray-800">Year {student.yearLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sex</p>
                <p className="text-lg font-medium text-gray-800">{student.sex}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-lg font-medium text-gray-800">{student.age}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium text-gray-800">{student.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
