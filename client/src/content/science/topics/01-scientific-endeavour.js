export const meta = {
  id: 1, sem: 1,
  title: 'Scientific Endeavour',
  desc: 'Lab safety, SI units, measurements, speed and distance-time graphs'
}

export const notes = `
  <h2>Scientific Endeavour</h2>
  <p class="topic-desc">Lab safety, SI units, measuring instruments, scientific skills, speed and distance-time graphs</p>

  <div class="notes-card">
    <h3>1. Laboratory Safety</h3>
    <p>Science labs contain hazards. Always follow safety rules to prevent accidents.</p>
    <div class="example">
      <strong>General rules:</strong><br>
      • Wear safety goggles and a lab coat when handling chemicals or heating substances<br>
      • Never eat, drink or smell chemicals directly — waft gently<br>
      • Tie long hair back and avoid loose clothing near flames<br>
      • Report all accidents and spills to the teacher immediately<br>
      • Know the location of fire extinguisher, fire blanket and first-aid kit<br><br>
      <strong>Heating:</strong><br>
      • Heat test tubes at an angle, opening pointing away from people<br>
      • Use a heat-proof mat; never heat a closed container<br>
      • Allow glassware to cool before handling<br><br>
      <strong>Hazard symbols (GHS):</strong><br>
      Flammable 🔥 &nbsp; Toxic ☠ &nbsp; Corrosive &nbsp; Oxidising &nbsp; Irritant
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Common Lab Equipment</h3>
    <div class="example">
      <strong>Measuring volume:</strong> measuring cylinder (read at the bottom of the meniscus)<br>
      <strong>Measuring mass:</strong> electronic balance<br>
      <strong>Measuring temperature:</strong> thermometer<br>
      <strong>Measuring length:</strong> ruler, Vernier caliper (more precise)<br>
      <strong>Heating:</strong> Bunsen burner — blue (roaring) flame for heating; yellow (safety) flame when not in use<br>
      <strong>Containing reactions:</strong> beaker, conical flask, boiling tube, test tube<br>
      <strong>Transferring liquids:</strong> pipette, dropper, glass rod<br>
      <strong>Supporting:</strong> retort stand, clamp, boss, tripod, wire gauze
    </div>
  </div>

  <div class="notes-card">
    <h3>3. SI Units &amp; Physical Quantities</h3>
    <p>Science uses the International System of Units (SI) for consistency worldwide.</p>
    <div class="example">
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:3px 8px"><strong>Quantity</strong></td><td style="padding:3px 8px"><strong>SI Unit</strong></td><td style="padding:3px 8px"><strong>Symbol</strong></td></tr>
        <tr><td style="padding:3px 8px">Length</td><td style="padding:3px 8px">metre</td><td style="padding:3px 8px">m</td></tr>
        <tr><td style="padding:3px 8px">Mass</td><td style="padding:3px 8px">kilogram</td><td style="padding:3px 8px">kg</td></tr>
        <tr><td style="padding:3px 8px">Time</td><td style="padding:3px 8px">second</td><td style="padding:3px 8px">s</td></tr>
        <tr><td style="padding:3px 8px">Temperature</td><td style="padding:3px 8px">kelvin</td><td style="padding:3px 8px">K</td></tr>
        <tr><td style="padding:3px 8px">Current</td><td style="padding:3px 8px">ampere</td><td style="padding:3px 8px">A</td></tr>
      </table><br>
      <strong>Common prefixes:</strong><br>
      kilo (k) = × 1000 &nbsp; centi (c) = × 0.01 &nbsp; milli (m) = × 0.001<br>
      1 km = 1000 m &nbsp; 1 m = 100 cm = 1000 mm &nbsp; 1 kg = 1000 g
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Scientific Process Skills</h3>
    <div class="example">
      <strong>Observing:</strong> using senses/instruments to gather data<br>
      <strong>Inferring:</strong> explaining observations based on prior knowledge<br>
      <strong>Classifying:</strong> grouping objects by shared properties<br>
      <strong>Predicting:</strong> forecasting outcomes based on patterns<br>
      <strong>Hypothesising:</strong> proposing a testable explanation<br><br>
      <strong>Variables in an experiment:</strong><br>
      • <span class="highlight">Independent variable (IV):</span> the one you change<br>
      • <span class="highlight">Dependent variable (DV):</span> the one you measure<br>
      • <span class="highlight">Controlled variables:</span> everything else kept constant<br><br>
      <strong>Fair test:</strong> change only the IV; measure the DV; keep all else constant
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Speed, Distance and Time</h3>
    <div class="example">
      <strong>Formula:</strong><br>
      <span class="highlight">Speed = Distance ÷ Time</span><br>
      Distance = Speed × Time &nbsp;&nbsp; Time = Distance ÷ Speed<br><br>
      SI unit of speed: m/s (metres per second)<br>
      Also common: km/h (kilometres per hour)<br><br>
      <strong>Converting km/h to m/s:</strong> divide by 3.6<br>
      <strong>Converting m/s to km/h:</strong> multiply by 3.6<br><br>
      Example: A car travels 150 km in 2 h. Speed = 150 ÷ 2 = <span class="highlight">75 km/h</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Distance-Time Graphs</h3>
    <div class="example">
      <strong>Horizontal line:</strong> object is stationary (not moving)<br>
      <strong>Straight sloped line:</strong> constant speed<br>
      <strong>Steeper slope:</strong> faster speed<br>
      <strong>Slope going down:</strong> moving back towards start<br><br>
      <strong>Speed from graph</strong> = gradient = rise ÷ run = Δdistance ÷ Δtime<br><br>
      Note: A curved line means changing speed (acceleration or deceleration)
    </div>
  </div>

  <div class="notes-card">
    <h3>Quick Reference</h3>
    <div class="formula">Speed = Distance ÷ Time</div>
    <div class="formula">1 km = 1000 m &nbsp; 1 kg = 1000 g &nbsp; 1 h = 3600 s</div>
    <div class="formula">IV: what you change &nbsp; DV: what you measure</div>
    <div class="formula">Read meniscus at eye level from the bottom of the curve</div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════
  // LAB SAFETY (Q1–22)
  // ═══════════════════════════════════════════
  { q:"What should you do if a chemical splashes into your eyes?", opts:["Wipe with a cloth","Wash immediately with running water for at least 10 minutes","Apply eye drops","Wait for the teacher"], ans:1, explain:"Chemical eye splashes must be flushed with running water for at least 10 minutes to dilute and remove the chemical. Seek medical attention after." },
  { q:"Which flame on a Bunsen burner is used for heating?", opts:["Yellow/safety flame","Blue/roaring flame","Either flame works the same","Green flame"], ans:1, explain:"The blue (roaring) flame is hotter and used for heating. The yellow (safety/luminous) flame is used when the burner is on but not in use, as it is visible and cooler." },
  { q:"Why should you never point a heated test tube at another person?", opts:["It is rude","The contents may suddenly boil and eject","It is too heavy","The glass may shatter immediately"], ans:1, explain:"Sudden boiling (bumping) can cause the hot liquid to shoot out of the test tube. Always point it away from people." },
  { q:"What is the correct way to smell a chemical in the lab?", opts:["Inhale deeply over the container","Waft the vapour towards your nose with your hand","Ask someone else to smell it","Use a straw to sniff"], ans:1, explain:"You waft — gently fan vapours towards your nose. Never inhale directly over a chemical, as fumes may be harmful." },
  { q:"Which personal protective equipment (PPE) is most important when handling corrosive chemicals?", opts:["Gloves and safety goggles","Only a lab coat","Only safety goggles","A face mask only"], ans:0, explain:"Corrosive chemicals can damage skin and eyes. Both gloves AND safety goggles are required for protection." },
  { q:"What does the flammable hazard symbol indicate?", opts:["The substance is safe to heat","The substance can catch fire easily","The substance is poisonous if swallowed","The substance is radioactive"], ans:1, explain:"The flammable symbol warns that the substance can ignite easily. Keep away from heat sources and flames." },
  { q:"If a small fire breaks out on the lab bench, you should:", opts:["Fan it with a paper","Use a fire blanket to smother it","Pour water over it immediately","Run out of the room"], ans:1, explain:"A fire blanket smothers small bench fires by cutting off oxygen. Water may spread chemical fires. Always alert the teacher." },
  { q:"Long hair in the lab should be:", opts:["Left down — it doesn't matter","Tied back to keep it away from flames and equipment","Covered with a hat","Cut before entering the lab"], ans:1, explain:"Loose hair is a fire hazard near Bunsen burners and can also contaminate experiments." },
  { q:"After finishing an experiment, you should:", opts:["Leave immediately","Put chemicals back without labelling","Wash hands thoroughly before leaving","Wait for someone else to clean up"], ans:2, explain:"Washing hands removes any chemical residue. Always clean up your workspace and wash hands before leaving the lab." },
  { q:"Which of the following should NOT be done in the science lab?", opts:["Wearing safety goggles","Tying back long hair","Eating a snack during the experiment","Reading all instructions before starting"], ans:2, explain:"Eating and drinking in the lab is strictly forbidden. Food can become contaminated and chemicals may be ingested accidentally." },
  { q:"A student accidentally breaks a glass beaker. What should they do first?", opts:["Pick up the pieces with their bare hands","Inform the teacher immediately","Sweep it up with paper","Leave it and continue the experiment"], ans:1, explain:"Inform the teacher first. Broken glass is a hazard — the teacher will guide safe disposal using appropriate equipment." },
  { q:"What does the toxic hazard symbol mean?", opts:["The substance is an irritant","The substance can cause death or serious harm if swallowed, inhaled or absorbed","The substance is flammable","The substance is explosive"], ans:1, explain:"The toxic (skull-and-crossbones) symbol indicates the substance is dangerous even in small amounts — it can cause severe injury or death." },
  { q:"When heating a liquid in a test tube, the tube should be held at:", opts:["A vertical angle, opening pointing upward","A slight angle, opening pointing away from people","A horizontal angle","Any angle, it does not matter"], ans:1, explain:"Angling the test tube prevents sudden ejection of boiling liquid towards people. The opening must face away from everyone." },
  { q:"Where should you find the first-aid kit in the lab?", opts:["Only the teacher knows","It is located at a clearly marked, accessible spot in the lab","At the school office only","In the chemical storage room"], ans:1, explain:"First-aid kits must be clearly labelled and easily accessible. You should know their location before starting any experiment." },
  { q:"Which of the following is a safe practice when using electrical equipment in the lab?", opts:["Use equipment near water sources","Check for frayed wires before use","Leave equipment switched on after use","Overload extension sockets"], ans:1, explain:"Always inspect electrical equipment for damage before use. Frayed wires are an electrocution and fire hazard." },
  { q:"Why are lab coats worn during experiments?", opts:["To look professional","To protect clothing and skin from spills and splashes","They are optional fashion items","To keep warm"], ans:1, explain:"Lab coats act as a protective barrier, shielding your skin and clothes from chemical spills, splashes, and heat." },
  { q:"What should you do before starting any experiment?", opts:["Begin immediately to save time","Read all instructions carefully first","Ask a friend to do it","Guess the procedure"], ans:1, explain:"Reading all instructions before starting helps you understand the procedure, identify hazards, and prepare equipment correctly." },
  { q:"A chemical bottle is labelled with an 'X' on an orange background. This means:", opts:["The substance is highly flammable","The substance is corrosive","The substance is an irritant or harmful","The substance is explosive"], ans:2, explain:"An orange 'X' (the older EU symbol) indicates an irritant or harmful substance — not as severe as toxic, but still requires care." },
  { q:"Open-toed shoes in the lab are not allowed because:", opts:["They are against school uniform rules","They leave feet exposed to chemical spills and broken glass","Teachers find them distracting","They are slippery"], ans:1, explain:"Closed-toe shoes protect feet from dropped glassware and chemical spills. Open-toed shoes leave feet vulnerable." },
  { q:"Chemicals should be returned to their original bottles:", opts:["Only if there is enough left","Always — excess chemicals must be disposed of as instructed, not returned","Never — discard them all","After mixing with other chemicals"], ans:1, explain:"Excess chemicals should never be poured back (contamination risk). Dispose of them according to teacher instructions." },
  { q:"The yellow Bunsen burner flame is called the safety flame because:", opts:["It is cooler and more visible","It is hotter and safer for heating","It cannot burn anything","It produces no carbon soot"], ans:0, explain:"The yellow flame is luminous, meaning it's easy to see, so you know the burner is on. It's cooler than the blue flame but actually sooty — it's 'safe' in the sense that it's visible." },
  { q:"If a classmate's clothing catches fire, the correct action is:", opts:["Pour water immediately","Tell them to run to get help","Stop, drop and roll — use a fire blanket","Fan the flames to extinguish them"], ans:2, explain:"Stop, drop, and roll smothers flames on clothing. A fire blanket can also be used. Running fans the flames and makes them worse." },

  // ═══════════════════════════════════════════
  // LAB EQUIPMENT (Q23–40)
  // ═══════════════════════════════════════════
  { q:"Which instrument is used to measure the volume of a liquid accurately?", opts:["Beaker","Measuring cylinder","Conical flask","Boiling tube"], ans:1, explain:"A measuring cylinder has graduated markings for accurate volume measurement. Beakers and flasks only give approximate volumes." },
  { q:"When reading a measuring cylinder, your eye level should be:", opts:["Above the liquid surface","Below the liquid surface","At the same level as the bottom of the meniscus","At the same level as the top of the meniscus"], ans:2, explain:"Reading at the bottom of the meniscus (the curved surface of the liquid) at eye level prevents parallax error." },
  { q:"What is a meniscus?", opts:["The scale on a measuring cylinder","The curved surface of a liquid in a container","The bottom of a beaker","The measuring mark on a thermometer"], ans:1, explain:"The meniscus is the curve formed at the surface of a liquid due to surface tension. For water, it curves downward (concave) — read from the bottom." },
  { q:"Which instrument measures mass?", opts:["Thermometer","Measuring cylinder","Electronic balance","Spring balance"], ans:2, explain:"An electronic balance measures mass in grams or kilograms. A spring balance measures weight (force) in newtons." },
  { q:"A Bunsen burner produces an orange flame when the air hole is:", opts:["Fully open","Half open","Fully closed","Removed"], ans:2, explain:"When the air hole is closed, insufficient oxygen enters, producing an incomplete combustion — a yellow/orange, sooty, cooler flame." },
  { q:"Which equipment would you use to hold a test tube over a Bunsen burner?", opts:["Retort stand","Test tube holder (clamp)","Tripod","Wire gauze"], ans:1, explain:"A test tube holder (or clamp on a retort stand) lets you safely hold a test tube in a flame without burning your hand." },
  { q:"What is the purpose of a wire gauze on a tripod?", opts:["To stir solutions","To filter liquids","To spread heat evenly from the Bunsen burner to the beaker","To support the retort stand"], ans:2, explain:"Wire gauze distributes heat more evenly, preventing glass from cracking due to localised hotspots from a direct flame." },
  { q:"Which piece of equipment is used to transfer a small, precise volume of liquid?", opts:["Beaker","Conical flask","Pipette","Measuring cylinder"], ans:2, explain:"A pipette (or dropper) is used to transfer small, precise volumes of liquid accurately." },
  { q:"A Vernier caliper is more suitable than a ruler for measuring:", opts:["The length of a classroom","The thickness of a coin","The temperature of water","The mass of a stone"], ans:1, explain:"A Vernier caliper can measure to 0.1 mm precision, making it ideal for small or precise lengths like the thickness of a coin or diameter of a wire." },
  { q:"What is the function of a retort stand?", opts:["To heat chemicals","To measure volume","To support and clamp equipment at various heights","To stir solutions"], ans:2, explain:"A retort stand with clamps is used to hold and support lab equipment (like burettes, condensers, or flasks) securely at adjustable heights." },
  { q:"Which of the following is the most appropriate container for heating a large volume of liquid?", opts:["Test tube","Measuring cylinder","Beaker","Conical flask"], ans:2, explain:"A beaker is wide and suitable for heating larger volumes. Measuring cylinders must not be heated as they can crack." },
  { q:"A thermometer measures:", opts:["Mass","Volume","Temperature","Pressure"], ans:2, explain:"A thermometer measures temperature, typically in degrees Celsius (°C) for lab use." },
  { q:"Why should a measuring cylinder never be heated?", opts:["It is too expensive","The glass is thin and may crack; the graduations are not heat-resistant","It holds too little liquid","Heating would change the colour"], ans:1, explain:"Measuring cylinders are made of thin glass not designed for heat — they can crack or shatter, and the graduations may be distorted." },
  { q:"What does a conical flask look like compared to a beaker?", opts:["It is wider at the top","It has a narrow neck and wide base — shaped like a cone","It has no markings","It is made of metal"], ans:1, explain:"A conical (Erlenmeyer) flask has a wide base and narrow neck, which reduces evaporation and makes it easier to swirl liquids without spilling." },
  { q:"To read a thermometer accurately, the thermometer should:", opts:["Be removed from the liquid first","Remain in the liquid and be read at eye level","Be placed flat on the bench","Be shaken before reading"], ans:1, explain:"Remove the thermometer and the temperature will change immediately. Keep it in the liquid and read at eye level to avoid parallax error." },
  { q:"Which instrument would give a more precise measurement of length — a ruler or a Vernier caliper?", opts:["Ruler — it is longer","Vernier caliper — it reads to 0.1 mm","They are equally precise","Ruler — it is easier to read"], ans:1, explain:"A Vernier caliper reads to 0.1 mm (or 0.02 mm for some models), far more precise than a standard ruler which reads to 1 mm." },
  { q:"A glass rod in the lab is used to:", opts:["Measure volume","Stir solutions and direct liquid flow when pouring","Heat solutions","Support equipment"], ans:1, explain:"A glass rod is used to stir mixtures and to guide liquid when pouring from one container to another to prevent spillage." },
  { q:"Which flame is hotter — the blue flame or the yellow flame of a Bunsen burner?", opts:["Yellow flame","Blue flame","Both are the same temperature","It depends on the gas supply"], ans:1, explain:"The blue (roaring) flame reaches about 500–600°C higher than the yellow flame because it has sufficient oxygen for complete combustion." },

  // ═══════════════════════════════════════════
  // SI UNITS & PHYSICAL QUANTITIES (Q41–65)
  // ═══════════════════════════════════════════
  { q:"What is the SI unit of length?", opts:["Centimetre","Kilometre","Metre","Foot"], ans:2, explain:"The SI unit of length is the metre (m). Centimetre and kilometre are multiples/submultiples of the metre." },
  { q:"What is the SI unit of mass?", opts:["Gram","Kilogram","Tonne","Pound"], ans:1, explain:"The SI unit of mass is the kilogram (kg). The gram is 1/1000 of a kilogram." },
  { q:"What is the SI unit of time?", opts:["Minute","Hour","Second","Millisecond"], ans:2, explain:"The SI unit of time is the second (s). Minutes and hours are non-SI units but are widely accepted." },
  { q:"What is the SI unit of temperature?", opts:["Degrees Celsius (°C)","Degrees Fahrenheit (°F)","Kelvin (K)","Degrees Rankine"], ans:2, explain:"The SI unit of temperature is the kelvin (K). In everyday lab use, degrees Celsius (°C) is common, but kelvin is the official SI unit." },
  { q:"Convert 5 km to metres.", opts:["0.005 m","500 m","5000 m","50 000 m"], ans:2, explain:"1 km = 1000 m, so 5 km = 5 × 1000 = 5000 m." },
  { q:"Convert 250 cm to metres.", opts:["0.25 m","2.5 m","25 m","2500 m"], ans:1, explain:"100 cm = 1 m, so 250 cm = 250 ÷ 100 = 2.5 m." },
  { q:"Convert 3500 g to kilograms.", opts:["0.35 kg","3.5 kg","35 kg","350 kg"], ans:1, explain:"1 kg = 1000 g, so 3500 g = 3500 ÷ 1000 = 3.5 kg." },
  { q:"Convert 2.4 kg to grams.", opts:["0.0024 g","24 g","240 g","2400 g"], ans:3, explain:"1 kg = 1000 g, so 2.4 kg = 2.4 × 1000 = 2400 g." },
  { q:"Convert 90 minutes to seconds.", opts:["90 s","900 s","5400 s","9000 s"], ans:2, explain:"1 minute = 60 seconds, so 90 minutes = 90 × 60 = 5400 seconds." },
  { q:"The prefix 'milli' (m) means:", opts:["× 1000","× 100","× 0.01","× 0.001"], ans:3, explain:"Milli means one thousandth (0.001 or 1/1000). So 1 millimetre = 0.001 metre." },
  { q:"The prefix 'kilo' (k) means:", opts:["× 10","× 100","× 1000","× 10 000"], ans:2, explain:"Kilo means one thousand (× 1000). So 1 kilometre = 1000 metres." },
  { q:"Which of the following is a physical quantity?", opts:["Metre","Speed","Kilogram","Second"], ans:1, explain:"Speed is a physical quantity (what is being measured). Metre, kilogram, and second are units of measurement." },
  { q:"Convert 45 mm to centimetres.", opts:["0.45 cm","4.5 cm","450 cm","4500 cm"], ans:1, explain:"10 mm = 1 cm, so 45 mm = 45 ÷ 10 = 4.5 cm." },
  { q:"Which unit is used to measure volume in SI?", opts:["Litre","Millilitre","Cubic metre (m³)","cm³"], ans:2, explain:"The SI unit of volume is the cubic metre (m³). Litres and cm³ are common in lab use (1 litre = 1000 cm³ = 0.001 m³)." },
  { q:"1 litre is equal to:", opts:["100 cm³","1000 cm³","10 000 cm³","10 cm³"], ans:1, explain:"1 litre = 1000 cm³ (or 1000 mL). This is a key conversion for lab measurements." },
  { q:"What is the SI unit of speed?", opts:["km/h","m/min","m/s","cm/s"], ans:2, explain:"The SI unit of speed is metres per second (m/s), since metre is the SI unit of length and second is the SI unit of time." },
  { q:"Convert 1.5 hours to seconds.", opts:["150 s","900 s","5400 s","90 s"], ans:2, explain:"1.5 hours = 1.5 × 60 = 90 minutes = 90 × 60 = 5400 seconds." },
  { q:"Which of the following correctly lists SI base units?", opts:["cm, g, s","m, kg, s","km, kg, min","m, g, min"], ans:1, explain:"The SI base units for length, mass, and time are metre (m), kilogram (kg), and second (s)." },
  { q:"Convert 0.05 m to centimetres.", opts:["0.5 cm","5 cm","50 cm","500 cm"], ans:1, explain:"1 m = 100 cm, so 0.05 m = 0.05 × 100 = 5 cm." },
  { q:"A student measures a desk as 120 cm long. What is this in metres?", opts:["0.12 m","1.2 m","12 m","1200 m"], ans:1, explain:"120 cm ÷ 100 = 1.2 m." },
  { q:"Convert 2 hours 30 minutes to minutes.", opts:["130 min","150 min","230 min","132 min"], ans:1, explain:"2 hours = 2 × 60 = 120 minutes. 120 + 30 = 150 minutes." },
  { q:"Which measurement uses the unit 'kelvin'?", opts:["Length","Mass","Temperature","Time"], ans:2, explain:"Kelvin is the SI unit for temperature. 0 K = absolute zero = −273.15°C." },
  { q:"500 mL is equal to:", opts:["0.05 L","0.5 L","5 L","50 L"], ans:1, explain:"1000 mL = 1 L, so 500 mL = 500 ÷ 1000 = 0.5 L." },
  { q:"A bag of rice has a mass of 5 kg. What is its mass in grams?", opts:["500 g","5000 g","50 000 g","500 000 g"], ans:1, explain:"1 kg = 1000 g, so 5 kg = 5 × 1000 = 5000 g." },
  { q:"The quantity being measured when you use a stopwatch is:", opts:["Speed","Distance","Time","Frequency"], ans:2, explain:"A stopwatch measures time (in seconds, minutes, etc.)." },

  // ═══════════════════════════════════════════
  // SCIENTIFIC PROCESS SKILLS & VARIABLES (Q66–90)
  // ═══════════════════════════════════════════
  { q:"A student notices that plants near the window grow taller than those in the corner. This is an example of:", opts:["Inferring","Observing","Predicting","Classifying"], ans:1, explain:"Observing means using your senses or instruments to gather information. Noticing a difference in plant height is an observation." },
  { q:"'Plants near the window grow taller because they receive more sunlight.' This is an example of:", opts:["Observing","Classifying","Inferring","Predicting"], ans:2, explain:"Inferring means using prior knowledge to explain an observation. The student is explaining WHY using knowledge about photosynthesis." },
  { q:"A student investigates how the amount of water affects plant growth. The independent variable is:", opts:["Height of plant","Amount of water given","Type of plant used","Amount of sunlight"], ans:1, explain:"The independent variable (IV) is the one you deliberately change. The student changes the amount of water, so that is the IV." },
  { q:"In the same experiment, the dependent variable is:", opts:["Amount of water given","Type of soil","Height of plant","Temperature"], ans:2, explain:"The dependent variable (DV) is the one you measure to see the effect. Plant height is measured to see the effect of water." },
  { q:"Which of the following is a controlled variable in an experiment testing how light intensity affects plant growth?", opts:["Light intensity","Plant height","Amount of water given daily","Number of plants grown"], ans:2, explain:"Controlled variables are factors kept constant to ensure a fair test. Water amount must be kept the same for each plant." },
  { q:"A hypothesis is best described as:", opts:["A conclusion drawn after the experiment","A testable prediction or explanation for an observation","A list of equipment needed","A table of results"], ans:1, explain:"A hypothesis is a proposed, testable explanation. It should be written as an 'If…then…because' statement." },
  { q:"A student predicts: 'If I increase the temperature of water, sugar will dissolve faster.' This prediction is:", opts:["An observation","A hypothesis","A conclusion","A controlled variable"], ans:1, explain:"This is a hypothesis — it is a testable statement predicting a relationship between temperature (IV) and dissolving rate (DV)." },
  { q:"To ensure a fair test, a student should:", opts:["Change as many variables as possible","Change only the independent variable and keep all others constant","Change the dependent variable","Ignore controlled variables"], ans:1, explain:"A fair test requires changing only the IV. Changing multiple variables makes it impossible to determine which caused the effect." },
  { q:"Which of the following is NOT a scientific process skill?", opts:["Observing","Inferring","Guessing randomly","Classifying"], ans:2, explain:"Random guessing without basis is not a scientific skill. Science requires systematic observation, evidence, and logical reasoning." },
  { q:"Classifying organisms into plants and animals is an example of:", opts:["Inferring","Predicting","Classifying","Hypothesising"], ans:2, explain:"Classifying means grouping objects or organisms based on shared characteristics or properties." },
  { q:"A student measures the temperature of a reaction every minute. The results table has two columns: time (min) and temperature (°C). The independent variable is:", opts:["Temperature","Time","The reaction itself","The thermometer"], ans:1, explain:"Time is the variable the student controls (every minute) — it is the IV. Temperature changes in response to time — it is the DV." },
  { q:"After completing an experiment, a student writes: 'As light intensity increased, the rate of photosynthesis increased.' This is a:", opts:["Hypothesis","Observation","Conclusion","Prediction"], ans:2, explain:"A conclusion is drawn after the experiment, summarising what the results show in relation to the hypothesis." },
  { q:"What is the purpose of repeating an experiment?", opts:["To waste time","To make the results more reliable by checking for consistency","To get different results each time","To confuse the teacher"], ans:1, explain:"Repeating an experiment and averaging results increases reliability and helps identify anomalous (unusual) results." },
  { q:"A student investigating the effect of fertiliser on plant growth uses 5 plants with different amounts of fertiliser. What should remain the same for all 5 plants?", opts:["Amount of fertiliser","Height of plant","Pot size, soil type, water, light, and temperature","The species of plant used only"], ans:2, explain:"All controlled variables (pot size, soil, water, light, temperature) must stay the same. Only the fertiliser amount (IV) should differ." },
  { q:"'I predict that adding more salt will lower the melting point of ice.' Before testing, this statement is best called a:", opts:["Conclusion","Observation","Hypothesis","Result"], ans:2, explain:"It is a hypothesis — a testable prediction based on prior knowledge. It can be tested by experiment." },
  { q:"Which of the following is a quantitative observation?", opts:["The liquid is blue","The liquid smells sweet","The liquid has a volume of 45 cm³","The liquid is thick"], ans:2, explain:"Quantitative observations include numbers and units (45 cm³). Qualitative observations describe properties (blue, sweet, thick) without numbers." },
  { q:"A student measures the same mass three times and gets 10.1 g, 10.2 g, and 10.1 g. The most appropriate value to record is:", opts:["10.1 g","10.2 g","10.13 g","10.0 g"], ans:0, explain:"Average = (10.1 + 10.2 + 10.1) ÷ 3 = 10.133 g ≈ 10.1 g. Round to the precision of the instrument (1 decimal place)." },
  { q:"What is an anomalous result?", opts:["A result that perfectly matches predictions","A result that does not fit the pattern of other results","The average of all results","The most common result"], ans:1, explain:"An anomalous result is one that is significantly different from the trend. It may be due to experimental error and is typically excluded from averages." },
  { q:"Which of the following best describes a variable?", opts:["A fixed measurement in an experiment","A factor that can change or be changed in an experiment","A piece of lab equipment","A type of hypothesis"], ans:1, explain:"A variable is any factor in an experiment that can change. Experiments identify IV, DV, and controlled variables." },
  { q:"In a graph of an experiment, which axis is the dependent variable usually plotted on?", opts:["The x-axis (horizontal)","The y-axis (vertical)","Either axis — it doesn't matter","Both axes"], ans:1, explain:"By convention, the DV (what you measure) goes on the y-axis and the IV (what you change) goes on the x-axis." },
  { q:"A student's results show that as temperature increases, reaction time decreases. The student can conclude that temperature and reaction time are:", opts:["Directly proportional","Inversely related","Unrelated","Identical"], ans:1, explain:"As one increases, the other decreases — this is an inverse (negative) relationship." },
  { q:"Which skill is being used when a student groups minerals by colour and hardness?", opts:["Inferring","Predicting","Classifying","Hypothesising"], ans:2, explain:"Grouping objects based on shared properties is classifying." },
  { q:"A student notices bubbles forming when zinc is added to acid. Without any prior knowledge, this is:", opts:["An inference","An observation","A prediction","A conclusion"], ans:1, explain:"Seeing bubbles is a direct observation using the sense of sight. An inference would explain why the bubbles form." },
  { q:"'Metals conduct electricity because they have free electrons.' This statement is an example of:", opts:["Observing","Inferring","Classifying","Predicting"], ans:1, explain:"The statement uses existing knowledge (free electrons) to explain a phenomenon (electrical conduction). This is inferring." },
  { q:"A bar chart is most appropriate for displaying which type of data?", opts:["Continuous data like temperature over time","Categorical data like types of materials","Proportional data like percentages","Speed-time data"], ans:1, explain:"Bar charts are best for categorical (discrete) data — e.g., comparing the conductivity of copper, iron, plastic, wood. Line graphs suit continuous data." },

  // ═══════════════════════════════════════════
  // SPEED, DISTANCE AND TIME (Q91–125)
  // ═══════════════════════════════════════════
  { q:"A car travels 120 km in 2 hours. What is its average speed?", opts:["240 km/h","60 km/h","122 km/h","60 m/s"], ans:1, explain:"Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h." },
  { q:"A runner completes a 100 m race in 10 s. What is the runner's speed?", opts:["10 m/s","1000 m/s","0.1 m/s","110 m/s"], ans:0, explain:"Speed = Distance ÷ Time = 100 ÷ 10 = 10 m/s." },
  { q:"A cyclist travels at 15 m/s for 20 s. What distance does the cyclist cover?", opts:["35 m","0.75 m","300 m","750 m"], ans:2, explain:"Distance = Speed × Time = 15 × 20 = 300 m." },
  { q:"A car drives at 80 km/h for 3 hours. How far does it travel?", opts:["27 km","83 km","240 km","2400 km"], ans:2, explain:"Distance = Speed × Time = 80 × 3 = 240 km." },
  { q:"A train travels 450 km at 90 km/h. How long does the journey take?", opts:["3 h","4 h","5 h","6 h"], ans:2, explain:"Time = Distance ÷ Speed = 450 ÷ 90 = 5 h." },
  { q:"A snail moves 0.03 m in 6 seconds. What is its speed?", opts:["0.005 m/s","0.18 m/s","2 m/s","0.5 m/s"], ans:0, explain:"Speed = 0.03 ÷ 6 = 0.005 m/s." },
  { q:"A plane flies at 600 km/h. How far does it travel in 2.5 hours?", opts:["240 km","602.5 km","1500 km","1200 km"], ans:2, explain:"Distance = Speed × Time = 600 × 2.5 = 1500 km." },
  { q:"A student walks 1.8 km in 30 minutes. What is the average speed in km/h?", opts:["0.06 km/h","3.6 km/h","54 km/h","6 km/h"], ans:1, explain:"Convert time to hours: 30 min = 0.5 h. Speed = 1.8 ÷ 0.5 = 3.6 km/h." },
  { q:"Convert 72 km/h to m/s.", opts:["200 m/s","0.02 m/s","20 m/s","7.2 m/s"], ans:2, explain:"Divide by 3.6: 72 ÷ 3.6 = 20 m/s. (Or: 72 km/h = 72 000 m ÷ 3600 s = 20 m/s.)" },
  { q:"Convert 15 m/s to km/h.", opts:["4.2 km/h","41.7 km/h","54 km/h","150 km/h"], ans:2, explain:"Multiply by 3.6: 15 × 3.6 = 54 km/h." },
  { q:"A ball rolls 45 m in 9 s. What is its speed?", opts:["5 m/s","54 m/s","405 m/s","0.2 m/s"], ans:0, explain:"Speed = Distance ÷ Time = 45 ÷ 9 = 5 m/s." },
  { q:"A car at 90 km/h — how long to travel 270 km?", opts:["2 h","3 h","4 h","30 h"], ans:1, explain:"Time = Distance ÷ Speed = 270 ÷ 90 = 3 h." },
  { q:"A sprinter runs at 10 m/s. How far in 1 minute?", opts:["10 m","100 m","600 m","6000 m"], ans:2, explain:"Convert 1 minute to seconds = 60 s. Distance = 10 × 60 = 600 m." },
  { q:"Which of the following has the greatest speed?", opts:["60 km/h","20 m/s","1500 m/min","1 km/min"], ans:1, explain:"Convert all to m/s: 60 km/h = 16.7 m/s; 20 m/s; 1500 m/min = 25 m/s; 1 km/min = 1000/60 = 16.7 m/s. 1500 m/min = 25 m/s is greatest." },
  { q:"A car travels 200 m in 8 s. What is its speed in m/s?", opts:["1600 m/s","25 m/s","192 m/s","0.04 m/s"], ans:1, explain:"Speed = 200 ÷ 8 = 25 m/s." },
  { q:"A person jogs at 2.5 m/s for 4 minutes. How far do they travel?", opts:["10 m","600 m","2.5 m","150 m"], ans:1, explain:"Convert time: 4 min = 240 s. Distance = 2.5 × 240 = 600 m." },
  { q:"Two cities are 360 km apart. A bus travels at 60 km/h. How long is the journey?", opts:["5 h","6 h","7 h","300 h"], ans:1, explain:"Time = 360 ÷ 60 = 6 h." },
  { q:"A sound wave travels 340 m/s. How far does it travel in 3 seconds?", opts:["113 m","337 m","343 m","1020 m"], ans:3, explain:"Distance = 340 × 3 = 1020 m." },
  { q:"A car drives at 100 km/h. How far does it travel in 15 minutes?", opts:["15 km","25 km","1500 km","6.67 km"], ans:1, explain:"15 minutes = 0.25 h. Distance = 100 × 0.25 = 25 km." },
  { q:"A cyclist takes 2.5 hours to cover 60 km. What is the average speed?", opts:["150 km/h","24 km/h","57.5 km/h","62.5 km/h"], ans:1, explain:"Speed = 60 ÷ 2.5 = 24 km/h." },
  { q:"Convert 108 km/h to m/s.", opts:["10.8 m/s","3 m/s","30 m/s","300 m/s"], ans:2, explain:"108 ÷ 3.6 = 30 m/s." },
  { q:"A light beam travels at 3 × 10⁸ m/s. How far in 2 s?", opts:["1.5 × 10⁸ m","6 × 10⁸ m","3 × 10⁸ m","2 × 10⁸ m"], ans:1, explain:"Distance = (3 × 10⁸) × 2 = 6 × 10⁸ m." },
  { q:"A boat travels at 12 m/s. How long to cross a 900 m river?", opts:["75 s","888 s","108 s","10800 s"], ans:0, explain:"Time = Distance ÷ Speed = 900 ÷ 12 = 75 s." },
  { q:"A car decelerates uniformly from 20 m/s to rest in 5 s. What average speed does it travel at?", opts:["10 m/s","20 m/s","5 m/s","4 m/s"], ans:0, explain:"Average speed = (initial + final) ÷ 2 = (20 + 0) ÷ 2 = 10 m/s." },
  { q:"A lorry travels 480 km on a motorway at 80 km/h, then 20 km in town at 40 km/h. What is the total journey time?", opts:["5.5 h","6 h","6.5 h","7 h"], ans:2, explain:"Motorway: 480 ÷ 80 = 6 h. Town: 20 ÷ 40 = 0.5 h. Total = 6.5 h." },
  { q:"A student runs a 400 m track. She runs the first 200 m in 25 s and the next 200 m in 35 s. What is her average speed for the whole run?", opts:["6.67 m/s","8 m/s","5.71 m/s","7 m/s"], ans:0, explain:"Total distance = 400 m. Total time = 25 + 35 = 60 s. Average speed = 400 ÷ 60 = 6.67 m/s." },
  { q:"How long does it take a car travelling at 25 m/s to cover 2 km?", opts:["50 s","80 s","800 s","0.08 s"], ans:1, explain:"Convert 2 km to 2000 m. Time = 2000 ÷ 25 = 80 s." },
  { q:"A rocket travels at 7800 m/s. How many km does it travel in 1 minute?", opts:["78 km","130 km","468 km","7800 km"], ans:2, explain:"Distance = 7800 × 60 = 468 000 m = 468 km." },
  { q:"A car travelling at 20 m/s brakes to a stop. It travels 80 m while braking. How long does it take to stop?", opts:["4 s","8 s","1600 s","160 s"], ans:0, explain:"Using average speed = (20 + 0) ÷ 2 = 10 m/s. Time = 80 ÷ 10 = 8 s. (Or using equations of motion, deceleration gives same answer.)" },
  { q:"Two cars start at the same point. Car A travels at 60 km/h and Car B at 90 km/h in the same direction. After 2 hours, how far apart are they?", opts:["30 km","60 km","150 km","300 km"], ans:1, explain:"Car A: 60×2 = 120 km. Car B: 90×2 = 180 km. Difference = 180 − 120 = 60 km." },
  { q:"A student travels to school: 1 km by bus at 30 km/h, then 0.5 km on foot at 5 km/h. What is the total time (in hours)?", opts:["0.03 h","0.10 h","0.13 h","0.50 h"], ans:2, explain:"Bus: 1 ÷ 30 ≈ 0.033 h. Walking: 0.5 ÷ 5 = 0.1 h. Total = 0.133 h ≈ 0.13 h." },
  { q:"Convert 36 km/h to m/s.", opts:["36 m/s","3.6 m/s","10 m/s","0.01 m/s"], ans:2, explain:"36 ÷ 3.6 = 10 m/s." },
  { q:"A car at 30 m/s — convert to km/h.", opts:["8.3 km/h","30 km/h","108 km/h","300 km/h"], ans:2, explain:"30 × 3.6 = 108 km/h." },
  { q:"A satellite orbits Earth at 7.5 km/s. How far does it travel in 24 hours? (Give answer in km.)", opts:["180 km","7500 km","648 000 km","10 800 km"], ans:2, explain:"Distance = 7.5 km/s × (24 × 3600 s) = 7.5 × 86 400 = 648 000 km." },
  { q:"A car travels at an average speed of 50 km/h for the first half of a 200 km journey and 100 km/h for the second half. What is the total journey time?", opts:["2 h","2.5 h","3 h","4 h"], ans:2, explain:"First 100 km: 100÷50 = 2 h. Second 100 km: 100÷100 = 1 h. Total = 3 h." },

  // ═══════════════════════════════════════════
  // DISTANCE-TIME GRAPHS (Q126–150)
  // ═══════════════════════════════════════════
  { q:"On a distance-time graph, a horizontal straight line means:", opts:["The object is moving at constant speed","The object is accelerating","The object is stationary","The object is moving backwards"], ans:2, explain:"A horizontal line means no change in distance over time — the object is not moving (stationary)." },
  { q:"On a distance-time graph, a steeper straight line indicates:", opts:["Slower speed","Greater speed","The object is stationary","Deceleration"], ans:1, explain:"Steeper gradient = greater change in distance per unit time = greater speed." },
  { q:"How do you calculate speed from a distance-time graph?", opts:["Speed = area under the graph","Speed = gradient = rise ÷ run = Δdistance ÷ Δtime","Speed = total distance × total time","Speed = x-axis value ÷ y-axis value"], ans:1, explain:"Speed = gradient of the line = vertical change (Δdistance) ÷ horizontal change (Δtime)." },
  { q:"A line on a distance-time graph goes from (0 s, 0 m) to (4 s, 20 m). What is the speed?", opts:["5 m/s","20 m/s","80 m/s","0.2 m/s"], ans:0, explain:"Speed = Δdistance ÷ Δtime = (20 − 0) ÷ (4 − 0) = 20 ÷ 4 = 5 m/s." },
  { q:"A distance-time graph shows a line that slopes downward. What does this indicate?", opts:["The object is speeding up","The object is returning towards its starting point","The object is stationary","The object has stopped"], ans:1, explain:"A downward slope means distance from start is decreasing — the object is moving back towards its starting point." },
  { q:"On a distance-time graph, two lines have the same gradient. What can you say about the two objects?", opts:["They are at the same position","They travel the same distance","They move at the same speed","They started at the same time"], ans:2, explain:"Gradient = speed. Same gradient means the same speed, regardless of starting position or time." },
  { q:"A distance-time graph shows a straight line from 0 to 60 m in 12 s, then a horizontal line for 8 s. What is the speed during the first section?", opts:["5 m/s","60 m/s","0 m/s","72 m/s"], ans:0, explain:"Speed = 60 ÷ 12 = 5 m/s during the first section. During the horizontal section, speed = 0 m/s." },
  { q:"What does a curved line on a distance-time graph indicate?", opts:["Constant speed","No movement","Changing speed (acceleration or deceleration)","Negative speed"], ans:2, explain:"A straight line = constant speed. A curve means the gradient (speed) is changing, indicating acceleration or deceleration." },
  { q:"A distance-time graph shows a curve that gets steeper over time. The object is:", opts:["Decelerating","Travelling at constant speed","Accelerating","Stationary"], ans:2, explain:"The gradient (speed) is increasing as time goes on — the object is speeding up (accelerating)." },
  { q:"A car travels 0 to 100 m in 10 s at constant speed, then stops for 5 s, then returns to start in 10 s. What is the speed during the return journey?", opts:["100 m/s","10 m/s","5 m/s","0 m/s"], ans:1, explain:"Return: distance = 100 m (back to 0), time = 10 s. Speed = 100 ÷ 10 = 10 m/s." },
  { q:"On a distance-time graph, the y-axis shows:", opts:["Time","Speed","Distance from a fixed point","Acceleration"], ans:2, explain:"The y-axis of a distance-time graph shows distance (from a fixed point or starting position). The x-axis shows time." },
  { q:"A student plots a distance-time graph. At t = 0, the distance is already 10 m. This means:", opts:["The student made an error","The object started 10 m away from the reference point","The object is travelling at 10 m/s","The object is moving backwards"], ans:1, explain:"A non-zero y-intercept means the object started the timing when it was already 10 m from the reference (starting) point." },
  { q:"Two objects A and B are plotted on the same distance-time graph. Object A has a steeper line. What can you conclude?", opts:["A is heavier than B","A is travelling faster than B","B is travelling faster than A","A started before B"], ans:1, explain:"Steeper gradient = greater speed. A has a steeper line, so A is faster than B." },
  { q:"A distance-time graph shows a straight line from (0, 0) to (5, 30). What is the object's speed?", opts:["6 m/s","30 m/s","5 m/s","150 m/s"], ans:0, explain:"Gradient = rise ÷ run = 30 ÷ 5 = 6 m/s." },
  { q:"Which section of a distance-time graph has zero gradient?", opts:["A steep upward slope","A gentle upward slope","A horizontal line","A downward slope"], ans:2, explain:"A horizontal line has zero gradient (no change in distance), meaning the object is not moving." },
  { q:"A distance-time graph shows a total distance of 80 m covered in 16 s. The graph is a straight line through the origin. What is the object's speed?", opts:["96 m/s","80 m/s","5 m/s","0.2 m/s"], ans:2, explain:"Speed = gradient = 80 ÷ 16 = 5 m/s." },
  { q:"A cyclist travels from home: 500 m in 50 s at constant speed, rests for 20 s, then cycles back home in 40 s. What is the total distance travelled (not displacement)?", opts:["500 m","1000 m","0 m","540 m"], ans:1, explain:"Total distance = 500 m (out) + 500 m (back) = 1000 m. Note: displacement = 0 m since they returned to start." },
  { q:"From a distance-time graph, you can directly read:", opts:["Speed at any moment","Distance at any given time","Acceleration","Force applied"], ans:1, explain:"You can read off the distance at any time directly from the graph. Speed is calculated from the gradient." },
  { q:"A distance-time graph shows two sections: section 1 is steeper than section 2. This means:", opts:["The object is faster in section 2","The object is faster in section 1","Both sections have the same speed","The object is stationary in section 1"], ans:1, explain:"Steeper gradient in section 1 means greater speed in section 1." },
  { q:"An object moves from point A (20 m) to point B (80 m) in 6 seconds on a distance-time graph. What is its speed?", opts:["80 m/s","6 m/s","10 m/s","13.3 m/s"], ans:2, explain:"Δdistance = 80 − 20 = 60 m. Δtime = 6 s. Speed = 60 ÷ 6 = 10 m/s." },
  { q:"What does the area under a speed-time graph represent? (Not distance-time.)", opts:["Speed","Distance travelled","Time taken","Acceleration"], ans:1, explain:"Area under a speed-time graph = distance travelled. (Area under a distance-time graph has no direct physical meaning.)" },
  { q:"A distance-time graph has the line touching the x-axis. At that point, the object is:", opts:["At its fastest","At the starting point (distance = 0)","Moving backwards","Stationary"], ans:1, explain:"When the line touches the x-axis (distance = 0), the object is at the reference/starting point." },
  { q:"A person walks 3 km in 0.5 h, rests for 0.25 h, then walks back 3 km in 0.75 h. What does their distance-time graph look like?", opts:["A straight line through the origin","A line up, flat section, then line sloping back to zero","A curve throughout","Two separate straight lines"], ans:1, explain:"The graph shows: upward line (walking out), horizontal line (rest), then downward line (returning), finishing back at zero distance." },
  { q:"A student draws a distance-time graph for a car. The line bends and becomes less steep over time. The car is:", opts:["Accelerating","Decelerating","Travelling at constant speed","Reversing"], ans:1, explain:"A curve becoming less steep means the gradient (speed) is decreasing over time — the car is slowing down (decelerating)." },
  { q:"A distance-time graph shows an object reaching 50 m at t = 10 s, then staying at 50 m until t = 20 s, then the distance drops to 0 m at t = 30 s. What is the speed during the final section?", opts:["5 m/s","50 m/s","2.5 m/s","0 m/s"], ans:0, explain:"Final section: Δdistance = 50 − 0 = 50 m, Δtime = 30 − 20 = 10 s. Speed = 50 ÷ 10 = 5 m/s (returning to start)." },
]
