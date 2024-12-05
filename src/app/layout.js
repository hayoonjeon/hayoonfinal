"use client"

import Link from "next/link";
import './globals.css'
import { Stack } from "@mui/material";

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body style={{ textAlign: "center" }}>
        <h1><Link href="/">Home</Link></h1>
        <nav>
          <Stack direction="row" spacing={2} justifyContent="center" >
            <Link href={"/kakaoPay"}>카카오페이 연습</Link>
            <Link href={"/portOneKakao"}>포트원-카카오페이 연습</Link>
            <Link href={"/naverPay"}>포트원-네이버페이 연습</Link>
          </Stack>
        </nav>
        <hr />
        {children}
        <hr />
      </body>
    </html>
  );
}
