import { FC } from "react";
import { twJoin } from "tailwind-merge";

interface Props {
  heading: string;
  subHeading?: string;
  avatarContainerClassName?: string;
  headingClassName?: string;
  subHeadingClassName?: string;
}

const UserAvatarCard: FC<Props> = ({
  heading,
  subHeading,
  avatarContainerClassName,
  headingClassName,
  subHeadingClassName,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className={twJoin("flex items-center w-12 h-12", avatarContainerClassName)}>
        <img src="https://picsum.photos/200" alt="random image" className="w-full rounded-full" />
      </span>
      <div className="w-full">
        <span className={twJoin("font-normal", headingClassName)}>{heading} </span>
        <span className={twJoin("text-sm line-clamp-1 text-[#828282]", subHeadingClassName)}>
          {subHeading}
        </span>
      </div>
    </div>
  );
};
export default UserAvatarCard;
