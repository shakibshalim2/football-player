import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Player = (props) => {
    const {name, salary, image} = props.player
   const handlePlayer = props.handlePlayer;
    return (
        <div className='col-md-2 mb-5 playerStyle'>
            <h4>Player name: {name}</h4>
            <img className='playerImg' src={image} alt=""/>
            <h6>Salary: ${salary}</h6>
            <button className='btn btn-success m-2 w-75' onClick={() => handlePlayer(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
        </div>
    );
};

export default Player;