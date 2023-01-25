import React, { useState } from 'react'

export default function trendNews({ Data }) {
    // const [data, setData] = useState(Data)
    console.log(Data);

    return (
        <div>
            <div className='d-flex'>
                <div>
                    <img src={require("../images/Cirkle.png")} />
                </div>
                <h1>Trending on Medium</h1>
            </div>
            <div>
                <div>{ }</div>
                <div>
                    <div>
                        <img className='profileImg' src={require("../images/pro1.jpeg")} />
                        <h4>{ }</h4>
                    </div>
                    <h2>{ }</h2>
                    <div>
                        <p>{ }</p>
                        <p>* { } read</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
