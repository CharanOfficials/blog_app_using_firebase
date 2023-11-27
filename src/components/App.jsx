import '../index.css';
import { Outlet } from 'react-router-dom';
import { Navbar, CreatePost, PostDetail, Home } from './Index';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
