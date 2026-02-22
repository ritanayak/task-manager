import React from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {

  // Handles dropdown changes
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: "status" | "priority"
  ) => {
    if (type === "status") {
      onFilterChange({ status: e.target.value as TaskStatus | "all" });
    } else {
      onFilterChange({ priority: e.target.value as TaskPriority | "all" });
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      {/* Status Filter */}
      <div>
        <label>Status </label>
        <select onChange={(e) => handleChange(e, "status")}>
          <option value="all">All Status</option>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="completed">completed</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div>
        <label>Priority </label>
        <select onChange={(e) => handleChange(e, "priority")}>
          <option value="all">All Priority</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;