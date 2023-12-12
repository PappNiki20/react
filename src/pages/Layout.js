import { Outlet, Link } from "react-router-dom";
 
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Jatekok</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/ligthon">Light On</Link>
          </li>
        </ul>
      </nav>
 
      <Outlet />
    </>
  )
};
 
export default Layout;