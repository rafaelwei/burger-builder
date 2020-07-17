import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Tollbar';

const Layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default Layout;