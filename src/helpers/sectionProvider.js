import SectionContext from "./sectionContext";
import { useState } from "react";

const SectionProvider = ({ children }) => {
  const [section, setSection] = useState("All");


  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;