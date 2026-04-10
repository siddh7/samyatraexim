import Link from "next/link";
import pageConfig from "./pageConfig.json";
// import componentRegistry from "./componentRegistry";
// import Logo from "../../public/samyatraexim_logo.png";

export const metadata = {
  title: 'Samyatra Exim - Global Trade Solutions',
  description: 'Samyatra Exim is a leading export-import company with a strong presence in the global market.',
  openGraph: {
    title: 'Samyatra Exim - Global Trade Solutions',
    description: 'Samyatra Exim is a leading export-import company with a strong presence in the global market.',
    url: 'https://samyatraexim.com/',
    images: [{ url: '../../public/samyatraexim_logo.png' }],
  },
};

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
      <div className={`flex flex-col justify-center items-center h-screen`}>
        <h1 className={`uppercase text-4xl font-bold text-center my-8 text-black w-full`}>Samyatra Exim</h1>
        <div className={`flex flex-col items-center w-full`}>
          <h3 className={`text-black font-semibold`}>Contact Us:</h3>
          <Link className={`text-black font-semibold hover:underline`} href="mailto:contact@samyatraexim.com">
            contact@samyatraexim.com
          </Link>
        </div>
      </div>
    </main>
  );
}