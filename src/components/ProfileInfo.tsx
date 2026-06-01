interface ProfileInfoProps {
    name: string
    bio: string
}

function ProfileInfo({ name, bio }: ProfileInfoProps){
    return (
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileInfo