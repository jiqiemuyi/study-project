/*
 * @Author: Jia.Yang
 * @Date: 2024-11-29 15:23:33
 * @LastEditors: Jia.Yang jia.yang@duomai.com
 * @LastEditTime: 2024-11-29 15:24:06
 * @FilePath: \study-project\src\pages\components\ShowText\index.tsx
 * @Description:
 */
interface ShowTextProps {
  text: string;
}
const ShowText: React.FC<ShowTextProps> = ({ text }: any) => {
  return <>{text}</>;
};

export default ShowText;
