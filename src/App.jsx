import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-50 p-6">
      <Card
        description="Learn how to create components and props."
        image="https://picsum.photos/300/200"
        title="React Basics"
      />
      <Card
        description="Build flexible components for scalability."
        image="https://picsum.photos/300/201"
        title="Reusable Components"
      />
      <Card
        description="Combine React with Tailwind CSS for fast design."
        image="https://picsum.photos/300/202"
        title="Modern UI Development"
      />
    </div>
  );
}

export default App;
