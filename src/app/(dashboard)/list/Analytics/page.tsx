"use client";
import AnalyticsCard from "@/components/AnalyticsCard";
import Pagination from "@/components/Pagination";
import ReportsCard from "@/components/ReportsCard";
import VisitorCard from "@/components/VisitorCard";
import VisitorChart from "@/components/VisitorChart";

const Page = () => {

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
    <h1 className="text-2xl font-bold mb-4">Analytics</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
    {/* <div className="w-full md:w-[86%] lg:w-[80%] xl:w-[80%]"> */}
      <div className="col-span-3 md:col-span-2 ">
           <AnalyticsCard />
      </div>

      <div className="col-span-3 md:col-span-2 lg:col-span-1">
          <VisitorCard />
      </div>
     
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="md:col-span-1">
      <ReportsCard />
      </div>
        

        <div className="lg:col-span-2 md:col-span-1">
          <VisitorChart />
        </div>
      
      </div>
    
  </div>
  );
};

export default Page;
