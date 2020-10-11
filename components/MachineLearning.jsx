import React, {
  useRef,
  useState,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
// import ml5 from "ml5";
import Webcam from "react-webcam";
import ProgressBar from "./ProgressBar";

let featureExtractor;
let options;
let classifier;
let result = [{}];
let ml5;

export default function MachineLearning() {
  // console.log("Machine Learning code activated");
  const Data = useSelector((state) => state.imgs[1].data);
  const container = useSelector((state) => state.imgs[0].container);
  const [imgSrc, setImgSrc] = useState(""); // web cam image update
  const classfyRef = useRef(null); // classfy setInterval
  const webcamRef = useRef(null); // web cam ref

  useEffect(() => {
    console.log("ML: useEffect1", container, container.length);
    options = {
      topk: Math.min(5, container.length),
      numLabels: container.length,
    };
    ml5 = require('ml5')
    featureExtractor = ml5.featureExtractor("MobileNet", options, modelLoaded);
    classifier = featureExtractor.classification();
  }, [Data]);

  async function modelLoaded() {
    console.log("ML: Model Ready!!!!!");
    // Add images and train them
    if (Data.length != 0) {
      await addImages();
      train();
    }
  }

  function addImages() {
    console.log("ML: addImages");
    Data.map((data, idx) =>
      classifier.addImage(document.getElementById(data.iid), data.label)
    );
  }

  function train() {
    classifier.train(function (lossValue) {
      if (lossValue != null) {
        console.log("Loss is", lossValue);
      } else {
        console.log("Loss is", lossValue);
        console.log("training finished");
        classfyRef.current = setInterval(() => classify(), 400);
        // classify();
      }
    });
  }

  function classify() {
    setImgSrc(webcamRef.current.getScreenshot());
    classifier.classify(document.getElementById("classyShot"), (err, res) =>
      sorting(err, res)
    );
  }

  function sorting(err, res) {
    result = res;
    //큰값부터 작은값으로
    let result2 = result.sort(
      (a, b) => parseFloat(b.confidence) - parseFloat(a.confidence)
    );
    // 작은값부터 큰값으로
    let result3 = result.sort((a, b) =>
      a.label > b.label ? 1 : b.label > a.label ? -1 : 0
    );
    console.log("result: ", result);
    console.log("result2: ", result2);
    console.log("result3: ", result3);
  }

  const containerStyles = {
    border: "1px solid black",
    width: "400px",
  };

  const webCamStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <React.Fragment>
      <img src={imgSrc} id="classyShot" />

      <div style={containerStyles}>
        <div style={webCamStyles}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="200"
          />
        </div>

        {result.map((item, idx) => (
          <ProgressBar
            key={idx}
            id={idx}
            completed={Math.round(item.confidence * 100)}
            label={item.label}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
