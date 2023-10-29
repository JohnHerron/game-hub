"use client";

import React from "react";
import useGameData from "../hooks/useGameData";

export default function DiscoveryViewer() {
  const data = useGameData();
  console.log("response", data);
  return <div>DiscoveryViewer</div>;
}
