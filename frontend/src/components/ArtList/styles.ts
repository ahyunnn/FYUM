import styled from "styled-components";
import BackImg from "../../assets/images/artListBackground.png";
import { ReactComponent as CloseIc } from "../../assets/icon/closeIc.svg";
import { black, grey } from "../../styles/colors";

export const ArtListContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackImg});
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -3%;
    height: 103%;
  }
`;

export const SideBarContainer = styled.div`
  position: fixed;
  width: 330px;
  height: 100vh;
  left: 0%;
  top: 0%;
  background: ${black};
  border-radius: 0px 10px 10px 0px;
  z-index: 999999;
`;

export const SideBarCloseIcStyle = styled(CloseIc)`
  float: right;
  height: 20px;
  width: 20px;
  fill: ${grey[300]};
`;
