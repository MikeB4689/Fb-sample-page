import { MdHome } from "react-icons/md";

export const Hero = () => {
  return (
    <div className="container">
      <div className="message">
        <p>YOU’re ALL SET</p>
        <h1>Thank You For Joining NHB Fast Forward 🙏</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <button>
        <span>
          <MdHome />
        </span>
        Go to your personal dashboard
      </button>
    </div>
  );
};
