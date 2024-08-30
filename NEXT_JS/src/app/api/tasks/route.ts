import { NextResponse } from "next/server"

export interface Task {
    id: number;
    name: string;
    date: string;
    description: string;
    clompleted: boolean;
}

let tasks: Task[] = [
    { id: 1, name: "Task 1", date: "2024-08-29T14:00:00", description: "Description 1", clompleted: false },
    { id: 2, name: "Task 2", date: "2024-08-30T13:00:00", description: "Description 2", clompleted: true },
]

/*
    METHOD: GET
*/ 

export async function GET(request: Request) {
    const url = new URL(request.url)
    const status = url.searchParams.get("status")

    let tasksFilter = tasks
    if(status === "completed") { 
        tasksFilter = tasks.filter(task => task.clompleted)
    }else {
        tasksFilter = tasks.filter(task => !task.clompleted)
    }

    const sortedTasks =  tasksFilter.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    return NextResponse.json(sortedTasks)
}