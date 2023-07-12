import { Link, useParams } from "react-router-dom";

export default function Contact() {
  let params = useParams();
  console.log({ params });
  return (
    <div>
      <h1>Contact Page of ID: {params.id}</h1>
      <div>
        <Link to="/contact/1">Contact 1</Link>
      </div>
      <div>
        <Link to="/contact/101">Contact 101</Link>
      </div>
      <div>
        <Link to="/contact/202">Contact 202</Link>
      </div>
    </div>
  );
}
