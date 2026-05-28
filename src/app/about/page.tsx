"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: easeOut },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: easeOut },
  },
};

export default function About() {
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
              About
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.04em] font-medium text-text-primary">
              Plated with purpose
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 md:pb-48 bg-bg-primary">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[55%] overflow-hidden rounded-2xl"
            >
              <motion.img
                variants={scaleIn}
                src="/assets/gallery/469415257-18292946956239569-2039755361749652028-n.jpg"
                alt="Plated Cafe interior"
                className="w-full h-[450px] md:h-[600px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[40%]"
            >
              <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
                Our Philosophy
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-8">
                Good food, good coffee,
                <br />
                <span className="italic font-light">good company</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em] space-y-5">
                <p>
                  Nestled in the heart of Point Lonsdale, Plated Cafe is your local go-to for great coffee, fresh food, and relaxed coastal vibes.
                </p>
                <p>
                  We are passionate about serving up delicious, locally sourced meals — from hearty breakfasts and seasonal lunches to sweet treats baked in-house.
                </p>
                <p>
                  Whether you are a local or just passing through, our friendly team is here to make you feel right at home.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48" style={{ background: "linear-gradient(180deg, #FBF8F3 0%, #F3EBDD 100%)" }}>
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[55%] overflow-hidden rounded-2xl"
            >
              <motion.img
                variants={scaleIn}
                src="/assets/gallery/491460898-18308054890239569-886344610931633980-n.jpg"
                alt="Coffee at Plated Cafe"
                className="w-full h-[450px] md:h-[600px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[40%]"
            >
              <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
                Locally Sourced
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-8">
                Fresh from
                <br />
                <span className="italic font-light">the region</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em]">
                We believe in supporting our local community. Our ingredients are thoughtfully sourced from the Bellarine Peninsula and surrounding regions, ensuring every dish is as fresh as it is flavourful.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-bg-primary">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
              Visit Us
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-8">
              Cafe by day,
              <br />
              <span className="italic font-light">restaurant by night</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base leading-[1.8] tracking-[-0.01em] mb-10 max-w-xl">
              Situated right opposite the main beach at Point Lonsdale with beautiful ocean views.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
              >
                See Our Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-text-primary/20 text-text-primary text-sm font-medium tracking-[0.02em] rounded-full hover:border-accent-brass hover:text-accent-brass hover:-translate-y-0.5 transition-all duration-500"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
