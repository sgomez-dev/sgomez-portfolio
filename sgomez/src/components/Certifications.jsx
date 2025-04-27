"use client";

import { CERTIFICATION } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section className="pt-20" id="certification">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Certifications
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-8 p-10 gap-4"
      >
        {CERTIFICATION.map((cert, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-md">{cert.institution}</p>
            <p className="text-sm text-stone-300">{cert.date}</p>
            <a
              className="mt-2 text-base text-blue-300"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
