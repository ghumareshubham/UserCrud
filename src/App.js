import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegistration from './Components/Assets/UserRegistration';
import UserList from './Components/Assets/UserList';
import EditUserForm from './Components/Assets/EditUserForm';


function App() {
  return (
    <div>
      {/* <UserRegistration/>
       */}

<Router>
            <Routes>
            <Route path="/" element={<UserRegistration />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/edit/:id" element={<EditUserForm />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
