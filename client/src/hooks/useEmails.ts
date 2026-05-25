import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import type { Email, EmailFormState } from "../types";

const INITIAL_EMAILS: Email[] = [
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
];

export function useEmails() {
  const [emails, setEmails] = useState<Email[]>(INITIAL_EMAILS);
  const [form, setForm] = useState<EmailFormState>({
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

    const newEmail: Email = {
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

  return {
    emails,
    form,
    handleChange,
    handleSubmit,
  };
}
