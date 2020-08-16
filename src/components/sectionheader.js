import React from 'react'

const SectionHeader = ({ name }) => {
    // console.log('here')

    const titleStyle = {
        position: "relative",
        zIndex: 1,
        fontFamily: "Raleway, sans-serif",
        margin: "30px 5px 0px 20px",
        color: "#F3C2D8",
        backgroundColor: "#101113",
        display: "inline",
        padding: "10px"
    }

    const lineStyle = {
        backgroundColor: "#F3C2D8",
        height: "2px",
        position: "relative",
        bottom: "12px"
    }

    const wrapperStyle = {
        margin: "40px 0px 20px"
    }

    return (
        <div style={wrapperStyle}>
            <h2 style={titleStyle}> { name } </h2>
            <div style={lineStyle}></div>
        </div>
    )
}

export default SectionHeader