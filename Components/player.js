const PlayerList = () => {
    let playerList = allPlayers.map((player) => 
        <div key={ player.id }>
            <div> <h3>{ player.name }</h3></div>
            <div> <img src={ player.imageURL } /></div>
            <hr />
        </div>
    );

    return(
        <div>
            { playerList }
        </div>
    );
}

const Players = () => {
    return(
        <div>
            { PlayerList }
        </div>
    );
}

ReactDOM.render( <PlayerList /> , $.querySelector('#root'));