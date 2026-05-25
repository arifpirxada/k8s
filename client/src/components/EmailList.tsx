import type { Email } from "../types";
import { EmailItem } from "./EmailItem";

interface EmailListProps {
  emails: Email[];
}

export function EmailList({ emails }: EmailListProps) {
  return (
    <div className="lg:col-span-2 rounded-3xl border border-cyan-500/40 bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_35px_rgba(0,255,255,0.18)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-500/20">
        <h2 className="text-2xl font-bold tracking-widest uppercase text-cyan-300">
          Inbox Feed
        </h2>

        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
      </div>

      <div className="divide-y divide-cyan-500/10">
        {emails.length === 0 ? (
          <div className="px-6 py-10 text-center text-cyan-500 tracking-wider">
            NO ACTIVE TRANSMISSIONS
          </div>
        ) : (
          emails.map((email) => (
            <EmailItem key={email.id} email={email} />
          ))
        )}
      </div>
    </div>
  );
}
