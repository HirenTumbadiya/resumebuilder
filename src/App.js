import ResumeForm from "./pages/ResumeForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewResume from "./pages/ViewResume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ResumeForm/>} />
        <Route path="/view" element={<ViewResume/>} />
      </Routes>
    </Router>
  );
};


export default App;
