import { useEmails } from "../hooks/useEmails";
import { ConsoleHeader } from "../components/ConsoleHeader";
import { EmailList } from "../components/EmailList";
import { TransmitForm } from "../components/TransmitForm";
import { NetworkStatus } from "../components/NetworkStatus";

export default function Home() {
  const { emails, form, handleChange, handleSubmit } = useEmails();

  return (
    <div className="min-h-screen bg-black text-cyan-300 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,0,255,0.15),transparent_40%)]" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <ConsoleHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EmailList emails={emails} />

          <div className="rounded-3xl border border-fuchsia-500/40 bg-fuchsia-500/5 backdrop-blur-xl shadow-[0_0_35px_rgba(255,0,255,0.18)] p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-fuchsia-300">
                Transmit Email
              </h2>
              <p className="text-fuchsia-500 mt-2 text-sm tracking-wide">
                Inject new data into the neural inbox.
              </p>
            </div>

            <TransmitForm 
              form={form} 
              onChange={handleChange} 
              onSubmit={handleSubmit} 
            />

            <NetworkStatus />
          </div>
        </div>
      </div>
    </div>
  );
}
