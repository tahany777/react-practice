import React from 'react'

// function Header(prpos) { //or
function Header({ title }) {
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: '#fff'
    }
    return (
        <header style={headerStyle}>
            <h1>{ title }</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'default title'
}
export default Header
