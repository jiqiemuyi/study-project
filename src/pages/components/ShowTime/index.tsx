/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 14:49:43
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2024-11-29 15:21:18
 * @FilePath: \study-project\src\pages\ShowTime\index.tsx
 * @Description:
 */
import useTime from "@/hooks/useTime";
import dayjs from "dayjs";
const ShowTime: React.FC = () => {
  const time = useTime();

  return <>当前时间： {dayjs(time).format("hh:mm:ss a")}</>;
};
export default ShowTime;
