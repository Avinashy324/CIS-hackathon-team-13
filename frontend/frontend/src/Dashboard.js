import React, { useEffect, useState } from "react";
import SystemCard from "./components/SystemCard";

function Dashboard() {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/api/systems")
        .then(res => res.json())
        .then(data => setSystems(data));
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {systems.map(system => (
        <SystemCard key={system.id} system={system} />
      ))}
    </div>
  );
}

export default Dashboard;
