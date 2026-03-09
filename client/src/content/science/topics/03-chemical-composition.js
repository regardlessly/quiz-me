export const meta = {
  id: 3, sem: 1,
  title: 'Diversity of Matter — Chemical Composition',
  desc: 'Elements, compounds, mixtures, atoms, the Periodic Table and electron configuration'
}

export const notes = `
<h2>Diversity of Matter — Chemical Composition</h2>
<p class="topic-desc">Elements · Compounds · Mixtures · Atoms · Periodic Table · Electron configuration · Alloys</p>

<div class="notes-card">
  <h3>1. Elements, Compounds &amp; Mixtures</h3>
  <table>
    <tr><th>Category</th><th>Definition</th><th>Examples</th></tr>
    <tr><td><strong>Element</strong></td><td>Pure substance of one type of atom only; cannot be broken down by chemical means</td><td>Gold (Au), Oxygen (O₂), Iron (Fe)</td></tr>
    <tr><td><strong>Compound</strong></td><td>Two or more elements chemically combined in a fixed ratio</td><td>Water (H₂O), NaCl, CO₂</td></tr>
    <tr><td><strong>Mixture</strong></td><td>Two or more substances physically combined in variable proportions; no chemical bonding</td><td>Air, salt water, brass (alloy)</td></tr>
  </table>
  <ul>
    <li><strong>Diatomic elements</strong>: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ — exist naturally as pairs (mnemonic: HOFBrINCl).</li>
    <li><strong>Alloys</strong>: Brass (Cu + Zn), Bronze (Cu + Sn), Steel (Fe + C), Stainless steel (Fe + Cr + Ni). Alloys are <em>mixtures</em>, not compounds.</li>
    <li><strong>Homogeneous mixture</strong>: uniform throughout (e.g., salt water, air). <strong>Heterogeneous</strong>: non-uniform (e.g., sand and gravel, concrete).</li>
  </ul>
  <div class="example">
    <strong>Separating a compound vs mixture:</strong><br>
    Compound → requires <em>chemical</em> methods (electrolysis, thermal decomposition).<br>
    Mixture → separated by <em>physical</em> methods (filtration, distillation, chromatography, magnetic separation).
  </div>
</div>

<div class="notes-card">
  <h3>2. Compound vs Mixture — Key Differences</h3>
  <table>
    <tr><th>Feature</th><th>Compound</th><th>Mixture</th></tr>
    <tr><td>Composition</td><td>Fixed ratio of elements</td><td>Variable proportions</td></tr>
    <tr><td>Properties</td><td>Different from constituent elements</td><td>Retains properties of components</td></tr>
    <tr><td>Formation</td><td>By chemical reaction</td><td>By physical combination</td></tr>
    <tr><td>Separation</td><td>Chemical methods only</td><td>Physical methods</td></tr>
    <tr><td>Melting point</td><td>Sharp, fixed melting point</td><td>Melts over a range</td></tr>
    <tr><td>Example</td><td>H₂O (water), NaCl, CO₂</td><td>Salt water, air, brass</td></tr>
  </table>
  <div class="example">
    <strong>Iron + Sulfur mixture</strong>: iron is still magnetic; sulfur is still yellow. Separated by magnet.<br>
    <strong>Iron sulfide (FeS) compound</strong>: grey/black, non-magnetic, cannot be separated physically.
  </div>
</div>

<div class="notes-card">
  <h3>3. Atoms &amp; Subatomic Particles</h3>
  <p>An <strong>atom</strong> is the smallest particle of an element that retains its chemical properties.</p>
  <table>
    <tr><th>Particle</th><th>Charge</th><th>Relative Mass</th><th>Location</th></tr>
    <tr><td>Proton</td><td>+1</td><td>1</td><td>Nucleus</td></tr>
    <tr><td>Neutron</td><td>0</td><td>1</td><td>Nucleus</td></tr>
    <tr><td>Electron</td><td>−1</td><td>≈ 0 (negligible)</td><td>Shells (orbiting nucleus)</td></tr>
  </table>
  <ul>
    <li>The nucleus is very small but contains almost all the mass of an atom.</li>
    <li>A neutral atom has equal numbers of protons and electrons.</li>
    <li>An <strong>ion</strong> is an atom that has gained or lost electrons: cation (+) lost electrons; anion (−) gained electrons.</li>
  </ul>
  <div class="example">
    <strong>Example:</strong> Na atom (11 protons, 11 electrons) → Na⁺ ion (11 protons, 10 electrons — lost 1 electron).<br>
    Cl atom (17 protons, 17 electrons) → Cl⁻ ion (17 protons, 18 electrons — gained 1 electron).
  </div>
</div>

<div class="notes-card">
  <h3>4. Atomic Number, Mass Number &amp; Isotopes</h3>
  <div class="formula">
    Atomic number (Z) = number of protons (= electrons in neutral atom)<br>
    Mass number (A) = protons + neutrons<br>
    Number of neutrons = A − Z
  </div>
  <ul>
    <li>Atomic number <em>uniquely identifies</em> an element.</li>
    <li><strong>Isotopes</strong>: atoms of the same element with the same number of protons but <em>different</em> numbers of neutrons (different mass numbers).</li>
    <li>Isotopes have <em>identical chemical properties</em> (same electron arrangement) but different physical properties (different masses).</li>
  </ul>
  <div class="example">
    <strong>Carbon isotopes:</strong> Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n). Both are carbon atoms.<br>
    <strong>Chlorine:</strong> Cl-35 (17p, 18n) and Cl-37 (17p, 20n).
  </div>
  <table>
    <tr><th>Element</th><th>Atomic No. (Z)</th><th>Mass No. (A)</th><th>Protons</th><th>Neutrons</th><th>Electrons</th></tr>
    <tr><td>Hydrogen</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
    <tr><td>Carbon-12</td><td>6</td><td>12</td><td>6</td><td>6</td><td>6</td></tr>
    <tr><td>Oxygen</td><td>8</td><td>16</td><td>8</td><td>8</td><td>8</td></tr>
    <tr><td>Sodium</td><td>11</td><td>23</td><td>11</td><td>12</td><td>11</td></tr>
    <tr><td>Chlorine-35</td><td>17</td><td>35</td><td>17</td><td>18</td><td>17</td></tr>
  </table>
</div>

<div class="notes-card">
  <h3>5. The Periodic Table</h3>
  <ul>
    <li>Elements arranged in order of increasing <strong>atomic number</strong>.</li>
    <li><strong>Period</strong> (horizontal row): elements share the same number of electron shells.</li>
    <li><strong>Group</strong> (vertical column): elements share the same number of valence electrons → similar chemical properties.</li>
    <li>There are <strong>7 periods</strong> and <strong>18 groups</strong> in the modern Periodic Table.</li>
    <li>The <strong>zigzag line</strong> separates metals (left/centre) from non-metals (right). Elements near it are <strong>metalloids</strong> (e.g., Si, Ge).</li>
  </ul>
  <table>
    <tr><th>Group</th><th>Name</th><th>Valence e⁻</th><th>Examples</th></tr>
    <tr><td>1</td><td>Alkali metals</td><td>1</td><td>Li, Na, K</td></tr>
    <tr><td>2</td><td>Alkaline earth metals</td><td>2</td><td>Mg, Ca</td></tr>
    <tr><td>17</td><td>Halogens</td><td>7</td><td>F, Cl, Br, I</td></tr>
    <tr><td>18</td><td>Noble gases</td><td>8 (He: 2)</td><td>He, Ne, Ar</td></tr>
  </table>
  <div class="example">
    <strong>Metals:</strong> shiny, malleable, ductile, good conductors of heat &amp; electricity, high density &amp; melting point.<br>
    <strong>Non-metals:</strong> dull, brittle (when solid), poor conductors, low density &amp; melting point.<br>
    <strong>Metalloids:</strong> intermediate properties; semiconductors (e.g., silicon in computer chips).
  </div>
</div>

<div class="notes-card">
  <h3>6. Electron Configuration &amp; Valence Electrons</h3>
  <p>Electrons are arranged in <strong>shells</strong> (energy levels): Shell 1 → max 2 electrons; Shell 2 → max 8; Shell 3 → max 8 (at Sec 1 level).</p>
  <div class="formula">
    Electron configuration notation: e.g., Sodium (11e) = 2, 8, 1<br>
    Valence electrons = electrons in the outermost shell<br>
    Group number (main groups) = number of valence electrons
  </div>
  <table>
    <tr><th>Element</th><th>At. No.</th><th>Config.</th><th>Valence e⁻</th><th>Group</th><th>Period</th></tr>
    <tr><td>Hydrogen</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Carbon</td><td>6</td><td>2, 4</td><td>4</td><td>14</td><td>2</td></tr>
    <tr><td>Oxygen</td><td>8</td><td>2, 6</td><td>6</td><td>16</td><td>2</td></tr>
    <tr><td>Sodium</td><td>11</td><td>2, 8, 1</td><td>1</td><td>1</td><td>3</td></tr>
    <tr><td>Magnesium</td><td>12</td><td>2, 8, 2</td><td>2</td><td>2</td><td>3</td></tr>
    <tr><td>Chlorine</td><td>17</td><td>2, 8, 7</td><td>7</td><td>17</td><td>3</td></tr>
    <tr><td>Argon</td><td>18</td><td>2, 8, 8</td><td>8</td><td>18</td><td>3</td></tr>
  </table>
  <ul>
    <li><strong>Noble gases</strong> have full outer shells → no tendency to react → chemically inert.</li>
    <li>Elements in the same group react similarly because they have the same number of valence electrons.</li>
    <li>Reactivity increases down Group 1 (valence electron further from nucleus, more easily lost).</li>
  </ul>
</div>

<div class="notes-card">
  <h3>7. Chemical Formulae &amp; Common Element Symbols</h3>
  <p>A <strong>chemical formula</strong> uses symbols and subscripts to show the types and numbers of atoms in one unit of a substance.</p>
  <div class="formula">
    H₂O: 2 hydrogen + 1 oxygen &nbsp;|&nbsp; CO₂: 1 carbon + 2 oxygen<br>
    NaCl: 1 sodium + 1 chlorine &nbsp;|&nbsp; CaCO₃: 1 Ca + 1 C + 3 O = 5 atoms<br>
    H₂SO₄: 2 H + 1 S + 4 O = 7 atoms &nbsp;|&nbsp; Fe₂O₃: 2 Fe + 3 O = 5 atoms
  </div>
  <table>
    <tr><th>Symbol</th><th>Element</th><th>Latin origin</th></tr>
    <tr><td>Na</td><td>Sodium</td><td>Natrium</td></tr>
    <tr><td>K</td><td>Potassium</td><td>Kalium</td></tr>
    <tr><td>Fe</td><td>Iron</td><td>Ferrum</td></tr>
    <tr><td>Cu</td><td>Copper</td><td>Cuprum</td></tr>
    <tr><td>Au</td><td>Gold</td><td>Aurum</td></tr>
    <tr><td>Ag</td><td>Silver</td><td>Argentum</td></tr>
    <tr><td>Pb</td><td>Lead</td><td>Plumbum</td></tr>
    <tr><td>Sn</td><td>Tin</td><td>Stannum</td></tr>
  </table>
  <ul>
    <li>All chemical symbols start with a <strong>capital letter</strong>; second letter (if any) is <em>lowercase</em> (e.g., Ca, Fe, Cl).</li>
    <li><strong>Pure substance</strong>: sharp fixed melting/boiling point. <strong>Impure</strong>: lower m.p., melts over a range.</li>
    <li><strong>Allotropes</strong>: different physical forms of the same element (e.g., graphite and diamond are both pure carbon).</li>
  </ul>
</div>
`

export const questions = [
  {
    "q": "Which of the following is an element?",
    "opts": [
      "Water",
      "Salt",
      "Gold",
      "Air"
    ],
    "ans": 2,
    "explain": "Gold (Au) is an element — it consists of only one type of atom and cannot be broken down by chemical means."
  },
  {
    "q": "Which of the following is a compound?",
    "opts": [
      "Oxygen gas",
      "Copper",
      "Carbon dioxide",
      "Saltwater"
    ],
    "ans": 2,
    "explain": "Carbon dioxide (CO₂) is a compound — two different elements (carbon and oxygen) chemically combined in a fixed ratio."
  },
  {
    "q": "How many atoms are in one molecule of sulfuric acid, H₂SO₄?",
    "opts": [
      "3",
      "4",
      "7",
      "14"
    ],
    "ans": 2,
    "explain": "H₂SO₄ contains 2 H + 1 S + 4 O = 7 atoms per molecule."
  },
  {
    "q": "What is the chemical symbol for sodium?",
    "opts": [
      "So",
      "Sd",
      "Sn",
      "Na"
    ],
    "ans": 3,
    "explain": "The symbol for sodium is Na, from its Latin name Natrium."
  },
  {
    "q": "Which of the following is a homogeneous mixture?",
    "opts": [
      "Sand and water",
      "Air",
      "Oil and water",
      "Gravel and sand"
    ],
    "ans": 1,
    "explain": "Air is a homogeneous mixture — it has uniform composition throughout. The others are heterogeneous mixtures."
  },
  {
    "q": "How can a compound be separated into its constituent elements?",
    "opts": [
      "Filtration",
      "Distillation",
      "Electrolysis (chemical method)",
      "Magnetic separation"
    ],
    "ans": 2,
    "explain": "A compound can only be separated by chemical methods such as electrolysis or thermal decomposition. Physical methods cannot break chemical bonds."
  },
  {
    "q": "An element with the symbol Fe is:",
    "opts": [
      "Fluorine",
      "Iron",
      "Fermium",
      "Francium"
    ],
    "ans": 1,
    "explain": "Fe is the symbol for iron, from its Latin name Ferrum."
  },
  {
    "q": "Which of the following is NOT a diatomic element?",
    "opts": [
      "H₂",
      "O₂",
      "Ne",
      "N₂"
    ],
    "ans": 2,
    "explain": "Neon (Ne) is a noble gas that exists as a single atom (monatomic). H₂, O₂, and N₂ are diatomic molecules."
  },
  {
    "q": "In the Periodic Table, elements are arranged in order of:",
    "opts": [
      "Increasing mass number",
      "Increasing atomic number",
      "Alphabetical order",
      "Increasing density"
    ],
    "ans": 1,
    "explain": "Elements in the Periodic Table are arranged in order of increasing atomic number (number of protons)."
  },
  {
    "q": "Which of the following best describes a mixture?",
    "opts": [
      "Two elements chemically combined in a fixed ratio",
      "Substances combined in any proportion without chemical bonding",
      "A pure substance made of one type of atom",
      "A substance with a fixed melting point"
    ],
    "ans": 1,
    "explain": "A mixture contains two or more substances physically combined in variable proportions without chemical bonding."
  },
  {
    "q": "Which statement correctly distinguishes a compound from a mixture?",
    "opts": [
      "A compound has a fixed ratio of elements; a mixture has variable proportions",
      "A compound can be separated by filtration; a mixture cannot",
      "Both compounds and mixtures are formed by chemical reactions",
      "A mixture has a fixed melting point; a compound does not"
    ],
    "ans": 0,
    "explain": "Compounds have fixed element ratios and are separated by chemical methods; mixtures have variable proportions and are separated by physical methods."
  },
  {
    "q": "Which of the following is the correct definition of an element?",
    "opts": [
      "A pure substance consisting of only one type of atom that cannot be broken down by chemical means",
      "A substance made of two or more elements chemically combined",
      "A mixture of atoms of the same type",
      "Any pure substance with a fixed melting point"
    ],
    "ans": 0,
    "explain": "An element consists of only one type of atom and cannot be broken down by chemical means."
  },
  {
    "q": "Which describes the correct location and charge of the three subatomic particles?",
    "opts": [
      "Proton (+) in nucleus; Neutron (0) in nucleus; Electron (−) in shells",
      "Proton (−) in shells; Neutron (+) in nucleus; Electron (0) in nucleus",
      "Proton (0) in nucleus; Neutron (+) in shells; Electron (−) in nucleus",
      "Proton (+) in shells; Neutron (0) in shells; Electron (−) in nucleus"
    ],
    "ans": 0,
    "explain": "Protons (positive) and neutrons (neutral) are in the nucleus; electrons (negative) orbit the nucleus in shells."
  },
  {
    "q": "What is the difference between atomic number and mass number?",
    "opts": [
      "Atomic number = number of protons; mass number = protons + neutrons",
      "Atomic number = number of neutrons; mass number = protons + electrons",
      "Atomic number = protons + neutrons; mass number = number of protons only",
      "Atomic number = number of electrons; mass number = number of protons"
    ],
    "ans": 0,
    "explain": "Atomic number is the number of protons; mass number is the total of protons plus neutrons."
  },
  {
    "q": "Why do compounds have different properties from their constituent elements?",
    "opts": [
      "New chemical bonds form between atoms, creating a completely new substance",
      "The elements simply mix together without any change",
      "The temperature of mixing causes the change",
      "The heavier element always dominates the properties"
    ],
    "ans": 0,
    "explain": "When elements combine chemically, new bonds form between atoms, changing the electron arrangement and producing an entirely new substance with different properties."
  },
  {
    "q": "Which of the following is an example of a molecule that is an element (not a compound)?",
    "opts": [
      "O₂",
      "H₂O",
      "CO₂",
      "NaCl"
    ],
    "ans": 0,
    "explain": "O₂ is a molecule of an element (two oxygen atoms bonded). H₂O, CO₂, and NaCl are all molecules of compounds."
  },
  {
    "q": "Which best describes a pure substance?",
    "opts": [
      "Has uniform chemical composition with fixed, sharp melting and boiling points",
      "Can vary in composition depending on how it is prepared",
      "Is always a solid at room temperature",
      "Is any substance that has been purified by filtration"
    ],
    "ans": 0,
    "explain": "A pure substance has uniform composition throughout and has fixed, sharp melting and boiling points characteristic of the substance."
  },
  {
    "q": "Which set lists all seven diatomic elements correctly?",
    "opts": [
      "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂",
      "H₂, He₂, O₂, Cl₂, N₂, Br₂, S₂",
      "H₂, O₂, N₂, Na₂, Cl₂, Br₂, I₂",
      "O₂, N₂, H₂, C₂, S₂, F₂, Ne₂"
    ],
    "ans": 0,
    "explain": "The seven diatomic elements are H₂, N₂, O₂, F₂, Cl₂, Br₂, and I₂ — remember 'HOFBrINCl'."
  },
  {
    "q": "In the Periodic Table, what do elements in the same period share?",
    "opts": [
      "The same number of electron shells",
      "The same number of valence electrons",
      "The same chemical properties",
      "The same atomic mass"
    ],
    "ans": 0,
    "explain": "Elements in the same period have the same number of electron shells. Elements in the same group share the same number of valence electrons."
  },
  {
    "q": "Which correctly contrasts metals and non-metals?",
    "opts": [
      "Metals are shiny, malleable, and good conductors; non-metals are dull, brittle, and poor conductors",
      "Metals are brittle and non-metals are malleable",
      "Both metals and non-metals conduct electricity equally",
      "Metals are on the right of the Periodic Table; non-metals on the left"
    ],
    "ans": 0,
    "explain": "Metals are shiny, malleable, ductile, and good conductors. Non-metals are dull, brittle (when solid), and generally poor conductors."
  },
  {
    "q": "Which correctly classifies bronze, distilled water, chlorine gas (Cl₂), and table salt (NaCl)?",
    "opts": [
      "Bronze: mixture; distilled water: compound; Cl₂: element; NaCl: compound",
      "Bronze: compound; distilled water: mixture; Cl₂: element; NaCl: mixture",
      "Bronze: element; distilled water: element; Cl₂: compound; NaCl: mixture",
      "Bronze: mixture; distilled water: element; Cl₂: mixture; NaCl: element"
    ],
    "ans": 0,
    "explain": "Bronze (Cu+Sn) is an alloy/mixture. Distilled water (H₂O) is a compound. Cl₂ is an element. NaCl is a compound."
  },
  {
    "q": "When sodium reacts with chlorine to form sodium chloride, which best describes the product?",
    "opts": [
      "NaCl is a compound; ionic bonds form giving it completely different properties from sodium and chlorine",
      "NaCl is a mixture; sodium and chlorine are blended together",
      "NaCl is an element; sodium and chlorine combine to form one atomic type",
      "NaCl retains the properties of sodium and chlorine"
    ],
    "ans": 0,
    "explain": "Sodium chloride (NaCl) is an ionic compound. It is a stable white solid, very different from sodium (reactive metal) and chlorine (toxic green gas)."
  },
  {
    "q": "How would you use melting point measurements to check whether a substance is pure?",
    "opts": [
      "A pure substance melts sharply at a fixed temperature; an impure substance melts at a lower temperature over a range",
      "A pure substance melts over a wide range; an impure substance melts sharply",
      "A pure substance has a higher boiling point than an impure one",
      "Melting point cannot be used to check purity"
    ],
    "ans": 0,
    "explain": "Pure substances melt at a single, sharp temperature. Impurities lower the melting point and cause melting over a range of temperatures."
  },
  {
    "q": "Is salt water a compound? Which answer is correct?",
    "opts": [
      "No — salt water is a homogeneous mixture with variable proportions of water and NaCl",
      "Yes — water and NaCl are chemically bonded in a fixed ratio",
      "Yes — because it has a uniform appearance",
      "No — salt water is a heterogeneous mixture"
    ],
    "ans": 0,
    "explain": "Salt water is a homogeneous mixture (solution). Proportions can vary, components retain properties, and separation is possible by evaporation."
  },
  {
    "q": "Sodium (atomic number 11) and chlorine (atomic number 17) are both in Period 3. What are their respective groups?",
    "opts": [
      "Sodium: Group 1; chlorine: Group 17",
      "Sodium: Group 3; chlorine: Group 7",
      "Sodium: Group 11; chlorine: Group 17",
      "Sodium: Group 1; chlorine: Group 7"
    ],
    "ans": 0,
    "explain": "Sodium has electron arrangement 2,8,1 → 1 valence electron → Group 1. Chlorine has 2,8,7 → 7 valence electrons → Group 17."
  },
  {
    "q": "Which statement about elements is TRUE?",
    "opts": [
      "An element consists of only one type of atom",
      "An element can be broken down into simpler substances by heating",
      "An element always consists of two different types of atoms",
      "An element must be a solid at room temperature"
    ],
    "ans": 0,
    "explain": "TRUE — an element is defined as a substance consisting of only one type of atom, all with the same atomic number."
  },
  {
    "q": "True or False: All compounds are made up of exactly two elements. Which statement is correct?",
    "opts": [
      "FALSE — compounds can contain two or more elements (e.g., CaCO₃ has three)",
      "TRUE — all compounds consist of exactly two elements",
      "FALSE — some compounds contain only one element",
      "TRUE — by definition, a compound must have exactly two types of atoms"
    ],
    "ans": 0,
    "explain": "FALSE. Compounds contain two or more different elements. CaCO₃ (calcium carbonate) contains calcium, carbon, and oxygen — three elements."
  },
  {
    "q": "Is it true that components in a mixture retain their individual properties?",
    "opts": [
      "TRUE — in a mixture, substances are physically combined and each retains its own properties",
      "FALSE — mixing always changes the properties of all components",
      "TRUE — but only if the mixture is homogeneous",
      "FALSE — only heterogeneous mixtures retain component properties"
    ],
    "ans": 0,
    "explain": "TRUE. In a mixture, substances are physically combined without chemical bonding, so each component keeps its characteristic properties."
  },
  {
    "q": "Can electrolysis separate a compound into its constituent elements?",
    "opts": [
      "TRUE — electrolysis uses electricity to break chemical bonds, separating compounds into elements",
      "FALSE — electrolysis only purifies metals",
      "FALSE — electrolysis can only separate mixtures",
      "TRUE — but only for solid compounds, not dissolved ones"
    ],
    "ans": 0,
    "explain": "TRUE. Electrolysis breaks chemical bonds using electricity. For example, electrolysis of water (H₂O) produces H₂ and O₂ gases."
  },
  {
    "q": "What is the correct chemical symbol for potassium?",
    "opts": [
      "K (from Latin Kalium)",
      "Po (polonium)",
      "Pt (platinum)",
      "Pa (protactinium)"
    ],
    "ans": 0,
    "explain": "Potassium's symbol is K, from its Latin name Kalium. Po is the symbol for polonium."
  },
  {
    "q": "Where are non-metals mainly found in the Periodic Table?",
    "opts": [
      "To the right of the zigzag line",
      "To the left of the zigzag line",
      "Only in Group 1",
      "In the middle block (d-block)"
    ],
    "ans": 0,
    "explain": "TRUE — non-metals are found to the right of the zigzag (staircase) line in the Periodic Table. Metals are on the left."
  },
  {
    "q": "Is water (H₂O) an element? Which is correct?",
    "opts": [
      "FALSE — water is a compound containing hydrogen and oxygen chemically combined",
      "TRUE — water cannot be separated visually",
      "TRUE — water is found in nature as a single substance",
      "FALSE — water is a mixture of hydrogen and oxygen"
    ],
    "ans": 0,
    "explain": "FALSE. Water (H₂O) is a compound — it contains hydrogen and oxygen in a fixed 2:1 ratio, chemically bonded."
  },
  {
    "q": "Are all mixtures heterogeneous? Which is correct?",
    "opts": [
      "FALSE — mixtures can be homogeneous (e.g., salt water, air) or heterogeneous (e.g., sand and gravel)",
      "TRUE — all mixtures are heterogeneous by definition",
      "FALSE — all mixtures are homogeneous",
      "TRUE — only pure substances can be homogeneous"
    ],
    "ans": 0,
    "explain": "FALSE. Homogeneous mixtures (e.g., salt water, air) have uniform composition; heterogeneous mixtures (e.g., sand and water) do not."
  },
  {
    "q": "Is it true that mass number is always greater than or equal to atomic number?",
    "opts": [
      "TRUE — mass number = protons + neutrons ≥ protons = atomic number",
      "FALSE — some elements have more electrons than protons",
      "FALSE — atomic number is always larger than mass number",
      "TRUE — but only for heavy elements"
    ],
    "ans": 0,
    "explain": "TRUE. Mass number = protons + neutrons ≥ atomic number (protons). For hydrogen, they are equal (both = 1)."
  },
  {
    "q": "Where are metals mainly found in the Periodic Table?",
    "opts": [
      "On the left and centre",
      "On the upper right",
      "Only in Period 4",
      "Only in Group 1"
    ],
    "ans": 0,
    "explain": "TRUE — metals occupy the left and centre of the Periodic Table; non-metals are on the upper right."
  },
  {
    "q": "An element that exists as two atoms bonded together is called a ___ molecule.",
    "opts": [
      "Diatomic",
      "Polyatomic",
      "Monatomic",
      "Compound"
    ],
    "ans": 0,
    "explain": "Diatomic molecules consist of two atoms bonded together (e.g., H₂, O₂, N₂, Cl₂)."
  },
  {
    "q": "The number of protons in the nucleus is the ___ number.",
    "opts": [
      "Atomic",
      "Mass",
      "Neutron",
      "Electron"
    ],
    "ans": 0,
    "explain": "The atomic number is the number of protons in the nucleus. It uniquely identifies an element."
  },
  {
    "q": "The vertical columns in the Periodic Table are called ___.",
    "opts": [
      "Groups",
      "Periods",
      "Rows",
      "Blocks"
    ],
    "ans": 0,
    "explain": "Vertical columns are called groups. Horizontal rows are called periods."
  },
  {
    "q": "Elements in the same ___ of the Periodic Table have similar chemical properties.",
    "opts": [
      "Group",
      "Period",
      "Block",
      "Row"
    ],
    "ans": 0,
    "explain": "Elements in the same group have the same number of valence electrons, giving them similar chemical properties."
  },
  {
    "q": "NaCl is an example of a ___ (its components are sodium and chlorine).",
    "opts": [
      "Compound",
      "Mixture",
      "Element",
      "Alloy"
    ],
    "ans": 0,
    "explain": "NaCl (sodium chloride) is a compound — sodium and chlorine are chemically bonded in a fixed 1:1 ratio."
  },
  {
    "q": "A mixture of two or more metals (or a metal with non-metal carbon) is called an ___.",
    "opts": [
      "Alloy",
      "Compound",
      "Element",
      "Solution"
    ],
    "ans": 0,
    "explain": "An alloy is a mixture of two or more metals, or a metal with a non-metal (e.g., steel = iron + carbon). Alloys are mixtures, not compounds."
  },
  {
    "q": "The smallest particle of an element that retains its chemical properties is the ___.",
    "opts": [
      "Atom",
      "Molecule",
      "Ion",
      "Electron"
    ],
    "ans": 0,
    "explain": "An atom is the smallest particle of an element that retains its chemical properties."
  },
  {
    "q": "The chemical symbol for iron is ___, from its Latin name ___.",
    "opts": [
      "Fe; Ferrum",
      "Ir; Iron",
      "I; Ferrum",
      "Fe; Ferrus"
    ],
    "ans": 0,
    "explain": "Iron's symbol is Fe, from its Latin name Ferrum."
  },
  {
    "q": "A ___ mixture has uniform composition throughout.",
    "opts": [
      "Homogeneous",
      "Heterogeneous",
      "Compound",
      "Saturated"
    ],
    "ans": 0,
    "explain": "A homogeneous mixture has uniform composition throughout (e.g., salt water, air)."
  },
  {
    "q": "Elements with properties of both metals and non-metals are called ___.",
    "opts": [
      "Metalloids",
      "Alloys",
      "Noble gases",
      "Transition metals"
    ],
    "ans": 0,
    "explain": "Metalloids (semimetals) have intermediate properties between metals and non-metals. Examples: silicon (Si), germanium (Ge)."
  },
  {
    "q": "How many atoms are in one molecule of glucose, C₆H₁₂O₆?",
    "opts": [
      "24",
      "18",
      "6",
      "12"
    ],
    "ans": 0,
    "explain": "C₆H₁₂O₆: 6 C + 12 H + 6 O = 24 atoms per molecule."
  },
  {
    "q": "How many H and O atoms are in 3 molecules of water (H₂O)?",
    "opts": [
      "6 H atoms and 3 O atoms",
      "3 H atoms and 3 O atoms",
      "6 H atoms and 6 O atoms",
      "2 H atoms and 1 O atom"
    ],
    "ans": 0,
    "explain": "3 × H₂O: 3 × 2 = 6 H atoms; 3 × 1 = 3 O atoms."
  },
  {
    "q": "Nitrogen (N) has atomic number 7 and mass number 14. How many neutrons does it have?",
    "opts": [
      "7",
      "14",
      "21",
      "0"
    ],
    "ans": 0,
    "explain": "Neutrons = Mass number − Atomic number = 14 − 7 = 7 neutrons."
  },
  {
    "q": "Chlorine has atomic number 17 and mass number 35. How many protons, neutrons, and electrons are in a neutral chlorine atom?",
    "opts": [
      "17 protons, 18 neutrons, 17 electrons",
      "17 protons, 17 neutrons, 18 electrons",
      "18 protons, 17 neutrons, 17 electrons",
      "35 protons, 17 neutrons, 17 electrons"
    ],
    "ans": 0,
    "explain": "Protons = 17. Neutrons = 35 − 17 = 18. Electrons = 17 (neutral atom)."
  },
  {
    "q": "How many total atoms are in 2 molecules of calcium carbonate (CaCO₃)?",
    "opts": [
      "10",
      "5",
      "6",
      "15"
    ],
    "ans": 0,
    "explain": "CaCO₃ has 1 Ca + 1 C + 3 O = 5 atoms per molecule. 2 × 5 = 10 atoms."
  },
  {
    "q": "Why is steel harder than pure iron?",
    "opts": [
      "Carbon atoms disrupt the regular iron lattice, making the metal harder to deform",
      "Steel is a compound, giving it stronger chemical bonds",
      "Iron is removed and replaced with stronger metals",
      "Steel is less dense, making it harder"
    ],
    "ans": 0,
    "explain": "Steel is an alloy (mixture) of iron and carbon. Carbon disrupts the regular lattice, preventing layers from sliding, making it stronger and harder."
  },
  {
    "q": "What are valence electrons and why are they important?",
    "opts": [
      "Electrons in the outermost shell that determine chemical behaviour and bonding",
      "Electrons in the innermost shell that hold the nucleus together",
      "All electrons in an atom that carry electrical charge",
      "Electrons shared between two nuclei in a compound"
    ],
    "ans": 0,
    "explain": "Valence electrons are outermost-shell electrons. They determine reactivity and bonding, and explain why elements in the same group behave similarly."
  },
  {
    "q": "Which correctly distinguishes a solution from a suspension?",
    "opts": [
      "A solution is clear and homogeneous; a suspension is cloudy and particles settle on standing",
      "A solution is heterogeneous; a suspension is homogeneous",
      "Both solutions and suspensions can be separated by filtration",
      "A suspension has smaller particles than a solution"
    ],
    "ans": 0,
    "explain": "Solutions are clear, homogeneous, and cannot be filtered; suspensions are cloudy, heterogeneous, and particles settle and are caught by filter paper."
  },
  {
    "q": "Which best explains how you know water (H₂O) is a compound?",
    "opts": [
      "It contains two elements in a fixed 2:1 ratio, chemically bonded, with properties different from H₂ and O₂",
      "It has a fixed boiling point, proving it is not an element",
      "It dissolves many substances, showing it contains multiple components",
      "It flows easily, like all compounds"
    ],
    "ans": 0,
    "explain": "Water is a compound because it contains H and O in a fixed ratio, is formed by chemical reaction, and has properties unlike either element."
  },
  {
    "q": "Which is a valid method for distinguishing a pure substance from a mixture?",
    "opts": [
      "A pure substance has a sharp, fixed melting point; a mixture melts over a range",
      "A pure substance is always a solid; a mixture is always a liquid",
      "A pure substance floats; a mixture sinks",
      "A pure substance is colourless; a mixture is coloured"
    ],
    "ans": 0,
    "explain": "A pure substance melts at a single fixed temperature. A mixture melts over a range due to variable composition. Chromatography and boiling point tests also work."
  },
  {
    "q": "Stainless steel is shiny, conducts electricity, and does not rust easily. Is it an element, compound, or mixture?",
    "opts": [
      "Mixture — an alloy of iron, chromium, nickel, and carbon in variable proportions",
      "Compound — iron and chromium chemically bonded in a fixed ratio",
      "Element — it consists of iron atoms only",
      "Compound — it has a fixed melting point"
    ],
    "ans": 0,
    "explain": "Stainless steel is a mixture (alloy). Components are physically combined in variable proportions, not chemically bonded."
  },
  {
    "q": "Is air a compound or a mixture? Which student is correct — Student A (compound) or Student B (mixture)?",
    "opts": [
      "Student B — air is a mixture: variable composition, components retain properties, separated physically",
      "Student A — air is a compound: uniform appearance means fixed composition",
      "Both students are wrong — air is an element",
      "Student A — air cannot be separated into components"
    ],
    "ans": 0,
    "explain": "Air is a mixture. Evidence: variable gas ratios, components retain properties, separated by fractional distillation."
  },
  {
    "q": "Water (H₂O) and hydrogen peroxide (H₂O₂) both contain H and O. Are they the same compound?",
    "opts": [
      "No — they have different H:O ratios and very different properties",
      "Yes — same elements means same compound",
      "No — only one of them is a compound",
      "Yes — the ratio difference is negligible"
    ],
    "ans": 0,
    "explain": "No. H₂O has H:O = 2:1; H₂O₂ has H:O = 1:1. Different ratios → different compounds with different properties."
  },
  {
    "q": "18-carat gold is 75% gold and 25% other metals. What is it classified as?",
    "opts": [
      "Mixture (alloy) — metals physically combined in variable proportions",
      "Compound — gold chemically bonded to other metals in a fixed ratio",
      "Element — it still contains mostly gold atoms",
      "Pure substance — because it has a fixed percentage of gold"
    ],
    "ans": 0,
    "explain": "18-carat gold is an alloy (mixture). Metals are physically combined in variable proportions, not chemically bonded."
  },
  {
    "q": "Would potassium (atomic number 19) react more or less vigorously with water than sodium (atomic number 11)?",
    "opts": [
      "More vigorously — potassium's valence electron is further from nucleus and more easily lost",
      "Less vigorously — potassium has more electrons overall",
      "The same — both are Group 1 with identical reactivity",
      "Less vigorously — larger atoms are less reactive"
    ],
    "ans": 0,
    "explain": "Potassium is below sodium in Group 1. Its valence electron is further from the nucleus and held less tightly, making it more reactive."
  },
  {
    "q": "Can filtration separate a compound into its elements?",
    "opts": [
      "FALSE — compounds require chemical methods (e.g., electrolysis) for separation",
      "TRUE — filtration can separate any substance",
      "FALSE — only distillation can separate compounds",
      "TRUE — but only for ionic compounds"
    ],
    "ans": 0,
    "explain": "FALSE. Filtration is a physical method and cannot break chemical bonds. Compounds need chemical methods like electrolysis or thermal decomposition."
  },
  {
    "q": "Are non-metals good conductors of electricity?",
    "opts": [
      "FALSE — most non-metals are poor conductors; graphite is a notable exception",
      "TRUE — all non-metals conduct electricity",
      "FALSE — no non-metals conduct electricity at all",
      "TRUE — non-metals conduct electricity at high temperatures only"
    ],
    "ans": 0,
    "explain": "FALSE. Most non-metals are insulators. Graphite (a form of carbon) is an exception due to delocalised electrons in its layered structure."
  },
  {
    "q": "Is brass an alloy of copper and zinc?",
    "opts": [
      "TRUE — brass contains approximately 70% copper and 30% zinc",
      "FALSE — brass is copper and tin",
      "TRUE — brass is copper and zinc in exactly equal amounts",
      "FALSE — brass is an element, not an alloy"
    ],
    "ans": 0,
    "explain": "TRUE. Brass is a homogeneous alloy (mixture) of copper (~70%) and zinc (~30%)."
  },
  {
    "q": "Do all neutral atoms of the same element have the same number of electrons?",
    "opts": [
      "TRUE — neutral atoms of the same element have the same atomic number = same protons = same electrons",
      "FALSE — isotopes have different electron counts",
      "TRUE — but only for elements up to calcium",
      "FALSE — electrons vary depending on temperature"
    ],
    "ans": 0,
    "explain": "TRUE. All neutral atoms of the same element have the same atomic number, which equals both the number of protons and electrons."
  },
  {
    "q": "Are horizontal rows of the Periodic Table called groups?",
    "opts": [
      "FALSE — horizontal rows are called periods; vertical columns are groups",
      "TRUE — both rows and columns are called groups",
      "FALSE — horizontal rows are called blocks",
      "TRUE — groups run horizontally in the Periodic Table"
    ],
    "ans": 0,
    "explain": "FALSE. Horizontal rows are periods; vertical columns are groups."
  },
  {
    "q": "Does CO₂ mean two carbon atoms bonded to one oxygen atom?",
    "opts": [
      "FALSE — CO₂ means one carbon (C) bonded to two oxygen atoms",
      "TRUE — the 2 refers to the number of carbon atoms",
      "FALSE — CO₂ has no bonds; it is a mixture",
      "TRUE — subscript 2 always refers to the first element listed"
    ],
    "ans": 0,
    "explain": "FALSE. CO₂ = 1 carbon atom + 2 oxygen atoms. The subscript applies to the element symbol immediately before it."
  },
  {
    "q": "Does a metalloid have properties of both metals and non-metals?",
    "opts": [
      "TRUE — metalloids like silicon have intermediate properties and are semiconductors",
      "FALSE — metalloids have only metal properties",
      "FALSE — metalloids are a type of non-metal",
      "TRUE — but only at high temperatures"
    ],
    "ans": 0,
    "explain": "TRUE. Metalloids (e.g., silicon, germanium) have intermediate properties — semi-conductive, somewhat lustrous, and brittle."
  },
  {
    "q": "Can atoms of the same element have different numbers of neutrons?",
    "opts": [
      "TRUE — these are called isotopes (same protons, different neutrons)",
      "FALSE — atoms of the same element are identical in all ways",
      "TRUE — but only radioactive elements have isotopes",
      "FALSE — neutron count is fixed for each element"
    ],
    "ans": 0,
    "explain": "TRUE. Isotopes are atoms of the same element with different neutron counts. Example: Carbon-12 and Carbon-14 both have 6 protons."
  },
  {
    "q": "Is steel a compound of iron and carbon?",
    "opts": [
      "FALSE — steel is a mixture (alloy); carbon disrupts the iron lattice but is not chemically bonded",
      "TRUE — Fe and C form a fixed-ratio compound in steel",
      "FALSE — steel contains no carbon",
      "TRUE — steel is formed by a chemical reaction between iron and carbon"
    ],
    "ans": 0,
    "explain": "FALSE. Steel is a mixture (alloy). Carbon atoms are physically interspersed in the iron lattice, not chemically bonded."
  },
  {
    "q": "Does a mixture have variable composition while a compound has fixed composition?",
    "opts": [
      "TRUE — this is one of the key differences between mixtures and compounds",
      "FALSE — both have variable composition",
      "FALSE — compounds can also have variable composition",
      "TRUE — but only for solid mixtures"
    ],
    "ans": 0,
    "explain": "TRUE. A compound has a definite, fixed ratio of elements. A mixture can have components in any proportion."
  },
  {
    "q": "The horizontal rows in the Periodic Table are called ___.",
    "opts": [
      "Periods",
      "Groups",
      "Blocks",
      "Series"
    ],
    "ans": 0,
    "explain": "Horizontal rows are called periods. There are 7 periods in the modern Periodic Table."
  },
  {
    "q": "The elements in Group 18 of the Periodic Table are called ___ gases.",
    "opts": [
      "Noble",
      "Halogen",
      "Alkali",
      "Inert non-metal"
    ],
    "ans": 0,
    "explain": "Group 18 elements are called noble gases. They have full outer shells and are extremely unreactive."
  },
  {
    "q": "The symbol for gold is ___, from the Latin word ___.",
    "opts": [
      "Au; Aurum",
      "Ag; Aurum",
      "Gd; Gold",
      "Go; Goldium"
    ],
    "ans": 0,
    "explain": "Gold's symbol is Au, from its Latin name Aurum."
  },
  {
    "q": "Elements in Group 1 of the Periodic Table are called the ___ metals.",
    "opts": [
      "Alkali",
      "Alkaline earth",
      "Transition",
      "Noble"
    ],
    "ans": 0,
    "explain": "Group 1 elements are called alkali metals (e.g., Li, Na, K). They are highly reactive and have 1 valence electron."
  },
  {
    "q": "The mass number = protons + ___.",
    "opts": [
      "Neutrons",
      "Electrons",
      "Protons",
      "Ions"
    ],
    "ans": 0,
    "explain": "Mass number = number of protons + number of neutrons in the nucleus."
  },
  {
    "q": "Oxygen gas naturally exists as ___ molecules.",
    "opts": [
      "O₂ (diatomic)",
      "O (monatomic)",
      "O₃ (triatomic only)",
      "O₄ (tetraatomic)"
    ],
    "ans": 0,
    "explain": "Oxygen naturally exists as diatomic molecules (O₂). It is one of the seven diatomic elements."
  },
  {
    "q": "A mixture with uniform composition throughout is called a ___ mixture.",
    "opts": [
      "Homogeneous",
      "Heterogeneous",
      "Compound",
      "Colloidal"
    ],
    "ans": 0,
    "explain": "A homogeneous mixture has uniform composition throughout (e.g., salt water, air, brass)."
  },
  {
    "q": "The element with symbol Ag is ___, from its Latin name ___.",
    "opts": [
      "Silver; Argentum",
      "Silver; Argent",
      "Arsenic; Argentum",
      "Antimony; Argentum"
    ],
    "ans": 0,
    "explain": "Ag is the symbol for silver, from its Latin name Argentum."
  },
  {
    "q": "Elements that are shiny, malleable, ductile and conduct electricity are classified as ___.",
    "opts": [
      "Metals",
      "Non-metals",
      "Metalloids",
      "Noble gases"
    ],
    "ans": 0,
    "explain": "These are properties of metals. Non-metals are dull and brittle; metalloids have intermediate properties."
  },
  {
    "q": "Two or more atoms chemically bonded together form a ___.",
    "opts": [
      "Molecule",
      "Atom",
      "Ion",
      "Compound unit"
    ],
    "ans": 0,
    "explain": "A molecule is two or more atoms chemically bonded together (e.g., H₂, H₂O, CO₂)."
  },
  {
    "q": "Oxygen has atomic number 8 and mass number 16. How many protons, neutrons, and electrons are in a neutral oxygen atom?",
    "opts": [
      "8 protons, 8 neutrons, 8 electrons",
      "8 protons, 16 neutrons, 8 electrons",
      "16 protons, 8 neutrons, 8 electrons",
      "8 protons, 8 neutrons, 16 electrons"
    ],
    "ans": 0,
    "explain": "Protons = 8. Neutrons = 16 − 8 = 8. Electrons = 8 (neutral atom)."
  },
  {
    "q": "How many atoms of each element are in 2 formula units of calcium hydroxide, Ca(OH)₂?",
    "opts": [
      "2 Ca, 4 O, 4 H (10 atoms total)",
      "2 Ca, 2 O, 2 H (6 atoms total)",
      "1 Ca, 2 O, 2 H (5 atoms total)",
      "2 Ca, 2 O, 4 H (8 atoms total)"
    ],
    "ans": 0,
    "explain": "Ca(OH)₂ has 1 Ca + 2 O + 2 H per unit. For 2 units: 2 Ca + 4 O + 4 H = 10 atoms."
  },
  {
    "q": "Carbon has atomic number 6. Its most common isotope has 6 neutrons. What is the mass number?",
    "opts": [
      "12",
      "6",
      "18",
      "3"
    ],
    "ans": 0,
    "explain": "Mass number = protons + neutrons = 6 + 6 = 12. This is Carbon-12."
  },
  {
    "q": "How many total atoms are in 3 molecules of ammonia, NH₃?",
    "opts": [
      "12",
      "4",
      "9",
      "3"
    ],
    "ans": 0,
    "explain": "NH₃ has 1 N + 3 H = 4 atoms per molecule. 3 × 4 = 12 atoms."
  },
  {
    "q": "Magnesium has atomic number 12 and mass number 24. How many protons, electrons, and neutrons does it have?",
    "opts": [
      "12 protons, 12 electrons, 12 neutrons",
      "12 protons, 12 electrons, 24 neutrons",
      "24 protons, 12 electrons, 12 neutrons",
      "12 protons, 24 electrons, 12 neutrons"
    ],
    "ans": 0,
    "explain": "Protons = 12. Electrons = 12. Neutrons = 24 − 12 = 12."
  },
  {
    "q": "Which of the following correctly names an alloy, its components, and a use?",
    "opts": [
      "Brass: copper + zinc → musical instruments and coins",
      "Bronze: copper + iron → kitchen utensils",
      "Steel: iron + aluminium → surgical instruments",
      "Stainless steel: iron + gold → construction materials"
    ],
    "ans": 0,
    "explain": "Brass (Cu + Zn) is used in musical instruments and coins. Bronze (Cu + Sn) is for statues; steel (Fe + C) for construction."
  },
  {
    "q": "Why are noble gases (Group 18) extremely unreactive?",
    "opts": [
      "They have a full outer electron shell (He: 2e; others: 8e), giving no tendency to gain or lose electrons",
      "They are gases, and gases never react",
      "They have 0 protons and cannot form bonds",
      "They are too small to react with other atoms"
    ],
    "ans": 0,
    "explain": "Noble gases have full outer shells (He: 2e; others: 8e). This stable configuration means no tendency to gain, lose, or share electrons."
  },
  {
    "q": "How is chromatography used to check if a food dye is pure or a mixture?",
    "opts": [
      "Pure dye gives one spot on the chromatogram; a mixture gives multiple spots (one per component)",
      "Pure dye gives multiple spots; a mixture gives one spot",
      "Chromatography counts the number of atoms in a substance",
      "A single dark spot always means a mixture"
    ],
    "ans": 0,
    "explain": "On a chromatogram, a pure substance produces one spot; a mixture produces multiple spots, one for each different component."
  },
  {
    "q": "What are isotopes? Which example is correct?",
    "opts": [
      "Atoms of the same element with the same protons but different neutron numbers (e.g., Carbon-12 and Carbon-14)",
      "Atoms of different elements with the same mass number",
      "Molecules of the same compound with different structures",
      "Atoms with the same mass but different proton numbers"
    ],
    "ans": 0,
    "explain": "Isotopes are atoms of the same element with the same proton count but different neutron counts. C-12 and C-14 are carbon isotopes."
  },
  {
    "q": "Why is the Periodic Table described as 'periodic' in nature?",
    "opts": [
      "Element properties repeat at regular intervals as atomic number increases, due to repeating valence electron patterns",
      "Elements are arranged periodically by mass only",
      "'Periodic' means the table is updated regularly",
      "Properties repeat randomly throughout the table"
    ],
    "ans": 0,
    "explain": "Periodicity: properties repeat as atomic number increases. Elements in the same group have the same valence electrons, causing similar chemical behaviour."
  },
  {
    "q": "Is 'Pure Mineral Water' a pure substance scientifically?",
    "opts": [
      "No — it contains dissolved minerals, making it a homogeneous mixture (solution)",
      "Yes — the label says pure, so it must be scientifically pure",
      "Yes — water (H₂O) is always a pure compound",
      "No — it is a heterogeneous mixture with visible particles"
    ],
    "ans": 0,
    "explain": "'Pure' in marketing ≠ chemically pure. Mineral water contains dissolved calcium, magnesium ions, etc. — it is a solution (homogeneous mixture)."
  },
  {
    "q": "An unknown white solid melts at exactly 801°C and conducts electricity when dissolved in water. What is it likely to be?",
    "opts": [
      "An ionic compound — possibly sodium chloride (NaCl)",
      "A metal element",
      "A covalent compound",
      "A heterogeneous mixture"
    ],
    "ans": 0,
    "explain": "Sharp melting point → pure substance. Electrical conductivity when dissolved → ions in solution → ionic compound. 801°C matches NaCl."
  },
  {
    "q": "Why are carbon (Group 14, pencils) and silicon (Group 14, chips) used so differently?",
    "opts": [
      "Graphite's layered structure makes it soft for pencil marks; silicon's semiconductor properties make it ideal for transistors",
      "Carbon conducts electricity; silicon does not conduct at all",
      "Silicon is softer than graphite; carbon is a semiconductor",
      "Both are used identically in electronics"
    ],
    "ans": 0,
    "explain": "Graphite (carbon allotrope) has weak interlayer forces → soft. Silicon is a metalloid semiconductor → used in computer chips."
  },
  {
    "q": "Compare an iron/sulfur mixture with iron sulfide compound. What is a key difference?",
    "opts": [
      "The mixture retains iron's magnetism and sulfur's yellow colour; iron sulfide (FeS) is grey/black and non-magnetic",
      "Iron sulfide is a mixture; iron/sulfur is a compound",
      "Both have the same magnetic properties",
      "Iron and sulfur always form the same product whether mixed or reacted"
    ],
    "ans": 0,
    "explain": "In the mixture, iron remains magnetic and sulfur is yellow — separable by magnet. FeS compound is grey/black, non-magnetic, with fixed ratio."
  },
  {
    "q": "Why is air classified as a mixture, not a compound?",
    "opts": [
      "Components can vary in proportion, retain individual properties, and can be separated by fractional distillation",
      "Air has a fixed ratio of N₂ and O₂, so it must be a compound",
      "Air is classified as a compound because N₂ and O₂ are chemically bonded",
      "Air has a fixed boiling point, indicating it is a pure compound"
    ],
    "ans": 0,
    "explain": "Air is a mixture: composition varies (humidity, altitude), components retain properties, and gases can be separated physically by fractional distillation."
  },
  {
    "q": "Can atoms of different elements combine to form molecules of compounds?",
    "opts": [
      "TRUE — when atoms of two or more different elements bond chemically, they form a compound",
      "FALSE — only atoms of the same element can bond",
      "FALSE — elements can only form mixtures, not compounds",
      "TRUE — but only noble gases can form compounds"
    ],
    "ans": 0,
    "explain": "TRUE. Atoms of different elements form compounds when they undergo chemical bonding (e.g., H + O → H₂O)."
  },
  {
    "q": "Does sodium (Na) react with water because it has 11 valence electrons?",
    "opts": [
      "FALSE — sodium has 1 valence electron (electron arrangement 2,8,1), not 11",
      "TRUE — sodium has 11 electrons, all of which are valence electrons",
      "FALSE — sodium has 8 valence electrons",
      "TRUE — the number of valence electrons equals the atomic number for all elements"
    ],
    "ans": 0,
    "explain": "FALSE. Sodium (atomic number 11) has electron arrangement 2,8,1 — only 1 valence electron in its outer shell."
  },
  {
    "q": "Are alloys classified as compounds?",
    "opts": [
      "FALSE — alloys are classified as mixtures; components are physically combined in variable proportions",
      "TRUE — alloys form by chemical bonding of metals",
      "FALSE — alloys are elements because they consist mainly of one metal",
      "TRUE — alloys have fixed ratios, like compounds"
    ],
    "ans": 0,
    "explain": "FALSE. Alloys are mixtures. Their components are not chemically bonded and proportions can vary."
  },
  {
    "q": "Can every compound be represented by a chemical formula?",
    "opts": [
      "TRUE — a chemical formula shows the types and numbers of atoms (e.g., H₂O, NaCl)",
      "FALSE — only simple compounds have chemical formulas",
      "FALSE — chemical formulas only apply to elements",
      "TRUE — but only if the compound is ionic"
    ],
    "ans": 0,
    "explain": "TRUE. Every compound can be represented by a formula showing element symbols and atom counts."
  },
  {
    "q": "Can an element be broken down by any means?",
    "opts": [
      "FALSE — elements cannot be broken down by chemical means; nuclear reactions (fission) can split atoms but that is not chemistry",
      "TRUE — any element can be broken down by heating",
      "FALSE — elements can be broken by filtration",
      "TRUE — elements break down by electrolysis"
    ],
    "ans": 0,
    "explain": "At the Sec 1 level: elements cannot be broken down by chemical means. Nuclear reactions can split atoms, but that is beyond chemical methods."
  },
  {
    "q": "Elements in Group 17 of the Periodic Table are called ___.",
    "opts": [
      "Halogens",
      "Noble gases",
      "Alkali metals",
      "Alkaline earth metals"
    ],
    "ans": 0,
    "explain": "Group 17 elements are halogens (F, Cl, Br, I). They have 7 valence electrons and are highly reactive non-metals."
  },
  {
    "q": "An atom that has lost or gained electrons is called an ___.",
    "opts": [
      "Ion",
      "Isotope",
      "Alloy",
      "Molecule"
    ],
    "ans": 0,
    "explain": "An ion is an atom (or group of atoms) with a net electrical charge due to gaining or losing electrons."
  },
  {
    "q": "The symbol for silver is ___, from its Latin name ___.",
    "opts": [
      "Ag; Argentum",
      "Si; Silver",
      "Ag; Argentus",
      "Sn; Argentum"
    ],
    "ans": 0,
    "explain": "Silver's symbol is Ag, from Latin Argentum. (Sn is tin, from Stannum.)"
  },
  {
    "q": "Horizontal rows of the Periodic Table are called ___, and there are ___ of them.",
    "opts": [
      "Periods; 7",
      "Groups; 18",
      "Periods; 18",
      "Groups; 7"
    ],
    "ans": 0,
    "explain": "There are 7 periods (horizontal rows) and 18 groups (vertical columns) in the modern Periodic Table."
  },
  {
    "q": "The number of protons plus neutrons in an atom is the ___ number.",
    "opts": [
      "Mass",
      "Atomic",
      "Neutron",
      "Nuclear"
    ],
    "ans": 0,
    "explain": "Mass number = protons + neutrons. Atomic number = protons only."
  },
  {
    "q": "A compound has a ___ chemical composition, while a mixture has a ___ composition.",
    "opts": [
      "Fixed; variable",
      "Variable; fixed",
      "Fixed; fixed",
      "Variable; variable"
    ],
    "ans": 0,
    "explain": "Compounds have fixed ratios of elements; mixtures can have any proportion of components."
  },
  {
    "q": "Bronze is an alloy of ___ and ___.",
    "opts": [
      "Copper and tin",
      "Copper and zinc",
      "Iron and carbon",
      "Iron and chromium"
    ],
    "ans": 0,
    "explain": "Bronze is an alloy of copper and tin. (Brass is copper and zinc.)"
  },
  {
    "q": "Carbon exists in two main allotropes: ___ (used in pencils) and ___ (used in jewellery).",
    "opts": [
      "Graphite; diamond",
      "Diamond; graphite",
      "Coal; graphite",
      "Fullerene; diamond"
    ],
    "ans": 0,
    "explain": "Graphite and diamond are both allotropes of carbon. Graphite is soft and used in pencils; diamond is hard and used in jewellery."
  },
  {
    "q": "The region between metals and non-metals where metalloids are found is called the ___ line.",
    "opts": [
      "Zigzag (staircase) line",
      "Diagonal line",
      "Midpoint line",
      "Boundary curve"
    ],
    "ans": 0,
    "explain": "The zigzag (staircase) line separates metals (left) from non-metals (right) in the Periodic Table."
  },
  {
    "q": "Elements that do NOT react with other elements under ordinary conditions are in Group ___.",
    "opts": [
      "18 (Group 0)",
      "1",
      "17",
      "14"
    ],
    "ans": 0,
    "explain": "Group 18 (noble gases) are unreactive because they have full outer electron shells."
  },
  {
    "q": "Sodium has atomic number 11 and mass number 23. How many protons, neutrons, and electrons does it have?",
    "opts": [
      "11 protons, 12 neutrons, 11 electrons",
      "11 protons, 23 neutrons, 11 electrons",
      "23 protons, 11 neutrons, 11 electrons",
      "11 protons, 11 neutrons, 12 electrons"
    ],
    "ans": 0,
    "explain": "Protons = 11. Neutrons = 23 − 11 = 12. Electrons = 11 (neutral atom)."
  },
  {
    "q": "How many oxygen atoms are in 4 molecules of iron(III) oxide, Fe₂O₃?",
    "opts": [
      "12",
      "3",
      "6",
      "8"
    ],
    "ans": 0,
    "explain": "Fe₂O₃ has 3 oxygen atoms per molecule. 4 × 3 = 12 oxygen atoms."
  },
  {
    "q": "An atom has 15 protons and 16 neutrons. What is its mass number and which element is it?",
    "opts": [
      "Mass number 31; Phosphorus (P)",
      "Mass number 31; Sulfur (S)",
      "Mass number 15; Phosphorus (P)",
      "Mass number 16; Silicon (Si)"
    ],
    "ans": 0,
    "explain": "Mass number = 15 + 16 = 31. Atomic number 15 = Phosphorus (P)."
  },
  {
    "q": "How many total atoms are in one formula unit of aluminium sulfate, Al₂(SO₄)₃?",
    "opts": [
      "17",
      "5",
      "9",
      "12"
    ],
    "ans": 0,
    "explain": "Al₂(SO₄)₃: 2 Al + 3 S + 12 O = 17 atoms."
  },
  {
    "q": "An element has mass number 39 and 20 neutrons. What is its atomic number and which element is it?",
    "opts": [
      "19; Potassium (K)",
      "20; Calcium (Ca)",
      "39; Yttrium (Y)",
      "19; Argon (Ar)"
    ],
    "ans": 0,
    "explain": "Atomic number = 39 − 20 = 19. Atomic number 19 = Potassium (K)."
  },
  {
    "q": "Which test can distinguish a pure compound from a mixture?",
    "opts": [
      "Melting point: pure compound has a sharp fixed melting point; mixture melts over a range",
      "Density: pure compound is always less dense than a mixture",
      "Colour: pure compounds are always white; mixtures are coloured",
      "Solubility: pure compounds dissolve; mixtures do not"
    ],
    "ans": 0,
    "explain": "A pure compound has a sharp, fixed melting point. A mixture melts over a range. Chromatography and boiling point tests also work."
  },
  {
    "q": "What is the significance of the zigzag line in the Periodic Table?",
    "opts": [
      "It separates metals (left) from non-metals (right); elements near it are metalloids with intermediate properties",
      "It separates Period 1 from Period 2",
      "It marks the boundary between noble gases and halogens",
      "It separates radioactive from non-radioactive elements"
    ],
    "ans": 0,
    "explain": "The zigzag line separates metals (left/centre) from non-metals (right). Elements on either side are metalloids."
  },
  {
    "q": "Why is silicon used as a semiconductor in electronic devices?",
    "opts": [
      "Silicon has 4 valence electrons; its conductivity can be precisely controlled by adding impurities (doping)",
      "Silicon is a metal that conducts electricity at very low temperatures only",
      "Silicon has no valence electrons, making it an ideal insulator",
      "Silicon's high density makes it suitable for heavy-duty electronics"
    ],
    "ans": 0,
    "explain": "Silicon (metalloid, Group 14) has intermediate conductivity. Adding impurities (doping) adjusts conductivity precisely → ideal for transistors."
  },
  {
    "q": "What information does an element's position in the Periodic Table give?",
    "opts": [
      "Atomic number, number of valence electrons (group), electron shells (period), and metal/non-metal/metalloid nature",
      "Only its mass and colour",
      "Only its boiling point and solubility",
      "Its reactivity with water and acids only"
    ],
    "ans": 0,
    "explain": "Position gives: atomic number, valence electrons (group number), electron shells (period number), and metal/non-metal/metalloid classification."
  },
  {
    "q": "Which correctly defines a chemical formula and gives valid examples?",
    "opts": [
      "Uses symbols and subscripts to show atom types and numbers per unit (e.g., H₂O, CO₂, NaCl)",
      "Shows the mass of each element in grams per mole",
      "Describes the physical properties of a substance",
      "Lists elements alphabetically with their electrical charges"
    ],
    "ans": 0,
    "explain": "A chemical formula uses symbols and subscripts. H₂O: 2 H + 1 O. CO₂: 1 C + 2 O. NaCl: 1 Na + 1 Cl."
  },
  {
    "q": "Why is dissolving salt in water a mixture rather than a compound?",
    "opts": [
      "No chemical bonds form between H₂O and NaCl; proportions vary and salt is recovered by evaporation",
      "Salt and water react chemically to form a new substance",
      "The fixed boiling point of salt water proves it is a compound",
      "Salt water cannot be separated, showing it is a compound"
    ],
    "ans": 0,
    "explain": "Salt water is a mixture: no bonding between H₂O and NaCl, variable salt proportion, and evaporation recovers the salt."
  },
  {
    "q": "Classify: (a) Steam, (b) Seawater, (c) Nitrogen gas (N₂), (d) Sulfuric acid (H₂SO₄).",
    "opts": [
      "(a) compound; (b) mixture; (c) element; (d) compound",
      "(a) element; (b) compound; (c) mixture; (d) element",
      "(a) mixture; (b) element; (c) compound; (d) mixture",
      "(a) compound; (b) element; (c) compound; (d) mixture"
    ],
    "ans": 0,
    "explain": "Steam (H₂O) = compound. Seawater = mixture. N₂ = element. H₂SO₄ = compound."
  },
  {
    "q": "A drug sample melts at 149–152°C, but the pure drug melts at exactly 154°C. What does this indicate?",
    "opts": [
      "The drug sample is impure — a lower melting range indicates impurities are present",
      "The drug is pure — any range within 10°C is acceptable",
      "The drug is a different compound from the pure sample",
      "The higher melting point means the pure sample is more impure"
    ],
    "ans": 0,
    "explain": "Impurities lower the melting point and cause melting over a range (149–152°C vs sharp 154°C). The sample needs further purification."
  },
  {
    "q": "Why is bronze used for ship propellers rather than pure copper?",
    "opts": [
      "Bronze is harder and more corrosion-resistant than pure copper, especially in saltwater",
      "Bronze is cheaper than pure copper",
      "Bronze melts at a lower temperature, making it easier to cast into propellers",
      "Bronze is less dense, so propellers move faster through water"
    ],
    "ans": 0,
    "explain": "Bronze (Cu + Sn) is harder and more resistant to saltwater corrosion than pure copper. The disrupted lattice increases strength."
  },
  {
    "q": "Why did Mendeleev's Periodic Table allow prediction of undiscovered elements?",
    "opts": [
      "He noticed periodic trends and left gaps; predicted properties matched later discoveries (gallium, germanium)",
      "He guessed element properties randomly",
      "He arranged elements by density, predicting heavier elements",
      "He used radioactivity data to predict new elements"
    ],
    "ans": 0,
    "explain": "Mendeleev arranged by atomic mass and noticed periodicity. Gaps suggested undiscovered elements; predicted properties matched later discoveries."
  },
  {
    "q": "What are the three subatomic particles and where are they found in the atom?",
    "opts": [
      "Proton (+, nucleus); Neutron (0, nucleus); Electron (−, shells)",
      "Proton (−, shells); Neutron (+, nucleus); Electron (0, nucleus)",
      "Proton (+, shells); Neutron (0, nucleus); Electron (−, nucleus)",
      "Proton (+, nucleus); Neutron (0, shells); Electron (−, nucleus)"
    ],
    "ans": 0,
    "explain": "Protons (positive) and neutrons (neutral) are in the nucleus; electrons (negative) orbit in shells around the nucleus."
  },
  {
    "q": "Which of the following is a heterogeneous mixture?",
    "opts": [
      "Seawater",
      "Air",
      "Concrete (cement, sand, gravel)",
      "Brass"
    ],
    "ans": 2,
    "explain": "Concrete is heterogeneous — you can see separate particles of sand, gravel, and cement distributed non-uniformly. Seawater, air, and brass are homogeneous."
  },
  {
    "q": "Why do isotopes of the same element have nearly identical chemical properties?",
    "opts": [
      "Isotopes have the same electron configuration, which determines chemical behaviour",
      "Isotopes have the same mass, which determines reactivity",
      "Isotopes have different proton counts, making reactions similar",
      "Isotopes always form the same compounds regardless of neutrons"
    ],
    "ans": 0,
    "explain": "Isotopes have the same number of protons and electrons. Chemical properties depend on electron arrangement, so isotopes behave identically chemically."
  },
  {
    "q": "Can all compounds be decomposed by heating?",
    "opts": [
      "FALSE — some compounds are thermally stable (e.g., water requires electrolysis); only some decompose on heating",
      "TRUE — all compounds decompose when heated sufficiently",
      "FALSE — no compounds decompose by heating",
      "TRUE — heat always breaks chemical bonds in compounds"
    ],
    "ans": 0,
    "explain": "FALSE. Some compounds decompose on heating (CaCO₃ → CaO + CO₂); others like water are stable and need electrolysis."
  },
  {
    "q": "The symbol for copper is ___, from its Latin name ___.",
    "opts": [
      "Cu; Cuprum",
      "Co; Copper",
      "Cr; Cuprum",
      "Cu; Cuprinum"
    ],
    "ans": 0,
    "explain": "Copper's symbol is Cu, from Latin Cuprum."
  },
  {
    "q": "What is an ion? Give one example of a positive ion and one negative ion.",
    "opts": [
      "An atom that has gained or lost electrons; Na⁺ (cation, lost 1e) and Cl⁻ (anion, gained 1e)",
      "A molecule with two atoms bonded; H₂ and O₂",
      "An atom with extra neutrons; Carbon-12 and Carbon-14",
      "A compound with equal positive and negative charges; NaCl"
    ],
    "ans": 0,
    "explain": "An ion is an atom with a net charge. Na⁺ (sodium lost 1 electron) is a cation; Cl⁻ (chlorine gained 1 electron) is an anion."
  },
  {
    "q": "How many atoms are in 4 molecules of methane, CH₄?",
    "opts": [
      "20",
      "4",
      "5",
      "16"
    ],
    "ans": 0,
    "explain": "CH₄ has 1 C + 4 H = 5 atoms per molecule. 4 × 5 = 20 atoms."
  },
  {
    "q": "How does a pure substance differ from an impure substance in melting behaviour?",
    "opts": [
      "Pure: melts sharply at one fixed temperature; impure: lower melting point, melts over a range",
      "Pure: melts over a wide range; impure: melts sharply at one temperature",
      "Both melt the same way, just at different temperatures",
      "Impure substances have higher melting points than pure ones"
    ],
    "ans": 0,
    "explain": "Pure substances melt at a single fixed temperature. Impurities lower the melting point and cause melting over a range."
  },
  {
    "q": "An atom has 6 protons and 6 neutrons. What is its mass number?",
    "opts": [
      "6",
      "12",
      "36",
      "0"
    ],
    "ans": 1,
    "explain": "Mass number = protons + neutrons = 6 + 6 = 12. This is Carbon-12."
  },
  {
    "q": "Why can carbon exist as both graphite (used in pencils) and diamond (used in jewellery), yet both are pure carbon?",
    "opts": [
      "They are allotropes — different physical structures of the same element, giving different properties",
      "They are isotopes — different neutron counts change hardness",
      "They are compounds — carbon bonds with itself differently in each form",
      "They are mixtures — graphite contains carbon plus other elements"
    ],
    "ans": 0,
    "explain": "Graphite and diamond are allotropes — same element, different structures. Diamond: tetrahedral bonding (hard). Graphite: layered (soft, conducts electricity)."
  },
  {
    "q": "Does a molecule always contain atoms of different elements?",
    "opts": [
      "FALSE — molecules can contain atoms of the same element (e.g., O₂, H₂) or different elements (e.g., H₂O)",
      "TRUE — by definition, molecules must contain different elements",
      "FALSE — molecules never contain different elements",
      "TRUE — single-element molecules are called atoms, not molecules"
    ],
    "ans": 0,
    "explain": "FALSE. Molecules can be elements (O₂, N₂) or compounds (H₂O, CO₂). The key is that atoms are chemically bonded."
  },
  {
    "q": "Stainless steel is an alloy containing iron, ___, and nickel.",
    "opts": [
      "Chromium",
      "Carbon",
      "Copper",
      "Cobalt"
    ],
    "ans": 0,
    "explain": "Stainless steel: iron + chromium + nickel (+ small amounts of carbon). Chromium forms a protective oxide layer preventing rust."
  },
  {
    "q": "What does the period number of an element tell you about its atomic structure?",
    "opts": [
      "The number of electron shells (energy levels) the atom has",
      "The number of valence electrons",
      "The number of protons in the nucleus",
      "The mass number of the most common isotope"
    ],
    "ans": 0,
    "explain": "The period number = number of electron shells. Sodium in Period 3 has 3 shells: electron arrangement 2,8,1."
  },
  {
    "q": "Aluminium has atomic number 13 and mass number 27. State its protons, neutrons, and electrons.",
    "opts": [
      "13 protons, 14 neutrons, 13 electrons",
      "13 protons, 27 neutrons, 13 electrons",
      "27 protons, 13 neutrons, 13 electrons",
      "13 protons, 13 neutrons, 14 electrons"
    ],
    "ans": 0,
    "explain": "Protons = 13. Neutrons = 27 − 13 = 14. Electrons = 13."
  },
  {
    "q": "A student identifies an unknown element as shiny, brittle, and a partial conductor of electricity. What type is it most likely?",
    "opts": [
      "Metalloid (e.g., silicon or germanium)",
      "Metal (e.g., copper or iron)",
      "Non-metal (e.g., sulfur or phosphorus)",
      "Noble gas (e.g., argon or neon)"
    ],
    "ans": 0,
    "explain": "Metalloids are shiny but brittle (unlike malleable metals), and are semiconductors. Silicon (Si) and germanium (Ge) are examples."
  },
  {
    "q": "How many valence electrons does a Group 2 element have?",
    "opts": [
      "1",
      "2",
      "8",
      "0"
    ],
    "ans": 1,
    "explain": "Elements in Group 2 have 2 valence electrons in their outermost shell (e.g., Mg: 2,8,2; Ca: 2,8,8,2)."
  },
  {
    "q": "What is meant by 'electron configuration'? Give the configuration of oxygen (atomic number 8).",
    "opts": [
      "Distribution of electrons across shells; oxygen: 2,6 (2 in shell 1, 6 in shell 2)",
      "Number of electrons in the nucleus; oxygen: 8 total",
      "The charge of the outermost electron; oxygen: −2",
      "The number of protons and neutrons combined; oxygen: 8+8"
    ],
    "ans": 0,
    "explain": "Electron configuration describes electron distribution across shells. Oxygen (8 electrons): shell 1 = 2, shell 2 = 6 → written as 2,6. Valence electrons = 6."
  },
  {
    "q": "Does a chemical symbol always start with a capital letter?",
    "opts": [
      "TRUE — symbols start with a capital letter; any second letter is lowercase (e.g., Ca, Fe, Cl)",
      "FALSE — all letters in a symbol are lowercase",
      "TRUE — but multi-letter symbols use all capitals (e.g., NA for sodium)",
      "FALSE — symbols can be any combination of upper and lower case"
    ],
    "ans": 0,
    "explain": "TRUE. Chemical symbols always begin with a capital letter. If a second letter exists, it is always lowercase (e.g., Ca, Fe, Cl, Na)."
  },
  {
    "q": "Atoms of the same element that have different numbers of neutrons are called ___.",
    "opts": [
      "Isotopes",
      "Allotropes",
      "Ions",
      "Alloys"
    ],
    "ans": 0,
    "explain": "Isotopes have the same atomic number (same element) but different mass numbers (different neutron counts)."
  },
  {
    "q": "Why are helium (He) and neon (Ne) both placed in Group 18 despite having very different masses?",
    "opts": [
      "Both have full outer electron shells (He: 2e, Ne: 8e), making them chemically inert noble gases",
      "Both have the same mass number",
      "Both are gases at room temperature, so they are placed together",
      "Both were discovered at the same time by the same scientist"
    ],
    "ans": 0,
    "explain": "Group placement is based on valence electrons, not mass. He has 2 (full shell 1); Ne has 8 (full shell 2). Both are inert → Group 18."
  },
  {
    "q": "What is the difference between an atom and an ion?",
    "opts": [
      "An atom is neutral (protons = electrons); an ion has a charge from gaining or losing electrons",
      "An atom is larger than an ion always",
      "An ion is an atom with extra neutrons",
      "An atom is part of a compound; an ion always exists alone"
    ],
    "ans": 0,
    "explain": "Atom: neutral, protons = electrons. Ion: charged, has gained electrons (anion, negative) or lost electrons (cation, positive)."
  },
  {
    "q": "How many atoms of each element are in one formula unit of iron(III) sulfate, Fe₂(SO₄)₃?",
    "opts": [
      "2 Fe, 3 S, 12 O = 17 atoms total",
      "2 Fe, 4 S, 12 O = 18 atoms",
      "2 Fe, 3 S, 4 O = 9 atoms",
      "1 Fe, 3 S, 12 O = 16 atoms"
    ],
    "ans": 0,
    "explain": "Fe₂(SO₄)₃: 2 Fe + 3 SO₄ groups = 3 S + 12 O. Total: 2 + 3 + 12 = 17 atoms."
  },
  {
    "q": "Which of the following substances is a pure compound?",
    "opts": [
      "Seawater",
      "Oxygen gas (O₂)",
      "Carbon dioxide (CO₂)",
      "Bronze"
    ],
    "ans": 2,
    "explain": "Carbon dioxide (CO₂) is a pure compound — carbon and oxygen chemically combined in a fixed 1:2 ratio. Seawater and bronze are mixtures; O₂ is an element."
  },
  {
    "q": "Give examples of how knowledge of chemical composition is used in everyday applications.",
    "opts": [
      "Pharmaceutical purity testing; food labelling; recycling to recover pure metals; environmental monitoring of pollutants",
      "Using chemistry to make stronger alloys only",
      "Measuring density to classify materials",
      "Detecting temperature changes in chemical reactions"
    ],
    "ans": 0,
    "explain": "Chemical composition knowledge is used in drugs (purity testing), food (additives), recycling (separating alloys), and environmental monitoring."
  },
  {
    "q": "Can two different compounds contain the same elements?",
    "opts": [
      "TRUE — e.g., H₂O and H₂O₂ both contain H and O but have different ratios and different properties",
      "FALSE — same elements always form the same compound",
      "TRUE — but only if they have the same molecular formula",
      "FALSE — the Law of Constant Composition prevents this"
    ],
    "ans": 0,
    "explain": "TRUE. H₂O (water) and H₂O₂ (hydrogen peroxide) both contain H and O, but in different ratios, making them different compounds."
  }
]
