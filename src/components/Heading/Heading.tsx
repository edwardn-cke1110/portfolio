import './Heading.css'

export default function Heading({smallHeading, bigHeading}: {smallHeading: string, bigHeading: string})
{
    return(
        <div className="Component-heading">
            <h3>{smallHeading}</h3>
            <h1>{bigHeading}</h1>
        </div>
    )
}