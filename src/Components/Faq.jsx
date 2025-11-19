import { li } from "motion/react-client";
import { useState } from "react";

import { RiBookShelfLine } from "react-icons/ri";
import { MdFitnessCenter } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { LiaAffiliatetheme } from "react-icons/lia";
import { FaPencil } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";

export const Faq = () => {
  const [index, setIndex] = useState(0);
  const [AccordionId, setAccordionId] = useState(0);

  const [open, isOpen] = useState(false);
  const icons = [
    <RiBookShelfLine />,
    <MdFitnessCenter />,
    <MdManageAccounts />,
    <TbListDetails />,
    <LiaAffiliatetheme />,
    <FaPencil />,
    <CiMoneyBill />,
  ];

  const buttonContent = [
    `Courses`,
    `Training Calls`,
    `My Account`,
    `Affiliate Details`,
    `Affiliate`,
    `ResourcesRoledex`,
    `Billing`,
  ];

  const handleClick = (id) => {
    setIndex(id);
  };

  const handleAccordion = () => {
    isOpen((prev) => !prev);
  };
  const Accordioncontent = [
    {
      title: `Cras amet molestie justo, dui est vivamus mauris.`,

      content: `Ultrices aliquam pretium purus tristique et velit 
          pretium a. Nulla tortor tincidunt tempor lectus aene
          At semper faucibus et, elementum egestas. Consectetur fames 
          varius placerat aliquet porttitor neque eu faucibus vitae. 
          In felis ac mauris, non, placerat mi ultricies. 
          At semper faucibus et, elementum egestas. Consectetur 
          fames varius placerat aliquet porttitor.`,
    },
    {
      title: `Ultrices mi libero elementum velit.`,
      content: `Ultrices aliquam pretium purus tristique et velit 
          pretium a. Nulla tortor tincidunt tempor lectus aene
          At semper faucibus et, elementum egestas. Consectetur fames 
          varius placerat aliquet porttitor neque eu faucibus vitae. 
          In felis ac mauris, non, placerat mi ultricies. 
          At semper faucibus et, elementum egestas. Consectetur 
          fames varius placerat aliquet porttitor.`,
    },
    {
      title: `Est sodales sed metus ipsum feugiat nulla.`,
      content: `Ultrices aliquam pretium purus tristique et velit 
          pretium a. Nulla tortor tincidunt tempor lectus aene
          At semper faucibus et, elementum egestas. Consectetur fames 
          varius placerat aliquet porttitor neque eu faucibus vitae. 
          In felis ac mauris, non, placerat mi ultricies. 
          At semper faucibus et, elementum egestas. Consectetur 
          fames varius placerat aliquet porttitor.`,
    },
    {
      title: `Ultrices mi libero elementum velit.`,
      content: `Ultrices aliquam pretium purus tristique et velit 
          pretium a. Nulla tortor tincidunt tempor lectus aene
          At semper faucibus et, elementum egestas. Consectetur fames 
          varius placerat aliquet porttitor neque eu faucibus vitae. 
          In felis ac mauris, non, placerat mi ultricies. 
          At semper faucibus et, elementum egestas. Consectetur 
          fames varius placerat aliquet porttitor.`,
    },
  ];

  return (
    <div className="container">
      <div className="UpperContainer">
        <div className="innerUpperContent">
          <h1>Frequently asked questions</h1>
          <p>
            Learn key digital marketing disciplines. From PPC to SEO, Content to
            Video, Social and Analytics.
          </p>
        </div>
      </div>

      <div className="LowerContainer">
        <div className="innerLowerContent">
          <div className="leftContent">
            <div className="buttonContainer">
              <ul>
                {buttonContent.map((buttons, id) => (
                  <li
                    key={id}
                    className={id === index ? `active` : ``}
                    onClick={() => handleClick(id)}
                  >
                    <p>{buttons}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rightContent">
            <div className="upperRightContent">
              <h1>
                <span>{icons[index]}</span>

                {buttonContent[index]}
              </h1>
              <div className="accordion">
                {Accordioncontent.map((accordion, id) => (
                  <div className="acordionContent" key={id}>
                    <p
                      onClick={() => {
                        setAccordionId(id);
                        handleAccordion(id);
                      }}
                      className={open && AccordionId === id ? `active` : ``}
                    >
                      <span>{open && AccordionId === id ? `-` : `+`}</span>
                      {accordion.title}
                    </p>
                    <p className={open && AccordionId === id ? `active` : ``}>
                      {accordion.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lowerRightContent">
              <button>View all questions & answers ➡ </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
