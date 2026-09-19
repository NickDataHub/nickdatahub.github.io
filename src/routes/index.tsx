import { createFileRoute } from "@tanstack/react-router";

import heroPortrait from "@/assets/hero-portrait.jpg";
import anemodetect from "@/assets/anemodetect.png";
import concussion from "@/assets/concussion.png";
import bonescaffold1 from "@/assets/bonescaffold1.png";
import helmet from"@/assets/helmet.png";
import brain from"@/assets/brain.png";


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
            <a href="#projects" className="transition-colors hover:text-ochre">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-ochre">
              Skills
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
            Available Now
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
              I am a Biomedical Engineering graduate from UTS with a Sub&#8209;Major in Mechanical Engineering.
              <br></br>
              <br></br>
              I enjoy the hands-on side of engineering: taking an idea, building it, testing it and working out how to make it better. What draws me to healthcare is the chance to create something useful for patients and the people caring for them. My projects explore this through medical devices, biomaterials and machine learning.
            </p>
            <div className="animate-[rise_0.8s_var(--ease-out-soft)_0.3s_both] mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ochre"
              >
                View work →
              </a>
              <a
                href="/NicholasDavidResume.pdf"
                download="NicholasDavidResume.pdf"
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
        <section id="projects" className="pb-6 pt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
                Fig. 02 — Selected Work
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
                Projects
              </h2>
            </div>
            <p className="hidden font-mono text-[14px] uppercase tracking-[0.15em] text-ink/45 md:block">
              05 Entries
            </p>
          </div>
          <div className="mt-10 space-y-px bg-hair">
            {/* Project 1 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={anemodetect}
                  alt="anemodetect project screenshot"
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
                    {/*Source ↗*/}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={concussion}
                  alt="concussion project screenshot"
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
                    {/*Source ↗*/}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={bonescaffold1}
                  alt="bone scaffold project screenshot"
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
                    {/*Source ↗*/}
                  </a>
                </div>
              </div>
            </div>
            {/*project 4 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={helmet}
                  alt="helmet project screenshot"
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
                    Designed and prototyped a motorcycle helmet cooling system incorporating phase-change materials to reduce rider head temperature for extended periods. Compared multiple PCM materials and cavity geometries using transient ANSYS Fluent simulations incorporating heat transfer, melting and solidification behaviour.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">Ansys Fluent</span>
                    <span className="border border-hair px-2 py-1">Thermal Analysis</span>
                    <span className="border border-hair px-2 py-1">SolidWorks</span>
                    <span className="border border-hair px-2 py-1">CAD</span>
                    <span className="border border-hair px-2 py-1">CFD</span>


                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    {/*Source ↗*/}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="group grid grid-cols-1 gap-5 bg-paper p-5 transition-colors hover:bg-mist md:grid-cols-12 md:p-6">
              <div className="md:col-span-5">
                <img
                  src={brain}
                  alt="brain project screenshot"
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                    <span>05</span>
                    <span className="h-px flex-1 bg-hair"></span>
                    <span>2025</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    3D Bioprinted Brain Model
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-pretty text-ink/70">
                    Developed a 3D-bioprinted hydrogel model designed to reproduce aspects of brain tissue mechanics and investigate chronic traumatic encephalopathy. Combined biomaterials, cell culture, bioprinting and fluorescence imaging to create a physiologically relevant experimental model.
                  </p>
                  <p className="mt-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-ochre">
                    UTS Tech Festival Outstanding Project Award
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                    <span className="border border-hair px-2 py-1">3D Bioprinting</span>
                    <span className="border border-hair px-2 py-1">Tissue Engineering</span>
                    <span className="border border-hair px-2 py-1">Cell Culturing</span>
                    <span className="border border-hair px-2 py-1">Microscopy</span>
                  </div>
                  <a
                    href="#"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-ochre group-hover:underline"
                  >
                    {/*Source ↗*/}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK + EDUCATION */}
        <section
          id="skills"
          className="grid grid-cols-12 gap-10 border-t border-hair pb-12 pt-16"
        >
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
              Fig. 03 — Capabilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
              Skills
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Professional
                </span>
                <p className="text-pretty text-ink/75">
                  Technical Communication, Teamwork, Problem Solving, Leadership
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Design
                </span>
                <p className="text-pretty text-ink/75">
                  Fusion 360, SolidWorks, CAD, Prototyping, 3D Printing
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Analysis
                </span>
                <p className="text-pretty text-ink/75">
                  ANSYS Fluent, MATLAB, Simulink, Python, ImageJ
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">
                  Fabrication
                </span>
                <p className="text-pretty text-ink/75">
                  Photolithography, Microfabrication, Cleanroom Processes, 3D Bioprinting
                </p>
              </div>
            </div>
          </div>
          <div id="education" className="col-span-12 md:col-span-5">
            <div className="border-t border-ink/15 pt-6 md:border-t-0 md:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ochre">
                Fig. 04 - Record
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
                Education
              </h2>
              <div className="mt-8 space-y-6">
                <div className="border-l border-hair pl-5">
                  <p className="text-xl font-medium">University of Technology Sydney</p>
                  <p className="text-base text-ink/65">
                    B.Eng. (Hons), Biomedical Engineering · Mechanical Engineering Sub-Major
                  </p>
                  <p className="mt-1 font-mono text-[15px] uppercase tracking-[0.15em] text-ink/45">
                    2023 — 2026
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
                href="mailto:nnicdavid@gmail.com"
                className="mt-5 inline-block font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight transition-colors hover:text-ochre"
              >
                nnicdavid@gmail.com
              </a>
              <p className="mt-6 max-w-[42ch] text-pretty text-ink/70">
                Open to full-time Biomedical Engineering roles.
                <br /> I reply within a day.
              </p>
            </div>
            <div className="col-span-12 flex lg:col-span-4 lg:justify-end">
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/nicdavid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.linkedin.com/in/nicdavid/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
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
            © 2026 Nicholas David - Sydney, NSW
          </p>
        </div>
      </footer>
    </div>
  );
}
