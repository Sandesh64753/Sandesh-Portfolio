import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import Reveal from "@/components/reveal";
import ProjectGallery from "@/components/project-gallery";

const disciplines = [
  {
    number: "A / 01",
    title: "Generative AI",
    detail: "LLMs · RAG · Prompt engineering · Agentic AI",
    state: "Primary learning direction",
    icon: BrainCircuit,
  },
  {
    number: "A / 02",
    title: "Machine Learning",
    detail: "Scikit-learn · Data preparation · Model evaluation",
    state: "Applied in projects",
    icon: Sparkles,
  },
  {
    number: "A / 03",
    title: "Deep Learning & Vision",
    detail: "TensorFlow · PyTorch · CNNs · OpenCV",
    state: "Applied in projects",
    icon: ShieldCheck,
  },
  {
    number: "A / 04",
    title: "Full-Stack Engineering",
    detail: "React · Node.js · FastAPI · MongoDB · PostgreSQL",
    state: "Product development",
    icon: Code2,
  },
];

const archive = [
  ["Potato Disease Prediction", "Deep learning plant disease classification", "Computer vision", "https://github.com/Sandesh64753/Potato-Disease-Prediction"],
  ["Rainfall Prediction", "Machine learning prediction application", "Scikit-learn · FastAPI", "https://github.com/Sandesh64753/Rainfall-Prediction"],
  ["Bangalore Home Price Prediction", "Regression-based property price estimate", "Scikit-learn · Flask", "https://github.com/Sandesh64753/Price-Prediction"],
  ["Dogstudio Website Clone", "Interactive 3D web experience", "React · Three.js · GSAP", "https://github.com/Sandesh64753/Dog-Studio"],
  ["Fresh Mart", "Inventory management application", "Django", "https://github.com/Sandesh64753/Fresh-Mart"],
  ["Mystery Message", "Full-stack messaging application", "Next.js", "https://github.com/Sandesh64753/mystery-message"],
  ["Data Science Experiments", "Classification, feature selection, tuning and boosting", "XGBoost · LightGBM", "https://github.com/Sandesh64753/Data-Science-Projects"],
];

const certifications = [
  "Introduction to Retrieval-Augmented Generation — IBM SkillsBuild",
  "Ethical Considerations for Generative AI — IBM SkillsBuild",
  "Introduction to Artificial Intelligence — IBM SkillsBuild",
  "Agentic AI, Generative AI and Reinforcement Learning — Udemy",
  "Data Science and AI Advanced Full Course — Udemy",
  "Python 3: Beginner to Advanced — Udemy",
  "Linux Tutorial — Great Learning",
  "Get Started Building with Power BI — Microsoft",
  "MERN Stack Bootcamp — GeeksforGeeks",
  "Web Development Internship Completion — Kodbud",
];

function SectionLabel({ number, children, right }) {
  return (
    <Reveal className="section-label">
      <span>{number} / {children}</span>
      {right && <span>{right}</span>}
    </Reveal>
  );
}

function SkillCard({ item, index }) {
  const Icon = item.icon;
  return (
    <Reveal className="discipline" delay={index * 0.06}>
      <span className="discipline-number">{item.number}</span>
      <div className="discipline-main">
        <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
        <small>{item.state}</small>
      </div>
      <ArrowUpRight className="discipline-arrow" size={18} aria-hidden="true" />
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> CSE · ARTIFICIAL INTELLIGENCE · INDIA</p>
          <h1 id="hero-title">Learning how<br />to make <em>intelligence</em><br />useful.</h1>
          <p className="hero-intro">I’m Sandesh — an AI student and builder exploring how machine learning, thoughtful software and human needs meet.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <ArrowDown size={15} aria-hidden="true" /></a>
            <a className="text-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=vairagarsandesh45%40gmail.com&su=Portfolio%20inquiry">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="availability"><span className="availability-icon"><ArrowUpRight size={17} /></span><span>Open to paid internships in<br /><strong>Generative AI · AI/ML · Engineering</strong></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-coordinate"><MapPin size={13} aria-hidden="true" /><span>18°37′N<br />73°48′E</span></div>
          <div className="atlas-orbit orbit-one" /><div className="atlas-orbit orbit-two" />
          <div className="atlas-axis axis-one" /><div className="atlas-axis axis-two" />
          <div className="atlas-object" aria-hidden="true"><span className="object-face face-a" /><span className="object-face face-b" /><span className="object-core" /></div>
          <figure className="hero-portrait">
            <Image src="/assets/sandesh-primary-portrait.jpeg" alt="Sandesh Vairagar in a dark suit against a black studio background" fill priority sizes="(max-width: 760px) 62vw, 30vw" />
            <figcaption><span>FIELD NOTE 01</span><span>THE PERSON BEHIND THE WORK</span></figcaption>
          </figure>
          <span className="hero-index">01 <i>/</i> 09</span>
          <span className="hero-side-note">AN ATLAS OF BECOMING</span>
        </div>
        <a href="#origin" className="scroll-cue"><span />Scroll to explore</a>
      </section>

      <section className="intro-band section-shell" id="origin" aria-labelledby="origin-title">
        <SectionLabel number="01" right="THE STARTING POINT">Origin</SectionLabel>
        <div className="intro-grid">
          <Reveal as="h2" className="display-title" id="origin-title">Ideas become<br /><em>real</em> when you<br />build them.</Reveal>
          <Reveal className="intro-body" delay={0.08}>
            <p>I’m a third-year Computer Science and Engineering student specializing in Artificial Intelligence at Nutan Maharashtra Institute of Engineering and Technology. I like moving between the model, the code and the interface — understanding how each part shapes the experience.</p>
            <p>My current direction is Generative AI: LLM applications, retrieval-augmented generation and agentic systems. I’m building toward that with hands-on work in machine learning, computer vision and full-stack development.</p>
            <a className="text-link" href="#about">A little more about me <ArrowRight size={14} aria-hidden="true" /></a>
          </Reveal>
        </div>
        <div className="origin-foot"><span>BASED IN PIMPRI-CHINCHWAD, MAHARASHTRA</span><span>B.E. CSE (ARTIFICIAL INTELLIGENCE) · 2024—2028</span></div>
      </section>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <SectionLabel number="02" right="BUILT, TESTED, LEARNED FROM">Selected work</SectionLabel>
        <div className="section-heading-row"><div><p className="eyebrow">A few coordinates along the way</p><h2 className="display-title" id="work-title">Selected <em>work</em></h2></div><p className="heading-aside">Projects where intelligent systems<br />meet practical interfaces.</p></div>

        <Reveal as="article" className="project project-chest">
          <div className="project-head"><div><span className="project-number">01 / COMPUTER VISION</span><h3>ChestVision <em>AI</em></h3></div><div className="project-head-actions"><span className="project-status">Research / educational prototype</span><a className="project-link" href="https://github.com/Sandesh64753/chest-X-ray" target="_blank" rel="noreferrer">View source <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
          <p className="project-summary">An explainable chest X-ray analysis prototype bringing classification, lung segmentation and visual interpretation into one workflow.</p>
          <ProjectGallery className="chest-gallery" images={[
            { src: "/assets/projects/chestvision-dashboard.png", alt: "ChestVision AI dashboard showing analysis, comparison and explainability features", caption: "01 — System overview", sizes: "(max-width: 700px) 100vw, 65vw" },
            { src: "/assets/projects/chestvision-analysis.png", alt: "Radiographic analysis screen with Grad-CAM visualization and prediction summary", caption: "02 — Interpretation view" },
            { src: "/assets/projects/chestvision-comparison.png", alt: "ChestVision AI comparative differential screen for two radiographs", caption: "03 — Longitudinal comparison" },
          ]} />
          <div className="project-info-grid">
            <div><span className="meta-label">MY CONTRIBUTION</span><p>Built a four-class DenseNet121 classification workflow, U-Net lung segmentation, Grad-CAM explanations, and two-scan comparison with downloadable reports.</p></div>
            <div><span className="meta-label">TOOLS & METHODS</span><p>Python · TensorFlow / Keras · DenseNet121 · U-Net · FastAPI · Docker</p></div>
            <div><span className="meta-label">RESPONSIBLE USE</span><p>The interface is an educational research prototype, not a clinical diagnostic tool. Model outputs require expert review.</p></div>
          </div>
          <div className="tag-row"><span>Explainable AI</span><span>Medical imaging</span><span>Segmentation</span><span>Full-stack ML</span></div>
        </Reveal>

        <Reveal as="article" className="project project-return" delay={0.06}>
          <div className="project-head"><div><span className="project-number">02 / APPLIED MACHINE LEARNING</span><h3>Product Return <em>Intelligence</em></h3></div><div className="project-head-actions"><a className="project-link" href="https://return-risk-intelligence.onrender.com" target="_blank" rel="noreferrer">Live app <ArrowUpRight size={14} aria-hidden="true" /></a><a className="project-link" href="https://github.com/Sandesh64753/Return-Risk-Intelligence" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
          <p className="project-summary">A multi-tenant platform that estimates return risk before an e-commerce order ships, with analytics that keep predictions separate from verified outcomes.</p>
          <ProjectGallery className="return-gallery" images={[
            { src: "/assets/projects/returnrisk-dashboard.png", alt: "ReturnRisk operations dashboard with company metrics and observed return categories", caption: "01 — Operations dashboard", sizes: "(max-width: 700px) 100vw, 70vw" },
            { src: "/assets/projects/returnrisk-analytics.png", alt: "ReturnRisk historical analytics with category return rates and factor associations", caption: "02 — Historical analytics" },
          ]} />
          <div className="project-info-grid">
            <div><span className="meta-label">MY CONTRIBUTION</span><p>Developed a pre-shipment prediction workflow and company workspace, with outcome analytics and threshold calibration.</p></div>
            <div><span className="meta-label">TOOLS & METHODS</span><p>Python · Scikit-learn · Logistic Regression · FastAPI · React · PostgreSQL · Docker</p></div>
            <div><span className="meta-label">EVALUATION NOTE</span><p>Supplied materials report different ROC-AUC results. I’ve omitted the metric until its evaluation split and source are reconciled.</p></div>
          </div>
          <div className="tag-row"><span>Applied ML</span><span>Risk analytics</span><span>Multi-tenant</span><span>Product engineering</span></div>
        </Reveal>

        <Reveal as="article" className="project project-forever" delay={0.08}>
          <div className="project-head"><div><span className="project-number">03 / FULL-STACK DEVELOPMENT</span><h3>ForeverBuy.in</h3></div><span className="project-status">MERN e-commerce platform</span></div>
          <div className="forever-content">
            <ProjectGallery className="forever-preview-gallery" images={[
              { src: "/assets/foreverbuy-storefront.png", alt: "ForeverBuy.in storefront homepage with its latest arrivals banner and collection navigation", caption: "Customer storefront", sizes: "(max-width: 700px) 100vw, 55vw" },
            ]} />
            <div className="forever-content-copy">
              <p className="project-summary">A customer storefront paired with an administrative dashboard for product and order management.</p>
              <p className="project-description">Built with React, Node.js, Express and MongoDB, with Stripe payment processing, Cloudinary image hosting and responsive Tailwind CSS layouts.</p>
              <div className="project-links">
                <a className="project-link" href="https://forever-frontend-seven-gamma.vercel.app/" target="_blank" rel="noreferrer">Storefront <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="project-link" href="https://forever-admin-one-eta.vercel.app/" target="_blank" rel="noreferrer">Admin dashboard <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="project-link" href="https://github.com/Sandesh64753/Forever" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <div className="tag-row"><span>React</span><span>Node.js</span><span>MongoDB</span><span>Stripe</span><span>Cloudinary</span></div>
            </div>
          </div>
        </Reveal>
        <p className="more-work-note"><span>↳</span> Other experiments are included in the project archive below; each is labeled as additional work until its current status and repository are confirmed.</p>
      </section>

      <section className="blueprint-section" id="blueprint" aria-labelledby="blueprint-title">
        <div className="section-shell blueprint-inner">
          <SectionLabel number="03" right="SKILLS IN PRACTICE">The blueprint</SectionLabel>
          <div className="blueprint-intro"><div><p className="eyebrow">A connected toolkit</p><h2 className="display-title" id="blueprint-title">Different tools.<br /><em>One direction.</em></h2></div><p>Software engineering gives ideas a place to live. AI and machine learning add new ways to learn from information. I’m building across both.</p></div>
          <div className="discipline-map">{disciplines.map((item, index) => <SkillCard key={item.number} item={item} index={index} />)}</div>
          <div className="toolbox"><span className="meta-label">ALSO IN MY TOOLKIT</span><p>Python · Java · C · C++ · JavaScript · NumPy · Pandas · Matplotlib · Flask · Express · MySQL · Docker · Git & GitHub · Vercel · Render</p></div>
          <div className="skills-detail">
            <div><Code2 size={16} aria-hidden="true" /><h3>Programming</h3><p>Python, Java, C, C++, JavaScript</p></div>
            <div><Database size={16} aria-hidden="true" /><h3>Data & platforms</h3><p>MongoDB, PostgreSQL, MySQL, MongoDB Atlas</p></div>
            <div><Terminal size={16} aria-hidden="true" /><h3>Web & deployment</h3><p>React, Next.js, Node.js, FastAPI, Flask, Docker, Vercel, Render</p></div>
          </div>
        </div>
      </section>

      <section className="lab-section section-shell" id="lab" aria-labelledby="lab-title">
        <SectionLabel number="04" right="THE LABORATORY">Open questions</SectionLabel>
        <div className="lab-grid"><div><p className="eyebrow">Current learning direction</p><h2 className="display-title" id="lab-title">The next map<br />is still <em>unfolding.</em></h2></div><div className="lab-copy"><p>I’m expanding my understanding of how LLMs can work with useful context, tools and real application workflows. The aim is to move beyond prompts toward systems that are grounded, evaluated and thoughtfully integrated.</p><div className="lab-notes"><div><span>QUESTION 01</span><p>How can retrieval make model responses more useful and verifiable?</p></div><div><span>QUESTION 02</span><p>What does it take to evaluate an AI feature as part of a complete product?</p></div><div><span>NEXT</span><p>Build, measure, document — and share the learning.</p></div></div></div></div>
      </section>

      <section className="archive-section section-shell" aria-labelledby="archive-title">
        <SectionLabel number="05" right="STATUS VARIES · DETAILS TO VERIFY">Project archive</SectionLabel>
        <div className="archive-heading"><h2 className="display-title" id="archive-title">Further <em>explorations</em></h2><p>Additional project and experiment names from my project archive. Completion status and public repositories vary; these are not all presented as finished case studies.</p></div>
        <div className="archive-list">{archive.map(([name, description, stack, repository, linkLabel = "View repository"], index) => <Reveal as="article" className="archive-item" key={name} delay={Math.min(index % 4, 3) * 0.04}><span className="archive-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{description}</p></div><span className="archive-stack">{stack}</span><a className="archive-link" href={repository} target="_blank" rel="noreferrer" aria-label={`${linkLabel} for ${name}`}>{linkLabel} <ArrowUpRight size={14} aria-hidden="true" /></a></Reveal>)}</div>
      </section>

      <section className="leetcode-section section-shell" id="leetcode" aria-labelledby="leetcode-title">
        <SectionLabel number="06" right="DATA STRUCTURES & ALGORITHMS">Problem solving</SectionLabel>
        <Reveal className="leetcode-grid">
          <div className="leetcode-copy">
            <p className="eyebrow">Practice, one problem at a time</p>
            <h2 className="display-title" id="leetcode-title">Turning problems<br />into <em>patterns.</em></h2>
            <p>I use LeetCode to practice data structures and algorithms, strengthen problem-solving fundamentals, and get more comfortable reasoning through edge cases.</p>
            <div className="leetcode-stats" aria-label="LeetCode profile snapshot: 61 problems solved, 25 easy, 27 medium, and 9 hard">
              <div><strong>61</strong><span>solved</span></div>
              <div><strong>25</strong><span>easy</span></div>
              <div><strong>27</strong><span>medium</span></div>
              <div><strong>9</strong><span>hard</span></div>
            </div>
            <p className="leetcode-note">Counts shown in the supplied profile snapshot.</p>
            <a className="button button-dark leetcode-cta" href="https://leetcode.com/u/Sandesh1548/" target="_blank" rel="noreferrer">View my LeetCode profile <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <figure className="leetcode-visual">
            <Image src="/assets/leetcode-profile-stats.png" alt="LeetCode profile snapshot showing 61 problems solved: 25 easy, 27 medium, and 9 hard" fill sizes="(max-width: 760px) 100vw, 48vw" />
            <figcaption>PROFILE SNAPSHOT · DATA STRUCTURES & ALGORITHMS</figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="human-section" id="about" aria-labelledby="human-title">
        <div className="human-photo"><Image src="/assets/sandesh-field.jpeg" alt="Sandesh standing with his arms open toward a misty landscape" fill sizes="(max-width: 760px) 100vw, 45vw" /><span className="photo-caption">A MOMENT OUTSIDE THE IDE · FIELD NOTE 07</span></div>
        <div className="human-copy"><SectionLabel number="07" right="MORE THAN THE TOOLKIT">The human side</SectionLabel><p className="eyebrow">Curiosity needs room</p><h2 className="display-title" id="human-title">Learning is a<br />practice of <em>showing up.</em></h2><p>Beyond technology, I value discipline and steady effort. Karate has taught me to stay patient with the process; fitness gives me a simple way to keep that commitment. I also enjoy exploring new places and noticing how people use the things we build.</p><div className="human-facts"><div><span>TRAINING</span><strong>Karate · Purple belt progression</strong></div><div><span>INTERESTS</span><strong>Travel · Emerging technology · Making</strong></div></div><figure className="human-portrait"><div className="human-portrait-image"><Image src="/assets/sandesh-about-portrait.jpeg" alt="Sandesh outdoors in warm evening light" fill sizes="140px" /></div><figcaption>BETWEEN BUILDS, OUT IN THE WORLD.</figcaption></figure></div>
      </section>

      <section className="education-section section-shell" aria-labelledby="education-title">
        <SectionLabel number="08" right="EDUCATION & EXPERIENCE">Learning path</SectionLabel>
        <div className="education-grid"><div><h2 className="display-title" id="education-title">Built on a<br /><em>foundation.</em></h2><p className="education-note">My academic path and early experience are part of the work in progress.</p></div><div className="education-list">
          <article className="education-entry"><span>2024—2028</span><div><h3>B.E. Computer Science & Engineering (Artificial Intelligence)</h3><p>Nutan Maharashtra Institute of Engineering and Technology</p></div><b>IN PROGRESS</b></article>
          <article className="education-entry"><span>2022—2024</span><div><h3>Higher Secondary Education</h3><p>High Vision International School · 75%</p></div><b>COMPLETED</b></article>
          <article className="education-entry"><span>JAN—FEB 2026</span><div><h3>Web Development Intern</h3><p>Kodbud · Four-week internship</p></div><b>COMPLETED</b></article>
        </div></div>
        <div className="certification-block"><div className="certification-heading"><BookOpen size={17} aria-hidden="true" /><h3>Courses & certificates</h3><p>Selected learning from my supplied profile</p></div><ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-inner"><SectionLabel number="09" right="OPEN TO OPPORTUNITY">The next chapter</SectionLabel><p className="eyebrow">Good work starts with a conversation</p><h2 className="display-title" id="contact-title">Let’s build<br />what comes <em>next.</em></h2><div className="contact-bottom"><div><p>I’m actively looking for paid internships in Generative AI, AI/ML and software engineering — a place to contribute, learn from experienced teams and grow through real engineering work.</p><a className="button button-paper" href="https://mail.google.com/mail/?view=cm&fs=1&to=vairagarsandesh45%40gmail.com&su=Portfolio%20inquiry"><Mail size={16} aria-hidden="true" /> Email Sandesh <ArrowUpRight size={15} aria-hidden="true" /></a></div><div className="contact-links"><a href="https://www.linkedin.com/in/sandesh-vairagar/" target="_blank" rel="noreferrer"><Link2 size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} /></a><a href="https://github.com/Sandesh64753" target="_blank" rel="noreferrer"><Code2 size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={12} /></a><a href="https://leetcode.com/u/Sandesh1548/" target="_blank" rel="noreferrer"><GraduationCap size={15} aria-hidden="true" /> LeetCode <ArrowUpRight size={12} /></a></div></div><div className="contact-coordinate">PIMPRI-CHINCHWAD<br />MAHARASHTRA · INDIA</div></div>
      </section>
      <footer className="site-footer"><a className="wordmark" href="#top">Sandesh Vairagar<span>.</span></a><span>Made with curiosity, in Pimpri-Chinchwad.</span><a href="#top" className="back-top">Back to top ↑</a><small>© {new Date().getFullYear()} Sandesh Vairagar</small></footer>
    </main>
  );
}
