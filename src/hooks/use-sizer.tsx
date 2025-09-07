import React, { useEffect, useRef, useState } from 'react';

const WidthDisplay: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current && divRef.current.parentElement) {
        const parentStyle = window.getComputedStyle(divRef.current.parentElement);
        const maxWidthValue = parentStyle.maxWidth;

        if (maxWidthValue && maxWidthValue !== 'none' && maxWidthValue.endsWith('px')) {
          setMaxWidth(parseFloat(maxWidthValue));
        } else {
          setMaxWidth(divRef.current.parentElement.offsetWidth);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        padding: '12px',
        border: '1px solid black',
        display: 'inline-block',
        userSelect: 'none',
      }}
    >
      Макс. ширина родителя: {maxWidth ? `${maxWidth}px` : 'неизвестно'}
    </div>
  );
};

export default WidthDisplay;
