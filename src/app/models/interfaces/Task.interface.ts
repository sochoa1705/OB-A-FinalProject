export enum TaskStatus {
    "Info",
    "Warning",
    "Blocked"

}
export interface ITask {
    title: string;
    description: string;
    Completed: boolean;
    Status: TaskStatus;
}