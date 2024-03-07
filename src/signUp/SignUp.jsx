import React from "react";
import axios from "axios";

const SignUp = () => {
  return (
    <div>
      <button
        className="bg-red-500 p-5 text-lg text-white"
        onClick={async (e) => {
          e.preventDefault();

          await axios
            .post("/api/send-email", {
              firstName: "Mordecai",
              lastName: "Mengesteab",
            })
            .then((response) => {
              // Success! Display confirmation message or similar
              alert("Success");
            })
            .catch((error) => {
              // Error handling
              console.log("FUCK");
            });
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default SignUp;
