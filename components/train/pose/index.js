import React from "react";
import Link from "next/link";
import { Card, Col } from "antd";

const { Meta } = Card;

const TrainPose = () => {
  return (
    <>
      <Link href="/train/pose">
        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="teach-poses"
                src="images/teach-poses.png"
                width="100%"
              />
            }
          >
            <Meta
              title="Pose Project"
              description="Teach based on images, from files or your webcam"
            />
          </Card>
        </Col>
      </Link>
    </>
  );
};

export default TrainPose;
