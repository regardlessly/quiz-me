export const meta = {
  id: 1, sem: 1,
  title: 'Scientific Endeavour',
  desc: 'Lab safety, GHS symbols, Bunsen burner, SI units, Vernier caliper, variables and speed'
}

export const notes = `
<h2>Scientific Endeavour</h2>
<p class="topic-desc">Scientific method · Variables · Lab safety · GHS symbols · Bunsen burner · SI units · Accuracy &amp; precision · Errors · Speed</p>

<h3>1. The Scientific Method</h3>
<p>The correct order: <strong>Observation → Question → Hypothesis → Experiment → Data collection → Analysis → Conclusion → Communication</strong></p>
<ul>
  <li><strong>Hypothesis</strong>: A tentative, testable explanation for an observation. Not yet proven. Format: <em>"If [IV] increases, then [DV] will increase/decrease because…"</em></li>
  <li><strong>Fair test</strong>: Only ONE variable (the IV) is changed; all others (CVs) are kept constant.</li>
  <li><strong>Control group</strong>: Receives no treatment; serves as a baseline for comparison.</li>
  <li><strong>Anomalous result (outlier)</strong>: A result far from other values. Investigate, then exclude from the mean if due to error.</li>
  <li><strong>Peer review</strong>: Other experts evaluate a scientist's work before publication — ensures quality and reliability.</li>
  <li><strong>Reproducibility</strong>: Independent scientists using the same method obtain similar results.</li>
</ul>

<h3>2. Variables</h3>
<table>
  <tr><th>Variable</th><th>Definition</th><th>Axis (graph)</th></tr>
  <tr><td><strong>Independent (IV)</strong></td><td>Deliberately changed by the scientist</td><td>x-axis</td></tr>
  <tr><td><strong>Dependent (DV)</strong></td><td>Measured; responds to the IV (also called "responding variable")</td><td>y-axis</td></tr>
  <tr><td><strong>Controlled (CV)</strong></td><td>Kept constant to ensure a fair test</td><td>—</td></tr>
</table>

<h3>3. Accuracy, Precision &amp; Errors</h3>
<ul>
  <li><strong>Accuracy</strong>: How close a measurement is to the <em>true value</em>.</li>
  <li><strong>Precision</strong>: How close repeated measurements are to <em>each other</em>.</li>
  <li><strong>Systematic error</strong>: Consistent error that shifts all readings in the same direction (e.g., zero error, uncalibrated instrument). Affects accuracy.</li>
  <li><strong>Random error</strong>: Unpredictable variation causing scatter in readings. Affects precision.</li>
  <li><strong>Zero error</strong>: Instrument doesn't read zero when it should. Corrected reading = displayed reading − zero error.</li>
  <li><strong>Parallax error</strong>: Eye not level with the scale. Avoid by reading at eye level, perpendicular to the scale.</li>
  <li><strong>Uncertainty</strong> = ± ½ × smallest division.</li>
</ul>

<h3>4. Laboratory Safety &amp; GHS Symbols</h3>
<table>
  <tr><th>Symbol</th><th>Hazard</th></tr>
  <tr><td>🔥 Flame</td><td>Flammable</td></tr>
  <tr><td>☠ Skull &amp; crossbones</td><td>Acute toxicity</td></tr>
  <tr><td>⚗ Corroding surface</td><td>Corrosive</td></tr>
  <tr><td>❗ Exclamation mark</td><td>Irritant / harmful</td></tr>
  <tr><td>🔥 Flame over circle</td><td>Oxidising</td></tr>
</table>
<p>Key rules: wear safety goggles at all times; waft — never sniff directly; tie back long hair; no eating/drinking; know where safety equipment is.</p>
<p>Acid on skin: rinse immediately with large amounts of running water for ≥10–15 min; inform teacher.</p>

<h3>5. Bunsen Burner Flames</h3>
<table>
  <tr><th>Flame</th><th>Air hole</th><th>Colour</th><th>Temperature</th><th>Use</th></tr>
  <tr><td>Luminous</td><td>Closed</td><td>Yellow/orange</td><td>Cooler</td><td>Safety flame (not heating)</td></tr>
  <tr><td>Non-luminous</td><td>Open</td><td>Blue</td><td>Hotter</td><td>Heating</td></tr>
</table>
<p>When heating a liquid in a test tube: point the mouth <strong>away from people</strong>, use a test tube holder, heat gently and intermittently, swirl to distribute heat.</p>

<h3>6. SI Units</h3>
<table>
  <tr><th>Quantity</th><th>SI Base Unit</th><th>Symbol</th></tr>
  <tr><td>Length</td><td>Metre</td><td>m</td></tr>
  <tr><td>Mass</td><td>Kilogram</td><td>kg</td></tr>
  <tr><td>Time</td><td>Second</td><td>s</td></tr>
  <tr><td>Temperature</td><td>Kelvin</td><td>K</td></tr>
  <tr><td>Electric current</td><td>Ampere</td><td>A</td></tr>
</table>
<p>Key conversions: 1 km = 1 000 m = 100 000 cm = 1 000 000 mm · 1 kg = 1 000 g = 1 000 000 mg · 1 m³ = 1 000 000 cm³ · 1 L = 1 000 cm³ = 1 000 mL</p>
<p>Prefixes: kilo (k) = 10³ · centi (c) = 10⁻² · milli (m) = 10⁻³ · micro (µ) = 10⁻⁶</p>

<h3>7. Measuring Volume</h3>
<ul>
  <li>Regular solids: use the appropriate formula (e.g., V = l × w × h for a cuboid; V = l³ for a cube).</li>
  <li>Irregular solids: <strong>water displacement method</strong> — Volume = V₂ − V₁.</li>
  <li>Liquids: measuring cylinder — read the <strong>bottom of the meniscus</strong> at eye level.</li>
</ul>

<h3>8. Speed</h3>
<p><strong>Speed = Distance ÷ Time</strong> (v = d/t)</p>
<p>Units: m/s (SI) or km/h. On a distance-time graph, the gradient = speed.</p>
`

export const questions = [
  // Q1
  {
    q: 'What is the correct order of steps in the scientific method?',
    opts: [
      'Hypothesis → Observation → Experiment → Conclusion → Analysis → Communication → Question → Data collection',
      'Observation → Question → Hypothesis → Experiment → Data collection → Analysis → Conclusion → Communication',
      'Question → Hypothesis → Experiment → Observation → Analysis → Conclusion → Data collection → Communication',
      'Experiment → Observation → Hypothesis → Question → Data collection → Analysis → Communication → Conclusion'
    ],
    ans: 1,
    explain: 'The scientific method follows: Observation → Question → Hypothesis → Experiment → Data collection → Analysis → Conclusion → Communication.'
  },
  // Q2
  {
    q: 'Which of the following best defines a hypothesis?',
    opts: [
      'A proven scientific fact',
      'A tentative, testable explanation for an observation',
      'A conclusion drawn after an experiment',
      'A measurement taken during an experiment'
    ],
    ans: 1,
    explain: 'A hypothesis is a tentative, testable explanation for an observation. It has not yet been proven and must be testable by experiment.'
  },
  // Q3
  {
    q: 'In an experiment testing how the amount of fertiliser affects plant height, what is the independent variable?',
    opts: ['Plant height', 'Type of plant', 'Amount of fertiliser', 'Sunlight received'],
    ans: 2,
    explain: 'The independent variable is the factor deliberately changed by the experimenter — in this case, the amount of fertiliser.'
  },
  // Q4
  {
    q: 'Which SI unit is used to measure mass?',
    opts: ['Newton (N)', 'Kilogram (kg)', 'Litre (L)', 'Metre (m)'],
    ans: 1,
    explain: 'The SI unit of mass is the kilogram (kg).'
  },
  // Q5
  {
    q: "A student's eye is above the measuring cylinder when reading the volume. What type of error does this cause?",
    opts: ['Zero error', 'Systematic error', 'Parallax error', 'Human error'],
    ans: 2,
    explain: "Parallax error occurs when the observer's eye is not level with the scale being read."
  },
  // Q6
  {
    q: 'Which flame of a Bunsen burner is used for heating?',
    opts: ['Yellow luminous flame', 'Blue non-luminous flame', 'Orange safety flame', 'White hot flame'],
    ans: 1,
    explain: 'The blue non-luminous flame is hotter and used for heating. The yellow luminous flame is a safety flame used when not actively heating.'
  },
  // Q7
  {
    q: 'What does the GHS flammable hazard symbol look like?',
    opts: ['A skull and crossbones', 'A flame', 'An exclamation mark', 'A corroding surface'],
    ans: 1,
    explain: 'The GHS flammable symbol is a flame, indicating the substance can catch fire easily.'
  },
  // Q8
  {
    q: 'Which of the following is a quantitative observation?',
    opts: ['The liquid is yellow', 'The gas smells pungent', 'The temperature is 37 °C', 'The solid is rough'],
    ans: 2,
    explain: 'A quantitative observation involves a numerical measurement with a unit. 37 °C is a number with a unit, making it quantitative.'
  },
  // Q9
  {
    q: 'What is 3 500 mL converted to litres?',
    opts: ['0.35 L', '3.5 L', '35 L', '350 L'],
    ans: 1,
    explain: '3 500 mL ÷ 1 000 = 3.5 L.'
  },
  // Q10
  {
    q: 'Which of the following is a controlled variable in an experiment testing how light intensity affects plant growth?',
    opts: ['Light intensity', 'Height of plant', 'Volume of water given daily', 'Number of leaves that grow'],
    ans: 2,
    explain: 'Volume of water given daily is kept constant to ensure a fair test. Light intensity is the IV; plant height or leaf count is the DV.'
  },
  // Q11
  {
    q: 'Which statement correctly describes the difference between accuracy and precision?',
    opts: [
      'Accuracy means measurements are close to each other; precision means measurements are close to the true value',
      'Accuracy means measurements are close to the true value; precision means measurements are close to each other',
      'Accuracy and precision mean the same thing — both refer to how close measurements are to the true value',
      'Precision means the instrument has been calibrated; accuracy means the experiment has been repeated'
    ],
    ans: 1,
    explain: 'Accuracy = closeness to the true value. Precision = closeness of repeated measurements to each other. A set of measurements can be precise but inaccurate (all consistent but all wrong).'
  },
  // Q12
  {
    q: 'What is a fair test in a scientific experiment?',
    opts: [
      'An experiment where all variables, including the independent variable, are kept constant',
      'An experiment where only the independent variable is changed while all other variables are kept constant',
      'An experiment where both the independent and dependent variables are changed simultaneously',
      'An experiment where results are checked by two different students'
    ],
    ans: 1,
    explain: 'A fair test changes only one variable (the IV) while keeping all other variables (CVs) constant, ensuring any change in the DV is caused solely by the IV.'
  },
  // Q13
  {
    q: 'Which of the following is a correct laboratory safety rule?',
    opts: [
      'Smell all chemicals directly to identify them quickly',
      'Eat or drink in the lab to maintain energy during long experiments',
      'Use the wafting technique to smell chemicals — never sniff directly',
      'Leave the Bunsen burner unattended when not actively heating'
    ],
    ans: 2,
    explain: 'Always waft chemicals to smell them — never sniff directly. Other rules: wear goggles, tie back long hair, no eating/drinking in the lab, know safety equipment locations.'
  },
  // Q14
  {
    q: 'Which statement correctly compares the luminous and non-luminous Bunsen burner flames?',
    opts: [
      'The luminous flame is hotter and blue; the non-luminous flame is cooler and yellow',
      'Both flames are the same temperature; they differ only in colour',
      'The non-luminous flame is hotter and blue; the luminous flame is cooler and yellow/orange',
      'The non-luminous flame is used as a safety flame; the luminous flame is used for heating'
    ],
    ans: 2,
    explain: 'Non-luminous flame: blue, much hotter, air hole open — used for heating. Luminous flame: yellow/orange, cooler, air hole closed — used as a safety flame when not actively heating.'
  },
  // Q15
  {
    q: 'Why should an experiment be repeated multiple times?',
    opts: [
      'To increase the number of independent variables tested',
      'To identify anomalous results and calculate a more reliable average',
      'To change the dependent variable between trials',
      'To satisfy the requirement that all hypotheses must be proven correct'
    ],
    ans: 1,
    explain: 'Repeating an experiment improves reliability. It helps identify anomalous results and allows calculation of a mean value more representative of the true result.'
  },
  // Q16
  {
    q: 'What is 2.5 km expressed in centimetres?',
    opts: ['2 500 cm', '25 000 cm', '250 000 cm', '2 500 000 cm'],
    ans: 2,
    explain: '2.5 km × 1 000 = 2 500 m. 2 500 m × 100 = 250 000 cm.'
  },
  // Q17
  {
    q: 'What is the water displacement method used for?',
    opts: [
      'Measuring the mass of a regular solid using a balance',
      'Finding the volume of an irregularly shaped solid using water',
      'Determining the temperature at which a substance dissolves',
      'Measuring the density of a liquid by weighing it'
    ],
    ans: 1,
    explain: 'The water displacement method finds the volume of an irregular solid. Steps: Record V₁ (water only), submerge solid, record V₂. Volume of solid = V₂ − V₁.'
  },
  // Q18
  {
    q: 'How can parallax error be avoided when reading a measuring cylinder?',
    opts: [
      'Always read the measuring cylinder from above to get a bird\'s-eye view',
      'Hold the measuring cylinder at arm\'s length when taking a reading',
      'Position your eye at the same level as the bottom of the meniscus, reading perpendicular to the scale',
      'Use a magnifying glass to enlarge the scale markings'
    ],
    ans: 2,
    explain: 'Parallax error is caused by the eye not being level with the scale. To avoid it: position eye level with the bottom of the meniscus and read perpendicular to the scale.'
  },
  // Q19
  {
    q: 'What is a zero error in a measuring instrument?',
    opts: [
      'An error that occurs when the student reads the wrong unit',
      'When the instrument does not read zero when it should, causing all readings to be off by a fixed amount',
      'An error caused by looking at the scale from an angle',
      'When the student forgets to tare the balance before measuring'
    ],
    ans: 1,
    explain: 'Zero error: instrument doesn\'t read zero when it should. E.g., balance shows 0.3 g with nothing on it — all readings are 0.3 g too high. Corrected reading = displayed reading − zero error.'
  },
  // Q20
  {
    q: 'Which of the following is a correct SI base unit?',
    opts: ['Litre (L) — volume', 'Celsius (°C) — temperature', 'Kilogram (kg) — mass', 'Newton (N) — force'],
    ans: 2,
    explain: 'SI base units: metre (m) for length, kilogram (kg) for mass, second (s) for time, kelvin (K) for temperature, ampere (A) for current. Litre, Celsius, and Newton are not SI base units.'
  },
  // Q21
  {
    q: 'In an experiment investigating how salt concentration affects how high a raisin floats, which is the dependent variable?',
    opts: ['Concentration of salt solution', 'Type of salt used', 'Height at which the raisin floats', 'Volume of the salt solution'],
    ans: 2,
    explain: 'The DV (dependent variable) is what is measured — the height at which the raisin floats. The IV is salt concentration. CVs include: same size raisin, same volume and temperature of solution.'
  },
  // Q22
  {
    q: 'In an experiment comparing pencil brand A vs brand B for mark darkness, which factor is the independent variable?',
    opts: ['Darkness of the mark produced', 'Brand of pencil (A or B)', 'Type of paper used', 'Length of stroke made'],
    ans: 1,
    explain: 'The IV is the factor deliberately changed — the brand of pencil (A or B). The DV is mark darkness. Type of paper, stroke length, and pressure applied are controlled variables.'
  },
  // Q23
  {
    q: 'A thermometer reads 1.5 °C when placed in melting ice (true value = 0 °C). What is the zero error and how should readings be corrected?',
    opts: [
      'Zero error = −1.5 °C; add 1.5 °C to every reading',
      'Zero error = +1.5 °C; subtract 1.5 °C from every reading',
      'Zero error = +1.5 °C; add 1.5 °C to every reading',
      'Zero error = 0 °C; the thermometer is working correctly'
    ],
    ans: 1,
    explain: 'Zero error = +1.5 °C (reads too high). To correct: subtract 1.5 °C from every reading. E.g., reading of 26.5 °C → true temperature = 26.5 − 1.5 = 25.0 °C.'
  },
  // Q24
  {
    q: 'Mei records plant heights: 12 cm, 11 cm, 13 cm, 20 cm, 12 cm. Which is anomalous and what should she do?',
    opts: [
      '11 cm is anomalous; include it in the average',
      '12 cm is anomalous because it appears twice; remove it',
      '20 cm is anomalous; investigate and exclude from the average if due to error',
      '13 cm is anomalous; it is the only non-repeating value'
    ],
    ans: 2,
    explain: '20 cm is anomalous — far from the other values (11–13 cm). Mei should check for experimental error, repeat that trial, and if confirmed as an error, exclude it from the average.'
  },
  // Q25
  {
    q: 'An experiment claims that eating breakfast improves test scores. Which step is essential to verify this claim scientifically?',
    opts: [
      'Ask all students to eat breakfast and compare scores to the previous year',
      'Design a controlled experiment with a treatment group (eats breakfast) and a control group (skips breakfast), keeping all other factors constant',
      'Survey students about whether they eat breakfast and how they feel',
      'Repeat the experiment once with a different teacher'
    ],
    ans: 1,
    explain: 'A controlled experiment is needed with a treatment group and a control group, keeping all other factors constant, with a large randomised sample, objective DV measurement, and statistical analysis.'
  },
  // Q26
  {
    q: 'True or False: The dependent variable is the variable that the scientist deliberately changes.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. The dependent variable is measured and responds to changes. The independent variable is what the scientist deliberately changes.'
  },
  // Q27
  {
    q: 'True or False: Qualitative observations always involve numerical data.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Qualitative observations are descriptive (colour, smell, texture) and do not involve numbers. Quantitative observations involve measurements with numbers and units.'
  },
  // Q28
  {
    q: 'True or False: A hypothesis must be proven true before an experiment is conducted.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. A hypothesis is a tentative explanation made before the experiment. The experiment is designed to test whether the hypothesis is supported or refuted.'
  },
  // Q29
  {
    q: 'True or False: Repeating an experiment helps to improve the reliability of results.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. Repeating experiments allows identification of anomalous results and calculation of averages, which improves reliability.'
  },
  // Q30
  {
    q: 'True or False: The non-luminous Bunsen flame should be used as a safety flame when not heating.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. The luminous (yellow) flame is the safety flame used when not actively heating. The non-luminous (blue) flame is the heating flame.'
  },
  // Q31
  {
    q: 'True or False: 1 litre is equal to 1 000 cm³.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. 1 L = 1 000 mL = 1 000 cm³.'
  },
  // Q32
  {
    q: 'True or False: Zero error can be corrected if the magnitude of the error is known.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. If the zero error is known, it can be subtracted from (or added to) all readings to give corrected values.'
  },
  // Q33
  {
    q: 'True or False: A precise set of measurements is always accurate.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Precision means measurements are close to each other, but they may all be far from the true value. High precision does not guarantee accuracy.'
  },
  // Q34
  {
    q: 'True or False: The GHS toxic symbol shows a skull and crossbones.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. The GHS acute toxicity symbol is a skull and crossbones on a white background with a red border.'
  },
  // Q35
  {
    q: 'True or False: In a fair test, multiple variables should be changed at the same time to save time.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. In a fair test, only ONE variable (the IV) is changed at a time. Changing multiple variables makes it impossible to determine which caused the observed effect.'
  },
  // Q36
  {
    q: 'The variable that is deliberately changed in an experiment is called the __________ variable.',
    opts: ['Dependent', 'Independent', 'Controlled', 'Responding'],
    ans: 1,
    explain: 'The independent variable (IV) is the factor deliberately changed by the scientist in an experiment.'
  },
  // Q37
  {
    q: 'The SI unit for length is the __________.',
    opts: ['Centimetre', 'Metre', 'Kilometre', 'Millimetre'],
    ans: 1,
    explain: 'The SI base unit for length is the metre (m). Centimetre, kilometre, and millimetre are derived from the metre but are not the base unit.'
  },
  // Q38
  {
    q: 'An observation that uses numbers and units is called a __________ observation.',
    opts: ['Qualitative', 'Quantitative', 'Systematic', 'Empirical'],
    ans: 1,
    explain: 'A quantitative observation involves a numerical measurement with units (e.g., 37 °C, 250 g). A qualitative observation is descriptive (e.g., blue, rough).'
  },
  // Q39
  {
    q: 'The blue, hotter flame of a Bunsen burner is called the __________ flame.',
    opts: ['Luminous', 'Non-luminous', 'Safety', 'Oxidising'],
    ans: 1,
    explain: 'The non-luminous flame is blue and hotter — produced when the air hole is open. It is used for heating.'
  },
  // Q40
  {
    q: 'The formula to calculate speed is Speed = __________ ÷ __________.',
    opts: ['Time ÷ Distance', 'Distance ÷ Time', 'Mass ÷ Volume', 'Force ÷ Area'],
    ans: 1,
    explain: 'Speed = Distance ÷ Time (v = d/t). Units: m/s (SI) or km/h.'
  },
  // Q41
  {
    q: "__________ error occurs when the observer's eye is not level with the measuring scale.",
    opts: ['Zero', 'Systematic', 'Parallax', 'Random'],
    ans: 2,
    explain: "Parallax error is caused by the observer's eye not being at the same level as the scale, resulting in an incorrect reading."
  },
  // Q42
  {
    q: '1 kg = __________ g',
    opts: ['10 g', '100 g', '1 000 g', '10 000 g'],
    ans: 2,
    explain: '1 kg = 1 000 g. The prefix "kilo" means 1 000.'
  },
  // Q43
  {
    q: 'A __________ solution can dissolve no more solute at a given temperature.',
    opts: ['Dilute', 'Concentrated', 'Saturated', 'Supersaturated'],
    ans: 2,
    explain: 'A saturated solution has dissolved the maximum amount of solute possible at a given temperature — no more solute can dissolve.'
  },
  // Q44
  {
    q: 'The variable that is measured as a result of changes to the IV is called the __________ variable.',
    opts: ['Independent', 'Controlled', 'Dependent', 'Random'],
    ans: 2,
    explain: 'The dependent variable (DV) is measured and responds to changes in the IV. It is also called the responding variable.'
  },
  // Q45
  {
    q: 'The process of finding the volume of an irregular solid using water is called the __________ method.',
    opts: ['Filtration', 'Titration', 'Water displacement', 'Chromatography'],
    ans: 2,
    explain: 'The water displacement method: measure initial water volume (V₁), submerge solid, measure new volume (V₂). Volume of solid = V₂ − V₁.'
  },
  // Q46
  {
    q: 'A student records masses: 45.2, 45.3, 45.1, 45.2, 45.3 g. The true mass is 50.0 g. Which statement is correct?',
    opts: [
      'Average = 45.22 g; results are accurate and precise',
      'Average = 45.22 g; results are precise but not accurate',
      'Average = 47.5 g; results are accurate but not precise',
      'Average = 50.0 g; results are both accurate and precise'
    ],
    ans: 1,
    explain: 'Average = (45.2+45.3+45.1+45.2+45.3) ÷ 5 = 45.22 g. Precise (close to each other) but NOT accurate (far from true value of 50.0 g).'
  },
  // Q47
  {
    q: 'Convert 4 500 mm to metres.',
    opts: ['0.45 m', '4.5 m', '45 m', '450 m'],
    ans: 1,
    explain: '4 500 mm ÷ 1 000 = 4.5 m.'
  },
  // Q48
  {
    q: 'A student fills a measuring cylinder with 40 cm³ of water. After submerging a rock, the reading is 65 cm³. What is the volume of the rock?',
    opts: ['15 cm³', '25 cm³', '40 cm³', '65 cm³'],
    ans: 1,
    explain: 'Volume of rock = V₂ − V₁ = 65 − 40 = 25 cm³.'
  },
  // Q49
  {
    q: 'A car travels 120 km in 2 hours. Calculate its average speed in km/h.',
    opts: ['40 km/h', '60 km/h', '80 km/h', '240 km/h'],
    ans: 1,
    explain: 'Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h.'
  },
  // Q50
  {
    q: 'Convert 0.005 km to centimetres.',
    opts: ['5 cm', '50 cm', '500 cm', '5 000 cm'],
    ans: 2,
    explain: '0.005 km × 1 000 = 5 m. 5 m × 100 = 500 cm.'
  },
  // Q51
  {
    q: 'What is the purpose of a control group in a scientific experiment?',
    opts: [
      'To change multiple variables at once to save time',
      'To serve as a baseline for comparison, receiving no treatment',
      'To ensure the dependent variable cannot be measured',
      'To repeat the independent variable in different conditions'
    ],
    ans: 1,
    explain: 'A control group receives no treatment (or zero amount of the IV) and serves as a baseline, allowing comparison to confirm that changes are caused by the IV.'
  },
  // Q52
  {
    q: 'Why is a large sample size preferred in scientific investigations?',
    opts: [
      'It allows the scientist to test more independent variables at once',
      'It makes the experiment faster to complete',
      'It reduces the effect of random variation and makes results more representative',
      'It guarantees that results will match the hypothesis'
    ],
    ans: 2,
    explain: 'A large sample size reduces random variation, makes results more representative of the population, increases statistical reliability, and minimises the impact of outliers.'
  },
  // Q53
  {
    q: "What does 'reproducibility' mean in science?",
    opts: [
      'The same scientist repeats the experiment many times',
      'Results can be predicted before the experiment is conducted',
      'Independent scientists using the same method obtain similar results',
      'The experiment always produces exactly the same numerical result'
    ],
    ans: 2,
    explain: 'Reproducibility means independent scientists, using the same method and materials, can repeat the experiment and obtain similar results — ensuring findings are reliable.'
  },
  // Q54
  {
    q: 'Which GHS hazard symbol indicates a flammable substance?',
    opts: ['Skull and crossbones', 'A flame', 'An exclamation mark', 'A corroding surface'],
    ans: 1,
    explain: 'The GHS flammable symbol is a flame. Other symbols: skull & crossbones = acute toxicity; exclamation mark = irritant/harmful; corroding surface = corrosive.'
  },
  // Q55
  {
    q: "Which of the following is an example of a testable hypothesis?",
    opts: [
      'Plants are beautiful when given water',
      'Plants watered daily will grow taller than plants watered weekly',
      'Science is important for understanding the world',
      'Students who enjoy science will do better in life'
    ],
    ans: 1,
    explain: 'A testable hypothesis makes a specific, measurable prediction. "Plants watered daily will grow taller than plants watered weekly" is testable because height can be measured and compared.'
  },
  // Q56
  {
    q: 'In an experiment investigating how pendulum length affects swing time, what is the dependent variable?',
    opts: ['Length of the pendulum', 'Time for 10 complete swings', 'Mass of the pendulum bob', 'Angle of release'],
    ans: 1,
    explain: 'The DV is time for 10 complete swings — measured and responding to changes. IV = pendulum length. CVs = mass of bob, angle of release, location.'
  },
  // Q57
  {
    q: "Which statement correctly distinguishes 'data' from 'evidence' in science?",
    opts: [
      "Data is used to support a hypothesis; evidence is raw measurements",
      "Data is raw measurements or observations; evidence is data interpreted to support or refute a hypothesis",
      "Data and evidence mean the same thing in scientific contexts",
      "Evidence is collected during an experiment; data is collected after analysis"
    ],
    ans: 1,
    explain: 'Data = raw measurements/observations. Evidence = data interpreted and used to support or refute a hypothesis. Not all data automatically constitutes evidence.'
  },
  // Q58
  {
    q: 'In an experiment testing whether music improves study performance, which is the most important set of controlled variables?',
    opts: [
      'The type of music played',
      'Whether a control group (silent study) is included',
      'The same study material, duration, and test for all participants',
      'The room temperature during the study session'
    ],
    ans: 2,
    explain: 'Key CVs: same study material, same duration, same test, same time of day. IV = music vs silence; DV = test score. Without consistent CVs, results are not valid.'
  },
  // Q59
  {
    q: 'A result that is far from all other values in a dataset is called:',
    opts: ['A control result', 'An anomalous result (outlier)', 'A dependent result', 'A null hypothesis'],
    ans: 1,
    explain: 'An anomalous result (outlier) is far from other values. Check for error, repeat the trial, and if confirmed as an error, exclude it from the average and note it in the report.'
  },
  // Q60
  {
    q: 'A measuring cylinder has a smallest division of 1 mL. What is the uncertainty in a reading taken from it?',
    opts: ['±1 mL', '±0.5 mL', '±0.1 mL', '±2 mL'],
    ans: 1,
    explain: 'Uncertainty = ±½ × smallest division = ±0.5 mL. Readings should be recorded as, e.g., 25.0 ± 0.5 mL.'
  },
  // Q61
  {
    q: 'True or False: A conclusion drawn from an experiment can never be revised.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Scientific conclusions are always open to revision if new evidence emerges. Science is self-correcting — conclusions are updated when better experiments provide contradictory evidence.'
  },
  // Q62
  {
    q: 'True or False: Only quantitative data can be used to support a hypothesis.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Both quantitative (numerical) and qualitative (descriptive) data can support a hypothesis. E.g., a colour change is qualitative evidence that a chemical reaction has occurred.'
  },
  // Q63
  {
    q: 'True or False: In the scientific method, observations come before forming a hypothesis.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. Scientists first make observations (or ask a question), then formulate a hypothesis to explain those observations.'
  },
  // Q64
  {
    q: 'True or False: The SI unit for temperature is degrees Celsius (°C).',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. The SI base unit for temperature is the kelvin (K), not degrees Celsius. However, °C is widely used in everyday science and is acceptable at Sec 1 level.'
  },
  // Q65
  {
    q: 'True or False: To find the volume of a cube with sides of 3 cm, you multiply 3 × 3 × 3.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. Volume of a cube = length × width × height = 3 × 3 × 3 = 27 cm³.'
  },
  // Q66
  {
    q: 'A __________ is a variable that is kept constant in an experiment to ensure a fair test.',
    opts: ['Dependent variable', 'Independent variable', 'Controlled variable', 'Random variable'],
    ans: 2,
    explain: 'Controlled variables (CVs) are kept constant so that any change in the DV can be attributed solely to the IV.'
  },
  // Q67
  {
    q: 'The GHS symbol showing a flame above a circle represents which hazard?',
    opts: ['Flammable substances', 'Toxic substances', 'Oxidising substances', 'Corrosive substances'],
    ans: 2,
    explain: 'A flame above a circle is the GHS symbol for oxidising substances — these provide oxygen to fuel fires and can intensify burning.'
  },
  // Q68
  {
    q: 'The smallest readable unit on a measuring instrument is called its __________.',
    opts: ['Zero error', 'Smallest division (least count)', 'Parallax margin', 'Calibration unit'],
    ans: 1,
    explain: 'The smallest division (or least count) is the smallest increment on an instrument\'s scale. Uncertainty = ±½ × smallest division.'
  },
  // Q69
  {
    q: 'An observation based on the senses (colour, texture, smell) is called a __________ observation.',
    opts: ['Quantitative', 'Qualitative', 'Systematic', 'Comparative'],
    ans: 1,
    explain: 'Qualitative observations are descriptive and based on the senses — e.g., "the solution is blue", "the surface feels rough". They do not involve numbers.'
  },
  // Q70
  {
    q: "The SI prefix 'kilo' means __________.",
    opts: ['10', '100', '1 000', '1 000 000'],
    ans: 2,
    explain: "The prefix 'kilo' (k) means 1 000 (× 10³). E.g., 1 km = 1 000 m; 1 kg = 1 000 g."
  },
  // Q71
  {
    q: 'A student measures a table: 1.20, 1.21, 1.19, 1.20, 1.21 m. What is the average length?',
    opts: ['1.18 m', '1.19 m', '1.20 m', '1.21 m'],
    ans: 2,
    explain: 'Average = (1.20 + 1.21 + 1.19 + 1.20 + 1.21) ÷ 5 = 6.01 ÷ 5 = 1.202 m ≈ 1.20 m.'
  },
  // Q72
  {
    q: 'Convert 3 hours 45 minutes to seconds.',
    opts: ['3 600 s', '10 800 s', '13 500 s', '15 300 s'],
    ans: 2,
    explain: '3 h × 3 600 = 10 800 s. 45 min × 60 = 2 700 s. Total = 10 800 + 2 700 = 13 500 s.'
  },
  // Q73
  {
    q: 'A balance has a zero error of +0.4 g. A student measures a coin and gets 5.7 g. What is the true mass?',
    opts: ['5.3 g', '5.7 g', '6.1 g', '4.9 g'],
    ans: 0,
    explain: 'True mass = displayed reading − zero error = 5.7 − 0.4 = 5.3 g.'
  },
  // Q74
  {
    q: 'Water levels before and after submerging a marble: 30.0 cm³ and 34.5 cm³. What is the volume of the marble?',
    opts: ['3.0 cm³', '4.0 cm³', '4.5 cm³', '30.0 cm³'],
    ans: 2,
    explain: 'Volume = V₂ − V₁ = 34.5 − 30.0 = 4.5 cm³.'
  },
  // Q75
  {
    q: 'Express 0.00025 kg in grams and milligrams.',
    opts: ['0.025 g and 25 mg', '0.25 g and 250 mg', '2.5 g and 2 500 mg', '25 g and 25 000 mg'],
    ans: 1,
    explain: '0.00025 kg × 1 000 = 0.25 g. 0.25 g × 1 000 = 250 mg.'
  },
  // Q76
  {
    q: 'Why is communication of scientific findings important?',
    opts: [
      'So scientists can win awards and recognition',
      'To allow peer review, reproducibility, and building on existing knowledge',
      'So students can memorise the results for exams',
      'To prevent other scientists from repeating the same experiment'
    ],
    ans: 1,
    explain: 'Communication enables peer review (checking methods/conclusions), reproducibility (others verify results), building on knowledge, and public benefit from scientific discoveries.'
  },
  // Q77
  {
    q: 'Which is a valid reason for rejecting a hypothesis after an experiment?',
    opts: [
      'The experiment was too difficult to perform',
      'The hypothesis was too long and detailed',
      'The experimental data consistently contradicts the predicted relationship between IV and DV',
      'The control group showed the same results as the experimental group by coincidence'
    ],
    ans: 2,
    explain: 'A hypothesis is rejected when data does not support the predicted IV-DV relationship, or when repeated trials consistently give contrary results. A rejected hypothesis guides further investigation.'
  },
  // Q78
  {
    q: 'Which is the correct precaution when heating a liquid in a test tube over a Bunsen burner?',
    opts: [
      'Point the mouth of the test tube toward the teacher for supervision',
      'Hold the test tube directly over the hottest part of the flame without moving it',
      'Point the mouth of the test tube away from people and heat gently and intermittently',
      'Place the test tube directly on the wire gauze without using a holder'
    ],
    ans: 2,
    explain: 'Always point the mouth away from people. Heat gently and intermittently using a test tube holder. Swirl/move the tube to heat evenly and prevent bumping.'
  },
  // Q79
  {
    q: 'Which statement correctly distinguishes systematic error from random error?',
    opts: [
      'Systematic error is unpredictable; random error is consistent and repeatable',
      'Both errors are caused by faulty instruments and affect accuracy the same way',
      'Systematic error consistently shifts all readings in the same direction; random error causes unpredictable scatter',
      'Random error can be corrected; systematic error cannot be identified'
    ],
    ans: 2,
    explain: 'Systematic error: consistent, repeatable (e.g., zero error) — shifts all readings the same way, affects accuracy. Random error: unpredictable variation — causes scatter, affects precision.'
  },
  // Q80
  {
    q: 'Why must a scientific experiment procedure be clear and detailed?',
    opts: [
      'To make the report longer and more impressive',
      'To allow exact replication, peer evaluation, identification of errors, and safe conduct',
      'So that only the original researcher can reproduce the experiment',
      'To avoid including a hypothesis section in the report'
    ],
    ans: 1,
    explain: 'A detailed procedure allows: exact replication (reproducibility), identification of error sources, peer scrutiny of methods, and safe, correct step-by-step conduct.'
  },
  // Q81
  {
    q: 'A student accidentally spills acid on their hand. What is the correct immediate response?',
    opts: [
      'Apply baking soda directly to neutralise the acid immediately',
      'Immediately rinse the affected area with large amounts of running water for at least 10–15 minutes and inform the teacher',
      'Wipe the acid off with a dry cloth and wait to see if there is a reaction',
      'Apply ice directly to the affected area to stop the chemical reaction'
    ],
    ans: 1,
    explain: 'Immediately rinse with large amounts of running water for ≥10–15 min. Inform the teacher. Remove contaminated clothing if needed. Do NOT try to neutralise with another chemical.'
  },
  // Q82
  {
    q: 'An experiment produces results: 10, 11, 10, 10, 25. How should the average be calculated?',
    opts: [
      'Include all values: (10+11+10+10+25) ÷ 5 = 13.2',
      'Identify 25 as anomalous, exclude it, and average the rest: (10+11+10+10) ÷ 4 = 10.25',
      'Use only the most common value: 10',
      'Average only the first and last values: (10+25) ÷ 2 = 17.5'
    ],
    ans: 1,
    explain: '25 is anomalous (far from other values 10–11). Exclude it. Average of remaining = (10+11+10+10) ÷ 4 = 41 ÷ 4 = 10.25 ≈ 10.3.'
  },
  // Q83
  {
    q: 'Which procedure ensures an accurate reading from a measuring cylinder?',
    opts: [
      'Hold the cylinder at eye level and read the top of the meniscus',
      'Place on a flat surface, position eye at the level of the bottom of the meniscus, and read perpendicular to the scale',
      'Read from above to get a clear view of the scale markings',
      'Hold the cylinder up to a light source and read the highest point of the liquid'
    ],
    ans: 1,
    explain: 'Correct steps: (1) Flat surface. (2) Eye level with the liquid surface. (3) Read the bottom of the concave meniscus. (4) Perpendicular to the scale to avoid parallax error.'
  },
  // Q84
  {
    q: 'In an experiment on how sugar concentration affects yeast fermentation rate, which factor is a controlled variable?',
    opts: [
      'Concentration of sugar solution',
      'Volume of carbon dioxide produced',
      'Temperature of the solution',
      'Amount of yeast needed to completely ferment the solution'
    ],
    ans: 2,
    explain: 'Temperature must be controlled (e.g., 30 °C) as a CV. Other CVs: volume of solution, type and mass of yeast, duration. Sugar concentration = IV; CO₂ produced = DV.'
  },
  // Q85
  {
    q: 'A student claims stirring makes sugar dissolve faster. What must she do to scientifically prove this?',
    opts: [
      'Repeat the same experiment with stirring five times',
      'Ask classmates if they agree with her observation',
      'Conduct a controlled experiment: test dissolving WITH stirring vs WITHOUT stirring, keeping all other variables constant',
      'Change the type of sugar and test different stirring speeds simultaneously'
    ],
    ans: 2,
    explain: 'She needs a controlled experiment: stirring vs no stirring, with same mass of sugar, same particle size, same volume and temperature of water, same container. Only stirring should differ.'
  },
  // Q86
  {
    q: 'True or False: Wearing safety goggles is only necessary when working with corrosive chemicals.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Safety goggles should be worn during all laboratory experiments. Splashing, glass breakage, or heating could all pose risks to the eyes.'
  },
  // Q87
  {
    q: 'True or False: A student who records measurements to many decimal places is guaranteed to be accurate.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Many decimal places indicate precision, not accuracy. An instrument with systematic error gives consistent (precise) readings that may all be far from the true value (inaccurate).'
  },
  // Q88
  {
    q: 'True or False: The independent variable is plotted on the x-axis of a graph.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. The independent variable (what is changed) is plotted on the x-axis. The dependent variable (what is measured) is plotted on the y-axis.'
  },
  // Q89
  {
    q: 'True or False: Scientific knowledge is absolute and never changes.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Scientific knowledge is always provisional. New evidence may update or overturn existing theories. Science is fundamentally self-correcting.'
  },
  // Q90
  {
    q: 'True or False: 1 m³ = 1 000 000 cm³.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. 1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1 000 000 cm³.'
  },
  // Q91
  {
    q: 'The __________ is the group in an experiment that receives no treatment and serves as a baseline.',
    opts: ['Experimental group', 'Treatment group', 'Control group', 'Variable group'],
    ans: 2,
    explain: 'The control group receives no treatment (zero amount of the IV) and serves as a baseline for comparison.'
  },
  // Q92
  {
    q: 'When a result is far from the others in a dataset, it is called an __________ result.',
    opts: ['Reliable', 'Precise', 'Anomalous', 'Controlled'],
    ans: 2,
    explain: 'An anomalous result (outlier) is far from the other values. It should be investigated and, if due to error, excluded from the average.'
  },
  // Q93
  {
    q: '1 cm = __________ mm',
    opts: ['1 mm', '5 mm', '10 mm', '100 mm'],
    ans: 2,
    explain: '1 cm = 10 mm. The prefix "centi" means 10⁻² and "milli" means 10⁻³, so 1 cm = 10 mm.'
  },
  // Q94
  {
    q: 'The __________ flame of the Bunsen burner is orange/yellow and used as a safety flame.',
    opts: ['Non-luminous', 'Blue', 'Luminous', 'Heating'],
    ans: 2,
    explain: 'The luminous flame is yellow/orange, cooler, and used as a safety flame when not actively heating (air hole closed).'
  },
  // Q95
  {
    q: 'Measurements that are close to each other but not to the true value are said to be __________ but not __________.',
    opts: ['Accurate but not precise', 'Precise but not accurate', 'Valid but not reliable', 'Reliable but not reproducible'],
    ans: 1,
    explain: 'Precise = consistent with each other. Accurate = close to the true value. Measurements can be precise but inaccurate (all clustered together but all wrong).'
  },
  // Q96
  {
    q: 'A student walks 500 m in 4 minutes. What is his speed in m/s?',
    opts: ['0.48 m/s', '1.04 m/s', '2.08 m/s', '4.17 m/s'],
    ans: 2,
    explain: 'Time = 4 × 60 = 240 s. Speed = Distance ÷ Time = 500 ÷ 240 = 2.08 m/s.'
  },
  // Q97
  {
    q: 'A measuring cylinder has a zero error of −1 cm³. A reading shows 28 cm³. What is the true volume?',
    opts: ['27 cm³', '28 cm³', '29 cm³', '30 cm³'],
    ans: 2,
    explain: 'True volume = displayed reading − zero error = 28 − (−1) = 28 + 1 = 29 cm³.'
  },
  // Q98
  {
    q: 'Convert 7 200 seconds to hours.',
    opts: ['0.5 hours', '1 hour', '2 hours', '4 hours'],
    ans: 2,
    explain: '7 200 ÷ 60 = 120 minutes. 120 ÷ 60 = 2 hours.'
  },
  // Q99
  {
    q: 'A student weighs an empty beaker: 120 g. After adding sand, the total is 345 g. What is the mass of the sand?',
    opts: ['120 g', '225 g', '345 g', '465 g'],
    ans: 1,
    explain: 'Mass of sand = total mass − empty beaker = 345 − 120 = 225 g.'
  },
  // Q100
  {
    q: 'What is the value of 6.02 × 10²?',
    opts: ['6.02', '60.2', '602', '6 020'],
    ans: 2,
    explain: '6.02 × 10² = 6.02 × 100 = 602.'
  },
  // Q101
  {
    q: 'What is the main purpose of drawing a line graph in a scientific experiment?',
    opts: [
      'To make the lab report look more professional',
      'To show the trend between IV and DV, allow interpolation, and identify anomalies',
      'To replace the need for a data table',
      'To prove that the hypothesis was correct'
    ],
    ans: 1,
    explain: 'A line graph: shows the IV-DV trend visually, allows interpolation/extrapolation, helps identify anomalous results, and shows the nature of the relationship (linear, curved, etc.).'
  },
  // Q102
  {
    q: 'Why should the bottom of the meniscus be read in a measuring cylinder?',
    opts: [
      'Because the top of the meniscus gives a higher reading due to gravity',
      'Because most liquids form a concave meniscus; reading the bottom gives the true volume',
      'Because the top of the meniscus is harder to see with the naked eye',
      'Because the bottom of the meniscus is always at a whole number value'
    ],
    ans: 1,
    explain: 'Most liquids (e.g., water) form a concave meniscus due to adhesion to glass. The bottom of the meniscus is the true liquid level. Reading the top gives an incorrectly high value.'
  },
  // Q103
  {
    q: 'Which of the following is a qualitative observation?',
    opts: [
      'The mass of the rock is 250 g',
      'The temperature rose by 15 °C',
      'The solution turned blue when litmus paper was added',
      'The time taken was 45 seconds'
    ],
    ans: 2,
    explain: 'Qualitative observations are descriptive (colour, smell, texture). "The solution turned blue" is qualitative. Mass, temperature change, and time are quantitative observations.'
  },
  // Q104
  {
    q: 'What is peer review in science?',
    opts: [
      'Students reviewing each other\'s homework assignments',
      "A scientist's work being evaluated by experts in the same field before publication",
      'A government committee approving new scientific theories',
      'The process of choosing which experiments receive funding'
    ],
    ans: 1,
    explain: 'Peer review is evaluation by other experts (peers) before publication. It checks methodology, data analysis, and conclusions — maintaining quality and integrity of published science.'
  },
  // Q105
  {
    q: 'Which of the following is a well-formed scientific hypothesis?',
    opts: [
      'I think exercise is good for health',
      'Exercise is better than no exercise',
      'If daily exercise time increases, then resting heart rate will decrease, because cardiovascular fitness improves with regular training',
      'Students who exercise will be healthier'
    ],
    ans: 2,
    explain: "A good hypothesis: (1) states the expected IV-DV relationship, (2) is testable, (3) provides a reason. Format: 'If [IV], then [DV] because [reason]'."
  },
  // Q106
  {
    q: 'Which instrument would a student use to measure how long an ice cube takes to melt?',
    opts: ['Thermometer', 'Stopwatch', 'Measuring cylinder', 'Vernier caliper'],
    ans: 1,
    explain: 'A stopwatch/timer measures time in seconds. Other useful instruments: thermometer (to monitor room temperature as a CV), balance (same initial ice mass), ruler (consistent ice cube size).'
  },
  // Q107
  {
    q: 'What type of flame does a Bunsen burner produce when the air hole is fully open?',
    opts: [
      'A yellow, cool luminous flame used as a safety flame',
      'A blue, hot non-luminous flame used for heating',
      'An orange, medium-heat flame used for gentle warming',
      'A white, extremely hot flame used for melting metals'
    ],
    ans: 1,
    explain: 'Fully open air hole → maximum air → hot blue non-luminous flame for heating. Fully closed → no air → cool yellow luminous safety flame.'
  },
  // Q108
  {
    q: 'A scientist gets results: 12, 13, 12, 12, 25, 12, 13, 12, 12, 13. What should she do with the value 25?',
    opts: [
      'Include it — all data must be reported regardless',
      'Exclude it immediately without investigation',
      'Identify 25 as anomalous, investigate for error, exclude if confirmed, and average the remaining 9 values',
      'Replace 25 with 12 to make the dataset more uniform'
    ],
    ans: 2,
    explain: '25 is anomalous (far from the 12–13 cluster). Investigate for error. If confirmed, exclude and average the 9 remaining: (12+13+12+12+12+13+12+12+13) ÷ 9 = 111 ÷ 9 = 12.3.'
  },
  // Q109
  {
    q: 'Why are scientific experiments typically conducted in laboratory settings rather than outdoors?',
    opts: [
      'Because outdoor experiments are illegal in most countries',
      'Because laboratory equipment is too expensive to take outdoors',
      'Because laboratory settings allow better control of variables, standardised conditions, and access to precise instruments',
      'Because outdoor light interferes with all scientific measurements'
    ],
    ans: 2,
    explain: 'Lab settings allow: control of variables (temperature, humidity, light), standardised conditions for reproducibility, access to precise instruments, and safety controls.'
  },
  // Q110
  {
    q: "For the hypothesis 'Taller students have larger shoe sizes', what is the independent variable?",
    opts: ['Shoe size', 'Height of student', 'Age of student', 'Number of students measured'],
    ans: 1,
    explain: 'IV = height of student (the predictor). DV = shoe size (the measured response). Data: measure height with tape measure, record shoe size, plot height (x) vs shoe size (y), look for positive correlation.'
  },
  // Q111
  {
    q: "True or False: The dependent variable can also be called the 'responding variable'.",
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: "TRUE. The dependent variable is also called the 'responding variable' because it responds to changes in the independent variable."
  },
  // Q112
  {
    q: 'True or False: Scientific models are perfect representations of reality.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Scientific models are simplified representations used to explain phenomena. They have limitations and may not capture all aspects of reality. Models are updated as new evidence emerges.'
  },
  // Q113
  {
    q: 'True or False: A student who gets the exact same wrong answer every time has precise but inaccurate results.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. Getting the same wrong result every time shows high precision (consistency) but low accuracy (not matching the true value).'
  },
  // Q114
  {
    q: "True or False: When not heating, the Bunsen burner's air hole should be closed so a safety flame burns.",
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: 'TRUE. When not heating, close the air hole so the yellow luminous safety flame burns. The harder-to-see blue flame could accidentally burn someone nearby.'
  },
  // Q115
  {
    q: 'True or False: Data tables in experiments should include units in the column headings.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 0,
    explain: "TRUE. Units must be in column headings (e.g., 'Temperature / °C') so individual data entries are just numbers, making tables clear and unambiguous."
  },
  // Q116
  {
    q: "The process by which scientists evaluate each other's work before publication is called __________.",
    opts: ['Peer review', 'Hypothesis testing', 'Reproducibility', 'Data analysis'],
    ans: 0,
    explain: 'Peer review is the process by which experts in the same field evaluate a scientist\'s work before it is published, checking for errors and ensuring quality.'
  },
  // Q117
  {
    q: 'In a graph, the __________ variable is plotted on the x-axis.',
    opts: ['Dependent', 'Independent', 'Controlled', 'Anomalous'],
    ans: 1,
    explain: 'The independent variable (IV) — what is changed — is plotted on the x-axis. The dependent variable (DV) — what is measured — is plotted on the y-axis.'
  },
  // Q118
  {
    q: 'The SI unit for time is the __________.',
    opts: ['Minute', 'Hour', 'Second', 'Millisecond'],
    ans: 2,
    explain: 'The SI base unit for time is the second (s). Minutes, hours, and milliseconds are derived units.'
  },
  // Q119
  {
    q: 'Reading at the __________ of the meniscus gives the correct volume in a measuring cylinder.',
    opts: ['Top', 'Middle', 'Bottom', 'Side'],
    ans: 2,
    explain: 'Read the bottom of the concave meniscus at eye level to get the correct volume. Reading from the top gives an incorrectly high value.'
  },
  // Q120
  {
    q: 'A result that is far from the other values in a dataset is called an __________ result.',
    opts: ['Reliable', 'Precise', 'Accurate', 'Anomalous'],
    ans: 3,
    explain: 'An anomalous result (outlier) is far from other values in a dataset. It should be investigated and excluded from the mean if due to experimental error.'
  },
  // Q121
  {
    q: 'A stone has a mass of 150 g and displaces 60 cm³ of water. Calculate its density.',
    opts: ['0.4 g/cm³', '2.0 g/cm³', '2.5 g/cm³', '9 000 g/cm³'],
    ans: 2,
    explain: 'Density = Mass ÷ Volume = 150 ÷ 60 = 2.5 g/cm³.'
  },
  // Q122
  {
    q: 'A student runs 400 m at 5 m/s. How long does it take in seconds?',
    opts: ['40 s', '80 s', '100 s', '200 s'],
    ans: 1,
    explain: 'Time = Distance ÷ Speed = 400 ÷ 5 = 80 seconds.'
  },
  // Q123
  {
    q: 'Convert 5.2 × 10⁻³ kg to milligrams.',
    opts: ['52 mg', '520 mg', '5 200 mg', '52 000 mg'],
    ans: 2,
    explain: '5.2 × 10⁻³ kg = 0.0052 kg × 1 000 = 5.2 g × 1 000 = 5 200 mg.'
  },
  // Q124
  {
    q: 'A student measures: 24.5 cm, 24.7 cm, 24.6 cm. True length is 25.0 cm. Which statement is correct?',
    opts: [
      'Average = 24.6 cm; results are accurate and precise',
      'Average = 24.6 cm; results are precise but not accurate',
      'Average = 25.0 cm; results are both accurate and precise',
      'Average = 24.6 cm; results are accurate but not precise'
    ],
    ans: 1,
    explain: 'Average = (24.5+24.7+24.6) ÷ 3 = 73.8 ÷ 3 = 24.6 cm. Precise (close to each other) but NOT accurate (below true value of 25.0 cm).'
  },
  // Q125
  {
    q: 'Convert 7.3 m² to cm².',
    opts: ['730 cm²', '7 300 cm²', '73 000 cm²', '730 000 cm²'],
    ans: 2,
    explain: '1 m² = (100 cm)² = 10 000 cm². 7.3 m² × 10 000 = 73 000 cm².'
  },
  // Q126
  {
    q: 'What is the difference between a scientific law and a scientific theory?',
    opts: [
      'A law is more important than a theory; theories are just guesses',
      'A law describes what happens; a theory explains why it happens',
      'A theory is proven to be true; a law is still being tested',
      'Laws apply to physics only; theories apply to biology'
    ],
    ans: 1,
    explain: 'A scientific law describes what happens (often mathematically, e.g., Law of Conservation of Mass). A scientific theory explains why — supported by a large body of evidence (e.g., Kinetic Particle Theory).'
  },
  // Q127
  {
    q: "What does 'reliability' mean in the context of scientific experiments?",
    opts: [
      'The results are exactly equal to the true value',
      'The experiment produces similar results when repeated under the same conditions',
      'Only one person needs to perform the experiment',
      'The experiment uses expensive, high-quality equipment'
    ],
    ans: 1,
    explain: 'Reliability = consistent results when an experiment is repeated multiple times, by the same or different researchers. Improved by repeating trials and calculating averages.'
  },
  // Q128
  {
    q: "What does 'validity' mean in a scientific experiment?",
    opts: [
      'The results are always exactly the same in every trial',
      'The experiment is approved by a government agency',
      'The experiment actually tests what it claims to test, with only the IV changed and an appropriate DV',
      'The experiment uses at least 100 participants'
    ],
    ans: 2,
    explain: 'An experiment is valid if it actually tests what it claims to test: (1) appropriate DV measurement, (2) only IV changed (fair test), (3) method free from major systematic error.'
  },
  // Q129
  {
    q: 'Which of the following is a correctly stated derived physical quantity with its SI unit?',
    opts: [
      'Speed — measured in kilometres per hour (km/h)',
      'Density — measured in kilograms per cubic metre (kg/m³)',
      'Temperature — measured in degrees Celsius (°C)',
      'Mass — measured in grams (g)'
    ],
    ans: 1,
    explain: 'Density (kg/m³ or g/cm³) is a derived quantity (mass/volume). Note: speed SI unit is m/s (not km/h); temperature SI unit is kelvin (K); mass SI unit is kilogram (kg).'
  },
  // Q130
  {
    q: 'Why must long hair be tied back during laboratory practical work?',
    opts: [
      'To avoid contaminating laboratory equipment with hair products',
      'To prevent hair from falling into a Bunsen burner flame and catching fire, and from contaminating samples',
      'Because hair conducts electricity and could cause a short circuit',
      'To allow the student to see the laboratory bench more clearly'
    ],
    ans: 1,
    explain: 'Long hair could fall into a Bunsen burner flame and catch fire — a serious hazard. It could also contaminate samples or interfere with measurements.'
  },
  // Q131
  {
    q: 'In an experiment testing whether sugar dissolves faster in hot water than cold water, what is the dependent variable?',
    opts: ['Temperature of water', 'Mass of sugar added', 'Time for sugar to dissolve completely', 'Volume of water used'],
    ans: 2,
    explain: 'DV = time for sugar to dissolve (measured). IV = temperature of water (changed). CVs = same mass of sugar, same volume of water, same particle size, no stirring. Repeat 3 times per temperature.'
  },
  // Q132
  {
    q: 'A student claims his new fertiliser doubles plant growth. Which question is most important to ask before accepting this claim?',
    opts: [
      'What colour is the fertiliser?',
      'How much did the fertiliser cost?',
      'Was the experiment conducted with a control group and all other variables held constant?',
      'Was the experiment conducted in a greenhouse or outdoors?'
    ],
    ans: 2,
    explain: 'Most importantly: Was there a control group? Was it a fair test? Was sample size large enough? Were results reproducible and peer-reviewed? Without this, the claim cannot be accepted.'
  },
  // Q133
  {
    q: 'An experiment produces: 8.1, 8.2, 8.0, 8.1, 8.0. True value = 8.1. What is the average and are the results accurate?',
    opts: [
      'Average = 8.08; results are precise but not accurate',
      'Average = 8.08 ≈ 8.1; results are both precise and accurate',
      'Average = 8.5; results are neither precise nor accurate',
      'Average = 8.0; results are accurate but not precise'
    ],
    ans: 1,
    explain: 'Average = (8.1+8.2+8.0+8.1+8.0) ÷ 5 = 40.4 ÷ 5 = 8.08 ≈ 8.1. Both precise (close to each other) and accurate (close to true value of 8.1).'
  },
  // Q134
  {
    q: "A student's data table has the heading 'Temperature' without units. What is the problem?",
    opts: [
      'The table cannot be printed without units in the heading',
      'Without units, data is ambiguous — readers cannot tell if temperatures are in °C, K, or °F',
      'Units must always be in the data cells, not in the heading',
      'Temperature cannot be measured without knowing the units in advance'
    ],
    ans: 1,
    explain: "Without units, the data is ambiguous. Fix: write 'Temperature / °C'. Units in headings make data clear and allow correct interpretation."
  },
  // Q135
  {
    q: 'Why is it important to wash hands after every laboratory practical, even without handling dangerous chemicals?',
    opts: [
      'To remove the smell of chemicals from hands before eating',
      'Hands may have picked up trace chemicals from surfaces; washing prevents accidental ingestion and is good hygiene',
      'Because the school rules require it regardless of experiment',
      'To activate chemicals on the hands and render them harmless'
    ],
    ans: 1,
    explain: 'Hands may have contacted unknown traces of chemicals on equipment or bench surfaces. Washing prevents accidental ingestion and is a general hygiene practice for all lab work.'
  },
  // Q136
  {
    q: 'True or False: The density formula is Density = Volume ÷ Mass.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Density = Mass ÷ Volume (ρ = m/V). Dividing volume by mass gives specific volume, not density.'
  },
  // Q137
  {
    q: 'True or False: Scientists should only conduct experiments that will support their hypothesis.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Scientists must be objective and report all results, including those that contradict the hypothesis. Designing experiments solely to confirm a hypothesis is confirmation bias — unscientific.'
  },
  // Q138
  {
    q: 'True or False: The SI unit for volume is the litre (L).',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. The SI unit for volume is the cubic metre (m³). Litres are commonly used but are not SI base units (1 L = 0.001 m³).'
  },
  // Q139
  {
    q: 'True or False: A prediction is the same as a hypothesis.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: "FALSE. A hypothesis is a broader explanation. A prediction is a specific testable statement about what will happen: 'If the hypothesis is correct, then when I do X, I expect Y.'"
  },
  // Q140
  {
    q: 'True or False: All experiments must use expensive equipment to be valid.',
    opts: ['True', 'False', 'Partially correct', 'Cannot be determined'],
    ans: 1,
    explain: 'FALSE. Validity depends on experimental design, variable control, and appropriate measurement — not equipment cost. Simple, well-designed experiments can produce valid results.'
  },
  // Q141
  {
    q: 'The variable plotted on the y-axis of a graph is the __________ variable.',
    opts: ['Independent', 'Controlled', 'Dependent', 'Anomalous'],
    ans: 2,
    explain: 'The dependent variable (DV) — what is measured — is plotted on the y-axis. The independent variable (IV) — what is changed — is plotted on the x-axis.'
  },
  // Q142
  {
    q: 'An experiment is __________ if it produces similar results when repeated under the same conditions.',
    opts: ['Accurate', 'Valid', 'Reliable', 'Precise'],
    ans: 2,
    explain: 'Reliability = consistent results when repeated. Improved by repeating trials and calculating averages. Different from validity (whether the experiment tests what it claims to test).'
  },
  // Q143
  {
    q: '1 000 000 µm = __________ m',
    opts: ['0.001 m', '0.1 m', '1 m', '1 000 m'],
    ans: 2,
    explain: '1 µm = 10⁻⁶ m. So 1 000 000 µm = 1 000 000 × 10⁻⁶ m = 1 m.'
  },
  // Q144
  {
    q: 'The symbol for the SI unit of mass is __________.',
    opts: ['g', 'mg', 'kg', 't'],
    ans: 2,
    explain: 'The SI base unit of mass is the kilogram (kg). Grams (g) and milligrams (mg) are derived units; tonne (t) is not an SI base unit.'
  },
  // Q145
  {
    q: 'The smallest division on a standard 100 mL measuring cylinder is typically __________ mL.',
    opts: ['0.1 mL', '0.5 mL', '1 mL', '5 mL'],
    ans: 2,
    explain: 'A standard 100 mL measuring cylinder typically has smallest divisions of 1 mL (some have 2 mL). Uncertainty = ±0.5 mL.'
  },
  // Q146
  {
    q: 'A cube has sides of 5 cm. Calculate its volume.',
    opts: ['15 cm³', '25 cm³', '100 cm³', '125 cm³'],
    ans: 3,
    explain: 'Volume of a cube = side³ = 5 × 5 × 5 = 125 cm³.'
  },
  // Q147
  {
    q: 'A student needs 250 mL of solution. What is this expressed as a decimal fraction of a litre?',
    opts: ['0.025 L', '0.25 L', '2.5 L', '25 L'],
    ans: 1,
    explain: '250 mL ÷ 1 000 = 0.25 L.'
  },
  // Q148
  {
    q: 'Five current readings: 2.1, 2.3, 2.1, 2.2, 2.1 A. True value = 2.2 A. What is the average?',
    opts: ['Average = 2.1 A; not accurate', 'Average = 2.16 A; fairly accurate', 'Average = 2.5 A; not accurate', 'Average = 2.2 A; perfectly accurate'],
    ans: 1,
    explain: 'Average = (2.1+2.3+2.1+2.2+2.1) ÷ 5 = 10.8 ÷ 5 = 2.16 A. Fairly accurate — close to the true value of 2.2 A.'
  },
  // Q149
  {
    q: 'Express 0.000 001 m using an appropriate SI prefix.',
    opts: ['1 mm (millimetre)', '1 nm (nanometre)', '1 µm (micrometre)', '1 pm (picometre)'],
    ans: 2,
    explain: '0.000 001 m = 1 × 10⁻⁶ m = 1 µm (1 micrometre). The prefix "micro" (µ) = 10⁻⁶.'
  },
  // Q150
  {
    q: 'A rectangular block is 10 cm long, 4 cm wide, and 3 cm tall. Calculate its volume.',
    opts: ['17 cm³', '40 cm³', '80 cm³', '120 cm³'],
    ans: 3,
    explain: 'Volume = length × width × height = 10 × 4 × 3 = 120 cm³.'
  }
]
