console.log("TaskPlanner.js is running !!");

const fs = require('fs');

// Add a todo item
var addTodo = (title,empId,taskId) => {
	var todos = fetchTodos();
	var todo = {
		title,
        empId,
        taskId,

	};

	var duplicatetodos = todos.filter(
		(todo) => todo.title === title);

	if (duplicatetodos.length === 0) {
		todos.push(todo);
		saveTodos(todos);
		return todo;
	}
};

// Delete a todo item
var deleteTodo = (title) => {
	var todos = fetchTodos();
	var filteredtodos = todos.filter(
		(todo) => todo.title !== title);
	saveTodos(filteredtodos);

	return todos.length !== filteredtodos.length;
};


// Read a todo item
var readTodo = (title) => {
	var todos = fetchTodos();
	var filteredTodos = todos.filter(
		(todo) => todo.title === title);
	return filteredTodos[0];
};


// List all todo items
var listTodos = () => {
	return fetchTodos();
};


// Utility functions
var fetchTodos = () => {
	try {
		var todosString =
			fs.readFileSync('tasks-data.json');
		return JSON.parse(todosString);
	} catch (e) {
		return [];
	}
};

var saveTodos = (todos) => {
	fs.writeFileSync('tasks-data.json',
		JSON.stringify(todos));
};

var logTodo = (todo) => {
	console.log('## ---## --- ##');
	console.log(` ${todo.title}`);
};

// Exporting function
module.exports = {
	addTodo,
	deleteTodo,
	readTodo,
	listTodos,
	logTodo
};
