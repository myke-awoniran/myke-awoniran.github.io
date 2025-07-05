import {useNavigate} from "react-router-dom";
import {ArrowLeftCircle} from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background text-foreground">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Oops! The page you're looking for doesn't exist.
            </p>

            <button
                onClick={() => navigate(-1)}
                className="mt-6 inline-flex items-center space-x-2 text-sm font-medium text-foreground hover:underline"
            >
                <ArrowLeftCircle className="w-5 h-5"/>
                <span>Go Back</span>
            </button>
        </div>
    );
}
