1- How did you ensure unique keys for your list items?

I ensured unique keys by using the unique id of each task when rendering the list. This allowed React to efficiently track which items were changed, added, or removed, preventing unnecessary re-renders and avoiding potential bugs that could occur if array indexes were used as keys.

2- What considerations did you make when implementing the filtering functionality?

When implementing filtering, I made sure that only valid values for task status and priority could be selected. I also included options to show all statuses or priorities so users could reset the filters without breaking the logic. Additionally, I separated responsibilities by having one component handle the filter UI, another manage the filtering logic, and a third render the task list, keeping the code clean and maintainable.

3- How did you handle state updates for task status changes?

I handled task status changes by updating the state immutably. Each update created a new array with the updated task while leaving the other tasks unchanged. This ensured React re-rendered only the affected tasks and maintained predictable state management throughout the application.

4- What challenges did you face when implementing conditional rendering?

One challenge was ensuring that dropdown values exactly matched the defined task status and priority types to prevent type errors. Another challenge was handling empty lists, where I needed to provide a clear message when no tasks matched the filter. Additionally, I implemented dynamic styling for tasks based on their status and priority, which required careful attention to maintain type safety and a consistent user interface.