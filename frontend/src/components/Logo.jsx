import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center">
        <span className="text-gray-600 font-semibold   ">Apple Azerbaijan</span>
      </Link>
    </div>
  );
};

export default Logo;
