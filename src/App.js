import './App.css';
import Start from './components/Start';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from './components/DashBoard';
function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route exact path="*" element={<Start />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign_up" element={<SignUp />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
