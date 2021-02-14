import * as React from 'react';
import { Content } from '../../components/Content';
import { Sidebar } from '../../components/Sidebar';
import { PortofolioWrapper, VerticalSeparator } from './styled';

export const PortofolioApp = () => (
    <PortofolioWrapper className="App">
        <Sidebar />
        <VerticalSeparator />
        <Content />
    </PortofolioWrapper>
);

