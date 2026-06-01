interface Link{
    label: string
    url: string
}

interface LinkListProps{
    links: Link[]
}

function LinkList({ links }: LinkListProps){
    return (
        <ul style={{ listStyle: 'none'}}>
            {links.map((link) => (
                <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default LinkList