import React, { useState } from 'react';
import { Wrapper, Image } from './PreviewImage.styled';
import BoundingBox from './BoundingBox';
import { DetectedObjects } from '../../definitions/analyzeData';

const PreviewImage = (props: Props) => {
  const [imgNaturalDimension, setImgNaruralDimension] = useState(null)
  const { imageSrc, detectedObjects } = props;

  return <Wrapper>
    <Image alt={'preview image'}
      src={imageSrc}
      onLoad={function(e) {
        const thisImgElem = e.target as HTMLImageElement;
        setImgNaruralDimension({
          width: thisImgElem.naturalWidth,
          height: thisImgElem.naturalHeight
        })
      }}/>
    {
      detectedObjects &&
        detectedObjects.map((d, i) => {
          return <BoundingBox key={`boundingbox-${i}`}
            bounding_box={d.bounding_box}
            confidence={d.confidence}
            name={d.name}
            parent={d.parent}
            imgNaturalDimension={imgNaturalDimension}/>
        })
    }
  </Wrapper>
}

interface Props {
  imageSrc: string,
  detectedObjects: DetectedObjects[]
}

export default PreviewImage