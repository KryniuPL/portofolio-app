import styled from 'styled-components'


export const PortofolioWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkerGrey};
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
  border-left: 3px solid ${({ theme }) => theme.colors.green};
  height: 100%;
`;
