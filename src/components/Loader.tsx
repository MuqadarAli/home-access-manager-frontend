export default function Loader() {
    return (
      <div className="flex justify-center rounded-lg w-full items-center text-Yellow bg-gray-300">
        <div className="flex items-center justify-center  rounded-lg bg-darkBlue text-sm font-semibold text-Yellow font-roboto tracking-wide shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
          <svg
            className="animate-spin -ml-1 mr-2 h-6 w-5 text-Yellow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0116 0H4z"
            ></path>
          </svg>
          Loading...
        </div>
      </div>
    );
  }
  