import React from "react";
import { Card, Col } from "antd";
import Link from "next/link";

const { Meta } = Card;

const TrainImage = () => {
  return (
    <>
      <Link href="/train/image">
        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="teach-images"
                src="images/teach-images.png"
                width="100%"
              />
            }
          >
            <Meta
              title="Image Project"
              description="Teach based on images, from files or your webcam"
            />
          </Card>
        </Col>
      </Link>
    </>
  );
};

export default TrainImage;
