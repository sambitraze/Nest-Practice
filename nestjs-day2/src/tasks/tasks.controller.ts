import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{ 
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() body): any {
        // console.log(body.title, body.description);
        return this.taskService.createTask(body.title, body.description);
    }
}

