import { useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  HashRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import './App.css'
import SideBar_Open from './Layouts/Sidebar/Sidebar_open/SideBar'
import Home from './Pages/HomePage/Home';
import TopBar from './Layouts/TopBar/TopBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <HashRouter>
          <SideBar_Open />
          <div>
            <TopBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    </>
  );
}

export default App
