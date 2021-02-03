import React from 'react';
import { Container } from './Layout.styled';
import Button from '../Button';
import debounce from 'lodash/debounce';
import Dropzone from '../DropZone';
import fileStore from '../../store/fileStore';

interface Props {}

const fetchSomething = async () => {
  await fileStore.fetchAnalyze()
}

const deboounceFetchSomething = debounce(() => fetchSomething(), 500);

const Layout = (props: Props) => {
  return (
    <Container fluid>
      <Container>
        <Dropzone />
        <Button onClick={deboounceFetchSomething}>Fetch me</Button>
      </Container>
    </Container>
  );
}

export default Layout;
