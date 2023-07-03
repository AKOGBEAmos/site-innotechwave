import React from "react";

const Intro=() =>
{
    return(
        <>
            <div className="intro">
                <div className="wave">
                    <h2>Découvrez le monde du numérique avec </h2>
                    <h3>INNOTECHWAVE</h3>
                </div>
                <button className="subscribe">S'abonner</button>
            </div>
            <div className="goal">
                <div className="image"></div>
                <div className="description">
                    <p>Notre but est de devenir une startup  reconnue et proposant des solutions numériques innovantes dans les domaines essentiels de la vie économique en Afrique.</p>
                </div>
            </div>
        </>
    );
}

export default Intro;