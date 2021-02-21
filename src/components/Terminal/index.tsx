import * as React from 'react';
import { TerminalWrapper } from './styled';

export const Terminal: React.FC = () => (
    <TerminalWrapper>
        <div id="termynal" data-termynal data-ty-startdelay="600">
            <span data-ty="input">Hi! I'm Krzysztof</span>
            <span data-ty="progress">...</span>
            <span data-ty>Beloved in java and with romans with frontend</span>
        </div>
    </TerminalWrapper>
)
