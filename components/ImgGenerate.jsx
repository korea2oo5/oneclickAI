import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  imgsAdd,
  imgsDel,
  containerDel,
  imgsLabelUpdate,
  imgsComUpdate,
} from "../reducers/imgs";
import { useSelector, useDispatch } from "react-redux";
import Webcam from "react-webcam";

export default function BtnGenerate({ id }) {
  console.log("ImgGenerate Initiallised container: ", id);
  const container = useSelector((state) => state.imgs[0].container);
  const dispatch = useDispatch();

  let contId = id; // 컨테이너 아이디를 재정의... 필요한가?
  let imgSrc; // 웹캠으로 찍히는 사진 변수
  let labelInputId = "labelHolder" + contId.toString(); // input에 필요한 unique id, key를 이런식으로 만듬
  let comInputId = "comHolder" + contId.toString(); // input에 필요한 unique id, key를 이런식으로 만듬

  const chosenContainer = container.filter((obj) => obj.id == contId);
  const chosenImgSet = chosenContainer[0].img;

  const webcamRef = useRef(null);
  const intervalRef = useRef(null);

  // image capture 진행
  const capture = useCallback(() => {
    console.log("ImgGenerate: img capture activated");
    imgSrc = webcamRef.current.getScreenshot();
    dispatch(imgsAdd({ id: contId, src: imgSrc }));
  }, [imgSrc]);

  // capture를 여러번 동작시키기 위해 pressHold 만듬
  const pressHold = useCallback(() => {
    console.log("ImgGenerate: PressHold Activated");
    capture();
    intervalRef.current = setInterval(capture, 100);
  }, [imgSrc]);

  // 누르면 삭제
  function ContainerDel() {
    console.log("ImgGenerate: DeleteContainer");
    dispatch(containerDel({ id: contId }));
  }

  // 라벨 업데이트
  function ImgLabelUpdate() {
    console.log("ImgGenerate: Labels will be updated!!");
    let label = document.getElementById(labelInputId).value;
    dispatch(imgsLabelUpdate({ id: contId, label: label }));
  }

  // comment 업데이트
  function ImgComUpdate() {
    console.log("ImgGenerate: A Comment is updated!!");
    let comment = document.getElementById(comInputId).value;
    dispatch(imgsComUpdate({ id: contId, comment: comment }));
  }

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          id={labelInputId}
          placeholder="Label here"
          onBlur={ImgLabelUpdate}
        ></input>

        <input
          type="text"
          id={comInputId}
          placeholder="Comment here"
          onBlur={ImgComUpdate}
        ></input>

        <button onClick={ContainerDel}>Delete This container</button>

        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="200"
        />

        <button
          onMouseDown={pressHold}
          onMouseUp={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => clearInterval(intervalRef.current)}
        >
          Capture photo
        </button>

        {chosenImgSet.map((imgs) => (
          <img
            key={imgs.iid}
            id={imgs.iid}
            src={imgs.src}
            width="100"
            onClick={() => dispatch(imgsDel({ id: contId, iid: imgs.iid }))}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
