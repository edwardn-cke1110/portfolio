export default function ContactItem({to, content}: {to: string, content: string})
{
    return(
        <div className="Component-contactItem">
            {content}
        </div>
    )
}