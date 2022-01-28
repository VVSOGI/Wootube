import styled from "styled-components";
import SpinBoxContainer from "./components/SpinBoxContainer";

const MainPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <SpinBoxContainer />
    </MainPageContainer>
  );
};

export default MainPage;
