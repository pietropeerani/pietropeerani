import { useState } from 'react';


export interface DinamicSlotProp {
  title: string;
  content: string;
}

interface DinamicSlotProps {
  data: DinamicSlotProp[];
}

export default function DinamicSlot({ data }: DinamicSlotProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className='flex whitespace-nowrap max-w-full overflow-x-scroll !p-0'>
        {data.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`p-1 text-sm text-txLink ${activeTab === index ? 'bg-txLink !text-body' : 'bg-transparent'}`}
          >
            [{tab.title}]
          </button>
        ))}
      </div>

      <div className="w-full max-md:my-2 h-fit p-4 cursor-default border border-windowBorder bg-windowBg flex flex-col gap-4">
        <h1 className='text-txTitle'># {data[activeTab].title}</h1>
        <p>{data[activeTab].content}</p>
      </div>
    </div>
  );
};