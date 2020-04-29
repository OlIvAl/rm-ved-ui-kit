import React, { FC } from "react";

const SubstitutedIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6c2.1524944 0 3.907886 2.5502991 3.9964909 5.7463716L8 12H0l.0035091-.2536284C.0921141 8.5502991 1.8475056 6 4 6zm0-6c1.6568543 0 3 1.3431457 3 3S5.6568543 6 4 6C2.3431458 6 1 4.6568543 1 3s1.3431458-3 3-3z"
        fill="#3A3B3D"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SubstitutedIcon;
