import { useState, useCallback } from 'react';

const useUserLocation = ({
  searchBarRef,
}: {
  searchBarRef: React.RefObject<HTMLInputElement>;
}) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (searchBarRef.current) {
            searchBarRef.current.value = `${position.coords.latitude},${position.coords.longitude}`;
            searchBarRef.current.focus();
          }
          setError(null);
          setLoading(false);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("Geolocalizzazione negata dall'utente.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError(
                "L'informazione sulla vostra localizzazione non è disponibile."
              );
              break;
            case error.TIMEOUT:
              setError(
                "La richiesta per ottenere la posizione dell'utente è scaduta."
              );
              break;
            default:
              setError('Si è verificato un errore sconosciuto.');
              break;
          }
          setLoading(false);
          setTimeout(() => {
            setError(null);
          }, 3000);
        }
      );
    } else {
      setError('La geolocalizzazione non è supportata da questo browser.');
      setLoading(false);
    }
  }, []);

  return { error, loading, getLocation };
};

export default useUserLocation;
