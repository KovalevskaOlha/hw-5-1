const imgUrl = 'https://i.pinimg.com/736x/d3/68/a8/d368a8cc31f762ce484f1f3f9cf511d9.jpg';
const imgDesc = 'dog';

export const Image = () => {
    return (
        <img src={imgUrl} alt={imgDesc} />
    )
}