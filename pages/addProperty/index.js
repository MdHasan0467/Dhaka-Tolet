// import { ImOffice } from "react-icons/im";
import { FcShop } from "react-icons/fc";
import { MdFamilyRestroom } from "react-icons/md";
import { BsBuildingFillAdd, BsFillGeoFill, BsFillGrid1X2Fill } from "react-icons/bs";
import Link from "next/link";


const addProperty = () => {
  return (
    <div>
      <h1>Add Your Property</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-5">
      <Link href='/familyProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <MdFamilyRestroom className="w-auto mx-auto" />
        <p className="text-2xl">Family</p>
      </Link>

      <Link href='/bachelorProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <BsFillGeoFill className="w-auto mx-auto" />
        <p className="text-2xl">bachelor</p>
      </Link>

      <Link href='/hostelProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <BsBuildingFillAdd className="w-auto mx-auto" />
        <p className="text-2xl">Hostel</p>
      </Link>

      <Link href='/subletProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <BsFillGrid1X2Fill className="w-auto mx-auto" />
        <p className="text-2xl">Sublet</p>
      </Link>

      <Link href='/officeProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <BsBuildingFillAdd className="w-auto mx-auto" />
        <p className="text-2xl">Office</p>
      </Link>

      <Link href='/shopProperty' className='text-5xl hover:bg-slate-950 hover:text-white cursor-pointer rounded-lg hover:shadow-xl text-center border p-3'>
        <FcShop className="w-auto mx-auto" />
        <p className="text-2xl">Shop</p>
      </Link>
      </div>
      
    </div>
  );
};

export default addProperty;

