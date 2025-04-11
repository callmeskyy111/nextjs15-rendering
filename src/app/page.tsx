import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/dashboard">To Dashboard</Link>
    </div>
  );
}

export default page;
