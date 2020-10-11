import React from "react";
import { containerAdd, imgsCollect } from "../reducers/imgs";
import { useSelector, useDispatch } from "react-redux";
import ImgGenerate from "./ImgGenerate";
import MachineLearning from "./MachineLearning";

export default function BtnContGenerate() {
  const Container = useSelector((state) => state.imgs[0].container);
  // const Data = useSelector((state) => state.imgs[1].data);
  const dispatch = useDispatch();

  const pageStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  // const imgStyles = {};

  const trainingStyles = {};

  const mlStyles = {};

  return (
    <React.Fragment>
      <div style={pageStyles}>
        <div>
          {Container.map((Container) => (
            <ImgGenerate key={Container.id} id={Container.id} />
          ))}

          <button onClick={() => dispatch(containerAdd())}>
            container generator
          </button>
        </div>

        <div style={trainingStyles}>
          <button onClick={() => dispatch(imgsCollect())}>Training</button>
        </div>

        <div style={mlStyles}>
          <MachineLearning />
        </div>
      </div>
    </React.Fragment>
  );
}
