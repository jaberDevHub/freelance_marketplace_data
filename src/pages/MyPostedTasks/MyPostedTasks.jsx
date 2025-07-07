import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyPostedTasks = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-posted-tasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.log(error));
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            const remainingTasks = tasks.filter(task => task._id !== id);
                            setTasks(remainingTasks);
                        }
                    })
            }
        })
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-5">My Posted Tasks</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Budget</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.taskTitle}</td>
                                <td>{task.category}</td>
                                <td>{task.deadline}</td>
                                <td>${task.budget}</td>
                                <td>
                                    <Link to={`/update-task/${task._id}`} className="btn btn-sm btn-info mr-2">Update</Link>
                                    <button onClick={() => handleDelete(task._id)} className="btn btn-sm btn-error mr-2">Delete</button>
                                    <button className="btn btn-sm btn-success">Bids</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedTasks;