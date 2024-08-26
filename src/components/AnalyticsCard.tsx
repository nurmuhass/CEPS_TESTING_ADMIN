import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Parser } from 'json2csv';

const data = [
  { name: '11 AM', UniqueVisitor: 40, PageViews: 100 },
  { name: '12 PM', UniqueVisitor: 30, PageViews: 90 },
  { name: '3 PM', UniqueVisitor: 20, PageViews: 80 },
  { name: '4 PM', UniqueVisitor: 27, PageViews: 110 },
  { name: '5 PM', UniqueVisitor: 18, PageViews: 70 },
  { name: '6 PM', UniqueVisitor: 23, PageViews: 105 },
  { name: '7 PM', UniqueVisitor: 34, PageViews: 80 },
  { name: '8 PM', UniqueVisitor: 44, PageViews: 60 },
  { name: '9 PM', UniqueVisitor: 32, PageViews: 80 },
  { name: '10 PM', UniqueVisitor: 50, PageViews: 95 },
];

const AnalyticsCard = () => {

  const handleExportCSV = () => {
    const fields = ['name', 'UniqueVisitor', 'PageViews'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'analytics-data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-1 shadow-md pb-4 mb-4">
      <div className='flex justify-between'>
      <span className=''>Reports Snapshot</span>
      <div className=' gap-2 hidden lg:flex'>
        <div className='bg-[#F1F5F9] rounded-xl items-center justify-center h-6 w-14 flex'> <span className='text-[#1570EF] self-center'>Daily</span> </div>
        <div>Weekly</div>
        <div>Monthly</div>
      </div>
      </div>

      <div className="flex justify-between items-center my-4 ">
        <div>
          <h2 className="text-md lg:text-4xl font-bold">1002</h2>
          <p>Views</p>
        </div>
        <div>
          <h2 className="text-md lg:text-4xl font-bold">40</h2>
          <p>Visitors</p>
        </div>
        <div>
          <h2 className="text-md lg:text-4xl font-bold text-red-500">52%</h2>
          <p>Bounce Rate</p>
        </div>
        <div className='hidden lg:block'>
          <h2 className="text-md lg:text-4xl font-bold">1m</h2>
          <p>Avg. Visit Time</p>
        </div>
        <button
          className="border border-gray-300 px-4 py-2 rounded-lg hidden lg:block"
          onClick={handleExportCSV}
        >
          Export CSV
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="PageViews" stroke="#FF7849" fill='#FF7849'/>
          <Line type="monotone" dataKey="UniqueVisitor" stroke="#1570EF" fill="#1570EF" />
        </LineChart>
      </ResponsiveContainer>
      <div className='flex justify-center gap-4'>
        <div className='ring-1 ring-gray-300 rounded-2xl p-1 px-2 flex self-center items-center'>
           <span className='bg-[#FF7849] w-3 h-3 rounded-2xl mr-1 '></span> 
           <span className='text-xs'>Unique Visitor</span>
       </div>
        <div  className='ring-1 ring-gray-300 rounded-2xl p-1 px-2 flex self-center items-center'>
        <span className='bg-[#1570EF] w-3 h-3 rounded-2xl mr-1 '></span> 
           <span className='text-xs'>Page Views </span></div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
