import {useMemo} from "react";
import ReactDOM from 'react-dom';
import {Router} from "next/router";

export const ModalRoot = ({children, showModal, toggleModal}) => {

    const containerElement = useMemo(
        () => document.getElementById('modal-root'),
        []
    );
    return showModal
        ? ReactDOM.createPortal(children, containerElement)
        : Router.push('/')
}
