/* ==================================================================
   THIS IS THE ONLY FILE YOU EVER NEED TO EDIT.

   Everything on your site — your name, status, bio, experience,
   achievements, projects, and skills — comes from this file.

   HOW TO EDIT (no coding needed):
   1. Go to your repo on github.com
   2. Click on this file (content.js)
   3. Click the pencil icon (top right) to edit
   4. Change the text between the quotes " "
   5. Scroll down, click "Commit changes"
   6. Your live site updates automatically within a minute or two.

   A few rules to keep things from breaking:
   - Always keep text wrapped in double quotes: "like this"
   - Every line inside a list needs a comma at the end, except the
     very last line in that list.
   - If you're ever unsure, just edit one small thing, commit, and
     check the live site before changing anything else.
   ================================================================== */

const SITE_DATA = {

  // ---------------- BASIC INFO ----------------
  name: "Minhajuddin Ayubin",
  role: "Secondary Research Associate",
  company: "Mindforce Research",

  // Shown as the small badge in the hero. Change this any time —
  // e.g. "Open to opportunities", "Not currently looking", "Open to internships".
  status: "Open to opportunities",

  focus: "AI & Data Analysis",

  tagline: "Final-year Computer Science student building AI-assisted tools for document analysis, fact verification, and predictive modelling — alongside 10+ months of professional research experience.",

  // Used only for the "Send me an email" button. This is never printed
  // as visible text anywhere on the page.
  email: "minhajuddinayubin@gmail.com",

  // Used for every "View on GitHub" button, unless a specific project
  // below sets its own githubOverride.
  github: "https://github.com/Minhaj2003",

  // Used to automatically calculate "X+ months in research" in the
  // hero stats. Format must stay "YYYY-MM-DD".
  roleStartDate: "2025-09-01",


  // ---------------- ABOUT ----------------
  // Each line is one paragraph. Add or remove lines freely.
  about: [
    "I'm Minhajuddin Ayubin, a final-year Computer Science student at Maharshi Dayanand University, currently working as a Secondary Research Associate at Mindforce Research, where I handle data collection, analysis, and report preparation in the IT sector.",
    "Outside of work, I build small AI-assisted systems — document verifiers, damage-detection pipelines, and prediction models — usually in Python, often pairing traditional ML workflows with AI coding assistants like Claude to move from idea to working prototype faster.",
    "I've cleared technical interviews for a Software Engineer role at Chetu and a scholarship selection process at QuickSpider — details on both are in the Achievements section below, including why I didn't take either up."
  ],

  aboutFacts: [
    { label: "Current role", value: "Secondary Research Associate, Mindforce Research" },
    { label: "Education",    value: "B.Tech Computer Science, MDU (2022–2026)" },
    { label: "Core stack",   value: "Python · SQL · scikit-learn · NLP · OCR" },
    { label: "Based in",     value: "India" }
  ],


  // ---------------- EXPERIENCE & EDUCATION TIMELINE ----------------
  // tagColor must be exactly one of: "active", "pending", "done"
  // tagText is whatever words you want shown in the small pill — change
  // this freely, e.g. to "Hired" or "Results out" once things change.
  //
  // TO ADD A NEW ENTRY: copy one whole { ... } block below, paste it
  // just before the closing ], and add a comma after the block above it.
  // TO DELETE: remove its whole { ... } block.
  experience: [
    {
      title: "Secondary Research Associate",
      org: "Mindforce Research",
      period: "Sep 2025 – Present",
      description: "Conducting secondary research, data collection, analysis, and report preparation in the IT sector.",
      tagColor: "active",
      tagText: "Current"
    },
    {
      title: "B.Tech, Computer Science",
      org: "Maharshi Dayanand University",
      period: "2022 – 2026",
      description: "Final-year student. Final examinations completed; results awaited.",
      tagColor: "pending",
      tagText: "Awaiting result"
    },
    {
      title: "Senior Secondary (Class 12)",
      org: "Kendriya Vidyalaya",
      period: "70%",
      description: "",
      tagColor: "done",
      tagText: "Completed"
    },
    {
      title: "Secondary (Class 10)",
      org: "Kendriya Vidyalaya",
      period: "80%",
      description: "",
      tagColor: "done",
      tagText: "Completed"
    }
  ],


  // ---------------- ACHIEVEMENTS ----------------
  // These render as the green "stamp" cards.
  //
  // TO ADD: copy a whole { ... } block, paste before the closing ],
  // add a comma after the block above it.
  // TO DELETE: remove its whole { ... } block.
  achievements: [
    {
      title: "QuickSpider Scholarship Selection",
      org: "Professional training program",
      stampText: "Offer Cleared",
      points: [
        "Successfully cleared QuickSpider's selection process.",
        "Offered a training program worth approximately ₹40,000–₹50,000, free of cost."
      ],
      note: "Didn't enroll — a job opportunity came through shortly after."
    },
    {
      title: "Software Engineer — Chetu",
      org: "Full-time role",
      stampText: "Offer Cleared",
      points: [
        "Successfully cleared the recruitment process for the Software Engineer role.",
        "Offer came with a mandatory four-year employment bond."
      ],
      note: "Chose not to join because of the bond — not because of the outcome."
    }
  ],


  // ---------------- PROJECTS ----------------
  // "stack" is the list of tools/tech shown as small tags under each
  // project. Any tag containing the word "Claude" is automatically
  // highlighted in gold.
  //
  // "githubOverride" is optional. Leave it as "" to use your main
  // GitHub link above, or fill it in if this one project lives at a
  // different URL (e.g. a specific repo link).
  //
  // The Skills section below this is calculated AUTOMATICALLY from
  // whatever appears in every project's "stack" — so adding or
  // removing projects keeps Skills accurate with zero extra editing.
  //
  // TO ADD A PROJECT: copy one whole { ... } block, paste before the
  // closing ], add a comma after the block above it.
  // TO DELETE A PROJECT: remove its whole { ... } block.
  projects: [
    {
      name: "FactCheck AI",
      description: "An AI-powered document verification system that analyzes PDF documents and evaluates the accuracy and credibility of the facts they contain.",
      features: [
        "PDF document processing",
        "Fact verification and validation",
        "Automated credibility assessment",
        "AI-assisted content analysis"
      ],
      stack: ["Python", "NLP", "PDF Processing", "Machine Learning", "Claude-assisted"],
      githubOverride: ""
    },
    {
      name: "Football World Cup Score Prediction",
      description: "A machine learning project that predicts upcoming match scores during the Football World Cup using historical tournament and match data.",
      features: [
        "Historical data analysis",
        "Match score prediction",
        "Predictive analytics using machine learning",
        "Performance trend analysis"
      ],
      stack: ["Python", "Logistic Regression", "Pandas", "NumPy", "Scikit-learn"],
      githubOverride: ""
    },
    {
      name: "Linear Regression Learning Project",
      description: "A machine learning implementation demonstrating both simple and multiple linear regression models for predictive analysis.",
      features: [
        "Single-variable linear regression",
        "Multi-variable linear regression",
        "Data visualization",
        "Model training and evaluation"
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      githubOverride: ""
    },
    {
      name: "DDR AI System",
      description: "Damage Detection & Report Analysis — an intelligent document system for construction and inspection industries that scans large PDF reports and extracts damage-related information automatically.",
      features: [
        "Large PDF document analysis",
        "Automatic extraction of cracks, damages, and defects",
        "Identification of possible causes (e.g. humidity, temperature)",
        "Image extraction and rapid retrieval from lengthy reports"
      ],
      stack: ["Python", "OCR", "PDF Processing", "NLP", "Data Extraction", "Claude-assisted"],
      githubOverride: ""
    }
  ],


  // ---------------- OTHER SKILLS ----------------
  // Things you can do that don't show up in any project's stack above
  // (e.g. day-to-day work skills). Add or remove lines freely.
  otherSkills: [
    "SQL",
    "Data Analysis",
    "Predictive Analytics",
    "Secondary Research",
    "Report Analysis",
    "Documentation"
  ]

};
