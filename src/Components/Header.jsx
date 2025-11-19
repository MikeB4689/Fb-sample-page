import { FaPlus } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <p>
            <FaPhoneAlt />
          </p>
          <p>Call us at +1 (800) 444 2041</p>
        </li>

        <li>
          <p>NOTHING HELD BACK</p>
          <p className="gradient-text">
            <span className="icon">+</span>
          </p>
        </li>
        <li>
          <p>
            <IoMdMail />
          </p>
          <p>Need help? Click Here to Contact Us</p>
        </li>
      </ul>
    </div>
  );
};
