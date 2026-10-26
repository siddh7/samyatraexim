import Link from "next/link";
import pageConfig from "./pageConfig.json";
// import componentRegistry from "./componentRegistry";
// import Logo from "../../public/samyatraexim_logo.png";


export default function Home() {
  return (
      <main className="min-h-screen bg-white">
        {/* {pageConfig.map((section) => {
        const Component = componentRegistry[section.component];
 
        if (!Component) {
          console.warn(`[page.tsx] Unknown component: "${section.component}"`);
          return null;
        }
 
        return <Component key={section.id} {...section.props} />;
      })} */}
        <div className={`flex flex-col justify-center items-center h-screen bg-[#76d6ff]`}>
          <h1 className={`uppercase text-4xl font-bold text-center my-8 text-black w-full text-white`}>Samyatra Exim</h1>
          <div className={`flex flex-col items-center w-full`}>
            <h3 className={`text-black font-semibold text-white`}>Contact Us:</h3>
            <Link className={`text-black font-semibold hover:underline text-white`} href="mailto:contact@samyatraexim.com">
              contact@samyatraexim.com
            </Link>
          </div>
        </div>
        <p className={`text-center text-black py-4 bg-[#76d6ff] text-white`}>© 2026 Samyatra Exim. All rights reserved.</p>
      </main>
  );
}