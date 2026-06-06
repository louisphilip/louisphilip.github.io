"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDumbbell,
  FaRunning,
  FaAppleAlt,
  FaClock,
  FaBan,
  FaCheck,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClipboardList
} from "react-icons/fa";
import styles from "./Health.module.scss";

const DAILY_CHECKLIST_KEY = "lp-health-daily-checklist";
const PROTEIN_SELECTION_KEY = "lp-health-protein-selections";

const initialDailyTasks = [
  { id: "mcgill-curl", label: "McGill Curl-up", sub: "3 sets of 8-10 reps (hold for 10s)", category: "spine" },
  { id: "mcgill-side", label: "McGill Side Plank", sub: "3 sets of 8-10 reps (hold for 10s per side)", category: "spine" },
  { id: "mcgill-bird", label: "McGill Bird-Dog", sub: "3 sets of 8-10 reps (hold for 10s per side)", category: "spine" },
  { id: "serratus-plus", label: "Serratus Push-Up Plus", sub: "3 sets of 12 reps (spread shoulder blades)", category: "scapula" },
  { id: "ytwl-raises", label: "Prone YTWL Raises", sub: "3 sets of 10 reps per letter (no shrugging)", category: "scapula" },
  { id: "band-pulls", label: "Band Pull-Aparts", sub: "3 sets of 15-20 reps (chest open)", category: "posture" },
  { id: "foam-roller", label: "Foam Roller Thoracic Extension", sub: "2 mins rolling (keep lumbar static)", category: "posture" },
  { id: "pec-stretch", label: "Standing Pec Minor Stretch", sub: "3 sets of 45s holds (reverses desk-hunch)", category: "posture" },
  { id: "desk-breaks", label: "Programmer Micro-breaks", sub: "Stand up, squeeze glutes, and stretch chest every 50 mins", category: "posture" }
];

const workoutSplit = {
  monday: {
    title: "Monday: Gym A (Posterior Chain & Upper Pull)",
    focus: "Glutes, Hamstrings, Scapular Retraction & Core Stability",
    exercises: [
      { name: "Weighted Glute Bridges", reps: "4 sets x 10-12 reps", desc: "Bench or floor. Squeeze glutes and rotate pelvis backward at the top to lock out spinal flexion." },
      { name: "Lying or Seated Leg Curls", reps: "3 sets x 12 reps", desc: "Concentrates purely on hamstring contraction. Keep your lower back pressed firm against the pad." },
      { name: "Chest-Supported Dumbbell Rows", reps: "3 sets x 10-12 reps", desc: "Incline bench. Keeps spinal muscles completely unloaded while building mid-back pull strength." },
      { name: "Cable Face Pulls with Hold", reps: "3 sets x 15 reps", desc: "Pull to nose, rotators outward. Activates lower traps and rear delts to combat winged scapula." },
      { name: "Serratus Dumbbell Pullovers", reps: "3 sets x 12 reps", desc: "Lie flat on bench, reach dumbbell back. Push upwards at the top to engage the serratus anterior." }
    ]
  },
  tuesday: {
    title: "Tuesday: Home A (Thoracic Mobility & Core)",
    focus: "Spinal Decompression, Chest Opening & Core Stabilization",
    exercises: [
      { name: "McGill Big 3 Routine", reps: "3 sets x 8-10 reps (10s hold)", desc: "Perfect spinal hygiene core builders. Do not skip or rush through these holds." },
      { name: "Doorframe Pec Stretch", reps: "3 sets x 45-second holds", desc: "Elbow at 90 degrees. Lean forward to open up tight pectoralis minor from coding desk slumping." },
      { name: "Serratus Wall Slides", reps: "3 sets x 12 reps", desc: "Forearms on wall with light band around wrists. Slide up and out to activate serratus anterior." },
      { name: "Cat-Cow (Prone / Controlled)", reps: "2 sets x 10 gentle reps", desc: "Avoid deep end-ranges. Move slowly through a comfortable, mid-range motion." }
    ]
  },
  wednesday: {
    title: "Wednesday: Gym B (Glute-Dominant & Anti-Rotation)",
    focus: "Hamstring Hinge, Scapular Pull & Core Bracing",
    exercises: [
      { name: "Dumbbell Romanian Deadlifts (RDL)", reps: "4 sets x 10 reps", desc: "Hinge from hips, push glutes back. Dumbbells close to legs. ABSOLUTE neutral lower back. Do not flex lumbar." },
      { name: "Scapular Pull-Ups", reps: "3 sets x 10 reps", desc: "Hang from pull-up bar, draw shoulder blades down and back to lift body 2-3 inches without bending arms." },
      { name: "Incline Dumbbell Chest Press", reps: "3 sets x 10 reps", desc: "Kept at a moderate 30-degree incline. Squeeze shoulder blades into the bench to stabilize scapula." },
      { name: "Cable Pallof Press", reps: "3 sets x 12 reps per side", desc: "Press handle straight out from chest and resist rotation. High anti-rotational core force (Golf / Padel prep)." },
      { name: "Single-Arm Dumbbell Row", reps: "3 sets x 10 reps per side", desc: "One hand supported on bench. Prevent lower back twist by bracing core." }
    ]
  },
  thursday: {
    title: "Thursday: Home B (Hamstring Recovery & Rotator Cuff)",
    focus: "Hamstring Strength, Lateral Shoulder Stability & Posture",
    exercises: [
      { name: "Sliding Hamstring Curls", reps: "3 sets x 12 reps", desc: "Lie on back, lift hips slightly, slide heels in on towels/sliders. Exceptional glute-hamstring transition." },
      { name: "Single-Leg Glute Bridges", reps: "3 sets x 10 reps per leg", desc: "Keep opposite knee tucked close to chest to completely prevent lower back arching." },
      { name: "No-Money Band Drills", reps: "3 sets x 15 reps", desc: "Elbows tucked to ribs, hands pull band apart outwards. Great for external rotator cuffs and posture." },
      { name: "Prone YTWL Raises", reps: "3 sets x 10 reps per shape", desc: "Hold each raise for 2 seconds. Reinforces lower trap support." }
    ]
  },
  friday: {
    title: "Friday: Gym C (Functional Base & Loaded Carry)",
    focus: "Unilateral Leg Strength, Upper Back Pull & Anti-Lateral Flexion",
    exercises: [
      { name: "Dumbbell Bulgarian Split Squats", reps: "3 sets x 10 reps per leg", desc: "Lean torso slightly forward to bias the glute/hamstrings. Relieves spine compression compared to back squats." },
      { name: "Lat Pulldowns (Wide / Neutral)", reps: "3 sets x 10 reps", desc: "Focus on pulling with your elbows and sliding your shoulder blades down, not shrugging." },
      { name: "Dumbbell Suitcase Carry", reps: "3 sets x 40 meters per side", desc: "Hold heavy dumbbell in one hand only. Walk slowly, bracing core to stay perfectly upright (no leaning)." },
      { name: "Serratus Push-Up Plus", reps: "3 sets x 12 reps", desc: "In high plank, protract shoulder blades at the top. Vital winged scapula correction." }
    ]
  }
};

const proteinGroups = {
  lean: [
    "150g grilled skinless chicken breast",
    "160g roasted turkey breast",
    "180g pan-seared organic firm tofu",
    "160g baked cod/sea bass fillet",
    "150g canned wild pink salmon"
  ],
  omega3: [
    "150g baked wild-caught salmon",
    "150g grilled fresh rainbow trout",
    "160g baked sea bass fillet",
    "150g canned wild pink salmon",
    "180g pan-seared organic firm tofu"
  ],
  dairy_egg: [
    "1 cup low-fat Greek yogurt",
    "1 cup low-fat cottage cheese",
    "4 hard-boiled egg whites",
    "100g grilled organic tempeh strips"
  ],
  breakfast_egg: [
    "3 scrambled egg whites",
    "1 cup low-fat Greek yogurt",
    "120g pan-seared organic firm tofu (scrambled)",
    "4 hard-boiled egg whites"
  ]
};

const defaultProteins = {
  d1_snack1: "1 cup low-fat Greek yogurt",
  d1_lunch: "150g grilled skinless chicken breast",
  d1_dinner: "150g baked wild-caught salmon",
  d2_breakfast: "3 scrambled egg whites",
  d2_lunch: "160g roasted turkey breast",
  d2_dinner: "160g baked cod/sea bass fillet",
  d3_snack1: "1 cup low-fat cottage cheese",
  d3_lunch: "180g pan-seared organic firm tofu",
  d3_dinner: "160g roasted turkey breast",
  d7_snack1: "1 cup low-fat Greek yogurt",
  d7_lunch: "150g canned wild pink salmon",
  d7_dinner: "150g grilled skinless chicken breast"
};

const nutritionDays = [
  {
    day: "Days 1 & 4",
    meals: [
      {
        name: "Breakfast",
        text: "1/2 cup rolled oats cooked in almond milk, topped with 1 tbsp ground flaxseeds & 1/2 cup fresh blueberries (Soluble Fiber Powerhouse)."
      },
      {
        name: "AM Snack",
        text: "{$protein} topped with 1 tbsp chia seeds (Rich in protein and healthy fats).",
        proteinCategory: "dairy_egg",
        id: "d1_snack1"
      },
      {
        name: "Lunch",
        text: "{$protein}, served with 1/2 cup cooked quinoa, steamed broccoli & carrots drizzled with 1 tsp extra virgin olive oil.",
        proteinCategory: "lean",
        id: "d1_lunch"
      },
      {
        name: "PM Snack",
        text: "1 medium apple (sliced) with 1 tbsp raw almond butter (Pectin soluble fiber)."
      },
      {
        name: "Dinner",
        text: "{$protein}, roasted sweet potato, sautéed zucchini (cooked in olive oil, no garlic/onion)."
        ,proteinCategory: "omega3",
        id: "d1_dinner"
      }
    ]
  },
  {
    day: "Days 2 & 5",
    meals: [
      {
        name: "Breakfast",
        text: "{$protein}, handful of fresh spinach cooked in a dash of olive oil, served with 1 slice of whole-grain toast and 1/4 avocado.",
        proteinCategory: "breakfast_egg",
        id: "d2_breakfast"
      },
      {
        name: "AM Snack",
        text: "A small handful of raw almonds (10-12) and 1 sweet pear."
      },
      {
        name: "Lunch",
        text: "{$protein} wrapped in a whole-wheat tortilla with sliced cucumber, shredded lettuce, and light hummus (Heartburn friendly)."
        ,proteinCategory: "lean",
        id: "d2_lunch"
      },
      {
        name: "PM Snack",
        text: "Fresh celery sticks with 1 tbsp organic peanut butter."
      },
      {
        name: "Dinner",
        text: "{$protein}, warm quinoa salad with diced cucumber and bell peppers, dressed with olive oil and fresh parsley.",
        proteinCategory: "omega3",
        id: "d2_dinner"
      }
    ]
  },
  {
    day: "Days 3 & 6",
    meals: [
      {
        name: "Breakfast",
        text: "Overnight oats (rolled oats, 1 tbsp chia seeds, almond milk, half a mashed banana). Let sit overnight."
      },
      {
        name: "AM Snack",
        text: "{$protein} with a handful of fresh strawberries.",
        proteinCategory: "dairy_egg",
        id: "d3_snack1"
      },
      {
        name: "Lunch",
        text: "Mild lentil soup (cooked with safe herbs, no heavy garlic/onions/spices) served with a small side green salad. Boost protein with: {$protein}.",
        proteinCategory: "lean",
        id: "d3_lunch"
      },
      {
        name: "PM Snack",
        text: "1 hard-boiled egg and organic baby carrots."
      },
      {
        name: "Dinner",
        text: "{$protein}, baked sweet potato (no butter/cream), steamed green beans.",
        proteinCategory: "lean",
        id: "d3_dinner"
      }
    ]
  },
  {
    day: "Day 7",
    meals: [
      {
        name: "Breakfast",
        text: "1/2 cup oatmeal topped with 1 tbsp walnuts, 1 tbsp ground flaxseeds, and warm blueberries."
      },
      {
        name: "AM Snack",
        text: "{$protein} with fresh red raspberries.",
        proteinCategory: "dairy_egg",
        id: "d7_snack1"
      },
      {
        name: "Lunch",
        text: "Warm salad with quinoa, {$protein}, baby spinach, roasted pumpkin seeds, dressed with olive oil and lemon zest.",
        proteinCategory: "omega3",
        id: "d7_lunch"
      },
      {
        name: "PM Snack",
        text: "1 sliced organic apple with 1 tbsp almond butter."
      },
      {
        name: "Dinner",
        text: "{$protein} served over zucchini noodles and a small portion of whole-wheat pasta dressed in extra virgin olive oil.",
        proteinCategory: "lean",
        id: "d7_dinner"
      }
    ]
  }
];

export default function HealthDashboard() {
  const [activeTab, setActiveTab] = useState("daily");
  const [activeWorkoutDay, setActiveWorkoutDay] = useState("monday");
  const [activeNutritionDay, setActiveNutritionDay] = useState(0);
  const [completedTasks, setCompletedTasks] = useState({});
  const [selectedProteins, setSelectedProteins] = useState(defaultProteins);

  // Initialize from localStorage
  useEffect(() => {
    const loadSavedState = () => {
      try {
        const savedChecklist = localStorage.getItem(DAILY_CHECKLIST_KEY);
        if (savedChecklist) {
          setCompletedTasks(JSON.parse(savedChecklist));
        }

        const savedProteins = localStorage.getItem(PROTEIN_SELECTION_KEY);
        if (savedProteins) {
          setSelectedProteins(JSON.parse(savedProteins));
        }
      } catch (e) {
        console.error("Failed to load health parameters", e);
      }
    };

    const timer = setTimeout(loadSavedState, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTask = (id) => {
    const updated = {
      ...completedTasks,
      [id]: !completedTasks[id]
    };
    setCompletedTasks(updated);
    try {
      localStorage.setItem(DAILY_CHECKLIST_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save checklist state", e);
    }
  };

  const resetDailyChecklist = () => {
    setCompletedTasks({});
    try {
      localStorage.removeItem(DAILY_CHECKLIST_KEY);
    } catch (e) {
      console.error("Failed to reset checklist", e);
    }
  };

  const handleProteinChange = (id, value) => {
    const updated = {
      ...selectedProteins,
      [id]: value
    };
    setSelectedProteins(updated);
    try {
      localStorage.setItem(PROTEIN_SELECTION_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save protein selections", e);
    }
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / initialDailyTasks.length) * 100);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>LP&apos;s Performance &amp; Health Dashboard</h1>
        <p>
          A private, optimized blueprint designed to eliminate lower back pain, stabilize your winged scapula,
          lower cholesterol, and cure heartburn—so you can safely return to Running, Cycling, Padel, and Golf.
        </p>
      </header>

      {/* Safety Banner */}
      <div className={styles.safetyBanner}>
        <div className={styles.safetyIcon}>
          <FaExclamationTriangle />
        </div>
        <div className={styles.safetyContent}>
          <h4>Active Clinical Constraints & Rules</h4>
          <p>
            • <strong>Spine Hygiene:</strong> Zero lumbar flexion under load (no traditional sit-ups/crunches; no rounding the back during lifts).<br />
            • <strong>Heartburn Rule:</strong> Strict curfew—absolutely no food within 3 hours of sleep. No coffee on an empty stomach.<br />
            • <strong>Cardiovascular Focus:</strong> Keep saturated fats under 7% of daily calories. Focus on soluble fiber & omega-3 fats.
          </p>
        </div>
      </div>

      {/* Main Tabs */}
      <nav className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === "daily" ? styles.active : ""}`}
          onClick={() => setActiveTab("daily")}
        >
          <FaClipboardList /> Daily Posture & Recovery
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "workout" ? styles.active : ""}`}
          onClick={() => setActiveTab("workout")}
        >
          <FaDumbbell /> Weekly Workout Split
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "nutrition" ? styles.active : ""}`}
          onClick={() => setActiveTab("nutrition")}
        >
          <FaAppleAlt /> Nutrition & Eating Plan
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "sports" ? styles.active : ""}`}
          onClick={() => setActiveTab("sports")}
        >
          <FaRunning /> Sports Prehab & Recovery
        </button>
      </nav>

      {/* Tab Content rendering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* DAILY POSTURE & CORE TAB */}
          {activeTab === "daily" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "#fff" }}>
                  Daily Programmer Posture Checklist
                </h3>
                {completedCount > 0 && (
                  <button
                    onClick={resetDailyChecklist}
                    style={{
                      background: "rgba(255, 0, 0, 0.1)",
                      border: "1px solid rgba(255, 0, 0, 0.3)",
                      color: "#ff6b6b",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      cursor: "pointer"
                    }}
                  >
                    Reset Progress
                  </button>
                )}
              </div>

              {/* Progress Bar */}
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "16px", marginBottom: "30px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <span>Daily Routine Progress</span>
                  <span>{completedCount} / {initialDailyTasks.length} Completed ({progressPercent}%)</span>
                </div>
                <div style={{ height: "10px", background: "rgba(0,0,0,0.2)", borderRadius: "5px", overflow: "hidden" }}>
                  <motion.div
                    style={{ height: "100%", background: "var(--primary-color)", width: `${progressPercent}%` }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className={styles.cardGrid}>
                {/* McGill Big 3 Card */}
                <div className={styles.card}>
                  <span className={styles.badge}>McGill Big 3 (Spine)</span>
                  <h4 className={styles.cardTitle}>Spinal Stabilization</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" }}>
                    Perform these exercises as isometric holds. Bracing your core protects your herniated disc by locking the spine in neutral.
                  </p>
                  <div className={styles.checklist}>
                    {initialDailyTasks.filter(t => t.category === "spine").map(task => (
                      <label key={task.id} className={styles.checkItem}>
                        <input
                          type="checkbox"
                          checked={!!completedTasks[task.id]}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span className={`${styles.checkText} ${completedTasks[task.id] ? styles.completed : ""}`}>
                          {task.label}
                          <small>{task.sub}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scapula Activation Card */}
                <div className={styles.card}>
                  <span className={`${styles.badge} ${styles.blue}`}>Serratus & Lower Traps</span>
                  <h4 className={styles.cardTitle}>Winged Scapula Fix</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" }}>
                    Strengthens the serratus anterior to pull the shoulder blades flat against your rib cage, reducing the winging effect.
                  </p>
                  <div className={styles.checklist}>
                    {initialDailyTasks.filter(t => t.category === "scapula").map(task => (
                      <label key={task.id} className={styles.checkItem}>
                        <input
                          type="checkbox"
                          checked={!!completedTasks[task.id]}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span className={`${styles.checkText} ${completedTasks[task.id] ? styles.completed : ""}`}>
                          {task.label}
                          <small>{task.sub}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Desk Posture Card */}
                <div className={styles.card}>
                  <span className={`${styles.badge} ${styles.orange}`}>Programmer Recovery</span>
                  <h4 className={styles.cardTitle}>Chest Opening & Breaks</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" }}>
                    Counteracts the hunched desk posture. Elongates the tight pectoralis minor and opens up restricted thoracic extension.
                  </p>
                  <div className={styles.checklist}>
                    {initialDailyTasks.filter(t => t.category === "posture").map(task => (
                      <label key={task.id} className={styles.checkItem}>
                        <input
                          type="checkbox"
                          checked={!!completedTasks[task.id]}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span className={`${styles.checkText} ${completedTasks[task.id] ? styles.completed : ""}`}>
                          {task.label}
                          <small>{task.sub}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WEEKLY WORKOUT SPLIT TAB */}
          {activeTab === "workout" && (
            <div>
              <div className={styles.splitHeader}>
                <div>
                  <h3 style={{ marginBottom: "6px" }}>5-Day Hybrid Rehabilitation Split</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>
                    Rebuilds your glutes and hamstrings, corrects scapular posture, and develops safe athletic rotation.
                  </p>
                </div>
              </div>

              {/* Day Selector Buttons */}
              <div className={styles.daySelector}>
                {Object.keys(workoutSplit).map((day) => (
                  <button
                    key={day}
                    className={`${styles.dayBtn} ${activeWorkoutDay === day ? styles.active : ""}`}
                    onClick={() => setActiveWorkoutDay(day)}
                  >
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </button>
                ))}
              </div>

              {/* Workout Details Card */}
              <div className={styles.card} style={{ width: "100%", padding: "30px" }}>
                <span className={styles.badge}>
                  Focus: {workoutSplit[activeWorkoutDay].focus}
                </span>
                <h4 style={{ fontSize: "22px", fontFamily: "var(--font-heading)", color: "#fff", marginBottom: "20px" }}>
                  {workoutSplit[activeWorkoutDay].title}
                </h4>

                <div className={styles.exerciseList}>
                  {workoutSplit[activeWorkoutDay].exercises.map((ex, idx) => (
                    <div key={idx} className={styles.exerciseItem}>
                      <h5>
                        {ex.name}
                        <span>{ex.reps}</span>
                      </h5>
                      <p>{ex.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: "24px",
                  background: "rgba(0, 171, 108, 0.05)",
                  border: "1px dashed rgba(0, 171, 108, 0.2)",
                  padding: "16px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start"
                }}>
                  <FaInfoCircle style={{ color: "var(--primary-color)", fontSize: "18px", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0, lineHeight: "1.4" }}>
                    <strong>Execution Guidance:</strong> On all exercises, focus heavily on mind-muscle connection. Squeeze your glutes at the top of bridges, keep your belly drawn in to stabilize your lower back, and depress your scapula (shoulders down) before drawing back during rows.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* NUTRITION & MEAL PLAN TAB */}
          {activeTab === "nutrition" && (
            <div className={styles.nutritionPanel}>
              {/* Daily Meal Plan Details */}
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "#fff", marginBottom: "20px" }}>
                  Weekly Structured Eating Routine
                </h3>

                {/* Day selector sub-tabs */}
                <div className={styles.daySelector}>
                  {nutritionDays.map((dayPlan, index) => (
                    <button
                      key={index}
                      className={`${styles.dayBtn} ${activeNutritionDay === index ? styles.active : ""}`}
                      onClick={() => setActiveNutritionDay(index)}
                    >
                      {dayPlan.day}
                    </button>
                  ))}
                </div>

                <div className={styles.curfewNote}>
                  <FaClock />
                  <span><strong>Heartburn Curfew Reminder:</strong> No foods or liquids within 3 hours of sleep. Stay fully upright for at least 30 mins after every meal to support digestion.</span>
                </div>

                <div className={styles.mealCard}>
                  <h4>Structured Meals — {nutritionDays[activeNutritionDay].day}</h4>
                  
                  {nutritionDays[activeNutritionDay].meals.map((meal, idx) => {
                    const hasProteinSwap = !!meal.proteinCategory;

                    return (
                      <div key={idx} className={styles.mealRow}>
                        <strong>{meal.name}</strong>
                        <span>
                          {hasProteinSwap ? (
                            <>
                              {meal.text.split("{$protein}").map((part, pIdx, arr) => (
                                <span key={pIdx}>
                                  {part}
                                  {pIdx < arr.length - 1 && (
                                    <span className={styles.swapContainer}>
                                      <select
                                        className={styles.proteinSelector}
                                        value={selectedProteins[meal.id] || ""}
                                        onChange={(e) => handleProteinChange(meal.id, e.target.value)}
                                      >
                                        {proteinGroups[meal.proteinCategory].map((prot, protIdx) => (
                                          <option key={protIdx} value={prot}>
                                            {prot}
                                          </option>
                                        ))}
                                      </select>
                                    </span>
                                  )}
                                </span>
                              ))}
                            </>
                          ) : (
                            meal.text
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Side Guidelines Panel */}
              <div className={styles.guideCard}>
                <h4>Cholesterol & GERD Guidelines</h4>
                <ul>
                  <li>
                    <strong>Saturated Fats Limit:</strong> No butter, heavy cream, ghee, fatty red meat, or coconut oil. Replace with extra virgin olive oil or avocado oil.
                  </li>
                  <li>
                    <strong>Focus on Soluble Fiber:</strong> Oats, ground flaxseeds, chia seeds, apples, pears, and legumes draw cholesterol out of the blood stream.
                  </li>
                  <li>
                    <strong>Serrated/Small Meals:</strong> Eat slowly, do not overfill the stomach (which triggers acid reflux).
                  </li>
                  <li>
                    <strong>Omega-3 Fish:</strong> Eat wild salmon, mackerel, or cod 2-3 times per week to naturally improve LDL/HDL ratios.
                  </li>
                </ul>

                <div className={styles.avoidList}>
                  <h5>🚫 Reflux Triggers (Omit Completely)</h5>
                  <ul style={{ paddingLeft: "18px" }}>
                    <li>Excessive caffeine / coffee</li>
                    <li>Citrus fruits (oranges, grapefruits, lemons)</li>
                    <li>Tomatoes and tomato-based sauces</li>
                    <li>Spicy spices and chili peppers</li>
                    <li>Heavy garlic and onions (cooked/raw)</li>
                    <li>Peppermint and chocolate</li>
                    <li>Deep-fried or greasy food</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SPORTS PREHAB TAB */}
          {activeTab === "sports" && (
            <div>
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "#fff", marginBottom: "6px" }}>
                  5-10 Min Pre-Sport Activation Drills
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>
                  Perform these quick, targeted prehab drills immediately before participating in your favorite sports.
                </p>
              </div>

              <div className={styles.sportsGrid}>
                {/* Running */}
                <div className={styles.sportsCard}>
                  <div className={styles.sportsHeader}>
                    <span>🏃</span>
                    <h4>Running Prehab</h4>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                    <strong>Goal:</strong> Fire up the glutes and hamstrings to absorb high impact shock, relieving pressure on your herniated disc.
                  </p>
                  <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "13px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>• <strong>Single-Leg Glute Bridges:</strong> 10-12 reps per leg (focus on hip extension).</li>
                    <li>• <strong>Hamstring Walkouts:</strong> 6 controlled reps from bridge position.</li>
                    <li>• <strong>Dynamic Walking Lunges:</strong> 10 steps per side (stretches tight hips).</li>
                  </ul>
                </div>

                {/* Cycling */}
                <div className={styles.sportsCard}>
                  <div className={styles.sportsHeader}>
                    <span>🚴</span>
                    <h4>Cycling Prehab</h4>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                    <strong>Goal:</strong> Open up the chest and stretch out hips to counteract the hunched, flexed spine on the bike.
                  </p>
                  <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "13px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>• <strong>Couch/Hip Flexor Stretch:</strong> 1-minute hold per side (lengthens hip flexor).</li>
                    <li>• <strong>Doorframe Chest Opener:</strong> 45-second chest and front shoulder release.</li>
                    <li>• <strong>Thoracic extension:</strong> 8-10 slow rolls across mid-back on a foam roller.</li>
                  </ul>
                </div>

                {/* Padel */}
                <div className={styles.sportsCard}>
                  <div className={styles.sportsHeader}>
                    <span>🎾</span>
                    <h4>Padel Prehab</h4>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                    <strong>Goal:</strong> Activate shoulder blades for overhead smash safety and stabilize lateral hips for sharp cutting.
                  </p>
                  <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "13px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>• <strong>Serratus Wall Slides:</strong> 12 reps with resistance band around wrists.</li>
                    <li>• <strong>Lateral Band Walks:</strong> 12 steps left/right (stabilizes side glutes).</li>
                    <li>• <strong>Rotator Cuff external pull:</strong> 15 slow controlled pulls with a band.</li>
                  </ul>
                </div>

                {/* Golf */}
                <div className={styles.sportsCard}>
                  <div className={styles.sportsHeader}>
                    <span>🏌️</span>
                    <h4>Golf Prehab</h4>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                    <strong>Goal:</strong> Develop pure, safe thoracic rotation while keeping your lower/lumbar spine locked and braced.
                  </p>
                  <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "13px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>• <strong>Half-Kneeling Thoracic Rotations:</strong> 10 rotations per side (lumbar stays forward).</li>
                    <li>• <strong>Band Pallof Press:</strong> 12 presses per side (isometric anti-rotational brace).</li>
                    <li>• <strong>Dynamic Glute Kickbacks:</strong> 12 reps per leg (activates powerful hip extension).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
