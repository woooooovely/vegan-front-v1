import styled from "styled-components";
import Image from "../Logo.png";
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
  background-color: red;
`;
export default function Headers() {
  return (
    <>
      <Top>
        <Logo src={Image} />
      </Top>
    </>
  );
}
