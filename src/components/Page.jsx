import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FruitData from "./fuitData.json";
import AOS from "aos";

const Page = () => {
  AOS.init({
    duration: "1000",
    once: true,
  });
  const { fruit } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    setData(FruitData[fruit]);
  }, []);

  if (data === undefined) {
    return (
      <div>
        <h1>Ops Page Not Found</h1>
      </div>
    );
  }
  return (
    <div className="pageBox">
      <div className="left" style={{ backgroundColor: data.hoverColor }}>
        <img src={data.img} alt={data.param} data-aos="zoom-in" />
      </div>
      <div className="right">
        <h1 style={{ color: data.hoverColor }} data-aos="flip-up">
          {data.name}
        </h1>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
          aperiam magnam minus natus illo beatae iste recusandae porro. Dicta.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          accusantium, delectus laboriosam ducimus minus quibusdam amet
          laudantium tempore illum at quas soluta sit quidem nisi, rerum
          aspernatur, eius tenetur consequatur?
        </p>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          accusantium, delectus laboriosam ducimus minus quibusdam amet
          laudantium tempore illum at quas soluta sit quidem nisi, rerum
          aspernatur, eius tenetur consequatur? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Consectetur accusantium, delectus
          laboriosam ducimus minus quibusdam amet laudantium tempore illum at
          quas soluta sit quidem nisi, rerum aspernatur, eius tenetur
          consequatur?
        </p>
        <button
          style={{ backgroundColor: data.hoverColor }}
          onMouseEnter={(e) => (e.target.style.background = data.color)}
          onMouseLeave={(e) => (e.target.style.background = data.hoverColor)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default Page;
