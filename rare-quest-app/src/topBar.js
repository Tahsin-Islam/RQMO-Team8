import './css/topBar.css';

function TopBar(){
    return(
        <div className="topBar">
            <div className="companyName">Rare<span className='quest'>Quest</span></div>
            <div className="topBar-middle">
                <a href="#">Home</a>
                <a href="#">How To Play</a>
                <a href="#">Contact Us</a>
            </div>
            <div className='topBar-right'>
                <a className='login'>Login</a>
                <a className='signup'>Sign Up</a>
            </div>
        </div>
    )
}

export default TopBar;