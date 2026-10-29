import type { ReactNode } from "react";
import { MediaSlot } from "./MediaSlot";
import type { MediaId } from "@/lib/media";

type Props = {
  /** a single slot, or pass children to stack several (the sticky phone does this) */
  id?: MediaId;
  children?: ReactNode;
  priority?: boolean;
  className?: string;
};

export function PhoneFrame({ id, children, priority, className = "" }: Props) {
  return (
    <div className={`relative mx-auto w-full max-w-[290px] ${className}`}>
      <div className="relative rounded-[3.1rem] bg-[#060607] p-[9px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.14]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.45rem] bg-paper">
          {id ? <MediaSlot id={id} fill priority={priority} /> : children}
          {/* the island */}
          <span className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
      {/* side buttons */}
      <span className="absolute -left-[3px] top-28 h-9 w-[3px] rounded-l bg-white/20" />
      <span className="absolute -left-[3px] top-44 h-14 w-[3px] rounded-l bg-white/20" />
      <span className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-white/20" />
    </div>
  );
}
