export const meta = {
  id: 8, sem: 2,
  title: 'Atoms and Molecules',
  desc: 'Atomic structure, subatomic particles, chemical formulae and the Periodic Table'
}

export const notes = `
<div class="notes-card">
  <h3>1. Atoms — The Building Blocks</h3>
  <p><strong>Atom:</strong> The smallest particle of an element that retains its chemical properties. All matter is made of atoms. Atoms are mostly empty space with a dense central nucleus.</p>
  <p><strong>Element:</strong> A pure substance made of only one type of atom. There are about 118 known elements; 94 occur naturally.</p>
  <h4>Subatomic Particles</h4>
  <table class="formula">
    <tr><th>Particle</th><th>Symbol</th><th>Charge</th><th>Relative Mass</th><th>Location</th></tr>
    <tr><td>Proton</td><td>p⁺</td><td>+1</td><td>1</td><td>Nucleus</td></tr>
    <tr><td>Neutron</td><td>n</td><td>0</td><td>1</td><td>Nucleus</td></tr>
    <tr><td>Electron</td><td>e⁻</td><td>−1</td><td>~1/1836 (negligible)</td><td>Electron shells around nucleus</td></tr>
  </table>
  <p><strong>Nucleus:</strong> Contains protons and neutrons; positively charged; very dense.</p>
  <p>In a neutral atom: <span class="formula">number of protons = number of electrons</span></p>
</div>

<div class="notes-card">
  <h3>2. Atomic Number, Mass Number, and Isotopes</h3>
  <ul>
    <li><strong>Atomic number (Z)</strong> = number of protons in nucleus = identity of the element (unique to each element)</li>
    <li><strong>Mass number (A)</strong> = number of protons + number of neutrons</li>
    <li><strong>Number of neutrons</strong> = A − Z</li>
    <li>Notation: <span class="formula">ᴬ&#8202;Z X</span> (mass number top-left, atomic number bottom-left)</li>
  </ul>
  <h4>Isotopes</h4>
  <p>Isotopes are atoms of the <strong>same element</strong> (same atomic number / same protons) but with <strong>different mass numbers</strong> (different number of neutrons).</p>
  <ul>
    <li>Same chemical properties (same electron arrangement); slightly different physical properties</li>
  </ul>
  <div class="example">
    <strong>Examples:</strong><br>
    Carbon-12 (¹²C): 6p, 6n, 6e — most common (98.9%)<br>
    Carbon-13 (¹³C): 6p, 7n, 6e<br>
    Carbon-14 (¹⁴C): 6p, 8n, 6e — radioactive; used in radiocarbon dating<br>
    Hydrogen: H-1 (protium), H-2 (deuterium), H-3 (tritium)<br>
    Chlorine-35 and Chlorine-37 → atomic mass of Cl ≈ 35.5 (weighted average)
  </div>
  <p><strong>Relative atomic mass (Ar):</strong> Weighted average of all isotopes considering natural abundance.</p>
</div>

<div class="notes-card">
  <h3>3. Electron Configuration</h3>
  <p>Electrons are arranged in shells (energy levels) around the nucleus.</p>
  <ul>
    <li>Shell 1: max <strong>2</strong> electrons</li>
    <li>Shell 2: max <strong>8</strong> electrons</li>
    <li>Shell 3: max <strong>8</strong> electrons (for the first 18 elements)</li>
  </ul>
  <div class="example">
    H(1): 1 &nbsp;|&nbsp; He(2): 2 &nbsp;|&nbsp; Li(3): 2,1 &nbsp;|&nbsp; Be(4): 2,2 &nbsp;|&nbsp; B(5): 2,3<br>
    C(6): 2,4 &nbsp;|&nbsp; N(7): 2,5 &nbsp;|&nbsp; O(8): 2,6 &nbsp;|&nbsp; F(9): 2,7 &nbsp;|&nbsp; Ne(10): 2,8<br>
    Na(11): 2,8,1 &nbsp;|&nbsp; Mg(12): 2,8,2 &nbsp;|&nbsp; Al(13): 2,8,3 &nbsp;|&nbsp; Si(14): 2,8,4<br>
    P(15): 2,8,5 &nbsp;|&nbsp; S(16): 2,8,6 &nbsp;|&nbsp; Cl(17): 2,8,7 &nbsp;|&nbsp; Ar(18): 2,8,8<br>
    K(19): 2,8,8,1 &nbsp;|&nbsp; Ca(20): 2,8,8,2
  </div>
  <p><strong>Valence electrons</strong> = electrons in the outermost shell → determines reactivity and the group in the Periodic Table.</p>
</div>

<div class="notes-card">
  <h3>4. The Periodic Table</h3>
  <p>Elements are arranged by <strong>increasing atomic number (Z)</strong>.</p>
  <ul>
    <li><strong>Periods (rows):</strong> 7 periods; period number = number of electron shells</li>
    <li><strong>Groups (columns):</strong> 18 groups; group number (for Groups 1–2 and 13–18) = number of valence electrons</li>
  </ul>
  <h4>Key Groups</h4>
  <table class="formula">
    <tr><th>Group</th><th>Name</th><th>Examples</th><th>Valence e⁻</th><th>Character</th></tr>
    <tr><td>1</td><td>Alkali metals</td><td>Li, Na, K, Rb</td><td>1</td><td>Very reactive; react vigorously with water</td></tr>
    <tr><td>2</td><td>Alkaline earth metals</td><td>Be, Mg, Ca</td><td>2</td><td>Reactive metals</td></tr>
    <tr><td>7 (17)</td><td>Halogens</td><td>F, Cl, Br, I</td><td>7</td><td>Very reactive non-metals; form −1 ions</td></tr>
    <tr><td>0 (18)</td><td>Noble gases</td><td>He, Ne, Ar</td><td>8 (He: 2)</td><td>Very unreactive; exist as single atoms</td></tr>
  </table>
  <p><strong>Metals</strong> (left + centre): conduct electricity/heat, malleable, ductile, have lustre.<br>
  <strong>Non-metals</strong> (right): poor conductors, brittle if solid, low density.<br>
  <strong>Metalloids</strong> (along staircase): Si, Ge, As, Sb, Te.</p>
  <div class="example">
    <strong>Symbols to memorise:</strong> Na (sodium), K (potassium), Fe (iron), Cu (copper), Pb (lead), Sn (tin), Au (gold), Ag (silver), Hg (mercury), W (tungsten)
  </div>
</div>

<div class="notes-card">
  <h3>5. Molecules and Chemical Formulae</h3>
  <p><strong>Molecule:</strong> Two or more atoms bonded together (same element or different elements).</p>
  <p><strong>Molecular formula:</strong> Shows the exact number of each type of atom in one molecule.</p>
  <div class="example">
    H₂O: 2H, 1O &nbsp;|&nbsp; CO₂: 1C, 2O &nbsp;|&nbsp; O₂: 2O (diatomic) &nbsp;|&nbsp; N₂: 2N (diatomic)<br>
    NH₃: 1N, 3H (ammonia) &nbsp;|&nbsp; CH₄: 1C, 4H (methane)<br>
    C₆H₁₂O₆: 6C, 12H, 6O (glucose) &nbsp;|&nbsp; H₂SO₄: 2H, 1S, 4O (sulfuric acid)<br>
    NaCl: 1Na, 1Cl (sodium chloride — ionic compound)
  </div>
  <p><strong>Diatomic elements</strong> (exist naturally as pairs): H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂</p>
  <p class="formula">Mnemonic: HOFBrINCl or "Have No Fear Of Ice Cold Beer"</p>
  <p><strong>Counting atoms:</strong> C₂H₅OH → 2C, 6H, 1O (total 9 atoms)</p>
</div>

<div class="notes-card">
  <h3>6. Elements, Compounds, and Mixtures</h3>
  <ul>
    <li><strong>Element:</strong> Made of one type of atom only; cannot be broken down chemically. e.g., O₂, Fe, Cu</li>
    <li><strong>Compound:</strong> Two or more DIFFERENT elements chemically bonded in a fixed ratio; properties differ from constituent elements; separated only by chemical means. e.g., H₂O, NaCl, CO₂</li>
    <li><strong>Mixture:</strong> Two or more substances physically combined; no fixed ratio; retains individual properties; separated by physical means. e.g., air, seawater, soil</li>
  </ul>
  <table class="formula">
    <tr><th>Feature</th><th>Compound</th><th>Mixture</th></tr>
    <tr><td>Composition</td><td>Fixed ratio of elements</td><td>Variable ratio</td></tr>
    <tr><td>Properties</td><td>New properties emerge</td><td>Retains individual properties</td></tr>
    <tr><td>Separation</td><td>Chemical methods only</td><td>Physical methods</td></tr>
    <tr><td>Energy change</td><td>Yes (during formation)</td><td>No significant change</td></tr>
    <tr><td>Homogeneous?</td><td>Yes</td><td>May be hetero or homogeneous</td></tr>
  </table>
  <div class="example">
    Water (H₂O) = compound &nbsp;|&nbsp; Salt water = mixture<br>
    Iron sulfide (FeS) = compound &nbsp;|&nbsp; Iron filings + sulfur = mixture
  </div>
</div>

<div class="notes-card">
  <h3>7. Ions, Ionic Compounds, and Common Formulae</h3>
  <p><strong>Ion:</strong> An atom or group of atoms that has gained or lost electrons, giving it a charge.</p>
  <ul>
    <li><strong>Cation:</strong> Positive ion (lost electrons) — metals form cations: Na⁺, Ca²⁺, Al³⁺, Fe²⁺/Fe³⁺</li>
    <li><strong>Anion:</strong> Negative ion (gained electrons) — non-metals form anions: Cl⁻, O²⁻, N³⁻</li>
  </ul>
  <h4>Common Polyatomic Ions</h4>
  <p class="formula">OH⁻ (hydroxide) &nbsp;|&nbsp; SO₄²⁻ (sulfate) &nbsp;|&nbsp; NO₃⁻ (nitrate) &nbsp;|&nbsp; CO₃²⁻ (carbonate) &nbsp;|&nbsp; NH₄⁺ (ammonium) &nbsp;|&nbsp; PO₄³⁻ (phosphate)</p>
  <h4>Writing Ionic Formulae (cross-multiply valencies so charges balance to zero)</h4>
  <div class="example">
    Na⁺ + Cl⁻ → NaCl &nbsp;|&nbsp; Mg²⁺ + O²⁻ → MgO<br>
    Al³⁺ + 3Cl⁻ → AlCl₃ &nbsp;|&nbsp; Ca²⁺ + 2OH⁻ → Ca(OH)₂<br>
    Ca²⁺ + 2NO₃⁻ → Ca(NO₃)₂ (use brackets when polyatomic ion appears more than once)
  </div>
</div>
`

export const questions = [
  { q: "Which subatomic particle has a charge of +1?", opts: ["Proton", "Neutron", "Electron", "Positron"], ans: 0, explain: "Protons carry a charge of +1 and are found in the nucleus." },
  { q: "Where are neutrons located in an atom?", opts: ["Electron shells", "Nucleus", "Orbitals outside the nucleus", "Spread throughout the atom"], ans: 1, explain: "Neutrons are found in the nucleus along with protons." },
  { q: "What is the relative mass of an electron?", opts: ["1", "0", "~1/1836 (negligible)", "+1"], ans: 2, explain: "Electrons have negligible mass (~1/1836 of a proton), so their mass is considered negligible." },
  { q: "In a neutral atom, which statement is correct?", opts: ["Protons > electrons", "Neutrons = protons", "Electrons > protons", "Protons = electrons"], ans: 3, explain: "A neutral atom has no overall charge, so the number of protons equals the number of electrons." },
  { q: "What charge does an electron carry?", opts: ["−1", "+1", "0", "+2"], ans: 0, explain: "Electrons carry a negative charge of −1." },
  { q: "Which subatomic particle has no charge?", opts: ["Proton", "Neutron", "Electron", "All of the above"], ans: 1, explain: "Neutrons are electrically neutral — they carry no charge." },
  { q: "Which part of the atom is positively charged and very dense?", opts: ["Electron cloud", "Outer shells", "Nucleus", "Orbital"], ans: 2, explain: "The nucleus contains protons (positive charge) and neutrons, making it positively charged and extremely dense." },
  { q: "What is the relative mass of a proton?", opts: ["~1/1836", "−1", "0", "1"], ans: 3, explain: "Protons have a relative mass of 1 (same as neutrons)." },
  { q: "Which particles are found in the nucleus?", opts: ["Protons and neutrons", "Protons and electrons", "Neutrons and electrons", "Only protons"], ans: 0, explain: "The nucleus contains protons and neutrons; electrons orbit in shells outside the nucleus." },
  { q: "An atom has 8 protons. How many electrons does it have if it is neutral?", opts: ["6", "8", "10", "16"], ans: 1, explain: "In a neutral atom, the number of electrons equals the number of protons, so 8 electrons." },
  { q: "What is the charge of a proton?", opts: ["0", "−1", "+1", "+2"], ans: 2, explain: "Protons carry a positive charge of +1." },
  { q: "Which subatomic particle determines the identity of an element?", opts: ["Neutron", "Electron", "Positron", "Proton"], ans: 3, explain: "The number of protons (atomic number) uniquely identifies each element." },
  { q: "Electrons are located in:", opts: ["Shells/orbitals around the nucleus", "The nucleus", "Between protons", "Randomly scattered"], ans: 0, explain: "Electrons occupy energy levels (shells) arranged around the nucleus." },
  { q: "Which particle has a relative mass of approximately 1/1836?", opts: ["Proton", "Electron", "Neutron", "Nucleus"], ans: 1, explain: "The electron has a negligible mass of about 1/1836 of a proton's mass." },
  { q: "An atom is mostly:", opts: ["Dense with protons", "Filled with neutrons", "Empty space", "Filled with electrons"], ans: 2, explain: "Atoms are mostly empty space; the nucleus is tiny but contains nearly all the mass." },
  { q: "A neutral atom of nitrogen has 7 protons. How many electrons does it have?", opts: ["5", "6", "8", "7"], ans: 3, explain: "In a neutral atom, electrons = protons = 7." },
  { q: "Which statement about the nucleus is correct?", opts: ["It contains protons and neutrons and is positively charged", "It contains only protons", "It is negatively charged", "It is where electrons are found"], ans: 0, explain: "The nucleus contains both protons and neutrons and carries an overall positive charge." },
  { q: "A proton has the same relative mass as a:", opts: ["Electron", "Neutron", "Photon", "Ion"], ans: 1, explain: "Both protons and neutrons have a relative mass of 1." },
  { q: "Which subatomic particle has a charge of −1?", opts: ["Proton", "Neutron", "Electron", "Nucleus"], ans: 2, explain: "Electrons carry a charge of −1." },
  { q: "If a neutral atom has 17 electrons, how many protons does it have?", opts: ["7", "10", "34", "17"], ans: 3, explain: "In a neutral atom, protons = electrons = 17. This is chlorine." },
  { q: "What does the atomic number (Z) represent?", opts: ["Number of protons in the nucleus", "Number of neutrons in the nucleus", "Number of electrons in the outer shell", "Total number of particles in the nucleus"], ans: 0, explain: "The atomic number Z equals the number of protons and uniquely identifies an element." },
  { q: "How is the mass number (A) calculated?", opts: ["Protons + electrons", "Protons + neutrons", "Neutrons − protons", "Electrons + neutrons"], ans: 1, explain: "Mass number A = number of protons + number of neutrons." },
  { q: "An atom has Z=6 and A=14. How many neutrons does it have?", opts: ["6", "8", "14 − 6 = 8", "20"], ans: 2, explain: "Neutrons = A − Z = 14 − 6 = 8. (This is Carbon-14.)" },
  { q: "Isotopes of the same element have the same:", opts: ["Mass number", "Number of neutrons", "Physical properties", "Number of protons"], ans: 3, explain: "Isotopes share the same number of protons (same atomic number) but differ in neutrons." },
  { q: "Carbon-12 and Carbon-14 are isotopes. What do they have in common?", opts: ["Same number of protons (6)", "Same number of neutrons", "Same mass number", "Same physical properties"], ans: 0, explain: "Both are carbon atoms with Z=6, so they both have 6 protons." },
  { q: "An element has Z=17 and A=35. How many neutrons does it have?", opts: ["17", "18", "35", "52"], ans: 1, explain: "Neutrons = A − Z = 35 − 17 = 18. This is Chlorine-35." },
  { q: "What is the atomic number of an atom with 11 protons and 12 neutrons?", opts: ["12", "23", "11", "1"], ans: 2, explain: "Atomic number Z = number of protons = 11. This is sodium (Na)." },
  { q: "Chlorine has two isotopes: Cl-35 and Cl-37. Why is the atomic mass approximately 35.5?", opts: ["Cl-35 does not exist", "They have equal abundance", "35.5 is the exact mass of one isotope", "It is a weighted average of both isotopes based on natural abundance"], ans: 3, explain: "The relative atomic mass is the weighted average of all naturally occurring isotopes, and Cl-35 is more abundant than Cl-37, giving ~35.5." },
  { q: "Carbon-14 is used in radiocarbon dating because it is:", opts: ["Radioactive", "The most abundant carbon isotope", "Non-radioactive", "Found only in living things"], ans: 0, explain: "Carbon-14 is radioactive and decays at a known rate, making it useful for dating organic materials." },
  { q: "How do isotopes of an element differ?", opts: ["Number of protons", "Number of neutrons", "Number of electrons", "Chemical properties"], ans: 1, explain: "Isotopes have the same number of protons but different numbers of neutrons, giving them different mass numbers." },
  { q: "An atom has mass number 23 and 11 protons. How many neutrons does it have?", opts: ["11", "34", "12", "23"], ans: 2, explain: "Neutrons = A − Z = 23 − 11 = 12. This is sodium-23." },
  { q: "Which of the following is true about isotopes?", opts: ["They have different chemical properties", "They have different numbers of protons", "They are different elements", "They have the same electron arrangement"], ans: 3, explain: "Isotopes have the same electron configuration (same number of protons/electrons) so they have the same chemical properties." },
  { q: "What is the mass number of Carbon-12?", opts: ["12", "6", "18", "14"], ans: 0, explain: "The mass number is the number after the element name — Carbon-12 has A = 12." },
  { q: "Which notation correctly shows atomic number (bottom) and mass number (top)?", opts: ["ᴬX only", "ᴬzX where Z is bottom-left and A is top-left", "A and Z on the right side", "Only mass number is shown"], ans: 1, explain: "Standard notation places mass number (A) at top-left and atomic number (Z) at bottom-left of the symbol." },
  { q: "Carbon-12 has 6 protons and 6 neutrons. Carbon-13 has:", opts: ["5 neutrons", "6 neutrons", "7 neutrons", "8 neutrons"], ans: 2, explain: "Carbon-13 has A=13, Z=6, so neutrons = 13 − 6 = 7." },
  { q: "Hydrogen has three isotopes. Which isotope is used in nuclear reactors (fusion)?", opts: ["Protium (H-1)", "Hydrogen-4", "Protium and deuterium only", "Deuterium (H-2) and Tritium (H-3)"], ans: 3, explain: "Deuterium and tritium are used in nuclear fusion research due to their extra neutrons." },
  { q: "If Z=8 and A=16, the number of neutrons is:", opts: ["8", "16", "24", "4"], ans: 0, explain: "Neutrons = A − Z = 16 − 8 = 8. This is oxygen-16." },
  { q: "The relative atomic mass of an element is best described as:", opts: ["The mass of one proton", "The weighted average mass of all naturally occurring isotopes", "The mass number of the most common isotope", "The sum of all isotope masses"], ans: 1, explain: "Relative atomic mass (Ar) accounts for the natural abundance of each isotope in a weighted average." },
  { q: "Which pair are isotopes of the same element?", opts: ["¹H and ²He", "¹²C and ¹⁴N", "³⁵Cl and ³⁷Cl", "¹⁶O and ³²S"], ans: 2, explain: "Cl-35 and Cl-37 both have Z=17 (same element) but different mass numbers — they are isotopes." },
  { q: "An atom of sulfur has Z=16 and A=32. Its number of neutrons is:", opts: ["16", "32", "48", "16"], ans: 3, explain: "Neutrons = A − Z = 32 − 16 = 16. (Note: both protons and neutrons = 16 for S-32.)" },
  { q: "What is the maximum number of electrons in the first shell?", opts: ["2", "4", "8", "18"], ans: 0, explain: "The first electron shell can hold a maximum of 2 electrons." },
  { q: "What is the maximum number of electrons in the second shell?", opts: ["2", "8", "18", "32"], ans: 1, explain: "The second shell can hold a maximum of 8 electrons." },
  { q: "What is the electron configuration of sodium (Z=11)?", opts: ["2, 8", "2, 9", "2, 8, 1", "2, 8, 3"], ans: 2, explain: "Sodium has 11 electrons: 2 in shell 1, 8 in shell 2, 1 in shell 3 → 2, 8, 1." },
  { q: "How many valence electrons does chlorine (Z=17) have?", opts: ["1", "2", "3", "7"], ans: 3, explain: "Chlorine's configuration is 2, 8, 7 — it has 7 valence electrons in its outermost shell." },
  { q: "What is the electron configuration of oxygen (Z=8)?", opts: ["2, 6", "2, 7", "2, 8", "2, 4"], ans: 0, explain: "Oxygen has 8 electrons: 2 in shell 1, 6 in shell 2 → 2, 6." },
  { q: "Which element has the electron configuration 2, 8, 8, 2?", opts: ["Potassium", "Calcium", "Argon", "Magnesium"], ans: 1, explain: "Calcium (Z=20) has configuration 2, 8, 8, 2." },
  { q: "What is the electron configuration of neon (Z=10)?", opts: ["2, 6", "2, 7", "2, 8", "2, 8, 2"], ans: 2, explain: "Neon has 10 electrons: 2 in shell 1, 8 in shell 2 → 2, 8 (full shells)." },
  { q: "How many valence electrons does magnesium (Z=12) have?", opts: ["8", "6", "4", "2"], ans: 3, explain: "Magnesium's configuration is 2, 8, 2 — it has 2 valence electrons." },
  { q: "What is the electron configuration of carbon (Z=6)?", opts: ["2, 4", "2, 6", "2, 2", "2, 8"], ans: 0, explain: "Carbon has 6 electrons: 2 in shell 1, 4 in shell 2 → 2, 4." },
  { q: "Which element has the electron configuration 2, 8, 7?", opts: ["Fluorine", "Chlorine", "Bromine", "Iodine"], ans: 1, explain: "Chlorine (Z=17) has the configuration 2, 8, 7." },
  { q: "What is the electron configuration of potassium (Z=19)?", opts: ["2, 8, 9", "2, 9, 8", "2, 8, 8, 1", "2, 8, 7, 2"], ans: 2, explain: "Potassium: 2 + 8 + 8 + 1 = 19. The third shell fills to 8 before starting the fourth." },
  { q: "The valence electrons of an element determine its:", opts: ["Atomic mass", "Number of neutrons", "Period in the Periodic Table", "Reactivity and group number"], ans: 3, explain: "Valence electrons (outermost shell electrons) determine chemical reactivity and which group the element belongs to." },
  { q: "How many electrons are in the outermost shell of argon (Z=18)?", opts: ["8", "2", "6", "7"], ans: 0, explain: "Argon's configuration is 2, 8, 8 — 8 electrons in the outermost (third) shell." },
  { q: "What is the electron configuration of aluminium (Z=13)?", opts: ["2, 8", "2, 8, 3", "2, 8, 5", "2, 8, 1"], ans: 1, explain: "Aluminium: 2 + 8 + 3 = 13, so configuration is 2, 8, 3." },
  { q: "Which element has only 1 electron in total?", opts: ["Helium", "Lithium", "Hydrogen", "Carbon"], ans: 2, explain: "Hydrogen (Z=1) has just 1 electron, configuration: 1." },
  { q: "Fluorine (Z=9) has the electron configuration:", opts: ["2, 5", "2, 6", "2, 8", "2, 7"], ans: 3, explain: "Fluorine: 2 + 7 = 9. Configuration is 2, 7." },
  { q: "What is the electron configuration of lithium (Z=3)?", opts: ["2, 1", "1, 2", "2, 3", "1, 1, 1"], ans: 0, explain: "Lithium: 2 in shell 1, 1 in shell 2 → 2, 1." },
  { q: "Silicon (Z=14) has how many valence electrons?", opts: ["2", "4", "6", "8"], ans: 1, explain: "Silicon's configuration is 2, 8, 4 — 4 valence electrons." },
  { q: "Which element has the electron configuration 2, 2?", opts: ["Helium", "Lithium", "Beryllium", "Carbon"], ans: 2, explain: "Beryllium (Z=4) has configuration 2, 2." },
  { q: "Phosphorus (Z=15) has the electron configuration:", opts: ["2, 8, 3", "2, 8, 6", "2, 7, 6", "2, 8, 5"], ans: 3, explain: "Phosphorus: 2 + 8 + 5 = 15. Configuration is 2, 8, 5." },
  { q: "Which element has the electron configuration 2, 8, 6?", opts: ["Sulfur", "Oxygen", "Selenium", "Chlorine"], ans: 0, explain: "Sulfur (Z=16) has configuration 2, 8, 6." },
  { q: "What is the maximum number of electrons the third shell can hold for the first 18 elements?", opts: ["18", "8", "6", "10"], ans: 1, explain: "For elements 1–18, the third shell holds a maximum of 8 electrons before the next period begins." },
  { q: "Helium (Z=2) has the electron configuration:", opts: ["1", "1, 1", "2", "2, 2"], ans: 2, explain: "Helium has 2 electrons, both in the first shell: configuration 2." },
  { q: "An element has electron configuration 2, 8, 3. What is its atomic number?", opts: ["3", "8", "10", "13"], ans: 3, explain: "2 + 8 + 3 = 13. This is aluminium (Al)." },
  { q: "The number of occupied electron shells equals the element's:", opts: ["Period number", "Group number", "Atomic mass", "Number of valence electrons"], ans: 0, explain: "The period number tells you how many electron shells are occupied." },
  { q: "Elements in the same group of the Periodic Table have the same:", opts: ["Atomic mass", "Number of valence electrons", "Number of electron shells", "Mass number"], ans: 1, explain: "Elements in the same group have the same number of valence electrons, giving them similar chemical properties." },
  { q: "Which group contains the noble gases?", opts: ["Group 1", "Group 7", "Group 0 (Group 18)", "Group 2"], ans: 2, explain: "Noble gases are in Group 0 (also called Group 18): He, Ne, Ar, Kr, Xe, Rn." },
  { q: "What does the period number tell you about an element?", opts: ["Number of valence electrons", "Number of protons", "Group it belongs to", "Number of occupied electron shells"], ans: 3, explain: "The period number equals the number of electron shells in atoms of that element." },
  { q: "What is the chemical symbol for potassium?", opts: ["K", "P", "Po", "Pt"], ans: 0, explain: "Potassium's symbol K comes from its Latin name Kalium." },
  { q: "Which group are the alkali metals in?", opts: ["Group 0", "Group 1", "Group 2", "Group 7"], ans: 1, explain: "Alkali metals (Li, Na, K, Rb, Cs, Fr) are in Group 1 with 1 valence electron." },
  { q: "What is the chemical symbol for iron?", opts: ["Ir", "In", "Fe", "Fr"], ans: 2, explain: "Iron's symbol Fe comes from its Latin name Ferrum." },
  { q: "Which group are the halogens in?", opts: ["Group 1", "Group 2", "Group 0", "Group 7"], ans: 3, explain: "Halogens (F, Cl, Br, I, At) are in Group 7 with 7 valence electrons." },
  { q: "Why are noble gases unreactive?", opts: ["They have a full outer electron shell (stable octet)", "They have no protons", "They are metals", "They have 1 valence electron"], ans: 0, explain: "Noble gases have a complete outermost shell (8 electrons, or 2 for helium), making them very stable and unreactive." },
  { q: "What is the symbol for sodium?", opts: ["So", "Na", "Sa", "Sm"], ans: 1, explain: "Sodium's symbol Na comes from its Latin name Natrium." },
  { q: "Metals are generally:", opts: ["Poor conductors of heat", "Brittle when solid", "Good conductors of electricity and heat", "Found on the right side of the Periodic Table"], ans: 2, explain: "Metals conduct electricity and heat well; they are also malleable and ductile." },
  { q: "Which element has the symbol Au?", opts: ["Aluminium", "Argon", "Silver", "Gold"], ans: 3, explain: "Au comes from the Latin 'Aurum' — gold." },
  { q: "Halogens react with metals to form:", opts: ["Salts (ionic compounds)", "Acids only", "Oxides", "Noble gas compounds"], ans: 0, explain: "Halogens (Group 7) react vigorously with metals to form ionic salts, e.g., NaCl." },
  { q: "What is the symbol for mercury?", opts: ["Me", "Hg", "Mr", "My"], ans: 1, explain: "Mercury's symbol Hg comes from Hydrargyrum (Latin for liquid silver)." },
  { q: "Alkali metals react with water to produce:", opts: ["Salt and oxygen", "Oxide and hydrogen", "Metal hydroxide and hydrogen gas", "Metal oxide and water"], ans: 2, explain: "Alkali metals react vigorously with water: 2Na + 2H₂O → 2NaOH + H₂↑" },
  { q: "Which of the following is a metalloid (semiconductor)?", opts: ["Iron", "Chlorine", "Calcium", "Silicon"], ans: 3, explain: "Silicon (Si) is a metalloid found along the staircase line in the Periodic Table; it is used as a semiconductor." },
  { q: "What is the symbol for lead?", opts: ["Pb", "Le", "Ld", "Pl"], ans: 0, explain: "Lead's symbol Pb comes from the Latin 'Plumbum'." },
  { q: "Which statement about Group 1 elements is correct?", opts: ["They are non-metals", "They have 1 valence electron and are very reactive", "They are noble gases", "They form −1 ions"], ans: 1, explain: "Group 1 alkali metals have 1 valence electron and readily lose it, making them very reactive." },
  { q: "The Periodic Table is arranged in order of increasing:", opts: ["Atomic mass", "Number of neutrons", "Atomic number (Z)", "Mass number"], ans: 2, explain: "The modern Periodic Table arranges elements by increasing atomic number (Z)." },
  { q: "What is the symbol for copper?", opts: ["Co", "Cp", "Cr", "Cu"], ans: 3, explain: "Copper's symbol Cu comes from the Latin 'Cuprum'." },
  { q: "Non-metals are generally found on which side of the Periodic Table?", opts: ["Right side", "Left side", "Centre", "Bottom rows"], ans: 0, explain: "Non-metals are on the right side of the Periodic Table, with metals on the left and centre." },
  { q: "How many atoms are in one molecule of water (H₂O)?", opts: ["2", "3", "4", "1"], ans: 1, explain: "H₂O has 2 hydrogen atoms + 1 oxygen atom = 3 atoms total." },
  { q: "Which of the following is a diatomic element?", opts: ["CO₂", "H₂O", "O₂", "CH₄"], ans: 2, explain: "O₂ is a diatomic element — oxygen naturally exists as pairs of atoms bonded together." },
  { q: "How many oxygen atoms are in one molecule of H₂SO₄?", opts: ["1", "2", "3", "4"], ans: 3, explain: "Sulfuric acid H₂SO₄ has 4 oxygen atoms." },
  { q: "What does a molecular formula show?", opts: ["The exact number of each type of atom in one molecule", "The arrangement of atoms in space", "The type of bond between atoms", "The relative atomic masses"], ans: 0, explain: "A molecular formula shows the exact number of each element's atoms in one molecule." },
  { q: "Which mnemonic helps remember the diatomic elements?", opts: ["SPONCH", "HOFBrINCl", "HOMES", "BODMAS"], ans: 1, explain: "HOFBrINCl (or 'Have No Fear Of Ice Cold Beer') lists the 7 diatomic elements: H₂, O₂, F₂, Br₂, I₂, N₂, Cl₂." },
  { q: "How many hydrogen atoms are in one molecule of ammonia (NH₃)?", opts: ["1", "2", "3", "4"], ans: 2, explain: "NH₃ has 1 nitrogen and 3 hydrogen atoms." },
  { q: "Glucose has the formula C₆H₁₂O₆. How many hydrogen atoms are in one molecule?", opts: ["6", "1", "6+12", "12"], ans: 3, explain: "C₆H₁₂O₆ contains 12 hydrogen atoms per molecule." },
  { q: "Which of the following is NOT a diatomic element?", opts: ["CO₂", "H₂", "N₂", "F₂"], ans: 0, explain: "CO₂ is a compound (carbon dioxide), not a diatomic element. H₂, N₂, and F₂ are all diatomic elements." },
  { q: "How many atoms are in one molecule of CO₂?", opts: ["2", "3", "4", "1"], ans: 1, explain: "CO₂ has 1 carbon + 2 oxygen = 3 atoms total." },
  { q: "What is the molecular formula for methane?", opts: ["CO₂", "NH₃", "CH₄", "C₂H₅OH"], ans: 2, explain: "Methane is CH₄ — 1 carbon atom bonded to 4 hydrogen atoms." },
  { q: "C₂H₅OH (ethanol) contains how many carbon atoms?", opts: ["1", "5", "6", "2"], ans: 3, explain: "C₂H₅OH has 2 carbon atoms (the subscript after C is 2)." },
  { q: "Which formula represents nitrogen gas?", opts: ["N₂", "NO₂", "N", "2N"], ans: 0, explain: "Nitrogen is a diatomic element and exists as N₂ under normal conditions." },
  { q: "How many total atoms are in one molecule of C₂H₅OH (ethanol)?", opts: ["6", "9", "8", "7"], ans: 1, explain: "C₂H₅OH: 2C + 6H + 1O = 9 atoms total." },
  { q: "Which of the following pairs are both diatomic elements?", opts: ["O₂ and CO₂", "N₂ and NH₃", "Cl₂ and H₂", "H₂O and F₂"], ans: 2, explain: "Cl₂ and H₂ are both diatomic elements. CO₂ and NH₃ are compounds." },
  { q: "How many sulfur atoms are in one molecule of H₂SO₄?", opts: ["2", "4", "0", "1"], ans: 3, explain: "H₂SO₄ has 2H + 1S + 4O. There is 1 sulfur atom." },
  { q: "A molecule is defined as:", opts: ["Two or more atoms bonded together", "Only atoms of different elements bonded", "A single atom in isolation", "An atom that has lost electrons"], ans: 0, explain: "A molecule consists of two or more atoms (same or different elements) held together by chemical bonds." },
  { q: "Iodine (I₂) is a diatomic element. What does this mean?", opts: ["It has 2 isotopes", "It naturally exists as pairs of atoms bonded together", "It has atomic number 2", "It forms 2 types of compounds"], ans: 1, explain: "Diatomic means two atoms of the same element are bonded together to form the basic unit: I₂." },
  { q: "How many oxygen atoms are in one molecule of glucose (C₆H₁₂O₆)?", opts: ["12", "1", "6", "18"], ans: 2, explain: "C₆H₁₂O₆ has 6 oxygen atoms per molecule." },
  { q: "Which formula represents fluorine gas?", opts: ["F", "Fe₂", "2F", "F₂"], ans: 3, explain: "Fluorine is a diatomic element and exists as F₂ (a gas at room temperature)." },
  { q: "NaCl is described as ionic rather than molecular. However, its formula still shows:", opts: ["The ratio of ions in the compound (1Na : 1Cl)", "A single molecule of NaCl", "Only the cation", "Only the anion"], ans: 0, explain: "NaCl is an ionic compound; its formula represents the simplest ratio of ions — 1 Na⁺ for every 1 Cl⁻." },
  { q: "Which of the following is an element?", opts: ["Water (H₂O)", "Copper (Cu)", "Salt (NaCl)", "Carbon dioxide (CO₂)"], ans: 1, explain: "Copper (Cu) is a pure element — made of only one type of atom. The others are compounds." },
  { q: "A compound is best described as:", opts: ["A mixture of two substances", "A pure element", "Two or more different elements chemically bonded in a fixed ratio", "Atoms of the same element physically mixed"], ans: 2, explain: "A compound has two or more different elements bonded chemically in a fixed ratio, with new properties." },
  { q: "Which property distinguishes a compound from a mixture?", opts: ["Both have variable composition", "Both can be separated by filtration", "Both retain individual element properties", "A compound has fixed composition; a mixture has variable composition"], ans: 3, explain: "Compounds always have a fixed ratio of elements; mixtures can have any ratio." },
  { q: "Which of the following is a mixture?", opts: ["Air", "Water (H₂O)", "Carbon dioxide (CO₂)", "Sodium chloride (NaCl)"], ans: 0, explain: "Air is a mixture of nitrogen, oxygen, argon, CO₂, and other gases in variable proportions." },
  { q: "Iron sulfide (FeS) is a compound. Iron filings and sulfur powder mixed together form a:", opts: ["Compound", "Mixture", "Element", "Ion"], ans: 1, explain: "Physically mixing iron filings and sulfur powder without a chemical reaction produces a mixture, not a compound." },
  { q: "How can a compound be separated into its elements?", opts: ["By filtration", "By evaporation", "Only by chemical methods", "By distillation"], ans: 2, explain: "Compounds are held together by chemical bonds and can only be separated by chemical reactions (e.g., electrolysis)." },
  { q: "Which of the following is a compound?", opts: ["Oxygen gas (O₂)", "Iron (Fe)", "Nitrogen gas (N₂)", "Ammonia (NH₃)"], ans: 3, explain: "Ammonia (NH₃) is a compound — it contains nitrogen and hydrogen atoms chemically bonded together." },
  { q: "Seawater is an example of a:", opts: ["Mixture", "Compound", "Element", "Pure substance"], ans: 0, explain: "Seawater is a mixture of water, salt, and many other dissolved substances in variable proportions." },
  { q: "When a compound forms from its elements, what happens to energy?", opts: ["No energy change occurs", "Energy is released or absorbed (significant change)", "Energy is always absorbed only", "Elements cannot form compounds"], ans: 1, explain: "Forming a compound always involves a chemical reaction and a significant energy change (energy released or absorbed)." },
  { q: "Which method can separate a mixture of salt and water?", opts: ["Chemical decomposition", "Electrolysis", "Evaporation (or distillation)", "Melting"], ans: 2, explain: "Evaporation or distillation (physical methods) can separate salt from water since it is a mixture." },
  { q: "A mixture of iron filings and sulfur can be separated by:", opts: ["Distillation", "Electrolysis", "Filtration", "Using a magnet (magnetic separation)"], ans: 3, explain: "Iron is magnetic; a magnet can physically separate iron filings from sulfur powder — a physical separation method." },
  { q: "Which statement about mixtures is correct?", opts: ["The components of a mixture retain their individual properties", "Mixtures have fixed composition", "Mixtures can only be separated chemically", "Mixtures always look uniform"], ans: 0, explain: "In a mixture, each substance retains its own properties; the mixture has no fixed ratio." },
  { q: "Water (H₂O) has different properties from hydrogen and oxygen gas. This is because:", opts: ["It is a mixture", "It is a compound — new properties emerge when elements bond", "Hydrogen and oxygen are the same element", "Water has no hydrogen"], ans: 1, explain: "Compounds have entirely different properties from their constituent elements due to chemical bonding." },
  { q: "Which of the following is NOT a method of separating mixtures?", opts: ["Filtration", "Distillation", "Electrolysis", "Evaporation"], ans: 2, explain: "Electrolysis is a chemical method used to decompose compounds, not a physical separation technique for mixtures." },
  { q: "Soil is best classified as:", opts: ["An element", "A compound", "A pure substance", "A mixture"], ans: 3, explain: "Soil is a heterogeneous mixture of minerals, organic matter, water, and air." },
  { q: "Which feature is shared by both elements and compounds but NOT mixtures?", opts: ["Fixed composition", "Made of more than one element", "Separated by physical means", "Variable ratio"], ans: 0, explain: "Both elements and compounds have fixed, definite compositions; mixtures do not." },
  { q: "Carbon dioxide (CO₂) is a compound because:", opts: ["It contains only one element", "It contains carbon and oxygen atoms chemically bonded in a fixed 1:2 ratio", "It is a gas", "It can be separated by filtration"], ans: 1, explain: "CO₂ has carbon and oxygen bonded chemically in a fixed 1:2 ratio — this makes it a compound." },
  { q: "A homogeneous mixture has:", opts: ["Visible separate components", "Fixed chemical formula", "Uniform composition throughout", "Only one element"], ans: 2, explain: "A homogeneous mixture (e.g., salt solution) has uniform composition — you cannot distinguish the components." },
  { q: "Which pair correctly matches substance to classification?", opts: ["O₂ — compound; NaCl — element", "Air — compound; H₂O — element", "Fe — compound; CO₂ — element", "Fe — element; NaCl — compound"], ans: 3, explain: "Fe (iron) is an element; NaCl (sodium chloride) is a compound made of Na and Cl chemically bonded." },
  { q: "Which of the following can be separated by physical means only?", opts: ["A mixture of sand and water", "A compound like H₂O", "An element like Fe", "An ionic compound like NaCl in its pure solid form"], ans: 0, explain: "A mixture of sand and water can be separated by filtration — a physical method. Compounds require chemical methods." },
  { q: "What is a cation?", opts: ["A negatively charged ion", "A positively charged ion", "A neutral atom", "An atom that gained electrons"], ans: 1, explain: "A cation is a positive ion formed when an atom loses one or more electrons." },
  { q: "Which ion is formed by a sodium atom losing one electron?", opts: ["Na⁻", "Na²⁺", "Na⁺", "Na²⁻"], ans: 2, explain: "Sodium (Group 1) loses its one valence electron to form Na⁺." },
  { q: "What is an anion?", opts: ["A positively charged ion", "A neutral particle", "An atom that lost electrons", "A negatively charged ion"], ans: 3, explain: "An anion is a negative ion formed when an atom gains one or more electrons." },
  { q: "Which ion is formed by a chlorine atom gaining one electron?", opts: ["Cl⁻", "Cl⁺", "Cl²⁻", "Cl²⁺"], ans: 0, explain: "Chlorine (Group 7) gains one electron to complete its outer shell, forming Cl⁻." },
  { q: "What is the formula of the hydroxide ion?", opts: ["H⁺", "OH⁻", "HO₂⁻", "OH₂"], ans: 1, explain: "The hydroxide ion is OH⁻ — oxygen and hydrogen with a −1 charge." },
  { q: "Which is the correct formula for aluminium ion?", opts: ["Al⁺", "Al²⁺", "Al³⁺", "Al⁴⁺"], ans: 2, explain: "Aluminium (Group 13) loses 3 electrons to form Al³⁺." },
  { q: "What is the formula of the sulfate ion?", opts: ["SO₃²⁻", "SO₄⁻", "S²⁻", "SO₄²⁻"], ans: 3, explain: "The sulfate ion is SO₄²⁻ — sulfur and 4 oxygens with a 2− charge." },
  { q: "Which ionic formula is correct for magnesium oxide?", opts: ["MgO", "Mg₂O", "MgO₂", "Mg₂O₂"], ans: 0, explain: "Mg²⁺ and O²⁻ have equal and opposite charges, so they combine in a 1:1 ratio: MgO." },
  { q: "What is the formula for calcium chloride?", opts: ["CaCl", "CaCl₂", "Ca₂Cl", "Ca₂Cl₂"], ans: 1, explain: "Ca²⁺ needs 2 Cl⁻ to balance: Ca²⁺ + 2Cl⁻ → CaCl₂." },
  { q: "The formula for aluminium chloride is:", opts: ["AlCl", "AlCl₂", "AlCl₃", "Al₃Cl"], ans: 2, explain: "Al³⁺ needs 3 Cl⁻ ions to balance charges: Al³⁺ + 3Cl⁻ → AlCl₃." },
  { q: "Which formula represents calcium hydroxide?", opts: ["CaOH", "Ca(OH)", "CaOH₂", "Ca(OH)₂"], ans: 3, explain: "Ca²⁺ + 2OH⁻ → Ca(OH)₂. Brackets are needed around OH when the polyatomic ion appears more than once." },
  { q: "What is the charge of the ammonium ion?", opts: ["+1", "−1", "+2", "−2"], ans: 0, explain: "The ammonium ion NH₄⁺ carries a +1 charge — it is a polyatomic cation." },
  { q: "Which ion is the carbonate ion?", opts: ["CO₃⁻", "CO₃²⁻", "CO₂²⁻", "C²O₃⁻"], ans: 1, explain: "The carbonate ion is CO₃²⁻ — carbon and 3 oxygens with a 2− charge." },
  { q: "What is the formula for sodium sulfate?", opts: ["NaSO₄", "Na₂SO₄", "NaSO₄", "Na(SO₄)₂"], ans: 2, explain: "Na⁺ has charge +1; SO₄²⁻ has charge −2. Need 2 Na⁺: Na₂SO₄." },
  { q: "Iron can form two ions. Which are they?", opts: ["Fe⁺ and Fe²⁺", "Fe²⁺ and Fe⁴⁺", "Fe⁺ and Fe³⁺", "Fe²⁺ and Fe³⁺"], ans: 3, explain: "Iron commonly forms Fe²⁺ (iron(II)) and Fe³⁺ (iron(III)) ions." },
  { q: "The nitrate ion has the formula:", opts: ["NO₃⁻", "NO₂⁻", "N₂O₃⁻", "NO₃²⁻"], ans: 0, explain: "The nitrate ion is NO₃⁻ — nitrogen and 3 oxygens with a −1 charge." },
  { q: "What is the formula for magnesium nitrate?", opts: ["MgNO₃", "Mg(NO₃)₂", "MgNO₃₂", "Mg₂NO₃"], ans: 1, explain: "Mg²⁺ + 2NO₃⁻ → Mg(NO₃)₂. Brackets are used since NO₃ appears twice." },
  { q: "Which ion do oxygen atoms typically form?", opts: ["O⁺", "O⁻", "O²⁻", "O²⁺"], ans: 2, explain: "Oxygen (Group 6) gains 2 electrons to form O²⁻." },
  { q: "The formula for aluminium oxide is:", opts: ["AlO", "Al₂O", "AlO₂", "Al₂O₃"], ans: 3, explain: "Al³⁺ and O²⁻: cross-multiply valencies → Al₂O₃ (charges: 2×(+3) + 3×(−2) = 0)." },
  { q: "What is the formula for sodium carbonate?", opts: ["Na₂CO₃", "NaCO₃", "Na(CO₃)₂", "Na₂CO₂"], ans: 0, explain: "Na⁺ + CO₃²⁻: need 2 Na⁺ to balance 2− charge → Na₂CO₃." },
  { q: "When writing the formula for an ionic compound, the overall charge must be:", opts: ["Positive", "Zero (neutral)", "Negative", "Equal to the group number"], ans: 1, explain: "Ionic compounds are electrically neutral overall — the positive and negative charges must balance to zero." },
  { q: "The phosphate ion is PO₄³⁻. What is the formula for calcium phosphate?", opts: ["CaPO₄", "Ca₃PO₄", "Ca₃(PO₄)₂", "Ca(PO₄)₃"], ans: 2, explain: "Ca²⁺ (charge 2+) and PO₄³⁻ (charge 3−): cross-multiply → 3 Ca and 2 PO₄ → Ca₃(PO₄)₂." },
  { q: "Which is the correct formula for iron(III) oxide?", opts: ["FeO", "Fe₂O", "FeO₃", "Fe₂O₃"], ans: 3, explain: "Fe³⁺ and O²⁻: cross-multiply → 2 Fe and 3 O → Fe₂O₃ (charges: 2×3 = 6+ and 3×2 = 6−)." },
  { q: "Ca(NO₃)₂ is the formula for calcium nitrate. Why are brackets used around NO₃?", opts: ["Because NO₃ is a polyatomic ion that appears more than once in the formula", "Because NO₃ is always written with brackets", "To show it is a covalent compound", "Brackets indicate the charge of the ion"], ans: 0, explain: "Brackets are used around a polyatomic ion (like NO₃⁻) when more than one of that ion is needed, to show the subscript applies to the whole group." },
  { q: "Which of the following correctly represents the ammonium sulfate formula?", opts: ["NH₄SO₄", "(NH₄)₂SO₄", "NH₄(SO₄)₂", "N₂H₈SO₄"], ans: 1, explain: "NH₄⁺ has charge +1; SO₄²⁻ has charge −2. Need 2 NH₄⁺: (NH₄)₂SO₄." }
];
