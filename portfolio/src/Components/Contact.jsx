import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS");
          alert("The message has been sent.");
        },
        (error) => {
          console.log("FAILED... ", error.text);
          alert("There was a problem sending the message");
        }
      );

    e.target.reset();
  };

  return (
    <div className="p-4 lg:w3/4" id="contact">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="mb-4 flex space-x-4">
          <div className="lg:w1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Name"
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
          </div>

          <div className="lg:w1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="Email"
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="lg:w1/2">
          <textarea
            id="message"
            name="message"
            value={form.message}
            placeholder="Message"
            minLength={5}
            maxLength={350}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300`}
        >
          <div className="flex items-center justify-center gap-2">
            {"Send"}
            <SendIcon />
          </div>
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
