import React from "react";
import Link from "next/link";
import { Card, Col } from "antd";

const { Meta } = Card;

const TrainSound = () => {
  return (
    <>
      <Link href="/train/audio">
        <Col xs={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="teach-sounds"
                src="images/teach-sounds.png"
                width="100%"
              />
            }
          >
            <Meta
              title="Audio Project"
              description="Teach based on one-second-logn sounds, from files or your microphone."
            />
          </Card>
        </Col>
      </Link>
    </>
  );
};

export default TrainSound;
