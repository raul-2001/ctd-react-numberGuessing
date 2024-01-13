import React from "react";
import Button from "./Button";

const GuessControl = ({onGuess}) => {

  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const onSubmitGuess = () => {
    const numericGuess = parseFloat(currentGuess);
    if (!isNaN(numericGuess)) {
      onGuess(numericGuess);

      setCurrentGuess("");
    } else {
      console.error('Invalid input. Please enter a valid number.');
    }
    
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );

}

export default GuessControl;
