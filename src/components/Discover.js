import React, { useState } from "react";
import styled from "styled-components";

import first from "../assets/first.png";
import second from "../assets/second.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";

export const Discover = () => {
  const [showPicture, setShowPicture] = useState(1);

  const getShowPicture = () => {
    switch (showPicture) {
      case 1:
        return <img src={first} alt="first" />;
      case 2:
        return <img src={second} alt="second" />;
      case 3:
        return <img src={three} alt="three" />;
      case 4:
        return <img className="special" src={four} alt="four" />;
      case 5:
        return <img className="special" src={five} alt="five" />;
      default:
        return <img src={first} alt="first" />;
    }
  };
  return (
    <Section>
      <div className="left">
        <div
          onMouseEnter={() => setShowPicture(1)}
          onMouseLeave={() => setShowPicture(1)}
          className="group groupBtn"
        >
          <h1>Discover New Opportunities</h1>
          <p>
            Follow the Smart Money, see where funds are moving to, identify new
            projects or tokens, and trace transactions down to the most granular
            level.
          </p>
          <button className="ghost">Discover Now</button>
        </div>
        <div
          onMouseEnter={() => setShowPicture(2)}
          onMouseLeave={() => setShowPicture(1)}
          className="group"
        >
          <h1>Perform Due Dilligence</h1>
          <p>
            Develop your edge and make informed investment decisions by tracking
            the top holders of a NFT or token.
          </p>
        </div>
        <div
          onMouseEnter={() => setShowPicture(3)}
          onMouseLeave={() => setShowPicture(1)}
          className="group"
        >
          <h1>Defend Your Positions</h1>
          <p>
            Play bear market defense with custom alerts and get notified when
            key wallets move funds.
          </p>
        </div>
        <div
          onMouseEnter={() => setShowPicture(4)}
          onMouseLeave={() => setShowPicture(1)}
          className="group"
        >
          <h1>Surface the Signal</h1>
          <p>
            <span className="green">Track gas usage</span> to understand where
            the action is happening
          </p>
        </div>
        <div
          onMouseEnter={() => setShowPicture(5)}
          onMouseLeave={() => setShowPicture(1)}
          className="group"
        >
          <h1>Follow the Smart Money</h1>
          <p>
            Every trade from the top performers, market makers, and funds is at
            your fingertips! Track and follow the top crypto investors.
          </p>
        </div>
      </div>
      <div className="right">{getShowPicture()}</div>
      <div className="none">
        <img className="special" src={four} alt="four" />
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    height: 837px;
    max-width: 650px;
    margin-right: 20px;
    width: 50%;
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-top: 50px;
    }

    .groupBtn {
      min-height: 240px !important;
      @media screen and (max-width: 991px) {
        min-height: 295px !important;
      }
    }
    .group {
      display: flex;
      flex-direction: column;
      /* min-height: 145px; */
      height: auto;
      padding: 30px 20px;
      border-bottom: 1px solid rgba(211, 219, 226, 0.15);
      transition: background-color 0.3s;
      @media screen and (max-width: 991px) {
        padding: 20px 10px;
        /* min-height: 180px; */
      }
      &:hover {
        background-color: rgba(211, 219, 226, 0.06);
      }
      h1 {
        font-weight: 600;
        font-size: 27px;
        line-height: 36px;
        color: #edf2f6;
        margin-bottom: 20px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.35px;
        color: #d3dbe2;
        margin-bottom: 20px;
      }
      button {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #00e3b4;
        border-radius: 2px;
        color: #121212;
        max-width: 150px;
        padding: 10px;
        cursor: pointer;
      }
      .green {
        color: #00e3b4;
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
  .right {
    margin-left: 50px;
    position: relative;
    width: 50%;
    height: 681.22px;
    @media screen and (max-width: 991px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      display: none;
    }
    img {
      position: absolute;
      left: 0px;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      padding: 15px;
      max-width: 991px;
      border-radius: 26.656px;
      width: -webkit-fill-available;
      background: rgba(175, 167, 255, 0.2);
      border-radius: 30.24px;
    }
    .special {
      background: none;
      @media screen and (max-width: 991px) {
        padding: 0px;
      }
    }
  }
  .none {
    display: none;
    margin-left: 50px;
    position: relative;
    width: 100%;
    height: 681.22px;
    @media screen and (max-width: 480px) {
      display: block;
      margin-left: 0px;
    }
    img {
      position: absolute;
      left: 0px;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      padding: 15px;
      max-width: 991px;
      border-radius: 26.656px;
      width: -webkit-fill-available;
      background: rgba(175, 167, 255, 0.2);
      border-radius: 30.24px;
    }
    .special {
      background: none;
      @media screen and (max-width: 991px) {
        padding: 0px;
      }
    }
  }
`;
