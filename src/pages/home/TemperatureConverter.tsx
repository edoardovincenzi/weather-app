import { useState, useEffect } from 'react';

type TypeUnit = 'C' | 'F';

const TemperatureConverter = ({ temp }: { temp: number }) => {
  const [temperature, setTemperature] = useState(temp);
  const [unit, setUnit] = useState<TypeUnit>('C');

  useEffect(() => {
    const savedUnit = localStorage.getItem('preferredUnit');
    if (savedUnit && (savedUnit === 'C' || savedUnit === 'F')) {
      handleUnitChange(savedUnit);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('preferredUnit', unit);
  }, [unit]);

  const convertTemperature = (value: number, toUnit: TypeUnit) => {
    if (toUnit === 'C') {
      return ((value - 32) * 5) / 9;
    } else {
      return (value * 9) / 5 + 32;
    }
  };

  const handleUnitChange = (newUnit: TypeUnit) => {
    if (unit !== newUnit) {
      const newTemperature = convertTemperature(temperature, newUnit);
      setTemperature(newTemperature);
      setUnit(newUnit);
    }
  };

  return (
    <div className="flex items-center my-4">
      <div className="mr-4 flex flex-col">
        <button
          onClick={() => handleUnitChange('C')}
          className={`px-3 py-1 rounded-t border border-weather-darker ${
            unit === 'C' ? 'bg-weather-darker' : 'text-gray-700'
          }`}
        >
          C
        </button>
        <button
          onClick={() => handleUnitChange('F')}
          className={`px-3 py-1  border rounded-b border-weather-darker ${
            unit === 'F' ? 'bg-weather-darker' : 'text-gray-700'
          }`}
        >
          F
        </button>
      </div>
      <span className="text-2xl  text-gray-600 ">
        Temperatura:{' '}
        <span className="font-semibold text-gray-800">
          {temperature.toFixed(2)}
        </span>{' '}
        {unit}
      </span>
    </div>
  );
};

export default TemperatureConverter;
