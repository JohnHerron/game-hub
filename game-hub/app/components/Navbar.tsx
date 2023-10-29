import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "./game_hub.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="GameHub Controller Logo"
        height={70}
        quality={100}
        placeholder="blur"
      />
      <h2>GameHub</h2>
      <Link href="/">Discover</Link>
      <Link href="/popular">Popular</Link>
      <Link href="/new">New</Link>
    </nav>
  );
}
