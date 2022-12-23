import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTopBtn() {
  const [BackToTopBtn, setBackToTopBtn] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {BackToTopBtn && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "10px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: "rgba(255, 255, 255, 0.2)",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={scrollUp}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
}
