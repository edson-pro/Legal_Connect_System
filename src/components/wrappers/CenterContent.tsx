import { FC, PropsWithChildren } from "react";

const CenterContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-[1332px] mx-auto px-8">{children}</div>;
};
export default CenterContent;
