import React from 'react';
import './Team.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {strLeague, strSport,strTeamBadge,idTeam} = props.team;
    return (

    <div className="card col-md-3 pt-4 m-3">
        <img className="homeIconImg" src={strTeamBadge}  alt="homeImage"/>
        <div className="card-body">
            <h5 className="card-title">{strLeague}</h5>
            <p class="card-text">Sports Type: {strSport}</p>
            <Button as={Link} to={`/team/${idTeam}`} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </div>
    </div>
    
    );
};

export default Team;