import { type ChangeEvent, type SyntheticEvent } from "react";
import type { EmailFormState } from "../types";

interface TransmitFormProps {
  form: EmailFormState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
}

export function TransmitForm({ form, onChange, onSubmit }: TransmitFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
          Sender Address
        </label>

        <input
          type="email"
          name="sender"
          value={form.sender}
          onChange={onChange}
          placeholder="agent@cybergrid.ai"
          className="w-full rounded-2xl border border-cyan-500/30 bg-black/60 px-4 py-3 text-cyan-100 placeholder:text-cyan-700 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={onChange}
          placeholder="Encrypted mission details"
          className="w-full rounded-2xl border border-cyan-500/30 bg-black/60 px-4 py-3 text-cyan-100 placeholder:text-cyan-700 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-linear-to-r from-cyan-400 to-fuchsia-500 py-3 font-black uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] active:scale-[0.98] cursor-pointer"
      >
        Send Transmission
      </button>
    </form>
  );
}
