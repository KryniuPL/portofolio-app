import * as React from 'react';
import { StyledWrapper } from './styled';
import {Terminal} from "../Terminal";
import {
    Route,
    Switch,
} from "react-router-dom";
import {Experience} from "../Experience";
import { Education } from '../Education';
import {MyOffer} from "../MyOffer";
import {Contact} from "../Contact";


export const Content: React.FC = () => (
    <StyledWrapper>
        <Switch>
            <Route path="/experience">
                <Experience />
            </Route>
            <Route path="/education">
                <Education/>
            </Route>
            <Route path="/myoffer">
                <MyOffer/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/">
                <Terminal />
            </Route>
        </Switch>
    </StyledWrapper>
)
