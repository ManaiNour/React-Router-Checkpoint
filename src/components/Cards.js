import CardPr from "./Card";
    function Cards() {
        let movies = [
            {
                title: "Lift",
                plot: "A master thief is wooed by his ex-girlfriend and the FBI to pull off an impossible heist with his international crew on a 777 passenger flight from London to Zurich.",
                image: "https://m.media-amazon.com/images/M/MV5BNTBlNmEwNzQtZTc5MC00YmVjLTk5NjgtMmM0NDFmZjJkZjYzXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
                trailer:"https://youtu.be/m2L-Sa_6MU0?si=80soTeuiXU_AWJ80"
            },
    
            {
                title: "Irish Wish",
                plot: "When the love of her life gets engaged to her friend, Maddie puts her feelings aside to be a bridesmaid at their wedding in Ireland. Days before the wedding, Maddie makes a spontaneous wish for true love, only to wake up as the bride-to-be.",
                image: "https://visitwicklow.ie/wp-assets/uploads/2024/03/Irish-Wish.jpeg",
                trailer:"https://youtu.be/_gKXowSyfjM?si=wIJEpmagGY4APxwI"
            },
    
            {
                title: "No Limit",
                plot: "An extraordinarily talented young woman finds deep, destructive love with her record-holding free-diving instructor.",
                image: "https://m.media-amazon.com/images/M/MV5BNTFlNTkxYjQtNjJlOS00ZTAzLTljY2EtMTU1ZTljMWYzZWJhXkEyXkFqcGdeQXVyMTUwOTU0Mw@@._V1_.jpg",
                trailer:"https://youtu.be/mTa8yHYz8xw?si=Qdi9uQsArygSMhxi"
            },
    
            {
                title: "Poor Things",
                plot: "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
                image: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
                trailer:"https://youtu.be/S5KiC0GgED0?si=xYQMfW6MPcCuIOyN"
            },
    
            {
                title: "The Good Nurse",
                plot: "Nurse Amy Loughren is shocked when Charlie Cullen, one of her colleagues, is foound responsible for the murder of dozens of patients over a period of sixteen years, across two states and nine hospitals, without being charged.",
                image: "https://i.ytimg.com/vi/e0DQevX-GZs/maxresdefault.jpg",
                trailer:"https://youtu.be/e0DQevX-GZs?si=NgRmDngym9lGHWTA"
            },
    
            {
                title: "Locked In",
                plot: "Unhappy newlywed Lina is against her rich, coldhearted mother-in-law, Katherine. An affair sets off a chain reaction that will result in a love triangle, a murder and a plot to bring Lina down.",
                image: "https://m.media-amazon.com/images/M/MV5BNDFlYWQxMDItMzQxMS00YzE0LWI2MDctNzRmOTAxYjA2YjViXkEyXkFqcGdeQXVyNDQwMTQ5ODk@._V1_.jpg",
                trailer:"https://youtu.be/y6a3yXfMEJg?si=d36_tpXyljmFd7xQ"
            },
    
            {
                title: "Encanto",
                plot: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.",
                image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/784BE9CC660F87F7F510084C2F37262DB8DE860A8F790562EF4F6B753DC6FBDD/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
                trailer:"https://youtu.be/CaimKeDcudo?si=e5lVlOa89-VB7YZN"
            },
    
            {
                title: "Orion and the Dark",
                plot: "The thing Orion fears the most is the dark. When the embodiment of his worst fear pays a visit, Dark whisks Orion away on a roller-coaster ride around the world to prove there is nothing to be afraid of at night.",
                image: "https://m.media-amazon.com/images/M/MV5BZTkyODExOTctY2E3My00M2U5LWI2OGItNzRlZDk1OWJmOWQ3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
                trailer:"https://youtu.be/cScAQ2O26Y4?si=LCkhRL9-tvWgCYYO"
            },
    
            {
                title: "Wreck-It Ralph",
                plot: "Ralph is tired of playing the role of a bad guy and embarks on a journey to become a video game hero. But Ralph accidentally lets loose a deadly enemy that threatens the entire arcade.",
                image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F2B51BB4DEDC534A857C6048A274100C6DAEF1C30EBA488443DEAE3040DC2C7D/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
                trailer:"https://youtu.be/87E6N7ToCxs?si=bnWko4_90CESt8Kw"
            },
    
            {
                title: "The Boss Baby",
                plot: "Seven-year-old Tim gets jealous when his parents give all their attention to his little brother. Tim soon learns that the baby can talk and the two team up to foil the plans of the CEO of Puppy Co.",
                image: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Boss_Baby_poster.jpg",
                trailer:"https://youtu.be/Ppc5MrsMT8c?si=iy7uzhAVKWkNM6w_"
            },
    
            {
                title: "Raya and the Last Dragon",
                plot: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
                image: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
                trailer:"https://youtu.be/1VIZ89FEjYI?si=u3SLr849hgKvwrhY"
            },
    
            {
                title: "Brave",
                plot: "Merida (Kelly Macdonald), the impetuous but courageous daughter of Scottish King Fergus (Billy Connolly) and Queen Elinor (Emma Thompson), is a skilled archer who wants to carve out her own path in life. Her defiance of an age-old tradition angers the Highland lords and leads to chaos in the kingdom. Merida seeks help from an eccentric witch (Julie Walters), who grants her an ill-fated wish. Now, Merida must discover the true meaning of courage and undo a beastly curse before it's too late.",
                image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425181D9630955B8317D351388716D7FA226406432413D2CB11421B3007368B9/scale?width=1200&aspectRatio=1.78&format=webp",
                trailer:"https://youtu.be/TEHWDA_6e3M?si=KJKrvOaHJNR5zMXF"
            },
        ];
    

    return (
        <div className="cards" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {movies.map((movie) => {
                return <CardPr props={movie} />
            })}

        </div>
    )
}


export default Cards