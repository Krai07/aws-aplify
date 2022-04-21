const Gamedata = (props, { gamename, description, price, Gamelink, Totallikes }) => {
    const games = props.games;


    return (
        <div className="Gamedata">
            {games.map((game) => (
                <div className="game-details" key={game.id}>
                    {gamename = game.gamename}
                    {description = game.Description}
                    {price = game.price}
                    {Gamelink = game.Gamelink}
                    {Totallikes = game.Totallikes}
                </div>
            ))}
        </div>
    )
}

export default Gamedata;