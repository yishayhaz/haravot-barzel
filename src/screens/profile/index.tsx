import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "@/common/components/navbar";

export function ProfileScreen() {
  const router = useRouter();

  return (
    <>
      ProfileScreen: <b>{router.query.profile}</b>
      <Navbar />
    </>
  );
}
