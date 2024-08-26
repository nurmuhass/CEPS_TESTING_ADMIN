import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role,ReportsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type ReportsData = {
  id: number;
  Folder: string;
  Name: string;
  Created?: string;
  Download: string;
};

const columns = [
  {
    header: "",
    accessor: "",
    className: "  p-4 hidden md:table-cell",
  },
  {
    header: "Folder",
    accessor: "Folder",
    className: "  p-4 hidden md:table-cell",
  },
  {
    header: "Name",
    accessor: "Name",
    className: " p-4",
  },
  {
    header: "Created",
    accessor: "Created",
    className: "hidden lg:table-cell p-4",
  },
  {
    header: "Download",
    accessor: "Download",
    className: "table-cell p-4",
  },
  {
    header: "Edit",
    accessor: "Edit",
    className: " p-4 hidden md:table-cell",
  },
  {
    header: "Delete",
    accessor: "Delete",
    className: " p-4 hidden md:table-cell",
  },
  {
    header: "",
    accessor: "",
    className: "  p-4 hidden lg:table-cell",
  },
];

const Reports = () => {
  const renderRow = (item: ReportsData) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm hover:bg-[#ccf5e2] ml-6 mt-10"
    >
      <td className="hidden md:table-cell font-extrabold text-gray-400">{item.id}</td>
<div className=" ml-5 items-center hidden md:flex">
  <div className="w-8 h-8  mr-4 ">
  <Image src="/foldericon.png" alt="" width={46} height={6} />
  </div>
    
    <td className="py-4 text-[#18B368] hover:text-white font-medium hidden md:table-cell" >{item.Folder}</td>
</div>
    
      <td className="table-cell">{item.Name}</td>
      <td className="hidden lg:table-cell">{item.Created}</td>
<div className=" bg-[#00B69B] hover:bg-white  w-24 h-6 p-4 rounded items-center justify-center my-4 flex hover:text-[#18B368]">
      <td className="table-cell text-white hover:text-[#18B368]" >{item.Download}</td>
 </div>
      <td className="hidden md:table-cell">
        <div className="flex items-center gap-2 ml-5">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#ccf5e2]">
              <Image src="/edit.png" alt="" width={10} height={10} />
            </button>
          </Link>
         
        </div>
      </td>

      <td className="hidden md:table-cell">
        <div className="flex items-center gap-2 ml-5">
      
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
    
      </td>
      <td className=" text-white hidden lg:table-cell" >
          <Image src="/options.png" alt="" width={6} height={6} />
        </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
          <div>
            <span className="text-3xl font-semibold">Reports</span>
          </div>

          <div className="flex mt-12">
            <span className="text-xl font-semibold">Repository</span>
          </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={ReportsData} />
   
   <div className="mt-8 lg:grid-cols-3 md:grid-cols-2 gap-10 hidden md:grid">

   <div className="col-span-1">
      <span className="text-lg font-semibold">Add file to Repository</span>
      <div className="ml-10">
    <span className="block mt-3 mb-2 font-bold text-sm">Choose Folder:</span>  
    <select
            className="ring-[1.5px] ring-[#00B69B] p-2 rounded-md text-sm w-full"    
            defaultValue={'Documents'}
          >
            <option value="Documents">Documents</option>
            <option value="male">Sheet</option>
            <option value="female">Excel</option>
          </select>
          </div>
          
  <div className="items-center mb-4 mt-6 ml-10">
    <span className="block font-bold text-sm">Set Permissions:</span>  
    <div className="flex mt-4">
    <input
  type="radio"
  value=""
  name="default-radio"
  className="w-6 h-6 text-[#00B69B] bg-gray-100 focus:ring-[#00B69B] focus:ring-2 border-[#00B69B] rounded-none"
/>

    <span className="block text-sm ml-2">Set file as private</span>  
    </div>

  </div>
   </div>

   <div className="lg:col-span-2 md:col-span-1">
    <div className="border border-dashed border-[#00B69B] lg:w-2/3 md:w-full md:h-24 lg:h-16 border-t-0 mt-12 flex">

    <div className="w-11 items-center mx-4 mt-3">
      <Image src="/Group.png" alt="" width={36} height={6} />
    </div>
     
        <div className="mt-3">
        <span className="block text-sm text-black">Select a file or drag and drop here</span>  
        <span className="block text-xs text-gray-500 ">JPG, XLSX or PDF, file size no more than 10MB</span>  
        
        </div>
        
    <div className="w-20 h-9 items-center mx-4 border mt-3
     border-[#00B69B] bg-slate-50 rounded-md justify-center hidden lg:flex">
      <span className="text-[#00B69B] text-xs">Select File</span>
    </div>
    
    </div>

<div className="flex w-2/3 mt-6">

    <div className="mt-0">
         <Image src="/bi_file-earmark-image.png" alt="" width={26} height={6} />
    </div>
<div className="mt-0 w-full ml-3">
  <div className="flex justify-between">
      <span className="text-xs  text-black  mb-1">image.jpg</span>
      <span className="text-xs text-black mb-1">5.7mb</span>
  </div>
 
    <div className="w-full h-1 bg-gray-200 rounded-md ">
       <div className="bg-[#00B69B] w-11 h-1"></div>
    </div>
</div>

</div>

<div className="flex justify-end mb-6 items-center">
      <div>
         cancel
      </div>
      <div className="ml-3 bg-[#00B69B] p-2 rounded flex items-center">
       
           <Image src="/plus.png" width={13} height={12} alt="plus" className="mr-1"/>
        

       <span className="text-white font-normal text-sm">Upload</span> 
      </div>
</div>


   </div>

   </div>

      {/* PAGINATION */}
      <Pagination />

    </div>
  );
};

export default Reports;
