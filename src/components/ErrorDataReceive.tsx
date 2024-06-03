const ErrorDataReceive = () => {
  return (
    <div className="flex items-top justify-center mt-10">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Errore di validazione!</strong>
        <br></br>
        <span className="block sm:inline">
          Si è verificato un errore durante il processo di validazione dei dati.
          <br></br>I dati ricevuti dal server sono incongruenti e non
          corrispondono ai criteri di validazione attesi. <br></br>Verificare i
          dati inseriti. <br></br>Contattare il supporto tecnico se il problema
          persiste.
        </span>
      </div>
    </div>
  );
};

export default ErrorDataReceive;
