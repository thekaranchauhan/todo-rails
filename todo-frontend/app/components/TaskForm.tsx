import { useState, FormEvent } from 'react';
import axios from 'axios';

interface TaskFormProps {
  refreshTasks: () => void;
}

export default function TaskForm({ refreshTasks }: TaskFormProps) {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/tasks', { task: { title, completed: false } })
      .then(() => {
        setTitle('');
        refreshTasks();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="New task"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Task
        </button>
      </div>
    </form>
  );
}
