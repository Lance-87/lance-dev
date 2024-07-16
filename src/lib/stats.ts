interface Stats {
    stat: string
    label: string
    description:string
}

const stats: Array<Stats> = [
    {
        stat:"4.95",
        label:"Highschool GPA",
        description:"My high school career was a tumultuous one, being able to maintain a straight A standing up until my graduation, securing my spot at #1."

    },
    {
        stat: "3",
        label:"FRC Robots Made",
        description:"I was a design lead for FIRST Robotics Competition Team 987. Using computer-aided design softwares, I designed competitive and high-performing robots."
    },
    {
        stat: "4",
        label:"Unique Skills",
        description:"Although not expert at any of this, I know many technical skills such as CAD Modeling, Graphic Design, Programming, Spreadsheets."
    },
    {
        stat: "20+",
        label:"Awards and Certifications",
        description:"This includes both extracurriculars, external, and actual academic awards"
    }
]

export default stats