//

import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 85vh;
  align-items: center;
  width: 100%;
  /* justify-content: center; */
  padding-left: 24px;
  font-size: 3rem;
  background-image: url("Image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  color: yellow;
  font-size: 100px;
  /* background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1; */
  background-color: black;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
`;
export const HeroContent = styled.div`
  z-index: 3;
  width: 750px;
  height: 480px;
  position: absolute;
  padding: 8px 24px;
  padding-top: 25px;
  left: 30px;
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: column;
  background-color: #fbfcf8;
  border-radius: 10px;
  /* align-items: center; */
`;
export const HeroH1 = styled.h1`
  color: black;
  font-size: 24px;
  text-align: center;
  padding-bottom: 25px;

  @media screen and (max-width: 760px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  /* margin-top: 5px; */
  color: #000;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 76px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const TechData = styled.div`
  position: absolute;
  right: 40px;
  width: 420px;
  height: 480px;
  z-index: 3;

  margin-left: 10px;
  background-color: #fbfcf8;
  border-radius: 10px;
`;
export const TechH1 = styled.h1`
  color: black;
  font-size: 24px;
  text-align: center;
  padding-bottom: 25px;
  padding-top: 30px;
  padding-left: 20px;
`;
export const NewData = styled.div`
background-color: black
height: 100%;
width: 100%;
position : relative;
`;

export const TechDataVal = styled.div`
  font-size: 20px;
  text-align: left;
  padding-bottom: 25px;
  padding-top: 20px;
  padding-left: 50px;
  // padding: 45px;
  color: black;
`;
