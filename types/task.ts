/**
 * Represents a single task item with its details and status.
 *
 * @property id - Unique identifier for the task.
 * @property title - Title or name of the task.
 * @property description - Detailed information about the task.
 * @property completed - Indicates whether the task is completed.
 * @property createdAt - The date and time when the task was created.
 */
export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
};
