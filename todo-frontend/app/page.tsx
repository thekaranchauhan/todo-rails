'use client';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function Home() {
  const refreshTasks = () => window.location.reload();

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList />
    </div>
  );
}
