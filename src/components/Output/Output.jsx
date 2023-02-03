import "./output.css";

const Output = ({ parentToChild }) => {
  return (
    <div className="outputContainer">
      <h2 className="text-light-gray text-2xl md:text-3xl">
        Password Generator
      </h2>
      <div className="output-container text-center relative">
        <input
          // value={password.current}
          placeholder="P4$5W0rD!"
          className="password-output my-4 w-80 1sm:w-96 md:w-[32rem] inline-block left-5"
          type="text"
          id="password"
          value={parentToChild}
          readOnly
        />
        {/* <i className="fa-regular fa-copy text-melon-green text-2xl absolute"></i>
        <i className="fa-regular fa-copy text-melon-green text-2xl absolute right-8 top-14"></i> */}
      </div>
    </div>
  );
};

export default Output;
