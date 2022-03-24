import React from 'react';
import { Container, PreviewWrapper, AnalyzeButtonWrapper } from './Layout.styled';
import Button from '../Button';
import debounce from 'lodash/debounce';
import Dropzone from '../DropZone';
import fileStore from '../../store/fileStore';
import { observer } from 'mobx-react-lite';
import dataStore from '../../store/fileStore';
import PreviewImage from '../PreviewImage';
import Loading from '../Loading';

interface Props {}

const fetchSomething = async () => {
  await fileStore.fetchAnalyze()
}

const deboounceFetchSomething = debounce(() => fetchSomething(), 500);

const Layout = (props: Props) => {
  const preview = dataStore.file;
  const detected_objects = dataStore.analyzeData?.detected_objects;
  const loading = dataStore.loading;
  return (
    <Container fluid>
      <Container>
        {
          preview &&
            <>
              <PreviewWrapper>
                <PreviewImage
                  imageSrc={preview && `data:image/jpeg;base64,${preview.base64}`}
                  detectedObjects={detected_objects}/>
                {
                  !detected_objects && 
                    <AnalyzeButtonWrapper>
                      {
                        loading
                          ? <Loading/>
                          : <Button onClick={deboounceFetchSomething}>Analyze</Button>
                      }
                    </AnalyzeButtonWrapper>
                }
              </PreviewWrapper>
              {detected_objects && <i>*click inside the box to hide the box</i>}
              <br/>
            </>
        }
        <Dropzone />
      </Container>
    </Container>
  );
}

export default observer(Layout);
