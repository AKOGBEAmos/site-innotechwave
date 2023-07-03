import React from "react";

const Footer=() =>
{
    return(
        <div className="footer">
            <div className="content">
                <div className="page-conditions">
                    <img src="" alt="innotechwave logo" />
                    <span>Conditions générales d'utilisation</span>
                    <span>F.A.Q</span>
                    <span>Règles et politique de confidentialité</span>
                </div>
                <span className="vertical-line">&nbsp;</span>
                <div className="noservice">
                    <h3>Nos services</h3>
                    <div className="list">
                        <span>Nos secteurs d'intervention</span>
                        <span>Nos compétences</span>
                    </div>
                </div>
                <span className="vertical-line">&nbsp;</span>
                <div className="projets">
                    <h3>Nos projets</h3>
                    <div className="list">
                        <span>Nos projets récents</span>
                        <span>Actualité</span>
                    </div>
                </div>
                <span className="vertical-line">&nbsp;</span>
                <div className="join">
                    <h3>Contactez-nous</h3>
                    <div className="list">
                        <span>contact.innotechwave@gmail.com</span>
                        <span>+229 53893625</span>
                    </div>
                </div>
            </div>
            <div className="social-media">

            </div>
            <div className="copyright">
                <span>Copyright ©2023 innotechwave.com</span>
            </div>
        </div>
    );
}

export default Footer;