import { BiCurrentLocation } from "react-icons/bi";
import { BsFillTagsFill, BsReverseLayoutTextSidebarReverse, BsSignIntersectionFill } from "react-icons/bs";

const familyProperty = ({ districts }) => {
//   console.log(districts.places);


const handleFormSubmit = async (e) => {
    e.preventDefault();
    const district = e.target.district.value;
    const localArea = e.target.localArea.value;
    const sectorNumber = e.target.sectorNumber.value;
    const roadNumber = e.target.roadNumber.value;
    const houseNumber = e.target.houseNumber.value;
    const houseName = e.target.houseName.value;

    
    const propertyAvailableFrom = e.target.propertyAvailableFrom.value;
    const bedRoom = e.target.bedRoom.value;
    const bathRoom = e.target.bathRoom.value;
    const balcony = e.target.balcony.value;
    const file = e.target.files;

    
    const price = e.target.price.value;
    const priceFor = e.target.priceFor.value;
    // const gashBill = e.target.gashBill.value;
    // const waterBill = e.target.waterBill.value;
    // const electricityBill = e.target.electricityBill.value;
    // const liftBill = e.target.liftBill.value;
    // const securityBill = e.target.securityBill.value;




    console.log(file);


    
    const familyProperties = {
      district, localArea, sectorNumber, roadNumber, houseNumber, houseName, propertyAvailableFrom, bedRoom, bathRoom, balcony, file, price, priceFor
    }
    
    console.log(familyProperties);

    try{
      const res = await fetch('/api/familyPropertyServer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(familyProperties)
      })
      const data = await res.json();
      console.log(data);
     }
     catch(err) {
      console.log(err);
     }
     finally {
     }


}
  return (
    <div>
      <h1>Add Family Property</h1>

      <form onSubmit={handleFormSubmit} className="border p-3">
          <div className="flex font-semibold text-xl">
            <BiCurrentLocation className="mt-1 mx-2" />
            <p> Location information</p>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <select name="district" className="select select-primary w-full focus:outline-none max-w-xs">
            <option disabled selected>
              Select Your District?
            </option>
            {districts?.places?.map((place, idx) => (
              <option key={idx}>{place.name}</option>
            ))}
          </select>

          <input
            type="text"
            name="localArea"
            placeholder="Type your local area"
            className="input focus:outline-none input-bordered input-primary w-full max-w-xs"
          />

          <input
            type="number"
            name="sectorNumber"
            placeholder="Type your sector no"
            className="input focus:outline-none input-bordered input-primary w-full max-w-xs"
          />

          <input
            type="number"
            name="roadNumber"
            placeholder="Type your road no"
            className="input focus:outline-none input-bordered input-primary w-full max-w-xs"
          />

          <input
            type="number"
            name="houseNumber"
            placeholder="Type your house no"
            className="input focus:outline-none input-bordered input-primary w-full max-w-xs"
          />

          <input
            type="text"
            name="houseName"
            placeholder="Type your house name"
            className="input focus:outline-none input-bordered input-primary w-full max-w-xs"
          />
        </div>

          <div className="flex font-semibold text-xl mt-10">
            <BsReverseLayoutTextSidebarReverse className="mt-1 mx-2" />
            <p> Basic information</p>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <select name="propertyAvailableFrom" className="select select-primary w-full focus:outline-none max-w-xs">
            <option disabled selected>
              Property available from?
            </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>November</option>
              <option>December</option>
          </select>
          <select name="propertyType" className="select select-primary w-full focus:outline-none max-w-xs">
            <option disabled selected>
              Property Type?
            </option>
              <option>House</option>
              <option>Unit</option>
              <option>Flat</option>
              <option>Apartment</option>
          </select>

          <input type="number" name="bedRoom" placeholder="Bed Room" className="input focus:outline-none input-bordered input-primary w-full max-w-xs" />

          <input type="number" name="bathRoom" placeholder="Bath Room" className="input focus:outline-none input-bordered input-primary w-full max-w-xs" />

          <input type="number" name="balcony" placeholder="Balcony" className="input focus:outline-none input-bordered input-primary w-full max-w-xs" />

          <input type="file" placeholder="Others Room" className="input focus:outline-none input-bordered input-primary w-full max-w-xs" />

        </div>


        <div className="flex font-semibold text-xl mt-10">
            <BsFillTagsFill className="mt-1 mx-2" />
            <p> Price</p>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">


          <input type="Number" name="price" placeholder="Price" className="input focus:outline-none input-bordered input-primary w-full max-w-xs" />
          
          <select name="priceFor" className="select select-primary w-full focus:outline-none max-w-xs">
            <option disabled selected>
              Price For?
            </option>
              <option>Monthly</option>
              <option>Weekly</option>
          </select>
        </div>



        {/* <div className="flex font-semibold text-xl mt-10">
            <BsSignIntersectionFill className="mt-1 mx-2" />
            <p> Price included with</p>
          </div>
        <div>
          <div className="flex">

          <div className="flex mx-2">
            <span className="mx-2">Gash Bill</span>
            <input name="gashBill" type="checkbox" className="checkbox" />
          </div>

          <div className="flex mx-2">
            <span className="mx-2">Water Bill</span>
            <input name="waterBill" type="checkbox" className="checkbox" />
          </div>
          <div className="flex mx-2">
            <span className="mx-2">Electricity Bill</span>
            <input name="electricityBill" type="checkbox" className="checkbox" />
          </div>
          <div className="flex mx-2">
            <span className="mx-2">Lift Bill</span>
            <input name="liftBill" type="checkbox" className="checkbox" />
          </div>
          <div className="flex mx-2">
            <span className="mx-2">Security Bill</span>
            <input name="securityBill" type="checkbox" className="checkbox" />
          </div>
          </div>
        </div> */}

        <button className="btn bg-sky-400 hover:bg-sky-500 mt-5">Submit</button>
      </form>
    </div>
  );
};

export default familyProperty;

export async function getServerSideProps() {
  const res = await fetch(
    "https://barikoi.xyz/v1/api/NDc1NTpHSUo4NEdWTzc1/districts"
  );
  const districts = await res.json();

  return { props: { districts } };
}
