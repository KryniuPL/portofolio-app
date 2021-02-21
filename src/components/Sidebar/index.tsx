import * as React from 'react';
import {Name, StyledWrapper, Title } from './styled';
import {Avatar} from "../Avatar";
import {Button} from "../Button";

export const Sidebar = () => {
    return (
        <StyledWrapper>
            <Avatar />
            <Name>Krzysztof Dragan</Name>
            <Title>Full Stack Developer</Title>
            <Button onClick={() => alert('kocham Olę 💋')}>Experience</Button>
            <Button>Education</Button>
            <Button>My offer</Button>
            <Button>Contact</Button>
        </StyledWrapper>
    )
}
