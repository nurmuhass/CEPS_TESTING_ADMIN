import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl bg-white  p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
      {type === 'Total Cases' ?
   <Image src="/total.png" alt="" width={50} height={50} />
      : type === 'Active Cases' ?
      <Image src="/Active.png" alt="" width={50} height={50} />
     : type === 'Pending Cases' ?
   <Image src="/pending.png" alt="" width={50} height={50} />
   : type === 'Completed Cases' ?
   <Image src="/completed.png" alt="" width={50} height={50} />
   :
''
      }
     
      </div>
      <h1 className="text-2xl font-semibold mb-4 mt-0">1,234</h1>
      <div className="flex ">

      {type === 'Active Cases' ?
<>

      <Image src="/down.png" alt="" width={20} height={20} />
      <p className="text-[#f93c65] text-xs ml-1 mr-1 ">4.5%</p>

      <span className="text-gray-500 text-xs ">Down from yesterday</span>
 </>
      :
   <>
      <Image src="/up.png" alt="" width={20} height={20} />
      <p className="text-[#00B69B] text-xs ml-1 mr-1 ">4.5%</p>

      <span className="text-gray-500 text-xs ">Up from yesterday</span>
   </>
}


      </div>
    </div>
  );
};

export default UserCard;
