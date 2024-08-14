"use client"

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
interface PortalProps {
    children:ReactNode
}

export default function ModalPortal(props:PortalProps){
    
    const ref = useRef<Element | DocumentFragment | null>(null)
    
    useEffect(()=>{
        ref.current = document.getElementById("mainbod")
    },[])

    //@ts-ignore
    return createPortal(props.children, ref)
}