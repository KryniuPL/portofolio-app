import styled from 'styled-components'

const strongDark = `#181818`;

export const PortofolioWrapper = styled.div`
  background: ${strongDark};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
`;

export const VerticalSeparator = styled.div`
  border-left: 3px solid #1db954;
  height: 100%;
`;
