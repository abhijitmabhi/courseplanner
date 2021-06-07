import React from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <div className="container">
            <MainNavigation/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
