import { Component } from '@angular/core';
import { ITask, TaskStatus } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {

  task1: ITask = {
    title: 'Task 1',
    description: 'Task 1 description',
    Completed: false,
    Status: TaskStatus.Info
  }
  task2: ITask = {
    title: 'Task 2',
    description: 'Task 2 description',
    Completed: true,
    Status: TaskStatus.Blocked
  }

  deleteTask(task: ITask) {
    alert(`Delete ${task.title}`);
  }
}
