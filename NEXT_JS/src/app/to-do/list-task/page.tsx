import { Metadata } from "next"
import { ListTaskDone } from "./components/ListTaskDone"

export const metadata: Metadata ={
    title: "List Task | riwi.io ",
    description: "List Task Page | riwi.io ",
    keywords: ["List Task", "riwi.io"],
}

export default async function ListTaskPage() {
    const response = await fetch("http://localhost:3000/api/tasks")
    const data = await response.json()
    return (
        <>
            <h1 className="text-3xl text-center">LIST TASK PAGE</h1>
            <ListTaskDone listTasks={data}/>
        </>
    )
}