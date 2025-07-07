import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const taskTitle = form.taskTitle.value;
        const category = form.category.value;
        const description = form.description.value;
        const deadline = startDate.toLocaleDateString();
        const budget = form.budget.value;
        const userEmail = user.email;
        const userName = user.displayName;

        const task = { taskTitle, category, description, deadline, budget, userEmail, userName };

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Task added successfully!');
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to add task.');
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddTask} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Add New Task</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" name="taskTitle" placeholder="Task Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full" required>
                                <option disabled selected>Select a category</option>
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
                            <textarea name="description" className="textarea textarea-bordered" placeholder="Description" required></textarea>
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
                            <input type="number" name="budget" placeholder="Budget" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;