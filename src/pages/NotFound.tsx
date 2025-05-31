
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-5">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-blue-50 text-kelo-blue flex items-center justify-center text-4xl font-bold">
            404
          </div>
        </div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button size="lg" className="bg-kelo-blue hover:bg-kelo-blue/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
