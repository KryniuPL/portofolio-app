import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 12px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  cursor: pointer;
  
  :hover {
    background-color: ${({ theme }) => theme.colors.darkGreyHover};
  }
`;
