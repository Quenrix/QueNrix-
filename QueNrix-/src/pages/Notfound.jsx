import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return (
    <div className="flex min-h-screen items-center justify-center pt-16 bg-white">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">404</h1>
        <p className="text-xl text-slate-900 mb-2">Page not found</p>
        <p className="text-sm text-slate-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all" style={{ backgroundColor: '#6366f1', color: '#ffffff' }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;