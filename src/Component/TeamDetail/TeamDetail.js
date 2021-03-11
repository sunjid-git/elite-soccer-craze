import { Button } from 'react-bootstrap';
import './TeamDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faFlagCheckered,faFutbol,faVenusMars} from '@fortawesome/free-solid-svg-icons';


import twitter from '../Images/Twitter.png';
import fb from '../Images/Facebook.png';
import youtube from '../Images/YouTube.png';

import female from '../Images/female.png';
import male from '../Images/male.png';


const TeamDetail = () => {

    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])

    
    return (
    <div className="container">
        <img className="teamDetailBanner" src={team.strTeamBanner} alt=""/>
    <div>

    <div className="teamDetail">
        <div className="row m-3 rounded teamCardDetail">
        <div className="col-md-6 p-4">
        <h3 className="text-center">{team.strLeague}</h3>

        <p> <FontAwesomeIcon icon={faMapMarker}/> <strong>Founded : </strong> {team.intFormedYear}</p>

        <p> <FontAwesomeIcon icon={faFlagCheckered} /><strong> Country : </strong> {team.strCountry}</p>
        <p> <FontAwesomeIcon icon={faFutbol}/> <strong> Sports Type : </strong> {team.strSport}</p>
        <p> <FontAwesomeIcon icon={faVenusMars}/> <strong> Gender : </strong> {team.strGender}</p>
        </div>

        <div className="col-md-6 p-4">
            {
            team.strGender === 'Male' ? <img className=" maleFemaleImg" src={male} alt="" /> : <img className=" maleFemaleImg" src={female} alt="" />
            }
        </div>
        </div>

        <p>{team.strStadiumDescription}</p>
        <p>{team.strDescriptionEN}</p>

        <div className="d-flex justify-content-around">  
        <div>
        <a  href="https://twitter.com/?lang=en" target="blank"><img className="socialIcon" src={twitter} alt=""/></a>

        <a href="https://www.facebook.com/groups/completewebdevelopment3" target="blank"><img className="socialIcon" src={fb} alt=""/></a>

        <a  href="https://www.youtube.com/" target="blank" ><img className="socialIcon" src={youtube} alt=""/></a>
        </div>
        </div>

        <div className="m-3">
        <Button className="d-flex justify-content-center " as={Link} to="/" variant="success">Go home</Button>
        </div>
    </div>
        
    </div>
    </div>
    );
};

export default TeamDetail;