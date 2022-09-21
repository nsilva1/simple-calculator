// provider import
import AppProvider from "./context/AppContext";

// component imports
import Wrapper from "./components/Wrapper";
import NumberScreen from "./components/NumberScreen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

// stylesheet import
import "./App.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <AppProvider>
      <h1>SIMPLE CALCULATOR</h1>
      <Wrapper>
        <NumberScreen />
        <ButtonBox>
          {btnValues.flat().map((btn, index) => (
            <Button value={btn} key={index} />
          ))}
        </ButtonBox>
      </Wrapper>
    </AppProvider>
  );
}

export default App;
