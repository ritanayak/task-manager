import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {

  // Handle dropdown status change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, event.target.value as TaskStatus);
  };

  // Dynamic styling based on task status
  const statusStyles = {
    pending: { backgroundColor: "#fff3cd" },
    "in-progress": { backgroundColor: "#d1ecf1" },
    completed: { backgroundColor: "#d4edda" },
  };

  // Dynamic styling based on priority
  const priorityColor = {
    low: "green",
    medium: "orange",
    high: "red",
  };

  return (
    <div
      style={{
        ...statusStyles[task.status],
        border: "1px solid black",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
        transition: "0.3s",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>

        <div>
          {/* Status Dropdown */}
          <select value={task.status} onChange={handleChange}>
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(task.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div style={{ marginTop: "8px", fontSize: "14px" }}>
        <span style={{ color: priorityColor[task.priority], fontWeight: "bold" }}>
          Priority: {task.priority}
        </span>
        <span style={{ marginLeft: "20px" }}>
          Due: {task.dueDate}
        </span>
      </div>
    </div>
  );
};