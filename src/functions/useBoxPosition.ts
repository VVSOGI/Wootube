import { useEffect, useState } from "react";

type PosType = {
  x: number;
  y: number;
  rotate: number;
};

export const useBoxPosition = (boxArr: string[]) => {
  const [pos, setPos] = useState<PosType[]>([]);

  const PI2 = Math.PI * 2;
  const ANGLE = PI2 / boxArr.length;

  const CLIENT_WIDTH = window.innerWidth;
  const CLIENT_HEIGHT = window.innerHeight;

  const obj: PosType[] = [];

  useEffect(() => {
    for (let i = 0; i < boxArr.length; i++) {
      console.log(i * (Math.PI / 180));

      const x = (Math.cos(ANGLE * i) * CLIENT_HEIGHT) / 3;
      const y = (Math.sin(ANGLE * i) * CLIENT_HEIGHT) / 3;
      const rotate = (360 / Math.PI) * i;

      obj[i] = { x, y, rotate };
    }
    setPos(obj);
  }, []);

  return pos;
};
