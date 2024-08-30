import { Form } from "../components/Form";

export default function CreateToDoPage() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Crea una <span className="text-blue-600">nueva tarea</span>
      </h1>
      <Form />
    </div>
  );
}