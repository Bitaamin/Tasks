export default function Main({ sub, fname, lname, date, techskill }) {

    return (
        <div>
            <h2>{sub}</h2>
            <div className="d-flex">
                <p className="pe-2">{fname}</p>
                <p>{lname}</p>
                {/* <p>{date}</p> */}
            </div>
            <div>
                <h2>Tech stack:</h2>
                <ul>
                    {techskill.map((obj) =>
                        <li>{obj}</li>
                    )}
                </ul>
            </div>
            <div className="profile-pic">
                <img className="img-res" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="user profile"  />
            </div>
            <div className="d-flex">
                <p>{fname}</p>
                <p>{lname}</p>
            </div>
        </div>
    )
}