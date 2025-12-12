import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="
          w-18 sm:w-23 sm:h-18
          hover:p-2 
          rounded-full 
           duration-300
        "
        // src="https://i.ibb.co.com/QvDXC3cW/book-delivery-icon-logo-design-template-vector-42554831-removebg-preview.png"
        src="https://i.ibb.co.com/dswhbjqV/logo-removebg-preview-1.png"
        alt="BookCourier Logo"
        title="BookCourier"
      />
    </Link>
  );
};

export default Logo;
