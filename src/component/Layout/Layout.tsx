import React from 'react';
import { Container } from './Layout.styled';
import Button from '../Button/Button';
import debounce from 'lodash/debounce';
import { analyze } from '../../api/objectDetection';

interface Props {}

const fetchSomething = async () => {
  await analyze()
}

const deboounceFetchSomething = debounce(() => fetchSomething(), 500);

const Layout = (props: Props) => {
  return (
    <Container fluid>
      <Container>
        <Button onClick={deboounceFetchSomething}>Fetch me</Button>
      </Container>
    </Container>
  );
}

export default Layout;
