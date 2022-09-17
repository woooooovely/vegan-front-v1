import { useEffect } from "react";
import styled from "styled-components";
import AddImage from "../../AddProps.png";
import { Link } from "react-router-dom";
const Text = styled.div`
  position: absolute;
  height: 43px;
  width: 80px;
  left: 934px;
  top: 223px;
  font-family: "Amiko", "sans-serif";
  font-size: 32px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
`;
const BoardAdd = styled.img`
  position: absolute;
  height: 36px;
  width: 36px;
  left: 1530px;
  top: 92px;
  border-radius: 0px;
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
const Box = styled.div`
  position: absolute;
  height: 387px;
  width: 929px;
  left: 527px;
  top: 285px;
  border-radius: 0px;
`;
const Box2 = styled.div`
  position: relative;
  height: 330px;
  width: 877px;
  left: 0px;
  right: 0px;
  margin-bottom: 100px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(118, 118, 118, 0.1);
`;
const Name = styled.div`
  position: absolute;
  height: 28px;
  width: 55px;
  left: 471px;
  top: 55px;
  font-family: "Amiko";
  font-size: 21px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export default function BoardShow() {
  useEffect(() => {});
  const arr = [
    {
      name: "dada",
      title: "fsklmf",
      like: 12,
      view: 1234,
      class: "dmald",
      date: "9월 5일",
    },
    {
      name: "dada",
      title: "fsklmf",
      like: 12,
      view: 1234,
      class: "dmald",
      date: "9월 5일",
    },
  ];
  return (
    <>
      <StyledLink to="/BoardWrite">
        <BoardAdd src={AddImage} />
      </StyledLink>

      <Text>Food</Text>
      <Box>
        {arr.map((user) => (
          <Box2>
            <Name>{user.name}</Name>
          </Box2>
        ))}
      </Box>
    </>
  );
}
