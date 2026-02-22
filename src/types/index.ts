// types.ts

// Allowed task status values
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

// Allowed priority values
export type TaskPriority = 'low' | 'medium' | 'high';

// Main Task model
export interface Task {
  id: string;                // string (matches your data)
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;    // added (was missing before)
  dueDate: string;
}

// Props for TaskList
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Props for TaskItem
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Filter structure
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus | 'all';
    priority?: TaskPriority | 'all';
  }) => void;
}