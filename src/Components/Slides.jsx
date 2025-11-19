import image1 from "../Assets/headings/024dfeae1c6a446aa962f1a21f63779f7b952a29.png";
import image2 from "../Assets/headings/20896a0df1699ec5529740d07e264ab052f7f687.png";
import image3 from "../Assets/headings/f2fdba9707a14d061f087a1444e707fc75494183.png";
import image4 from "../Assets/headings/024dfeae1c6a446aa962f1a21f63779f7b952a29.png";
import image5 from "../Assets/headings/20896a0df1699ec5529740d07e264ab052f7f687.png";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Slides = () => {
  const slidercontent = [
    {
      img: image1,
      icons: <FaFacebookF />,
      name: "NHB Facebook Group",
      follower: "21,349 members",
      message: `More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.`,
      buttonname: "Join Facebook Group",
    },
    {
      img: image2,
      icons: <FaFacebookF />,
      name: "NHB Facebook Group",
      follower: "21,349 members",
      message: `More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.`,
      buttonname: "Join Job Board",
    },
    {
      img: image3,
      icons: <FaFacebookF />,
      name: "NHB Facebook Group",
      follower: "21,349 members",
      message: `More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.`,
      buttonname: "Join Integration Network",
    },
    {
      img: image4,
      icons: <FaFacebookF />,
      name: "NHB Facebook Group",
      follower: "21,349 members",
      message: `More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.`,
      buttonname: "Join Facebook Group",
    },
    {
      img: image5,
      icons: <FaFacebookF />,
      name: "NHB Facebook Group",
      follower: "21,349 members",
      message: `More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.`,
      buttonname: "Join Job Board",
    },
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isFixed, setIsFixed] = useState(false); // 378px mode

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth >= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isFixed ? 378 : window.innerWidth;

  // Infinite Loop Clones
  const slides = [
    slidercontent[slidercontent.length - 1],
    ...slidercontent,
    slidercontent[0],
  ];

  const handleNext = () => setCurrent((prev) => prev + 1);
  const handlePrev = () => setCurrent((prev) => prev - 1);

  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setTransition(false);
      setCurrent(1);
    }
    if (current === 0) {
      setTransition(false);
      setCurrent(slidercontent.length);
    }
  };

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20);
    }
  }, [transition]);

  return (
    <div className="container">
      <div className="UpperContainer">
        <div className="title">Join Facebook Groups</div>
        <p>
          Learn key digital marketing disciplines. From PPC to SEO, Content to
          Video, Social and Analytics.
        </p>
      </div>

      <div className="bottomContainer">
        <div className="arrow right" onClick={handleNext}>
          <p>&gt;</p>
        </div>

        <div className="arrow left" onClick={handlePrev}>
          <p>&lt;</p>
        </div>

        <div className="SlideContainer">
          <div
            className="track"
            style={{
              transform: `translateX(-${current * cardWidth}px)`,
              transition: transition ? "transform 0.5s ease" : "none",
              width: `${slides.length * cardWidth}px`,
              display: "flex",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((contents, id) => (
              <div
                className="sliderCard"
                key={id}
                style={{
                  flex: "0 0 auto",
                  width: isFixed ? "378px" : "100vw",
                  maxWidth: isFixed ? "378px" : "100vw",
                }}
              >
                <div className="imgSlidercontainer">
                  <img src={contents.img} alt="FacebookGroup" />
                </div>

                <div className="bodyContainer">
                  <div className="UpperBody">
                    <p>{contents.icons}</p>
                    <div className="nameContainer">
                      <h1>{contents.name}</h1>
                      <p>{contents.follower}</p>
                    </div>
                  </div>

                  <div className="lowerBody">
                    <p>{contents.message}</p>
                  </div>

                  <div className="cardButton">
                    <button>
                      <span>{contents.icons}</span> {contents.buttonname}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
