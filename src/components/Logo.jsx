import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="
          w-20 sm:w-25 sm:h-20
          hover:p-2 
          rounded-full 
          bg-base-100 
          hover:bg-base-200
           duration-300
          hover:shadow-md
        "
        src="https://i.ibb.co.com/QvDXC3cW/book-delivery-icon-logo-design-template-vector-42554831-removebg-preview.png"
        alt="BookCourier Logo"
        title="BookCourier"
      />
    </Link>
  );
};

export default Logo;
