import { findByLabelText } from '@testing-library/react';
import React from 'react';

const Navbar = () => {
    return (
        <div style={styles.nav}>
            <div style={styles.CartIconContainer}>
                <img style={styles.CartIcon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="cart-icon" />
                <span style={styles.cartCounter}>3</span>
            </div>
        </div>
    );
}
const styles = {
    nav: {
        height: 70,
        width: '100%',
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    CartIconContainer: {
        position: 'relative'
    },
    cartCounter: {
        position: 'absolute',
        background: 'Yellow',
        borderRadius: '50%',
        Padding: '4px 8px',
        left: 24,
        textAlign: 'center',
        width: 22,
        top: -9,
    },
    CartIcon: {
        height: 32,
        marginRight: 20
    }

}
export default Navbar;