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
import AuthState from './context/AuthState';
import Add from './components/Add';
import Edit from './components/Edit';
function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Routes >
            <Route exact path="/*" element={<Start />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/sign_up" element={<SignUp />} />
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/add" element={<Add />} />
            <Route exact path="/update" element={<Edit />} />
          </Routes>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
