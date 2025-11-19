import { FaDiscord } from "react-icons/fa";

import image1 from "../Assets/discourdimg/1019458bfdf444d8dff15c2fc6850a4db1a41350.jpg";
import image2 from "../Assets/discourdimg/1db33b457d5f9f88bf094c592380ac29d067628f.jpg";
import image3 from "../Assets/discourdimg/211c94ebfa423bf6b0633196d0cfb809052a82dc.jpg";
import image4 from "../Assets/discourdimg/257298ca6d7d85f29b95142a1dd0618b31a40bd5 (1).jpg";
import image5 from "../Assets/discourdimg/38568d6f44399b1e418e0aaef55867cc72056f41.jpg";
import image6 from "../Assets/discourdimg/4cec8417db9985eb5457bd0fd5b5df6068f1ef28.jpg";
import image7 from "../Assets/discourdimg/75c80f337ad5301b4cfed7b6e8feb92419cf0ab4.jpg";
import image8 from "../Assets/discourdimg/7a18e69eca34ee41b570f1948b4e8373ad826041.jpg";
import image9 from "../Assets/discourdimg/8f3b1b441c3aaa9f3b84f5dba7535d31f5407904.jpg";
import image10 from "../Assets/discourdimg/90d900439b454ebefe155c5d673dd0b819660a68.jpg";
import image11 from "../Assets/discourdimg/ad0c3b1463f2be655a80047a23ce53859ecd8b85.jpg";
import image12 from "../Assets/discourdimg/cac0f766ab9fa613e4017f091fd74bbf1698156e.jpg";
import image13 from "../Assets/discourdimg/d781a1f3c594eef36e8b4a3f37a17de4bca3ca5e.jpg";
import image14 from "../Assets/discourdimg/ee1cfd117e15148d483f45cbd29435c4028a9f33.jpg";
import image15 from "../Assets/discourdimg/f43297de34b628d364a97acf44ce9588cae99cd3.jpg";
import image16 from "../Assets/discourdimg/f43297de34b628d364a97acf44ce9588cae99cd3.jpg";
import image17 from "../Assets/discourdimg/f7f9a2edcd9aa9da809b6f98a2acc0cfc87e8a78.jpg";
import { img } from "motion/react-client";

export const Join = () => {
  const imagepotrait = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];
  return (
    <div className="container">
      <div className="rightContainer">
        <p>COMMUNITY SETUP</p>

        <h1>Join Our Dedicated Community</h1>
      </div>

      <div className="leftContainer">
        <div className="leftBottom">
          <p>
            <span>+</span>
            OUR DISCORD COMMUNITY
          </p>
          <p>
            #1 Community of entrepreneurs dedicated to helping each other grow,
            scale, and reach new heights through innovation.
          </p>

          <div className="memberContainer">
            <div className="imageContainer">
              {imagepotrait.map((members, id) => (
                <img src={members} />
              ))}
            </div>

            <p>21,349 members</p>
          </div>

          <button>
            <span>
              <FaDiscord />
            </span>
            Join Discord Community
          </button>
        </div>

        <div className="rightBottom">
          <div className="imageTitleHolder">
            <div className="imageHolder">
              {imagepotrait.map((items, id) => (
                <img src={items} />
              ))}
              {imagepotrait.map((items, id) => (
                <img src={items} />
              ))}
              {imagepotrait.map((items, id) => (
                <img src={items} />
              ))}
              {imagepotrait.map((items, id) => (
                <img src={items} />
              ))}
            </div>
            <div className="title">
              <h1>NOTHING HELD BACK ™</h1>
            </div>

            <div className="rightArrow">
              <div className="innerArrow">
                <div></div>
              </div>
            </div>

            <div className="leftArrow">
              <div className="innerArrow">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
