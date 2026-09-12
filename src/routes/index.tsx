import { createFileRoute } from "@tanstack/react-router";

import heroPortrait from "@/assets/hero-portrait.jpg";
import projectLedgerlite from "@/assets/project-ledgerlite.jpg";
import projectTessera from "@/assets/project-tessera.jpg";
import projectFieldnote from "@/assets/project-fieldnote.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicholas H. David, Biomedical and Mechanical Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nicholas David, a graduate biomedical engineer designing and building medical technologies across devices, biomaterials, prototyping and machine learning.",
      },
      { property: "og:title", content: "Nicholas H. David, Biomedical and Mechanical Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Nicholas David, a graduate biomedical engineer designing and building medical technologies across devices, biomaterials, prototyping and machine learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased selection:bg-ochre/20 selection:text-ink">
      <header className="sticky top-0 z-20 border-b border-hair bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold tracking-tight">
              N. David
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 sm:inline">
              Engineering Portfolio
            </span>
          </div>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/60 sm:flex">
            <a href="#work" className="transition-colors hover:text-ochre">
              Work
            </a>
            <a href="#stack" className="transition-colors hover:text-ochre">
              Stack
            </a>
            <a href="#education" className="transition-colors hover:text-ochre">
              Education
            </a>
            <a href="#contact" className="transition-colors hover:text-ochre">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 border border-ink/20 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-ochre hover:text-ochre sm:inline-flex"
          >
            Available &apos;25
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6">
        {/* HERO */}
        <section className="grid grid-cols-12 gap-6 pb-12 pt-16">
          <div className="col-span-12 lg:col-span-8">
            <p className="animate-[fade_0.6s_var(--ease-out-soft)_both] font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
              Fig. 01 — Introduction
            </p>
            <h1 className="animate-[rise_0.8s_var(--ease-out-soft)_0.1s_both] mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.92] tracking-tight text-balance">
              Nicholas H. David<span className="text-ochre">.</span>
            </h1>
            <p className="animate-[rise_0.8s_var(--ease-out-soft)_0.2s_both] mt-7 max-w-[46ch] text-lg text-pretty text-ink/70">
              Graduate Biomedical Engineer from the University of Technology Sydney,
              with a sub-major in Mechanical Engineering. I design and build practical
              healthcare technologies across medical devices, prototyping, biomaterials,
              microfabrication and machine learning.
            </p>
            <div className="animate-[rise_0.8s_var(--ease-out-soft)_0.3s_both] mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ochre"
              >
                View work →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-ink/20 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.15em] transition-colors hover:border-ochre hover:text-ochre"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="col-span-12 flex gap-4 lg:col-span-4 lg:flex-col">
            <div className="animate-[fade_0.8s_var(--ease-out-soft)_0.3s_both] grid flex-1 place-items-center overflow-hidden rounded-[min(1vw,12px)] bg-mist outline outline-1 -outline-offset-1 outline-black/5">
              <img
                src={heroPortrait}
                alt="Nicholas David"
                width={1024}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="hidden flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50 lg:flex">
              <span>Ref. GM-2025</span>
              <span>Scale 1:1</span>
              <span>Sheet 01 / 04</span>
            </div>
          </div>
        </section>

        {/* META STRIP */}
        <section className="grid grid-cols-2 gap-6 border-t border-hair py-6 md:grid-cols-12">
          <div className="animate-[fade_0.6s_var(--ease-out-soft)_both] md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              Focus
            </p>
            <p className="mt-1 font-medium">Medical Devices</p>
          </div>

          <div className="animate-[fade_0.6s_var(--ease-out-soft)_0.1s_both] md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              Degree
            </p>
            <p className="mt-1 font-medium">
              B.Eng. (Hons), Biomedical Engineering
              <br />
              Mechanical Engineering Sub-Major
            </p>
          </div>

          <div className="animate-[fade_0.6s_var(--ease-out-soft)_0.2s_both] md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              GPA
            </p>
            <p className="mt-1 font-medium">6.5 / 7.0</p>
          </div>

          <div className="animate-[fade_0.6s_var(--ease-out-soft)_0.3s_both] md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              Location
            </p>
            <p className="mt-1 font-medium">Sydney, NSW</p>
          </div>
        </section>

         {/* WORK */}
        <section id="work" className="pb-6 pt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
                Fig. 02 — Selected Work
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
                Projects
              </h2>
            </div>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45 md:block">
              03 Entries
            </p>
          </div>
          <div className="mt-10 space-y-px bg-hair">
            {/* Project 1 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={projectLedgerlite}
                  alt="Ledgerlite project screenshot"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    <span>01</span>
                    <span className="h-px flex-1 bg-hair"></span>
                    <span>2026</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    AnemoDetect
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-ink/70">
                    Developed a smartphone-oriented machine-learning concept to
                    classify anaemic vs non-anaemic patients using conjunctival pallor images. 
                    Work has included processing datasets, automated ROI extraction, image preprocessing, 
                    Python/Google Colab, transfer learning/CNN selection, dataset analysis and deployment considerations. 
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">Python</span>
                    <span className="border border-hair px-2 py-1">
                      Pandas
                    </span>
                    <span className="border border-hair px-2 py-1">Machine Learning</span>
                    <span className="border border-hair px-2 py-1">web/app development</span>
                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={projectTessera}
                  alt="Tessera project screenshot"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    <span>02</span>
                    <span className="h-px flex-1 bg-hair"></span>
                    <span>2026</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    Rapid Sideline Concussion Detection
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-ink/70">
                    Developed a point-of-care lateral flow assay concept for concussion screening using salivary S100B as a biomarker. Combined assay development with nanoparticle enhancement, UV-Vis characterisation and quantitative image analysis for semi-quantitative test interpretation.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">Lateral flow assay</span>
                    <span className="border border-hair px-2 py-1">
                      Biosensors
                    </span>
                    <span className="border border-hair px-2 py-1">
                      Matlab
                    </span>
                    <span className="border border-hair px-2 py-1">
                      Clinical studies
                    </span>
                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={projectFieldnote}
                  alt="Fieldnote project screenshot"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    <span>03</span>
                    <span className="h-px flex-1 bg-hair"></span>
                    <span>2026</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    Bone Regeneration Scaffold
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-ink/70">
                    Designed an RGD-functionalised scaffold for bone regeneration using GelMA, alginate, collagen and hydroxyapatite. The project investigates endothelial network formation and stromal-cell proliferation while comparing RGD-functionalised and control scaffold geometries. Incorporated bone stromal cells and mesenchymal stem cells.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">
                      3D Bioprinting
                    </span>
                    <span className="border border-hair px-2 py-1">
                      Tissue Engineering
                    </span>
                    <span className="border border-hair px-2 py-1">Cell Culturing</span>
                    <span className="border border-hair px-2 py-1">Biomaterials</span>
                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    Read ↗
                  </a>
                </div>
              </div>
            </div>
            {/*project 4 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={projectFieldnote}
                  alt="Fieldnote project screenshot"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    <span>04</span>
                    <span className="h-px flex-1 bg-hair"></span>
                    <span>2026</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    Phase Change Material Cooling Helmet
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-ink/70">
                    A mesh sensor dashboard for a capstone with the
                    Environmental Systems lab. Offline-first sync, 90+ nodes,
                    sub-second chart updates.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">
                      TypeScript
                    </span>
                    <span className="border border-hair px-2 py-1">
                      SQLite
                    </span>
                    <span className="border border-hair px-2 py-1">D3</span>
                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    Read ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK + EDUCATION */}
        <section
          id="stack"
          className="grid grid-cols-12 gap-10 border-t border-hair pt-16"
        >
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
              Fig. 03 — Capabilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
              Stack
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Languages
                </span>
                <p className="text-pretty text-ink/75">
                  Go, Rust, TypeScript, Python, SQL, Bash
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Systems
                </span>
                <p className="text-pretty text-ink/75">
                  Postgres, Redis, Kafka, gRPC, Docker, Kubernetes
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Tooling
                </span>
                <p className="text-pretty text-ink/75">
                  Terraform, GitHub Actions, Playwright, Grafana
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Practice
                </span>
                <p className="text-pretty text-ink/75">
                  Test-driven design, profiling, incident write-ups, code
                  review
                </p>
              </div>
            </div>
          </div>
          <div id="education" className="col-span-12 md:col-span-5">
            <div className="border-t border-ink/15 pt-6 md:border-t-0 md:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
                Fig. 04 — Record
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
                Education
              </h2>
              <div className="mt-8 space-y-6">
                <div className="border-l border-hair pl-5">
                  <p className="font-medium">University of Carthage</p>
                  <p className="text-sm text-ink/65">
                    B.S. Computer Science · Systems Concentration
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    2021 — 2025
                  </p>
                </div>
                <div className="border-l border-hair pl-5">
                  <p className="font-medium">Northfield Labs</p>
                  <p className="text-sm text-ink/65">
                    Software Engineering Intern · Infrastructure
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    Summer 2024
                  </p>
                </div>
                <div className="border-l border-hair pl-5">
                  <p className="font-medium">University of Carthage</p>
                  <p className="text-sm text-ink/65">
                    Teaching Assistant · CS 401 Distributed Systems
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-hair pb-16 pt-20"
        >
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
                Fig. 05 — Correspondence
              </p>
              <a
                href="mailto:grace@gracemarsh.dev"
                className="mt-5 inline-block font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight transition-colors hover:text-ochre"
              >
                grace@gracemarsh.dev
              </a>
              <p className="mt-6 max-w-[42ch] text-pretty text-ink/70">
                Open to full-time software engineering roles starting June
                2025. I reply within a day.
              </p>
            </div>
            <div className="col-span-12 flex lg:col-span-4 lg:justify-end">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="border border-ink/20 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-ochre hover:text-ochre"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="border border-ink/20 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-ochre hover:text-ochre"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hair">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
            © 2025 Grace Marsh — Boston, MA
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
            Typeset in Fraunces &amp; Inter · No trackers
          </p>
        </div>
      </footer>
    </div>
  );
}
