import Table from "@/components/Table";
import { role, HomeCases } from "@/lib/data";

type HomeCases = {
  id: number;
  caseNo: string;
  location: string;
  dateTime?: string;
  category: string;
};

const columns = [
  {
    header: "Case No.",
    accessor: "caseNo",
    className: " bg-slate-200 p-4 ",
  },
  {
    header: "Location",
    accessor: "location",
    className: "hidden md:table-cell bg-slate-200 p-4",
  },
  {
    header: "Date-Time",
    accessor: "dateTime",
    className: "hidden md:table-cell bg-slate-200 p-4",
  },
  {
    header: "Category",
    accessor: "category",
    className: "table-cell bg-slate-200 p-4",
  },
  {
    header: "Status",
    accessor: "status",
    className: " bg-slate-200 p-4",
  },
];

const HomePageCases = () => {
  const renderRow = (item: HomeCases) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight "
    >

      <td className="table-cell py-4" >{item.caseNo}</td>
      <td className="hidden md:table-cell">{item.location}</td>
      <td className="hidden md:table-cell">{item.dateTime}</td>
      <td className="table-cell">{item.category}</td>
      <td className="table-cell ">
        {item.status=== 'Active' ?
  <div className="bg-[#00B69B] md:rounded-2xl rounded-lg w-16 h-4 md:w-24 md:h-8 items-center justify-center p-2 flex">
  <span className="text-white self-center font-semibold md:font-bold text-xs md:text-md">Active</span>
</div>
:item.status ==='Pending' ?

<div className="bg-[#FCBE2D] md:rounded-2xl rounded-lg w-16 h-4 md:w-24 md:h-8 items-center justify-center p-2 flex">
<span className="text-white self-center font-semibold md:font-bold text-xs md:text-md">Pending</span>
</div>

:
<div className="bg-[#F178B6] md:rounded-2xl rounded-lg w-16 h-4 md:w-24 md:h-8 items-center justify-center p-2 flex">
<span className="text-white self-center md:font-bold text-xs md:text-md">Re-Open</span>
</div>
        }

         </td>
      {/* <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
      </td> */}
    </tr>
  );

  return (
    <div className="bg-white p-10 rounded-md">
<div>
            <span className="text-3xl font-semibold">Active Cases</span>
          </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={HomeCases} />
   
    </div>
  );
};

export default HomePageCases;
