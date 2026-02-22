import { useState } from "react";
import type { Task, TaskStatus } from "../types";
import TaskFilter from "./TaskFilter/TaskFilter";
import { TaskList } from "./TaskList/TaskList";
import { taskList } from "./Data/taskData";

export const ListManagement = () => {

  // Main task state
  const [tasks, setTasks] = useState<Task[]>([...taskList]);

  // Filter state
  const [filters, setFilters] = useState<{
    status?: TaskStatus | "all";
    priority?: "low" | "medium" | "high" | "all";
  }>({});

  // Handle status change
  const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // Handle delete
  const onDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  // Filter logic
  const filteredTasks = tasks.filter(task => {
    const statusMatch =
      !filters.status || filters.status === "all" || task.status === filters.status;

    const priorityMatch =
      !filters.priority || filters.priority === "all" || task.priority === filters.priority;

    return statusMatch && priorityMatch;
  });

  return (
    <div>
      <TaskFilter onFilterChange={(newFilters) =>
        setFilters(prev => ({ ...prev, ...newFilters }))
      } />

      <TaskList
        tasks={filteredTasks}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />
    </div>
  );
};