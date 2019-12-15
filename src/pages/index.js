import React from 'react';
import Link from 'gatsby-link';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';

const IndexPage = () => {
  return (
    <div>
      <Heading2>Welcome to the Optus store</Heading2>
      <Link to="/mobile">
        <Button>Browse mobile</Button>
      </Link>
    </div>
  );
};

export default IndexPage;
