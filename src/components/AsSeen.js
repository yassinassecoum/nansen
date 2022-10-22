import React from "react";
import styled from "styled-components";

import fortune from "../assets/fortune.svg";
import bloomberg from "../assets/bloomberg.svg";
import coindesk from "../assets/coindesk.svg";
import cointelegraph from "../assets/cointelegraph.svg";
import decrypt from "../assets/decrypt.svg";
import techcrunch from "../assets/techcrunch.svg";
import theblock from "../assets/theblock.svg";
import yahoo from "../assets/yahoo.svg";

export const AsSeen = () => {
  return (
    <Section>
      <h2>As seen on</h2>
      <div className="logoWrapper">
        <img src={fortune} alt="Fortune logo" />
        <img src={bloomberg} alt="Bloomberg logo" />
        <img src={coindesk} alt="Coindesk logo" />
        <img src={cointelegraph} alt="Coin Telegraph logo" />
        <img src={decrypt} alt="Decrypt logo" />
        <img src={techcrunch} alt="Tech Crunch logo" />
        <img src={theblock} alt="The Block logo" />
        <img src={yahoo} alt="Yahoo logo" />
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
  @media screen and (max-width: 991px) {
    margin-top: 50px;
    padding-right: 20px;
    padding-left: 20px;
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
