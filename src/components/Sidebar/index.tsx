import * as React from 'react';
import {ArrowIcon, Name, StyledList, StyledListElement, StyledWrapper, Title} from './styled';
import { Avatar } from "../Avatar";
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {NavLink} from "../NavLink";


export const Sidebar: React.FC = () => (
    <StyledWrapper>
        <Avatar/>
        <Name>Krzysztof Dragan</Name>
        <Title>Full Stack Developer</Title>
        <StyledList>
            <NavLink routerPath={"/"} Icon={HomeIcon} label={'Home'} />
            <NavLink routerPath={"experience"} Icon={BuildIcon} label={'Experience'} />
            <NavLink routerPath={"/education"} Icon={BookIcon} label={'Education'} />
            <NavLink routerPath={"/myoffer"} Icon={CodeIcon} label={'My offer'} />
            <NavLink routerPath={"/contact"} Icon={ContactMailIcon} label={'Contact'} />
        </StyledList>
    </StyledWrapper>
)
