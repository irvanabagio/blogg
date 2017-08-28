import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import {colors, fonts} from 'css';

function Logo({}) {
    return (
        <Link to={prefixLink('/')} style={{
            color         : colors.black,
            textDecoration: 'none',
            textTransform : 'uppercase',
            fontFamily    : fonts.secondary,
            fontWeight    : fonts.bold,
        }}>
            RN <span style={{fontWeight: fonts.xThin, marginLeft: 5,}}>Newsletter</span>
        </Link>
    );
}

Logo.propTypes = {};
export default Logo;
