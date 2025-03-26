import React from 'react';

const TeamMemberCard = ({ name, jobTille }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{jobTille}</p>
            <hr />
        </div>
    );
}

export default TeamMemberCard;
