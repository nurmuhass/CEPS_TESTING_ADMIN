// components/VisitorChart.js

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Apr 21', Male: 20000, Female: 10000 },
  { name: 'May 21', Male: 50000, Female: 30000 },
  { name: 'Jun 21', Male: 68000, Female: 120000 },
  { name: 'Jul 21', Male: 60000, Female: 70000 },
];

const VisitorChart = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className='flex justify-between'>
             <h2 className="text-lg font-semibold mb-4">Visitor</h2>

    <div className='flex justify-center gap-4'>
        <div className='ring-1 ring-gray-300 rounded-2xl p-1 px-2 flex self-center items-center'>
           <span className='bg-[#FF7849] w-3 h-3 rounded-2xl mr-1 '></span> 
           <span className='text-xs'>Male</span>
       </div>
        <div  className='ring-1 ring-gray-300 rounded-2xl p-1 px-2 flex self-center items-center'>
           <span className='bg-[#1570EF] w-3 h-3 rounded-2xl mr-1 '></span> 
           <span className='text-xs'>Female</span>
        </div>
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-blue-500">More →</a>
      </div>
        </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Male" fill="#1442DB" barSize={20} />
          <Bar dataKey="Female" fill="#E26EB6" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;
