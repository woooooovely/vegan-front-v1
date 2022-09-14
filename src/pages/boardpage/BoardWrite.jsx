import axios from "axios";
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  width: 358px;
  height: 100px;
  left: 390px;
  top: 180px;
`;
const Write = styled.div`
  position: absolute;
  left: 0px;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  margin: 0;
  color: #000000;
`;
const Ggool = styled.div`
  position: absolute;
  left: 5px;
  top: 60px;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  color: #000000;

  opacity: 0.8;
`;
const Box2 = styled.div`
  position: absolute;
  width: 1120px;
  height: 48px;
  left: 400px;
  top: 446px;
  margin-top: 30px;
`;
const Text = styled.div`
  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;

  color: #000000;
`;
const Title = styled.input`
  width: 1120px;
  height: 48px;
  left: 400px;
  box-sizing: border-box;

  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  color: #000000;

  background: #ffffff;
  border: 1px solid #959393;
  border-radius: 8px;
`;
export default function BoardWrite() {
  const arr = ["제목", "분류"];
  return (
    <>
      <Box>
        <Write>글쓰기</Write>
        <Ggool>나만에 꿀팁을 공유해보세요!</Ggool>
      </Box>
      <Box2>
        {arr.map((user) => (
          <>
            <Text>{user}</Text>
            <Title />
          </>
        ))}
      </Box2>
    </>
  );
}
