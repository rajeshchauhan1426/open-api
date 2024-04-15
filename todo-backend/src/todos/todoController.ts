import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

  import { Todo } from "./todo";
  import { TodoCreationsParams,TodoService  } from "./todoService";
import { get } from "http";
import { promises } from "dns";
  

  @Route("todo")
  export class TodoController extends Controller{

   /**
    *  this is controller for creating todos
   */
     @Get("{todoId}")

     public async getTodo(
        @Path () todoId: string
     ): Promise<Todo>{
        let todoService = new TodoService();
        return todoService.get(todoId);
     }
  }

