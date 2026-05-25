import { useState, useEffect, type ChangeEvent, type SyntheticEvent } from "react";
import type { Email, EmailFormState } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface ApiEmail {
  _id?: string | number;
  email?: string;
  subject?: string;
  createdAt?: string;
}

export function useEmails() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [form, setForm] = useState<EmailFormState>({
    sender: "",
    subject: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmails = async () => {
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/emails`);
      if (!response.ok) {
        throw new Error("Failed to sync neural feed");
      }
      const data = await response.json();
      if (data.status === "success" && Array.isArray(data.emails)) {
        const mappedEmails: Email[] = (data.emails as ApiEmail[]).map((item) => ({
          id: item._id || Date.now(),
          sender: item.email || "unknown@cybergrid.ai",
          subject: item.subject || "Encrypted Transmission",
          time: item.createdAt
            ? new Date(item.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Just Now",
        }));
        setEmails([...mappedEmails].reverse());
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to establish uplink";
      setError(message);
      console.error("Failed to fetch emails:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    
    // Defer fetch outside the initial render cycle to avoid cascading renders
    const timer = setTimeout(() => {
      if (active) {
        fetchEmails();
      }
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.sender || !form.subject) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.sender,
          subject: form.subject,
        }),
      });

      if (!response.ok) {
        throw new Error("Uplink failed during transmission");
      }

      await fetchEmails();

      setForm({
        sender: "",
        subject: "",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to transmit packet";
      setError(message);
      console.error("Failed to send email:", err);
      setLoading(false);
    }
  };

  return {
    emails,
    form,
    loading,
    error,
    handleChange,
    handleSubmit,
    refetch: fetchEmails,
  };
}
