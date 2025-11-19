import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";

export const Footer = () => {
  const socials = [
    <FaFacebookF color="black" />,
    <FaTwitter color="black" />,
    <FaInstagram color="black" />,
    <FaYoutube color="black" />,
    <CiLinkedin color="black" />,
    <FaSpotify color="black" />,
    <IoLogoPinterest color="black" />,
  ];
  const content = [
    {
      title: "Learning",
      list: [`Explore NHB+ Learning`, `Free Progress`, `NHB+ Newsletter`],
    },
    {
      title: "Resources",
      list: [`Browse Resource`, `My Saved Resource`, `Submit New Resource`],
    },
    {
      title: "Advisor",
      list: [
        `My Personal NHB+ Coach`,
        `Request a Coach`,
        `NHB+ Specialist Coach`,
      ],
    },
    {
      title: "Training Calls",
      list: [`Upcoming Calls`, `My Appointment`, `Previous Training Calls`],
    },
    {
      title: "Roledex",
      list: [`Browse Roldex`, `My Saved Rolodex`, `Add Me to Roldex`],
    },
    {
      title: "Communty",
      list: [`NHB Group`, `NHB Slack`, `NHB Job Board`],
    },
  ];

  return (
    <div className="container">
      <div className="UpperContainer">
        <h1>NOTHING HELD BACK +</h1>

        <div className="contentList">
          {content.map((contents, id) => {
            return (
              <div key={id}>
                <p>{contents.title}</p>

                <ul>
                  {contents.list.map((list, id) => (
                    <li key={id}>
                      <p>{list}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="LowerContainer">
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Accessibility Statement</li>
        </ul>
        <ul>
          {socials.map((socials, id) => (
            <li key={id}>
              <p>{socials}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
