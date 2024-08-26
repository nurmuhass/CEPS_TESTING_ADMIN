import React from 'react';

const reportData = [
  { type: 'Urgent', count: 274, color: '#FF3B30' }, // Red
  { type: 'Serious', count: 80, color: '#FF9500' }, // Orange
  { type: 'Common', count: 37, color: '#34C759' }, // Green
  { type: 'Other', count: 11, color: '#007AFF' },  // Blue
];

const ReportsCard = () => {
  // Calculate total reports
  const totalReports = reportData.reduce((total, report) => total + report.count, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-full">
      <div className="flex justify-between items-center my-6">
        <h2 className="text-lg font-bold">Reports</h2>
        <a href="#" className="text-sm text-gray-500">More →</a>
      </div>
      <div className="w-full h-3 flex mb-4">
        {reportData.map((report, index) => (
          <div
            key={index}
            style={{ width: `${(report.count / totalReports) * 100}%`, backgroundColor: report.color }}
          />
        ))}
      </div>
      <div>
        {reportData.map((report, index) => (
          <div key={index} className="flex justify-between mb-1">
            <span className="flex items-center">
              <span className="block w-2 h-2 mr-2" style={{ backgroundColor: report.color }}></span>
              <span className={`text-${report.color}`}>{report.type}</span>
            </span>
            <span>{report.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsCard;
