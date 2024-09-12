'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const deleteTask = (id: number) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <span>{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
