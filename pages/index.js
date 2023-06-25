import GetBachelorProperty from "@/components/Home/GetBachelorProperty";
import GetFamilyProperties from "@/components/Home/GetFamilyProperties";
import Head from "next/head";

export default function Home({ familyProperties, bachelorProperties }) {

  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          sizes="any"
        />
        <title>Home Page</title>
      </Head>

      {/* ----Body---- */}
      {/* <h1 className="flex justify-center">Home Page</h1> */}
      <GetFamilyProperties familyProperties={familyProperties} />
      <GetBachelorProperty bachelorProperties={bachelorProperties} />
    </div>
  );
}



export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/familyPropertyServer");
  const familyProperties = await res.json();

  const bachelor = await fetch("http://localhost:3000/api/bachelorPropertyServer");
  const bachelorProperties = await bachelor.json();

  return { props: { familyProperties, bachelorProperties } };
}




