import { Component, OnInit } from '@angular/core';


interface tasks {
  id: number;
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:  tasks[] = [
    {id: 1, title: 'Task 1', description: 'This is task 1', status: 'N'},
    {id: 2, title: 'Task 2', description: 'This is task 2', status: 'N'},
    {id: 3, title: 'Task 3', description: 'This is task 3', status: 'N'},
    {id: 4, title: 'Task 4', description: 'This is task 4', status: 'N'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
