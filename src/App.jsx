import "./App.css";
import Lists from "@/components/Lists.jsx";

function App() {
  return (
    <div>
      <div className="fixed top-0 shadow-xl left-0 w-full bg-white z-50 py-4">
        <h1 className="text-center text-2xl font-bold">Infinite Scroll List</h1>
      </div>
      <main className="pt-20 px-4">
        <Lists />
      </main>
    </div>
  );
}

export default App;
