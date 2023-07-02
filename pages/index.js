import Banner from "@/components/Home/Banner";
import GetBachelorProperty from "@/components/Home/GetBachelorProperty";
import GetFamilyProperties from "@/components/Home/GetFamilyProperties";
import GetHostelProperty from "@/components/Home/GetHostelProperty";
import GetOfficeProperty from "@/components/Home/GetOfficeProperty";
import GetShopProperty from "@/components/Home/GetShopProperty";
import GetSubletProperty from "@/components/Home/GetSubletProperty";
import Head from "next/head";

export default function Home({ familyProperties, bachelorProperties, hostelProperties, subletProperties, officeProperties, shopProperties }) {

  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1m30CtcVbVnrNvkQHaTkhp-PX8AfmQJ_geunLB4ihtE5IwybGguPrQALKgLDaOZeCvIw&usqp=CAU"
          sizes="any"
        />
        <title>Home Page</title>
      </Head>

      {/* ----Body---- */}
      <Banner />
      <GetFamilyProperties familyProperties={familyProperties} />
      <GetBachelorProperty bachelorProperties={bachelorProperties} />
      <GetHostelProperty hostelProperties={hostelProperties} />
      <GetSubletProperty subletProperties={subletProperties} />
      <GetOfficeProperty officeProperties={officeProperties} />
      <GetShopProperty shopProperties={shopProperties} />
    </div>
  );
}



export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/familyPropertyServer");
  const familyProperties = await res.json();

  const bachelor = await fetch("http://localhost:3000/api/bachelorPropertyServer");
  const bachelorProperties = await bachelor.json();

  

  const hostel = await fetch("http://localhost:3000/api/hostelPropertyServer");
  const hostelProperties = await hostel.json();

  const sublet = await fetch("http://localhost:3000/api/subletPropertyServer");
  const subletProperties = await sublet.json();


  const office = await fetch("http://localhost:3000/api/officePropertyServer");
  const officeProperties = await office.json();


  const shop = await fetch("http://localhost:3000/api/shopPropertyServer");
  const shopProperties = await shop.json();



  return { props: { familyProperties, bachelorProperties, hostelProperties, subletProperties, officeProperties, shopProperties } };
}




