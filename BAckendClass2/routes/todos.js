import express from "express";
const router = express.Router(); // Create a new router

import {createTodo} from '../controller/createTodo.js';
import {getTodos} from '../controller/getTodos.js';
import { getTodoById } from "../controller/getTodoById.js";
import { updateTodo } from "../controller/updateTodo.js";
import { deleteTodo } from "../controller/deleteTodo.js";

router.post('/createTodo', createTodo); // Define the POST route for createTodo
router.get('/getTodos',getTodos)
router.get('/getTodosById/:id',getTodoById)
router.put('/updateTodo/:id',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)


export default router; // Export the router
