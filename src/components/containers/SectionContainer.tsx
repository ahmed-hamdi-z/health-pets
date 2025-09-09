import { forwardRef, type ForwardedRef, type HTMLAttributes, type ReactNode } from "react";
import { trim } from "../../utils/general";

const SectionContainer = forwardRef(
  (
    {
      children,
      className = "",
      wraperClassName = "",
      ...attributes
    }: Readonly<{
      children: ReactNode;
      className?: string;
      wraperClassName?: string;
    }> &
      HTMLAttributes<HTMLElement>,
    ref: ForwardedRef<HTMLElement>
  ) => (
    <section
      id="section-container"
      ref={ref}
      className={trim(` 
        flex
        w-full
        flex-col
        box-border
        mb-16
        ${className}`)}
      {...attributes}
    >
      <div
        id="section-wrapper"
        className={trim(`
          flex
          flex-col
          w-full
          2xl:w-[70%]
          containerPadding
          ${wraperClassName}`)}
      >
        {children}
      </div>
    </section>
  )
);

export default SectionContainer;
