import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <>
            <div>
                 404, no results found.
            </div>
            <Button as={Link} to="/" variant="danger">Go home</Button>
        </>
    );
};

export default NoMatch;