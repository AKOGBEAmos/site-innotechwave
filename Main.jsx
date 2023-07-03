import React from "react";
import économie from "../Images/économie.png";
import agro from "../Images/agro.png";
import alimentaire from "../Images/alimentaire.png";
import education from "../Images/education.png";
import health from "../Images/health.png";
import commerce from "../Images/commerce.png";
import man from "../Images/homme.png";
import woman from "../Images/femme.png";

const Main=() =>
{
    return(
        <>
            <div className="project">
                <div className="link-project">
                    <div id="name">
                        <span>Nos projets</span>
                    </div>
                </div>
                <div className="contain">
                    <a href="#">Voir plus</a>
                </div>
            </div>
            <div className="fields">
                <div className="field">
                    <h3>Nos domaines d'intervention</h3>
                    <div className="field-description">
                        <div className="field_a">
                            <img src={agro} alt="Une plante" />  
                            <span>Agriculture</span>
                        </div>
                        <div className="field_a">
                            <img src={health} alt="Santé" />  
                            <span>Santé</span>
                        </div>
                        <div className="field_a">
                            <img src={alimentaire} alt="Aliments" />  
                            <span>Agro-alimentaire</span>
                        </div>
                        <div className="field_a">
                            <img src={education} alt="école" />  
                            <span>Education</span>
                        </div>
                        <div className="field_a">
                            <img src={commerce} alt="E-commerce" />  
                            <span>Commerce</span>
                        </div>
                        <div className="field_a">
                            <img src={économie} alt="economie" />  
                            <span>Economie</span>
                        </div>   
                    </div>
                    <span className="line">&nbsp;</span>
                </div>
                <div className="services">
                        <div className="title">
                            <span>Nos services</span>
                        </div>
                        <div className="service">
                            <div className="service1">
                                <span className="s">Développement web</span>
                                <span className="s">Rédaction web</span>
                                <span className="s">Intelligence Artificielle</span>
                            </div>
                            <span className="vertical-line">&nbsp;</span>
                            <div className="service2">
                                <span className="s">Design UI-UX</span>
                                <span className="s">Graphisme</span>
                                <span className="s">Marketing digital</span>
                            </div>
                            <span className="vertical-line">&nbsp;</span>
                            <div className="service3">
                                <span className="s">Sécurité des applications</span>
                                <span className="s">Gestion de projets agiles</span>
                                <span className="s">Design Thinking</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Team">
               <h3>Notre équipe</h3>
               <div className="members"> 
                    <div className="member">
                        <img src={man} alt="icône membre" />
                        <span className="name">Amos AKOGBE</span>
                    </div> 
                    <div className="member">
                        <img src={woman} alt="icône membre" />
                        <span className="name">Blandine ALLOWANOU</span>
                    </div> 
                    <div className="member">
                        <img src={man} alt="icône membre" />
                        <span className="name">Marcelin KPANGBANOU</span>
                    </div> 
                    <div className="member">
                        <img src={woman} alt="icône membre" />
                        <span className="name">Harmonie AWONON</span>
                    </div> 
                    <div className="member">
                        <img src={man} alt="icône membre" />
                        <span className="name">Urbain ESSEHO</span>
                    </div> 
                    <div className="member">
                        <img src={man} alt="icône membre" />
                        <span className="name">VEGLO Gabin</span>
                    </div> 
               </div>
               <a className="profile" href="#">
                <button>Voir nos profils</button>
               </a>
               <span className="line end">&nbsp;</span>
            </div>
            
        </>
    );
}

export default Main;