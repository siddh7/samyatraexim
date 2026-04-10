import HeroSection    from "./components/HeroSection";
import StatsSection   from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";

import { ComponentType } from "react";
 
const componentRegistry: Record<string, ComponentType<any>> = {
  HeroSection,
  StatsSection,
  ServicesSection,
};
 
export default componentRegistry;