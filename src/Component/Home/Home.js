import React, { useEffect, useState } from 'react';
import homeImg from '../Images/homeBanner.jpg'
import Team from '../Team/Team';
import './Home.css'
const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data =>{
            const allTeam = data.teams;
            const restTeam = allTeam.slice(0,9);
            setTeams(restTeam)
        })
    },[])

    return (
       <div className="container homePage">

                <h1 className="homeTitle">Elite soccer Craze</h1>
                <img  src={homeImg}  alt="homeImage"/>
                <div className="d-flex justify-content-lg-center">

                <div className="row">
                {
                 teams.map( team => <Team team={team}></Team> )
                }
            </div>
                </div>
            
        </div>
    );
};
export default Home;