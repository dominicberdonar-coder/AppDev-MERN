import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import studentsData from "./data/students.json";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";

function App() {
  // Load existing students from JSON into state
  const [students, setStudents] = useState(studentsData);

  // Function to add a new student to the state
  const addStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1,
    };
    setStudents([...students, studentWithId]);
  };

  return (
    <Routes>
      <Route path="/" element={<StudentList students={students} />} />
      <Route path="/student/:id" element={<StudentDetails students={students} />} />
      <Route path="/add-student" element={<AddStudent addStudent={addStudent} />} />
    </Routes>
  );
}

export default App;
