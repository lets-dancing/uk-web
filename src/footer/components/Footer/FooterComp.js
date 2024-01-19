import React from "react";
import "./FooterComp.css";
import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterComp = () => {
    // eslint-disable-next-line
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Все права защищены.</span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} ООО УК "Автодор"
                    </span>
                </div>
                <button
                    href="#"
                    target="_blank"
                    className="item3"
                    rel="noreferrer" 
                >
                    <FontAwesomeIcon icon={faTelegram} style={{color: "rgb(255, 81, 0)"}}/>
                </button>
                <button
                    href="#"
                    target="_blank"
                    className="item4"
                    rel="noreferrer" 
                >
                    <FontAwesomeIcon icon={faPhone} style={{color: "rgb(255, 81, 0)"}}/>
                </button>
                <button
                    href="#"
                    target="_blank"
                    className="item5"
                    rel="noreferrer" 
                >
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(255, 81, 0)"}}/>
                </button>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default FooterComp;
