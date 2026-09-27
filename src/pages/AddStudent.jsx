import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddStudent({ addStudent }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    yearLevel: "",
    sex: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.course || !formData.yearLevel || !formData.sex || !formData.age || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      name: formData.name,
      course: formData.course,
      yearLevel: parseInt(formData.yearLevel),
      sex: formData.sex,
      age: parseInt(formData.age),
      email: formData.email,
    };

    addStudent(newStudent);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto">
        <Link
          to="/"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Student List
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <h1 className="text-2xl font-bold">Add New Student</h1>
            <p className="text-green-100 mt-1">Fill in the student information below</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Student Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Student Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Course - Dropdown */}
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Course</option>
                <option value="BSIT">BSIT</option>
                <option value="BSCS">BSCS</option>
                <option value="BSIS">BSIS</option>
                <option value="BSCE">BSCE</option>
                <option value="BSCpE">BSCpE</option>
              </select>
            </div>

            {/* Year Level - Dropdown */}
            <div>
              <label htmlFor="yearLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Year Level
              </label>
              <select
                id="yearLevel"
                name="yearLevel"
                value={formData.yearLevel}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Year Level</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            {/* Sex - Dropdown */}
            <div>
              <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
                Sex
              </label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="15"
                max="60"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Add Student
              </button>
              <Link
                to="/"
                className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors font-medium text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
