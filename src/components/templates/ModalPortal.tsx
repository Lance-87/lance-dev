import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children:ReactNode
}

export default function ModalPortal(props:PortalProps){
    return createPortal(props.children, document.body)
}