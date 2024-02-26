import './NavBar.css'
import NavItems from './navbaritems.json'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function XSNavBar()
{
    return (
        <div className="Component-navBar">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {NavItems.items.map(item => (
                    <Dropdown.Item>{item.title}</Dropdown.Item>
                ))}
                
                {/* <Dropdown.Item>Home</Dropdown.Item>
                <Dropdown.Item>Projects</Dropdown.Item>
                <Dropdown.Item>Hobbies</Dropdown.Item>
                <Dropdown.Item>Contacts</Dropdown.Item> */}
            </DropdownButton>
        </div>
    )
}