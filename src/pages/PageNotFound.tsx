export function PageNotFound() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white py-48">
        <div className="flex flex-col">
          <span className="text-center font-bold  opacity-30">
            <a
              href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              className="text-blue-600"
            ></a>
          </span>
  
          <div className="flex flex-col items-center">
            <div className="text-bgColor font-bold text-7xl">404</div>
  
            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              Page not found
            </div>
  
            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              The page you are looking for could not be found.
            </div>
          </div>
        </div>
      </div>
    );
  }
  