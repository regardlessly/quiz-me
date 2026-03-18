export const meta = {
  id: 7, sem: 2,
  title: 'Particulate Nature of Matter',
  desc: 'Kinetic particle theory, states of matter, changes of state and diffusion'
}

export const notes = `
<h2>Particulate Nature of Matter</h2>
<p class="topic-desc">Kinetic particle theory · States of matter · Changes of state · Heating/cooling curves · Evaporation · Diffusion · Density</p>

<div class="notes-card">
  <h3>1. Kinetic Particle Theory — The 3 States of Matter</h3>
  <ul>
    <li>All matter is made of tiny particles (atoms, molecules, or ions).</li>
    <li>These particles are in <strong>constant motion</strong>.</li>
    <li>The <strong>temperature</strong> of a substance reflects the <em>average kinetic energy</em> of its particles.</li>
    <li>Higher temperature → particles move faster → greater kinetic energy.</li>
  </ul>
  <table>
    <tr><th>Property</th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
    <tr><td><strong>Arrangement</strong></td><td>Regular, ordered lattice</td><td>Irregular, close together</td><td>Irregular, far apart</td></tr>
    <tr><td><strong>Movement</strong></td><td>Vibrate about fixed positions</td><td>Move/slide past each other</td><td>Move rapidly in random directions</td></tr>
    <tr><td><strong>Forces</strong></td><td>Very strong</td><td>Moderate</td><td>Very weak (negligible)</td></tr>
    <tr><td><strong>Shape</strong></td><td>Fixed shape</td><td>Takes shape of container</td><td>Fills entire container</td></tr>
    <tr><td><strong>Volume</strong></td><td>Fixed volume</td><td>Fixed volume</td><td>No fixed volume; fills container</td></tr>
    <tr><td><strong>Compressibility</strong></td><td>Incompressible</td><td>Almost incompressible</td><td>Highly compressible</td></tr>
    <tr><td><strong>Density</strong></td><td>High</td><td>High (usually)</td><td>Very low</td></tr>
  </table>
  <div class="example">
    <strong>Remember:</strong> Particles are always moving — even in a solid, they vibrate. Temperature is a measure of average kinetic energy, not a measure of the number of particles.
  </div>
</div>

<div class="notes-card">
  <h3>2. Changes of State</h3>
  <table>
    <tr><th>Change</th><th>Direction</th><th>Heat</th><th>Key Points</th></tr>
    <tr><td><strong>Melting</strong></td><td>Solid → Liquid</td><td>Absorbed</td><td>Particles gain energy to overcome forces; temp stays constant at melting point (pure substance)</td></tr>
    <tr><td><strong>Freezing</strong></td><td>Liquid → Solid</td><td>Released</td><td>Particles lose energy; temp stays constant at freezing point (= melting point)</td></tr>
    <tr><td><strong>Evaporation</strong></td><td>Liquid → Gas</td><td>Absorbed</td><td>Surface only; any temperature; faster at higher temp, larger surface area, moving air, lower humidity</td></tr>
    <tr><td><strong>Boiling</strong></td><td>Liquid → Gas</td><td>Absorbed</td><td>Throughout liquid at boiling point; temp stays constant; requires external heat</td></tr>
    <tr><td><strong>Condensation</strong></td><td>Gas → Liquid</td><td>Released</td><td>Particles lose energy; temp stays constant</td></tr>
    <tr><td><strong>Sublimation</strong></td><td>Solid → Gas</td><td>Absorbed</td><td>e.g. dry ice (solid CO₂), iodine crystals, naphthalene (mothballs)</td></tr>
    <tr><td><strong>Deposition</strong></td><td>Gas → Solid</td><td>Released</td><td>Reverse of sublimation</td></tr>
  </table>
  <div class="example">
    <strong>Latent heat:</strong> Heat absorbed or released during a change of state <em>without</em> temperature change. Energy is used to break (or form) intermolecular bonds — not to raise temperature.
  </div>
</div>

<div class="notes-card">
  <h3>3. Heating and Cooling Curves</h3>
  <p><strong>Heating curve of a pure substance:</strong></p>
  <ul>
    <li><strong>Segment 1 (solid heating):</strong> Temperature rises; particles vibrate faster.</li>
    <li><strong>Flat section 1 (melting):</strong> Temperature constant at melting point; energy breaks bonds; <em>latent heat of fusion</em> absorbed.</li>
    <li><strong>Segment 2 (liquid heating):</strong> Temperature rises; particles move faster.</li>
    <li><strong>Flat section 2 (boiling):</strong> Temperature constant at boiling point; energy breaks all remaining bonds; <em>latent heat of vaporisation</em> absorbed.</li>
    <li><strong>Segment 3 (gas heating):</strong> Temperature rises.</li>
  </ul>
  <p>The <strong>cooling curve</strong> is the reverse — flat sections occur at the same temperatures during freezing/condensation.</p>
  <div class="example">
    <strong>Purity test:</strong><br>
    • <strong>Pure substance</strong>: sharp, fixed melting/boiling point (flat section is horizontal).<br>
    • <strong>Impure substance / mixture</strong>: melts/boils over a <em>range</em> of temperatures; melting point is depressed, boiling point is elevated.
  </div>
</div>

<div class="notes-card">
  <h3>4. Evaporation vs Boiling</h3>
  <table>
    <tr><th>Feature</th><th>Evaporation</th><th>Boiling</th></tr>
    <tr><td><strong>Where occurs</strong></td><td>Surface only</td><td>Throughout liquid</td></tr>
    <tr><td><strong>Temperature</strong></td><td>Any temperature</td><td>Fixed boiling point only</td></tr>
    <tr><td><strong>Speed</strong></td><td>Slow (usually)</td><td>Fast</td></tr>
    <tr><td><strong>Effect</strong></td><td>Cooling effect (absorbs energy from surroundings)</td><td>Requires external heat supply</td></tr>
    <tr><td><strong>Bubbles?</strong></td><td>No</td><td>Yes (throughout liquid)</td></tr>
  </table>
  <p><strong>Factors that increase evaporation rate:</strong></p>
  <ol>
    <li>Higher temperature (more particles have enough energy to escape)</li>
    <li>Larger surface area (more particles at surface)</li>
    <li>Moving air / wind (removes vapour, reducing partial pressure)</li>
    <li>Lower humidity (less vapour in air → steeper concentration gradient)</li>
  </ol>
  <div class="example">
    <strong>Cooling by evaporation:</strong> As the most energetic particles escape from the liquid surface, the average KE of remaining particles decreases → temperature of the liquid drops.<br>
    Examples: sweating (body cools), wet cloth on forehead, refrigerator coolant cycle.
  </div>
</div>

<div class="notes-card">
  <h3>5. Diffusion</h3>
  <ul>
    <li><strong>Diffusion:</strong> Net movement of particles from a region of <em>high concentration</em> to a region of <em>low concentration</em> (down the concentration gradient).</li>
    <li>Occurs in <strong>liquids</strong> and <strong>gases</strong> — not in solids (particles cannot move freely).</li>
    <li>Caused by the <strong>random motion</strong> of particles; no external energy required.</li>
    <li>Diffusion in gases is <strong>much faster</strong> than in liquids — gas particles move faster and have more space between them.</li>
  </ul>
  <p><strong>Factors affecting rate of diffusion:</strong></p>
  <ol>
    <li>Concentration gradient (steeper = faster)</li>
    <li>Temperature (higher = faster — more kinetic energy)</li>
    <li>Molecular mass (lighter molecules diffuse faster — Graham's Law)</li>
    <li>Surface area (larger = faster)</li>
    <li>Distance (shorter = faster)</li>
    <li>Medium (faster in gas than in liquid)</li>
  </ol>
  <div class="example">
    <strong>Brownian motion:</strong> The random, erratic zigzag movement of visible particles (e.g. pollen grains, smoke particles) caused by collisions with invisible, fast-moving fluid particles. First observed by Robert Brown in 1827 watching pollen in water. Provides <em>evidence</em> for the existence and constant motion of particles.
  </div>
</div>

<div class="notes-card">
  <h3>6. Density and the Particle Model</h3>
  <div class="formula">ρ = m ÷ V &nbsp; (density = mass ÷ volume) &nbsp;·&nbsp; m = ρV &nbsp;·&nbsp; V = m ÷ ρ</div>
  <ul>
    <li>Units: g/cm³ or kg/m³</li>
    <li>Solids generally denser than liquids; liquids much denser than gases.</li>
    <li><strong>Exception — Ice vs Water:</strong> Ice (0.92 g/cm³) is <em>less dense</em> than liquid water (1.00 g/cm³). In ice, molecules are held in an open crystal lattice with more space between them.</li>
    <li><strong>Why gases are compressible:</strong> Particles are very far apart → large empty spaces → can be pushed closer together.</li>
    <li><strong>Why solids/liquids are incompressible:</strong> Particles are already close together → negligible space to compress into.</li>
  </ul>
  <div class="example">
    <strong>Applications:</strong><br>
    • <strong>Floating:</strong> An object floats if its density &lt; density of the fluid it is placed in.<br>
    • <strong>Submarines:</strong> Adjust density by taking in/pumping out water from ballast tanks.<br>
    • <strong>Hot air balloons:</strong> Heated air inside is less dense than surrounding cooler air → upthrust.
  </div>
</div>

<div class="notes-card">
  <h3>7. Particle Theory — Evidence and Applications</h3>
  <p><strong>Evidence for kinetic particle theory:</strong></p>
  <ul>
    <li><strong>Brownian motion</strong>: Direct observation of particle movement effects — confirms particles exist and move randomly.</li>
    <li><strong>Diffusion</strong>: Particles spread out spontaneously — confirms random motion.</li>
    <li><strong>Changes of state at fixed temperatures</strong>: Consistent with energy-force model — confirms particles are held by forces.</li>
    <li><strong>Compression of gases</strong>: Possible because particles have large spaces between them.</li>
  </ul>
  <p><strong>Applications:</strong></p>
  <ul>
    <li><strong>Pressure cooker:</strong> Higher pressure raises boiling point → water boils at &gt;100 °C → food cooks faster (faster particle reactions).</li>
    <li><strong>Refrigeration:</strong> Coolant evaporates inside fridge (absorbs latent heat → cools food); condenses outside (releases heat to environment).</li>
    <li><strong>Aerosols:</strong> Gas propellant compressed in can; when valve opens, gas expands; liquid converts to fine spray droplets.</li>
    <li><strong>Perfume / air freshener:</strong> Liquid evaporates, vapour diffuses through air → detectable across a room.</li>
  </ul>
</div>
`

export const questions = [
  { q: 'According to kinetic particle theory, all matter is made of', opts: ['tiny particles such as atoms, molecules, or ions', 'continuous, unbroken material with no gaps', 'waves of energy that vibrate in space', 'static charges arranged in a grid'], ans: 0 },
  { q: 'What does the temperature of a substance indicate about its particles?', opts: ['The total number of particles present', 'The average kinetic energy of the particles', 'The force of attraction between particles', 'The size of individual particles'], ans: 1 },
  { q: 'Which state of matter has particles arranged in a regular, ordered lattice?', opts: ['Liquid', 'Solid', 'Gas', 'Plasma'], ans: 2 },
  { q: 'In which state do particles move rapidly in all random directions with negligible forces between them?', opts: ['Liquid', 'Plasma', 'Gas', 'Solid'], ans: 3 },
  { q: 'Which statement best describes particle movement in a liquid?', opts: ['Particles slide and move past each other', 'Particles are stationary at fixed positions', 'Particles move rapidly with no forces between them', 'Particles vibrate about fixed positions'], ans: 0 },
  { q: 'Why is a gas highly compressible but a solid is not?', opts: ['Gas particles are far apart with large spaces between them; solid particles are closely packed', 'Gas particles are lighter than solid particles', 'Gas particles move faster so they escape compression', 'Solid particles are stuck together with chemical bonds that resist force'], ans: 1 },
  { q: 'Which property is the SAME for both solids and liquids but different from gases?', opts: ['Regular particle arrangement', 'Fixed volume', 'Fixed shape', 'High compressibility'], ans: 2 },
  { q: 'If you heat a substance, what happens to the average kinetic energy of its particles?', opts: ['It remains constant — only volume changes', 'It fluctuates randomly with no net change', 'It increases as particles move faster', 'It decreases as particles slow down'], ans: 3 },
  { q: 'Which state of matter has the lowest density?', opts: ['Gas', 'Solid', 'Liquid', 'All states have equal density'], ans: 0 },
  { q: 'What type of force exists between particles in a solid?', opts: ['Very strong intermolecular forces', 'Very weak, almost negligible', 'Moderate forces allowing movement', 'No forces — particles are independent'], ans: 1 },
  { q: 'A substance takes the shape of its container but has a fixed volume. What state is it in?', opts: ['Gas', 'Liquid', 'Solid', 'Plasma'], ans: 2 },
  { q: 'Which statement about particle motion in a solid is correct?', opts: ['Particles move freely throughout the solid', 'Particles move randomly at high speed', 'Particles vibrate about fixed positions', 'Particles are completely stationary'], ans: 3 },
  { q: 'Which state has particles that are irregularly arranged and far apart?', opts: ['Gas', 'Solid', 'Liquid', 'Both solid and liquid'], ans: 0 },
  { q: 'How do the intermolecular forces in a liquid compare to those in a gas?', opts: ['Forces in a liquid are stronger than in a gas', 'Forces in a liquid are weaker than in a gas', 'Forces in a liquid and gas are equal', 'Liquids have no intermolecular forces'], ans: 1 },
  { q: 'A gas fills its container completely with no fixed shape or volume. This is because gas particles', opts: ['are in a regular arrangement that matches the container', 'move rapidly and randomly in all directions with negligible forces', 'are attracted to the walls of the container', 'vibrate in place and spread out slowly over time'], ans: 2 },
  { q: 'Which property is TRUE for a solid but NOT for a liquid or gas?', opts: ['High density', 'Particles in constant motion', 'Fixed shape', 'Fixed volume'], ans: 3 },
  { q: 'Which statement correctly compares the density of the three states of matter?', opts: ['Solid and liquid have high density; gas has very low density', 'Gas has the highest density; solid has the lowest', 'All three states have similar densities', 'Liquid has the highest density of all three states'], ans: 0 },
  { q: 'What happens to particle speed when a substance is cooled?', opts: ['Particle speed decreases', 'Particle speed increases', 'Particle speed is unaffected by temperature', 'Particles stop moving completely at any temperature below 100 °C'], ans: 1 },
  { q: 'Why can liquids flow but solids cannot?', opts: ['Liquid particles have no intermolecular forces', 'Liquid particles can slide past each other; solid particles are held in fixed positions', 'Liquid particles are smaller than solid particles', 'Liquid particles are arranged in a regular lattice that allows rotation'], ans: 2 },
  { q: 'A solid is incompressible because', opts: ['its particles are moving too fast to be compressed', 'its particles repel each other at close range only in solids', 'its particles are already closely packed with no space to compress into', 'its particles are too heavy to move closer together'], ans: 3 },
  { q: 'Which of the following is an example of a particle described by kinetic particle theory?', opts: ['An atom of oxygen gas', 'A bacterium swimming in water', 'A dust grain floating in air', 'A bubble rising in a liquid'], ans: 0 },
  { q: 'In which state of matter do particles have the most energy on average?', opts: ['Gas', 'Solid', 'Liquid', 'All states have the same average energy'], ans: 1 },
  { q: 'Which combination of properties correctly describes a gas?', opts: ['No fixed shape, fixed volume, low compressibility', 'No fixed shape, no fixed volume, highly compressible', 'Fixed shape, fixed volume, high density', 'Fixed shape, no fixed volume, moderate density'], ans: 2 },
  { q: 'Two substances are at the same temperature. Substance A is a solid and Substance B is a gas. Which statement is correct?', opts: ['Substance A particles have more kinetic energy than Substance B particles', 'Substance B particles are arranged in a lattice', 'Both substances have particles with the same average kinetic energy at the same temperature', 'Substance A particles move faster than Substance B particles'], ans: 3 },
  { q: 'Which state of matter is almost incompressible but not completely incompressible?', opts: ['Liquid', 'Gas', 'Solid', 'All states are equally incompressible'], ans: 0 },
  { q: 'What is the term for the change of state from solid directly to gas, without passing through the liquid phase?', opts: ['Sublimation', 'Condensation', 'Evaporation', 'Deposition'], ans: 1 },
  { q: 'During melting, what happens to the temperature of a pure substance?', opts: ['It decreases as energy is absorbed', 'It remains constant at the melting point', 'It increases steadily throughout melting', 'It fluctuates above and below the melting point'], ans: 2 },
  { q: 'Which change of state releases heat to the surroundings?', opts: ['Evaporation', 'Boiling', 'Condensation', 'Melting'], ans: 3 },
  { q: 'Dry ice is solid carbon dioxide. When it is left in a warm room, it changes directly into carbon dioxide gas. This is an example of', opts: ['sublimation', 'evaporation', 'condensation', 'deposition'], ans: 0 },
  { q: 'What is latent heat?', opts: ['Heat absorbed or released during a change of state without a temperature change', 'The heat that causes temperature to rise during heating', 'The average kinetic energy of particles in a substance', 'The heat released when a gas is compressed'], ans: 1 },
  { q: 'During freezing, what happens to the particles of a substance?', opts: ['Particles escape from the surface and enter the gas phase', 'Particles lose energy and are locked into fixed positions', 'Particles gain energy and move faster', 'Particles spread apart as intermolecular forces weaken'], ans: 2 },
  { q: 'The freezing point of a pure substance is', opts: ['higher than its melting point', 'lower than its melting point', 'equal to its melting point', 'always 0 °C for all substances'], ans: 3 },
  { q: 'What does latent heat of fusion refer to?', opts: ['Heat absorbed or released when a substance melts or freezes', 'Heat absorbed when a liquid evaporates', 'Heat released when a gas condenses', 'Heat required to raise a substance\'s temperature by 1 °C'], ans: 0 },
  { q: 'Which of the following is an example of deposition?', opts: ['Frost forming on a cold window pane directly from water vapour', 'Ice melting into water on a warm day', 'Water vapour condensing into liquid droplets on a cold can', 'Dry ice subliming in a warm room'], ans: 1 },
  { q: 'During boiling, bubbles form throughout the liquid because', opts: ['particles at the surface gain enough energy to escape', 'particles throughout the liquid gain enough energy to overcome intermolecular forces and form vapour', 'the liquid is releasing dissolved gases at the surface', 'the container walls heat the liquid unevenly, causing localised boiling'], ans: 2 },
  { q: 'What is the energy absorbed or released during a change of state used for?', opts: ['Raising the temperature of the substance', 'Breaking covalent bonds within molecules', 'Breaking or forming intermolecular bonds between particles', 'Increasing the speed of all particles'], ans: 3 },
  { q: 'Which of the following changes of state absorbs heat from the surroundings?', opts: ['Melting', 'Condensation', 'Freezing', 'Deposition'], ans: 0 },
  { q: 'Iodine crystals, when heated gently, turn into purple iodine vapour without becoming a liquid first. This is', opts: ['sublimation', 'condensation', 'evaporation', 'boiling'], ans: 1 },
  { q: 'During condensation, what happens to particles in the gas phase?', opts: ['Particles absorb latent heat and spread apart', 'Particles lose energy and come together to form a liquid', 'Particles gain energy and move faster', 'Particles vibrate more vigorously about fixed positions'], ans: 2 },
  { q: 'Which pair of changes of state both release heat to the surroundings?', opts: ['Boiling and sublimation', 'Melting and boiling', 'Freezing and condensation', 'Melting and evaporation'], ans: 3 },
  { q: 'What happens to intermolecular forces when a liquid evaporates?', opts: ['Forces are overcome as particles gain enough energy to escape the liquid surface', 'Forces become stronger as particles cluster at the surface', 'Forces are completely destroyed and cease to exist', 'Forces remain unchanged during evaporation'], ans: 0 },
  { q: 'Which statement about boiling is correct?', opts: ['Boiling occurs at a fixed temperature throughout the liquid', 'Boiling occurs only at the surface of a liquid', 'Boiling occurs at any temperature if the surface area is large enough', 'Boiling does not require any heat input if the liquid is pure'], ans: 1 },
  { q: 'Naphthalene (mothballs) slowly disappear over time without melting. This is because naphthalene undergoes', opts: ['evaporation', 'sublimation', 'condensation', 'deposition'], ans: 2 },
  { q: 'What is \'latent heat of vaporisation\'?', opts: ['Heat released when a gas condenses into a liquid', 'Heat needed to raise a liquid\'s temperature to its boiling point', 'Heat needed to convert a liquid to a gas at its boiling point', 'Heat needed to melt a solid into a liquid'], ans: 3 },
  { q: 'Which change of state is the reverse of sublimation?', opts: ['Deposition', 'Condensation', 'Evaporation', 'Freezing'], ans: 0 },
  { q: 'During a change of state, the temperature of a pure substance remains constant because', opts: ['all the energy goes into breaking or forming intermolecular bonds, not changing temperature', 'no heat is being added or removed at that moment', 'the particles stop moving during the transition', 'the substance loses mass which offsets the temperature change'], ans: 1 },
  { q: 'Which of the following involves a gas changing directly into a solid?', opts: ['Condensation', 'Deposition', 'Sublimation', 'Freezing'], ans: 2 },
  { q: 'When liquid water evaporates, what happens to the intermolecular forces?', opts: ['They remain the same throughout evaporation', 'They are unaffected until the boiling point is reached', 'They are overcome as surface particles gain sufficient energy to escape', 'They are strengthened as vapour forms'], ans: 3 },
  { q: 'Which change of state involves a liquid losing energy to become a solid?', opts: ['Freezing', 'Melting', 'Condensation', 'Sublimation'], ans: 0 },
  { q: 'What is the relationship between the melting point and boiling point of a pure substance?', opts: ['Boiling point is always higher than melting point', 'They are always the same temperature', 'Melting point is always higher than boiling point', 'They are unrelated and depend on different properties'], ans: 1 },
  { q: 'On a heating curve, what does a flat (horizontal) section represent?', opts: ['A period where the heat supply was switched off', 'A change of state occurring at constant temperature', 'A period where the substance is cooling rapidly', 'A region where the substance has a variable composition'], ans: 2 },
  { q: 'On a heating curve of a pure substance, the first flat section occurs at the', opts: ['freezing point during solidification', 'temperature at which the gas condenses', 'melting point during melting', 'boiling point during condensation'], ans: 3 },
  { q: 'On a heating curve, during the first sloping segment (before the first flat section), the substance is in which state?', opts: ['Solid', 'Liquid', 'Gas', 'A mixture of solid and liquid'], ans: 0 },
  { q: 'What is happening to particles during the first flat section of a heating curve?', opts: ['Particles are absorbing latent heat to break intermolecular bonds during melting', 'Particles are vibrating more rapidly as temperature rises', 'Particles are losing energy as they condense', 'Particles are rearranging into a crystal lattice'], ans: 1 },
  { q: 'The second flat section on a heating curve of a pure substance corresponds to', opts: ['condensation of the gas', 'boiling of the liquid', 'melting of the solid', 'sublimation of the solid'], ans: 2 },
  { q: 'Which segment of a heating curve shows a liquid being heated?', opts: ['The first flat section', 'The second flat section', 'The second sloping segment between the two flat sections', 'The first sloping segment'], ans: 3 },
  { q: 'On a cooling curve, at what temperatures does the curve flatten?', opts: ['At the condensation point and freezing point of the substance', 'At random temperatures as the substance loses heat', 'Only at 0 °C and 100 °C regardless of the substance', 'At the melting and boiling points during heating'], ans: 0 },
  { q: 'What does a sloping segment on a heating curve indicate?', opts: ['The temperature of the substance is increasing and its state is not changing', 'A change of state is occurring', 'The substance is releasing latent heat', 'The substance is transitioning between two states simultaneously'], ans: 1 },
  { q: 'An impure substance is heated. How does its melting behaviour differ from a pure substance?', opts: ['It melts at a sharp, fixed temperature like the pure substance', 'It melts over a range of temperatures rather than at a fixed point', 'It melts at a higher temperature than the pure substance', 'It does not melt — impure substances cannot change state'], ans: 2 },
  { q: 'Why does adding an impurity to a substance lower its melting point?', opts: ['The impurity particles vibrate and generate extra heat', 'The impurity reacts with the substance and releases energy', 'Impurity particles disrupt the regular crystal lattice, making it easier to break down', 'The impurity absorbs the latent heat of fusion'], ans: 3 },
  { q: 'A student plots a heating curve and finds the substance melts over 5 °C rather than at a sharp point. This indicates the substance is', opts: ['impure or a mixture', 'a single pure element', 'a pure compound', 'subliming rather than melting'], ans: 0 },
  { q: 'On a cooling curve, what is happening during a flat section?', opts: ['The substance is releasing latent heat while undergoing a change of state', 'The substance is absorbing latent heat from the surroundings', 'The cooling has stopped and the substance is in equilibrium', 'The substance is decomposing at that temperature'], ans: 1 },
  { q: 'Adding salt to water raises its boiling point. This is useful for cooking because', opts: ['salt reduces the latent heat of vaporisation of the water', 'the water boils at a higher temperature, cooking food faster', 'salt supplies heat energy directly to the food', 'salt prevents evaporation, keeping more water in the pot'], ans: 2 },
  { q: 'A pure substance has a melting point of 80 °C. If an impurity is added, the melting point will most likely', opts: ['remain at exactly 80 °C', 'fluctuate between 70 °C and 90 °C randomly', 'decrease to below 80 °C and occur over a range', 'increase to above 80 °C'], ans: 3 },
  { q: 'During the second flat section of a heating curve (boiling), energy supplied goes into', opts: ['breaking all remaining intermolecular bonds in the liquid to form gas', 'increasing the temperature of the gas above the boiling point', 'increasing the speed of solid particles', 'forming new covalent bonds within molecules'], ans: 0 },
  { q: 'The latent heat of fusion is absorbed during which segment of a heating curve?', opts: ['The first flat section', 'The second sloping segment', 'The third sloping segment', 'The second flat section'], ans: 1 },
  { q: 'How can you determine the melting point of a substance from its heating curve?', opts: ['Find the highest temperature reached before cooling begins', 'Find the temperature at which the first flat section occurs', 'Find the temperature at which the slope is steepest', 'Calculate the average temperature during the first sloping segment'], ans: 2 },
  { q: 'A substance has a boiling point of 150 °C. On its cooling curve, at what temperature will the second flat section appear?', opts: ['75 °C', '100 °C', '150 °C', '50 °C'], ans: 3 },
  { q: 'How can heating/cooling curves be used to test the purity of a substance?', opts: ['A pure substance shows sharp, flat sections at fixed temperatures; an impure substance shows sloped sections over temperature ranges', 'A pure substance has no flat sections; an impure substance has multiple flat sections', 'Purity cannot be determined from heating or cooling curves', 'Both pure and impure substances show identical flat sections at the same temperatures'], ans: 0 },
  { q: 'After the second flat section of a heating curve, the substance is in which state?', opts: ['Gas', 'Solid', 'Liquid', 'A solid-gas mixture'], ans: 1 },
  { q: 'During which part of a heating curve does the kinetic energy of particles NOT increase?', opts: ['The second sloping segment', 'Both flat sections (during changes of state)', 'The first sloping segment', 'The third sloping segment'], ans: 2 },
  { q: 'A student heats a mixture of two substances. Compared to the heating curve of a single pure substance, the mixture\'s curve will show', opts: ['a single flat section instead of two', 'identical flat sections at the same temperatures', 'melting and boiling occurring over ranges of temperatures with no sharp flat sections', 'sharper, better-defined flat sections at precise temperatures'], ans: 3 },
  { q: 'On a cooling curve, which change of state corresponds to the FIRST flat section (at higher temperature)?', opts: ['Condensation (gas → liquid)', 'Freezing (liquid → solid)', 'Sublimation (solid → gas)', 'Deposition (gas → solid)'], ans: 0 },
  { q: 'During heating, why does temperature stay constant at the boiling point even though heat is still being supplied?', opts: ['All energy goes into latent heat of vaporisation to break intermolecular bonds, not raising temperature', 'The particles stop absorbing energy at the boiling point', 'Heat is being released at the same rate it is absorbed at the boiling point', 'The thermometer becomes inaccurate at high temperatures'], ans: 1 },
  { q: 'An impure substance has a boiling point that is higher than that of the pure substance. This is because', opts: ['impurities reduce the intermolecular forces in the liquid', 'impurity particles disrupt the vapour-liquid equilibrium, requiring more energy to boil', 'impurities make it harder for particles to gain kinetic energy', 'impurities lower the surface area of the liquid'], ans: 2 },
  { q: 'Which statement correctly distinguishes evaporation from boiling?', opts: ['Evaporation requires an external heat supply; boiling does not', 'Evaporation occurs only at the boiling point; boiling occurs at any temperature', 'Evaporation occurs only at the surface at any temperature; boiling occurs throughout at a fixed temperature', 'Evaporation occurs throughout the liquid; boiling occurs only at the surface'], ans: 3 },
  { q: 'Which factor does NOT increase the rate of evaporation of a liquid?', opts: ['Increasing the pressure above the liquid', 'Increasing the temperature of the liquid', 'Increasing the surface area of the liquid', 'Blowing air across the surface'], ans: 0 },
  { q: 'Why does sweating cool the human body?', opts: ['Evaporation of sweat from the skin surface absorbs latent heat from the body', 'Sweat absorbs heat from the air and transfers it into the body', 'Sweat reflects sunlight, preventing the body from absorbing heat', 'Sweat increases the surface area of the skin, allowing more heat to radiate'], ans: 1 },
  { q: 'A puddle dries up faster on a windy day than on a calm day at the same temperature. This is because', opts: ['wind compresses the water molecules together, reducing the volume', 'wind removes water vapour from above the surface, maintaining a steep concentration gradient', 'wind increases the temperature of the water above its boiling point', 'wind increases the pressure on the water surface, pushing water into the ground'], ans: 2 },
  { q: 'Which observation is evidence that boiling is occurring in a liquid (not just evaporation)?', opts: ['The temperature of the liquid is gradually decreasing', 'The liquid loses mass over time', 'Bubbles form throughout the liquid and rise to the surface', 'The liquid surface appears misty with vapour'], ans: 3 },
  { q: 'At what temperature range can evaporation occur?', opts: ['At any temperature below the boiling point', 'Only at exactly the boiling point', 'Only above 50 °C', 'Only above 25 °C'], ans: 0 },
  { q: 'Why does a glass of water left in a dry room evaporate faster than one left in a humid room?', opts: ['In a dry room, the concentration gradient of water vapour between the surface and air is steeper', 'The dry room is always at a higher temperature', 'Humidity increases the boiling point of water', 'Humid air contains more oxygen, which slows evaporation'], ans: 1 },
  { q: 'When ethanol is applied to skin, the skin feels cool. This is because', opts: ['ethanol particles conduct heat away from skin rapidly', 'ethanol evaporates quickly, absorbing latent heat from the skin surface', 'ethanol has a lower temperature than body temperature at all times', 'ethanol reflects infrared radiation emitted by the skin'], ans: 2 },
  { q: 'Which statement about boiling is correct?', opts: ['Boiling can occur at any temperature if the surface area is large enough', 'Boiling produces a cooling effect like evaporation', 'Boiling requires continuous heat supply to maintain the boiling point', 'Boiling requires no external heat source'], ans: 3 },
  { q: 'Why does a larger surface area increase the rate of evaporation?', opts: ['More particles are at or near the surface and can escape into the vapour phase', 'A larger surface area reduces the intermolecular forces in the liquid', 'A larger surface area increases the boiling point of the liquid', 'A larger surface traps more heat from the surroundings'], ans: 0 },
  { q: 'A refrigerator uses a coolant that evaporates inside the fridge and condenses outside. Why does the inside of the fridge become cold?', opts: ['The coolant absorbs latent heat from inside the fridge as it evaporates', 'The coolant releases heat inside the fridge when it condenses', 'The coolant lowers the temperature of the air by direct contact', 'The coolant pushes warm air out through vents at the back'], ans: 1 },
  { q: 'Which action would MOST increase the evaporation rate from a wet cloth?', opts: ['Placing the cloth in a sealed, humid container', 'Placing the cloth in sunlight with a fan blowing over it', 'Folding the cloth to reduce its surface area', 'Keeping the cloth at room temperature with no airflow'], ans: 2 },
  { q: 'Compared to evaporation, boiling is faster because', opts: ['boiling absorbs less energy per unit mass', 'boiling does not require particles to overcome intermolecular forces', 'during boiling, all particles throughout the liquid have enough energy to overcome intermolecular forces simultaneously', 'boiling occurs only at the surface while evaporation occurs throughout'], ans: 3 },
  { q: 'Cooling by evaporation occurs because', opts: ['the most energetic particles leave the liquid surface, reducing the average kinetic energy of those remaining', 'evaporation adds cool air molecules to the liquid surface', 'the liquid releases heat to the surroundings during evaporation', 'evaporation decreases the mass of the liquid, reducing its temperature'], ans: 0 },
  { q: 'Which of the following does NOT occur during evaporation?', opts: ['Bubbles form throughout the liquid', 'Surface particles gain enough energy to overcome intermolecular forces', 'The temperature of the remaining liquid may decrease', 'Particles escape from the liquid surface into the gas phase'], ans: 1 },
  { q: 'Higher humidity reduces the rate of evaporation because', opts: ['humid air has fewer oxygen molecules to help carry vapour away', 'the concentration gradient of water vapour between the liquid surface and air is reduced', 'humidity increases the temperature, raising the boiling point', 'humid air is denser and pushes down on the liquid surface'], ans: 2 },
  { q: 'A pot of water boils at 100 °C at sea level. On a high mountain where pressure is lower, water boils at about 90 °C. This is because', opts: ['gravity is weaker at high altitude so less energy is needed', 'particles at high altitude naturally have less kinetic energy', 'lower external pressure means particles need less energy to escape into the gas phase', 'water contains fewer dissolved minerals at high altitude'], ans: 3 },
  { q: 'Which of the following is an everyday example of cooling by evaporation?', opts: ['Wearing a damp cloth on your head on a hot day', 'Drinking a cold beverage to reduce body temperature', 'Sitting in an air-conditioned room', 'Using an ice pack on an injury'], ans: 0 },
  { q: 'During evaporation, which particles escape from the liquid surface?', opts: ['Particles with the highest kinetic energy (at the surface)', 'Particles with the lowest kinetic energy', 'All particles equally, regardless of energy', 'Only particles that have been heated externally'], ans: 1 },
  { q: 'Which statement is TRUE about the temperature of a liquid during evaporation (without external heating)?', opts: ['Temperature rises slightly as particles leave', 'Temperature tends to decrease as high-energy particles escape', 'Temperature stays exactly constant throughout evaporation', 'Temperature is unaffected by evaporation'], ans: 2 },
  { q: 'Why does increasing temperature increase the rate of evaporation?', opts: ['Higher temperature decreases the boiling point of the liquid', 'Higher temperature reduces the humidity of the surrounding air', 'Higher temperature gives more particles enough kinetic energy to overcome intermolecular forces and escape', 'Higher temperature lowers intermolecular forces permanently'], ans: 3 },
  { q: 'A student notices that perfume evaporates faster from a wide, shallow dish than from a tall, narrow bottle. The main reason is', opts: ['the wider dish has a larger surface area, allowing more particles to escape simultaneously', 'the narrow bottle has higher pressure inside, slowing evaporation', 'the dish is at a higher temperature than the bottle', 'the dish contains fewer intermolecular forces than the bottle'], ans: 0 },
  { q: 'Which property of evaporation makes it different from boiling in terms of the temperature required?', opts: ['Evaporation can occur at any temperature; boiling only occurs at the boiling point', 'Evaporation requires a temperature above 100 °C; boiling occurs at any temperature', 'Both evaporation and boiling require the substance to reach its boiling point', 'Evaporation requires exactly the melting point temperature; boiling requires the boiling point'], ans: 1 },
  { q: 'The cooling effect of evaporation is used in which of these technologies?', opts: ['LED lights generating less heat than incandescent bulbs', 'Refrigerators using evaporating coolant to absorb heat from the interior', 'Solar panels converting sunlight to electricity', 'Electric fans directly reducing the temperature of air in a room'], ans: 2 },
  { q: 'A wet-bulb thermometer reads a lower temperature than a dry-bulb thermometer. This difference is due to', opts: ['the water on the wet bulb releasing heat as it freezes', 'the wet bulb reflecting more infrared radiation', 'evaporation from the wet bulb absorbing latent heat, cooling it below air temperature', 'the wet bulb absorbing heat from the surrounding air'], ans: 3 },
  { q: 'What is diffusion?', opts: ['The net movement of particles from a region of high concentration to a region of low concentration', 'The movement of particles from a region of low concentration to high concentration', 'The random vibration of particles within a solid', 'The transfer of heat energy from a hot object to a cold object'], ans: 0 },
  { q: 'What drives diffusion?', opts: ['The random motion of particles moving down a concentration gradient', 'External pressure applied to push particles across a membrane', 'The temperature difference between two regions', 'Chemical reactions between particles in different regions'], ans: 1 },
  { q: 'In which states of matter does diffusion readily occur?', opts: ['Solids and gases only', 'Liquids and gases', 'Solids and liquids only', 'All three states equally'], ans: 2 },
  { q: 'Why does diffusion NOT occur readily in solids?', opts: ['Solid particles are too heavy to move', 'Solid particles repel each other, preventing movement', 'Solid particles are held in fixed positions and cannot move freely', 'Solid particles have no kinetic energy'], ans: 3 },
  { q: 'Who first observed Brownian motion, and in what year?', opts: ['Robert Brown, 1827', 'Isaac Newton, 1666', 'Albert Einstein, 1905', 'Louis Pasteur, 1859'], ans: 0 },
  { q: 'What is Brownian motion?', opts: ['The random, erratic zigzag movement of visible particles caused by collisions with smaller, invisible particles', 'The slow, steady flow of particles from high to low concentration', 'The vibration of atoms within a crystal lattice', 'The circular motion of particles in a liquid due to convection'], ans: 1 },
  { q: 'What evidence does Brownian motion provide?', opts: ['Evidence that temperature affects the speed of chemical reactions', 'Evidence that tiny, invisible particles exist and are in constant random motion', 'Evidence that diffusion occurs in gases faster than in liquids', 'Evidence that solids cannot diffuse'], ans: 2 },
  { q: 'A drop of red food colouring is placed in a glass of still water. After some time, the entire water is uniformly pink. This is due to', opts: ['the force of gravity pulling the dye downward', 'capillary action drawing the dye through the water', 'diffusion of dye particles from high concentration to low concentration', 'convection currents created by the density difference'], ans: 3 },
  { q: 'Why does diffusion in gases occur faster than in liquids?', opts: ['Gas particles move faster and have more space between them', 'Gas particles are heavier and collide more forcefully', 'Gas particles have stronger intermolecular forces that help them spread', 'Gas particles are smaller and can pass through liquid particles'], ans: 0 },
  { q: 'According to Graham\'s Law, which gas diffuses faster under the same conditions?', opts: ['H₂ (molecular mass 2) compared to CO₂ (molecular mass 44)', 'CO₂ (molecular mass 44) compared to H₂ (molecular mass 2)', 'Both gases diffuse at the same rate regardless of mass', 'Heavier gases always diffuse faster due to greater momentum'], ans: 1 },
  { q: 'How does increasing the concentration gradient affect the rate of diffusion?', opts: ['It has no effect — rate depends only on temperature', 'It increases the rate — a steeper gradient drives faster net movement', 'It decreases the rate because more collisions occur', 'It reduces the rate by increasing intermolecular forces'], ans: 2 },
  { q: 'You open a bottle of perfume at one end of a room. Someone at the other end can smell it after a short while. This demonstrates', opts: ['sublimation of perfume from liquid to solid', 'pressure-driven flow of perfume vapour across the room', 'diffusion of perfume vapour from high concentration (near bottle) to low concentration (far end)', 'convection of perfume vapour due to air temperature differences'], ans: 3 },
  { q: 'A scientist observes smoke particles under a microscope. The particles move in random zigzag paths. What is causing this movement?', opts: ['Constant random bombardment by invisible air molecules', 'Convection currents in the air under the microscope', 'Electromagnetic forces from the microscope\'s light source', 'Gravity pulling the smoke particles in random directions'], ans: 0 },
  { q: 'Which factor would increase the rate of diffusion?', opts: ['Increasing the temperature', 'Decreasing the temperature of the system', 'Using larger, heavier molecules', 'Decreasing the surface area'], ans: 1 },
  { q: 'Ammonia gas (NH₃, mass 17) and hydrogen chloride gas (HCl, mass 36.5) are released at opposite ends of a glass tube. Where will they meet?', opts: ['Closer to the HCl end', 'Closer to the HCl end (NH₃ diffuses faster, so they meet nearer to HCl source)', 'Exactly in the middle of the tube', 'They will never meet — gases with different masses cannot mix'], ans: 2 },
  { q: 'Why does a steeper concentration gradient increase the rate of diffusion?', opts: ['A steeper gradient reduces intermolecular forces between particles', 'A steeper gradient gives particles more kinetic energy', 'A steeper gradient means a greater difference in particle density between two regions, driving faster net movement', 'A steeper gradient increases the temperature of the system'], ans: 3 },
  { q: 'In which medium does diffusion occur most rapidly?', opts: ['Gas', 'Liquid', 'Solid', 'Diffusion rate is the same in all media'], ans: 0 },
  { q: 'What happens to the rate of diffusion if the temperature is increased?', opts: ['Rate increases because particles have more kinetic energy and move faster', 'Rate decreases because higher temperature increases intermolecular forces', 'Rate is unchanged because diffusion is independent of temperature', 'Rate first increases then decreases at very high temperatures'], ans: 1 },
  { q: 'The movement of smoke particles viewed through a microscope is described as \'random and erratic\' because', opts: ['air molecules push smoke particles in the same direction repeatedly', 'air molecules randomly bombard smoke particles from all sides with varying forces', 'smoke particles are very large and move slowly in predictable arcs', 'smoke particles have unequal masses causing them to spin unpredictably'], ans: 2 },
  { q: 'Which of the following is NOT a factor that affects the rate of diffusion?', opts: ['Concentration gradient', 'Molecular mass of particles', 'Colour of the diffusing substance', 'Temperature'], ans: 3 },
  { q: 'Lighter gas molecules diffuse faster because', opts: ['they have higher average speeds than heavier molecules at the same temperature', 'they have stronger intermolecular forces that push them further', 'their smaller size allows them to slip between other particles more easily through a tunnel effect', 'lighter molecules carry more kinetic energy at any given temperature'], ans: 0 },
  { q: 'A purple iodine crystal is placed in a beaker of water. After several hours, the water gradually turns purple throughout. This is because of', opts: ['diffusion of iodine particles from the high concentration area near the crystal to the rest of the water', 'convection currents distributing the iodine', 'osmosis of iodine through water', 'chemical reaction of iodine with water molecules'], ans: 1 },
  { q: 'How does surface area affect diffusion?', opts: ['Surface area has no effect on diffusion — only concentration matters', 'Larger surface area increases the rate of diffusion by allowing more particles to pass through simultaneously', 'Larger surface area decreases diffusion rate by spreading particles too thin', 'Smaller surface area increases diffusion rate by concentrating particles'], ans: 2 },
  { q: 'Brownian motion is best described as evidence for which aspect of kinetic particle theory?', opts: ['Temperature determines the size of particles', 'Heavier particles move faster than lighter ones', 'Particles are in continuous random motion', 'Particles are arranged in a regular lattice'], ans: 3 },
  { q: 'Robert Brown originally observed Brownian motion using', opts: ['pollen grains suspended in water', 'smoke particles under a light microscope in air', 'iodine crystals dissolving in ethanol', 'gas molecules in a sealed chamber'], ans: 0 },
  { q: 'What is the formula for density?', opts: ['Density = Mass ÷ Volume', 'Density = Volume ÷ Mass', 'Density = Mass × Volume', 'Density = Volume × Weight'], ans: 1 },
  { q: 'A block has a mass of 200 g and a volume of 50 cm³. What is its density?', opts: ['0.25 g/cm³', '4 g/cm³', '10 000 g/cm³', '250 g/cm³'], ans: 2 },
  { q: 'What are the SI units of density?', opts: ['kg/cm³', 'g/m³', 'kg/m³', 'g/L'], ans: 3 },
  { q: 'Why does ice float on water?', opts: ['Ice is less dense than liquid water because its molecules are held in an open crystal lattice with more space between them', 'Ice floats because it is a solid and all solids float on liquids', 'Ice has a higher surface tension than water', 'Ice molecules are lighter than water molecules individually'], ans: 0 },
  { q: 'The density of ice is approximately 0.92 g/cm³ and the density of liquid water is 1.00 g/cm³. What does this tell us about ice?', opts: ['Ice has less mass per unit volume than water, so it floats', 'Ice has more mass per unit volume than water', 'Ice is more compressible than liquid water', 'Ice has stronger intermolecular forces than liquid water'], ans: 1 },
  { q: 'An object with density 0.8 g/cm³ is placed in water (density 1.0 g/cm³). What happens?', opts: ['It dissolves in the water', 'It floats on the water surface', 'It sinks to the bottom', 'It breaks apart due to water pressure'], ans: 2 },
  { q: 'A submarine dives by taking water into its ballast tanks. This works because', opts: ['the added water compresses the air inside the submarine', 'water in the tanks makes the submarine\'s particles vibrate more slowly', 'taking in water increases the submarine\'s overall density, causing it to sink', 'water makes the submarine\'s hull more streamlined'], ans: 3 },
  { q: 'Why can gases be compressed but solids cannot?', opts: ['Gas particles are far apart with large empty spaces; solid particles are closely packed with no space to compress into', 'Gas particles have weaker bonds than solid particles', 'Gas particles are much smaller than solid particles', 'Gas particles repel each other at long range, making them easy to push together'], ans: 0 },
  { q: 'A hot air balloon rises because', opts: ['heated air inside the balloon is less dense than the cooler surrounding air, producing a net upward force', 'the flame inside the balloon generates an upward force', 'the balloon fabric repels the denser outside air', 'the balloon rises due to electrostatic forces between the balloon and the ground'], ans: 1 },
  { q: 'Which of the following provides direct evidence for the existence of particles?', opts: ['A gas expanding to fill its container', 'Brownian motion of smoke particles under a microscope', 'A solid melting when heated', 'A liquid boiling at a fixed temperature'], ans: 2 },
  { q: 'A pressure cooker cooks food faster than a regular pot because', opts: ['the increased pressure makes water molecules lighter, so they move faster', 'the sealed environment increases the surface area for evaporation', 'higher pressure raises the boiling point of water, allowing cooking at temperatures above 100 °C', 'the sealed lid prevents diffusion of water vapour, concentrating heat inside'], ans: 3 },
  { q: 'Which observation is evidence that gas particles have space between them?', opts: ['Gases can be compressed significantly', 'Gases expand to fill their container', 'Gases have very low density', 'Gases diffuse faster than liquids'], ans: 0 },
  { q: 'Why does an aerosol spray work?', opts: ['A compressed gas propellant expands when the valve opens, pushing liquid out as a fine spray', 'The can contains liquid that boils at room temperature and creates pressure', 'Electricity in the can charges particles, repelling them outward', 'The spray nozzle uses centrifugal force to break the liquid into droplets'], ans: 1 },
  { q: 'You can smell perfume sprayed across the room. Which two particle theory concepts explain this?', opts: ['Latent heat and sublimation', 'Evaporation and diffusion', 'Compression and Brownian motion', 'Condensation and deposition'], ans: 2 },
  { q: 'If the density of an object is GREATER than the density of the fluid it is placed in, the object will', opts: ['remain suspended in the middle', 'rise to the surface then float', 'sink to the bottom', 'float on the surface'], ans: 3 },
  { q: 'What is the volume of a substance that has a mass of 500 g and a density of 2.5 g/cm³?', opts: ['200 cm³', '1250 cm³', '0.005 cm³', '5000 cm³'], ans: 0 },
  { q: 'Which of the following is NOT direct evidence for kinetic particle theory?', opts: ['Liquids always taking the shape of their container', 'Brownian motion of pollen in water', 'Diffusion of gases across a room', 'Compression of gases'], ans: 1 },
  { q: 'A coolant in a refrigerator evaporates inside the cooling compartment and then condenses outside the fridge. What is the role of condensation outside the fridge?', opts: ['Condensation produces work that drives the compressor', 'Condensation releases latent heat to the environment outside the fridge', 'Condensation inside cools the food by removing heat directly', 'Condensation converts the coolant back into a solid for reuse'], ans: 2 },
  { q: 'The density of air at sea level is approximately 1.2 kg/m³. The density of helium is approximately 0.16 kg/m³. A helium balloon rises because', opts: ['helium repels nitrogen and oxygen molecules in air', 'helium has more electrons than air molecules, creating upward electromagnetic force', 'helium is less dense than air, so the buoyant (upward) force exceeds its weight', 'helium gas is hot and rises like smoke'], ans: 3 },
  { q: 'Which application uses the principle that evaporation absorbs latent heat?', opts: ['A refrigerator keeping food cold', 'A pressure cooker cooking food faster', 'An aerosol releasing spray', 'A submarine submerging by taking in water'], ans: 0 },
  { q: 'Why are gases much less dense than solids or liquids?', opts: ['Gas particles are very far apart, so the mass per unit volume is very small', 'Gas particles are made of fewer atoms than solid particles', 'Gas particles have less mass than particles in other states', 'Gas particles move so fast that density cannot be measured accurately'], ans: 1 },
  { q: 'A student calculates the density of a substance and gets 0.002 g/cm³. In which state of matter is this substance most likely?', opts: ['Liquid', 'Gas', 'Solid', 'Could be any state'], ans: 2 },
  { q: 'Which piece of evidence BEST supports the idea that particles in gases are in constant, rapid, random motion?', opts: ['Gases have very low density', 'Gases expand to fill their containers', 'Brownian motion and rapid diffusion in gases', 'Gases can be compressed'], ans: 3 },
  { q: 'An ice cube (density 0.92 g/cm³) floats with most of its volume below the waterline. According to the particle model, why are ice molecules more spread out than liquid water molecules?', opts: ['In ice, molecules are held in an open hexagonal crystal lattice with gaps, whereas liquid water molecules are more randomly packed and closer on average', 'Ice molecules move faster than liquid water molecules, pushing each other apart', 'Freezing causes water molecules to shrink, creating more space around each molecule', 'Ice molecules have weaker bonds than liquid water, allowing them to spread out'], ans: 0 },
  { q: 'Which combination correctly matches an application with the particle theory concept it relies on?', opts: ['Refrigerator → evaporation of coolant absorbs heat; Pressure cooker → higher boiling point at higher pressure', 'Pressure cooker → evaporation cooling the food; Refrigerator → higher boiling point of water', 'Aerosol → diffusion of compressed liquid; Hot air balloon → condensation of heated air', 'Submarine → diffusion of water into ballast tanks; Aerosol → Brownian motion of propellant'], ans: 1 }
]
