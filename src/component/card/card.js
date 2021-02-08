import React from 'react'

export default function Card({tache, divDel}) {

    return(
        <div className="card border-5 my-5">
            <div className="card-content">
                <div className="content">
                    <h3 className="px-4 mb-0">{tache}</h3>
                    <button onClick={divDel} className="delete is-large btn-top">X</button>
                </div>
            </div>
        </div>
    )
}