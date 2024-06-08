import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Tasks from "./pages/Tasks.jsx"; // Import the new Tasks page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/tasks" element={<Tasks />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
