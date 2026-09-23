"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Bring us the<br /><em>hard part.</em></h2><p>Have a launch, a messy brief, or a brand that no longer fits? Give us the useful version. We&apos;ll reply within two working days.</p><a className="email-link" href="mailto:hello@northstar.studio">hello@northstar.studio <span>↗</span></a></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? <div className="success-message"><span>✳</span><h3>Message received.</h3><p>We&apos;ll be in touch soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another <span>↗</span></button></div> : <><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Project budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $10k</option><option>$10k - $25k</option><option>$25k+</option></select></label><label>How can we help?<textarea name="message" placeholder="A little bit about your project..." rows={4} maxLength={400} value={message} onChange={(event) => setMessage(event.target.value)} required /><span className="character-count">{message.length} / 400</span></label><button className="button button-light" type="submit">Send inquiry <span aria-hidden="true">↗</span></button></>}
        </form>
      </div>
      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">✳</span><span>northstar<span className="brand-dot">.</span></span></a><p>© 2024 Northstar Studio</p><div><a href="#top">Back to top ↑</a></div></footer>
    </section>
  );
}
