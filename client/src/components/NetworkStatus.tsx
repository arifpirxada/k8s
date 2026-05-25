interface NetworkStatusProps {
  status?: string;
  efficiency?: string;
}

export function NetworkStatus({ status = "Stable", efficiency = "88%" }: NetworkStatusProps) {
  return (
    <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-black/40 p-4">
      <div className="flex items-center justify-between text-sm tracking-wide">
        <span className="text-cyan-500 uppercase">Network Status</span>
        <span className="text-green-400">{status}</span>
      </div>

      <div className="mt-3 h-2 rounded-full bg-cyan-950 overflow-hidden">
        <div 
          className="h-full bg-linear-to-r from-cyan-400 to-fuchsia-500 rounded-full animate-pulse"
          style={{ width: efficiency }}
        />
      </div>
    </div>
  );
}
