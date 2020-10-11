import React, { useRef, useCallback } from "react";
import { Button, Col, Row } from "antd";
import TrainImage from "../components/train/image";
import TrainPose from "../components/train/pose";
import TrainSound from "../components/train/sound";

const Train = () => {
  // 실제 DOM에 접근하기 위해
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <>
      <div
        style={{
          padding: "0 calc(100% / 9 * 2)",
          marginTop: 84,
        }}
      >
        <Row gutter={30}>
          <Col xs={24} md={24} style={{ marginBottom: 30 }}>
            <h1>New Project</h1>
          </Col>
          <Col xs={24} md={24} style={{ marginBottom: 30 }}>
            <input type="file" multiple hidden ref={imageInput} />
            <Button onClick={onClickImageUpload}>File</Button>
          </Col>
          <TrainImage />
          <TrainSound />
          <TrainPose />
        </Row>
      </div>
    </>
  );
};

export default Train;
