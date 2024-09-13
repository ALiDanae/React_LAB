import { AiOutlineStar as StartIconEmpty } from "react-icons/ai";
import { AiFillStar as StartIconFull } from "react-icons/ai";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rate() {
  const [star, setStar] = useState([
    { id: 1, hover: false, clicked: true },
    { id: 2, hover: false, clicked: true },
    { id: 3, hover: false, clicked: true },
    { id: 4, hover: false, clicked: false },
    { id: 5, hover: false, clicked: false },
  ]);

  const hoverHandler = (id) => {
    let hoverData = star.map((item) => {
      return item.id <= id
        ? { ...item, hover: true }
        : { ...item, hover: false };
    });
    setStar(hoverData);
  };

  const blurHandler = () => {
    const blurData = star.map((item) => {
      return { ...item, hover: false };
    });
    setStar(blurData);
  };

  const submitRateHandler = (id) => {
    console.log(id);
    fetch(`http://127.0.0.1:8000/posts/`, {
      method: "PATCH",
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message, {
            position: "top-left"
          });
        } else {
          toast.error(data.message, {
            position: "top-left"
          });
        }

        stepBackward(id)
      });

  };

  const stepBackward = (rate) => {
    // Your code ...
    let hoverData = star.map((item) => {
      return item.id <= rate
        ? { ...item, clicked: true }
        : { ...item, clicked: false };
    });
    setStar(hoverData);
  };

  return (
    <>
      <div className="rate-box">
        <h1>Rate : </h1>
        <div className="rate-container">
          {star.map((item) => (
            <div
              className="rate"
              key={item.id}
              onMouseEnter={() => hoverHandler(item.id)}
              onMouseLeave={blurHandler}
              onClick={() => submitRateHandler(item.id)}
            >
              {item.clicked || item.hover ? (
                <StartIconFull />
              ) : (
                <StartIconEmpty />
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <ToastContainer />
    </>
  );
}

export default Rate;
