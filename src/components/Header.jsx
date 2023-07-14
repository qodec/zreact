import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      {props.children}
      <header className="bg-pink-400 flex py-4 px-8 justify-between">
        <div>{props.logo || "Logo"}</div>
        <nav className="flex gap-4">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/xxxxxxx">No Page</Link>
        </nav>
      </header>
    </>
  );
}
