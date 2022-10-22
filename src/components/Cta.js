import React from "react";
import styled from "styled-components";

export const Cta = () => {
  return (
    <Section>
      <div className="left">
        <h1>Real-Time Crypto and NFT Insights</h1>
        <p>
          Join 100,000+ investors getting their crypto and NFT investing edge
          from Nansen.
        </p>
        <button className="ghost">Unlock access for free</button>
      </div>
      <div className="right">
        <div className="video-thumbnail">
          <iframe
            title="What is Nansen"
            src="https://player.vimeo.com/video/693182101?h=9219c270b7&color=3d8187&title=0&byline=0&portrait=0"
            frameBorder={"0"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;
  min-height: 82vh;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    min-height: unset;
    padding-right: 20px;
    padding-left: 20px;
  }
  .left,
  .right {
    width: 50%;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
  .left {
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (max-width: 991px) {
      align-items: center;
    }
    @media screen and (max-width: 480px) {
      height: 245px;
    }
    h1 {
      font-weight: 400;
      font-size: 55px;
      line-height: 63px;
      color: #edf2f6;
      max-width: 455px;
      @media screen and (max-width: 991px) {
        text-align: center;
      }
      @media screen and (max-width: 480px) {
        font-size: 37px;
        line-height: 1.05;
        font-weight: 500;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: 0.35px;
      color: #d3dbe2;
      max-width: 353px;
      @media screen and (max-width: 991px) {
        text-align: center;
      }
      @media screen and (max-width: 480px) {
        line-height: 1.05;
      }
    }
    button {
      font-weight: 500;
      font-size: 21px;
      line-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #00e3b4;
      border-radius: 2px;
      color: #121212;
      max-width: 300px;
      padding: 16px 30px;
      cursor: pointer;
      @media screen and (max-width: 480px) {
        font-size: 18px;
        padding: 10px 25px;
      }
    }
  }
  .right {
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(175, 167, 255, 0.2);
    @media screen and (max-width: 480px) {
      padding: 5px;
    }
    .video-thumbnail {
      overflow: hidden;
      width: auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      cursor: pointer;
      min-width: 100%;
      padding: 56.25% 0 0 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
