const Header = () => {
    return ( 
        <header >
        <h1 > scoreboard </h1>  
        <span className = "stats" > Players: 1 </span> 
        </header>
    );
}

const Player = () =>{
    return(
        <div className="player">
            <span className="player-name">
                Guill
            </span>
            <div className="counter">
                <boutton className="counter-action decrement"> - </boutton>
                <span className="counter-score">35</span>
                <boutton className="counter-action increment"> + </boutton>
            </div>
        </div>
    );
}

ReactDOM.render( 
    <Player / > ,

    document.getElementById('root')
);