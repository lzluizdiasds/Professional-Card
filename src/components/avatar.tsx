interface AvatarProps {
    src: string
    alt: string
}

function Avatar({ src, alt }: AvatarProps){
    return (
        <img
        src={src}
        alt={alt}
        style={{width: 100, height: 100, borderRadius: '50%', objectFit: 'cover'}}
        />
    )
}

export default Avatar