import * as React from 'react';
import { StyledButton } from './styled';

interface IProps {
    onClick?(): void;
}

export const Button: React.FC<IProps> = ({children, onClick}) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
)
