import styled from "styled-components";
import Image from "../Logo.png";
import { Link } from "react-router-dom";
const Logo = styled.img`
  position: absolute;
  margin: 0;
  top: 74px;
  left: 115px;
  width: 192px;
  height: 53px;
`;
const Top = styled.div`
  width: 100%;
  height: 180px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default function Headers() {
  return (
    <>
      <Top>
        <StyledLink to="/">
          <Logo src={Image} />
        </StyledLink>
      </Top>
    </>
  );
}
