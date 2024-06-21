import { ReactNode } from "react"

interface PageSectionProps {
    theme: "light" | "dark"
    height: 128 | 196
    children?: ReactNode
}

export default function PageSection(props:PageSectionProps){

    const remHeight = `h-${props.height.toLocaleString()}` 

    return(
        <section className={`border border-red-400 max-w-7xl w-full ${remHeight}`}>
                {props.children}
        </section>
    )
}