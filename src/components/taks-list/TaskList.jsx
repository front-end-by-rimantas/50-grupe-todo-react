import { Task } from "./Task";

export function TaskList(params) {
    const { removeTask, data } = params;

    if (data.length === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        );
    }

    return (
        <div className="list">
            {data.map(item => <Task key={item.text} data={item} removeTask={removeTask} />)}
        </div>
    );
}