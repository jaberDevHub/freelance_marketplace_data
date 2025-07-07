import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center">
            <h1 className="text-6xl font-bold text-error">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <p className="mt-2">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary mt-6">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;