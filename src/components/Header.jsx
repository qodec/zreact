import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      {props.children}
      <header>
        <div>{props.logo || "Logo"}</div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/xxxxxxx">No Page</Link>
        </nav>
      </header>
    </>
  );
}
