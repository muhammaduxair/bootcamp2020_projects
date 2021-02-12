import "./App.css";
import plane1 from "./assets/plane1.png";
import plane2 from "./assets/plane3.png";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const ref1 = useWebAnimations({
    keyframes: [
      { left: "-400px", bottom: "40px", transform: "rotate(0deg)" },
      { left: "100px", bottom: "40px", transform: "rotate(-5deg)" },
      { left: "600px", bottom: "190px", transform: "rotate(-10deg)" },
      { left: "1100px", bottom: "340px", transform: "rotate(-15deg)" },
      { left: "1500px", bottom: "400px", transform: "rotate(-20deg)" },
      { left: "1500px", bottom: "400px", transform: "rotateY(180deg)" },
      { left: "1100px", bottom: "340px", transform: "rotateY(180deg)" },
      { left: "600px", bottom: "190px", transform: "rotateY(180deg)" },
      { left: "100px", bottom: "40px", transform: "rotateY(180deg)" },
      { left: "-400px", bottom: "40px", transform: "rotateY(180deg)" },
    ],
    timing: {
      duration: 10000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: "linear", // Use a fancy timing function
    },
  });
  const ref2 = useWebAnimations({
    keyframes: [
      { left: "-200px", top: "10px" },
      { left: "1400px", top: "10px" },
    ],
    timing: {
      duration: 7000,
      iterations: Infinity,
      easing: "ease-in",
      delay: 500,
    },
  });
  const ref3 = useWebAnimations({
    keyframes: [
      { left: "1400px", top: "70px" },
      { left: "-200px", top: "70px" },
    ],
    timing: {
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in",
    },
  });

  return (
    <div className="App">
      <div className="road">
        <span className="roadLine"></span>
      </div>
      <img ref={ref1.ref} className="plane" src={plane1} alt="plane_image" />
      <img ref={ref2.ref} className="plane2" src={plane2} alt="plane_image" />
      <img ref={ref3.ref} className="plane3" src={plane2} alt="plane_image" />
    </div>
  );
};

export default App;
