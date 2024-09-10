import { Component } from '@angular/core';

interface Task {
  name: string;
  status: boolean;
  isEditing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listTasks:Task[] = [

  ]

  newTask:string = ""

  addTask(){
    if(this.newTask == "") return;  
    this.listTasks.push({ name: this.newTask, status:false, isEditing:false });
    this.newTask = ""
  }

  removeTask(index:number){ 
    this.listTasks.splice(index,1);
  }

  enableEditing(index: number) {
    this.listTasks[index].isEditing = true;
  }

  // Guardar la edición cuando se presiona Enter
  saveTask(index: number, event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.listTasks[index].isEditing = false;  // Salir del modo de edición
    }
  }
}
