"use client";

import { useState } from "react";
import { saveEmail } from "@/utils/firebase";

function SoonForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await saveEmail(email);

      setMessage("Thanks! You'll get updates.");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8"
      >
        <p className="text-xl">Coming Soon</p>

        <input
          type="email"
          placeholder="Enter email for updates"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-48 rounded-full bg-[#fff5f343] px-2 py-1 text-xl placeholder:text-xl focus:ring-0 focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="text-xl hover:opacity-70"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default SoonForm;
