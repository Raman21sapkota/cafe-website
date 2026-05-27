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

export default function Location() {
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
              Location
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.04em] font-medium text-text-primary">
              Find us
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base md:text-lg mt-8 max-w-xl leading-[1.8] tracking-[-0.01em]">
              79/81 Point Lonsdale Rd, Point Lonsdale, VIC 3225, Australia
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
              <motion.div variants={fadeUp} custom={0} className="space-y-10">
                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Address</h3>
                  <div className="text-text-muted text-base md:text-lg leading-[1.8]">
                    <p>79/81 Point Lonsdale Rd</p>
                    <p>Point Lonsdale, VIC 3225</p>
                    <p>Australia</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Phone</h3>
                  <a href="tel:0352506754" className="text-accent-brass hover:text-olive-dark transition-colors text-base md:text-lg">
                    0352506754
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-4">Hours</h3>
                  <div className="text-text-muted text-base md:text-lg leading-[1.8] space-y-1">
                    <p className="text-text-primary font-medium">Open Every Day</p>
                    <p><span className="text-accent-brass">Summer:</span> 7am – 3:30pm & 5:30pm – 9pm</p>
                    <p><span className="text-accent-brass">Winter:</span> 7am – 3:30pm</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-1/2"
            >
              <motion.div variants={scaleIn} className="w-full h-[400px] md:h-[500px]">
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

const scaleIn = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: easeOut },
  },
};
