import React from "react";

const SignUp = () => {
  return (
    <div>
      <button
        onClick={async (e) => {
          e.preventDefault();

          await axios
            .post("/api/send-email", {
              firstName: "Mordecai",
              lastName: "Mengesteab",
            })
            .then((response) => {
              // Success! Display confirmation message or similar
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
