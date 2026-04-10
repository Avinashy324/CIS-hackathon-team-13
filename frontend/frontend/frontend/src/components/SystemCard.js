import React from "react";

function SystemCard({ system }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "10px",
      width: "200px"
    }}>
      <h3>{system.name}</h3>
      <p>CPU: {system.cpu}%</p>
      <p>Memory: {system.memory}%</p>
      <p>Disk: {system.disk}%</p>
      <p><b>Status: {system.health}</b></p>
    </div>
  );
}

export default SystemCard;
