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
    </div>
  );
}

export default page