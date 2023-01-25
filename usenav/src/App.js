import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsdetails/:id" element={<NewsDetail />} />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route element={<Admin />}>
          <Route index path="/admin" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
