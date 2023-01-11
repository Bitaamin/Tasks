export default function Home(){
    return(
        <div className="content">
            <div className="body">
                <h1>Stay curious.</h1>
                <p>Discover stories, thinking, and expertise from writers on any topic.</p>
                <button>Start reading</button>
            </div>
            <div>
                <img src={require("../images/MMM.png")} />
            </div>
        </div>
    )
}