import React from 'react'
import Avatar from 'components/Avatar';
import Octogit from './about/octobiwan.jpg';
import MailchimpForm from 'components/MailchimpForm';
import HeaderLink from 'components/HeaderLink';
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from "react-helmet"
import {config} from 'config'
import {Flex, Box} from 'reflexbox';
import {fonts} from 'css';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        {
                            "name"   : "description",
                            "content": "Newsletter | Experimentum solite lixa ad neuter epos."
                        },
                        {"name": "keywords", "content": "Programming, blog, lifestyle design, React, Redux"},
                    ]}
                />
                <Flex flexColumn align="center">
                    <h1 className="fade-in" style={{fontSize: '3em'}}> Newsletter </h1>
                    <p>
                        A bulletin issued periodically to the members of a society, business, or organization.
                    </p>

                    {/* <Box mt={3}>
                        <Avatar
                            src={Octogit}
                            alt="Github"
                        />
                    </Box> */}

                    <Box my={2} flex flexColumn align="center">
                        <p>Join the newsletter.</p>
                        <MailchimpForm inline/>
                    </Box>
                </Flex>

                <Flex mt={2} flexColumn>
                    {/*<h2 style={{
                     fontFamily: fonts.primary,
                     fontWeight: fonts.bold,
                     }}>New? Start Here</h2>*/}

                    {/* <HeaderLink to="about/">
                        About
                    </HeaderLink> */}

                    {/* <HeaderLink to="now/">
                        Now
                    </HeaderLink> */}
                </Flex>
            </div>
        )
    }
}
