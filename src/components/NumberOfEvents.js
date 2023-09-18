import "../App.css";
import { ErrorAlert } from "./Alert";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    switch (true) {
      case isNaN(value):
        setErrorAlert("value is not a number");
        break;
      case value > 50:
        setErrorAlert("maximum value is 50");
        break;
      case value <= 0:
        setErrorAlert("Min value is 1");
        break;
      default:
        setCurrentNOE(value);
        setErrorAlert("");
        break;
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
