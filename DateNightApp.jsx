import { useState } from "react";

const DATE_IDEAS = [
  { activity: "Scavenger Hunt", daytime: true, nighttime: false, free: true, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Mini Golf", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: false, outside: true, atHome: false },
  { activity: "Hiking", daytime: true, nighttime: false, free: true, spontaneous: true, planningRequired: false, inside: false, outside: true, atHome: false },
  { activity: "Art Gallery", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Museum", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Franklin Park", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Observatory", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Paint and Sip", daytime: true, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Kayaking", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Bike Trail Ride", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Fruit Picking", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Theater Performance", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Live Music", daytime: true, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: true, atHome: false },
  { activity: "Picnic", daytime: true, nighttime: false, free: true, spontaneous: true, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Yoga Class", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Learn a Dance", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Question Night", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Slide Show Presentation", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Paint Portraits", daytime: true, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: true },
  { activity: "Video Games and Snacks", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Burlesque Show", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Bowling", daytime: true, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Trivia Night", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Book Loft and Pistachia Vera", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Local Comedy Show", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Afternoon Tea", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Zip Lining", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Thrifting and Dinner", daytime: false, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Go Karts", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Yellow Springs", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Level One Arcade", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "At Home Spa", daytime: true, nighttime: true, free: true, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: true },
  { activity: "Local Festival", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Haunted Tour", daytime: false, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: true, atHome: false },
  { activity: "Glass Blowing", daytime: true, nighttime: false, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Photo Scavenger Hunt", daytime: true, nighttime: false, free: true, spontaneous: false, planningRequired: true, inside: false, outside: true, atHome: false },
  { activity: "Arts and Crafts", daytime: true, nighttime: true, free: true, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: true },
  { activity: "Game Night w Friends", daytime: false, nighttime: true, free: true, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: true },
  { activity: "Matchy Matchy Dinner Date", daytime: false, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Escape Room", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Joint Bucket List", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Spooky Stories", daytime: false, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Relationship Slideshow", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Read Poetry Together", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Live Poetry Reading", daytime: false, nighttime: true, free: true, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Play Card Games", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Boardgames", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Drag Show", daytime: false, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Activate Games Place", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Otherworld", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Jackbox", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "LOTR or Similar Marathon", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "RPDR Design Challenge", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Home Trivia Night", daytime: true, nighttime: true, free: true, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: true },
  { activity: "Axe Throwing", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Rollerskating", daytime: true, nighttime: true, free: false, spontaneous: false, planningRequired: true, inside: true, outside: false, atHome: false },
  { activity: "Cat Café", daytime: true, nighttime: false, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
  { activity: "Laser Tag", daytime: true, nighttime: true, free: false, spontaneous: true, planningRequired: false, inside: true, outside: false, atHome: false },
];

const ADMIN_PASSWORD = "admin123";

const QUESTIONS = [
  {
    id: "timeOfDay",
    question: "When are you going?",
    options: [
      { label: "☀️ Daytime", value: "daytime" },
      { label: "🌙 Nighttime", value: "nighttime" },
      { label: "✨ Either works", value: "either" },
    ],
  },
  {
    id: "location",
    question: "Where do you want to be?",
    options: [
      { label: "🏠 At home", value: "atHome" },
      { label: "🏛️ Inside (out)", value: "inside" },
      { label: "🌿 Outside", value: "outside" },
      { label: "🗺️ Anywhere", value: "anywhere" },
    ],
  },
  {
    id: "cost",
    question: "What's the budget?",
    options: [
      { label: "💸 Free please", value: "free" },
      { label: "💰 Happy to spend", value: "paid" },
      { label: "🤷 Doesn't matter", value: "any" },
    ],
  },
  {
    id: "planning",
    question: "How much planning?",
    options: [
      { label: "⚡ Totally spontaneous", value: "spontaneous" },
      { label: "📋 We'll plan ahead", value: "planned" },
      { label: "😎 Either is fine", value: "either" },
    ],
  },
];

function filterIdeas(ideas, answers) {
  return ideas.filter((idea) => {
    const { timeOfDay, location, cost, planning } = answers;

    if (timeOfDay === "daytime" && !idea.daytime) return false;
    if (timeOfDay === "nighttime" && !idea.nighttime) return false;

    if (location === "atHome" && !idea.atHome) return false;
    if (location === "inside" && !idea.inside) return false;
    if (location === "outside" && !idea.outside) return false;

    if (cost === "free" && !idea.free) return false;

    if (planning === "spontaneous" && !idea.spontaneous) return false;
    if (planning === "planned" && !idea.planningRequired) return false;

    return true;
  });
}

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #0d0d0d;
    min-height: 100vh;
    color: #f0ebe3;
  }

  .app {
    min-height: 100vh;
    background: radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, #0d0d0d 60%),
                radial-gradient(ellipse at 80% 20%, #0d1f1a 0%, transparent 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 4rem;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeDown 0.8s ease both;
  }

  .header h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 6vw, 3.8rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #f0ebe3 0%, #c9a96e 50%, #f0ebe3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
  }

  .header p {
    margin-top: 0.75rem;
    color: #8a7d6e;
    font-size: 0.95rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 2.5rem;
    width: 100%;
    max-width: 520px;
    backdrop-filter: blur(10px);
    animation: fadeUp 0.6s ease both;
  }

  .question-label {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 1.8rem;
    color: #f0ebe3;
    line-height: 1.3;
  }

  .progress-bar {
    display: flex;
    gap: 6px;
    margin-bottom: 2rem;
  }

  .progress-pip {
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background: rgba(255,255,255,0.1);
    transition: background 0.4s ease;
  }

  .progress-pip.active {
    background: #c9a96e;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .option-btn {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1rem 1.4rem;
    color: #f0ebe3;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
    letter-spacing: 0.01em;
  }

  .option-btn:hover {
    background: rgba(201,169,110,0.15);
    border-color: rgba(201,169,110,0.4);
    transform: translateX(4px);
  }

  .option-btn.selected {
    background: rgba(201,169,110,0.2);
    border-color: #c9a96e;
    color: #f0ebe3;
  }

  .result-card {
    text-align: center;
    animation: fadeUp 0.7s ease both;
  }

  .result-eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #c9a96e;
    margin-bottom: 1rem;
  }

  .result-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 700;
    color: #f0ebe3;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  .result-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .tag {
    background: rgba(201,169,110,0.12);
    border: 1px solid rgba(201,169,110,0.3);
    border-radius: 20px;
    padding: 0.3rem 0.9rem;
    font-size: 0.8rem;
    color: #c9a96e;
    letter-spacing: 0.05em;
  }

  .match-count {
    font-size: 0.85rem;
    color: #8a7d6e;
    margin-bottom: 2rem;
  }

  .btn-primary {
    background: linear-gradient(135deg, #c9a96e, #a07840);
    border: none;
    border-radius: 12px;
    padding: 0.9rem 2rem;
    color: #0d0d0d;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(201,169,110,0.3);
  }

  .btn-secondary {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 0.9rem 2rem;
    color: #8a7d6e;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: all 0.2s ease;
    margin-top: 0.75rem;
    display: inline-block;
  }

  .btn-secondary:hover {
    color: #f0ebe3;
    border-color: rgba(255,255,255,0.3);
  }

  .other-ideas {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .other-ideas p {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5a5048;
    margin-bottom: 1rem;
  }

  .other-ideas-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .other-idea-pill {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    color: #6a6058;
    cursor: pointer;
    transition: all 0.2s;
  }

  .other-idea-pill:hover {
    color: #f0ebe3;
    border-color: rgba(255,255,255,0.2);
  }

  .no-match {
    text-align: center;
  }

  .no-match .emoji {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .no-match h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #f0ebe3;
  }

  .no-match p {
    color: #8a7d6e;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  /* Admin section */
  .mode-toggle {
    margin-top: 3rem;
    display: flex;
    gap: 0.75rem;
  }

  .mode-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 0.5rem 1.1rem;
    color: #5a5048;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: all 0.2s;
  }

  .mode-btn:hover, .mode-btn.active {
    color: #c9a96e;
    border-color: rgba(201,169,110,0.3);
  }

  .admin-card {
    width: 100%;
    max-width: 520px;
    animation: fadeUp 0.5s ease both;
  }

  .admin-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-style: italic;
    color: #f0ebe3;
    margin-bottom: 0.5rem;
  }

  .admin-subtitle {
    color: #5a5048;
    font-size: 0.85rem;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-label {
    display: block;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8a7d6e;
    margin-bottom: 0.5rem;
  }

  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 0.8rem 1rem;
    color: #f0ebe3;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .form-input:focus {
    border-color: rgba(201,169,110,0.5);
  }

  .checkbox-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: #c0b5a8;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.06);
    transition: all 0.2s;
  }

  .checkbox-label:hover {
    border-color: rgba(201,169,110,0.3);
    color: #f0ebe3;
  }

  .checkbox-label input[type="checkbox"] {
    accent-color: #c9a96e;
    width: 15px;
    height: 15px;
  }

  .success-msg {
    background: rgba(100, 200, 120, 0.1);
    border: 1px solid rgba(100, 200, 120, 0.3);
    border-radius: 10px;
    padding: 0.9rem 1.2rem;
    color: #7dd89a;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  .error-msg {
    background: rgba(200, 80, 80, 0.1);
    border: 1px solid rgba(200, 80, 80, 0.3);
    border-radius: 10px;
    padding: 0.9rem 1.2rem;
    color: #e08080;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  .password-gate {
    text-align: center;
  }

  .password-gate h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-style: italic;
    color: #f0ebe3;
    margin-bottom: 0.5rem;
  }

  .password-gate p {
    color: #5a5048;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 1.5rem 0;
  }

  .sheets-note {
    background: rgba(201,169,110,0.06);
    border: 1px solid rgba(201,169,110,0.15);
    border-radius: 10px;
    padding: 1rem 1.2rem;
    margin-bottom: 1.5rem;
  }

  .sheets-note p {
    font-size: 0.82rem;
    color: #8a7d6e;
    line-height: 1.6;
  }

  .sheets-note code {
    background: rgba(255,255,255,0.08);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    font-size: 0.78rem;
    color: #c9a96e;
  }

  .sheets-note a {
    color: #c9a96e;
    text-decoration: none;
  }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function getTagsForIdea(idea) {
  const tags = [];
  if (idea.free) tags.push("Free");
  if (idea.atHome) tags.push("At Home");
  if (idea.inside && !idea.atHome) tags.push("Indoors");
  if (idea.outside) tags.push("Outdoors");
  if (idea.daytime && idea.nighttime) tags.push("Anytime");
  else if (idea.daytime) tags.push("Daytime");
  else if (idea.nighttime) tags.push("Nighttime");
  if (idea.spontaneous) tags.push("Spontaneous");
  if (idea.planningRequired) tags.push("Plan Ahead");
  return tags;
}

export default function DateNightApp() {
  const [mode, setMode] = useState("finder"); // "finder" | "admin"
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = result
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [allMatches, setAllMatches] = useState([]);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [ideas, setIdeas] = useState(DATE_IDEAS);

  // Admin form
  const [formData, setFormData] = useState({
    activity: "",
    daytime: false, nighttime: false, free: false,
    spontaneous: false, planningRequired: false,
    inside: false, outside: false, atHome: false,
  });
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const [sheetsUrl, setSheetsUrl] = useState("");

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length) {
      setStep(step + 1);
    }

    if (step === QUESTIONS.length - 1) {
      const matches = filterIdeas(ideas, newAnswers);
      setAllMatches(matches);
      if (matches.length > 0) {
        setResult(matches[Math.floor(Math.random() * matches.length)]);
      } else {
        setResult(null);
      }
    }
  };

  const pickAnother = () => {
    const others = allMatches.filter((i) => i.activity !== result?.activity);
    if (others.length > 0) {
      setResult(others[Math.floor(Math.random() * others.length)]);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
    setAllMatches([]);
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      setAdminError("");
    } else {
      setAdminError("Incorrect password. Try again.");
    }
  };

  const handleFormSubmit = async () => {
    if (!formData.activity.trim()) {
      setFormError("Please enter an activity name.");
      return;
    }

    const newIdea = { ...formData };
    setIdeas((prev) => [...prev, newIdea]);

    if (sheetsUrl.trim()) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newIdea),
        });
      } catch (e) {
        // no-cors won't throw but won't confirm either
      }
    }

    setFormSuccess(`"${formData.activity}" added successfully!`);
    setFormError("");
    setFormData({
      activity: "", daytime: false, nighttime: false, free: false,
      spontaneous: false, planningRequired: false,
      inside: false, outside: false, atHome: false,
    });
    setTimeout(() => setFormSuccess(""), 4000);
  };

  const currentQuestion = QUESTIONS[step - 1];
  const isResult = step > QUESTIONS.length - 1 && step !== 0;

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <div className="header">
          <h1>Date Night Oracle</h1>
          <p>Find your perfect evening</p>
        </div>

        {mode === "finder" && (
          <>
            {step === 0 && (
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💫</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontStyle: "italic", marginBottom: "0.75rem" }}>
                  Not sure what to do tonight?
                </h2>
                <p style={{ color: "#8a7d6e", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Answer a few quick questions and we'll find the perfect date idea from your list.
                </p>
                <button className="btn-primary" onClick={() => setStep(1)}>
                  Let's find something ✨
                </button>
              </div>
            )}

            {step >= 1 && step <= QUESTIONS.length && (
              <div className="card">
                <div className="progress-bar">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} className={`progress-pip ${i < step ? "active" : ""}`} />
                  ))}
                </div>
                <div className="question-label">{currentQuestion.question}</div>
                <div className="options">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.value}
                      className={`option-btn ${answers[currentQuestion.id] === opt.value ? "selected" : ""}`}
                      onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isResult && result && (
              <div className="card result-card">
                <div className="result-eyebrow">Tonight you should...</div>
                <div className="result-name">{result.activity}</div>
                <div className="result-tags">
                  {getTagsForIdea(result).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {allMatches.length > 1 && (
                  <p className="match-count">{allMatches.length} ideas matched your vibe</p>
                )}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  {allMatches.length > 1 && (
                    <button className="btn-primary" onClick={pickAnother}>
                      Show me another →
                    </button>
                  )}
                  <button className="btn-secondary" onClick={restart}>
                    Start over
                  </button>
                </div>
                {allMatches.length > 1 && (
                  <div className="other-ideas">
                    <p>Other matches</p>
                    <div className="other-ideas-list">
                      {allMatches.filter((i) => i.activity !== result.activity).map((i) => (
                        <span
                          key={i.activity}
                          className="other-idea-pill"
                          onClick={() => setResult(i)}
                        >
                          {i.activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {isResult && !result && (
              <div className="card no-match">
                <div className="emoji">🔍</div>
                <h2>No exact matches</h2>
                <p>Your filters are very specific! Try relaxing a few and we'll find something great.</p>
                <button className="btn-primary" onClick={restart}>Try again</button>
              </div>
            )}
          </>
        )}

        {mode === "admin" && (
          <div className="admin-card">
            {!adminUnlocked ? (
              <div className="card password-gate">
                <h2>Admin Area</h2>
                <p>Enter your password to add new date ideas</p>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                  />
                </div>
                {adminError && <div className="error-msg">{adminError}</div>}
                <button className="btn-primary" onClick={handleAdminLogin} style={{ width: "100%" }}>
                  Unlock
                </button>
              </div>
            ) : (
              <div className="card">
                <div className="admin-title">Add a Date Idea</div>
                <div className="admin-subtitle">New ideas are added to the session database and optionally synced to Google Sheets.</div>

                <div className="sheets-note">
                  <p>
                    🔗 <strong style={{ color: "#c9a96e" }}>Google Sheets Sync:</strong> Paste your Google Apps Script Web App URL below to save ideas permanently.{" "}
                    <a href="https://developers.google.com/apps-script/guides/web" target="_blank" rel="noreferrer">Setup guide →</a>
                  </p>
                </div>

                <div className="form-group">
                  <label className="form-label">Google Apps Script URL (optional)</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="https://script.google.com/macros/s/..."
                    value={sheetsUrl}
                    onChange={(e) => setSheetsUrl(e.target.value)}
                  />
                </div>

                <div className="divider" />

                {formSuccess && <div className="success-msg">✓ {formSuccess}</div>}
                {formError && <div className="error-msg">{formError}</div>}

                <div className="form-group">
                  <label className="form-label">Activity Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="e.g. Pottery Class"
                    value={formData.activity}
                    onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time of Day</label>
                  <div className="checkbox-grid">
                    {[["daytime", "☀️ Daytime"], ["nighttime", "🌙 Nighttime"]].map(([key, label]) => (
                      <label key={key} className="checkbox-label">
                        <input type="checkbox" checked={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <div className="checkbox-grid">
                    {[["inside", "🏛️ Inside"], ["outside", "🌿 Outside"], ["atHome", "🏠 At Home"]].map(([key, label]) => (
                      <label key={key} className="checkbox-label">
                        <input type="checkbox" checked={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Other Details</label>
                  <div className="checkbox-grid">
                    {[["free", "💸 Free"], ["spontaneous", "⚡ Spontaneous"], ["planningRequired", "📋 Plan Ahead"]].map(([key, label]) => (
                      <label key={key} className="checkbox-label">
                        <input type="checkbox" checked={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <button className="btn-primary" onClick={handleFormSubmit} style={{ width: "100%", marginTop: "0.5rem" }}>
                  Add to Database
                </button>

                <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.82rem", color: "#5a5048" }}>
                  {ideas.length} ideas in database this session
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mode-toggle">
          <button className={`mode-btn ${mode === "finder" ? "active" : ""}`} onClick={() => { setMode("finder"); restart(); }}>
            ✨ Find a Date
          </button>
          <button className={`mode-btn ${mode === "admin" ? "active" : ""}`} onClick={() => setMode("admin")}>
            ⚙️ Admin
          </button>
        </div>
      </div>
    </>
  );
}
