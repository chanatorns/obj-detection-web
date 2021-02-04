import React from 'react';
import { Container } from './Layout.styled';
import Button from '../Button';
import debounce from 'lodash/debounce';
import Dropzone from '../DropZone';
import fileStore from '../../store/fileStore';
import { observer } from 'mobx-react-lite';
import dataStore from '../../store/fileStore';
import PreviewImage from '../PreviewImage';

interface Props {}

const fetchSomething = async () => {
  await fileStore.fetchAnalyze()
}

const deboounceFetchSomething = debounce(() => fetchSomething(), 500);

const Layout = (props: Props) => {
  const preview = dataStore.file;
  const detected_objects = dataStore.analyzeData?.detected_objects;

  return (
    <Container fluid>
      <Container>
        {
          preview &&
            <>
              <PreviewImage
                imageSrc={preview && `data:image/jpeg;base64,${preview.base64}`}
                detectedObjects={detected_objects}/>
              <Button onClick={deboounceFetchSomething}>Analyze</Button>
            </>
        }
        <Dropzone />
      </Container>
    </Container>
  );
}

export default observer(Layout);
