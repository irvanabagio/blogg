import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import Avatar from 'components/Avatar';
import {Link} from 'react-router';
import {Flex, Box} from 'reflexbox';
import Researcher from './labtocat.png';
import Coder from './daftpunktocat-guy.gif';
import Businessman from './privateinvestocat.jpg';

class AboutIndex extends Component {
    render() {
        return (
            <Flex flexColumn align="center">
                <Helmet title="Newsletter | About"/>

                <h1 className="fade-in">About.</h1>
                {/*<p>And you don't know me... yet.</p>*/}
                <Flex wrap justify="center" mb={3}>
                    <Box mx={2}>
                        <Avatar
                            src={Coder}
                            alt="Coder"
                            subtitle="Coder"
                        />
                    </Box>
                    <Box mx={2}>
                        <Avatar
                            src={Researcher}
                            alt="Researcher"
                            subtitle="Science"
                        />
                    </Box>
                    <Box mx={2}>
                        <Avatar
                            src={Businessman}
                            alt="Businessman"
                            subtitle="Business"
                        />
                    </Box>
                </Flex>
                <Flex style={{maxWidth: 650}} flexColumn>

                </Flex>
            </Flex>
        );
    }
}

export default AboutIndex;
