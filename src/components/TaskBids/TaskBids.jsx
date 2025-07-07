import { useEffect, useState } from "react";

const TaskBids = ({ taskId }) => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bids/${taskId}`)
            .then(res => res.json())
            .then(data => setBids(data))
            .catch(error => console.log(error));
    }, [taskId])

    return (
        <div className="my-5">
            <h3 className="text-xl font-bold text-center mb-3">Bids for this Task</h3>
            {bids.length === 0 ? (
                <p className="text-center">No bids yet for this task.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Bidder Email</th>
                                <th>Bid Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid, index) => (
                                <tr key={bid._id}>
                                    <th>{index + 1}</th>
                                    <td>{bid.bidderEmail}</td>
                                    <td>${bid.bidAmount}</td>
                                    <td>{bid.bidStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TaskBids;