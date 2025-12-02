import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{padding:"10px", background:"#eee"}}>
      <Link to="/" style={{marginRight:"20px"}}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
