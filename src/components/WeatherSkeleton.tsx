const WeatherSkeleton = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center w-full mt-4 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-4 mb-6 animate-pulse">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
        <div className="flex items-center space-x-2 mb-6 animate-pulse">
          <div className="border rounded p-2 bg-gray-300 h-8 w-8"></div>
          <div className="border rounded p-2 bg-gray-300 h-8 w-8"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center animate-pulse">
          <div className="bg-gray-300 weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gray-300  weather-card">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
