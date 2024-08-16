import { useEffect } from "react";

export default function useInit(callback: () => any){
    return useEffect(callback,[])
}