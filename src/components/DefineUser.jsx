import React from "react";
import UserPersonaCard from "./UserPersonaCard";

const DefineUser = ({ personas }) => {
  return (
    <section id="define-user" className="py-12">
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl">
        
       

        {/* Persona Cards - Integrated, Sleek Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {personas.map((persona, idx) => (
            <UserPersonaCard key={idx} persona={persona} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DefineUser;
