"use client";

import { useState } from "react";
import { saveEmail } from "@/utils/firebase";

function SoonForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter an email.");
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        setMessage("");
      }, 5000);
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await saveEmail(email);

      setMessage("Talk soon. Thanks.");
      setShowMessage(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        setMessage("");
        setLoading(false);
      }, 5000);
    }
  };

  return (
    <div>
      {showMessage ? (
        <div className="flex items-center justify-center">
          <p className="text-xl">{message}</p>
        </div>
      ) : (
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
        </form>
      )}
    </div>
  );
}

export default SoonForm;
