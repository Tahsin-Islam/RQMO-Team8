import './css/topBar.css';

function TopBar(){
    return(
        <div className="topBar">
        <div className="companyName">Rare<b>Quest</b></div>
        <div className="topBar-middle">
            <a href="#">Home</a>
            <a href="#">How To Play</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
    )
}

export default TopBar;