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
        description:"Being a part of the Hall of Fame FRC Team 987, I was one of the robot designers for the 2023 season, 2023 offseason, and the 2024 season where we came back on the Einstein Field."
    },
    {
        stat: "4",
        label:"Unique Skills",
        description:"Although not expert at any of this, I know many technical skills such as CAD Modeling, Graphic Design, Programming, Spreadsheets."
    },
    {
        stat: "30+",
        label:"Volunteering Hours",
        description:"I was mainly involved with FIRST where I volunteered to events such as FLL and FTC."
    }
]

export default stats