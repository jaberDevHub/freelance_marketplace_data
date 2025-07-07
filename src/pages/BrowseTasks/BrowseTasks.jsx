import { useEffect, useState } from "react";

const BrowseTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-5">Browse All Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tasks.map(task => (
                    <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{task.taskTitle}</h2>
                            <p>Category: {task.category}</p>
                            <p>Deadline: {task.deadline}</p>
                            <p>Budget: ${task.budget}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseTasks;