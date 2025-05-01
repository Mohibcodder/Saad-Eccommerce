'use client'
import Button from "react-bootstrap/Button";
import Link from "next/link";

function Mainpic(props) {
  return (
    <>
<div style={{ position: 'relative', textAlign: 'center' }}>
      <img src={props.src} alt='' style={{ width: '100%', height: 'auto' }} />
      <p className='text-4xl text-center mb-4 italic tracking-wide mt-3'>
        {props.title}
      </p>
   <div id="data-display">
    <Link href="/Secondpage">  
     <Button
        className="font-serif"
        style={{
          position: "absolute",
          bottom: "83px",
          left: "49%",
          transform: "translateX(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          height: '48px',
          width: '160px',
          color: 'black', 
          border: '1px solid white',
          borderRadius : '0px', 
          letterSpacing : '4px',
          transition: "background-color 0.3s ease", 
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "white";
        }}        
        onMouseLeave={(e) =>
          { e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
        }
      }>
        SHOP NOW
      </Button>
      </Link>
      </div>
    </div>


    </>
  )
}

export default Mainpic
