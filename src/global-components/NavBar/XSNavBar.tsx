import { Link } from 'react-router-dom'
import './NavBar.css'
import NavItems from './navbaritems.json'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function XSNavBar()
{
    return (
        <div className="Component-navBar">            
            <DropdownButton id="dropdown-basic-button" title={<i className="bi bi-list"></i>}>
                {NavItems.items.map(item => (
                    <Dropdown.Item as={Link} to={item.link}>{item.title}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    )
}   