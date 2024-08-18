"use client";
import { WixClientContext } from "@/context/wix-context";
import { useContext } from "react";

const useWixClient = () => {
  return useContext(WixClientContext);
};

export default useWixClient;
