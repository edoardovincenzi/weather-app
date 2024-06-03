const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-weather">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 ">Ops</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          È successo qualcosa
        </h2>
        <p className="text-gray-600 mt-2">
          C'è stato un problema e non siamo riusciti a caricare la pagina. Per
          favore, prova a ricaricare.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 transition-colors bg-weather rounded shadow hover:bg-green-300 "
        >
          Ricarica Pagina
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
