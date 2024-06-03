import { useState } from 'react';

const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string | React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible((old) => !old);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={handleClick}
      onFocus={handleClick}
    >
      {children}
      {visible && (
        <div className="absolute top-full w-max text-sm max-w-sm lg:max-w-lg bg-white border text-black px-4 py-3 rounded  shadow-lg z-20">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
