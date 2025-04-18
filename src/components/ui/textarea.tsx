import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import * as React from "react";
import { cn } from "~/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 200;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #19E2A3,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-xl p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `dark:placeholder-text-neutral-600 duration-400 flex w-full rounded-xl border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-neutral-400 focus-visible:outline-none 
            focus-visible:ring-[2px] focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 
            group-hover/input:shadow-none dark:bg-zinc-800 
            dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] 
            dark:focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
