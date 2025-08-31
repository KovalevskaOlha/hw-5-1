const favoriteSite = {
    name: "Rozetka",
    url: "https://rozetka.com.ua/ua/promo/back2school/?gad_source=1&gad_campaignid=22015516959&gbraid=0AAAAAq0EKANIkQ8mfLGPbkneod4ZatRlf&gclid=Cj0KCQjw5c_FBhDJARIsAIcmHK9NqIwuc9mO53H7zGb9Nd8JdqhuAtxlIzTUcmiRhaOSY-0l1c7oXUsaAm4iEALw_wcB",
}

export const FavoriteSite = () => {
    return (
        <a href={favoriteSite.url} target="_blank">
            {favoriteSite.name}
        </a>
    );
};