import styled from "styled-components";
import { AiOutlinePicture } from "react-icons/ai";
import { useRef } from "react";
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
  top: 310px;
  margin-top: 0px;
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
  margin: 3000px;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;
  margin: 0;
  color: #000000;
  opacity: 0.8;
  left: 0px;
  margin-bottom: 28px;
  background: #ffffff;
  border: 1px solid #959393;
  border-radius: 8px;
  position: relative;
`;
const MainText = styled.div`
  box-sizing: border-box;
  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;
  opacity: 0.8;
  color: #000000;
  position: absolute;
  width: 1120px;
  height: 396px;
  left: 400px;
  top: 557px;

  background: #ffffff;
  border: 1px solid #959393;
  border-radius: 8px;
`;
const YourStory = styled.div`
  position: absolute;
  width: 300px;
  height: 37px;
  left: 400px;
  top: 523px;

  font-family: "Amiko";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;

  color: #000000;
`;
const InputEl = styled.input`
  position: absolute;
  top: 550px;
  left: 400px;
`;
const Image = styled(AiOutlinePicture)`
  position: absolute;
  width: 25px;
  height: 26px;
  left: 1468px;
  top: 905px;
`;
export default function BoardWrite() {
  const arr = [
    { name: "제목", user: "제목을 입력하세요" },
    { name: "분류", user: "분류를 입력하세요" },
  ];
  const imageRef = useRef();
  //   imageSelector.addEventListener("change", function (e) {
  //     const files = e.target.files;
  //     if (!!files) {
  //       insertImageDate(files[0]);
  //     }
  //   });
  function ImageSelector() {
    imageRef.current.onClick();
  }
  function GetImage(e) {
    const files = e.target.files;
    if (!!files) {
      insertImageDate(files[0]);
    }
  }
  const insertImageDate = (file) => {
    const reader = new FileReader();
    reader.onload(() => {
      document.execCommand("inserImage", false, `${reader.result}`);
    });
    reader.readAsDataURL(file);
  };
  //   function insertImageDate(file) {
  //     const reader = new FileReader();
  //     reader.addEventListener("load", function (e) {
  //       focusEditor();
  //       document.execCommand("insertImage", false, `${reader.result}`);
  //     });
  //     reader.readAsDataURL(file);
  //   }
  return (
    <>
      <Box>
        <Write>글쓰기</Write>
        <Ggool>나만에 꿀팁을 공유해보세요!</Ggool>
      </Box>
      <Box2>
        {arr.map((user) => (
          <>
            <Text>{user.name}</Text>
            <Title placeholder={user.user} />
          </>
        ))}
      </Box2>
      <YourStory>당신의 이야기를 적어보세요</YourStory>
      <MainText contentEditable="true">
        <div style={{ position: "relative", color: "#696969", top: "0px" }}>
          본문을 입력하세요.
        </div>
      </MainText>
      <Image onClick={ImageSelector}></Image>
      <InputEl
        ref={imageRef}
        onChange={GetImage()}
        type="file"
        accept="image/*"
      />
    </>
  );
}
