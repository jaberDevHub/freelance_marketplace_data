const WhyChooseUs = () => {
    return (
        <div className="my-10 p-5 bg-base-200 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-5">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Wide Range of Skills</h2>
                        <p>Find freelancers for almost any task, from web development to graphic design and writing.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Secure Payments</h2>
                        <p>Our platform ensures secure transactions and protects your payments until the task is complete.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">24/7 Support</h2>
                        <p>Our dedicated support team is always available to assist you with any queries or issues.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Verified Freelancers</h2>
                        <p>All freelancers on our platform are thoroughly vetted to ensure quality and reliability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;