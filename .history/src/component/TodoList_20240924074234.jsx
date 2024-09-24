import { useState } from 'react';
import TodoGrid from './TodoGrid'; 

const TodoList = () => {
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
    const [todos, setTodos] = useState([]);

    
    const handleAdd = () => {
        if (!todo.description || !todo.duedate || !todo.priority) {
            alert("Please fill in all fields");
            return;
        }
        setTodos([...todos, todo]);
        setTodo({ description: "", duedate: "", priority: "" });
    };

    
    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container" style={{ padding: '20px' }}>
            <h2>Simple Todo List with ag-Grid</h2>
            <div className="form-container" style={{ marginBottom: '20px' }}>
                <label>Description:</label>
                <input
                    type="text"
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                    style={{ marginRight: '10px' }}
                />
                <label>Date:</label>
                <input
                    type="date"
                    value={todo.duedate}
                    onChange={e => setTodo({ ...todo, duedate: e.target.value })}
                    style={{ marginRight: '10px' }}
                />
                <label>Priority:</label>
                <select
                    value={todo.priority}
                    onChange={e => setTodo({ ...todo, priority: e.target.value })}
                    style={{ marginRight: '10px' }}
                >
                    <option value="">Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button onClick={handleAdd}>Add</button>
            </div>

            
            <TodoGrid todos={todos} handleDelete={handleDelete} />
        </div>
    );
};

export default TodoList;
