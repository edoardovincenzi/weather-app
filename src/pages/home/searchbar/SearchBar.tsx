import { ChronologyIcon, PositionIcon } from '@/assets/icons';
import { useState, useRef, useEffect } from 'react';
import useUserLocation from '@/pages/home/searchbar/useUserLocation';
import { addRecentSearch, getArrayFromLocalStorage } from '@/utils';
import autoAnimate from '@formkit/auto-animate';
import { useDispatch } from 'react-redux';
import { setSearch } from '@/store/search';
import InfoIcon from '@/assets/icons/InfoIcon';
import Tooltip from '@/components/Tooltip';

const SearchBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { error, loading, getLocation } = useUserLocation({ searchBarRef });
  const dispatch = useDispatch();

  const handleClick = () => {
    setDropdownVisible(true);
    const last5Research = getArrayFromLocalStorage('recentSearches');
    setRecentSearches(last5Research);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // delay to allow click event on dropdown items
  };

  const handleRecentSearchClick = (search: string) => {
    if (searchBarRef?.current) {
      searchBarRef.current.value = search;
      searchBarRef?.current?.focus();
      setDropdownVisible(false);
      startReserch();
    }
  };

  const handleSearchEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.code === 'Enter' &&
      searchBarRef?.current?.value &&
      searchBarRef?.current?.value.length > 1
    ) {
      startReserch();
    }
  };

  const startReserch = () => {
    if (searchBarRef?.current?.value) {
      addRecentSearch(searchBarRef.current.value);
      setDropdownVisible(false);
      const searchValue = searchBarRef?.current?.value;
      if (searchValue && searchValue !== '') {
        dispatch(setSearch(searchBarRef.current.value));
        searchBarRef.current.value = '';
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        handleBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  useEffect(() => {
    if (dropdownRef.current) {
      autoAnimate(dropdownRef.current);
    }
  }, [dropdownRef]);

  return (
    <div className="w-full mx-auto md:mt-5">
      <div
        className={`font-bold text-red-600 h-7 ${
          error ? 'visible' : 'invisible'
        }`}
        role="alert"
      >
        {error}
      </div>
      <div className="w-full  py-2 flex gap-1 items-center">
        <Tooltip text={<SearchDataFormatInfo />}>
          <InfoIcon />
        </Tooltip>
        <input
          type="text"
          ref={searchBarRef}
          className="w-full px-4 py-2 border relative border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Cerca..."
          aria-haspopup="listbox"
          aria-expanded={dropdownVisible}
          aria-controls="search-dropdown"
          onClick={handleClick}
          onBlur={handleBlur}
          onKeyDown={handleSearchEnterClick}
        />
      </div>
      <div ref={dropdownRef}>
        {dropdownVisible && (
          <div
            id="search-dropdown"
            className="absolute z-10 top-0 left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg"
            role="listbox"
            aria-labelledby="search-bar"
          >
            <button
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex justify-start items-center gap-2"
              role="option"
              aria-selected="false"
              onClick={getLocation}
              disabled={loading}
            >
              <PositionIcon />
              Usa la tua posizione
            </button>
            <div className="border-t border-gray-200"></div>
            <ul id="recent-searches" className="max-h-48 overflow-y-auto">
              {recentSearches.map((search, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex justify-start items-center gap-2"
                  role="option"
                  aria-selected="false"
                  onClick={() => handleRecentSearchClick(search)}
                >
                  <ChronologyIcon />
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="text-xs pt-2 pl-1">Premi invio per effettuare al ricerca</p>
    </div>
  );
};

export default SearchBar;

const SearchDataFormatInfo = () => {
  return (
    <div className=" " role="alert">
      <strong className="font-bold">
        Formato Richiesto per i Dati di Ricerca:
      </strong>
      <ul className="list-disc list-inside mt-2">
        <li>
          <span className="font-semibold">Nome della città</span>: È possibile
          specificare stato, provincia, ecc., per essere più precisi.
          <br />
          <span className="italic">Esempio:</span> "Milano, Lombardia, Italia".
        </li>
        <li className="mt-2">
          <span className="font-semibold">Coordinate geografiche</span>: In
          formato di latitudine e longitudine, separati da una virgola.
          <br />
          <span className="italic">Esempio:</span>{' '}
          "45.35823631214687,-72.00709532848838".
        </li>
      </ul>
    </div>
  );
};
