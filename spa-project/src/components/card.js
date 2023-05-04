import React from "react";
import './card.css'

function Card(props) {
    return (
        <>
            <div class="card">
                <img src={props.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class='container-text'>
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-price">{props.price}</p>
                        </div>
                        <hr/>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
            </div>
        </>
    )
}

export default Card