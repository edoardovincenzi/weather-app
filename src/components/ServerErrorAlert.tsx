const ServerErrorAlert = () => {
  return (
    <div className="flex items-top justify-center mt-10">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Errore!</strong>
        <br></br>
        <span className="block sm:inline">
          C'è stato un problema durante la chiamata al server. <br></br>Per
          favore, riprova più tardi.
        </span>
      </div>
    </div>
  );
};

export default ServerErrorAlert;
