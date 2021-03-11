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
        <img className="homeImg" src={strTeamBadge}  alt="homeImage"/>
        <div className="card-body">
            <h5 className="card-title">{strLeague}</h5>
            <p class="card-text">Sports Type: {strSport}</p>
            <Button as={Link} to={`/team/${idTeam}`} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </div>


            {/* <Card>
                <Card.Img className="homeImg" variant="top" src={strTeamBadge}/>
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text>Sports Type: {strSport}</Card.Text>
                        <Button as={Link} to={`/team/${idTeam}`} variant="primary">
                            Explore {idTeam}<FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Card.Body>
            </Card>
             */}
        </div>


        

    );
};

export default Team;