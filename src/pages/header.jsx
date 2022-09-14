import styled from "styled-components";
import Image from "../Logo.png";
const Logo = styled.img`
  position: absolute;
  margin-top: 69px;
  left: 120px;
  width: 190px;
  height: 50px;
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
        <div>안녕하세요</div>
      </Top>
    </>
  );
}
