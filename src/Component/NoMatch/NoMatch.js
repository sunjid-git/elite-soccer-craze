import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../Images/error.png';
const NoMatch = () => {
    return (
        <div className="container">
            <div className="container">
                <img src={error} alt=""/>
            </div>
            <div>
                <Button className="d-flex justify-content-center" as={Link} to="/" variant="danger">Go home</Button>
            </div>
        </div>
    );
};

export default NoMatch;