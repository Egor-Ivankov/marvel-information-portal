export default function SingleHeroLayout ({data}) {

    const { name,
            description, 
            thumbnail } = data;

    return (
        <>
            <div className='single-hero'>
                <img src={thumbnail} alt={name} />
                <div className="text">
                    <h2>{name}</h2>
                    <p>{description ? description : 'There is character has not a description'}</p>
                </div>
            </div>
        </>
    );
}