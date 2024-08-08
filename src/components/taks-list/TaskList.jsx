import { Task } from "./Task";

export function TaskList() {
    const data = [
        {
            text: 'Reikia issivalyti dantis',
        },
        {
            text: 'Reikia nusiprausti veidi',
        },
        {
            text: 'Reikia pasigaminti gerima',
        },
        {
            text: 'Reikia sestis/stotis prie PC',
        },
        {
            text: 'Reikia sukodinti krepsinio lentos uzduoti',
        },
        {
            text: 'Reikia isspresti su kolegomis klausima del, "Kaip paviesinti reactini projekta per Github Pages?"',
        },
    ];

    if (data.length === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        );
    }

    return (
        <div className="list">
            {data.map((item, index) => <Task key={index} data={item} />)}
        </div>
    );
}