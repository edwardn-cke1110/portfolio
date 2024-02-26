import './Description.css'

export default function Description ({content}: {content: string})
{
    return(
        <div className="Component-description">
            <p>{content}</p>
        </div>
    )
}