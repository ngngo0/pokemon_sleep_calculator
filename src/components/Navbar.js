import React from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import logo from '../images/pokemon-sleep.jpg'


export default function Navbar() {
    return (
    <nav className="nav">
        <Link class="logo" to="/">
            <img src={logo}
                width="100px" 
                height="auto" 
                alt="pokemon sleep"
                />
        </Link>
        <ul>
            <CustomLink to='/CurrysAndStews'>Currys And Stews</CustomLink>
            <CustomLink to='/DessertsAndDrinks'> Desserts And Drinks</CustomLink>
            <CustomLink to='/Salads'> Salads </CustomLink>
        </ul>   
    </nav>)
}

function CustomLink({ to, children, ...props}){
    //absolutepath 
    const resolvedPath = useResolvedPath(to)
    //match it against the resolvedpath prop pathname, and match completely(end)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active": " "} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}