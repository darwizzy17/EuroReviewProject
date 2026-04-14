/* =============================================================
   CENTURY OF CONFLICT — Main JavaScript
   
   HOW TO EDIT THIS FILE:
   ─────────────────────────────────────────────────────────────
   All content you need to change is in the DATA SECTION below
   (marked with ✏️ EDIT). The engine code at the bottom runs
   automatically — you don't need to touch it.
   
   DATA you can edit:
     TIMELINE_DATA   — timeline events for intro & WWII sections
     QUIZ_DATA       — all quiz questions for every section
     FLASHCARD_DATA  — flashcard terms & definitions
     COMPARISON_DATA — Versailles vs. 14 Points dropdown
     CHART_DATA      — numbers for the economic graphs
     GALLERY_DATA    — primary source gallery images
     ART_DATA        — art movement descriptions
     MATCH_DATA      — matching activity pairs
   ============================================================= */

/* =============================================================
   ✏️ EDIT: TIMELINE DATA
   Format: { year, title, detail }
   ============================================================= */
const TIMELINE_DATA = {
  intro: [
    {
      year: "1900",
      title: "Europe at a Glance",
      detail: "European empires control vast colonial territories. Britain, France, Germany, Austria-Hungary, and Russia are the dominant powers. Rapid industrialization is transforming economies and fueling military buildups."
    },
    {
      year: "1905",
      title: "First Moroccan Crisis",
      detail: "Germany challenges France's influence in Morocco, testing the Entente Cordiale. The crisis reveals the fragility of European diplomacy and the risk of miscalculation."
    },
    {
      year: "1908",
      title: "Austria Annexes Bosnia",
      detail: "Austria-Hungary annexes Bosnia-Herzegovina, enraging Serbia and alarming Russia. Pan-Slavic nationalism in the Balkans intensifies, setting the stage for future conflict."
    },
    {
      year: "1912–1913",
      title: "Balkan Wars",
      detail: "Two wars reshape the Balkans. The Ottoman Empire loses most of its European territory. Serbia emerges stronger, alarming Austria-Hungary. Tensions in the region reach a breaking point."
    },
    {
      year: "June 28, 1914",
      title: "Assassination of Franz Ferdinand",
      detail: "Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, is assassinated in Sarajevo by Gavrilo Princip, a Bosnian-Serb nationalist with ties to the Black Hand secret society. The spark is lit."
    }
  ],

  ww2: [
    {
      year: "Sept 1, 1939",
      title: "Germany Invades Poland",
      detail: "Using Blitzkrieg tactics — fast-moving tanks and air support — Germany overruns Poland in weeks. Britain and France declare war on Germany on September 3."
    },
    {
      year: "May–June 1940",
      title: "Fall of France",
      detail: "Germany bypasses the Maginot Line through the Ardennes. France falls in 6 weeks. Over 300,000 Allied troops are evacuated at Dunkirk. Britain stands alone."
    },
    {
      year: "Summer 1940",
      title: "Battle of Britain",
      detail: "The Luftwaffe attempts to destroy the RAF and clear the way for a German invasion. RAF Fighter Command holds on, aided by radar. Hitler abandons Operation Sea Lion."
    },
    {
      year: "June 22, 1941",
      title: "Operation Barbarossa",
      detail: "Germany launches the largest military invasion in history against the Soviet Union, opening a devastating Eastern Front. Initial German advances are enormous, but Soviet resistance stiffens."
    },
    {
      year: "Feb 1943",
      title: "Battle of Stalingrad",
      detail: "German 6th Army is encircled and destroyed at Stalingrad. Nearly 800,000 Axis casualties. Widely considered the turning point of the war in Europe."
    },
    {
      year: "June 6, 1944",
      title: "D-Day — Normandy Landings",
      detail: "Over 156,000 Allied troops land on five Normandy beaches in the largest seaborne invasion in history. The liberation of Western Europe begins."
    },
    {
      year: "May 8, 1945",
      title: "V-E Day — Victory in Europe",
      detail: "Germany signs an unconditional surrender. The war in Europe is over. Europe lies devastated; millions are dead. The post-war order is about to be negotiated."
    }
  ]
};

/* =============================================================
   ✏️ EDIT: QUIZ DATA
   Format: { q, options: ["A","B","C","D"], answer: 0 }
   answer is the INDEX (0-3) of the correct option
   ============================================================= */
const QUIZ_DATA = {
  "quiz-intro": [
    {
      q: "Which of the following was NOT one of the main causes of World War I?",
      options: [
        "Militarism and the European arms race",
        "The alliance system between major powers",
        "The discovery of oil in the Middle East",
        "Nationalism, especially in the Balkans"
      ],
      answer: 2
    },
    {
      q: "The Triple Entente consisted of which three powers?",
      options: [
        "Germany, Austria-Hungary, and Italy",
        "France, Russia, and Britain",
        "Britain, the United States, and France",
        "Germany, Russia, and Ottoman Empire"
      ],
      answer: 1
    },
    {
      q: "What was the 'Blank Check'?",
      options: [
        "A British war loan to France",
        "Germany's unconditional support given to Austria-Hungary",
        "Austria-Hungary's ultimatum to Serbia",
        "A peace proposal made by Woodrow Wilson"
      ],
      answer: 1
    }
  ],

  "quiz-ww1": [
    {
      q: "What military strategy defined the Western Front from 1914–1918?",
      options: [
        "Blitzkrieg — fast armored advances",
        "Trench warfare — static defensive lines",
        "Guerrilla tactics in dense forests",
        "Naval blockades of major cities"
      ],
      answer: 1
    },
    {
      q: "Which was the first major use of poison gas in WWI?",
      options: [
        "The Battle of the Somme (1916)",
        "The Battle of Verdun (1916)",
        "The Second Battle of Ypres (1915)",
        "The Battle of the Marne (1914)"
      ],
      answer: 2
    },
    {
      q: "How did WWI qualify as a 'total war'?",
      options: [
        "It was fought on every continent",
        "It involved the mobilization of entire civilian economies and societies",
        "It was the deadliest war in human history",
        "It lasted longer than any previous European war"
      ],
      answer: 1
    }
  ],

  "quiz-interwar": [
    {
      q: "What was the 'War Guilt Clause' of the Treaty of Versailles?",
      options: [
        "A provision requiring Germany to disarm completely",
        "Article 231, which blamed Germany for the war and justified reparations",
        "A clause preventing Germany from joining the League of Nations",
        "A requirement that Germany return all colonial territories"
      ],
      answer: 1
    },
    {
      q: "How did the Great Depression help Hitler rise to power in Germany?",
      options: [
        "It caused Germany to default on war debts, enraging the Allies",
        "Mass unemployment and economic despair made extremist politics more appealing",
        "American banks funded Nazi party campaign efforts",
        "The Depression caused France to withdraw troops from the Rhineland"
      ],
      answer: 1
    },
    {
      q: "Fascism differed from communism primarily in that fascism:",
      options: [
        "Rejected violence as a political tool",
        "Supported international cooperation between workers",
        "Glorified the nation-state and ethnic identity rather than class struggle",
        "Advocated for the abolition of private property"
      ],
      answer: 2
    }
  ],

  "quiz-ww2": [
    {
      q: "What was Blitzkrieg?",
      options: [
        "A German strategic bombing campaign against British cities",
        "A fast, coordinated attack combining tanks, aircraft, and infantry",
        "A Soviet counterattack strategy used at Stalingrad",
        "The Allied amphibious invasion strategy used on D-Day"
      ],
      answer: 1
    },
    {
      q: "Which battle is most commonly identified as the turning point on the Eastern Front?",
      options: [
        "Battle of Kursk",
        "Siege of Leningrad",
        "Battle of Stalingrad",
        "Battle of Moscow"
      ],
      answer: 2
    },
    {
      q: "What was the purpose of the Marshall Plan?",
      options: [
        "To fund the Allied invasion of Normandy",
        "To rebuild Western European economies after WWII",
        "To establish the United Nations",
        "To prosecute Nazi war criminals at Nuremberg"
      ],
      answer: 1
    }
  ],

  "quiz-coldwar": [
    {
      q: "What was the 'Iron Curtain'?",
      options: [
        "A literal steel barrier built along the Soviet border",
        "Churchill's term for the ideological and political division of Europe",
        "A U.S. policy to contain Soviet expansion",
        "The border fence separating East and West Berlin"
      ],
      answer: 1
    },
    {
      q: "NATO was formed in 1949 primarily to:",
      options: [
        "Coordinate the Marshall Plan economic aid",
        "Provide a collective military defense against Soviet expansion",
        "Rebuild war-damaged European infrastructure",
        "Oversee nuclear weapons agreements with the USSR"
      ],
      answer: 1
    },
    {
      q: "The Berlin Wall was built in:",
      options: ["1949", "1955", "1961", "1968"],
      answer: 2
    }
  ],

  "quiz-culture": [
    {
      q: "Which art movement, developed by Picasso and Braque, broke objects into fragmented geometric forms?",
      options: ["Surrealism", "Expressionism", "Cubism", "Dada"],
      answer: 2
    },
    {
      q: "Dada was primarily a reaction to:",
      options: [
        "The optimism of the Belle Époque",
        "The perceived absurdity and irrationality of WWI",
        "The rise of fascism in the 1930s",
        "Technological progress and industrialization"
      ],
      answer: 1
    },
    {
      q: "Wilfred Owen's WWI poetry is best characterized as:",
      options: [
        "Glorifying sacrifice and patriotic duty",
        "Documenting the brutal reality of trench warfare with irony and tragedy",
        "Celebrating industrial progress and modern warfare",
        "Abstract and disconnected from political events"
      ],
      answer: 1
    }
  ],

  "quiz-final": [
    {
      q: "Which event is most directly responsible for triggering WWI?",
      options: [
        "The sinking of the Lusitania",
        "The assassination of Archduke Franz Ferdinand",
        "Germany's invasion of Belgium",
        "The formation of the Triple Entente"
      ],
      answer: 1
    },
    {
      q: "The Weimar Republic's instability was primarily caused by all of the following EXCEPT:",
      options: [
        "Massive war reparations imposed by Versailles",
        "Hyperinflation in the early 1920s",
        "The Great Depression of the 1930s",
        "German military victories in WWII"
      ],
      answer: 3
    },
    {
      q: "What diplomatic strategy did Britain and France use to avoid war with Hitler throughout the 1930s?",
      options: [
        "Collective security through the League of Nations",
        "Appeasement — conceding to Hitler's demands hoping to prevent war",
        "Military deterrence through rapid rearmament",
        "Proxy wars funded through covert operations"
      ],
      answer: 1
    },
    {
      q: "The Truman Doctrine (1947) committed the United States to:",
      options: [
        "Fund the rebuilding of Western European economies",
        "Support free peoples resisting communist subversion or aggression",
        "Pursue nuclear disarmament with the Soviet Union",
        "Establish the United Nations"
      ],
      answer: 1
    }
  ]
};

/* =============================================================
   ✏️ EDIT: FLASHCARD DATA
   Format: { front: "Term", back: "Definition or explanation" }
   ============================================================= */
const FLASHCARD_DATA = [
  { front: "Triple Entente", back: "Military alliance between France, Russia, and Britain before WWI." },
  { front: "Trench Warfare", back: "Military strategy of fighting from fortified ditches; defined the WWI Western Front and led to years of stalemate." },
  { front: "War Guilt Clause", back: "Article 231 of the Treaty of Versailles; forced Germany to accept responsibility for WWI and justified massive reparations." },
  { front: "Blitzkrieg", back: "German for 'lightning war.' A fast, combined-arms attack using tanks, motorized infantry, and close air support to overwhelm defenses before they can react." },
  { front: "Appeasement", back: "British/French policy of making concessions to Hitler in the 1930s to avoid war; symbolized by the Munich Agreement (1938)." },
  { front: "Iron Curtain", back: "Churchill's 1946 term for the political and ideological boundary dividing Soviet-dominated Eastern Europe from the democratic West." },
  { front: "Marshall Plan", back: "U.S. economic aid program (1948) that provided $13 billion to rebuild war-devastated Western European economies and prevent communist influence." },
  { front: "Fourteen Points", back: "Woodrow Wilson's 1918 plan for post-WWI peace, emphasizing self-determination, open diplomacy, freedom of the seas, and a League of Nations." },
  { front: "Total War", back: "A conflict in which an entire nation's economy, population, and resources are mobilized for war. WWI and WWII both qualify." },
  { front: "Holocaust", back: "The systematic, state-sponsored murder of 6 million Jews and millions of others (Roma, disabled, political prisoners) by the Nazi regime between 1941–1945." },
  { front: "NATO", back: "North Atlantic Treaty Organization, founded in 1949. A collective defense alliance: an attack on one member is considered an attack on all." },
  { front: "Cubism", back: "Art movement (c. 1907–1920) pioneered by Picasso and Braque; depicted subjects from multiple perspectives simultaneously, fracturing traditional representation." }
];

/* =============================================================
   ✏️ EDIT: COMPARISON DATA (Versailles vs. 14 Points)
   Format: { label, wilson, versailles }
   ============================================================= */
const COMPARISON_DATA = [
  {
    value: "territorial",
    label: "Territorial Changes",
    wilson: "Point 10: Self-determination — peoples should choose their own governments. No punitive territorial seizures.",
    versailles: "Germany lost Alsace-Lorraine (to France), the Polish Corridor, and all overseas colonies. The new borders often ignored ethnic realities."
  },
  {
    value: "reparations",
    label: "Reparations",
    wilson: "No punitive indemnities. Wilson did not endorse massive financial penalties on the defeated powers.",
    versailles: "Germany was required to pay £6.6 billion in reparations (Article 231 / War Guilt Clause) — a sum that crippled the German economy."
  },
  {
    value: "military",
    label: "Military Restrictions",
    wilson: "Point 4: Reduction of armaments to the lowest point consistent with domestic safety, applied to all nations.",
    versailles: "Germany's army was limited to 100,000 men, no air force, no submarines, and demilitarization of the Rhineland — only Germany was disarmed."
  },
  {
    value: "league",
    label: "League of Nations",
    wilson: "Point 14: A general association of nations to guarantee political independence and territorial integrity — the centerpiece of Wilson's vision.",
    versailles: "The League was created but Germany was excluded (until 1926). The U.S. Senate refused to ratify the treaty, so the U.S. never joined."
  }
];

/* =============================================================
   ✏️ EDIT: CHART DATA (economic graphs)
   ============================================================= */
const CHART_DATA = {
  inflation: {
    label: "German Mark / US Dollar Exchange Rate",
    years: ["1919", "1920", "1921", "1922", "1923 (Jan)", "1923 (Jul)", "1923 (Nov)"],
    values: [14, 65, 160, 7000, 17800, 160000, 4200000000000],
    note: "Note: 1923 Nov value is 4.2 trillion — shown on log scale"
  },
  unemployment: {
    label: "German Unemployment Rate (%)",
    years: ["1928", "1929", "1930", "1931", "1932", "1933"],
    values: [8.4, 13.1, 22.2, 33.7, 43.7, 26.3]
  }
};

/* =============================================================
   ✏️ EDIT: GALLERY DATA (Primary Sources)
   Format: { src, caption, alt }
   To add real images: place image files in /assets/images/ 
   and update src accordingly.
   ============================================================= */
const GALLERY_DATA = {
  "gallery-ww1": [
    { src: null, caption: "WWI Recruitment Poster (add image to /assets/images/)", alt: "Recruitment Poster" },
    { src: null, caption: "Trench conditions, Western Front (add image)", alt: "Trench Warfare" },
    { src: null, caption: "Propaganda poster, home front (add image)", alt: "Propaganda Poster" },
    { src: null, caption: "Letter from the front (add image)", alt: "Soldier's Letter" }
  ]
};

/* =============================================================
   ✏️ EDIT: ART MOVEMENT DATA
   ============================================================= */
const ART_DATA = {
  cubism: {
    title: "Cubism (c. 1907–1920)",
    artists: "Pablo Picasso, Georges Braque",
    description: "Cubism broke with centuries of Western painting tradition by depicting subjects from multiple perspectives at once, fracturing the image into geometric planes. In the context of WWI, Cubism can be read as a visual metaphor for a shattered world — no single unified viewpoint could make sense of modern experience.",
    works: "Les Demoiselles d'Avignon (Picasso, 1907), Violin and Candlestick (Braque, 1910)",
    connection: "Pre-war Cubism anticipated the fragmentation and disorientation that the Great War would make universal."
  },
  expressionism: {
    title: "Expressionism (c. 1905–1930s)",
    artists: "Ernst Ludwig Kirchner, Egon Schiele, Otto Dix",
    description: "Expressionism distorted reality to convey intense emotional experience. German and Austrian Expressionists depicted anxiety, alienation, and suffering. After WWI, artists like Otto Dix produced devastating anti-war works showing the grotesque reality of modern combat.",
    works: "Der Krieg (The War) triptych — Otto Dix (1929–1932)",
    connection: "Expressionism gave artists a language to process the psychological trauma of industrial warfare."
  },
  dada: {
    title: "Dada (c. 1916–1924)",
    artists: "Hugo Ball, Marcel Duchamp, Hannah Höch, Tristan Tzara",
    description: "Founded in Zurich in 1916, Dada was a direct reaction to the perceived madness of WWI. Dadaists argued that if rational Western civilization had produced the bloodbath of industrialized warfare, then all traditional art and logic should be rejected in favor of absurdity and anti-art.",
    works: "Fountain (Duchamp, 1917), Cut with the Kitchen Knife (Hannah Höch, 1919)",
    connection: "Dada was the most radical artistic rejection of the civilization that produced WWI."
  },
  surrealism: {
    title: "Surrealism (c. 1924–1940s)",
    artists: "Salvador Dalí, René Magritte, Max Ernst",
    description: "Surrealism, emerging from Dada, sought to unlock the unconscious mind through dreamlike imagery and irrational juxtapositions. Influenced by Freudian psychology, Surrealists explored trauma, desire, and the dark undercurrents of human experience — themes directly relevant to the post-WWI era.",
    works: "The Persistence of Memory (Dalí, 1931), The Son of Man (Magritte, 1964)",
    connection: "Surrealism explored the psychological damage of WWI, giving visual form to trauma and the collapse of rational order."
  }
};

/* =============================================================
   ✏️ EDIT: MATCHING ACTIVITY DATA
   Format: { works: ["Work Title", ...], authors: ["Author/Movement", ...], pairs: {0:1, 1:0, ...} }
   pairs maps index in 'works' to index in 'authors'
   ============================================================= */
const MATCH_DATA = {
  works: [
    "All Quiet on the Western Front",
    "Les Demoiselles d'Avignon",
    "Dulce et Decorum Est",
    "The Persistence of Memory"
  ],
  authors: [
    "Salvador Dalí — Surrealism",
    "Wilfred Owen — War Poetry",
    "Erich Maria Remarque — Anti-War Novel",
    "Pablo Picasso — Cubism"
  ],
  // ✏️ pairs: index in 'works' → index in 'authors'
  pairs: { 0: 2, 1: 3, 2: 1, 3: 0 }
};


/* =============================================================
   ENGINE — DO NOT NEED TO EDIT BELOW THIS LINE
   (unless you want to change interactive behavior)
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initProgress();
  initTimelines();
  initTabs();
  initQuizzes();
  initFlashcards();
  initComparison();
  initCharts();
  initGalleries();
  initArtGallery();
  initMatchingActivity();
  initScrollFade();
});

/* ---- NAVBAR ---- */
function initNavbar() {
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");
  if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll(".content-section, #hero");
  const navLinks  = document.querySelectorAll(".nav-links a");
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

/* ---- SCROLL PROGRESS BAR ---- */
function initProgress() {
  const bar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrolled / total) * 100}%`;
  });
}

/* ---- TIMELINES ---- */
function initTimelines() {
  Object.entries(TIMELINE_DATA).forEach(([key, events]) => {
    const el = document.getElementById(`timeline-${key}`);
    if (!el) return;
    events.forEach(ev => {
      const div = document.createElement("div");
      div.className = "timeline-event fade-in-section";
      div.innerHTML = `
        <div class="event-year">${ev.year}</div>
        <div class="event-title">${ev.title}</div>
        <div class="event-detail">${ev.detail}</div>
      `;
      div.addEventListener("click", () => div.classList.toggle("open"));
      el.appendChild(div);
    });
  });
}

/* ---- TABS ---- */
function initTabs() {
  document.querySelectorAll(".tab-nav").forEach(nav => {
    nav.addEventListener("click", e => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;
      nav.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.dataset.tab;
      const section  = nav.closest(".content-section, .section-body");
      section.querySelectorAll(".tab-content").forEach(tc => {
        tc.classList.toggle("active", tc.id === targetId);
      });
    });
  });
}

/* ---- QUIZZES ---- */
function initQuizzes() {
  Object.entries(QUIZ_DATA).forEach(([id, questions]) => {
    const container = document.getElementById(id);
    if (!container) return;
    const inner = container.querySelector(".quiz-inner");
    renderQuiz(inner, questions);
  });
}

function renderQuiz(inner, questions) {
  inner.innerHTML = "";
  questions.forEach((q, qi) => {
    const block = document.createElement("div");
    block.className = "quiz-question-block";
    block.innerHTML = `<div class="quiz-q">Q${qi + 1}. ${q.q}</div>`;

    const opts = document.createElement("div");
    opts.className = "quiz-options";
    q.options.forEach((opt, oi) => {
      const label = document.createElement("label");
      label.className = "quiz-option";
      label.innerHTML = `<input type="radio" name="q${qi}-${Date.now()}" value="${oi}"> ${opt}`;
      label.addEventListener("click", () => {
        opts.querySelectorAll(".quiz-option").forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
      });
      opts.appendChild(label);
    });

    block.appendChild(opts);
    inner.appendChild(block);
  });

  const submitBtn = document.createElement("button");
  submitBtn.className = "quiz-submit";
  submitBtn.textContent = "Check Answers";
  const scoreEl = document.createElement("div");
  scoreEl.className = "quiz-score hidden";

  submitBtn.addEventListener("click", () => {
    let score = 0;
    inner.querySelectorAll(".quiz-question-block").forEach((block, qi) => {
      const selected = block.querySelector(".quiz-option.selected");
      const allOpts  = block.querySelectorAll(".quiz-option");
      allOpts.forEach((l, oi) => {
        l.classList.remove("correct", "wrong");
        if (oi === questions[qi].answer) l.classList.add("correct");
      });
      if (selected) {
        const val = parseInt(selected.querySelector("input").value);
        if (val === questions[qi].answer) { score++; }
        else { selected.classList.add("wrong"); }
      }
    });
    scoreEl.classList.remove("hidden");
    scoreEl.textContent = `Score: ${score} / ${questions.length} — ${score === questions.length ? "Perfect!" : score >= questions.length / 2 ? "Good work!" : "Keep reviewing!"}`;
  });

  inner.appendChild(submitBtn);
  inner.appendChild(scoreEl);
}

/* ---- FLASHCARDS ---- */
let currentCard = 0;
let cardFlipped  = false;

function initFlashcards() {
  const front   = document.getElementById("cardFront");
  const back    = document.getElementById("cardBack");
  const counter = document.getElementById("cardCounter");
  if (!front) return;

  function showCard(idx) {
    cardFlipped = false;
    const c = FLASHCARD_DATA[idx];
    front.textContent = c.front;
    back.textContent  = c.back;
    back.classList.add("hidden");
    front.classList.remove("hidden");
    counter.textContent = `${idx + 1} / ${FLASHCARD_DATA.length}`;
  }

  document.getElementById("prevCard").addEventListener("click", () => {
    currentCard = (currentCard - 1 + FLASHCARD_DATA.length) % FLASHCARD_DATA.length;
    showCard(currentCard);
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    currentCard = (currentCard + 1) % FLASHCARD_DATA.length;
    showCard(currentCard);
  });

  showCard(0);

  const card = document.getElementById("flashcard");
  if (card) {
    const hint = document.createElement("div");
    hint.className = "flip-hint";
    hint.textContent = "click to flip";
    card.appendChild(hint);
  }
}

window.flipCard = function() {
  cardFlipped = !cardFlipped;
  document.getElementById("cardFront").classList.toggle("hidden", cardFlipped);
  document.getElementById("cardBack").classList.toggle("hidden", !cardFlipped);
};

/* ---- COMPARISON DROPDOWN ---- */
function initComparison() {
  const select = document.getElementById("compareSelect");
  if (!select) return;
  COMPARISON_DATA.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.value;
    opt.textContent = item.label;
    select.appendChild(opt);
  });
}

window.showComparison = function(value) {
  const result = document.getElementById("compareResult");
  if (!value) { result.classList.add("hidden"); return; }
  const item = COMPARISON_DATA.find(c => c.value === value);
  if (!item) return;
  result.innerHTML = `
    <div class="compare-col">
      <div class="compare-col-title">Wilson's Fourteen Points</div>
      <p>${item.wilson}</p>
    </div>
    <div class="compare-col">
      <div class="compare-col-title">Treaty of Versailles (1919)</div>
      <p>${item.versailles}</p>
    </div>
  `;
  result.classList.remove("hidden");
};

/* ---- CHARTS ---- */
function initCharts() {
  const inf = document.getElementById("inflationChart");
  if (inf) {
    new Chart(inf, {
      type: "bar",
      data: {
        labels: CHART_DATA.inflation.years,
        datasets: [{
          label: CHART_DATA.inflation.label,
          data: CHART_DATA.inflation.values,
          backgroundColor: "rgba(139,26,26,0.7)",
          borderColor: "rgba(139,26,26,1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { type: "logarithmic", title: { display: true, text: "Marks per USD (log scale)" } } },
        plugins: { legend: { display: false }, title: { display: true, text: "German Hyperinflation 1919–1923" } }
      }
    });
  }

  const une = document.getElementById("unemploymentChart");
  if (une) {
    new Chart(une, {
      type: "line",
      data: {
        labels: CHART_DATA.unemployment.years,
        datasets: [{
          label: CHART_DATA.unemployment.label,
          data: CHART_DATA.unemployment.values,
          borderColor: "rgba(139,26,26,1)",
          backgroundColor: "rgba(139,26,26,0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        scales: { y: { min: 0, max: 50, title: { display: true, text: "Unemployment (%)" } } },
        plugins: { legend: { display: false }, title: { display: true, text: "German Unemployment 1928–1933" } }
      }
    });
  }
}

/* ---- GALLERIES ---- */
function initGalleries() {
  Object.entries(GALLERY_DATA).forEach(([id, items]) => {
    const grid = document.getElementById(id);
    if (!grid) return;
    items.forEach(item => {
      const div = document.createElement("div");
      if (item.src) {
        div.className = "gallery-item";
        div.innerHTML = `<img src="${item.src}" alt="${item.alt}"><div class="gallery-caption">${item.caption}</div>`;
      } else {
        div.className = "gallery-placeholder";
        div.innerHTML = `<span>🖼</span><p>${item.caption}</p>`;
      }
      grid.appendChild(div);
    });
  });
}

/* ---- ART GALLERY ---- */
function initArtGallery() {
  const panel = document.getElementById("art-panel");
  if (!panel) return;

  function showMovement(key) {
    const d = ART_DATA[key];
    if (!d) return;
    panel.innerHTML = `
      <h4>${d.title}</h4>
      <p><strong>Key Artists:</strong> ${d.artists}</p>
      <p>${d.description}</p>
      <p><strong>Notable Works:</strong> ${d.works}</p>
      <p><em><strong>Connection to conflict:</strong> ${d.connection}</em></p>
    `;
  }

  document.querySelectorAll(".art-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".art-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showMovement(btn.dataset.movement);
    });
  });

  showMovement("cubism");
}

/* ---- MATCHING ACTIVITY ---- */
function initMatchingActivity() {
  const grid = document.getElementById("match-grid");
  if (!grid) return;

  const { works, authors, pairs } = MATCH_DATA;

  // Build left column (works)
  const leftCol = document.createElement("div");
  leftCol.className = "match-col";
  const leftTitle = document.createElement("div");
  leftTitle.className = "match-col-title";
  leftTitle.textContent = "Works";
  leftCol.appendChild(leftTitle);

  works.forEach((w, i) => {
    const div = document.createElement("div");
    div.className = "match-item";
    div.textContent = w;
    div.dataset.index = i;
    div.draggable = true;
    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", i);
      div.classList.add("dragging");
    });
    div.addEventListener("dragend", () => div.classList.remove("dragging"));
    leftCol.appendChild(div);
  });

  // Build right column (drop zones)
  const rightCol = document.createElement("div");
  rightCol.className = "match-col";
  const rightTitle = document.createElement("div");
  rightTitle.className = "match-col-title";
  rightTitle.textContent = "Authors / Movements";
  rightCol.appendChild(rightTitle);

  // Shuffle authors for display
  const shuffled = [...authors.keys()].sort(() => Math.random() - 0.5);
  shuffled.forEach(ai => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.textContent = authors[ai];
    zone.dataset.authorIndex = ai;

    zone.addEventListener("dragover", e => { e.preventDefault(); zone.classList.add("over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("over"));
    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("over");
      const workIdx = parseInt(e.dataTransfer.getData("text/plain"));
      zone.dataset.droppedWork = workIdx;
    });
    rightCol.appendChild(zone);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);

  const checkBtn = document.getElementById("checkMatch");
  const feedback = document.getElementById("matchFeedback");
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      const zones = rightCol.querySelectorAll(".drop-zone");
      let correct = 0;
      zones.forEach(zone => {
        const authorIdx = parseInt(zone.dataset.authorIndex);
        const workIdx   = parseInt(zone.dataset.droppedWork);
        if (isNaN(workIdx)) return;
        const isCorrect = pairs[workIdx] === authorIdx;
        zone.classList.toggle("match-item correct", isCorrect);
        zone.classList.toggle("match-item incorrect", !isCorrect);
        if (isCorrect) correct++;
      });
      feedback.classList.remove("hidden", "correct-fb", "wrong-fb");
      const filled = [...zones].filter(z => !isNaN(parseInt(z.dataset.droppedWork))).length;
      feedback.classList.add(correct === works.length ? "correct-fb" : "wrong-fb");
      feedback.textContent = correct === works.length
        ? `✓ All ${works.length} correct! Well done.`
        : `${correct} / ${filled} correct. Try again!`;
    });
  }
}

/* ---- SCROLL FADE-IN ---- */
function initScrollFade() {
  const els = document.querySelectorAll(".fade-in-section, .notes-block, .tab-content, .quiz-container, .timeline-container, .chart-section, .video-section, .art-gallery, .flashcard-section");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => { el.classList.add("fade-in-section"); obs.observe(el); });
}
