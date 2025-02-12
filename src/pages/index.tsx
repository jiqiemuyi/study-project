/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 14:17:52
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2025-02-12 16:46:01
 * @FilePath: \study-project\src\pages\index.tsx
 * @Description:
 */
import { useRef } from "react";
import yayJpg from "../assets/yay.jpg";
import ShowText from "./components/ShowText";
import ShowTime from "./components/ShowTime";
import {} from "@formily/antd-components";
import SchemaPage from "./components/SchemaPage";

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div>
        <ShowText text="hello" />
      </div>
      <ShowTime />
      <br />
      <br />
      <SchemaPage />
    </div>
  );
}
