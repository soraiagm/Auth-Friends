import React, { useState, useEffect } from 'react';
import { axiosAuth } from '../utilities/axiosAuth';
import Friend from './Friend.js';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    // const getFriends = () => {
    //     axiosAuth()
    //         .get("/friends")
    //         .then(res => {
    //             return console.log(res);
                
    //         })
    //         .catch(err => console.log(err));
    // }

    useEffect(() => {
        axiosAuth()
            .get("/friends")
            .then(res => {
                return console.log(res);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="friends-list">
           <Friend /> 
            
        </div>
    )
}

export default Friends; 
