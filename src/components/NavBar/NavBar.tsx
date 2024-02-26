import './NavBar.css'
import NavItems from './navbaritems.json'
import {Link} from "react-router-dom"

export default function NavBar()
{
    
    console.log(NavItems.items)
    return (
        <div className="Component-navBar">
            {NavItems.items.map(item => (
                <Link to={item.link}>{item.title}</Link>
            ))}
        </div>
    )
}