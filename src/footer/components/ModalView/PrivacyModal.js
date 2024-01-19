import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Большинство сайтов содержит раздел «Политика конфиденциальности». 
            Это незаметная ссылка, которую обычно располагают в подвале страницы. 
            Владельцы сайтов размещают её неслучайно: они защищают себя от штрафа и блокировки Роскомнадзором. 
            Позаботьтесь о ней тоже, если на вашем сайте есть корзина или форма обратной связи.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Политика конфиденциальности
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Политика конфиденциальности</h2>
                {policyText}
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
