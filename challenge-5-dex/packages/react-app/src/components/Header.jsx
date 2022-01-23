import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/bnguyen2" target="_blank" rel="noopener noreferrer">
      <PageHeader title="Dex Challenge" subTitle="" style={{ cursor: "pointer" }} />
    </a>
  );
}
