import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
          <Link to="/create-post">Create Post</Link>
          {/* <Link to="/">Home</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
