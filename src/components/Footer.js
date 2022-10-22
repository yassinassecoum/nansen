import React from "react";
import styled from "styled-components";

import logo from "../assets/logo2.svg";

export const Footer = () => {
  return (
    <Section>
      <div className="wrap">
        <div className="left">
          <img src={logo} alt="logo" />
          <p>
            Nansen is a blockchain analytics platform that enriches on-chain
            data with millions of wallet labels. Crypto investors use Nansen to
            discover opportunities, perform due diligence and defend their
            portfolios with our real-time dashboards and alerts.
          </p>
          <div className="wrapBtns">
            <button className="ghost">Nansen Alpha</button>
            <button className="ghost">Nansen for Institutions</button>
          </div>
        </div>
        <div className="right">
          <div className="col">
            <span className="title">Ressources</span>
            <span className="elem">Research</span>
            <span className="elem">Blog</span>
            <span className="elem">Nansen 101</span>
          </div>
          <div className="col">
            <span className="title">Contact Us</span>
            <span className="elem">General Enquiry</span>
            <span className="elem">Support</span>
            <span className="elem">Give Feedback</span>
          </div>
          <div className="col">
            <span className="title">About Us</span>
            <span className="elem">Company Info</span>
            <span className="elem">Pricing</span>
            <span className="elem">Careers</span>
            <span className="elem">Terms of Service</span>
            <span className="elem">Privacy Policy</span>
          </div>
        </div>
      </div>
      <p className="copyright"> © 2022 Nansen Pte. Ltd. All Rights Reserved.</p>
    </Section>
  );
};
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 60px;
  padding-right: 40px;
  padding-left: 40px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  .wrap {
    display: flex;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: left;
    }
    .left {
      width: 50%;
      min-height: 268px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: 991px) {
        width: 100%;
      }
      img {
        width: 113px;
        height: 51px;
        @media screen and (max-width: 480px) {
          margin-bottom: 25px;
        }
      }
      p {
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;

        letter-spacing: 0.35px;

        color: #d3dbe2;
        @media screen and (max-width: 991px) {
          max-width: 70%;
        }
        @media screen and (max-width: 480px) {
          max-width: 100%;
          margin-bottom: 20px;
        }
      }
      .wrapBtns {
        button {
          background: #00e3b4;
          border-radius: 2px;
          max-width: 222px;
          padding: 10px 20px;
          font-weight: 600;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          color: #121212;
          cursor: pointer;
          @media screen and (max-width: 991px) {
            min-width: 270px;
          }
          @media screen and (max-width: 480px) {
            min-width: -webkit-fill-available;
          }
        }
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      @media screen and (max-width: 991px) {
        margin-top: 50px;
        width: 100%;
        justify-content: space-between;
      }
      .col {
        display: flex;
        flex-direction: column;
        margin-left: 35px;
        @media screen and (max-width: 991px) {
          margin-left: 0px;
          margin-right: 35px;
        }
        .title {
          font-weight: 600;
          margin-bottom: 25px;
          font-size: 16px;
          line-height: 20px;
          color: #edf2f6;
        }
        .elem {
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          color: #d3dbe2;
          margin-top: 10px;
          cursor: pointer;
          &:hover {
            color: #00e3b4;
          }
        }
      }
    }
  }
  .copyright {
    margin-top: 20px;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;

    color: rgba(211, 219, 226, 0.5);
  }
`;
