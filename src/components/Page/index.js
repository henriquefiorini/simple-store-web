import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function Page({ title, titleHidden, children }) {
  return (
    <Container>
      {!titleHidden && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  titleHidden: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Page.defaultProps = {
  titleHidden: false,
  children: null,
};

export default Page;
