import React from "react";

const Contact=()=>
{
    return(
        <div className="contact">
            <h2 className="offer">Ne manquez pas nos offres !!</h2>
            <div className="shortletter">
                <span>Recevrez les dernières nouvelles de nos services en parcourant  directement votre 
                    boîte électronique
                </span> 
                <input type="mail" placeholder="johndoe@example.com"></input>
            </div>
            <button className="receipt">S'abonner</button>
        </div>
    );
}

export default Contact;