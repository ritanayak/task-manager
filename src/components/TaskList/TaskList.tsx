import React from "react";
import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {

  // Conditional rendering if no tasks
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}  // UNIQUE KEY
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};