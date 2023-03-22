import { Link } from 'react-router-dom';

function ThankYouMessage() {
  return (
    <div className="bg-slate-200 text-center py-8 h-[100vh] flex items-center flex-row ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Thank You For Your Submission!
        </h2>
        <p className="text-lg text-slate-700 mb-8">
          We appreciate your interest and will get back to you soon.
        </p>
        <Link
          to="/"
          className="inline-block bg-slate-700 text-white py-2 px-6 rounded-full hover:bg-slate-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}


export default ThankYouMessage