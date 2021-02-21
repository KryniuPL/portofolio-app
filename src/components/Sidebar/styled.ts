import styled from "styled-components";
import {Avatar} from "@material-ui/core";

export const StyledWrapper = styled.div`
  width: 30%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
`;

export const StyledAvatar = styled(Avatar)({
    width: 60,
    height: 60,
});

export const Name = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 500;
`;

export const Title = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledListElement = styled.li`
  padding-top: 12px;
  a {
    color: ${({ theme }) => theme.colors.green};;
    text-decoration-line: none;
    :hover {
      color: white;
      i {
        display: inline-block;
      }
    }
    i {
      display: none;
    }
  }
`
export const ArrowIcon = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;
