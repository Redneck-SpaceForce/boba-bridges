import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MyTabs() {
  const [direction, setDirection] = useState('to');
  let [categories] = useState({
    To: [],
    From: [],
  });
  return {
    direction,
    tab: (
      <div className="min-w-full mt-3">
        <Tab.Group
          onChange={(index) => {
            if (index) {
              setDirection('from');
            } else {
              setDirection('to');
            }
          }}
        >
          <Tab.List className="flex p-1 space-x-1 bg-gradient-to-tr from-gray-600 to bg-gray-100 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-lg leading-5 font-medium text-black rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#ccff00] ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
        <h1 className="text-[#ccff00] mt-2 text-4xl">Boba</h1>
      </div>
    ),
  };
}
