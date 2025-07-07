import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const UpdateTask = () => {
    const task = useLoaderData();
    const { _id, taskTitle, category, description, deadline, budget, userEmail, userName } = task;
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date(deadline));

    const handleUpdateTask = event => {
        event.preventDefault();
        const form = event.target;
        const updatedTaskTitle = form.taskTitle.value;
        const updatedCategory = form.category.value;
        const updatedDescription = form.description.value;
        const updatedDeadline = startDate.toLocaleDateString();
        const updatedBudget = form.budget.value;

        const updatedTask = { taskTitle: updatedTaskTitle, category: updatedCategory, description: updatedDescription, deadline: updatedDeadline, budget: updatedBudget };

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Task updated successfully!');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to update task.');
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateTask} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Update Task</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" name="taskTitle" placeholder="Task Title" className="input input-bordered" defaultValue={taskTitle} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full" defaultValue={category} required>
                                <option disabled>Select a category</option>
                                <option>Web Development</option>
                                <option>Design</option>
                                <option>Writing</option>
                                <option>Marketing</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered" placeholder="Description" defaultValue={description} required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Budget</span>
                            </label>
                            <input type="number" name="budget" placeholder="Budget" className="input input-bordered" defaultValue={budget} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="userEmail" placeholder="User Email" className="input input-bordered" value={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered" value={user?.displayName} readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;