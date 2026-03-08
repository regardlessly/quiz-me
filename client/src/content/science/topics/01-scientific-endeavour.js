export const meta = {
  id: 1, sem: 1,
  title: 'Scientific Endeavour',
  desc: 'Lab safety, GHS symbols, Bunsen burner, SI units, Vernier caliper, variables and speed'
}

export const notes = `
  <h2>Scientific Endeavour</h2>
  <p class="topic-desc">Lab safety · GHS symbols · Bunsen burner · SI units · Vernier caliper · Variables · Speed & distance-time graphs</p>

  <div class="notes-card">
    <h3>1. Laboratory Safety &amp; GHS Symbols</h3>
    <div class="example">
      <strong>General rules:</strong><br>
      • Wear safety goggles and a lab coat when handling chemicals or heating<br>
      • Tie long hair back; avoid loose clothing near flames<br>
      • Never eat, drink or directly smell chemicals — waft gently<br>
      • Heat test tubes at an angle, opening pointing AWAY from all people<br>
      • Never heat a sealed or closed container<br>
      • Report ALL accidents and spills to the teacher immediately<br><br>
      <strong>GHS Hazard Symbols:</strong><br>
      • GHS01 — Exploding bomb → <em>Explosive</em><br>
      • GHS02 — Plain flame → <em>Flammable</em> (substance itself burns)<br>
      • GHS03 — Flame over circle → <em>Oxidising</em> (provides oxygen, fuels fires)<br>
      • GHS05 — Dripping liquid onto hand &amp; surface → <em>Corrosive</em><br>
      • GHS06 — Skull &amp; crossbones → <em>Acutely Toxic</em><br>
      • GHS07 — Exclamation mark (!) → <em>Irritant</em> (less severe than toxic)<br>
      • GHS08 — Person with exclamation → <em>Serious Health Hazard</em><br>
      • GHS09 — Dead fish &amp; tree → <em>Environmental Hazard</em><br>
      • A substance can carry MORE than one GHS symbol
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Bunsen Burner</h3>
    <div class="example">
      <strong>Air hole CLOSED → Safety (yellow/luminous) flame:</strong><br>
      • Yellow, flickering, quiet, visible<br>
      • Incomplete combustion → produces soot<br>
      • Used as standby flame (not for heating)<br><br>
      <strong>Air hole HALF open → Non-luminous (blue) flame:</strong><br>
      • Blue, steady, hotter, clean (no soot)<br>
      • Used for HEATING in experiments<br><br>
      <strong>Air hole FULLY open → Roaring flame:</strong><br>
      • Loudest, hottest, noisy<br>
      • For rapid heating of large volumes<br><br>
      <strong>Hottest part:</strong> Tip of the inner blue cone (~600–700°C)<br>
      Place crucibles/objects just above this tip for maximum heating.<br><br>
      <strong>Lighting procedure:</strong> Light with air hole CLOSED (safety flame first), then open air hole to produce blue flame.
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Measuring Instruments</h3>
    <div class="example">
      <strong>Measuring cylinder:</strong> Read at BOTTOM of meniscus at eye level (parallax error if viewed from above or below)<br>
      • Eye above concave meniscus → reads TOO HIGH<br>
      • Eye below concave meniscus → reads TOO LOW<br><br>
      <strong>Vernier caliper:</strong> Precision = 0.01 cm (vs ruler = 0.1 cm)<br>
      • Reading = Main scale + Vernier scale<br>
      • Zero error: check reading when jaws fully closed<br>
      • Positive zero error (+x): Corrected = Observed − x<br>
      • Negative zero error (−x): Corrected = Observed − (−x) = Observed + x<br>
      • Formula: <strong>Corrected = Observed − Zero Error</strong><br><br>
      <strong>Thermometer:</strong> Wait for reading to STABILISE before recording
    </div>
  </div>

  <div class="notes-card">
    <h3>4. SI Units &amp; Prefixes</h3>
    <div class="example">
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:3px 8px"><strong>Quantity</strong></td><td style="padding:3px 8px"><strong>SI Unit</strong></td><td style="padding:3px 8px"><strong>Symbol</strong></td></tr>
        <tr><td style="padding:3px 8px">Length</td><td style="padding:3px 8px">metre</td><td style="padding:3px 8px">m</td></tr>
        <tr><td style="padding:3px 8px">Mass</td><td style="padding:3px 8px">kilogram</td><td style="padding:3px 8px">kg</td></tr>
        <tr><td style="padding:3px 8px">Time</td><td style="padding:3px 8px">second</td><td style="padding:3px 8px">s</td></tr>
        <tr><td style="padding:3px 8px">Temperature</td><td style="padding:3px 8px">kelvin</td><td style="padding:3px 8px">K</td></tr>
        <tr><td style="padding:3px 8px">Electric current</td><td style="padding:3px 8px">ampere</td><td style="padding:3px 8px">A</td></tr>
        <tr><td style="padding:3px 8px">Speed</td><td style="padding:3px 8px">metre per second</td><td style="padding:3px 8px">m/s</td></tr>
      </table><br>
      <strong>Prefixes:</strong> milli (m) = 10⁻³ | centi (c) = 10⁻² | kilo (k) = 10³ | mega (M) = 10⁶<br>
      <strong>Conversions:</strong> 1 km = 1000 m | 1 m = 100 cm = 1000 mm | 1 kg = 1000 g<br>
      <strong>km/h → m/s:</strong> divide by 3.6 (or × 5/18)
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Accuracy, Precision &amp; Variables</h3>
    <div class="example">
      <strong>Accuracy:</strong> How close a result is to the TRUE value<br>
      <strong>Precision:</strong> How consistent/reproducible the results are<br>
      → Results can be precise but inaccurate (clustered but far from true value)<br><br>
      <strong>Variables in an experiment:</strong><br>
      • Independent variable (IV) = what you deliberately CHANGE<br>
      • Dependent variable (DV) = what you MEASURE / observe<br>
      • Controlled variables (CV) = what you KEEP THE SAME for fairness<br><br>
      <strong>Hypothesis format:</strong> "If [IV], then [DV], because [reason]"<br>
      Must be directional (e.g., "the longer the spring, the greater the extension")
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Speed &amp; Distance-Time Graphs</h3>
    <div class="example">
      <strong>Speed formula:</strong><br>
      Speed = Distance ÷ Time &nbsp; | &nbsp; s = d/t<br>
      Distance = Speed × Time &nbsp; | &nbsp; Time = Distance ÷ Speed<br><br>
      <strong>Distance-time graph:</strong><br>
      • Gradient (slope) = Speed<br>
      • Horizontal line → stationary (speed = 0)<br>
      • Straight sloping line → constant speed<br>
      • Steeper slope → FASTER speed<br>
      • Curved line → changing speed (acceleration or deceleration)<br>
      • Two lines CROSSING → same position at that moment (NOT same speed)<br><br>
      <strong>Average speed:</strong> Total distance ÷ Total time
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════════════
  // GHS HAZARD SYMBOLS (Q1–20)
  // ═══════════════════════════════════════════════════
  {
    q: 'Which GHS hazard symbol shows a FLAME resting on top of a CIRCLE?',
    opts: ['Flammable (GHS02)', 'Oxidising (GHS03)', 'Explosive (GHS01)', 'Corrosive (GHS05)'],
    ans: 1,
    explain: 'The oxidising symbol (GHS03) shows a flame over a circle. It means the substance can provide oxygen and intensify fires. Flammable (GHS02) shows just a plain flame — it burns itself. Do not mix them up!'
  },
  {
    q: 'A bottle is labelled with a skull-and-crossbones symbol. This means the substance is:',
    opts: ['Irritant', 'Corrosive', 'Acutely toxic', 'Oxidising'],
    ans: 2,
    explain: 'Skull-and-crossbones (GHS06) = acutely toxic. Even small amounts can cause death or serious harm through inhalation, ingestion or skin contact. This is more severe than the irritant (!) symbol.'
  },
  {
    q: 'The exclamation mark (!) GHS symbol indicates a substance is:',
    opts: ['Acutely toxic', 'Explosive', 'Irritant', 'Corrosive'],
    ans: 2,
    explain: 'The exclamation mark (GHS07) = irritant. It can cause skin or eye irritation but is less severe than toxic substances. Normal lab precautions (goggles, gloves) are usually sufficient.'
  },
  {
    q: 'Which GHS symbol would appear on a bottle of concentrated sulfuric acid?',
    opts: ['Flammable', 'Oxidising', 'Corrosive', 'Explosive'],
    ans: 2,
    explain: 'Concentrated sulfuric acid is corrosive (GHS05). The corrosive symbol shows acid dripping onto a hand and a surface. Corrosive substances destroy living tissue and metals on contact.'
  },
  {
    q: 'Ethanol is stored in the chemistry lab. Which GHS symbol must be displayed on its container?',
    opts: ['Oxidising', 'Flammable', 'Corrosive', 'Toxic'],
    ans: 1,
    explain: 'Ethanol is highly flammable (GHS02) — it burns easily when exposed to an ignition source like a Bunsen flame. Never heat ethanol directly with a Bunsen burner; use a water bath instead.'
  },
  {
    q: 'A GHS symbol shows a dead fish and a dead tree. This substance is classified as:',
    opts: ['Acutely toxic to humans', 'An environmental hazard', 'Explosive in water', 'A serious health hazard'],
    ans: 1,
    explain: 'The dead fish and tree symbol (GHS09) = environmental hazard. The substance is harmful to aquatic organisms. It should NEVER be poured down the drain without teacher permission.'
  },
  {
    q: 'How does the GHS "oxidising" symbol (GHS03) differ from the "flammable" symbol (GHS02)?',
    opts: [
      'Flammable has a skull; oxidising has a flame',
      'Flammable shows just a flame; oxidising shows a flame over a circle',
      'They look the same — only the colour border differs',
      'Flammable has a circle; oxidising has an explosion'
    ],
    ans: 1,
    explain: 'Flammable (GHS02) = plain flame. Oxidising (GHS03) = flame on top of a circle. Both involve fire risk, but an oxidising substance does NOT burn itself — it supplies oxygen that makes other substances burn faster.'
  },
  {
    q: 'Hydrogen peroxide is an oxidising agent used in school labs. Which GHS symbol applies?',
    opts: ['Skull and crossbones', 'Exclamation mark (!)', 'Flame over a circle', 'Exploding bomb'],
    ans: 2,
    explain: 'Oxidising agents carry GHS03 (flame over circle). They do not burn themselves but can intensify fires by releasing oxygen. This is different from flammable substances (GHS02) which burn directly.'
  },
  {
    q: 'A student sees the exclamation mark (!) symbol on a bottle. She should:',
    opts: [
      'Refuse to use it — too dangerous for school labs',
      'Wear a full hazmat suit and face shield',
      'Handle carefully, avoiding prolonged skin and eye contact',
      'Only use it inside a sealed fume cupboard'
    ],
    ans: 2,
    explain: 'The irritant (!) symbol means normal precautions are adequate: safety goggles and gloves. It does not require a fume cupboard unless it produces harmful vapours. Irritants are less severe than toxic substances.'
  },
  {
    q: 'Which GHS symbol would NOT typically appear on a dilute hydrochloric acid bottle?',
    opts: ['Corrosive', 'Irritant', 'Explosive', 'Environmental hazard'],
    ans: 2,
    explain: 'Dilute HCl is corrosive (or irritant at low concentrations) and an environmental hazard, but it is NOT explosive. The explosive symbol (GHS01 — exploding bomb) does not apply to HCl solutions.'
  },
  {
    q: 'The GHS symbol showing acid dripping and damaging both a hand and a surface indicates:',
    opts: ['Acutely toxic', 'Irritant', 'Flammable', 'Corrosive'],
    ans: 3,
    explain: 'The corrosive symbol (GHS05) shows liquid attacking both a hand and a flat surface. Corrosive substances (e.g., concentrated acids, alkalis) can destroy skin, eyes, metals and concrete.'
  },
  {
    q: 'Why is the skull-and-crossbones (GHS06) more serious than the exclamation mark (GHS07)?',
    opts: [
      'The skull symbol only applies to liquids, not gases',
      'GHS07 (irritant) causes mild discomfort; GHS06 (toxic) can be fatal in small amounts',
      'The skull symbol means the substance is expired',
      'GHS07 is for external contact; GHS06 is for internal contact only'
    ],
    ans: 1,
    explain: 'Irritants (!) cause discomfort like redness or rash. Acutely toxic substances (skull) can cause severe harm or death even in tiny amounts. Both require caution, but toxic chemicals need strictly controlled handling.'
  },
  {
    q: 'A chemical has BOTH the corrosive symbol AND the environmental hazard symbol. This means:',
    opts: [
      'The labels are duplicated — a mistake by the manufacturer',
      'The substance is both corrosive to skin AND harmful to aquatic environments',
      'It is safe to use but must not be stored near water',
      'One symbol overrides the other'
    ],
    ans: 1,
    explain: 'A substance can carry MULTIPLE GHS symbols. For example, concentrated HCl is both corrosive (damages skin) and an environmental hazard (harms aquatic life). All applicable symbols appear on the label.'
  },
  {
    q: 'Sodium hypochlorite (bleach) is an oxidising agent. Which GHS symbol is most relevant?',
    opts: ['Skull and crossbones', 'Flame over a circle', 'Exclamation mark (!)', 'Exploding bomb'],
    ans: 1,
    explain: 'Bleach (sodium hypochlorite) is an oxidising agent → GHS03 (flame over circle). It can intensify fires and reactions. Bleach may also carry the irritant or corrosive symbol depending on concentration.'
  },
  {
    q: 'A student must dispose of a chemical labelled with the GHS09 (environmental hazard) symbol. She should:',
    opts: [
      'Pour it down the sink — the symbol only applies outdoors',
      'Ask the teacher for proper disposal instructions',
      'Leave it in an open dish to evaporate',
      'Mix it with water then pour it down the drain'
    ],
    ans: 1,
    explain: 'GHS09 chemicals can kill aquatic organisms. They must NEVER be poured down drains. Always seek teacher guidance for disposal of any hazardous chemical.'
  },
  {
    q: 'Which GHS symbol is represented by an exploding bomb?',
    opts: ['Oxidising', 'Flammable', 'Explosive', 'Corrosive'],
    ans: 2,
    explain: 'GHS01 (exploding bomb) = explosive. These substances can detonate under heat, shock or friction. They are strictly controlled and rarely found in secondary school labs.'
  },
  {
    q: 'A student notices that concentrated nitric acid has BOTH flammable AND oxidising properties listed. How many GHS symbols should appear on its label?',
    opts: ['Only one — the most dangerous', 'One — manufacturers choose the most relevant', 'At least two, as both GHS02 and GHS03 apply', 'Only the oxidising symbol, since it is not a fuel'],
    ans: 2,
    explain: 'All applicable GHS symbols must appear on the label. A substance is not limited to one symbol. Concentrated nitric acid may carry symbols for oxidising, corrosive and environmental hazard simultaneously.'
  },
  {
    q: 'Why must goggles be worn whenever any GHS-labelled chemical is used in the lab?',
    opts: [
      'Only corrosive chemicals require eye protection',
      'Eye injuries from splashes are severe and potentially permanent regardless of chemical type',
      'Goggles are only needed for heating experiments',
      'It is a school uniform requirement unrelated to safety'
    ],
    ans: 1,
    explain: 'Eye tissue is extremely sensitive. Even irritants can cause painful eye injuries. Goggles should be worn for ALL GHS-labelled chemicals — do not assume a less-severe symbol means no eye risk.'
  },
  {
    q: 'Which pair of GHS symbols both feature a FLAME image and are therefore most commonly confused?',
    opts: [
      'Toxic (skull) and corrosive (dripping acid)',
      'Flammable (plain flame) and oxidising (flame over circle)',
      'Explosive (bomb) and irritant (!)',
      'Environmental hazard and health hazard'
    ],
    ans: 1,
    explain: 'Both GHS02 (flammable) and GHS03 (oxidising) show a flame. The key difference: GHS02 has a plain flame; GHS03 has a flame on top of a circle. Knowing this distinction is a common Singapore exam question.'
  },
  {
    q: 'A substance causes lung damage when inhaled but does not destroy skin. The most appropriate GHS symbol is:',
    opts: ['Corrosive (GHS05)', 'Acutely toxic (GHS06) or serious health hazard (GHS08)', 'Irritant (GHS07)', 'Environmental hazard (GHS09)'],
    ans: 1,
    explain: 'Lung/internal organ damage from inhalation suggests acute toxicity (skull, GHS06) or serious health hazard (GHS08). Corrosive (GHS05) refers to surface destruction. Irritant (!) causes mild, short-term effects only.'
  },

  // ═══════════════════════════════════════════════════
  // BUNSEN BURNER (Q21–35)
  // ═══════════════════════════════════════════════════
  {
    q: 'When the air hole of a Bunsen burner is CLOSED, the flame produced is called the:',
    opts: ['Roaring blue flame', 'Non-luminous flame', 'Safety (yellow) flame', 'Heating flame'],
    ans: 2,
    explain: 'A closed air hole = safety (yellow/luminous) flame. Combustion is incomplete, the flame is yellow and flickering, and it produces soot. It is called the "safety" flame because it is visible and used when the burner is on standby.'
  },
  {
    q: 'What is the HOTTEST part of the non-luminous (blue) Bunsen burner flame?',
    opts: [
      'The outer blue cone',
      'The base of the flame at the barrel',
      'The tip of the inner blue cone',
      'The yellow tip at the top of the flame'
    ],
    ans: 2,
    explain: 'The tip of the inner blue cone is the hottest part (~600–700°C). This is where combustion is most intense. Place objects just above this point for maximum heating. The outer cone is slightly cooler.'
  },
  {
    q: 'A student is about to heat a solution. Which Bunsen flame should she use?',
    opts: [
      'Yellow safety flame — it is the safest',
      'Non-luminous blue flame — hotter, cleaner, no soot',
      'Roaring flame — always the best for heating',
      'Any flame — it does not affect results'
    ],
    ans: 1,
    explain: 'For heating experiments, use the non-luminous blue flame (air hole partly open). It burns cleanly (no soot), is hotter than the yellow flame, and does not contaminate glassware. The yellow flame is standby only.'
  },
  {
    q: 'Why is the Bunsen burner lit using the safety (yellow) flame BEFORE adjusting to a blue flame?',
    opts: [
      'The yellow flame is hotter and warms the burner first',
      'The safety flame is visible, making it easier and safer to light',
      'The yellow flame prevents the air hole from clogging',
      'School regulations require lighting with the safety flame only'
    ],
    ans: 1,
    explain: 'The safety flame is visible (yellow and flickery), so it is easy to see when lit. Once confirmed, open the air hole for the blue heating flame. Trying to light a blue flame directly is harder and riskier.'
  },
  {
    q: 'A student gradually opens the air hole of a Bunsen burner from fully closed. The correct order of flame changes is:',
    opts: [
      'Yellow → non-luminous blue → roaring blue',
      'Blue → yellow → roaring',
      'Roaring → blue → yellow',
      'Non-luminous → roaring → yellow'
    ],
    ans: 0,
    explain: 'As the air hole opens: yellow safety flame (closed) → non-luminous blue (partly open) → roaring blue (fully open). More air = more complete combustion = hotter, bluer flame.'
  },
  {
    q: 'A student heats a beaker and notices black soot forming on the glass. The most likely cause is:',
    opts: [
      'The blue flame is too hot for the glass type',
      'The safety (yellow) flame is being used instead of the blue flame',
      'The solution inside is reacting with the glass',
      'The beaker was not cleaned before the experiment'
    ],
    ans: 1,
    explain: 'Soot = incomplete combustion = yellow safety flame is being used. Switch to the non-luminous blue flame by opening the air hole. The blue flame burns cleanly and will not coat glassware with soot.'
  },
  {
    q: 'When a student finishes heating and waits for the teacher, what should she do with the Bunsen burner?',
    opts: [
      'Leave it on the blue heating flame to keep equipment warm',
      'Turn off the gas supply completely',
      'Switch to the safety (yellow) flame by closing the air hole',
      'Increase the flame size so it is more visible'
    ],
    ans: 2,
    explain: 'Return to the safety flame (close the air hole) when not actively heating. This shows the burner is still on, warns others, and reduces fire risk. Turn off the gas completely only when the experiment is fully done.'
  },
  {
    q: 'For which task is the roaring Bunsen flame most suitable?',
    opts: [
      'Delicate heating of a small test tube',
      'Quickly heating a large volume of water to boiling',
      'Keeping a solution gently warm',
      'Lighting a Bunsen burner from cold'
    ],
    ans: 1,
    explain: 'The roaring flame (air hole fully open) is the hottest Bunsen flame and most efficient for rapidly heating large volumes. For small test tubes or gentle heating, it is too intense and the non-luminous blue flame is preferred.'
  },
  {
    q: 'Why does the yellow Bunsen flame produce soot but the blue flame does not?',
    opts: [
      'Yellow flames contain more water vapour',
      'Yellow flames result from incomplete combustion — unburnt carbon particles escape as soot',
      'Blue flames use a higher gas pressure',
      'Soot comes from the metal barrel, not the flame colour'
    ],
    ans: 1,
    explain: 'Yellow flame = insufficient air = incomplete combustion. Carbon particles are not fully oxidised and escape as soot (black carbon deposit). In the blue flame, sufficient air allows complete combustion → CO₂ instead of soot.'
  },
  {
    q: 'A student heats ethanol directly over a Bunsen burner. This is dangerous because:',
    opts: [
      'Ethanol solidifies when heated',
      'Ethanol vapour is flammable and the open flame can ignite it',
      'Ethanol reacts with the glass beaker',
      'The Bunsen flame is not hot enough to heat ethanol'
    ],
    ans: 1,
    explain: 'Ethanol is highly flammable (GHS02). Heating it near an open flame can ignite its vapour, causing a fire or explosion. Always use a water bath to heat flammable liquids — never a Bunsen burner.'
  },
  {
    q: 'A student places his test tube opening pointing at his classmate while heating. This violates lab safety because:',
    opts: [
      'The test tube will crack from heat expansion',
      'Heated liquid can boil and eject suddenly, injuring the classmate',
      'Heat escapes from the wrong end of the test tube',
      'It wastes Bunsen burner fuel'
    ],
    ans: 1,
    explain: 'Liquids can suddenly boil and eject from test tubes (bumping). Always angle the test tube away from ALL people. This is one of the most important Bunsen burner safety rules in Singapore school labs.'
  },
  {
    q: 'The inner blue cone of the non-luminous Bunsen flame contains:',
    opts: [
      'Fully combusted products (CO₂ and H₂O only)',
      'Pure oxygen from the air supply',
      'Unburnt or partially burnt gas',
      'The coolest part of the flame'
    ],
    ans: 2,
    explain: 'The inner cone contains unburnt gas that has not yet mixed sufficiently with air for complete combustion. Combustion occurs at the boundary of the inner and outer cone. The TIP of the inner cone — where combustion peaks — is the hottest region.'
  },
  {
    q: 'A student sets up a Bunsen burner with the air hole fully open and a large gas flow. The flame is extremely loud and noisy. She should:',
    opts: [
      'Leave it — a louder flame is always better for heating',
      'Slightly close the air hole to produce a steadier, quieter blue flame',
      'Increase the gas supply to match the air flow',
      'Turn off the gas — this situation is always an emergency'
    ],
    ans: 1,
    explain: 'A very loud, roaring flame is unnecessarily intense for most experiments. Partially closing the air hole gives a steady, quiet non-luminous blue flame — safer and more controlled for typical school heating tasks.'
  },
  {
    q: 'A student places a crucible at the VERY BASE of the Bunsen burner barrel. What problem does this cause?',
    opts: [
      'No problem — the base is closest to the gas supply and therefore hottest',
      'The crucible blocks gas flow to the flame',
      'The crucible is far from the hottest zone (tip of inner cone) and heats inefficiently',
      'The flame will instantly go out'
    ],
    ans: 2,
    explain: 'The base of the flame is not the hottest part. The TIP of the inner blue cone is hottest. Placing objects too low in the flame means they are in a cooler zone, reducing heating efficiency. Raise the crucible to just above the inner cone tip.'
  },
  {
    q: 'Which statement about the Bunsen burner safety flame is CORRECT?',
    opts: [
      'It is hotter than the blue flame because it is larger',
      'It produces complete combustion and is ideal for most heating tasks',
      'It is visible, used as a standby flame, and produces soot from incomplete combustion',
      'It is produced by opening the air hole fully'
    ],
    ans: 2,
    explain: 'The safety (yellow) flame: visible ✓ | used for standby ✓ | produces soot from incomplete combustion ✓ | produced by CLOSING (not opening) the air hole ✓. It is NOT used for actual heating experiments.'
  },

  // ═══════════════════════════════════════════════════
  // LAB EQUIPMENT & PARALLAX ERROR (Q36–50)
  // ═══════════════════════════════════════════════════
  {
    q: 'A student reads the volume of water in a measuring cylinder by looking from ABOVE the meniscus level. The reading will be:',
    opts: ['Accurate', 'Too low', 'Too high', 'Impossible to predict'],
    ans: 2,
    explain: 'Looking from above a concave meniscus means the line of sight crosses the scale ABOVE the true liquid level → reading TOO HIGH. Always read at eye level aligned with the bottom of the meniscus to avoid parallax error.'
  },
  {
    q: 'What type of error is introduced when reading a measuring cylinder from a non-horizontal eye level?',
    opts: ['Zero error', 'Random error', 'Parallax error', 'Systematic error'],
    ans: 2,
    explain: 'Parallax error occurs when the observer\'s eye is not level with the measurement scale. This causes the line of sight to be angled, giving an incorrect reading. Parallax error can affect any instrument with a scale — not just measuring cylinders.'
  },
  {
    q: 'The correct way to read the volume of water in a measuring cylinder is:',
    opts: [
      'Read at the TOP of the meniscus, eye above the scale',
      'Read at the BOTTOM of the meniscus, eye at the same level as the meniscus',
      'Read at the middle of the meniscus from any angle',
      'Read at the TOP — the bottom reading is used only for mercury'
    ],
    ans: 1,
    explain: 'For water (concave meniscus): always read at the BOTTOM of the meniscus with your eye perfectly level with it. This eliminates parallax error. Mercury forms a convex meniscus, so its top is read — but water is the common case in school labs.'
  },
  {
    q: 'Which instrument is most suitable for measuring the DIAMETER of a thin wire?',
    opts: ['30 cm ruler', 'Measuring tape', 'Vernier caliper', 'Thermometer'],
    ans: 2,
    explain: 'A Vernier caliper measures to 0.01 cm (0.1 mm), making it ideal for small dimensions like wire diameter. A ruler only reads to 1 mm — insufficient for precise small-scale measurement.'
  },
  {
    q: 'When heating a test tube of liquid over a Bunsen burner, the test tube opening must be:',
    opts: [
      'Pointing towards you for easy monitoring',
      'Pointing towards the teacher',
      'Pointing away from all people in the lab',
      'Sealed with a rubber bung to prevent spills'
    ],
    ans: 2,
    explain: 'Always angle the test tube away from everyone. Heated liquids can bubble and eject suddenly (bumping), causing burns. A rubber bung must NEVER be used when heating — pressure buildup can cause an explosion.'
  },
  {
    q: 'A thermometer is placed in a hot liquid. The student should record the temperature:',
    opts: [
      'Immediately — digital thermometers are instant',
      'After exactly 5 seconds',
      'After the reading stabilises and stops changing',
      'After removing the thermometer from the liquid'
    ],
    ans: 2,
    explain: 'Wait for the thermometer reading to stabilise (stop rising) before recording. Removing it from the liquid immediately causes the reading to drop as it cools. This procedural step ensures an accurate temperature measurement.'
  },
  {
    q: 'Which piece of equipment is used to transfer a small, PRECISE volume of liquid?',
    opts: ['Beaker', 'Conical flask', 'Pipette', 'Glass rod'],
    ans: 2,
    explain: 'A pipette delivers a precise, fixed volume of liquid (e.g., exactly 10 mL or 25 mL). Beakers and conical flasks have approximate volume markings and are used for mixing, not precise measurement.'
  },
  {
    q: 'A student wants to find the volume of an irregularly shaped pebble. The BEST method is:',
    opts: [
      'Measure its length × width × height with a ruler',
      'Weigh it on an electronic balance',
      'Use the water displacement method with a measuring cylinder',
      'Estimate by comparing to a known object'
    ],
    ans: 2,
    explain: 'Water displacement (Archimedes): record initial water volume, submerge the pebble, then volume of pebble = increase in water level. Formula-based volume only works for regular shapes (cubes, spheres, etc.).'
  },
  {
    q: 'Long hair should be tied back during all lab experiments primarily to:',
    opts: [
      'Improve visibility of the experiment setup',
      'Prevent hair from catching fire near flames or contaminating chemicals',
      'Allow better movement around the lab',
      'Follow school uniform rules only'
    ],
    ans: 1,
    explain: 'Loose hair near a Bunsen flame can catch fire instantly. Hair can also fall into experiments and contaminate results or react with chemicals. Tying hair back is a basic but critical safety rule.'
  },
  {
    q: 'A student accidentally spills acid on her skin. She should IMMEDIATELY:',
    opts: [
      'Apply baking soda paste to neutralise the acid on the skin',
      'Rinse the area with copious running water for at least 10 minutes, then inform the teacher',
      'Pat dry with a tissue and continue the experiment',
      'Apply ointment from the first aid kit directly'
    ],
    ans: 1,
    explain: 'For acid on skin: rinse immediately with lots of running water for 10–15+ minutes. This dilutes and removes the acid. Do NOT try to chemically neutralise on skin — the reaction itself generates heat and can worsen burns. Then notify the teacher.'
  },
  {
    q: 'Which instrument measures MASS most accurately in a Singapore school lab?',
    opts: ['Spring balance', 'Measuring cylinder', 'Electronic balance', 'Ammeter'],
    ans: 2,
    explain: 'An electronic balance measures mass precisely (typically to 0.01 g). A spring balance actually measures weight (force in Newtons), not mass. A measuring cylinder measures volume, and an ammeter measures electric current.'
  },
  {
    q: 'A retort stand, clamp and boss are primarily used to:',
    opts: [
      'Measure the volume of gases produced in a reaction',
      'Support and hold apparatus at a fixed height',
      'Heat substances uniformly from below',
      'Stir solutions during experiments'
    ],
    ans: 1,
    explain: 'A retort stand + clamp + boss supports apparatus (e.g., condenser, thermometer, separating funnel) at a fixed height. The boss connects the clamp to the vertical rod of the stand and allows height adjustment.'
  },
  {
    q: 'A heat-proof mat is placed under the Bunsen burner and tripod during heating. Its purpose is to:',
    opts: [
      'Prevent the Bunsen burner from tipping over during the experiment',
      'Protect the lab bench surface from heat damage',
      'Improve the efficiency of heat transfer to the beaker',
      'Reduce the Bunsen flame temperature'
    ],
    ans: 1,
    explain: 'The heat-proof mat (ceramic mat) protects the bench from heat damage. Hot equipment and the Bunsen burner itself can crack or scorch unprotected bench surfaces. Always use a heat-proof mat beneath your heating setup.'
  },
  {
    q: 'A student looks at a measuring cylinder\'s meniscus from BELOW eye level. The reading will be:',
    opts: ['Accurate', 'Too high', 'Too low', 'Exactly correct if the scale is clear'],
    ans: 2,
    explain: 'Looking from below a concave meniscus means the line of sight intersects the scale BELOW the true liquid level → reading TOO LOW. Always position your eye exactly level with the bottom of the meniscus.'
  },
  {
    q: 'Which of the following is the CORRECT action when a chemical spills on the lab bench?',
    opts: [
      'Wipe it up yourself immediately with a paper towel',
      'Pour water on it and leave it to dry naturally',
      'Inform the teacher immediately for safe cleanup guidance',
      'Fan the area to help it evaporate quickly'
    ],
    ans: 2,
    explain: 'Always inform the teacher immediately about chemical spills. The teacher knows whether the substance requires neutralisation, special disposal or protective equipment for cleanup. Never attempt cleanup without guidance.'
  },

  // ═══════════════════════════════════════════════════
  // VERNIER CALIPER (Q51–65)
  // ═══════════════════════════════════════════════════
  {
    q: 'A Vernier caliper has a zero error of +0.02 cm. The observed reading is 3.54 cm. The corrected reading is:',
    opts: ['3.52 cm', '3.54 cm', '3.56 cm', '3.50 cm'],
    ans: 0,
    explain: 'Corrected = Observed − Zero error = 3.54 − 0.02 = 3.52 cm. A POSITIVE zero error means the caliper reads TOO HIGH, so subtract it. Remember: Corrected = Observed − Zero Error (apply always).'
  },
  {
    q: 'A Vernier caliper reads −0.04 cm when its jaws are fully closed. This is a:',
    opts: ['Positive zero error', 'Negative zero error', 'Random error', 'Parallax error'],
    ans: 1,
    explain: 'When fully closed jaws give a reading below zero (e.g., −0.04 cm), this is a NEGATIVE zero error. The caliper reads LOWER than the true value. Corrected = Observed − (−0.04) = Observed + 0.04.'
  },
  {
    q: 'A Vernier caliper has a zero error of −0.06 cm. The observed reading of a rod is 4.22 cm. The corrected length is:',
    opts: ['4.16 cm', '4.22 cm', '4.28 cm', '4.18 cm'],
    ans: 2,
    explain: 'Corrected = Observed − Zero Error = 4.22 − (−0.06) = 4.22 + 0.06 = 4.28 cm. With a negative zero error, the caliper reads too LOW, so the corrected value is HIGHER than the observed reading.'
  },
  {
    q: 'Why is a Vernier caliper more precise than a standard 30 cm ruler?',
    opts: [
      'It is made of stainless steel instead of plastic',
      'It reads to 0.01 cm, while a ruler only reads to 0.1 cm (10× more precise)',
      'It automatically corrects for zero errors during measurement',
      'It can simultaneously measure length, mass and temperature'
    ],
    ans: 1,
    explain: 'A standard ruler: smallest division = 1 mm = 0.1 cm. A 10-division Vernier caliper: reads to 0.1 mm = 0.01 cm. This is 10 times more precise, making it essential for small or accurate measurements like coin thickness or wire diameter.'
  },
  {
    q: 'A Vernier caliper has a zero error of +0.08 cm. A student measures a marble and gets 1.62 cm. The corrected diameter is:',
    opts: ['1.54 cm', '1.62 cm', '1.70 cm', '1.60 cm'],
    ans: 0,
    explain: 'Corrected = Observed − Zero error = 1.62 − 0.08 = 1.54 cm. Positive zero error means it reads too HIGH. Subtract the error to find the true value.'
  },
  {
    q: 'Which measurement can a Vernier caliper perform that a ruler CANNOT?',
    opts: [
      'Measuring the length of a wooden pencil',
      'Measuring the INTERNAL diameter of a test tube',
      'Measuring the width of a textbook',
      'Measuring the height of a lab table'
    ],
    ans: 1,
    explain: 'A Vernier caliper has internal (upper) jaws for measuring inner dimensions like the internal diameter of a test tube or pipe. A ruler cannot fit inside a tube to take this measurement.'
  },
  {
    q: 'Before using a Vernier caliper with a known zero error, a student should:',
    opts: [
      'Ignore zero errors less than 0.05 cm',
      'Record the zero error and subtract it from all observed readings',
      'Replace it with a new caliper',
      'Tap the caliper on the bench to reset it to zero'
    ],
    ans: 1,
    explain: 'Always record the zero error before taking measurements. Apply Corrected = Observed − Zero Error to every reading. Do NOT attempt to physically force the scale to zero — this can damage the instrument.'
  },
  {
    q: 'The main scale of a Vernier caliper reads 2.3 cm and the Vernier scale adds 0.07 cm (no zero error). The measured diameter is:',
    opts: ['2.3 cm', '2.37 cm', '2.07 cm', '2.73 cm'],
    ans: 1,
    explain: 'Total reading = Main scale + Vernier scale = 2.3 + 0.07 = 2.37 cm. The main scale gives the coarse measurement; the Vernier scale provides the additional precision beyond the main scale\'s smallest division.'
  },
  {
    q: 'A student tilts her head to the side while reading a Vernier caliper scale. This introduces:',
    opts: ['Zero error', 'Parallax error', 'A systematic error in the Vernier scale', 'No error — Vernier calipers are immune to parallax'],
    ans: 1,
    explain: 'Parallax error can occur even with a Vernier caliper if the eye is not directly in front of and level with the scale markings. Always read with your eye perpendicular to the scale surface.'
  },
  {
    q: 'Which part of a Vernier caliper measures the INTERNAL diameter of a hollow cylinder?',
    opts: ['External (lower) jaws', 'Internal (upper) jaws', 'Depth probe', 'Locking screw'],
    ans: 1,
    explain: 'The internal (upper) jaws are designed to be inserted inside a hollow object to measure its internal diameter. The external (lower) jaws measure the outside dimensions of an object. The depth probe measures hole depths.'
  },
  {
    q: 'A Vernier caliper shows +0.03 cm zero error. A student measures a rod and reads 5.87 cm. The actual length is:',
    opts: ['5.84 cm', '5.87 cm', '5.90 cm', '5.93 cm'],
    ans: 0,
    explain: 'Corrected = Observed − Zero error = 5.87 − 0.03 = 5.84 cm. Positive zero error → caliper reads too high → subtract to get true value.'
  },
  {
    q: '"No zero error" on a Vernier caliper means:',
    opts: [
      'The caliper is brand new and has never been used',
      'The 0 mark on the Vernier scale aligns exactly with the 0 mark on the main scale when jaws are closed',
      'The caliper reads zero for all measurements',
      'No correction is needed for temperature changes'
    ],
    ans: 1,
    explain: 'No zero error = when fully closed, the Vernier 0 aligns with the main scale 0. Therefore, Observed = Corrected (no adjustment needed). This is the ideal condition for a Vernier caliper.'
  },
  {
    q: 'Why should Vernier caliper jaws be wiped clean before each measurement?',
    opts: [
      'Dirt prevents jaws from closing fully, artificially increasing the zero error and all readings',
      'Dirty jaws rust and become permanently inaccurate',
      'Clean jaws are required by Singapore school regulations',
      'Dirt changes the Vernier scale division spacing'
    ],
    ans: 0,
    explain: 'Debris between the jaws prevents complete closure → the instrument falsely reads a larger dimension. Always clean jaws before use to ensure zero error is truly due to the instrument, not contamination.'
  },
  {
    q: 'A student presses Vernier caliper jaws TOO HARD on a soft rubber ball. The measured diameter will be:',
    opts: [
      'Exactly the true diameter',
      'Smaller than the true diameter — the ball is compressed',
      'Larger than the true diameter',
      'Unpredictable for rubber materials'
    ],
    ans: 1,
    explain: 'Excessive jaw pressure compresses soft materials, giving a smaller reading than the true size. Use just enough force for the jaws to contact the surface without deforming it. This is especially important for soft or flexible objects.'
  },
  {
    q: 'The smallest measurable unit with a standard 10-division Vernier caliper is:',
    opts: ['0.001 cm', '0.01 cm', '0.1 cm', '1 cm'],
    ans: 1,
    explain: 'A 10-division Vernier caliper reads to 0.01 cm (= 0.1 mm). This is 10× more precise than a standard ruler (0.1 cm). The Vernier scale achieves this by subdividing the main scale\'s smallest division into 10 equal parts.'
  },

  // ═══════════════════════════════════════════════════
  // SI UNITS & PREFIXES (Q66–85)
  // ═══════════════════════════════════════════════════
  {
    q: 'The SI base unit for mass is:',
    opts: ['Gram (g)', 'Kilogram (kg)', 'Newton (N)', 'Milligram (mg)'],
    ans: 1,
    explain: 'The kilogram (kg) is the SI base unit for mass. In everyday life, grams are common, but for scientific work, kilograms is the official base unit. 1 kg = 1000 g.'
  },
  {
    q: 'The SI base unit for time is:',
    opts: ['Minute (min)', 'Hour (h)', 'Second (s)', 'Millisecond (ms)'],
    ans: 2,
    explain: 'The second (s) is the SI base unit for time. Minutes and hours are common in daily life but must be converted to seconds for physics calculations (e.g., speed in m/s requires time in seconds).'
  },
  {
    q: 'Which physical quantity has the SI unit of metre per second (m/s)?',
    opts: ['Acceleration', 'Speed', 'Force', 'Energy'],
    ans: 1,
    explain: 'Speed = distance ÷ time. Its SI unit combines metre (SI unit of length) and second (SI unit of time) → m/s. Acceleration is m/s², force is Newton (N), energy is Joule (J).'
  },
  {
    q: 'The prefix "milli-" represents:',
    opts: ['10³', '10⁻²', '10⁻³', '10⁶'],
    ans: 2,
    explain: 'Milli- = 10⁻³ (one-thousandth). Example: 1 mm = 10⁻³ m = 0.001 m. Compare: centi- = 10⁻² (one-hundredth), kilo- = 10³ (one thousand), mega- = 10⁶ (one million).'
  },
  {
    q: 'How many metres are in 3.5 km?',
    opts: ['35 m', '350 m', '3500 m', '35 000 m'],
    ans: 2,
    explain: '1 km = 1000 m. So 3.5 × 1000 = 3500 m. Kilo- means 10³, so multiply by 1000 when converting from km to m.'
  },
  {
    q: 'A pencil is 150 mm long. What is its length in metres?',
    opts: ['1.50 m', '0.150 m', '0.015 m', '15.0 m'],
    ans: 1,
    explain: '1 mm = 10⁻³ m = 0.001 m. So 150 mm = 150 × 0.001 = 0.150 m. Milli- = 10⁻³, so divide by 1000 to convert mm → m.'
  },
  {
    q: 'The SI base unit for temperature is:',
    opts: ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'Rankine (°R)'],
    ans: 2,
    explain: 'The Kelvin (K) is the SI base unit for temperature. In everyday school science, Celsius (°C) is used. The relationship is K = °C + 273. Both Kelvin and Celsius have the same degree size.'
  },
  {
    q: 'Which of these is a DERIVED unit (not a base SI unit)?',
    opts: ['Metre (m)', 'Kilogram (kg)', 'Second (s)', 'Metre per second (m/s)'],
    ans: 3,
    explain: 'Metre per second (m/s) is derived from two base units: metre and second. The 7 SI base units (metre, kilogram, second, ampere, kelvin, mole, candela) are independently defined. All other units are derived from them.'
  },
  {
    q: 'A ball travels 240 cm in an experiment. This distance in metres is:',
    opts: ['24 m', '2.4 m', '0.24 m', '0.024 m'],
    ans: 1,
    explain: '1 m = 100 cm, so 240 cm ÷ 100 = 2.4 m. Centi- = 10⁻², so there are 100 centimetres in 1 metre. Divide by 100 to convert cm → m.'
  },
  {
    q: 'Which prefix means 10⁶ (one million)?',
    opts: ['Kilo- (k)', 'Giga- (G)', 'Mega- (M)', 'Tera- (T)'],
    ans: 2,
    explain: 'Mega- (M) = 10⁶ (one million). Kilo- = 10³, Giga- = 10⁹, Tera- = 10¹².'
  },
  {
    q: 'A runner completes a 400 m race in 50 s. Her average speed is:',
    opts: ['8000 m/s', '8 m/s', '0.8 m/s', '0.125 m/s'],
    ans: 1,
    explain: 'Speed = Distance ÷ Time = 400 ÷ 50 = 8 m/s. Units check: m ÷ s = m/s ✓. Always confirm distance is in metres and time is in seconds before calculating.'
  },
  {
    q: '2500 g is equal to how many kilograms?',
    opts: ['0.25 kg', '2.5 kg', '25 kg', '250 kg'],
    ans: 1,
    explain: '1 kg = 1000 g, so 2500 g ÷ 1000 = 2.5 kg. Kilo- = 10³, so divide by 1000 when converting g → kg.'
  },
  {
    q: 'The SI base unit for electric current is:',
    opts: ['Volt (V)', 'Ohm (Ω)', 'Ampere (A)', 'Watt (W)'],
    ans: 2,
    explain: 'The ampere (A) is the SI base unit for electric current. Volt measures potential difference (V), ohm measures resistance (Ω), and watt measures power (W) — none of these are base SI units.'
  },
  {
    q: 'A car travels at 90 km/h. Its speed in m/s is:',
    opts: ['9 m/s', '25 m/s', '90 m/s', '324 m/s'],
    ans: 1,
    explain: '90 km/h = 90 × 1000 m ÷ 3600 s = 90 000 ÷ 3600 = 25 m/s. To convert km/h → m/s: divide by 3.6 (or multiply by 5/18).'
  },
  {
    q: 'Which list contains ONLY SI base units?',
    opts: [
      'Metre, kilogram, second, ampere',
      'Metre, gram, minute, watt',
      'Kilometre, kilogram, second, kelvin',
      'Centimetre, kilogram, second, ampere'
    ],
    ans: 0,
    explain: 'The 7 SI base units include: metre, kilogram, second, ampere, kelvin, mole, and candela. Grams (not kilograms), minutes (not seconds), watts, kilometres, and centimetres are NOT base SI units.'
  },
  {
    q: 'How many millimetres are in 4.5 m?',
    opts: ['45 mm', '450 mm', '4500 mm', '45 000 mm'],
    ans: 2,
    explain: '1 m = 1000 mm. So 4.5 × 1000 = 4500 mm. Milli- = 10⁻³, so 1 metre contains 1000 millimetres. Multiply by 1000 when converting m → mm.'
  },
  {
    q: 'A student records the mass of salt as 543 mg. This is equivalent to:',
    opts: ['5.43 g', '54.3 g', '0.543 g', '0.0543 g'],
    ans: 2,
    explain: '1 g = 1000 mg, so 543 mg ÷ 1000 = 0.543 g. Milli- = 10⁻³, so divide by 1000 to convert mg → g.'
  },
  {
    q: 'Why do scientists use SI units instead of non-standard units like "cups" or "inches"?',
    opts: [
      'SI units are always larger and easier to work with',
      'SI units enable consistent communication and comparison of data worldwide',
      'Non-standard units are illegal in science',
      'SI units were invented by scientists and are copyright protected'
    ],
    ans: 1,
    explain: 'The SI system ensures scientists in different countries use the same units, enabling accurate sharing and comparison of results. Without a common system, experimental data would be misinterpreted or incompatible.'
  },
  {
    q: 'A student measures a classroom as 8 m long. How many centimetres is this?',
    opts: ['8 cm', '80 cm', '800 cm', '8000 cm'],
    ans: 2,
    explain: '1 m = 100 cm. So 8 × 100 = 800 cm. Centi- = 10⁻², so there are 100 centimetres in 1 metre. Multiply by 100 when converting m → cm.'
  },
  {
    q: 'A cyclist travels 2.4 km in 8 minutes. Her speed in m/s is:',
    opts: ['0.3 m/s', '5 m/s', '300 m/s', '0.005 m/s'],
    ans: 1,
    explain: 'Convert: 2.4 km = 2400 m; 8 min = 480 s. Speed = 2400 ÷ 480 = 5 m/s. Always convert to SI units (m and s) before calculating speed in m/s.'
  },

  // ═══════════════════════════════════════════════════
  // ACCURACY, PRECISION & VARIABLES (Q86–110)
  // ═══════════════════════════════════════════════════
  {
    q: 'A student measures the boiling point of water three times and gets 98°C, 98°C and 98°C. The true boiling point is 100°C. Her results are:',
    opts: [
      'Accurate and precise',
      'Accurate but not precise',
      'Precise but not accurate',
      'Neither accurate nor precise'
    ],
    ans: 2,
    explain: 'Precise = results are consistent (all 98°C — low spread). Accurate = close to the true value (100°C). Since 98°C ≠ 100°C, the results are PRECISE (consistent) but NOT ACCURATE (wrong). This is a classic exam distinction.'
  },
  {
    q: 'A student measures the length of a spring five times and gets: 12.3, 13.1, 11.8, 12.9, 13.5 cm. The true value is 12.5 cm. His results are:',
    opts: [
      'Accurate and precise',
      'Accurate but not precise',
      'Precise but not accurate',
      'Neither accurate nor precise'
    ],
    ans: 1,
    explain: 'The average of his readings is close to 12.5 cm (accurate) but the spread is large (11.8 to 13.5 cm — not precise). Accurate = close to true value ✓; Precise = small spread ✗. So: accurate but NOT precise.'
  },
  {
    q: 'In an experiment studying how temperature affects enzyme activity, which is the INDEPENDENT variable (IV)?',
    opts: ['The rate of enzyme activity', 'The temperature', 'The amount of enzyme used', 'The time taken for the reaction'],
    ans: 1,
    explain: 'The IV is what the experimenter deliberately changes — here, temperature. The DV is what is measured as a result — here, enzyme activity rate. The amount of enzyme used is a controlled variable (kept constant).'
  },
  {
    q: 'A student investigates how the length of a rubber band affects how far it can launch a ball. The DEPENDENT variable (DV) is:',
    opts: [
      'The length of the rubber band',
      'The mass of the ball',
      'The distance the ball travels',
      'The type of rubber used'
    ],
    ans: 2,
    explain: 'The DV is what you MEASURE as a result of changing the IV. Here, the distance the ball travels is measured in response to changing the rubber band length (IV). The mass of the ball and type of rubber are controlled variables.'
  },
  {
    q: 'In an experiment testing how the number of coil turns in an electromagnet affects its strength, the CONTROLLED variables include:',
    opts: [
      'The number of coil turns',
      'The strength of the electromagnet',
      'The type of wire and electric current used',
      'The number of paper clips the magnet can lift'
    ],
    ans: 2,
    explain: 'Controlled variables are KEPT THE SAME to ensure a fair test. Here, the type of wire and electric current must stay constant so that only the number of coil turns (IV) affects the electromagnet\'s strength (DV).'
  },
  {
    q: 'A student hypothesises: "The longer the pendulum, the longer the time for one swing." Which component is MISSING from a good hypothesis?',
    opts: [
      'The independent variable',
      'The dependent variable',
      'The reason/explanation linking IV to DV',
      'Nothing — this is a complete hypothesis'
    ],
    ans: 2,
    explain: 'A complete hypothesis includes: (1) how the IV changes, (2) the expected change in DV, AND (3) a reason. "The longer the pendulum, the longer the swing time, because a longer pendulum has a larger arc to travel" would be complete.'
  },
  {
    q: 'A student repeats an experiment 5 times and gets very similar results each time, but all results are much higher than the true value. Her experimental technique has:',
    opts: [
      'High accuracy and high precision',
      'High accuracy but low precision',
      'High precision but low accuracy',
      'Low precision and low accuracy'
    ],
    ans: 2,
    explain: 'Very similar results each time = HIGH precision (consistent). Results much higher than the true value = LOW accuracy. A systematic error (e.g., a zero error) can cause this pattern — consistently wrong in the same direction.'
  },
  {
    q: 'Which of the following is the BEST example of a fair test?',
    opts: [
      'Testing two fertilisers on plants where one gets more water',
      'Testing the effect of light on plant growth while keeping water, soil, temperature and pot size the same',
      'Testing two different species of plants to compare how fertilisers work',
      'Testing one fertiliser at different times of year'
    ],
    ans: 1,
    explain: 'A fair test changes only the IV (type of fertiliser or light amount) and keeps all other variables (CVs) the same. Option B correctly controls water, soil, temperature and pot size, ensuring only light differs between test groups.'
  },
  {
    q: 'An experiment investigates whether bending a ruler changes how far it bends based on the material. The INDEPENDENT variable is:',
    opts: [
      'How far the ruler bends (deflection)',
      'The material of the ruler',
      'The length of the ruler',
      'The force applied to bend the ruler'
    ],
    ans: 1,
    explain: 'The IV is what is deliberately changed — here, the material of the ruler (e.g., plastic vs wood vs metal). The DV is how far it bends (deflection). The length of the ruler and force applied are controlled variables.'
  },
  {
    q: 'Why should an experiment be repeated multiple times before conclusions are drawn?',
    opts: [
      'Repeating always gives the exact same result — confirming the data',
      'To calculate an average, reducing the effect of random errors and increasing reliability',
      'Regulations require at least 5 repetitions in Singapore school labs',
      'So that the teacher can check the work more easily'
    ],
    ans: 1,
    explain: 'Repeating experiments allows you to: (1) identify anomalous results (outliers), (2) calculate a mean to reduce random errors, and (3) increase confidence in your results. More repeats = more reliable data.'
  },
  {
    q: 'A student measures the mass of a coin as 5.2 g, but the true mass is 5.23 g. The student\'s measurement is:',
    opts: [
      'Accurate — it is close to the true value',
      'Imprecise — the balance can only read to 0.1 g',
      'Both imprecise AND inaccurate',
      'Precise — it is consistent with one decimal place'
    ],
    ans: 1,
    explain: 'The measurement 5.2 g is rounded to 1 decimal place — the balance has a precision of ±0.1 g. The measurement itself is fairly accurate (5.2 vs 5.23), but the PRECISION of the instrument limits it to 0.1 g resolution.'
  },
  {
    q: 'A hypothesis should be written in which format?',
    opts: [
      '"I think the experiment will work."',
      '"The longer the spring, the more it stretches."',
      '"If the load on the spring increases, then the extension will increase, because a greater force stretches the coils further."',
      '"Spring length affects extension."'
    ],
    ans: 2,
    explain: 'A good hypothesis must be: directional (states the expected relationship), specific (links IV to DV), and includes a reason/explanation. Option C includes all three: if [IV changes]... then [DV changes]... because [reason].'
  },
  {
    q: 'To reduce parallax error when reading a measuring cylinder, the student should:',
    opts: [
      'Use a larger measuring cylinder',
      'Read the scale from directly in front and at eye level with the meniscus',
      'Take only one reading and record it',
      'Fill the cylinder completely to the top before measuring'
    ],
    ans: 1,
    explain: 'Parallax error is minimised by positioning your eye directly level with the measurement point (bottom of the meniscus for water). Reading from any other angle causes the line of sight to cross the scale at the wrong point.'
  },

  // ═══════════════════════════════════════════════════
  // SPEED CALCULATIONS (Q111–130)
  // ═══════════════════════════════════════════════════
  {
    q: 'A student walks 300 m in 60 s. Her average speed is:',
    opts: ['5 m/s', '50 m/s', '0.5 m/s', '18 000 m/s'],
    ans: 0,
    explain: 'Speed = Distance ÷ Time = 300 ÷ 60 = 5 m/s. Always check units: distance in metres, time in seconds → speed in m/s.'
  },
  {
    q: 'A ball travels at 12 m/s for 5 s. The distance covered is:',
    opts: ['2.4 m', '60 m', '17 m', '60 m/s'],
    ans: 1,
    explain: 'Distance = Speed × Time = 12 × 5 = 60 m. Use the formula triangle: D = S × T; S = D ÷ T; T = D ÷ S.'
  },
  {
    q: 'A train covers 150 m at a speed of 30 m/s. The time taken is:',
    opts: ['5 s', '0.2 s', '4500 s', '50 s'],
    ans: 0,
    explain: 'Time = Distance ÷ Speed = 150 ÷ 30 = 5 s.'
  },
  {
    q: 'A cyclist rides 18 km in 30 minutes. Her speed in m/s is:',
    opts: ['600 m/s', '0.6 m/s', '10 m/s', '36 m/s'],
    ans: 2,
    explain: 'Convert: 18 km = 18 000 m; 30 min = 1800 s. Speed = 18 000 ÷ 1800 = 10 m/s. ALWAYS convert to SI units before calculating.'
  },
  {
    q: 'A car travels the first 100 m in 10 s and the next 200 m in 20 s. The average speed for the whole journey is:',
    opts: ['10 m/s', '15 m/s', '20 m/s', '30 m/s'],
    ans: 0,
    explain: 'Average speed = Total distance ÷ Total time = (100 + 200) ÷ (10 + 20) = 300 ÷ 30 = 10 m/s. Do NOT average the two separate speeds — that only works if both intervals take the same time.'
  },
  {
    q: 'A runner sprints 200 m at 8 m/s, then walks 100 m at 2 m/s. The total average speed is closest to:',
    opts: ['5 m/s', '4.2 m/s', '6 m/s', '3.3 m/s'],
    ans: 1,
    explain: 'Sprint time = 200 ÷ 8 = 25 s. Walk time = 100 ÷ 2 = 50 s. Total = 300 m in 75 s. Average speed = 300 ÷ 75 = 4 m/s. Closest answer: 4.2 m/s (the correct calculation gives exactly 4 m/s; select the closest option).'
  },
  {
    q: 'A light-speed signal travels at 3 × 10⁸ m/s. How long does it take to travel 1.5 × 10¹¹ m (distance to Sun)?',
    opts: ['500 s', '50 s', '5 s', '5000 s'],
    ans: 0,
    explain: 'Time = Distance ÷ Speed = (1.5 × 10¹¹) ÷ (3 × 10⁸) = 0.5 × 10³ = 500 s (about 8.3 minutes). This is why sunlight takes ~8 minutes to reach Earth.'
  },
  {
    q: 'A stone is dropped and falls 45 m in 3 s. Its average speed during the fall is:',
    opts: ['135 m/s', '15 m/s', '150 m/s', '1.5 m/s'],
    ans: 1,
    explain: 'Speed = Distance ÷ Time = 45 ÷ 3 = 15 m/s. This is the average speed — in reality the stone accelerates, so its speed increases throughout the fall.'
  },
  {
    q: 'A student runs 400 m around a track and returns to the starting point in 80 s. Her average SPEED is:',
    opts: ['5 m/s', '0 m/s', '10 m/s', '400 m/s'],
    ans: 0,
    explain: 'Average speed = Total distance ÷ Total time = 400 ÷ 80 = 5 m/s. Note: average VELOCITY would be 0 m/s (displacement = 0 since she returned to the start), but SPEED uses total distance, not displacement.'
  },
  {
    q: 'A MRT train accelerates from rest to 20 m/s in 40 s. Its average speed during this period is:',
    opts: ['20 m/s', '10 m/s', '0.5 m/s', '800 m/s'],
    ans: 1,
    explain: 'When accelerating uniformly from 0 to 20 m/s, the average speed = (0 + 20) ÷ 2 = 10 m/s. Alternatively: distance = area under v-t graph = ½ × 40 × 20 = 400 m; speed = 400 ÷ 40 = 10 m/s.'
  },
  {
    q: 'A student cycles 5 km to school in 15 minutes. Her average speed in km/h is:',
    opts: ['20 km/h', '15 km/h', '0.33 km/h', '75 km/h'],
    ans: 0,
    explain: '15 minutes = 15/60 h = 0.25 h. Speed = 5 km ÷ 0.25 h = 20 km/h. Or directly: in 60 min she would cover 5 × 4 = 20 km (since 15 min × 4 = 60 min).'
  },
  {
    q: 'Which formula correctly expresses the speed equation?',
    opts: ['Speed = Time ÷ Distance', 'Speed = Distance × Time', 'Speed = Distance ÷ Time', 'Speed = Time ÷ (Distance × 2)'],
    ans: 2,
    explain: 'Speed = Distance ÷ Time (s = d/t). Rearranging: Distance = Speed × Time (d = st); Time = Distance ÷ Speed (t = d/s). Use the formula triangle to help remember: D on top, S and T on the bottom.'
  },
  {
    q: 'A snail travels 60 cm in 2 minutes. Its speed in m/s is:',
    opts: ['30 m/s', '0.005 m/s', '0.5 m/s', '30 cm/s'],
    ans: 1,
    explain: 'Convert: 60 cm = 0.6 m; 2 min = 120 s. Speed = 0.6 ÷ 120 = 0.005 m/s. Always convert to metres and seconds before computing m/s.'
  },
  {
    q: 'A sound wave travels at 340 m/s. How long does it take to travel 1700 m?',
    opts: ['5780 s', '5 s', '0.2 s', '57.8 s'],
    ans: 1,
    explain: 'Time = Distance ÷ Speed = 1700 ÷ 340 = 5 s. This is useful for estimating distance to lightning: count seconds after the flash, multiply by 340 m/s.'
  },
  {
    q: 'A car travels at constant speed. The driver doubles her speed. The same distance now takes:',
    opts: ['The same time', 'Half the time', 'Double the time', 'Four times the time'],
    ans: 1,
    explain: 'Time = Distance ÷ Speed. If speed doubles, time = Distance ÷ (2 × Speed) = half the original time. Speed and time are inversely proportional when distance is constant.'
  },
  {
    q: 'Two students start walking from the same point at the same time. Student A walks at 1.5 m/s; Student B walks at 2.5 m/s. After 20 s, how far apart are they?',
    opts: ['4 m', '20 m', '50 m', '80 m'],
    ans: 1,
    explain: 'Distance A = 1.5 × 20 = 30 m. Distance B = 2.5 × 20 = 50 m. Difference = 50 − 30 = 20 m apart (assuming they walk in the same direction).'
  },
  {
    q: 'A stone is thrown horizontally at 10 m/s. Ignoring air resistance, its horizontal speed after 3 s is:',
    opts: ['0 m/s', '30 m/s', '10 m/s', '7 m/s'],
    ans: 2,
    explain: 'Horizontal speed remains constant at 10 m/s (no horizontal force acting on it, ignoring air resistance). Gravity only affects vertical motion. This is a key principle: horizontal and vertical motions are independent.'
  },
  {
    q: 'A student records these times for a ball to roll 2 m: 4.0 s, 4.1 s, 3.9 s, 4.0 s, 4.2 s. The average speed using the mean time is closest to:',
    opts: ['0.5 m/s', '2.0 m/s', '0.48 m/s', '8 m/s'],
    ans: 0,
    explain: 'Mean time = (4.0+4.1+3.9+4.0+4.2) ÷ 5 = 20.2 ÷ 5 = 4.04 s. Speed = 2 ÷ 4.04 ≈ 0.495 m/s ≈ 0.5 m/s. Always use the mean of repeated measurements to reduce random errors.'
  },
  {
    q: 'A bus travels the first half of a journey at 20 m/s and the second half at 40 m/s (same distance each). The average speed is:',
    opts: ['30 m/s', '26.7 m/s', '20 m/s', '40 m/s'],
    ans: 1,
    explain: 'Let each half = d. Time₁ = d/20; Time₂ = d/40. Total time = d/20 + d/40 = 2d/40 + d/40 = 3d/40. Average speed = 2d ÷ (3d/40) = 2d × 40/3d = 80/3 ≈ 26.7 m/s. NOT 30 m/s — the slower leg takes longer.'
  },
  {
    q: 'The gradient (slope) of a DISTANCE-TIME graph represents:',
    opts: ['Acceleration', 'Distance', 'Speed', 'Force'],
    ans: 2,
    explain: 'Gradient of a distance-time graph = rise ÷ run = distance ÷ time = speed. A steeper gradient = faster speed. A horizontal line (zero gradient) = stationary (speed = 0). This is a fundamental graph interpretation skill.'
  },

  // ═══════════════════════════════════════════════════
  // DISTANCE-TIME GRAPHS (Q131–150)
  // ═══════════════════════════════════════════════════
  {
    q: 'On a distance-time graph, a HORIZONTAL straight line means the object is:',
    opts: ['Moving at constant speed', 'Accelerating', 'Stationary (not moving)', 'Decelerating'],
    ans: 2,
    explain: 'A horizontal line on a d-t graph means distance is NOT changing with time → the object is stationary (at rest). Speed = gradient = 0 for a horizontal line.'
  },
  {
    q: 'On a distance-time graph, a straight line sloping UPWARD to the right means:',
    opts: ['The object is stationary', 'The object moves at constant speed', 'The object is accelerating', 'The object is decelerating'],
    ans: 1,
    explain: 'A straight sloping line on a d-t graph means constant gradient = constant speed. If it curves upward (getting steeper), THEN it indicates acceleration.'
  },
  {
    q: 'On a distance-time graph, which feature indicates a FASTER speed?',
    opts: ['A less steep (flatter) line', 'A horizontal line', 'A steeper (more vertical) line', 'A curved line'],
    ans: 2,
    explain: 'Speed = gradient of the d-t graph. A steeper gradient (more vertical slope) = larger distance ÷ time ratio = FASTER speed. A flatter line means slower speed.'
  },
  {
    q: 'Two lines on a distance-time graph CROSS at the same point. This means:',
    opts: [
      'Both objects have the same speed at that moment',
      'Both objects are at the same POSITION at that moment',
      'Both objects stop at that moment',
      'Both objects have the same acceleration'
    ],
    ans: 1,
    explain: 'When two lines cross on a d-t graph, both objects are at the SAME DISTANCE (position) from the starting point at that time. They do NOT necessarily have the same speed — their speeds equal their gradients, which are different if the lines have different slopes.'
  },
  {
    q: 'A d-t graph shows a line that gets STEEPER and steeper (curves upward). This means the object is:',
    opts: ['Moving at constant speed', 'Decelerating', 'Stationary', 'Accelerating'],
    ans: 3,
    explain: 'An increasing gradient on a d-t graph means speed is increasing = acceleration. Each unit of time adds more distance than the previous unit, so the line curves upward and gets steeper.'
  },
  {
    q: 'The gradient of a d-t graph is calculated as:',
    opts: ['Time ÷ Distance', 'Distance × Time', 'Distance ÷ Time', 'Time ÷ (Distance)²'],
    ans: 2,
    explain: 'Gradient = rise ÷ run = change in distance ÷ change in time = speed. Always pick two clear points on the line, calculate the vertical change (Δd) and horizontal change (Δt), then divide.'
  },
  {
    q: 'A d-t graph shows an object\'s line going from a high point back DOWN towards zero distance. This means:',
    opts: [
      'The object stopped suddenly',
      'The object is returning towards the starting point',
      'The object exceeded its maximum speed',
      'The graph has been drawn incorrectly'
    ],
    ans: 1,
    explain: 'A downward slope on a d-t graph means distance from the starting point is decreasing — the object is moving BACK towards the start. The gradient (speed) is negative, indicating motion in the opposite direction.'
  },
  {
    q: 'A student draws a d-t graph. Between t=0 and t=5 s, the line is horizontal at d=10 m. Between t=5 s and t=10 s, the line slopes upward to d=30 m. The speed from t=5 to t=10 s is:',
    opts: ['2 m/s', '4 m/s', '6 m/s', '30 m/s'],
    ans: 1,
    explain: 'Speed = gradient = change in distance ÷ change in time = (30 − 10) ÷ (10 − 5) = 20 ÷ 5 = 4 m/s. Between t=0 and t=5 s, the horizontal line means speed = 0 (stationary).'
  },
  {
    q: 'On a d-t graph, Object A has a steeper gradient than Object B. Which statement is true?',
    opts: [
      'Object A is more massive than Object B',
      'Object A is slower than Object B',
      'Object A is faster than Object B',
      'Object A and B have the same speed'
    ],
    ans: 2,
    explain: 'Steeper gradient = greater speed. If A\'s line is steeper, A covers more distance per second → A is FASTER. Mass has nothing to do with the d-t graph.'
  },
  {
    q: 'A d-t graph shows two parallel lines (same slope, different starting heights). This means both objects:',
    opts: [
      'Started from the same position',
      'Have the same speed but started at different positions',
      'Are both accelerating equally',
      'Will never be at the same position'
    ],
    ans: 1,
    explain: 'Parallel lines have the same gradient = same speed. But they start at different distances from the reference point. Since they are parallel, they never cross — the objects always maintain the same distance between them.'
  },
  {
    q: 'From a d-t graph, an object travels 80 m in 16 s (straight line from origin). Its speed is:',
    opts: ['96 m/s', '5 m/s', '1280 m/s', '0.2 m/s'],
    ans: 1,
    explain: 'Speed = gradient = 80 ÷ 16 = 5 m/s. For a straight line from the origin, speed = total distance ÷ total time (same as gradient).'
  },
  {
    q: 'A student walks to school (d-t graph: sloping line), waits at a friend\'s house for 3 minutes (horizontal line), then continues to school (sloping line). What does the horizontal section represent?',
    opts: [
      'The student is walking very slowly',
      'The student is stationary at the friend\'s house',
      'The student is accelerating',
      'The student is going the wrong direction'
    ],
    ans: 1,
    explain: 'A horizontal section means zero gradient = zero speed = stationary. The student is not moving during this section — waiting at the friend\'s house. The distance from the starting point stays constant during this period.'
  },
  {
    q: 'A d-t graph shows two objects starting from the SAME point. Object X has a steeper line and Object Y has a shallower line. After 10 s, which object is FURTHER from the start?',
    opts: ['Object Y', 'Object X', 'They are at the same distance', 'Cannot be determined without mass'],
    ans: 1,
    explain: 'Steeper gradient = faster speed = covers more distance in the same time. Object X is faster, so after 10 s, it is further from the start. Mass is irrelevant to d-t graphs.'
  },
  {
    q: 'Why is the gradient of a distance-time graph equal to speed?',
    opts: [
      'It is a definition that scientists agreed on arbitrarily',
      'Gradient = change in y ÷ change in x = change in distance ÷ change in time = speed by definition',
      'Only applies to objects moving in a straight line on a flat surface',
      'The gradient equals acceleration, not speed'
    ],
    ans: 1,
    explain: 'Gradient = Δy ÷ Δx. On a d-t graph: y-axis = distance (m), x-axis = time (s). So gradient = Δdistance ÷ Δtime = speed (m/s). This is NOT acceleration — acceleration is the gradient of a VELOCITY-time graph.'
  },
  {
    q: 'A d-t graph shows an object\'s line becoming LESS steep over time (curves downward, flattening out). This indicates:',
    opts: ['Constant speed', 'Acceleration', 'Deceleration (slowing down)', 'The object has stopped'],
    ans: 2,
    explain: 'A decreasing gradient on a d-t graph means speed is decreasing = deceleration (slowing down). Each unit of time covers less distance than before. The object eventually stops when the line becomes horizontal.'
  },
  {
    q: 'Two objects start at the same time but DIFFERENT positions. On a d-t graph, their lines cross after 4 s. What happened at t = 4 s?',
    opts: [
      'Both objects have the same speed at t = 4 s',
      'Both objects are at the same distance from the reference point at t = 4 s',
      'Both objects stopped at t = 4 s',
      'The faster object overtook the slower object'
    ],
    ans: 1,
    explain: 'Crossing lines on a d-t graph = same position (same distance from reference point) at that time. It does NOT mean same speed (their speeds are their respective gradients, which may differ). The faster object did reach the same point, but this is about POSITION, not speed.'
  },
  {
    q: 'A person jogs at 3 m/s for 10 s, then cycles at 8 m/s for 10 s. Which d-t graph section is STEEPER?',
    opts: ['The jogging section', 'The cycling section', 'Both sections are equally steep', 'The steeper section is when speed = 0'],
    ans: 1,
    explain: 'The cycling section (8 m/s) is steeper than the jogging section (3 m/s). Greater speed = steeper gradient on a d-t graph. The cycling line rises 8 m for every 1 s, vs the jogging line which rises only 3 m per second.'
  },
  {
    q: 'A d-t graph shows an object that starts at d=20 m (not the origin) and moves at a steady speed. After 5 s it is at d=45 m. Its speed is:',
    opts: ['45 m/s', '9 m/s', '5 m/s', '13 m/s'],
    ans: 2,
    explain: 'Speed = gradient = change in distance ÷ change in time = (45 − 20) ÷ (5 − 0) = 25 ÷ 5 = 5 m/s. Use the CHANGE in distance, not the total distance reading — the object started at d=20 m, not zero.'
  },
  {
    q: 'Which of the following d-t graph descriptions is IMPOSSIBLE?',
    opts: [
      'A horizontal line at d=0 m (stationary at origin)',
      'A vertical line straight up (zero time, large increase in distance)',
      'A line with a shallow positive slope (slow constant speed)',
      'A line returning downward after reaching a peak (returning to start)'
    ],
    ans: 1,
    explain: 'A VERTICAL line on a d-t graph would mean infinite speed (distance increases with zero time elapsed) — physically impossible. All real objects require time to travel a distance. Vertical sections cannot appear on a real d-t graph.'
  },
  {
    q: 'A student says: "Two objects that meet at the same point on a d-t graph must be travelling at the same speed." Is this correct?',
    opts: [
      'Yes — meeting means they have matched their speeds',
      'No — crossing lines means same POSITION, not same speed',
      'Yes — they must be moving at the same speed to be at the same place',
      'No — meeting means they are both stationary'
    ],
    ans: 1,
    explain: 'Meeting (crossing) lines on a d-t graph = same position (distance from reference) at that moment. Their SPEEDS are given by their gradients — if the gradients differ, the speeds differ. Meeting at a point has nothing to do with speed matching.'
  }
]
