const HowItWorks = () => {
    return (
        <div className="my-10 p-5 bg-base-200 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-5">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">1. Post a Task</h2>
                        <p>Describe your task and set your budget and deadline.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">2. Get Bids</h2>
                        <p>Freelancers will bid on your task. Choose the best fit.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">3. Get It Done</h2>
                        <p>Collaborate with your chosen freelancer and get your task completed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;