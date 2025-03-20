import Table, { DataRow } from "../../components/table/table";

const data: DataRow[] = [
    {
        date: "2023",
        title: "high security risk",
        links: {
            file: ""
        }
    },
    {
        date: "2023",
        title: "medium security risk",
        links: {
            file: ""
        }
    }
]

export default function Certifications() {
    return (
        <Table data={data} />
    )
}