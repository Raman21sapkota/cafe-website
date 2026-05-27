"use client";

import { motion } from "framer-motion";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: easeOut },
  }),
};

export default function Contact() {
  return (
    <>
      <section className="pt-44 pb-16 bg-bg-primary">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.04em] font-medium text-text-primary">
              Get in touch
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em] mt-8 max-w-xl">
              We would love to hear from you. Whether it is a reservation, an enquiry, or just to say hello.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 md:pb-48 bg-bg-primary">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-1/2"
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-10">
                Send us a message
              </motion.h2>
              <motion.form variants={fadeUp} custom={1} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-muted font-medium tracking-[0.02em] mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3.5 bg-white/70 border border-black/10 text-text-primary placeholder:text-stone/40 text-sm focus:outline-none focus:border-accent-brass transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-text-muted font-medium tracking-[0.02em] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-3.5 bg-white/70 border border-black/10 text-text-primary placeholder:text-stone/40 text-sm focus:outline-none focus:border-accent-brass transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-text-muted font-medium tracking-[0.02em] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-3.5 bg-white/70 border border-black/10 text-text-primary placeholder:text-stone/40 text-sm focus:outline-none focus:border-accent-brass transition-colors"
                    placeholder="Reservation, enquiry..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-text-muted font-medium tracking-[0.02em] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-3.5 bg-white/70 border border-black/10 text-text-primary placeholder:text-stone/40 text-sm focus:outline-none focus:border-accent-brass transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="button"
                  className="px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
                >
                  Send Message
                </button>
              </motion.form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-1/2"
            >
              <motion.div variants={fadeUp} custom={0} className="space-y-12">
                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Visit Us</h3>
                  <div className="text-text-muted text-base leading-[1.8]">
                    <p>79/81 Point Lonsdale Rd</p>
                    <p>Point Lonsdale, VIC 3225</p>
                    <p>Australia</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Call Us</h3>
                  <a href="tel:0352506754" className="text-accent-brass hover:text-olive-dark transition-colors">
                    0352506754
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Opening Hours</h3>
                  <div className="text-text-muted text-base leading-[1.8] space-y-1">
                    <p className="text-text-primary font-medium">Open Every Day</p>
                    <p><span className="text-accent-brass">Summer:</span> 7am – 3:30pm & 5:30pm – 9pm</p>
                    <p><span className="text-accent-brass">Winter:</span> 7am – 3:30pm</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-6">
                    <a
                      href="https://www.facebook.com/p/Plated-Point-Lonsdale-100063697087433"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-brass transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a
                      href="https://instagram.com/platedpointlonsdale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-brass transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCatA9aqqRlz-q30ryAqrUfm88Hag2DaPQ&q=79%2F81+Point+Lonsdale+Rd%2C+Point+Lonsdale%2C+VIC++3225%2C+Australia&zoom=15"
          width="100%"
          height="100%"
          style={{ filter: "grayscale(100%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Plated Cafe location"
        />
      </section>
    </>
  );
}
