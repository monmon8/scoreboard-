const Header = () => {
    return ( 
        <header >
        <h1 > scoreboard </h1>  
        <span className = "stats" > Players: 1 </span> 
        </header>
    );
}

ReactDOM.render( 
    <Header / > ,
    document.getElementById('root')
);