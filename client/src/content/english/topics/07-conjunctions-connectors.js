export const meta = {
  id: 7, sem: 2,
  title: 'Conjunctions & Connectors',
  desc: 'Coordinating, subordinating and correlative conjunctions; discourse markers'
}

export const notes = `
  <h2>Conjunctions &amp; Connectors</h2>
  <p class="topic-desc">Coordinating · Subordinating · Correlative · Discourse Markers · Sentence Types</p>

  <div class="notes-card">
    <h3>1. What Are Conjunctions?</h3>
    <p><strong>Conjunctions</strong> are words that join words, phrases, or clauses together.</p>
    <div class="example">
      There are three main types:<br>
      • <strong>Coordinating conjunctions</strong> — join equal or independent parts<br>
      • <strong>Subordinating conjunctions</strong> — join a dependent clause to an independent clause<br>
      • <strong>Correlative conjunctions</strong> — work in pairs to join equal parts
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Coordinating Conjunctions (FANBOYS)</h3>
    <p>The seven coordinating conjunctions can be remembered with the mnemonic <strong>FANBOYS</strong>.</p>
    <div class="example">
      <strong>F</strong>or — gives a reason<br>
      <strong>A</strong>nd — adds information<br>
      <strong>N</strong>or — adds a negative alternative<br>
      <strong>B</strong>ut — shows contrast<br>
      <strong>O</strong>r — gives a choice<br>
      <strong>Y</strong>et — shows contrast (similar to but)<br>
      <strong>S</strong>o — shows result<br><br>
      <em>Rule:</em> Use a <strong>comma before FANBOYS</strong> when joining two complete sentences (independent clauses).<br>
      <em>Example:</em> "I wanted to play<strong>,</strong> but it was raining."<br>
      <em>No comma:</em> "I like tea and coffee." (joining two words, not two sentences)
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Subordinating Conjunctions</h3>
    <p><strong>Subordinating conjunctions</strong> join a dependent (subordinate) clause to an independent clause.</p>
    <div class="example">
      <strong>Common subordinating conjunctions:</strong><br>
      because, although, when, while, if, since, until, before, after, unless, as, even though, so that, in order to<br><br>
      <strong>Comma rule:</strong><br>
      • Subordinate clause <strong>first</strong> → use a comma: <em>"Although it was late, we kept working."</em><br>
      • Subordinate clause <strong>second</strong> → no comma needed: <em>"We kept working although it was late."</em>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Correlative Conjunctions</h3>
    <p><strong>Correlative conjunctions</strong> work in pairs to join equal grammatical elements.</p>
    <div class="example">
      <strong>both … and</strong> — "Both Ali and Mei passed the test."<br>
      <strong>either … or</strong> — "Either the teacher or the students are wrong."<br>
      <strong>neither … nor</strong> — "Neither the cat nor the dogs were outside."<br>
      <strong>not only … but also</strong> — "She is not only smart but also hardworking."<br>
      <strong>whether … or</strong> — "I don't know whether to laugh or cry."<br><br>
      <em>Rules:</em><br>
      • Elements after each part must have <strong>parallel structure</strong>.<br>
      • For <strong>either/or</strong> and <strong>neither/nor</strong>, the verb agrees with the <strong>nearest subject</strong>.
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Discourse Markers / Connectors</h3>
    <p><strong>Discourse markers</strong> (also called connectors or transition words) link ideas between sentences or paragraphs.</p>
    <div class="example">
      <strong>Addition:</strong> Moreover, Furthermore, In addition, Besides<br>
      <strong>Contrast:</strong> However, Nevertheless, On the other hand, In contrast<br>
      <strong>Result:</strong> Therefore, As a result, Consequently, Thus<br>
      <strong>Example:</strong> For example, For instance, Such as<br>
      <strong>Summary:</strong> In conclusion, To sum up, Overall<br><br>
      <em>Punctuation:</em><br>
      • As a <strong>sentence starter</strong>: <em>"However, the plan failed."</em> (comma after)<br>
      • Joining two clauses: <em>"It rained; therefore, the match was cancelled."</em> (semicolon before, comma after)
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Sentence Types</h3>
    <p>Understanding conjunctions helps you identify and write different sentence types.</p>
    <div class="example">
      <strong>Simple sentence:</strong> one independent clause — <em>"She reads every day."</em><br>
      <strong>Compound sentence:</strong> two or more independent clauses joined by a FANBOYS conjunction or semicolon — <em>"She reads every day, and he writes every night."</em><br>
      <strong>Complex sentence:</strong> one independent clause + one or more dependent clauses joined by a subordinating conjunction — <em>"She reads every day because she loves books."</em>
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Common Errors</h3>
    <p>Watch out for these frequent mistakes with conjunctions and connectors.</p>
    <div class="example">
      <strong>Run-on sentence:</strong> two independent clauses with no punctuation or conjunction — <em>"I was tired I went home."</em> ✗<br>
      <strong>Comma splice:</strong> two independent clauses joined only by a comma — <em>"I was tired, I went home."</em> ✗<br>
      <strong>Redundant conjunctions:</strong> using <em>"Although … but"</em> together — <em>"Although it rained, but we went out."</em> ✗ (use only one)<br>
      <strong>Fragment:</strong> a subordinate clause standing alone — <em>"Because I was tired."</em> ✗ (incomplete thought)<br>
      <strong>Faulty parallel structure:</strong> <em>"She likes both reading and to swim."</em> ✗ → <em>"She likes both reading and swimming."</em> ✓
    </div>
  </div>
`

export const questions = [
  // ══════════════════════════════════════════════════
  // FANBOYS (Q1–Q25)
  // ══════════════════════════════════════════════════
  { q: "Choose the correct FANBOYS conjunction: \'I studied hard, ___ I passed the exam.\'", opts: ["so", "but", "or", "yet"], ans: 0, explain: "\'So\' shows result — studying hard led to passing the exam." },
  { q: "Which conjunction shows contrast? \'She is rich, ___ she is unhappy.\'", opts: ["and", "but", "so", "for"], ans: 1, explain: "\'But\' shows contrast between being rich and being unhappy." },
  { q: "Choose the correct conjunction: \'Would you like tea ___ coffee?\'", opts: ["and", "but", "or", "so"], ans: 2, explain: "\'Or\' is used to present a choice between two options." },
  { q: "Which conjunction gives a reason? \'He left early, ___ he had a meeting.\'", opts: ["but", "so", "or", "for"], ans: 3, explain: "\'For\' provides a reason or explanation for the previous clause." },
  { q: "What does FANBOYS stand for?", opts: ["For, And, Nor, But, Or, Yet, So", "First, After, Nor, Before, Or, Yet, So", "For, And, Not, But, Or, Yet, Since", "For, Also, Nor, But, Or, Yet, So"], ans: 0, explain: "FANBOYS is a mnemonic for the seven coordinating conjunctions: For, And, Nor, But, Or, Yet, So." },
  { q: "Which sentence uses a coordinating conjunction correctly?", opts: ["Although I was tired, I stayed up.", "I was tired, but I stayed up.", "Because I was tired, I slept.", "If I was tired, I would sleep."], ans: 1, explain: "\'But\' is a coordinating conjunction joining two independent clauses with a comma." },
  { q: "\'I don\'t like spinach, ___ do I like broccoli.\' Choose the correct conjunction.", opts: ["and", "but", "nor", "or"], ans: 2, explain: "\'Nor\' adds a second negative idea. \'I don\'t like X, nor do I like Y.\'" },
  { q: "Which conjunction adds information? \'She plays piano ___ she sings beautifully.\'", opts: ["but", "or", "yet", "and"], ans: 3, explain: "\'And\' is used to add information — both playing piano and singing." },
  { q: "Choose the correct punctuation: \'He was hungry ___ he ate lunch.\'", opts: [", so", "so", "; but", ", or"], ans: 0, explain: "When joining two independent clauses with a FANBOYS conjunction, use a comma before the conjunction: \', so\'." },
  { q: "\'She tried her best, ___ she did not succeed.\' Which conjunction fits?", opts: ["so", "yet", "for", "and"], ans: 1, explain: "\'Yet\' shows contrast (similar to \'but\') — she tried but didn\'t succeed." },
  { q: "Which is NOT a coordinating conjunction?", opts: ["and", "but", "because", "or"], ans: 2, explain: "\'Because\' is a subordinating conjunction, not a coordinating one. Coordinating conjunctions are FANBOYS." },
  { q: "Which sentence correctly uses a comma with FANBOYS?", opts: ["I like cats, and dogs.", "She ran, and jumped.", "He sang and danced.", "It was late, so we left."], ans: 3, explain: "A comma before FANBOYS is correct only when joining two complete sentences. \'It was late\' and \'we left\' are both independent clauses." },
  { q: "Identify the coordinating conjunction: \'The movie was long, but it was interesting.\'", opts: ["but", "was", "long", "interesting"], ans: 0, explain: "\'But\' is the coordinating conjunction joining two independent clauses." },
  { q: "\'You can stay here ___ go home.\' Which conjunction fits?", opts: ["and", "or", "but", "yet"], ans: 1, explain: "\'Or\' presents a choice between two options — staying or going." },
  { q: "Which conjunction shows a result? \'It rained heavily, ___ the match was cancelled.\'", opts: ["but", "or", "so", "yet"], ans: 2, explain: "\'So\' shows that the heavy rain resulted in the match being cancelled." },
  { q: "Which sentence does NOT need a comma before the conjunction?", opts: ["She sang, and he danced.", "We tried, but we failed.", "I studied hard, so I passed.", "He likes reading and writing."], ans: 3, explain: "\'He likes reading and writing\' joins two words (not two independent clauses), so no comma is needed." },
  { q: "\'I wanted to go, ___ it was too late.\' Which conjunction shows contrast?", opts: ["but", "so", "or", "and"], ans: 0, explain: "\'But\' shows contrast between wanting to go and it being too late." },
  { q: "How many coordinating conjunctions are there in English?", opts: ["5", "7", "9", "3"], ans: 1, explain: "There are 7 coordinating conjunctions: For, And, Nor, But, Or, Yet, So (FANBOYS)." },
  { q: "\'She is smart, ___ she is also kind.\' Choose the best conjunction.", opts: ["but", "so", "and", "or"], ans: 2, explain: "\'And\' adds information — she has both qualities (smart and kind)." },
  { q: "\'He didn\'t study, ___ he was confident about the test.\' Which conjunction fits?", opts: ["so", "for", "and", "yet"], ans: 3, explain: "\'Yet\' shows contrast — despite not studying, he was still confident." },
  { q: "Which coordinating conjunction means \'because\'?", opts: ["for", "so", "and", "but"], ans: 0, explain: "\'For\' can mean \'because\' and gives a reason. It is the least common FANBOYS conjunction." },
  { q: "Identify the error: \'I like apples, and oranges.\'", opts: ["Missing subject", "Unnecessary comma", "Wrong conjunction", "Missing full stop"], ans: 1, explain: "The comma is unnecessary because \'and\' is joining two words (apples and oranges), not two independent clauses." },
  { q: "\'We can go to the park ___ we can stay at home.\' Choose the conjunction.", opts: ["but", "for", "or", "and"], ans: 2, explain: "\'Or\' presents a choice between going to the park and staying at home." },
  { q: "\'He ran fast, ___ he still missed the bus.\' Which conjunction fits best?", opts: ["so", "for", "or", "but"], ans: 3, explain: "\'But\' shows contrast — running fast didn\'t help him catch the bus." },
  { q: "Which sentence uses \'so\' correctly as a FANBOYS conjunction?", opts: ["She was tired, so she went to bed.", "So she went to bed early.", "She is so tall.", "So far, everything is fine."], ans: 0, explain: "In the first option, \'so\' is a coordinating conjunction showing result, correctly joining two independent clauses with a comma." },

  // ══════════════════════════════════════════════════
  // SUBORDINATING CONJUNCTIONS (Q26–Q50)
  // ══════════════════════════════════════════════════
  { q: "\'___ it was raining, we stayed indoors.\' Choose the correct conjunction.", opts: ["But", "Because", "And", "So"], ans: 1, explain: "\'Because\' is a subordinating conjunction giving the reason for staying indoors." },
  { q: "\'___ she was tired, she finished her homework.\' Which conjunction shows contrast?", opts: ["Because", "Since", "Although", "When"], ans: 2, explain: "\'Although\' shows contrast — despite being tired, she still finished her homework." },
  { q: "\'I will wait ___ you come back.\' Choose the correct conjunction.", opts: ["although", "because", "if", "until"], ans: 3, explain: "\'Until\' means \'up to the time that\' — I will wait up to the point you return." },
  { q: "Which is a subordinating conjunction?", opts: ["because", "and", "but", "or"], ans: 0, explain: "\'Because\' is a subordinating conjunction that introduces a reason. The others are coordinating conjunctions." },
  { q: "\'You will fail ___ you study harder.\' Choose the correct conjunction.", opts: ["because", "unless", "although", "while"], ans: 1, explain: "\'Unless\' means \'if not\' — you will fail if you don\'t study harder." },
  { q: "\'___ I finish my homework, I will play outside.\' Choose the conjunction.", opts: ["Although", "Because", "After", "Unless"], ans: 2, explain: "\'After\' shows time — playing will happen after finishing homework." },
  { q: "\'She whispered ___ the baby was sleeping.\' Which conjunction fits?", opts: ["although", "until", "unless", "because"], ans: 3, explain: "\'Because\' gives the reason for whispering — the baby was sleeping." },
  { q: "Where should the comma go? \'Before we left we checked the windows.\'", opts: ["After \'left\'", "After \'we\' (second)", "After \'Before\'", "No comma needed"], ans: 0, explain: "When the subordinate clause comes first, place a comma after it: \'Before we left, we checked the windows.\'" },
  { q: "\'I was reading ___ my sister was watching TV.\' Choose the conjunction.", opts: ["because", "while", "until", "unless"], ans: 1, explain: "\'While\' shows two actions happening at the same time." },
  { q: "\'___ you see him, give him this letter.\' Choose the correct conjunction.", opts: ["Although", "Because", "If", "While"], ans: 2, explain: "\'If\' introduces a condition — give the letter on the condition that you see him." },
  { q: "Which sentence has the subordinate clause in the correct position without a comma?", opts: ["Although he was late, he was admitted.", "Because she studied, she passed.", "Since it rained, we stayed home.", "We stayed home because it rained."], ans: 3, explain: "When the subordinate clause comes second, no comma is needed: \'We stayed home because it rained.\'" },
  { q: "\'She practises piano every day ___ she wants to improve.\' Choose the conjunction.", opts: ["because", "although", "unless", "until"], ans: 0, explain: "\'Because\' gives the reason — she practises to improve." },
  { q: "\'We left ___ the show ended.\' Which conjunction indicates time?", opts: ["because", "before", "although", "unless"], ans: 1, explain: "\'Before\' is a subordinating conjunction of time — they left prior to the show ending." },
  { q: "\'___ he apologised, she refused to forgive him.\' Choose the conjunction.", opts: ["Because", "Until", "Even though", "So that"], ans: 2, explain: "\'Even though\' shows contrast — despite his apology, she didn\'t forgive him." },
  { q: "\'He saved money ___ he could buy a new bicycle.\' Choose the conjunction.", opts: ["because", "although", "unless", "so that"], ans: 3, explain: "\'So that\' shows purpose — saving money with the goal of buying a bicycle." },
  { q: "Which word is NOT a subordinating conjunction?", opts: ["yet", "when", "although", "because"], ans: 0, explain: "\'Yet\' is a coordinating conjunction (FANBOYS). The others are subordinating conjunctions." },
  { q: "\'___ the bell rings, everyone must be seated.\' Which conjunction fits?", opts: ["Although", "When", "Because", "Unless"], ans: 1, explain: "\'When\' indicates the time at which everyone must be seated." },
  { q: "\'I have not seen her ___ she moved to Penang.\' Choose the conjunction.", opts: ["while", "although", "since", "unless"], ans: 2, explain: "\'Since\' here means \'from the time that\' — not seeing her from the time she moved." },
  { q: "\'___ you eat your vegetables, you cannot have dessert.\' Which conjunction fits?", opts: ["Although", "Because", "While", "Unless"], ans: 3, explain: "\'Unless\' means \'if not\' — no dessert if you don\'t eat your vegetables." },
  { q: "Which sentence is a complex sentence?", opts: ["Although it was late, she kept studying.", "She kept studying and reading.", "She studied. She read.", "She studied, and she read."], ans: 0, explain: "A complex sentence has an independent clause and a dependent clause joined by a subordinating conjunction (\'although\')." },
  { q: "\'We will go to the beach ___ it does not rain.\' Choose the conjunction.", opts: ["because", "if", "although", "while"], ans: 1, explain: "\'If\' introduces a condition — going to the beach depends on the weather." },
  { q: "Identify the subordinating conjunction: \'I will help you after I finish my work.\'", opts: ["will", "you", "after", "finish"], ans: 2, explain: "\'After\' is the subordinating conjunction showing time — helping comes after finishing work." },
  { q: "\'___ the traffic was bad, we arrived on time.\' Choose the conjunction showing contrast.", opts: ["Because", "When", "Until", "Although"], ans: 3, explain: "\'Although\' shows contrast — despite bad traffic, they arrived on time." },
  { q: "\'She locked the door ___ she left the house.\' Choose the conjunction.", opts: ["before", "although", "unless", "while"], ans: 0, explain: "\'Before\' shows the order of events — locking happened before leaving." },
  { q: "\'They cancelled the picnic ___ it started to thunder.\' Choose the conjunction.", opts: ["although", "when", "unless", "so that"], ans: 1, explain: "\'When\' shows the time — the picnic was cancelled at the time the thunder started." },

  // ══════════════════════════════════════════════════
  // CORRELATIVE CONJUNCTIONS (Q51–Q75)
  // ══════════════════════════════════════════════════
  { q: "\'___ Ali ___ Mei passed the test.\' Choose the correct pair.", opts: ["Either … or", "Neither … nor", "Both … and", "Not only … but also"], ans: 2, explain: "\'Both … and\' indicates that two subjects did the same thing — both passed." },
  { q: "\'___ the teacher ___ the students knew the answer.\' (Nobody knew.) Choose the pair.", opts: ["Both … and", "Either … or", "Whether … or", "Neither … nor"], ans: 3, explain: "\'Neither … nor\' is used when both options are negative — nobody knew the answer." },
  { q: "\'You can have ___ the cake ___ the pie, but not both.\' Choose the pair.", opts: ["either … or", "both … and", "neither … nor", "not only … but also"], ans: 0, explain: "\'Either … or\' presents a choice between two options." },
  { q: "\'She is ___ intelligent ___ hardworking.\' (She has both qualities.) Choose the pair.", opts: ["either … or", "not only … but also", "neither … nor", "whether … or"], ans: 1, explain: "\'Not only … but also\' emphasises that she has both qualities." },
  { q: "Which sentence has correct parallel structure?", opts: ["She likes both reading and to swim.", "He neither called nor he wrote.", "They both sang and danced.", "Not only is she smart but also kind."], ans: 2, explain: "\'Both sang and danced\' has parallel structure — both parts are past tense verbs." },
  { q: "\'I don\'t know ___ to laugh ___ cry.\' Choose the pair.", opts: ["both … and", "either … or", "neither … nor", "whether … or"], ans: 3, explain: "\'Whether … or\' expresses uncertainty between two options." },
  { q: "\'___ the manager ___ the staff members are responsible.\' (All are.) Choose the pair.", opts: ["Both … and", "Either … or", "Neither … nor", "Whether … or"], ans: 0, explain: "\'Both … and\' shows that all parties share responsibility." },
  { q: "With \'either … or\', the verb should agree with which subject?", opts: ["The first subject", "The nearest subject", "Both subjects combined", "Always singular"], ans: 1, explain: "With either/or and neither/nor, the verb agrees with the nearest subject (the one closest to the verb)." },
  { q: "\'Neither the cat ___ the dogs ___ outside.\' Choose the correct completion.", opts: ["nor … is", "or … was", "nor … were", "and … is"], ans: 2, explain: "\'Neither … nor\' is the correct pair, and the verb \'were\' agrees with the nearest subject \'dogs\' (plural)." },
  { q: "Which sentence has a parallel structure error?", opts: ["Both my mother and father agreed.", "Either come now or leave.", "Neither the boys nor the girls complained.", "She not only sings but also to dance."], ans: 3, explain: "\'Not only sings but also to dance\' is not parallel. It should be \'not only sings but also dances.\'" },
  { q: "\'___ you come early ___ late, the door will be open.\' Choose the pair.", opts: ["Whether … or", "Either … or", "Both … and", "Not only … but also"], ans: 0, explain: "\'Whether … or\' is used to show that both possibilities lead to the same result." },
  { q: "\'He ___ studies hard ___ pays attention in class.\' (He does both.) Choose the pair.", opts: ["either … or", "both … and", "neither … nor", "whether … or"], ans: 1, explain: "\'Both … and\' shows that he does two positive things — studies and pays attention." },
  { q: "\'___ did he apologise, ___ did he explain.\' (He did nothing.) Choose the pair.", opts: ["Both … and", "Either … or", "Neither … nor", "Not only … but also"], ans: 2, explain: "\'Neither … nor\' indicates that both actions were not done." },
  { q: "\'The movie was ___ entertaining ___ educational.\' (It was both.) Choose the pair.", opts: ["either … or", "neither … nor", "whether … or", "not only … but also"], ans: 3, explain: "\'Not only … but also\' emphasises that the movie had both qualities." },
  { q: "Which sentence correctly uses \'either … or\'?", opts: ["Either you leave now or I will call security.", "Either you leave now and I will call.", "Either you leave now but I stay.", "Either you and I leave now."], ans: 0, explain: "\'Either … or\' correctly presents two alternatives: leaving or calling security." },
  { q: "\'Neither the principal nor the teachers ___ informed.\' Choose the correct verb.", opts: ["was", "were", "is", "has been"], ans: 1, explain: "The verb agrees with the nearest subject \'teachers\' (plural), so \'were\' is correct." },
  { q: "Fix the error: \'She both likes singing and dancing.\'", opts: ["She likes singing both and dancing.", "She both singing and dancing likes.", "She likes both singing and dancing.", "Both she likes singing and dancing."], ans: 2, explain: "\'Both\' should come directly before the parallel elements: \'both singing and dancing.\'" },
  { q: "\'___ you agree ___ disagree, please let me know.\' Choose the pair.", opts: ["Both … and", "Not only … but also", "Neither … nor", "Whether … or"], ans: 3, explain: "\'Whether … or\' presents two options when asking for a response." },
  { q: "\'Not only ___ she win the race, ___ she also broke the record.\' Fill in the blanks.", opts: ["did … but", "was … and", "had … yet", "is … so"], ans: 0, explain: "\'Not only did … but\' is the correct structure when the sentence starts with \'Not only\' (requires inversion)." },
  { q: "\'Either the teacher or the student ___ to present.\' Choose the correct verb.", opts: ["are", "is", "were", "have"], ans: 1, explain: "The verb agrees with the nearest subject \'student\' (singular), so \'is\' is correct." },
  { q: "Which correlative pair shows that two things are both absent or negative?", opts: ["both … and", "either … or", "neither … nor", "not only … but also"], ans: 2, explain: "\'Neither … nor\' indicates that both options are negative or absent." },
  { q: "Correct the sentence: \'Both Ali as well as Mei are here.\'", opts: ["Both Ali or Mei are here.", "Both Ali nor Mei are here.", "Ali as well as Mei is here.", "Both Ali and Mei are here."], ans: 3, explain: "\'Both\' pairs with \'and\', not \'as well as\'. The correct form is \'Both Ali and Mei are here.\'" },
  { q: "\'He is ___ kind ___ generous to everyone.\' (He has both traits.) Choose the pair.", opts: ["both … and", "either … or", "neither … nor", "whether … or"], ans: 0, explain: "\'Both … and\' is used to show he possesses two positive qualities." },
  { q: "Which sentence has correct subject-verb agreement with correlative conjunctions?", opts: ["Neither the boys nor the girl were late.", "Neither the boys nor the girl was late.", "Neither the boys nor the girl are late.", "Either the boy or the girls was late."], ans: 1, explain: "The verb agrees with the nearest subject \'girl\' (singular), so \'was\' is correct." },
  { q: "\'___ only is the food delicious, ___ the service is excellent too.\' Fill in correctly.", opts: ["Not … and", "Both … or", "Not … but", "Neither … nor"], ans: 2, explain: "\'Not only … but (also)\' is the correct correlative pair to emphasise two positive qualities." },

  // ══════════════════════════════════════════════════
  // DISCOURSE MARKERS (Q76–Q100)
  // ══════════════════════════════════════════════════
  { q: "\'She studied hard. ___, she topped the class.\' Choose the correct connector.", opts: ["However", "Nevertheless", "Although", "Therefore"], ans: 3, explain: "\'Therefore\' shows result — her hard work led to topping the class." },
  { q: "\'The plan had many flaws. ___, we decided to proceed.\' Choose the connector showing contrast.", opts: ["However", "Therefore", "Moreover", "For example"], ans: 0, explain: "\'However\' shows contrast — despite the flaws, they proceeded." },
  { q: "\'He is a talented athlete. ___, he excels in academics.\' Choose the connector adding information.", opts: ["However", "Moreover", "Therefore", "In contrast"], ans: 1, explain: "\'Moreover\' adds additional information to strengthen the point." },
  { q: "\'Many students failed the test. ___, some didn\'t even attempt it.\' Choose the connector.", opts: ["However", "Therefore", "In addition", "Nevertheless"], ans: 2, explain: "\'In addition\' adds extra information to the previous statement." },
  { q: "Which connector is used to introduce an example?", opts: ["However", "Therefore", "Nevertheless", "For instance"], ans: 3, explain: "\'For instance\' (or \'for example\') is used to introduce a specific example." },
  { q: "\'The experiment failed. ___, the team learned valuable lessons.\' Choose the connector.", opts: ["Nevertheless", "Therefore", "For example", "In addition"], ans: 0, explain: "\'Nevertheless\' shows contrast — despite the failure, something positive came from it." },
  { q: "\'It rained heavily; ___, the match was postponed.\' Choose the correct connector.", opts: ["however", "as a result", "moreover", "for example"], ans: 1, explain: "\'As a result\' shows consequence — the rain caused the postponement." },
  { q: "\'Running is great exercise. ___, swimming is an excellent full-body workout.\' Choose the connector.", opts: ["Therefore", "However", "Furthermore", "As a result"], ans: 2, explain: "\'Furthermore\' adds information — another exercise option beyond running." },
  { q: "Which punctuation is correct when using a discourse marker to join two clauses?", opts: ["Comma before, nothing after", "Nothing before, comma after", "Comma before and after", "Semicolon before, comma after"], ans: 3, explain: "When joining two independent clauses: semicolon before the connector, comma after. E.g., \'It rained; however, we went out.\'" },
  { q: "\'She loves science. ___, biology is her favourite subject.\' Choose the connector.", opts: ["For example", "However", "Nevertheless", "Therefore"], ans: 0, explain: "\'For example\' introduces a specific instance to illustrate the general statement." },
  { q: "\'The hotel was expensive. ___, the rooms were small.\' Choose the connector showing contrast.", opts: ["Moreover", "In addition", "Furthermore", "As a result"], ans: 1, explain: "\'In addition\' here adds a negative point. However, \'in addition\' adds information — the rooms being small is an additional complaint. Note: \'Moreover\' could also work, but \'In addition\' best fits adding another drawback." },
  { q: "\'Pollution harms wildlife. ___, it affects human health.\' Choose the connector.", opts: ["However", "Nevertheless", "Moreover", "In contrast"], ans: 2, explain: "\'Moreover\' adds additional information — pollution affects both wildlife and humans." },
  { q: "\'He failed the driving test three times. ___, he passed on his fourth attempt.\'", opts: ["Therefore", "Moreover", "For example", "However"], ans: 3, explain: "\'However\' shows contrast — despite previous failures, he eventually passed." },
  { q: "\'___, we can conclude that exercise is essential for good health.\' Choose the connector.", opts: ["In conclusion", "However", "For example", "In contrast"], ans: 0, explain: "\'In conclusion\' is used to summarise or wrap up a discussion." },
  { q: "\'City life is exciting. ___, country life is peaceful.\' Choose the contrast connector.", opts: ["Moreover", "On the other hand", "Therefore", "In addition"], ans: 1, explain: "\'On the other hand\' presents a contrasting perspective between city and country life." },
  { q: "\'He didn\'t study. ___, he failed the test.\' Choose the result connector.", opts: ["However", "Moreover", "Consequently", "Nevertheless"], ans: 2, explain: "\'Consequently\' shows result — not studying led to failing the test." },
  { q: "\'Singapore is a modern city. ___, Tokyo is equally advanced.\' Choose the connector.", opts: ["However", "In conclusion", "Therefore", "Similarly"], ans: 3, explain: "\'Similarly\' draws a comparison between two cities that share the same quality." },
  { q: "Which of these is NOT typically used as a discourse marker?", opts: ["And", "However", "Therefore", "Moreover"], ans: 0, explain: "\'And\' is a coordinating conjunction, not a discourse marker. Discourse markers like \'However\' and \'Moreover\' function differently." },
  { q: "\'The plan seemed perfect; ___, it failed.\' Choose the connector.", opts: ["therefore", "nevertheless", "moreover", "for example"], ans: 1, explain: "\'Nevertheless\' shows contrast — the plan failed despite seeming perfect." },
  { q: "\'Exercising regularly improves physical health. ___, it boosts mental well-being.\'", opts: ["However", "Nevertheless", "In addition", "In conclusion"], ans: 2, explain: "\'In addition\' adds another benefit of exercise beyond physical health." },
  { q: "\'She worked overtime every day; ___, she earned a promotion.\' Choose the connector.", opts: ["however", "moreover", "nevertheless", "as a result"], ans: 3, explain: "\'As a result\' shows that the promotion was a consequence of working overtime." },
  { q: "\'Some people prefer tea; ___, others prefer coffee.\' Choose the connector.", opts: ["in contrast", "therefore", "moreover", "as a result"], ans: 0, explain: "\'In contrast\' highlights the difference in preferences between two groups." },
  { q: "\'The project was challenging. ___, each team member contributed ideas and effort.\' Choose the connector.", opts: ["In contrast", "Furthermore", "As a result", "In conclusion"], ans: 1, explain: "\'Furthermore\' adds information about team contributions beyond the challenge mentioned." },
  { q: "\'Plastic waste pollutes the oceans. ___, many marine animals die each year.\'", opts: ["However", "In addition", "As a result", "Similarly"], ans: 2, explain: "\'As a result\' shows the consequence — ocean pollution leads to marine animal deaths." },
  { q: "\'There are many benefits to reading. ___, it improves vocabulary and comprehension.\'", opts: ["In conclusion", "In contrast", "Nevertheless", "For example"], ans: 3, explain: "\'For example\' introduces specific benefits as examples of the general claim." },

  // ══════════════════════════════════════════════════
  // SENTENCE TYPES (Q101–Q125)
  // ══════════════════════════════════════════════════
  { q: "What type of sentence is \'She reads every day\'?", opts: ["Simple", "Compound", "Complex", "Compound-complex"], ans: 0, explain: "It has one independent clause with no conjunctions joining other clauses — a simple sentence." },
  { q: "What type of sentence is \'I was tired, but I kept working\'?", opts: ["Simple", "Compound", "Complex", "Fragment"], ans: 1, explain: "Two independent clauses joined by the coordinating conjunction \'but\' makes it a compound sentence." },
  { q: "What type of sentence is \'Because it rained, the match was cancelled\'?", opts: ["Simple", "Compound", "Complex", "Run-on"], ans: 2, explain: "It has a dependent clause (\'Because it rained\') and an independent clause, joined by \'because\' — a complex sentence." },
  { q: "Which of the following is a compound sentence?", opts: ["She went home.", "Although it rained, we played.", "Because he was ill, he rested.", "He sang, and she danced."], ans: 3, explain: "\'He sang, and she danced\' has two independent clauses joined by the coordinating conjunction \'and\' — compound." },
  { q: "A simple sentence has how many independent clauses?", opts: ["One", "Two", "Three", "None"], ans: 0, explain: "A simple sentence has exactly one independent clause. It may have compound subjects or verbs but only one clause." },
  { q: "Which sentence is complex?", opts: ["The children laughed and played.", "When the bell rang, everyone stood up.", "She ate lunch, and he drank water.", "They studied."], ans: 1, explain: "\'When the bell rang\' is a dependent clause and \'everyone stood up\' is an independent clause — this is a complex sentence." },
  { q: "What type of sentence is \'The dog barked loudly at the stranger\'?", opts: ["Compound", "Complex", "Simple", "Fragment"], ans: 2, explain: "It has one independent clause with no conjunctions joining another clause — a simple sentence." },
  { q: "A compound sentence joins independent clauses using which?", opts: ["Subordinating conjunctions", "Relative pronouns", "Prepositions", "Coordinating conjunctions or semicolons"], ans: 3, explain: "Compound sentences join independent clauses with FANBOYS coordinating conjunctions or semicolons." },
  { q: "What type of sentence is \'She will come if you invite her\'?", opts: ["Complex", "Simple", "Compound", "Fragment"], ans: 0, explain: "\'If you invite her\' is a dependent clause joined to \'She will come\' (independent) — complex sentence." },
  { q: "Which sentence is simple?", opts: ["He ran fast, but he missed the bus.", "The tall boy in the blue shirt scored a goal.", "Although she tried, she failed.", "I ate lunch; then I left."], ans: 1, explain: "\'The tall boy in the blue shirt scored a goal\' has one independent clause — simple sentence. The prepositional phrases are modifiers, not separate clauses." },
  { q: "What makes a sentence compound?", opts: ["Having a dependent clause", "Starting with a conjunction", "Having two or more independent clauses joined correctly", "Having a prepositional phrase"], ans: 2, explain: "A compound sentence has two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon." },
  { q: "Identify the sentence type: \'We left early; the traffic was terrible.\'", opts: ["Simple", "Complex", "Fragment", "Compound"], ans: 3, explain: "Two independent clauses joined by a semicolon make this a compound sentence." },
  { q: "Which sentence is a fragment?", opts: ["Because she was tired.", "She was tired, so she slept.", "She was tired.", "Although she was tired, she kept going."], ans: 0, explain: "\'Because she was tired\' is a dependent clause standing alone — it is a sentence fragment (incomplete thought)." },
  { q: "What type of sentence is \'Although he was nervous, he gave a great speech\'?", opts: ["Compound", "Complex", "Simple", "Fragment"], ans: 1, explain: "It has a dependent clause (\'Although he was nervous\') and an independent clause — complex sentence." },
  { q: "Which is a compound sentence?", opts: ["While I slept, it rained.", "If you come, I will help.", "She smiled, and he waved.", "Because he left early, he arrived on time."], ans: 2, explain: "\'She smiled\' and \'he waved\' are two independent clauses joined by \'and\' — compound sentence." },
  { q: "What type of sentence is \'My brother and I went to the library and borrowed some books\'?", opts: ["Compound", "Complex", "Fragment", "Simple"], ans: 3, explain: "Despite having compound subjects and verbs, it is one independent clause — a simple sentence." },
  { q: "Which feature distinguishes a complex sentence from a compound sentence?", opts: ["It contains a dependent clause", "It has two independent clauses", "It uses FANBOYS conjunctions", "It uses a semicolon"], ans: 0, explain: "A complex sentence has at least one dependent (subordinate) clause, while a compound sentence has only independent clauses." },
  { q: "What type of sentence is \'She passed the exam, for she had studied hard\'?", opts: ["Simple", "Compound", "Complex", "Fragment"], ans: 1, explain: "\'For\' here is a coordinating conjunction joining two independent clauses — compound sentence." },
  { q: "Identify the sentence type: \'Unless you hurry, you will miss the bus.\'", opts: ["Simple", "Compound", "Complex", "Run-on"], ans: 2, explain: "\'Unless you hurry\' is a dependent clause joined to an independent clause — complex sentence." },
  { q: "Which is a run-on sentence?", opts: ["She sang, and he danced.", "Although tired, she continued.", "She was happy because she won.", "I was late I forgot my keys."], ans: 3, explain: "\'I was late I forgot my keys\' fuses two independent clauses with no punctuation or conjunction — a run-on." },
  { q: "What type of sentence is \'Stop!\'?", opts: ["Simple", "Compound", "Complex", "Fragment"], ans: 0, explain: "\'Stop!\' is a simple sentence — it has one independent clause with an implied subject (you)." },
  { q: "What type of sentence is \'I enjoy reading, yet I rarely have time for it\'?", opts: ["Simple", "Compound", "Complex", "Fragment"], ans: 1, explain: "Two independent clauses joined by the coordinating conjunction \'yet\' — compound sentence." },
  { q: "Which sentence is complex?", opts: ["She danced gracefully.", "He ran, and she walked.", "Since he left, nobody has called.", "We played; they watched."], ans: 2, explain: "\'Since he left\' is a dependent clause and \'nobody has called\' is an independent clause — complex sentence." },
  { q: "How do you fix a comma splice?", opts: ["Remove the comma", "Add another comma", "Combine into one clause", "Add a conjunction or use a semicolon"], ans: 3, explain: "A comma splice can be fixed by adding a coordinating conjunction after the comma, using a semicolon, or separating into two sentences." },
  { q: "Which sentence is correctly punctuated as a compound sentence?", opts: ["She studied hard, so she passed.", "She studied hard so she passed.", "She studied hard; so, she passed.", "She, studied hard so she passed."], ans: 0, explain: "Correct compound sentence: comma before the FANBOYS conjunction \'so\' when joining two independent clauses." },

  // ══════════════════════════════════════════════════
  // ERROR CORRECTION / MIXED (Q126–Q150)
  // ══════════════════════════════════════════════════
  { q: "What is wrong with \'Although she was tired, but she kept going\'?", opts: ["Missing comma", "Redundant conjunctions (although + but)", "Wrong tense", "Missing subject"], ans: 1, explain: "Using \'Although\' and \'but\' together is redundant. Use only one: \'Although she was tired, she kept going\' or \'She was tired, but she kept going.\'" },
  { q: "Identify the error: \'I was tired, I went to bed early.\'", opts: ["Wrong conjunction", "Missing subject", "Comma splice", "Fragment"], ans: 2, explain: "Two independent clauses joined only by a comma is a comma splice. Fix: \'I was tired, so I went to bed early.\'" },
  { q: "What is wrong with \'Because I was hungry.\'?", opts: ["Wrong tense", "Missing comma", "Wrong conjunction", "Sentence fragment"], ans: 3, explain: "\'Because I was hungry\' is a dependent clause standing alone — a fragment. It needs an independent clause." },
  { q: "Fix the run-on: \'He ran fast he won the race.\'", opts: ["He ran fast, so he won the race.", "He ran fast he, won the race.", "He ran, fast he won the race.", "He ran fast; he, won the race."], ans: 0, explain: "Add a comma and coordinating conjunction: \'He ran fast, so he won the race.\'" },
  { q: "Which sentence has a parallel structure error?", opts: ["She likes both reading and writing.", "He enjoys not only swimming but also to cycle.", "Either stay or leave.", "Neither the cat nor the dog was outside."], ans: 1, explain: "\'Not only swimming but also to cycle\' breaks parallel structure. It should be \'not only swimming but also cycling.\'" },
  { q: "Choose the correct sentence.", opts: ["Although it rained but we went out.", "Because he was late, so he missed the bus.", "Since she studied hard, she passed.", "Even though he tried, yet he failed."], ans: 2, explain: "\'Since she studied hard, she passed\' correctly uses one subordinating conjunction. The others use redundant conjunctions." },
  { q: "\'She wanted to go shopping ___ she had no money.\' Choose the best conjunction.", opts: ["and", "so", "because", "but"], ans: 3, explain: "\'But\' shows contrast between wanting to shop and having no money." },
  { q: "Which sentence is correctly punctuated?", opts: ["Although he was late, he was allowed in.", "Although he was late he was allowed in.", "Although, he was late he was allowed in.", "Although he was late; he was allowed in."], ans: 0, explain: "When a subordinate clause comes first, it is followed by a comma." },
  { q: "Fix: \'She likes to read and swimming.\'", opts: ["She likes to read and to swimming.", "She likes reading and swimming.", "She likes to read and is swimming.", "She likes read and swim."], ans: 1, explain: "For parallel structure, both activities should be in the same form: \'reading and swimming\' or \'to read and to swim.\'" },
  { q: "\'The weather was cold ___ we decided to stay home.\' Choose the best option.", opts: ["however", "although", ", so", "because"], ans: 2, explain: "\', so\' correctly joins two independent clauses showing cause and effect with proper punctuation." },
  { q: "What type of error is \'We went shopping we had a great time\'?", opts: ["Fragment", "Comma splice", "Redundant conjunction", "Run-on sentence"], ans: 3, explain: "Two independent clauses with no punctuation or conjunction between them form a run-on sentence." },
  { q: "Which correctly uses a semicolon with a connector?", opts: ["She was tired; however, she kept going.", "She was tired, however, she kept going.", "She was tired however; she kept going.", "She was tired however she kept going."], ans: 0, explain: "Correct format: semicolon before the connector, comma after: \'tired; however, she kept going.\'" },
  { q: "Fix: \'Even though he studied hard but he still failed.\'", opts: ["Even though he studied hard, but he still failed.", "Even though he studied hard, he still failed.", "Even though he studied hard; but he still failed.", "He studied hard but even though he still failed."], ans: 1, explain: "Remove \'but\' — \'Even though\' already introduces the contrast. Use only one conjunction." },
  { q: "\'I need to buy milk ___ eggs ___ bread.\' Choose the correct punctuation/conjunctions.", opts: ["and … and", "or … or", ", … and", ", … or"], ans: 2, explain: "In a list of three items, use commas between items and \'and\' before the last: \'milk, eggs and bread.\'" },
  { q: "Which sentence has correct subject-verb agreement?", opts: ["Neither the boys nor the girl were late.", "Either she or I has to go.", "Both the teacher and student is present.", "Neither the dog nor the cats were found."], ans: 3, explain: "With \'neither … nor\', the verb agrees with the nearest subject \'cats\' (plural) → \'were\' is correct." },
  { q: "Choose the best conjunction: \'You should bring an umbrella ___ it looks like rain.\'", opts: ["because", "but", "or", "and"], ans: 0, explain: "\'Because\' gives the reason for bringing an umbrella." },
  { q: "Fix the comma splice: \'The food was delicious, the service was slow.\'", opts: ["The food was delicious the service was slow.", "The food was delicious, but the service was slow.", "The food was delicious, the service, was slow.", "The food, was delicious the service was slow."], ans: 1, explain: "Add a coordinating conjunction after the comma: \'The food was delicious, but the service was slow.\'" },
  { q: "Which sentence uses \'therefore\' correctly?", opts: ["Therefore she left early.", "She was tired, therefore she rested.", "She was tired; therefore, she rested.", "She therefore, was tired."], ans: 2, explain: "Correct usage: semicolon before \'therefore\' and comma after when joining two independent clauses." },
  { q: "Choose the best way to combine: \'She is talented. She is also humble.\'", opts: ["She is talented, she is humble.", "She is talented she is also humble.", "Although she is talented and humble.", "She is not only talented but also humble."], ans: 3, explain: "\'Not only … but also\' effectively combines the two qualities in one sentence." },
  { q: "What is wrong with \'Since he was absent. He missed the test.\'?", opts: ["The first sentence is a fragment", "Wrong conjunction", "Missing comma", "Wrong tense"], ans: 0, explain: "\'Since he was absent\' is a dependent clause and cannot stand alone. Combine: \'Since he was absent, he missed the test.\'" },
  { q: "Choose the correct sentence.", opts: ["He neither plays football or basketball.", "He neither plays football nor basketball.", "He plays neither football and basketball.", "He plays not football nor basketball."], ans: 1, explain: "\'Neither … nor\' is the correct correlative pair: \'He neither plays football nor basketball.\'" },
  { q: "\'She can speak English. She can speak Mandarin. She can speak Malay.\' Combine using a conjunction.", opts: ["She can speak English, Mandarin, Malay.", "She can speak English but Mandarin and Malay.", "She can speak English, Mandarin and Malay.", "She can speak English or Mandarin or Malay."], ans: 2, explain: "Use commas between items in a list and \'and\' before the last item." },
  { q: "Which sentence correctly uses \'in contrast\'?", opts: ["In contrast she was happy.", "She was happy in contrast.", "She was happy, in contrast she was sad.", "She loves the city. In contrast, her brother prefers the countryside."], ans: 3, explain: "\'In contrast\' is used as a sentence starter with a comma to show a difference between two ideas." },
  { q: "Fix: \'I like chocolate and also vanilla and strawberry too.\'", opts: ["I like chocolate, vanilla and strawberry.", "I like chocolate, and also vanilla, and strawberry too.", "I like chocolate also vanilla also strawberry.", "I like chocolate; and vanilla; and strawberry."], ans: 0, explain: "Use a clean list format with commas: \'I like chocolate, vanilla and strawberry.\'" },
  { q: "Which sentence is free of conjunction errors?", opts: ["Although she was sick, but she came to school.", "Because she was sick, she stayed home.", "Even though he was late, yet he was admitted.", "Since it rained, so we stayed indoors."], ans: 1, explain: "\'Because she was sick, she stayed home\' correctly uses one subordinating conjunction without a redundant coordinating conjunction." }
]
