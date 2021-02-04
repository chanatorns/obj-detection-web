import React, { useRef, useState } from 'react';
import { Box, Data } from './BoundingBox.styled';

const computeBoxPosition = (
  bounding_box: Props['bounding_box'],
  imgNaturalDimension: Props['imgNaturalDimension']
) => {
  const top = `${100 * bounding_box.top / imgNaturalDimension.height}%`;
  const left = `${100 * bounding_box.left / imgNaturalDimension.width}%`;
  const width = `${100 * (bounding_box.right - bounding_box.left) / imgNaturalDimension.width}%`;
  const height = `${100 * (bounding_box.bottom - bounding_box.top) / imgNaturalDimension.height}%`;
  return {
    top: top,
    left: left,
    width: width,
    height: height,
  }
}

const toggleBox = (fold, setFold) => {
  setFold(!fold)
}

const BoundingBox = (props: Props) => {
  const boxRef = useRef(null);
  const [fold, setFold] = useState(false);
  const { bounding_box, imgNaturalDimension, name, parent, confidence } = props;
  const confidenceStr = `${Math.trunc(confidence*10000)/100}%`;
  const { top, left, width, height } = computeBoxPosition(bounding_box, imgNaturalDimension);

  return <Box ref={boxRef}
    title={'click to minimize'}
    fold={fold}
    top={top}
    left={left}
    width={width}
    height={height}
    onClick={() => toggleBox(fold, setFold)}>
    <Data onClick={() => toggleBox(fold, setFold)}>
      { fold
        ? `${name}`
        : `${name} ${parent} ${confidenceStr}`
      }
    </Data>
  </Box>
}

interface Props {
  bounding_box: {
    bottom: number,
    left: number,
    right: number,
    top: number
  },
  confidence: number,
  name: string,
  parent: string,
  imgNaturalDimension: {
    width: number,
    height: number
  }
}

export default BoundingBox;