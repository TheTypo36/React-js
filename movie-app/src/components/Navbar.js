import React from 'react';
import { StoreContext } from '..';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" name="movie" />

                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

class NavbarWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <Navbar store={store} />}
            </StoreContext.Consumer>
        );
    }
}
export default NavbarWrapper;