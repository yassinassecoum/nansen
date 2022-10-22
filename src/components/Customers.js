import React, { useState } from "react";
import styled from "styled-components";

import customer from "../assets/customer.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Customers = () => {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <Section>
      <h2>What Our Customer Say</h2>
      <Carousel
        className="carousel"
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        selectedItem={currentItem}
      >
        <div>
          <img src={customer} alt="Customer Review" />
        </div>
        <div>
          <img src={customer} alt="Customer Review" />
        </div>
      </Carousel>
      <button
        className="leftBtn ghost"
        onClick={() => setCurrentItem(currentItem === 0 ? 1 : 0)}
      >
        <img src={left} alt="left button" />
      </button>
      <button
        className="rightBtn ghost"
        onClick={() => setCurrentItem(currentItem === 0 ? 1 : 0)}
      >
        <img src={right} alt="right button" />
      </button>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-right: 50px;
  padding-left: 50px;
  background: #082235;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  h2 {
    width: 100%;
    height: 48px;
    text-align: center;
    font-weight: 400;
    font-size: 37px;
    line-height: 48px;
    color: #edf2f6;
    @media screen and (max-width: 480px) {
      line-height: 1.2;
      text-align: center;
      font-size: 28px;
    }
  }
  .carousel {
    margin-top: 20px;
    max-width: 700px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 1000px;
    cursor: pointer;
  }
  .leftBtn {
    position: absolute;
    background: #00e3b4;
    top: 290px;
    left: 345px;
    @media screen and (max-width: 991px) {
    }
  }
  .rightBtn {
    position: absolute;
    background: #00e3b4;
    top: 290px;
    right: 345px;
    @media screen and (max-width: 991px) {
    }
  }
`;
