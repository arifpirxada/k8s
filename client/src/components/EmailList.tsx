import type { Email } from "../types";
import { EmailItem } from "./EmailItem";

interface EmailListProps {
  emails: Email[];
  loading?: boolean;
  error?: string | null;
}

export function EmailList({ emails, loading = false, error = null }: EmailListProps) {
  return (
    <div className="lg:col-span-2 rounded-3xl border border-cyan-500/40 bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_35px_rgba(0,255,255,0.18)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-500/20">
        <h2 className="text-2xl font-bold tracking-widest uppercase text-cyan-300">
          Inbox Feed
        </h2>

        <div className={`h-3 w-3 rounded-full ${error ? "bg-rose-500 animate-ping shadow-[0_0_12px_rgba(244,63,94,0.9)]" : loading ? "bg-amber-400 animate-spin" : "bg-green-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.9)]"}`} />
      </div>

      <div className="divide-y divide-cyan-500/10">
        {error ? (
          <div className="px-6 py-12 text-center">
            <p className="text-rose-400 font-bold tracking-widest uppercase animate-pulse">
              [UPLINK INTERRUPTED]
            </p>
            <p className="text-rose-500/80 text-xs mt-2 font-mono">
              {error}
            </p>
          </div>
        ) : loading && emails.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="text-cyan-500 font-semibold tracking-widest uppercase animate-pulse">
              SYNCING NEURAL FEED...
            </p>
            <div className="mt-4 mx-auto h-1 w-24 bg-cyan-950 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-1/2 rounded-full animate-[loading_1.5s_infinite_linear]" />
            </div>
          </div>
        ) : emails.length === 0 ? (
          <div className="px-6 py-12 text-center text-cyan-500 tracking-wider">
            NO ACTIVE TRANSMISSIONS FOUND
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
