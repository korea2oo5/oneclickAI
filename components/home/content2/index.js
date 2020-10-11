import React from "react";
import ReactPlayer from "react-player";
import { Col } from "antd";

const Content2 = () => {
  return (
    <>
      <Col xs={24} md={24} style={{ marginBottom: 50 }}>
        <div>
          <h1>What is Teachable Machine?</h1>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=T2qQGqZxkD0"
          controls={true}
        />
        <div>
          Teachable Machine is a web-based tool that makes creating machine
          learning models fast, easy, and accessible to everyone. (Note: you can
          find the
          <a
            href="https://teachablemachine.withgoogle.com/v1/"
            target="_blank"
            rel="noreferrer noopener"
          >
            first version of Teachable Machine from 2017 here.
          </a>
          .)
        </div>
      </Col>
    </>
  );
};

export default Content2;
