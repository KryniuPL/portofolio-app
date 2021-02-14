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
