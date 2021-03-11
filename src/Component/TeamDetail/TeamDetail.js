import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {

    const {teamId} = useParams();

    const [team, setTeam] = useState({});

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
        
    },[])
    
    return (
        <div className="container mt-3">
            <img src={team.strTeamBanner} alt=""/>

            <div className="col-md-6 bg-primary">
                <h3>{team.strLeague}</h3>
                <h4><strong>Team: </strong> {team.strTeam}</h4>
                <p><strong>Founded: </strong> {team.intFormedYear}</p>
                <p><strong>Country: </strong> {team.strCountry}</p>
                <p><strong>Sports Type: </strong> {team.strSport}</p>
                <p><strong>Gender: </strong> {team.strGender}</p>
            </div>

            <div className="col-md-6 bg-success">
                hwlloe
            </div>
 
            <div>
                <p>{team.strDescriptionEN}</p>
                <p>{team.strStadiumDescription}</p>
            </div>

            <div>
                <p><FontAwesomeIcon icon={faCoffee}/></p>  
            </div>

            <Button as={Link} to="/" variant="success">Go home</Button>
        </div>
    );
};

export default TeamDetail;