import { useState, type ChangeEvent, type SyntheticEvent } from "react";

export default function Home() {
    const [emails, setEmails] = useState([
        {
            id: 1,
            sender: "neo@matrix.io",
            subject: "Mission Update",
            time: "09:41 PM",
        },
        {
            id: 2,
            sender: "security@cybercorp.net",
            subject: "Firewall Breach Detected",
            time: "08:17 PM",
        },
        {
            id: 3,
            sender: "ghost@darkgrid.ai",
            subject: "Encrypted Transmission",
            time: "06:55 PM",
        },
    ]);

    const [form, setForm] = useState({
        sender: "",
        subject: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.sender || !form.subject) return;

        const newEmail = {
            id: Date.now(),
            sender: form.sender,
            subject: form.subject,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setEmails([newEmail, ...emails]);

        setForm({
            sender: "",
            subject: "",
        });
    };

    return (
        <div className="min-h-screen bg-black text-cyan-300 overflow-hidden relative">
            {/* Background Glow */ }
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,0,255,0.15),transparent_40%)]" />

            {/* Grid Overlay */ }
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

            <div className="relative z-10 p-8 max-w-7xl mx-auto">
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
                        <span className="text-fuchsia-300 font-semibold tracking-widest text-sm">
                            SYSTEM ONLINE
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Email List */ }
                    <div className="lg:col-span-2 rounded-3xl border border-cyan-500/40 bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_35px_rgba(0,255,255,0.18)] overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-500/20">
                            <h2 className="text-2xl font-bold tracking-widest uppercase text-cyan-300">
                                Inbox Feed
                            </h2>

                            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                        </div>

                        <div className="divide-y divide-cyan-500/10">
                            { emails.map((email) => (
                                <div
                                    key={ email.id }
                                    className="group px-6 py-5 hover:bg-cyan-400/5 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-fuchsia-400 font-semibold tracking-wide group-hover:text-fuchsia-300 transition">
                                                { email.sender }
                                            </p>

                                            <h3 className="text-lg font-bold mt-1 text-cyan-100 group-hover:translate-x-1 transition-transform duration-300">
                                                { email.subject }
                                            </h3>
                                        </div>

                                        <span className="text-xs tracking-widest uppercase text-cyan-500 whitespace-nowrap">
                                            { email.time }
                                        </span>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>

                    {/* Form */ }
                    <div className="rounded-3xl border border-fuchsia-500/40 bg-fuchsia-500/5 backdrop-blur-xl shadow-[0_0_35px_rgba(255,0,255,0.18)] p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-fuchsia-300">
                                Transmit Email
                            </h2>

                            <p className="text-fuchsia-500 mt-2 text-sm tracking-wide">
                                Inject new data into the neural inbox.
                            </p>
                        </div>

                        <form onSubmit={ handleSubmit } className="space-y-5">
                            <div>
                                <label className="block mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                                    Sender Address
                                </label>

                                <input
                                    type="email"
                                    name="sender"
                                    value={ form.sender }
                                    onChange={ handleChange }
                                    placeholder="agent@cybergrid.ai"
                                    className="w-full rounded-2xl border border-cyan-500/30 bg-black/60 px-4 py-3 text-cyan-100 placeholder:text-cyan-700 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={ form.subject }
                                    onChange={ handleChange }
                                    placeholder="Encrypted mission details"
                                    className="w-full rounded-2xl border border-cyan-500/30 bg-black/60 px-4 py-3 text-cyan-100 placeholder:text-cyan-700 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-linear-to-r from-cyan-400 to-fuchsia-500 py-3 font-black uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] active:scale-[0.98]"
                            >
                                Send Transmission
                            </button>
                        </form>

                        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-black/40 p-4">
                            <div className="flex items-center justify-between text-sm tracking-wide">
                                <span className="text-cyan-500 uppercase">Network Status</span>
                                <span className="text-green-400">Stable</span>
                            </div>

                            <div className="mt-3 h-2 rounded-full bg-cyan-950 overflow-hidden">
                                <div className="h-full w-[88%] bg-linear-to-r from-cyan-400 to-fuchsia-500 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
