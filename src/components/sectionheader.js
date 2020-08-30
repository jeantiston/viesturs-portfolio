import React from 'react'

const SectionHeader = ({ name }) => {

    const titleStyle = {
        fontFamily: "Raleway, sans-serif",
        padding: "0px 0px 0px 10vw",
        margin: "50px 5px 50px 5px",
        color: "#F3C2D8",
        width: "calc(90vw - 10px)",
        borderBottom: "1px solid #F3C2D8",
        lineHeight: "0.1em",
        // margin: "10px 0 20px"
    }

    const wrapperStyle = {
        margin: "40px 0px 20px"
    }

    const spanStyle = {
        background: "#101113",
        padding: "0 10px"
    }

    return (
        <div style={wrapperStyle}>
            <h2 style={titleStyle}><span style={spanStyle}> { name } </span></h2>
        </div>
    )
}

export default SectionHeader