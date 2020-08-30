import React from 'react'

const SkillsHeader = ({ name, icon }) => {
    // console.log('here')

    const titleStyle = {
        // position: "relative",
        fontFamily: "Raleway, sans-serif",
        fontWeight: 300,
        // margin: "0px 5px 0px 20px",
        color: "#F3C2D8",
        backgroundColor: "#101113",
        display: "inline",
        padding: "10px"
    }

    const wrapperStyle = {
        margin: "10px 0px 20px 35px"
    }

    return (
        <div style={wrapperStyle}>
            <img src={icon} alt={name} />
            <h3 style={titleStyle}> { name } </h3>
        </div>
    )
}

export default SkillsHeader