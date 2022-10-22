import React from "react";
import styled from "styled-components";

import cta from "../assets/cta.svg";
import white from "../assets/white.jpg";

export const CtaEnd = () => {
  return (
    <Section>
      <div className="wrap">
        <h1>Follow the Smart Money </h1>
        <p>Grow your crypto portfolio today</p>
        <button>Unlock Access For Free</button>
      </div>
    </Section>
  );
};
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 90px 50px;
    border-radius: 10px;
    background-image: url(${cta});
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    color: #121212;
    @media screen and (max-width: 480px) {
      padding: 15px;
      padding-top: 20px;
      padding-bottom: 40px;
    }

    h1 {
      font-weight: 400;
      font-size: 37px;
      line-height: 44px;
      @media screen and (max-width: 480px) {
        font-size: 28px;
        line-height: 1.1;
        text-align: center;
      }
    }
    p {
      margin-top: 20px;
      margin-bottom: 0;
    }
    button {
      background-color: #121212;
      color: #edf2f6;
      width: 240px;
      margin-top: 20px;
      padding: 10px 20px;
      border-radius: 2px;
      font-size: 17px;
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      background-image: url(${white});
      background-position: 50% 80px;
      background-size: auto 100%;
      background-repeat: repeat-x;
      transition: opacity 0.2s, color 0.2s, background-position 0.2s;
      &:hover {
        background-image: url(${white});
        background-position: 50% 60%;
        background-size: auto 110%;
        color: #121212;
      }
    }
  }
`;
