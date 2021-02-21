import * as React from 'react';
import { StyledAvatar } from "../Sidebar/styled";
import me from "./me.png";
import {makeStyles} from "@material-ui/core/styles";
import { AvatarWrapper } from './styled';
import { theme } from "../../index";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: 0,
        },
    },
    large: {
        width: 250,
        height: 250,
        border: `1px solid ${theme.colors.green}`
    },
}));

export const Avatar: React.FC = () => {
    const classes = useStyles();

    return (
        <AvatarWrapper>
            <StyledAvatar
                alt="Krzysztof Dragan"
                src={me}
                className={classes.large}
                variant={'circle'}
            />
        </AvatarWrapper>
    )
}
