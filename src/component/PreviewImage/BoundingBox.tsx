import React, { useRef, useState } from 'react';
import { useHoverDirty } from 'react-use';
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

const toggleBox = (e, { fold, setFold, setDataFoldPos = null }) => {
  setFold(!fold)

  const rect = e.target.getBoundingClientRect();
  const left = e.clientX - rect.left;
  const top = e.clientY - rect.top;

  if (setDataFoldPos) {
    setDataFoldPos({ 
      left: left+'px',
      top: top+'px' 
    })
  }
}

const BoundingBox = (props: Props) => {
  const boxRef = useRef(null);
  const [fold, setFold] = useState(false);
  const [dataFoldPos, setDataFoldPos] = useState({ left: '-2px', top: '-20px' });
  const isBoxHover = useHoverDirty(boxRef);
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
    onClick={(e) => toggleBox(e, { fold, setFold, setDataFoldPos })}>
    <Data isBoxHover={isBoxHover}
      fold={fold}
      dataFoldPos={dataFoldPos}
      onClick={(e) => toggleBox(e, { fold, setFold, setDataFoldPos })} >
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