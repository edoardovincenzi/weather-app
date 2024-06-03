const MAX_RECENT_SEARCHES = 5;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArrayofStrings(value: any) {
  if (!value) return false;
  try {
    const arrayValue = JSON.parse(value);
    return Array.isArray(arrayValue);
  } catch {
    return false;
  }
}

export const getArrayFromLocalStorage = (key: string): string[] => {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    try {
      const parsedValue = JSON.parse(storedValue);
      if (Array.isArray(parsedValue)) {
        return parsedValue;
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
    }
  }

  return [];
};

export const addRecentSearch = (newSearch: string) => {
  const recentSearches = getArrayFromLocalStorage('recentSearches');
  recentSearches.unshift(newSearch);
  const uniqueArray = [...new Set(recentSearches)];
  if (uniqueArray.length > MAX_RECENT_SEARCHES) {
    uniqueArray.pop();
  }
  localStorage.setItem('recentSearches', JSON.stringify(uniqueArray));
};

export const getTodayFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
    day
  ).padStart(2, '0')}`;
  return formattedDate;
};

export const addDaysToDate = (daysToAdd: number) => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd);

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
    2,
    '0'
  )}`;
};
