import * as React from 'react';
import {Link} from "react-router-dom";
import {ArrowIcon, StyledListElement} from "../Sidebar/styled";
import { StyledMessage } from './styled';

interface IProps {
    routerPath: string;
    Icon: any;
    label: string;
}

export const NavLink: React.FC<IProps> = ({routerPath, Icon, label}) => (
    <StyledListElement>
        <Link to={routerPath}>
            <Icon fontSize={'inherit'}/>
            <StyledMessage>{label}</StyledMessage>
            <ArrowIcon />
        </Link>
    </StyledListElement>
)
