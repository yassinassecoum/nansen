// import React from "react";
// import styled from "styled-components";

// import article1 from "../assets/article1.svg";
// import article2 from "../assets/article2.svg";
// import article3 from "../assets/article3.svg";

// export const Latest = () => {
//   return (
//     <Section>
//       <h1>Latest Research</h1>
//       <div className="wrapArticle">
//         <div className="article">
//           <img src={article1} alt="article thumbnail" />
//           <span className="tag">Blockchain</span>
//           <div className="wrap">
//             <span className="articleTitle">
//               BNB Chain’s Cross-Chain Bridge Exploit Explained
//             </span>
//             <span className="articleSubTitle">Oct 15, 2022</span>
//             <span className="articleDesc">
//               Nansen's research team dives into the BNB Chain's Cross-Chain
//               Bridge exploit and traces the attackers activity.
//             </span>
//           </div>
//         </div>
//         <div className="article">
//           <img src={article2} alt="article thumbnail" />
//           <span className="tag">NFT</span>
//           <div className="wrap">
//             <span className="articleTitle">
//               NFT Price Estimates Machine Learning Model
//             </span>
//             <span className="articleSubTitle">Oct 5, 2022</span>
//             <span className="articleDesc">
//               In this article, we offer an in-depth explanation of our newly
//               improved Price Estimates machine learning model and give insights
//               into how it works.
//             </span>
//           </div>
//         </div>
//         <div className="article">
//           <img src={article3} alt="article thumbnail" />
//           <span className="tag">NFT</span>
//           <div className="wrap">
//             <span className="articleTitle">
//               Tracking Sudoswap Marketplace Activity with Nansen
//             </span>
//             <span className="articleSubTitle">Sep 8, 2022</span>
//             <span className="articleDesc">
//               Sudoswap introduces a new way to conceptualize NFT trades and
//               transactions. Since its launch in July 2022, Sudoswap has
//               experienced rapid growth.
//             </span>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };
// const Section = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   align-items: left;
//   max-width: 1440px;
//   margin-right: auto;
//   margin-left: auto;
//   margin-top: 80px;
//   margin-bottom: 80px;
//   padding-right: 50px;
//   padding-left: 50px;
//   h1 {
//     font-weight: 400;
//     font-size: 37px;
//     line-height: 44px;
//     color: #edf2f6;
//   }
//   .wrapArticle {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     margin-top: 40px;
//     .article {
//       display: flex;
//       justify-content: space-between;
//       flex-direction: column;
//       max-width: 415px;
//       position: relative;
//       min-height: 428px;
//       height: 100%;
//       cursor: pointer;
//       &:hover {
//         background-color: #082235;
//       }
//       .tag {
//         position: absolute;
//         top: 10px;
//         right: 10px;
//         padding: 2px 5px;
//         border-radius: 2px;
//         background-color: rgba(237, 242, 246, 0.85);
//         color: #121212;
//         font-size: 11px;
//         line-height: 1.3;
//         font-weight: 700;
//         letter-spacing: 0.1px;
//       }
//       img {
//         margin-bottom: 20px;
//         height: 100%;
//       }
//       .wrap {
//         padding: 12px 18px 20px;
//         display: flex;
//         justify-content: space-between;
//         flex-direction: column;
//         .articleTitle {
//           font-weight: 400;
//           font-size: 23px;
//           line-height: 28px;
//           color: #edf2f6;
//           margin-bottom: 10px;
//         }
//         .articleSubTitle {
//           font-weight: 400;
//           font-size: 13px;
//           line-height: 20px;
//           color: rgba(211, 219, 226, 0.6);
//           margin-bottom: 10px;
//         }
//         .articleDesc {
//           font-weight: 400;
//           font-size: 17px;
//           line-height: 22px;
//           letter-spacing: 0.35px;
//           color: #d3dbe2;
//         }
//       }
//     }
//   }
// `;
import React from "react";
import styled from "styled-components";

import article1 from "../assets/article1.svg";
import article2 from "../assets/article2.svg";
import article3 from "../assets/article3.svg";

export const Latest = () => {
  return (
    <Section>
      <h1>Latest Research</h1>
      <div className="wrapArticle">
        <div className="article">
          <img src={article1} alt="article thumbnail" />
          <span className="tag">Blockchain</span>
          <div className="wrap">
            <span className="articleTitle">
              BNB Chain’s Cross-Chain Bridge Exploit Explained
            </span>
            <span className="articleSubTitle">Oct 15, 2022</span>
            <span className="articleDesc">
              Nansen's research team dives into the BNB Chain's Cross-Chain
              Bridge exploit and traces the attackers activity.
            </span>
          </div>
        </div>
        <div className="article">
          <img src={article2} alt="article thumbnail" />
          <span className="tag">NFT</span>
          <div className="wrap">
            <span className="articleTitle">
              NFT Price Estimates Machine Learning Model
            </span>
            <span className="articleSubTitle">Oct 5, 2022</span>
            <span className="articleDesc">
              In this article, we offer an in-depth explanation of our newly
              improved Price Estimates machine learning model and give insights
              into how it works.
            </span>
          </div>
        </div>
        <div className="article">
          <img src={article3} alt="article thumbnail" />
          <span className="tag">NFT</span>
          <div className="wrap">
            <span className="articleTitle">
              Tracking Sudoswap Marketplace Activity with Nansen
            </span>
            <span className="articleSubTitle">Sep 8, 2022</span>
            <span className="articleDesc">
              Sudoswap introduces a new way to conceptualize NFT trades and
              transactions. Since its launch in July 2022, Sudoswap has
              experienced rapid growth.
            </span>
          </div>
        </div>
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
  h1 {
    font-weight: 400;
    font-size: 37px;
    line-height: 44px;
    color: #edf2f6;
    @media screen and (max-width: 480px) {
      font-size: 28px;
      line-height: 1.1;
      text-align: center;
    }
  }
  .wrapArticle {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-top: 40px;
    @media screen and (max-width: 767px) {
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
    .article {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: opacity 0.2s, background-color 0.2s;
      color: #d3dbe2;
      font-weight: 400;
      max-width: 100%;
      display: inline-block;
      @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: row-reverse;
      }
      @media screen and (max-width: 480px) {
        flex-direction: column;
      }
      &:hover {
        background-color: #082235;
      }
      .tag {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 2px 5px;
        border-radius: 2px;
        background-color: rgba(237, 242, 246, 0.85);
        color: #121212;
        font-size: 11px;
        line-height: 1.3;
        font-weight: 700;
        letter-spacing: 0.1px;
      }
      img {
        margin-bottom: 20px;
        @media screen and (max-width: 767px) {
          margin-bottom: auto;
          width: 50%;
        }
        @media screen and (max-width: 480px) {
          margin-bottom: 20px;
          width: 100%;
        }
      }
      .wrap {
        padding: 12px 18px 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .articleTitle {
          font-weight: 400;
          font-size: 23px;
          line-height: 28px;
          color: #edf2f6;
          margin-bottom: 10px;
        }
        .articleSubTitle {
          font-weight: 400;
          font-size: 13px;
          line-height: 20px;
          color: rgba(211, 219, 226, 0.6);
          margin-bottom: 10px;
        }
        .articleDesc {
          font-weight: 400;
          font-size: 17px;
          line-height: 22px;
          letter-spacing: 0.35px;
          color: #d3dbe2;
        }
      }
    }
  }
`;
