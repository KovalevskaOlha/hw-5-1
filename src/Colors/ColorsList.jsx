const colors = ["Red", "Green", "Purple", "Orange", "Yellow"]
const ColorsList = ({colors}) => {
    return (
        <ul>
            {colors.map(color => (
                <li key={color}>{color}</li>
            ))}
        </ul>
    );
};

export const List = () => {
    return (
        <div>
            <ColorsList colors={colors} />
        </div>
    );
};