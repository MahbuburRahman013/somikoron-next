import PropTypes from "prop-types";
import { ReactNode } from "react";

function Button({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`lg:py-4  py-2 2xl:text-xl text-xl font-semibold w-fit px-12 hover:scale-[1.02] hover:text-[#2D9F89] text-gray-200 bg-[#2D9F89] border rounded-md border-[#2D9F89] hover:bg-transparent transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
};
