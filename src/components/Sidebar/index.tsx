import * as React from 'react';
import {Name, StyledWrapper, Title } from './styled';
import {Avatar} from "../Avatar";

export const Sidebar = () => {
    return (
        <StyledWrapper>
            <Avatar />
                <Name>Krzysztof Dragan</Name>
                <Title>Full Stack Developer</Title>

        </StyledWrapper>
    )
}
