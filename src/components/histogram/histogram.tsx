import React, { useState } from 'react';

interface HistogramProps {
  data: Record<string, number>;
}

export default function Histogram({ data }: HistogramProps) {
  const [tooltip, setTooltip] = useState<{ visible: boolean; content: string; x: number; y: number }>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  const maxValue = Math.max(...Object.values(data));
  const barHeightMultiplier = 100;

  const handleMouseMove = (event: React.MouseEvent, month: string) => {
    const tooltipContent = `${month}: ${data[month]}`;
    setTooltip({
      visible: true,
      content: tooltipContent,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };

  return (
    <div className="relative">
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute z-50 px-2 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap"
          style={{
            top: `${tooltip.y}px`,
            left: `${tooltip.x}px`,
            transform: 'translate(-50%, -100%)',
            pointerEvents: 'none',
            position: 'fixed',
          }}
        >
          {tooltip.content}
        </div>
      )}

      <div className="flex justify-around items-end gap-2">
        {Object.keys(data).map((month, index) => (
          <div
            key={index}
            className="w-full max-w-20 bg-gramDefault hover:bg-gramHover rounded transition-all relative cursor-pointer"
            style={{
              height: `${(data[month] / maxValue) * barHeightMultiplier}px`,
            }}
            onMouseMove={(e) => handleMouseMove(e, month)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}
