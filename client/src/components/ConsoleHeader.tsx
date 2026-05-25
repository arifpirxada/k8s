interface ConsoleHeaderProps {
  systemStatus?: string;
}

export function ConsoleHeader({ systemStatus = "SYSTEM ONLINE" }: ConsoleHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
      <div>
        <h1 className="text-5xl font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_18px_rgba(0,255,255,0.7)]">
          CyberMail
        </h1>
        <p className="text-cyan-500 mt-2 tracking-widest uppercase text-sm">
          Neural Communication Console
        </p>
      </div>

      <div className="border border-fuchsia-500 px-5 py-2 rounded-xl bg-fuchsia-500/10 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
        <span className="text-fuchsia-300 font-semibold tracking-widest text-sm animate-pulse">
          {systemStatus}
        </span>
      </div>
    </div>
  );
}
