import Table, { DataRow } from "../../components/table/table";

const data: DataRow[] = [
    {
        title: "Programmer and Website Designer",
        date: "02-2025 - 06-2025",
        company: {
            name: "zennIT",
            href: "https://zenn.it/",
        }
    },
    {
        title: "PLC programmer",
        date: "05-2024 - 09-2024",
        company: {
            name: "icotet",
            href: "https://icotet.com/"
        }
    }
]

export default function Works() {
    return (
        <Table data={data} />
    )
}