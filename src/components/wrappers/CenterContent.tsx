import { FC, PropsWithChildren } from "react";

const CenterContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-[1332px] mx-auto">{children}</div>;
};
export default CenterContent;
