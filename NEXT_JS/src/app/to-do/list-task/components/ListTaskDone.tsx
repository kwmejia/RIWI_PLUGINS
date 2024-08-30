"use client";
import { Task } from "@/app/api/tasks/route";
import Link from "next/link";

export const ListTaskDone = ({ listTasks }: { listTasks: Task[] }) => {
  return (
    <div className="overflow-x-auto mt-5">
      <Link className="bg-blue-400 px-3 py-1 rounded-lg mb-4 hover:bg-blue-300" href={"/to-do/create"}>Agrega una nueva tarea</Link>
      <table className="mt-4 min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Nombre
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Fecha
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Descripcion
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {listTasks.map((task) => (
            <tr
              className="border-t border-gray-200 hover:bg-gray-100"
              key={task.id}
            >
              <td className="py-2 px-4">{task.name}</td>
              <td className="py-2 px-4">{task.date}</td>
              <td className="py-2 px-4">{task.description}</td>
              <td className="py-2 px-4 flex">
                <input
                  type="checkbox"
                  className="w-50 bg-gray-500"
                  onChange={(e) => console.log(e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
