import React from 'react'
import BreadCrumbs from '../components/BreadCrums';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Pranavkumar Desai",
  description: "Blogs by Pranavkumar Desai",
};

function page() {
  return (
    <div className="container py-6">
      <BreadCrumbs path="blogs" />
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-2xl text-muted-foreground font-medium">Coming Soon</p>
      </div>
    </div>
  );
}

export default page