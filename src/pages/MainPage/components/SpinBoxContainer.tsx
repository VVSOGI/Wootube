import styled from "styled-components";
import { useBoxPosition } from "../../../functions/useBoxPosition";
import SpinBox from "./SpinBox";

const SpinContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  transform: translate(50%, 50%);
`;

const SpinBoxContainer = () => {
  const COLORS = [
    "#4b45ab",
    "#554fb8",
    "#605ac7",
    "#2a91a8",
    "#2e9ab2",
    "#32a5bf",
    "#81b144",
    "#85b944",
    "#8fc549",
    "#e0af27",
    "#eeba2a",
    "#fec72e",
    "#bf342d",
    "#ca3931",
    "#d7423a",
  ];

  const BOX_POSITION = useBoxPosition(COLORS);

  return (
    <SpinContainer>
      {BOX_POSITION.length > 0
        ? BOX_POSITION.map((item) => {
            return <SpinBox boxPos={item} />;
          })
        : null}
    </SpinContainer>
  );
};

export default SpinBoxContainer;
