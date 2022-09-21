import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Textfit } from "react-textfit";

const NumberScreen = () => {
  const { calc } = useContext(AppContext);

  return (
    <Textfit className="screen" max={70} mode="single">
      {calc.number ? calc.number : calc.result}
    </Textfit>
  );
};

export default NumberScreen;
