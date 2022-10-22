import React from "react";
import styled from "styled-components";

import accel from "../assets/accel.svg";
import gic from "../assets/gic.svg";
import tigerglobal from "../assets/tigerglobal.svg";
import a16z from "../assets/a16z.svg";
import mechanism from "../assets/mechanism.svg";
import scb from "../assets/scb.svg";
import coinbaseventure from "../assets/coinbaseventure.svg";
import skyfall from "../assets/skyfall.svg";

export const BackedBy = () => {
  return (
    <Section>
      <h2>Backed by the best</h2>
      <div className="logoWrapper">
        <img src={accel} alt="Accel logo" />
        <img src={gic} alt="GIC logo" />
        <img src={tigerglobal} alt="Tiger Global logo" />
        <img src={a16z} alt="A16z logo" />
        <img src={mechanism} alt="Mechanism Capital logo" />
        <img src={scb} alt="SCB logo" />
        <img src={coinbaseventure} alt="Coinbase Venture logo" />
        <img src={skyfall} alt="SkyFall logo" />
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  margin-top: 175px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 255px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 13px;
    padding-left: 13px;
  }
  h2 {
    width: 100%;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    text-align: center;
    color: rgba(211, 219, 226, 0.6);
    margin-bottom: 20px;
  }
  .logoWrapper {
    display: flex;
    justify-content: space-between;
    opacity: 0.8;
    img {
      max-width: 117px;
    }
    @media screen and (max-width: 991px) {
      flex-wrap: wrap;
      img {
        flex: 1 0 21%;
      }
    }
  }
`;
