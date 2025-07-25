export interface Task {
    id: number;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    deadline: string; 
    status: 'pending' | 'done';
    userId: number;
}
