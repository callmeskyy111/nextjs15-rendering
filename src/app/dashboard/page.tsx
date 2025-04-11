"use client";
import React, { useState } from "react";

function DashboardPage() {
  console.log("Dashboard client-component");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>DashboardPage</h1>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      <h2>Hello, {name}!</h2>
    </div>
  );
}

export default DashboardPage;
