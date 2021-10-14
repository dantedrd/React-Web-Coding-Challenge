import React from 'react';


export default function ItemCard(props:any) {
    return (<div className="container py-3">
        <div className="card">
            <div className="row ">
                <div className="col-md-2">
                    <img src={props.img} className="w-100" />
                </div>
                <div className="col-md-8 px-3">
                    <div className="card-block px-3">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text">{new Date(props.date).toDateString()} - {props.location}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}



