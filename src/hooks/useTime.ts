import React from "react";

/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 14:48:28
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2024-12-02 13:39:24
 * @FilePath: \study-project\src\hooks\useTime.ts
 * @Description:时间hook
 */
function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return time;
}
export default useTime;
