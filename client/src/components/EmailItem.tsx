import type { Email } from "../types";

interface EmailItemProps {
  email: Email;
}

export function EmailItem({ email }: EmailItemProps) {
  return (
    <div className="group px-6 py-5 hover:bg-cyan-400/5 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-fuchsia-400 font-semibold tracking-wide group-hover:text-fuchsia-300 transition">
            {email.sender}
          </p>

          <h3 className="text-lg font-bold mt-1 text-cyan-100 group-hover:translate-x-1 transition-transform duration-300">
            {email.subject}
          </h3>
        </div>

        <span className="text-xs tracking-widest uppercase text-cyan-500 whitespace-nowrap">
          {email.time}
        </span>
      </div>
    </div>
  );
}
