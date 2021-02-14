import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import FruitData from "./fuitData.json";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useHistory } from "react-router-dom";

const Home = () => {
  AOS.init();
  const [fruitData, setFruitData] = useState([]);
  const HISTORY = useHistory();

  useEffect(() => {
    const getData = Object.values(FruitData);
    const khan = getData.filter((v) => {
      const data = { ...v, hover: false };
      return data;
    });
    setFruitData(khan);
  }, []);

  const onhover = (ind) => {
    setFruitData((old) => {
      old.map((v, i) => {
        if (i !== ind) {
          v.opacity = 0;
        } else {
          v.hover = true;
        }
      });
      return [...old];
    });
  };
  const onhoverleave = () => {
    setFruitData((old) => {
      old.map((v) => {
        v.opacity = 1;
        v.hover = false;
      });
      return [...old];
    });
  };
  const sendData = (i) => {
    const data = Object.entries(FruitData)[i];
    HISTORY.push(`/${data[0]}`);
  };

  return (
    <div className="container">
      <div className="Header">
        <h1 data-aos="slide-down" data-aos-duration="1000">
          Fruits Delight
        </h1>
        <h3 data-aos="zoom-in" data-aos-duration="1000">
          The Fruit of Patience
        </h3>
      </div>
      <div className="Body">
        {fruitData.map((v, i) => (
          <div
            key={i}
            className={`FruitBox ${v.hover ? "height100" : ""}`}
            onMouseEnter={() => onhover(i)}
            onMouseLeave={onhoverleave}
            onClick={() => sendData(i)}
          >
            <img
              className={`${v.opacity === 1 ? "" : "opacity0"}`}
              src={v.img}
              alt={v.name}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </div>
    // <Container
    //   component="div"
    //   disableGutters={true}
    //   className="mainBox"
    //   maxWidth="lg"
    // >
    //   <Grid container className="gridBox" direction="column">
    //     <Grid item xs className="gridHeader">
    //       <h1 data-aos="slide-down" data-aos-duration="1000">
    //         Fruits Delight
    //       </h1>
    //       <h3 data-aos="zoom-in" data-aos-duration="1000">
    //         The Fruit of Patience
    //       </h3>
    //     </Grid>
    //     <Grid container className="gridBody">
    //       {fruitData.map((v, i) => (
    //         <Grid
    //           key={i}
    //           item
    //           xs={6}
    //           sm={4}
    //           md={3}
    //           lg={2}
    //           className="fruitGridBox"
    //         >
    //           <img
    //             className={`fruitLogo ${v.opacity === 1 ? "" : "opacity0"}`}
    //             src={v.img}
    //             alt={v.name}
    //             onContextMenu={(e) => e.preventDefault()}
    //             onMouseEnter={() => onhover(i)}
    //             onMouseLeave={onhoverleave}
    //           />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};
export default Home;
