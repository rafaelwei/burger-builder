import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const Layout = (props) => {
    return(
        <Aux>
            <div>dfjskafasdjkfbakjdsf</div>
                <main className={classes.Content}>
                    {props.children}
                </main>
        </Aux>
    )
};

export default Layout;