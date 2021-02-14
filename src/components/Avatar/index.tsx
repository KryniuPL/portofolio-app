import * as React from 'react';
import {StyledAvatar} from "../Sidebar/styled";
import personal_photo from "../Sidebar/personal_photo.jpg";
import {makeStyles} from "@material-ui/core/styles";
import { AvatarWrapper } from './styled';

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
    },
}));

export const Avatar = () => {
    const classes = useStyles();

    return (
        <AvatarWrapper>
            <StyledAvatar
                alt="Krzysztof Dragan"
                src={personal_photo}
                className={classes.large}
                variant={'square'}
            />
        </AvatarWrapper>
    )
}
