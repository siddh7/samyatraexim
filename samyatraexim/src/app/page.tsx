import pageConfig from "./pageConfig.json";
import componentRegistry from "./componentRegistry";
 
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {pageConfig.map((section) => {
        const Component = componentRegistry[section.component];
 
        if (!Component) {
          console.warn(`[page.tsx] Unknown component: "${section.component}"`);
          return null;
        }
 
        return <Component key={section.id} {...section.props} />;
      })}
    </main>
  );
}