import Button from "react-bootstrap/Button";

function Smallpics(props) {
  return (
    <>
      <div className="relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Image Container */}
        <div className="relative w-full h-[550px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-[5000ms] ease overflow-hidden hover:scale-125"
            src={props.src}
            alt=""
          />
        </div>

        {/* Title */}
        <p className="text-2xl text-center mb-4 italic tracking-wide mt-3">
          {props.title}
        </p>

        {/* Button */}
        <Button
          
          className="mb-14 w-48 h-11 border border-black bg-black text-white rounded-none tracking-wider transition duration-200 ease-in-out hover:bg-transparent hover:text-black"
        >
          {props.Button}
        </Button>
      </div>
    </>
  );
}

export default Smallpics;
