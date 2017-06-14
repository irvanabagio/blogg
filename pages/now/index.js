import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {prefixLink} from 'gatsby-helpers';
import {Link} from 'react-router';
import {Flex, Box} from 'reflexbox';

class NowIndex extends Component {
    render() {
        return (
            <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
                <Helmet title="Rn | Now"/>
                <h1 className="fade-in">Now.</h1>

                <Flex style={{maxWidth: 650}} flexColumn>
                    <p>Doing nothing.</p>


                </Flex>
            </Flex>
        );
    }
}

export default NowIndex;
