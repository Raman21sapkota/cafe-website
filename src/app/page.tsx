"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative h-screen h-dvh overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
        backgroundSize: "256px 256px",
      }} />

      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(102,120,95,0.2) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.35) 100%)"
        }} />
      </motion.div>

      <div className="relative z-20 h-full flex items-center justify-center px-8 md:px-16 lg:px-20 text-center" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
            className="mb-12"
          >
            <img src="/assets/logo.png" alt="Plated Cafe" className="h-20 md:h-28 w-auto mx-auto opacity-90 rounded-xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easeOut }}
            className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-[-0.03em] font-medium text-white"
          >
            Plated Cafe
            <br />
            <span className="font-normal">Restaurant | Bar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easeOut }}
            className="text-white/60 mt-6 text-base leading-[1.8] tracking-[-0.01em]"
          >
            Cafe in Point Lonsdale
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: easeOut }}
            className="mt-10"
          >
            <Link
              href="/menu"
              className="inline-block px-10 py-4 bg-bg-soft text-text-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              See Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Morning Coffee",
    desc: "The cold breeze of the beach combined with our specialty coffee. Fall in love with every morning.",
    image: "/assets/gallery/490376867-18307955311239569-8346181132405608410-n.jpg",
    align: "left",
  },
  {
    title: "Seasonal Plates",
    desc: "From smashed avo to veggie breakfast, our menu celebrates local produce and coastal flavours.",
    image: "/assets/gallery/450090179-18273329086239569-3113076893365437303-n.jpg",
    align: "right",
  },
  {
    title: "Coastal Dining",
    desc: "By night we transform into a fine dining experience with an authentic Indian-inspired menu.",
    image: "/assets/gallery/469415257-18292946956239569-2039755361749652028-n.jpg",
    align: "left",
  },
];

function ExperiencesSection() {
  return (
    <section className="pt-20 md:pt-24 pb-32 md:pb-48 bg-bg-primary">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
            Our Offerings
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary">
            Signature experiences
          </motion.h2>
        </motion.div>

        <div className="space-y-40 md:space-y-56">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              className={`flex flex-col ${exp.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-20 items-center`}
            >
              <motion.div variants={scaleIn} className="w-full md:w-[55%] overflow-hidden rounded-2xl">
                <img src={exp.image} alt={exp.title} className="w-full h-[450px] md:h-[600px] object-cover hover:scale-105 transition-all duration-1000" />
              </motion.div>
              <motion.div
                variants={fadeUp}
                custom={1}
                className={`w-full md:w-[40%] ${exp.align === "right" ? "md:text-right md:pl-16" : "md:pr-16"}`}
              >
                <h3 className="font-heading text-[clamp(2rem,3.5vw,3.5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-6">{exp.title}</h3>
                <p className="text-text-muted text-base md:text-lg leading-[1.8] tracking-[-0.01em]">{exp.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-32 md:py-48 relative" style={{ background: "linear-gradient(180deg, #FBF8F3 0%, #F3EBDD 100%)" }}>
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[55%] overflow-hidden rounded-2xl"
          >
            <motion.img variants={scaleIn} src="/assets/gallery/486496971-1216110510522174-181479589556670364-n.jpg" alt="Plated Cafe interior" className="w-full h-[500px] md:h-[650px] object-cover" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[40%]"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-8">
              Plated with care,
              <br />
              <span className="italic font-light">every time</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base md:text-lg leading-[1.8] tracking-[-0.01em] mb-8">
              Nestled in the heart of Point Lonsdale, Plated Cafe is your local go-to for great coffee, fresh food, and relaxed coastal vibes. We are passionate about serving up delicious, locally sourced meals — from hearty breakfasts and seasonal lunches to sweet treats baked in-house.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
              >
                Read more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  "/assets/gallery/491460898-18308054890239569-886344610931633980-n.jpg",
  "/assets/gallery/490376867-18307955311239569-8346181132405608410-n.jpg",
  "/assets/gallery/469415257-18292946956239569-2039755361749652028-n.jpg",
  "/assets/gallery/486496971-1216110510522174-181479589556670364-n.jpg",
  "/assets/gallery/435475988-18262689397239569-3696141367219778410-n.jpg",
  "/assets/gallery/450090179-18273329086239569-3113076893365437303-n.jpg",
  "/assets/gallery/489611912-18307310593239569-7384199922442893531-n.jpg",
];

function GallerySection() {
  return (
    <section className="py-32 md:py-48 bg-bg-primary">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary">
            Gallery
          </motion.h2>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 md:gap-7 space-y-5 md:space-y-7">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: i * 0.1, ease: easeOut },
                },
              }}
              className="break-inside-avoid overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover hover:scale-[1.03] transition-all duration-1000 rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuPreviewSection() {
  return (
    <section className="py-32 md:py-48 relative" style={{ background: "linear-gradient(180deg, #FBF8F3 0%, #F3EBDD 100%)" }}>
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="text-accent-brass text-sm font-medium tracking-[0.02em] mb-4">
            Our Menu
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-text-primary mb-6">
            Breakfast, lunch & drinks
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-text-muted text-base md:text-lg leading-[1.8] tracking-[-0.01em] mb-10 max-w-md mx-auto">
            From morning coffee to evening dining — explore our full menu.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-10 py-4 bg-olive-primary text-bg-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(102,120,95,0.18)] transition-all duration-500"
            >
              See Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/gallery/435475988-18262689397239569-3696141367219778410-n.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} custom={0} className="text-white/75 text-sm font-medium tracking-[0.02em] mb-5">
            Join us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-white mb-6"
          >
            Reserve your table
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-white text-lg leading-[1.8] tracking-[-0.01em] mb-10 max-w-md mx-auto">
            Experience coastal dining at its finest. Book your table today.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-bg-soft text-text-primary text-sm font-medium tracking-[0.02em] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              Make a Reservation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="pt-20 md:pt-28 pb-0 bg-bg-primary text-center">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: "1400px" }}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut }}
            className="text-text-soft text-lg md:text-xl leading-[1.8] tracking-[-0.01em] max-w-2xl mx-auto"
          >
            Situated right on the beach in Point Lonsdale. Enjoy the views along with awesome food and coffee.
          </motion.p>
        </div>
      </section>

      <ExperiencesSection />
      <StorySection />
      <GallerySection />
      <MenuPreviewSection />
      <CtaSection />
    </>
  );
}
