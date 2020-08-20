import React from 'react'

const SectionHeader = ({ name }) => {
    // console.log('here')

    const titleStyle = {
        fontFamily: "Raleway, sans-serif",
        padding: "0px 0px 0px 25px",
        margin: "50px 5px 50px 5px",
        color: "#F3C2D8",
        width: "100%",
        borderBottom: "1px solid #F3C2D8",
        lineHeight: "0.1em",
        // margin: "10px 0 20px"
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

    const spanStyle = {
        background: "#101113",
        padding: "0 10px"
    }

    return (
        <div style={wrapperStyle}>
            <h2 style={titleStyle}><span style={spanStyle}> { name } </span></h2>
            {/* <div style={lineStyle}></div> */}
        </div>
    )
}

export default SectionHeader