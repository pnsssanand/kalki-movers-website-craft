
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light py-16">
      <div className="text-center px-6">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-lg mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-blue mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-text">Page Not Found</h2>
          <p className="text-lg mb-8 text-neutral-text">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="space-y-4">
            <Button asChild className="btn-primary w-full">
              <Link to="/">Return to Homepage</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
