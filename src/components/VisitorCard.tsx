import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

const barData = [
  { name: '12:00', visitors: 5 },
  { name: '12:05', visitors: 6 },
  { name: '12:10', visitors: 7 },
  { name: '12:15', visitors: 4 },
  { name: '12:20', visitors: 6 },
  { name: '12:25', visitors: 8 },
  { name: '12:30', visitors: 5 },
];

const lgaData = [
  { lga: 'Nassarawa', visitors: 12 },
  { lga: 'Dala', visitors: 8 },
  { lga: 'Fagge', visitors: 6 },
  { lga: 'K.M.C', visitors: 5 },
  { lga: 'Tarauni', visitors: 5 },
  { lga: 'Wudil', visitors: 1 },
  { lga: 'Gezawa', visitors: 1 },
  { lga: 'Karaye', visitors: 1 },
  { lga: 'Minjibir', visitors: 1 },
];

const VisitorCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full mb-6">
      <div className="mb-4">
      <p className="text-sm text-gray-500">Visitor in last 30 Minutes</p>
        <h2 className="text-5xl font-bold">40</h2>
        <p className="text-green-500">+2 Visitors Per minute</p>
      </div>
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={50}>
          <BarChart data={barData}>
            <Tooltip />
            <Bar dataKey="visitors" fill="#1570EF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-4">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-sm font-semibold">L.G.A</th>
              <th className="text-sm font-semibold">Visitors</th>
            </tr>
          </thead>
          <tbody>
            {lgaData.map((item, index) => (
              <tr key={index}>
                <td className="text-sm">{item.lga}</td>
                <td className="text-sm">{item.visitors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-blue-500">More →</a>
      </div>
    </div>
  );
};

export default VisitorCard;
