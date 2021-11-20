import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
    return (
        <Layout pageTitle="Welcome to the nth iteration of Lambertini.org">
            <p>Site made with gatsby</p>
            <p>Now let's add some flair:</p>
            <StaticImage 
                alt="India, my mixed-breed boxer labrador girl"
                src="../images/india.jpg"></StaticImage>

        </Layout>
    )
}

export default IndexPage