import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const TaskDetails = () => {
    const task = useLoaderData();
    const { _id, taskTitle, category, description, deadline, budget, userEmail, userName } = task;
    const { user } = useContext(AuthContext);
    const [bidAmount, setBidAmount] = useState('');
    const [bidsCount, setBidsCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/bids/${_id}`)
            .then(res => res.json())
            .then(data => setBidsCount(data.length))
            .catch(error => console.log(error));
    }, [_id])

    const handleBid = event => {
        event.preventDefault();
        const form = event.target;
        const bidAmount = form.bidAmount.value;
        const bidderEmail = user.email;
        const taskOwnerEmail = userEmail;
        const bidStatus = 'pending';

        const bid = { taskId: _id, taskTitle, category, description, deadline, budget, bidAmount, bidderEmail, taskOwnerEmail, bidStatus };

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Bid placed successfully!');
                    setBidsCount(prevCount => prevCount + 1); // Increment bid count on successful bid
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to place bid.');
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className="text-lg font-semibold">You bid for {bidsCount} opportunities.</p>
                        <h1 className="text-3xl font-bold">{taskTitle}</h1>
                        <p className="py-2">Category: {category}</p>
                        <p className="py-2">Description: {description}</p>
                        <p className="py-2">Deadline: {deadline}</p>
                        <p className="py-2">Budget: ${budget}</p>
                        <p className="py-2">Posted By: {userName} ({userEmail})</p>
                        {user?.email !== userEmail && (
                            <form onSubmit={handleBid} className="mt-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Bid Amount</span>
                                    </label>
                                    <input type="number" name="bidAmount" placeholder="Bid Amount" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Place Bid</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;