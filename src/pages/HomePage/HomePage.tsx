import Heading from '../../global-components/Heading/Heading'
import Description from './components/Description/Description'
import './HomePage.css'

export default function HomePage()
{
    return (
        <div className='Page-homePage'>
            <Heading smallHeading='Aspiring software developer' bigHeading='Edward Nguyen'></Heading>
            <Description content='Welcome to the home page of my portfolio. On this website, you can find more about my projects, hobbies and grab some contacts to reach me by.'/>
        </div>
    )
}