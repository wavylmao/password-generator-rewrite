import { useEffect, useRef, useState } from "react";
import "./buttons.css";

const Buttons = ({ childToParent }) => {
  useEffect(() => {
    const slider = document.getElementById("rangeSelector");
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;

    slider.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

    slider.oninput = function () {
      this.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
    };
  });

  var includeLowerCase = false;
  var includeUpperCase = false;
  var includeNumbers = false;
  var includeSymbols = false;
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()";
  var charsArray = useRef([]);
  var chars = "";
  var password = useRef("");

  function flipCheckUpperCase() {
    includeUpperCase = document.getElementById("uppercaseCheckbox").checked;

    if (includeUpperCase === true) {
      charsArray.current.push(upperCaseLetters);
    } else {
      charsArray.current.splice(
        charsArray.current.indexOf(upperCaseLetters),
        1
      );
    }
    // console.log(charsArray.current);
  }
  function flipCheckLowerCase() {
    includeLowerCase = document.getElementById("lowercaseCheckbox").checked;

    if (includeLowerCase === true) {
      charsArray.current.push(lowerCaseLetters);
    } else {
      charsArray.current.splice(
        charsArray.current.indexOf(lowerCaseLetters),
        1
      );
    }
    // console.log(charsArray.current);
  }
  function flipCheckNumbers() {
    includeNumbers = document.getElementById("numbersCheckbox").checked;

    if (includeNumbers === true) {
      charsArray.current.push(numbers);
    } else {
      charsArray.current.splice(charsArray.current.indexOf(numbers), 1);
    }
    // console.log(charsArray.current);
  }
  function flipCheckSymbols() {
    includeSymbols = document.getElementById("symbolsCheckbox").checked;

    if (includeSymbols === true) {
      charsArray.current.push(symbols);
    } else {
      charsArray.current.splice(charsArray.current.indexOf(symbols), 1);
    }
    // console.log(charsArray.current);
  }

  const [count, setCount] = useState(8);

  function handleRangeChange() {
    setCount(document.getElementById("rangeSelector").value);
  }

  function handleClick() {
    chars = charsArray.current.join("");
    // console.log(charsArray.current);

    password.current = "";
    for (
      var i = 1, n = chars.length;
      i <= document.getElementById("rangeSelector").value;
      ++i
    ) {
      password.current += chars.charAt(Math.floor(Math.random() * n));
    }

    // document.getElementById("password").value = password.current;
    childToParent(password.current);
    // console.log(password);
  }
  return (
    <div className="w-80 1sm:w-96 md:w-[32rem] mx-auto bg-gray-regular p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-left font-bold text-light-gray mt-1 md:text-xl">
            Character Length
          </h2>
        </div>
        <div className="">
          <h2 className="text-left font-bold text-melon-green mt-1 md:text-2xl">
            {count}
          </h2>
        </div>
      </div>

      <input
        min={8}
        max={20}
        className="block mx-auto my-5 md:my-7"
        type="range"
        id="rangeSelector"
        onChange={handleRangeChange}
        value={count}
      />
      <div className="grid grid-rows-4 gap-2 md:gap-4">
        <div>
          <label className="checkbox-container font-bold text-light-gray md:text-xl">
            <input
              onClick={flipCheckUpperCase}
              className=""
              type="checkbox"
              name=""
              id="uppercaseCheckbox"
            />
            <span className="checkmark"></span>
            Include Uppercase Letters
          </label>
        </div>
        <div>
          <label className="checkbox-container font-bold text-light-gray md:text-xl">
            <input
              onClick={flipCheckLowerCase}
              className="mr-5"
              type="checkbox"
              name=""
              id="lowercaseCheckbox"
            />
            <span className="checkmark"></span>
            Include Lowercase Letters
          </label>
        </div>
        <div>
          <label className="checkbox-container font-bold text-light-gray md:text-xl">
            <input
              onClick={flipCheckNumbers}
              className="mr-5"
              type="checkbox"
              name=""
              id="numbersCheckbox"
            />
            <span className="checkmark"></span>
            Include Numbers
          </label>
        </div>
        <div>
          <label className="checkbox-container font-bold text-light-gray md:text-xl">
            <input
              onClick={flipCheckSymbols}
              className="mr-5"
              type="checkbox"
              name=""
              id="symbolsCheckbox"
            />
            <span className="checkmark"></span>
            Include Symbols
          </label>
        </div>
      </div>
      <input
        readOnly
        placeholder="STRENGTH"
        type="text"
        className="strength-input bg-dark-gray block mx-auto my-4 md:my-7 h-12 md:h-14 w-72 1sm:w-[22rem] md:w-[30rem] px-4 md:pb-[1px] placeholder:font-bold outline-none"
      />
      <button
        onClick={handleClick}
        className="generate-button block mx-auto bg-melon-green font-bold w-72 1sm:w-[22rem] md:w-[30rem] h-12 md:h-14 hover:bg-gray-regular hover:text-melon-green"
      >
        GENERATE →
      </button>
    </div>
  );
};

export default Buttons;
