import React from "react";
import { Col } from "antd";
const Content3 = () => {
  return (
    <>
      <Col xs={24} md={24}>
        <h1>How do I use it?</h1>
      </Col>
      <Col xs={24} md={8}>
        <img
          alt="collect"
          src="images/collect.svg"
          height="200px"
          width="100%"
        />
        <div>
          <h1>1 Gather</h1>
        </div>
        <div>
          Gather and group your examples into classes, or categories, that you
          want the computer to learn.
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=DFBbSTvtpy4"
            target="_blank"
            rel="noreferrer noopener"
          >
            Video: Gather samples
          </a>
        </div>
      </Col>
      <Col xs={24} md={8}>
        <img alt="train" src="images/train.svg" height="200px" width="100%" />
        <div>
          <h1>2 Train</h1>
        </div>
        <div>
          Train your model, then instantly test it out to see whether it can
          correctly classify new examples.
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=CO67EQ0ZWgA"
            target="_blank"
            rel="noreferrer noopener"
          >
            Video: Train your model
          </a>
        </div>
      </Col>
      <Col xs={24} md={8} style={{ marginBottom: 50 }}>
        <img alt="export" src="images/export.svg" height="200px" width="100%" />
        <div>
          <h1>3 Export</h1>
        </div>
        <div>
          Export your model for your projects: sites, apps, and more. You can
          download your model or host it online for free.
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=n-zeeRLBgd0"
            target="_blank"
            rel="noreferrer noopener"
          >
            Video: Export your model
          </a>
        </div>
      </Col>
    </>
  );
};

export default Content3;
