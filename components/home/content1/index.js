import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Col, Button } from "antd";

const Content1 = () => {
  return (
    <>
      <Col xs={24} md={16}>
        <div>
          <h1>Teachable Machine</h1>
        </div>
        <div>
          <h2>
            Train a computer to recognize your own images, sounds, & poses.
          </h2>
        </div>
        <div>
          A fast, easy way to create machine learning models for your sites,
          apps, and more – no expertise or coding required.
        </div>
        <div>
          <Link href="/train">
            <Button type="primary">Get Started</Button>
          </Link>
        </div>
      </Col>
      <Col xs={24} md={8} style={{ marginBottom: 50 }}>
        <ReactPlayer
          url="videos/prediction.MP4"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
        />
      </Col>
    </>
  );
};

export default Content1;
