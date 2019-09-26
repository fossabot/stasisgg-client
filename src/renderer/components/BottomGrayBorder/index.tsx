import React from 'react';
import styled from 'styled-components';

const GrayBorder = styled.div`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #4e5a67;
  border-bottom-style: solid;
`;

const BottomGrayBorder: React.FC = () => <GrayBorder />;

export default BottomGrayBorder;
