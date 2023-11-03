import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="text-center">
      <h1>404</h1>
      <Link to="/" className="text-black text-decoration-none">
        🏡 Home
      </Link>
    </section>
  );
};
export default NotFound;
