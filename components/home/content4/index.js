import React from "react";
import { Col } from "antd";
const Content4 = () => {
  return (
    <>
      <Col xs={24} md={24}>
        <h1>What can I use to teach it?</h1>
        <div>
          Teachable Machine is flexible – use files or capture examples live.
          It’s respectful of the way you work. You can even choose to use it
          entirely on-device, without any webcam or microphone data leaving your
          computer.
        </div>
      </Col>
      <Col xs={24} md={8}>
        <img alt="teach-images" src="images/teach-images.png" width="100%" />
        <div>
          <h1>Images</h1>
        </div>
        <div>Teach a model to classify images using files or your webcam.</div>
      </Col>
      <Col xs={24} md={8}>
        <img alt="teach-sounds" src="images/teach-sounds.png" width="100%" />
        <div>
          <h1>Sounds</h1>
        </div>
        <div>
          Teach a model to classify audio by recording short sound samples.
          (WAV/MP3/etc file support coming soon.)
        </div>
      </Col>
      <Col xs={24} md={8} style={{ marginBottom: 50 }}>
        <img alt="teach-poses" src="images/teach-poses.png" width="100%" />
        <div>
          <h1>Poses</h1>
        </div>
        <div>
          Teach a model to classify body positions using files or striking poses
          in your webcam.
        </div>
      </Col>
    </>
  );
};

export default Content4;
