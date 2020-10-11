import React from "react";
import BtnContGenerate from "../../components/BtnContGenerate";
import { Provider } from "react-redux";
import store from "../../stores";

const Image = () => {
  return (
    <>
      <div
        style={{
          padding: "0 calc(100% / 9 * 2)",
          marginTop: 84,
        }}
      >
        <Provider store={store()}>
      <div className="section">
        <div className="container">
          <BtnContGenerate />
        </div>
      </div>
    </Provider>
      </div>
    </>
  );
};

export default Image;
