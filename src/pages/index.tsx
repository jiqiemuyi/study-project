/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 14:17:52
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2024-11-29 15:25:04
 * @FilePath: \study-project\src\pages\index.tsx
 * @Description:
 */
import yayJpg from "../assets/yay.jpg";
import ShowText from "./components/ShowText";
import ShowTime from "./components/ShowTime";

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
    </div>
  );
}
