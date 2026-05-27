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

export default function Menu() {
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
              Our Menu
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.04em] font-medium text-text-primary">
              Breakfast, lunch
              <br />
              <span className="italic font-light">& dinner</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em] mt-8 max-w-xl">
              From morning coffee by the beach to an intimate evening dinner — explore what we have crafted for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 md:pb-48 bg-bg-primary">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="border-t border-black/10 py-12"
            >
              <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-2">
                Daytime
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-2">
                Breakfast & Lunch
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-text-muted mb-8">
                Served daily from 7am
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <a
                  href="https://platedcafe.com.au/data/files/plated_menu_new_a4_bf_l_drinks_2411.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
                >
                  Download Menu
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="border-t border-black/10 py-12"
            >
              <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-2">
                Evening
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-2">
                Dinner
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-text-muted mb-8">
                Evening service from 5:30pm
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <a
                  href="https://platedcafe.com.au/data/files/dinnermenuplated1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
                >
                  Download Menu
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48" style={{ background: "linear-gradient(180deg, #FBF8F3 0%, #F3EBDD 100%)" }}>
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
              Dietary
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-8">
              We cater to
              <br />
              <span className="italic font-light">all needs</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em]">
              Gluten-free (GFO) and vegan options (VO) are available across our menu. Please let our staff know about any dietary requirements when ordering.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
