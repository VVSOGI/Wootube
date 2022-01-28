import React from "react";
import styled from "styled-components";

const SpinBoxContainer = styled.div<SpinBoxProps>`
  width: 5em;
  height: 5em;
  background-color: #90cbff;
  position: absolute;

  left: ${(props) => {
    return props.boxPos ? props.boxPos.x + "px" : "50%";
  }};
  top: ${(props) => {
    return props.boxPos ? props.boxPos.y + "px" : "50%";
  }};
  transform: ${(props) => {
    return props.boxPos ? `rotateZ(${props.boxPos.rotate}deg)` : null;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type SpinBoxProps = {
  boxPos: { x: number; y: number; rotate: number };
};

const SpinBox: React.FC<SpinBoxProps> = ({ boxPos }) => {
  return <SpinBoxContainer boxPos={boxPos}></SpinBoxContainer>;
};

export default SpinBox;
