export const meta = {
  id: 9, sem: 2,
  title: 'Ray Model of Light',
  desc: 'Reflection, refraction, plane and curved mirrors, dispersion of light'
}

export const notes = `
<div class="notes-card">
  <h3>1. The Ray Model of Light</h3>
  <p>Light travels in <strong>straight lines</strong> — this is called <strong>rectilinear propagation</strong>, and is represented using rays.</p>
  <p><strong>Evidence:</strong> shadows and the pinhole camera.</p>
  <ul>
    <li><strong>Umbra</strong>: region of total shadow (no light reaches)</li>
    <li><strong>Penumbra</strong>: region of partial shadow (some light reaches)</li>
  </ul>
  <div class="formula">Speed of light in vacuum = 3 × 10⁸ m/s (fastest speed in the universe)</div>
  <p>Light is part of the <strong>electromagnetic spectrum</strong>.</p>
  <h4>Luminous vs Non-Luminous Objects</h4>
  <ul>
    <li><strong>Luminous</strong>: produce their own light — sun, flames, electric bulb</li>
    <li><strong>Non-luminous</strong>: visible only by reflected light — moon, book, most everyday objects</li>
  </ul>
  <h4>Optical Materials</h4>
  <ul>
    <li><strong>Opaque</strong>: absorbs/reflects all light; no transmission — wood, metal, brick</li>
    <li><strong>Translucent</strong>: transmits light but scatters it — frosted glass, tissue paper, wax paper</li>
    <li><strong>Transparent</strong>: transmits light clearly with little scattering — clear glass, air, water</li>
  </ul>
  <h4>Pinhole Camera</h4>
  <ul>
    <li>Image is <strong>inverted</strong> (upside-down and laterally inverted)</li>
    <li><strong>Smaller pinhole</strong> → sharper but darker image</li>
    <li><strong>Larger pinhole</strong> → brighter but blurrier image</li>
    <li>Closer object → larger image; farther object → smaller image</li>
  </ul>
</div>

<div class="notes-card">
  <h3>2. Reflection of Light</h3>
  <h4>Laws of Reflection</h4>
  <ol>
    <li>The incident ray, reflected ray, and normal all lie in the <strong>same plane</strong></li>
    <li><strong>Angle of incidence (i) = Angle of reflection (r)</strong> — both measured from the normal</li>
  </ol>
  <p>The <strong>normal</strong> is a line perpendicular to the reflecting surface at the point of incidence.</p>
  <div class="example">If angle of incidence = 35°, then angle of reflection = 35°.</div>
  <h4>Types of Reflection</h4>
  <ul>
    <li><strong>Regular (specular) reflection</strong>: smooth surface (mirror, still water) → parallel rays reflect parallel → clear image</li>
    <li><strong>Diffuse (irregular) reflection</strong>: rough surface (paper, walls) → parallel rays scatter in all directions → no clear image, but lets us see non-luminous objects</li>
  </ul>
  <h4>Plane Mirror — 6 Image Properties</h4>
  <ol>
    <li><strong>Virtual</strong> — cannot be projected on a screen</li>
    <li><strong>Upright</strong> — same vertical orientation as object</li>
    <li><strong>Same size</strong> as the object</li>
    <li><strong>Laterally inverted</strong> — left and right are swapped</li>
    <li>As <strong>far behind</strong> the mirror as the object is in front</li>
    <li><strong>Image distance = Object distance</strong></li>
  </ol>
</div>

<div class="notes-card">
  <h3>3. Curved Mirrors</h3>
  <h4>Concave Mirror (Converging)</h4>
  <ul>
    <li>Curves <strong>inward</strong> (like inside of a spoon or bowl)</li>
    <li><strong>Focal point F</strong>: real — parallel rays converge here after reflection</li>
    <li><strong>Uses</strong>: shaving/make-up mirrors (magnified upright virtual image when object inside F), headlights and torches (object at F → parallel beam), solar cookers, satellite dishes</li>
  </ul>
  <h4>Convex Mirror (Diverging)</h4>
  <ul>
    <li>Curves <strong>outward</strong> (like back of a spoon)</li>
    <li><strong>Focal point F</strong>: virtual — behind the mirror; reflected rays appear to diverge from F</li>
    <li><strong>Image</strong>: always virtual, upright, and diminished (smaller than object)</li>
    <li><strong>Uses</strong>: car side/rear-view mirrors, security mirrors in shops, road safety mirrors at blind corners</li>
    <li><strong>Advantage</strong>: wider field of view than a plane mirror</li>
  </ul>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em">
    <tr style="background:#e8f4f8"><th>Feature</th><th>Concave</th><th>Convex</th></tr>
    <tr><td>Shape</td><td>Curves inward</td><td>Curves outward</td></tr>
    <tr><td>Effect on parallel rays</td><td>Converges (brings together)</td><td>Diverges (spreads out)</td></tr>
    <tr><td>Nature of F</td><td>Real</td><td>Virtual</td></tr>
    <tr><td>Image (object far)</td><td>Real, inverted, diminished</td><td>Always virtual, upright, diminished</td></tr>
    <tr><td>Common use</td><td>Make-up mirror, headlights</td><td>Car side mirror, security mirror</td></tr>
  </table>
</div>

<div class="notes-card">
  <h3>4. Refraction of Light</h3>
  <p><strong>Refraction</strong>: bending of light as it passes from one medium to another, due to a <strong>change in speed</strong>.</p>
  <ul>
    <li>Light <strong>slows down</strong> entering a denser medium → bends <strong>towards</strong> the normal</li>
    <li>Light <strong>speeds up</strong> entering a less dense medium → bends <strong>away from</strong> the normal</li>
    <li>Light hitting surface at 0° to normal (straight on): <strong>no bending</strong></li>
  </ul>
  <div class="formula">Refractive index n = speed of light in vacuum ÷ speed of light in medium = sin i ÷ sin r</div>
  <div class="example">n (glass) ≈ 1.5 &nbsp;|&nbsp; n (water) ≈ 1.33 &nbsp;|&nbsp; n (air) ≈ 1.00</div>
  <h4>Real-Life Effects of Refraction</h4>
  <ul>
    <li><strong>Apparent depth</strong>: pool looks shallower; fish appears closer to surface than it really is</li>
    <li><strong>Bent straw</strong>: straw appears bent at the water surface</li>
    <li><strong>Mirage</strong>: hot air near ground is less dense → light bends away from normal → appears to be a reflection of sky</li>
  </ul>
  <h4>Total Internal Reflection (TIR)</h4>
  <ul>
    <li>Occurs when light travels from a <strong>denser to a less dense</strong> medium AND angle of incidence &gt; critical angle</li>
    <li><strong>Critical angle (c)</strong>: angle at which refracted ray travels along the boundary (refraction angle = 90°)</li>
    <li>At angles &gt; c: all light reflects internally (no refraction)</li>
    <li><strong>Examples</strong>: optical fibres (internet cables, medical endoscopes), diamonds (brilliant sparkle), prisms in periscopes and binoculars</li>
  </ul>
</div>

<div class="notes-card">
  <h3>5. Lenses</h3>
  <h4>Convex Lens (Converging)</h4>
  <ul>
    <li>Thicker in the middle; converges parallel rays to a <strong>real focal point</strong></li>
    <li><strong>Uses</strong>: magnifying glass, camera, projector, human eye (cornea + lens), microscope, telescope</li>
  </ul>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em">
    <tr style="background:#e8f4f8"><th>Object position</th><th>Image nature</th><th>Use</th></tr>
    <tr><td>Beyond 2F</td><td>Real, inverted, diminished</td><td>Camera</td></tr>
    <tr><td>At 2F</td><td>Real, inverted, same size</td><td>—</td></tr>
    <tr><td>Between F and 2F</td><td>Real, inverted, magnified</td><td>Projector</td></tr>
    <tr><td>Inside F</td><td>Virtual, upright, magnified</td><td>Magnifying glass</td></tr>
  </table>
  <h4>Concave Lens (Diverging)</h4>
  <ul>
    <li>Thinner in the middle; diverges rays; focal point is <strong>virtual</strong> (same side as incoming light)</li>
    <li>Image: always <strong>virtual, upright, diminished</strong></li>
    <li><strong>Uses</strong>: corrects short-sightedness (myopia); peephole/door viewer</li>
  </ul>
</div>

<div class="notes-card">
  <h3>6. Dispersion and the Electromagnetic Spectrum</h3>
  <h4>Dispersion of White Light</h4>
  <p>White light is a <strong>mixture of all colours</strong> of visible light. A prism disperses it into a spectrum.</p>
  <div class="formula">ROY G BIV — Red Orange Yellow Green Blue Indigo Violet</div>
  <ul>
    <li><strong>Red</strong>: longest wavelength, <strong>least refracted</strong></li>
    <li><strong>Violet</strong>: shortest wavelength, <strong>most refracted</strong></li>
    <li><strong>Rainbow</strong>: caused by refraction + dispersion + internal reflection inside water droplets</li>
  </ul>
  <h4>Electromagnetic Spectrum</h4>
  <p>In order of <strong>increasing frequency / decreasing wavelength</strong>:</p>
  <div class="example">Radio → Microwaves → Infrared → Visible light → Ultraviolet → X-rays → Gamma rays</div>
  <p>All EM waves: travel at 3 × 10⁸ m/s in vacuum, are transverse waves, can travel through vacuum.</p>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em">
    <tr style="background:#e8f4f8"><th>Wave</th><th>Uses</th></tr>
    <tr><td>Radio</td><td>Broadcasting, WiFi</td></tr>
    <tr><td>Microwaves</td><td>Cooking, mobile phones, radar</td></tr>
    <tr><td>Infrared</td><td>TV remote, thermal imaging, night vision, optical fibres</td></tr>
    <tr><td>Visible</td><td>Sight, photography</td></tr>
    <tr><td>Ultraviolet</td><td>Sterilisation, fluorescent lamps, vitamin D production</td></tr>
    <tr><td>X-rays</td><td>Medical imaging, security scanners</td></tr>
    <tr><td>Gamma rays</td><td>Cancer treatment (radiotherapy), sterilising medical equipment</td></tr>
  </table>
</div>

<div class="notes-card">
  <h3>7. The Human Eye and Vision Defects</h3>
  <h4>Parts of the Eye</h4>
  <ul>
    <li><strong>Cornea</strong>: transparent front surface; main refracting surface (~70% of focusing power)</li>
    <li><strong>Lens</strong>: adjustable focusing (accommodation) — ciliary muscles change lens shape</li>
    <li><strong>Iris</strong>: controls amount of light entering by changing pupil size</li>
    <li><strong>Retina</strong>: light-sensitive layer; <strong>rods</strong> (monochromatic/dim light) and <strong>cones</strong> (colour/bright light)</li>
    <li><strong>Optic nerve</strong>: carries signals from retina to brain</li>
    <li><strong>Vitreous/aqueous humour</strong>: transparent fluid filling the eye</li>
  </ul>
  <h4>Vision Defects</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em">
    <tr style="background:#e8f4f8"><th>Defect</th><th>Cause</th><th>Correction</th></tr>
    <tr><td><strong>Myopia</strong> (short-sightedness)</td><td>Eyeball too long OR lens too converging; image forms in FRONT of retina; can see near not far</td><td>Concave (diverging) lens</td></tr>
    <tr><td><strong>Hyperopia</strong> (long-sightedness)</td><td>Eyeball too short OR lens too flat; image forms BEHIND retina; can see far not near</td><td>Convex (converging) lens</td></tr>
  </table>
  <div class="example">Accommodation: the ability of the eye to change focus from near to far objects by changing the curvature of the lens (ciliary muscles contract for near objects, making lens more curved).</div>
</div>
`;

export const questions = [
  { q: 'What term describes light travelling in straight lines?', opts: ['Rectilinear propagation', 'Diffraction', 'Refraction', 'Dispersion'], ans: 0, explain: 'The correct answer is: Rectilinear propagation.' },
  { q: 'What is the speed of light in a vacuum?', opts: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'], ans: 1, explain: 'The correct answer is: 3 × 10⁸ m/s.' },
  { q: 'Which of the following is a luminous object?', opts: ['Moon', 'Book', 'Electric bulb', 'Mirror'], ans: 2, explain: 'The correct answer is: Electric bulb.' },
  { q: 'A non-luminous object is visible because it:', opts: ['Generates its own light', 'Absorbs all light', 'Emits infrared radiation', 'Reflects light from another source'], ans: 3, explain: 'The correct answer is: Reflects light from another source.' },
  { q: 'Which material is described as opaque?', opts: ['A wooden plank', 'Frosted glass', 'Clear glass', 'Water'], ans: 0, explain: 'The correct answer is: A wooden plank.' },
  { q: 'Frosted glass is an example of which type of material?', opts: ['Opaque', 'Translucent', 'Transparent', 'Luminous'], ans: 1, explain: 'The correct answer is: Translucent.' },
  { q: 'Clear glass allows light to pass through with little scattering. It is:', opts: ['Opaque', 'Luminous', 'Transparent', 'Translucent'], ans: 2, explain: 'The correct answer is: Transparent.' },
  { q: 'The region of total shadow where no light reaches is called the:', opts: ['Penumbra', 'Eclipse', 'Diffraction zone', 'Umbra'], ans: 3, explain: 'The correct answer is: Umbra.' },
  { q: 'The penumbra is a region of:', opts: ['Partial shadow', 'Total shadow', 'Bright light', 'Diffraction'], ans: 0, explain: 'The correct answer is: Partial shadow.' },
  { q: 'A pinhole camera forms an image that is:', opts: ['Upright and magnified', 'Inverted', 'The same orientation as the object', 'Virtual'], ans: 1, explain: 'The correct answer is: Inverted.' },
  { q: 'What happens to the image in a pinhole camera when the pinhole is made smaller?', opts: ['Image becomes brighter and blurrier', 'Image disappears', 'Image becomes sharper but darker', 'Image becomes larger'], ans: 2, explain: 'The correct answer is: Image becomes sharper but darker.' },
  { q: 'Which of the following is NOT evidence for rectilinear propagation of light?', opts: ['Formation of shadows', 'Pinhole camera image', 'Umbra and penumbra', 'Refraction of light'], ans: 3, explain: 'The correct answer is: Refraction of light.' },
  { q: 'Light is part of the:', opts: ['Electromagnetic spectrum', 'Sound spectrum', 'Nuclear spectrum', 'Mechanical wave spectrum'], ans: 0, explain: 'The correct answer is: Electromagnetic spectrum.' },
  { q: 'Making the pinhole in a pinhole camera larger will:', opts: ['Make the image sharper', 'Make the image brighter but blurrier', 'Invert the image', 'Reduce image size'], ans: 1, explain: 'The correct answer is: Make the image brighter but blurrier.' },
  { q: 'The moon is best described as:', opts: ['Luminous', 'Transparent', 'Non-luminous', 'Opaque and luminous'], ans: 2, explain: 'The correct answer is: Non-luminous.' },
  { q: 'Tissue paper is classified as:', opts: ['Transparent', 'Opaque', 'Luminous', 'Translucent'], ans: 3, explain: 'The correct answer is: Translucent.' },
  { q: 'What causes shadows to form?', opts: ['Light travels in straight lines and cannot bend around opaque objects', 'Light is absorbed by translucent materials', 'Light refracts around objects', 'Light diffracts around edges'], ans: 0, explain: 'The correct answer is: Light travels in straight lines and cannot bend around opaque objects.' },
  { q: 'In a pinhole camera, if the object is moved closer to the pinhole, the image will:', opts: ['Become smaller', 'Become larger', 'Become more blurry', 'Become upright'], ans: 1, explain: 'The correct answer is: Become larger.' },
  { q: 'Which of the following objects is luminous?', opts: ['A polished mirror', 'The planet Venus', 'A burning candle', 'A white sheet of paper'], ans: 2, explain: 'The correct answer is: A burning candle.' },
  { q: 'Air is best described as which type of optical material?', opts: ['Opaque', 'Translucent', 'Diffuse', 'Transparent'], ans: 3, explain: 'The correct answer is: Transparent.' },
  { q: 'The angle of incidence is measured between the incident ray and the:', opts: ['Normal to the surface', 'Reflecting surface', 'Refracted ray', 'Emergent ray'], ans: 0, explain: 'The correct answer is: Normal to the surface.' },
  { q: 'According to the law of reflection, the angle of incidence equals:', opts: ['The angle between the ray and the surface', 'The angle of reflection', 'The critical angle', 'The angle of refraction'], ans: 1, explain: 'The correct answer is: The angle of reflection.' },
  { q: 'The normal to a mirror surface is:', opts: ['Parallel to the mirror surface', 'At 45° to the mirror surface', 'Perpendicular to the mirror surface', 'The same as the incident ray'], ans: 2, explain: 'The correct answer is: Perpendicular to the mirror surface.' },
  { q: 'If the angle of incidence is 40°, the angle of reflection is:', opts: ['80°', '50°', '20°', '40°'], ans: 3, explain: 'The correct answer is: 40°.' },
  { q: 'Regular (specular) reflection occurs on:', opts: ['Smooth surfaces like a mirror or still water', 'Rough surfaces like paper', 'All transparent materials', 'Translucent surfaces only'], ans: 0, explain: 'The correct answer is: Smooth surfaces like a mirror or still water.' },
  { q: 'Diffuse reflection occurs when:', opts: ['Light hits a perfectly smooth surface', 'Parallel rays scatter in different directions off a rough surface', 'Light is totally internally reflected', 'Light passes through a prism'], ans: 1, explain: 'The correct answer is: Parallel rays scatter in different directions off a rough surface.' },
  { q: 'Why can we see non-luminous objects such as a wall?', opts: ['They emit infrared radiation visible to the eye', 'They produce their own light', 'Diffuse reflection from their rough surfaces reaches our eyes', 'They are transparent and let light through'], ans: 2, explain: 'The correct answer is: Diffuse reflection from their rough surfaces reaches our eyes.' },
  { q: 'A plane mirror image is described as virtual. This means:', opts: ['It is smaller than the object', 'It is behind the object', 'It is the same size as the object', 'It cannot be projected onto a screen'], ans: 3, explain: 'The correct answer is: It cannot be projected onto a screen.' },
  { q: 'How does the image distance in a plane mirror compare with the object distance?', opts: ['Image distance equals object distance', 'Image distance is greater', 'Image distance is smaller', 'There is no fixed relationship'], ans: 0, explain: 'The correct answer is: Image distance equals object distance.' },
  { q: 'A plane mirror image is laterally inverted. This means:', opts: ['The image is upside down', 'Left and right are swapped', 'The image is smaller', 'The image is real'], ans: 1, explain: 'The correct answer is: Left and right are swapped.' },
  { q: 'Which of the following is NOT a property of a plane mirror image?', opts: ['Virtual', 'Upright', 'Real and projectable', 'Same size as object'], ans: 2, explain: 'The correct answer is: Real and projectable.' },
  { q: 'In the laws of reflection, which three things must lie in the same plane?', opts: ['Incident ray, mirror, and normal', 'Reflected ray, mirror, and refracted ray', 'Incident ray, mirror, and reflected ray', 'Incident ray, reflected ray, and normal'], ans: 3, explain: 'The correct answer is: Incident ray, reflected ray, and normal.' },
  { q: 'An object is placed 10 cm in front of a plane mirror. The image is located:', opts: ['10 cm behind the mirror', '10 cm in front of the mirror', '20 cm behind the mirror', '5 cm behind the mirror'], ans: 0, explain: 'The correct answer is: 10 cm behind the mirror.' },
  { q: 'Which type of reflection allows us to see our reflection clearly in a still pond?', opts: ['Diffuse reflection', 'Regular (specular) reflection', 'Total internal reflection', 'Irregular reflection'], ans: 1, explain: 'The correct answer is: Regular (specular) reflection.' },
  { q: 'If a person stands 3 m from a plane mirror, how far is the image from the person?', opts: ['6 m', 'The image cannot form at that distance', 'Actually 6 m — image is 3 m behind mirror, person is 3 m in front', '3 m'], ans: 2, explain: 'The correct answer is: Actually 6 m — image is 3 m behind mirror, person is 3 m in front.' },
  { q: 'The image formed by a plane mirror is:', opts: ['Real, inverted, same size', 'Virtual, inverted, same size', 'Real, upright, same size', 'Virtual, upright, same size'], ans: 3, explain: 'The correct answer is: Virtual, upright, same size.' },
  { q: 'Why does a rough road appear non-reflective compared to a wet road?', opts: ['Rough surface causes diffuse reflection; wet surface causes regular reflection', 'Rough surface absorbs all light', 'Wet surface causes diffuse reflection', 'Rough surface is transparent'], ans: 0, explain: 'The correct answer is: Rough surface causes diffuse reflection; wet surface causes regular reflection.' },
  { q: 'If you tilt a mirror so the angle of incidence increases from 30° to 50°, the angle of reflection:', opts: ['Stays at 30°', 'Also increases to 50°', 'Decreases to 10°', 'Becomes 80°'], ans: 1, explain: 'The correct answer is: Also increases to 50°.' },
  { q: 'A plane mirror produces an image that is the same size as the object. This property is called:', opts: ['Diminished image', 'Virtual image', 'Unit magnification', 'Lateral inversion'], ans: 2, explain: 'The correct answer is: Unit magnification.' },
  { q: 'When you write the letter \'R\' and hold it in front of a plane mirror, the reflected letter looks like:', opts: ['R (unchanged)', 'r (lowercase)', 'Я flipped upside-down', 'Я (laterally inverted)'], ans: 3, explain: 'The correct answer is: Я (laterally inverted).' },
  { q: 'The law of reflection applies to:', opts: ['Both regular and diffuse reflection', 'Only regular reflection', 'Only diffuse reflection', 'Only curved mirrors'], ans: 0, explain: 'The correct answer is: Both regular and diffuse reflection.' },
  { q: 'An incident ray strikes a mirror at 90° to the surface (i.e., along the normal). It reflects:', opts: ['At 45° to the normal', 'Straight back along the normal (0° reflection)', 'At 90° to the normal', 'At 180° to the incident ray'], ans: 1, explain: 'The correct answer is: Straight back along the normal (0° reflection).' },
  { q: 'Which best explains why a page of paper is white but is not a mirror?', opts: ['Paper absorbs all visible light', 'Paper is transparent', 'Paper has a rough surface causing diffuse reflection', 'Paper undergoes total internal reflection'], ans: 2, explain: 'The correct answer is: Paper has a rough surface causing diffuse reflection.' },
  { q: 'A plane mirror image is always:', opts: ['Real', 'Inverted', 'Magnified', 'The same size as the object'], ans: 3, explain: 'The correct answer is: The same size as the object.' },
  { q: 'The incident ray, reflected ray, and normal all lie in the same plane. This is:', opts: ['The first law of reflection', 'Snell\'s Law', 'The law of refraction', 'The law of dispersion'], ans: 0, explain: 'The correct answer is: The first law of reflection.' },
  { q: 'A concave mirror curves:', opts: ['Outward like the back of a spoon', 'Inward like the inside of a bowl', 'In both directions', 'Flat at the centre'], ans: 1, explain: 'The correct answer is: Inward like the inside of a bowl.' },
  { q: 'The focal point of a concave mirror is:', opts: ['Virtual, behind the mirror', 'At the mirror surface', 'Real, in front of the mirror where parallel rays converge', 'At infinity'], ans: 2, explain: 'The correct answer is: Real, in front of the mirror where parallel rays converge.' },
  { q: 'Which device uses a concave mirror to produce a parallel beam of light?', opts: ['Car side mirror', 'Security mirror', 'Periscope', 'Torch or headlight'], ans: 3, explain: 'The correct answer is: Torch or headlight.' },
  { q: 'A convex mirror always produces an image that is:', opts: ['Virtual, upright, and diminished', 'Real, inverted, and magnified', 'Virtual, inverted, and same size', 'Real, upright, and diminished'], ans: 0, explain: 'The correct answer is: Virtual, upright, and diminished.' },
  { q: 'The focal point of a convex mirror is:', opts: ['Real, in front of the mirror', 'Virtual, behind the mirror', 'At the centre of curvature', 'On the principal axis in front'], ans: 1, explain: 'The correct answer is: Virtual, behind the mirror.' },
  { q: 'Car side mirrors use convex mirrors because they:', opts: ['Produce magnified images of objects behind', 'Focus light to a point', 'Provide a wider field of view than plane mirrors', 'Produce real images'], ans: 2, explain: 'The correct answer is: Provide a wider field of view than plane mirrors.' },
  { q: 'A concave mirror is used as a make-up mirror because, when the object is inside the focal length, it produces an image that is:', opts: ['Real, inverted, magnified', 'Virtual, inverted, diminished', 'Real, upright, same size', 'Virtual, upright, magnified'], ans: 3, explain: 'The correct answer is: Virtual, upright, magnified.' },
  { q: 'Which of the following is a use of a convex mirror?', opts: ['Security mirror in a supermarket', 'Make-up mirror', 'Solar cooker', 'Projector'], ans: 0, explain: 'The correct answer is: Security mirror in a supermarket.' },
  { q: 'For a concave mirror, if the object is placed beyond the centre of curvature (beyond 2F), the image is:', opts: ['Virtual, upright, magnified', 'Real, inverted, diminished', 'Virtual, upright, diminished', 'Real, upright, same size'], ans: 1, explain: 'The correct answer is: Real, inverted, diminished.' },
  { q: 'Which mirror converges parallel rays of light to a focal point?', opts: ['Plane mirror', 'Convex mirror', 'Concave mirror', 'Both convex and plane mirrors'], ans: 2, explain: 'The correct answer is: Concave mirror.' },
  { q: 'Which mirror diverges parallel rays of light, making them appear to come from a virtual focal point?', opts: ['Concave mirror', 'Plane mirror', 'Parabolic mirror', 'Convex mirror'], ans: 3, explain: 'The correct answer is: Convex mirror.' },
  { q: 'Satellite dishes are shaped like concave mirrors because they:', opts: ['Converge incoming signals/radiation to a focal point', 'Diverge incoming signals', 'Reflect signals at 90°', 'Produce a virtual image of the satellite'], ans: 0, explain: 'The correct answer is: Converge incoming signals/radiation to a focal point.' },
  { q: 'A road safety mirror at a blind corner is which type of mirror?', opts: ['Plane mirror', 'Convex mirror', 'Concave mirror', 'Parabolic mirror'], ans: 1, explain: 'The correct answer is: Convex mirror.' },
  { q: 'A concave mirror with an object placed at the focal point F produces:', opts: ['A real, inverted, diminished image', 'A virtual, upright, magnified image', 'A parallel beam of reflected light (image at infinity)', 'A real, same-size image'], ans: 2, explain: 'The correct answer is: A parallel beam of reflected light (image at infinity).' },
  { q: 'The image in a convex mirror is always:', opts: ['Real and inverted', 'Real and upright', 'Virtual and inverted', 'Virtual and upright'], ans: 3, explain: 'The correct answer is: Virtual and upright.' },
  { q: 'Compared to a plane mirror of the same size, a convex mirror has:', opts: ['A wider field of view', 'A narrower field of view', 'The same field of view', 'No field of view'], ans: 0, explain: 'The correct answer is: A wider field of view.' },
  { q: 'Which pair of mirrors is used in solar cookers?', opts: ['Convex mirrors', 'Concave mirrors', 'Plane mirrors', 'Plane and convex mirrors'], ans: 1, explain: 'The correct answer is: Concave mirrors.' },
  { q: 'An image that can be projected onto a screen is called:', opts: ['Virtual', 'Upright', 'Real', 'Diminished'], ans: 2, explain: 'The correct answer is: Real.' },
  { q: 'A concave mirror is a __________ mirror.', opts: ['Diverging', 'Plane', 'Virtual-focal-point', 'Converging'], ans: 3, explain: 'The correct answer is: Converging.' },
  { q: 'A convex mirror is a __________ mirror.', opts: ['Diverging', 'Converging', 'Plane', 'Concave'], ans: 0, explain: 'The correct answer is: Diverging.' },
  { q: 'Refraction of light occurs because of a change in:', opts: ['Wavelength only', 'Speed as light passes from one medium to another', 'Frequency only', 'Amplitude'], ans: 1, explain: 'The correct answer is: Speed as light passes from one medium to another.' },
  { q: 'When light enters a denser medium (e.g., from air into glass), it:', opts: ['Speeds up and bends away from the normal', 'Travels straight without bending', 'Slows down and bends towards the normal', 'Reflects completely'], ans: 2, explain: 'The correct answer is: Slows down and bends towards the normal.' },
  { q: 'When light moves from glass into air, the angle of refraction is __________ the angle of incidence.', opts: ['Equal to', 'Less than', 'Exactly half of', 'Greater than'], ans: 3, explain: 'The correct answer is: Greater than.' },
  { q: 'A ray of light hits a glass surface perpendicularly (at 0° to the normal). It:', opts: ['Passes straight through without bending', 'Bends towards the normal', 'Undergoes total internal reflection', 'Bends away from the normal'], ans: 0, explain: 'The correct answer is: Passes straight through without bending.' },
  { q: 'The refractive index of glass is approximately:', opts: ['1.00', '1.5', '2.5', '0.67'], ans: 1, explain: 'The correct answer is: 1.5.' },
  { q: 'The refractive index of water is approximately:', opts: ['1.00', '1.5', '1.33', '2.0'], ans: 2, explain: 'The correct answer is: 1.33.' },
  { q: 'The formula for refractive index n is:', opts: ['n = speed in medium ÷ speed in vacuum', 'n = sin r ÷ sin i', 'n = wavelength in vacuum ÷ wavelength in medium', 'n = speed of light in vacuum ÷ speed of light in medium'], ans: 3, explain: 'The correct answer is: n = speed of light in vacuum ÷ speed of light in medium.' },
  { q: 'A swimming pool appears shallower than it really is. This is due to:', opts: ['Apparent depth caused by refraction', 'Reflection of light off the surface', 'Diffraction of light', 'Total internal reflection'], ans: 0, explain: 'The correct answer is: Apparent depth caused by refraction.' },
  { q: 'A straw placed in a glass of water appears bent at the water surface. This illustrates:', opts: ['Reflection of light', 'Refraction of light', 'Diffraction of light', 'Dispersion of light'], ans: 1, explain: 'The correct answer is: Refraction of light.' },
  { q: 'A mirage on a hot road is caused by:', opts: ['Reflection of sky off water on the road', 'Scattering of light by dust particles', 'Refraction of light through layers of air with different densities', 'Diffraction of light around road surface'], ans: 2, explain: 'The correct answer is: Refraction of light through layers of air with different densities.' },
  { q: 'Total internal reflection can only occur when light travels from:', opts: ['A less dense to a denser medium', 'Air into water', 'A vacuum into glass', 'A denser to a less dense medium, with angle of incidence greater than critical angle'], ans: 3, explain: 'The correct answer is: A denser to a less dense medium, with angle of incidence greater than critical angle.' },
  { q: 'The critical angle is the angle of incidence at which the refracted ray:', opts: ['Travels along the boundary (refraction angle = 90°)', 'Is completely absorbed', 'Equals the angle of reflection', 'Reverses direction'], ans: 0, explain: 'The correct answer is: Travels along the boundary (refraction angle = 90°).' },
  { q: 'Optical fibres use total internal reflection to:', opts: ['Produce coloured light', 'Transmit light signals with minimal loss along the fibre', 'Magnify images', 'Disperse white light'], ans: 1, explain: 'The correct answer is: Transmit light signals with minimal loss along the fibre.' },
  { q: 'Medical endoscopes use optical fibres because:', opts: ['They are cheap to produce', 'They can generate their own light', 'Total internal reflection allows light to travel around bends inside the body', 'They are transparent to X-rays'], ans: 2, explain: 'The correct answer is: Total internal reflection allows light to travel around bends inside the body.' },
  { q: 'The sparkling brilliance of a diamond is due to:', opts: ['Its transparent nature only', 'Regular reflection off the flat surfaces', 'Dispersion alone', 'Its high refractive index causing total internal reflection of most light'], ans: 3, explain: 'The correct answer is: Its high refractive index causing total internal reflection of most light.' },
  { q: 'As light moves from air (n=1.00) into glass (n=1.5), the angle of refraction is:', opts: ['Less than the angle of incidence', 'Equal to the angle of incidence', 'Greater than the angle of incidence', 'Zero regardless of angle of incidence'], ans: 0, explain: 'The correct answer is: Less than the angle of incidence.' },
  { q: 'Prisms in periscopes and binoculars work by:', opts: ['Refracting light to change its colour', 'Total internal reflection to redirect light beams', 'Diffuse reflection', 'Dispersion into a spectrum'], ans: 1, explain: 'The correct answer is: Total internal reflection to redirect light beams.' },
  { q: 'If the angle of incidence in glass is less than the critical angle, the light will:', opts: ['Be totally internally reflected', 'Travel along the boundary', 'Refract out into the less dense medium', 'Be absorbed by the glass'], ans: 2, explain: 'The correct answer is: Refract out into the less dense medium.' },
  { q: 'A fish underwater appears closer to the surface than it actually is because of:', opts: ['Reflection', 'Dispersion', 'Diffraction', 'Refraction (apparent depth effect)'], ans: 3, explain: 'The correct answer is: Refraction (apparent depth effect).' },
  { q: 'Which phenomenon explains why the sky appears to shimmer and objects appear to float above the ground on a very hot day?', opts: ['Mirage due to refraction through hot air of different densities', 'Reflection off the ground', 'Dispersion of sunlight', 'Diffraction around objects'], ans: 0, explain: 'The correct answer is: Mirage due to refraction through hot air of different densities.' },
  { q: 'When light crosses from air to water, frequency:', opts: ['Increases', 'Stays the same', 'Decreases', 'Doubles'], ans: 1, explain: 'The correct answer is: Stays the same.' },
  { q: 'In Snell\'s law, sin i / sin r = n. If i = 30° and n = 1.5 (air to glass), sin r =', opts: ['0.75', '0.866', '0.333', '0.5'], ans: 2, explain: 'The correct answer is: 0.333.' },
  { q: 'Which of the following is NOT caused by refraction?', opts: ['Apparent depth of a pool', 'Bending of a straw in water', 'Mirage on a road', 'Formation of a shadow'], ans: 3, explain: 'The correct answer is: Formation of a shadow.' },
  { q: 'The refractive index of air is approximately:', opts: ['1.00', '1.33', '1.5', '2.0'], ans: 0, explain: 'The correct answer is: 1.00.' },
  { q: 'For total internal reflection to occur, the angle of incidence must be:', opts: ['Less than the critical angle', 'Greater than the critical angle', 'Equal to 90°', 'Equal to 45°'], ans: 1, explain: 'The correct answer is: Greater than the critical angle.' },
  { q: 'A convex lens is thicker in the middle. It is also called a __________ lens.', opts: ['Diverging', 'Concave', 'Converging', 'Plano-concave'], ans: 2, explain: 'The correct answer is: Converging.' },
  { q: 'A concave lens is thinner in the middle. It is also called a __________ lens.', opts: ['Converging', 'Biconvex', 'Plano-convex', 'Diverging'], ans: 3, explain: 'The correct answer is: Diverging.' },
  { q: 'When an object is placed beyond 2F of a convex lens, the image is:', opts: ['Real, inverted, and diminished', 'Virtual, upright, and magnified', 'Real, upright, and same size', 'Virtual, inverted, and diminished'], ans: 0, explain: 'The correct answer is: Real, inverted, and diminished.' },
  { q: 'A camera uses a convex lens with the object beyond 2F. The image on the film is:', opts: ['Virtual, upright, magnified', 'Real, inverted, diminished', 'Real, upright, same size', 'Virtual, inverted, magnified'], ans: 1, explain: 'The correct answer is: Real, inverted, diminished.' },
  { q: 'A projector forms an image when the object (film/slide) is placed between F and 2F of a convex lens. The image on the screen is:', opts: ['Virtual, upright, diminished', 'Real, inverted, diminished', 'Real, inverted, magnified', 'Virtual, upright, magnified'], ans: 2, explain: 'The correct answer is: Real, inverted, magnified.' },
  { q: 'A magnifying glass works when the object is placed inside F of a convex lens. The image seen is:', opts: ['Real, inverted, magnified', 'Real, upright, diminished', 'Virtual, inverted, magnified', 'Virtual, upright, magnified'], ans: 3, explain: 'The correct answer is: Virtual, upright, magnified.' },
  { q: 'The focal point of a concave (diverging) lens is:', opts: ['Virtual, on the same side as the incoming light', 'Real, on the opposite side from the incoming light', 'At the lens surface', 'At infinity'], ans: 0, explain: 'The correct answer is: Virtual, on the same side as the incoming light.' },
  { q: 'A concave lens always produces an image that is:', opts: ['Real, inverted, magnified', 'Virtual, upright, diminished', 'Real, upright, same size', 'Virtual, inverted, diminished'], ans: 1, explain: 'The correct answer is: Virtual, upright, diminished.' },
  { q: 'Which lens is used to correct myopia (short-sightedness)?', opts: ['Convex lens', 'Plano-convex lens', 'Concave lens', 'Biconvex lens'], ans: 2, explain: 'The correct answer is: Concave lens.' },
  { q: 'Which lens is used to correct hyperopia (long-sightedness)?', opts: ['Concave lens', 'Plano-concave lens', 'Diverging lens', 'Convex lens'], ans: 3, explain: 'The correct answer is: Convex lens.' },
  { q: 'The human eye uses which combination to focus light on the retina?', opts: ['Cornea and crystalline lens (convex) working together', 'Only the cornea', 'Only the crystalline lens', 'A concave lens in the cornea'], ans: 0, explain: 'The correct answer is: Cornea and crystalline lens (convex) working together.' },
  { q: 'A microscope uses convex lenses to produce images that are:', opts: ['Virtual and diminished', 'Highly magnified', 'Real and same size', 'Inverted and diminished'], ans: 1, explain: 'The correct answer is: Highly magnified.' },
  { q: 'Which of the following uses a convex lens to produce a virtual, upright, magnified image?', opts: ['Camera', 'Projector', 'Magnifying glass', 'Telescope objective'], ans: 2, explain: 'The correct answer is: Magnifying glass.' },
  { q: 'A peephole (door viewer) uses which type of lens?', opts: ['Convex lens (for magnification)', 'Plane mirror', 'Convex lens (for field of view)', 'Concave lens (for wide field of view)'], ans: 3, explain: 'The correct answer is: Concave lens (for wide field of view).' },
  { q: 'When a convex lens is used as a projector, the object must be placed:', opts: ['Between F and 2F', 'Beyond 2F', 'Inside F', 'At F'], ans: 0, explain: 'The correct answer is: Between F and 2F.' },
  { q: 'Parallel rays passing through a convex lens converge at:', opts: ['The centre of the lens', 'The focal point F on the other side', 'The centre of curvature', 'The same side as the incoming light'], ans: 1, explain: 'The correct answer is: The focal point F on the other side.' },
  { q: 'Parallel rays passing through a concave lens appear to diverge from:', opts: ['A real focal point in front', 'The centre of the lens', 'A virtual focal point on the same side as the incoming light', 'A point at infinity'], ans: 2, explain: 'The correct answer is: A virtual focal point on the same side as the incoming light.' },
  { q: 'An object placed at 2F of a convex lens produces an image that is:', opts: ['Virtual, upright, same size', 'Real, inverted, magnified', 'Virtual, inverted, same size', 'Real, inverted, same size'], ans: 3, explain: 'The correct answer is: Real, inverted, same size.' },
  { q: 'Which characteristic is shared by images from both a convex mirror and a concave lens?', opts: ['Virtual, upright, and diminished', 'Real, inverted, and diminished', 'Virtual, inverted, and magnified', 'Real, upright, and same size'], ans: 0, explain: 'The correct answer is: Virtual, upright, and diminished.' },
  { q: 'A telescope uses two convex lenses. The objective lens (facing the distant object) produces a:', opts: ['Virtual, upright, magnified image', 'Real, inverted, diminished image used as the object for the eyepiece', 'Real, upright, same-size image', 'Virtual, inverted, magnified image'], ans: 1, explain: 'The correct answer is: Real, inverted, diminished image used as the object for the eyepiece.' },
  { q: 'White light passing through a prism is separated into colours. This is called:', opts: ['Reflection', 'Refraction only', 'Dispersion', 'Total internal reflection'], ans: 2, explain: 'The correct answer is: Dispersion.' },
  { q: 'What is the correct order of colours in the visible spectrum from longest to shortest wavelength?', opts: ['Violet, Indigo, Blue, Green, Yellow, Orange, Red', 'Blue, Green, Yellow, Orange, Red, Indigo, Violet', 'Green, Yellow, Orange, Red, Violet, Indigo, Blue', 'Red, Orange, Yellow, Green, Blue, Indigo, Violet'], ans: 3, explain: 'The correct answer is: Red, Orange, Yellow, Green, Blue, Indigo, Violet.' },
  { q: 'Which colour of light is least refracted when passing through a prism?', opts: ['Red', 'Orange', 'Yellow', 'Violet'], ans: 0, explain: 'The correct answer is: Red.' },
  { q: 'Which colour of light is most refracted when passing through a prism?', opts: ['Red', 'Violet', 'Orange', 'Yellow'], ans: 1, explain: 'The correct answer is: Violet.' },
  { q: 'A rainbow is formed by:', opts: ['Reflection only inside water droplets', 'Dispersion only by water droplets', 'Refraction, dispersion, and internal reflection inside water droplets', 'Diffraction of light through water droplets'], ans: 2, explain: 'The correct answer is: Refraction, dispersion, and internal reflection inside water droplets.' },
  { q: 'The electromagnetic spectrum, in order of increasing frequency, starts with:', opts: ['Gamma rays', 'X-rays', 'Visible light', 'Radio waves'], ans: 3, explain: 'The correct answer is: Radio waves.' },
  { q: 'All electromagnetic waves in a vacuum travel at:', opts: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', 'The speed of sound', 'Different speeds depending on wavelength'], ans: 0, explain: 'The correct answer is: 3 × 10⁸ m/s.' },
  { q: 'Electromagnetic waves are classified as:', opts: ['Longitudinal waves that need a medium', 'Transverse waves that can travel through a vacuum', 'Longitudinal waves that can travel through a vacuum', 'Transverse waves that need a medium'], ans: 1, explain: 'The correct answer is: Transverse waves that can travel through a vacuum.' },
  { q: 'Which electromagnetic wave is used in TV remote controls?', opts: ['Microwaves', 'Ultraviolet', 'Infrared', 'Radio waves'], ans: 2, explain: 'The correct answer is: Infrared.' },
  { q: 'Which electromagnetic wave is used to cook food in a microwave oven?', opts: ['Infrared', 'Radio waves', 'X-rays', 'Microwaves'], ans: 3, explain: 'The correct answer is: Microwaves.' },
  { q: 'X-rays are used in hospitals mainly for:', opts: ['Medical imaging of bones and internal structures', 'Sterilising medical equipment only', 'Cancer treatment only', 'Thermal imaging'], ans: 0, explain: 'The correct answer is: Medical imaging of bones and internal structures.' },
  { q: 'Which type of electromagnetic radiation is used in radiotherapy to treat cancer?', opts: ['X-rays only', 'Gamma rays', 'Ultraviolet rays', 'Infrared rays'], ans: 1, explain: 'The correct answer is: Gamma rays.' },
  { q: 'Ultraviolet radiation from the sun enables the skin to produce:', opts: ['Vitamin C', 'Vitamin A', 'Vitamin D', 'Vitamin B12'], ans: 2, explain: 'The correct answer is: Vitamin D.' },
  { q: 'In the electromagnetic spectrum, which has the shortest wavelength?', opts: ['Radio waves', 'Microwaves', 'Infrared', 'Gamma rays'], ans: 3, explain: 'The correct answer is: Gamma rays.' },
  { q: 'In the electromagnetic spectrum, which has the longest wavelength?', opts: ['Radio waves', 'Microwaves', 'Infrared', 'Visible light'], ans: 0, explain: 'The correct answer is: Radio waves.' },
  { q: 'Which part of the eye is the main refracting surface, providing about 70% of the eye\'s focusing power?', opts: ['Lens', 'Cornea', 'Retina', 'Iris'], ans: 1, explain: 'The correct answer is: Cornea.' },
  { q: 'The lens of the eye is adjusted by which muscles?', opts: ['Iris muscles', 'Retina muscles', 'Ciliary muscles', 'Optic muscles'], ans: 2, explain: 'The correct answer is: Ciliary muscles.' },
  { q: 'The ability of the eye to change focus between near and far objects is called:', opts: ['Refraction', 'Dispersion', 'Diffraction', 'Accommodation'], ans: 3, explain: 'The correct answer is: Accommodation.' },
  { q: 'Which cells in the retina are responsible for detecting colour in bright light?', opts: ['Cones', 'Rods', 'Optic nerve fibres', 'Corneal cells'], ans: 0, explain: 'The correct answer is: Cones.' },
  { q: 'Which cells in the retina function in dim light and detect monochromatic (black-and-white) information?', opts: ['Cones', 'Rods', 'Ciliary cells', 'Iris cells'], ans: 1, explain: 'The correct answer is: Rods.' },
  { q: 'The iris controls:', opts: ['The shape of the lens', 'The curvature of the cornea', 'The size of the pupil and thus the amount of light entering the eye', 'The sensitivity of the retina'], ans: 2, explain: 'The correct answer is: The size of the pupil and thus the amount of light entering the eye.' },
  { q: 'The optic nerve carries:', opts: ['Blood to the retina', 'Light into the eye', 'Nutrients to the lens', 'Electrical signals from the retina to the brain'], ans: 3, explain: 'The correct answer is: Electrical signals from the retina to the brain.' },
  { q: 'In myopia (short-sightedness), the image of a distant object forms:', opts: ['In front of the retina', 'On the retina', 'Behind the retina', 'On the cornea'], ans: 0, explain: 'The correct answer is: In front of the retina.' },
  { q: 'Myopia is caused by:', opts: ['An eyeball that is too short or a lens that is too flat', 'An eyeball that is too long or a lens that is too converging', 'A defect in the iris', 'A damaged optic nerve'], ans: 1, explain: 'The correct answer is: An eyeball that is too long or a lens that is too converging.' },
  { q: 'A myopic person:', opts: ['Can see distant objects clearly but not near', 'Can see both near and far clearly', 'Can see near objects clearly but not distant objects', 'Cannot see at all without glasses'], ans: 2, explain: 'The correct answer is: Can see near objects clearly but not distant objects.' },
  { q: 'Myopia is corrected using a:', opts: ['Convex lens', 'Plane mirror', 'Bifocal lens only', 'Concave lens'], ans: 3, explain: 'The correct answer is: Concave lens.' },
  { q: 'In hyperopia (long-sightedness), the image of a near object forms:', opts: ['Behind the retina', 'On the retina', 'In front of the retina', 'On the iris'], ans: 0, explain: 'The correct answer is: Behind the retina.' },
  { q: 'Hyperopia is caused by:', opts: ['An eyeball that is too long or lens too converging', 'An eyeball that is too short or a lens that is too flat', 'A defect in the iris', 'A damaged cornea'], ans: 1, explain: 'The correct answer is: An eyeball that is too short or a lens that is too flat.' },
  { q: 'A hyperopic person:', opts: ['Can see near objects clearly but not distant objects', 'Cannot see at all without glasses', 'Can see distant objects clearly but has difficulty with near objects', 'Has no vision problems'], ans: 2, explain: 'The correct answer is: Can see distant objects clearly but has difficulty with near objects.' },
  { q: 'Hyperopia is corrected using a:', opts: ['Concave lens', 'Plane mirror', 'Prism', 'Convex lens'], ans: 3, explain: 'The correct answer is: Convex lens.' },
  { q: 'When focusing on a near object, the ciliary muscles contract and the lens becomes:', opts: ['More curved (fatter)', 'Flatter', 'Unchanged in shape', 'More transparent'], ans: 0, explain: 'The correct answer is: More curved (fatter).' },
  { q: 'When focusing on a distant object, the ciliary muscles relax and the lens becomes:', opts: ['More curved', 'Flatter', 'More opaque', 'Smaller'], ans: 1, explain: 'The correct answer is: Flatter.' },
  { q: 'The vitreous humour fills:', opts: ['The space between the cornea and lens', 'The iris', 'The main cavity of the eye between the lens and retina', 'The optic nerve channel'], ans: 2, explain: 'The correct answer is: The main cavity of the eye between the lens and retina.' },
  { q: 'Which of the following best describes the cornea?', opts: ['An opaque, coloured layer controlling light entry', 'A pigmented layer containing photoreceptors', 'A muscular structure that changes lens shape', 'A transparent curved surface that is the main refracting element'], ans: 3, explain: 'The correct answer is: A transparent curved surface that is the main refracting element.' },
  { q: 'A person who cannot see clearly at night but sees fine in bright light most likely has a deficiency of:', opts: ['Rod cells', 'Cone cells', 'Corneal cells', 'Ciliary muscles'], ans: 0, explain: 'The correct answer is: Rod cells.' },
  { q: 'A colour-blind person has a deficiency in which type of photoreceptor?', opts: ['Rod cells', 'Cone cells', 'Both rods and cones', 'Optic nerve fibres'], ans: 1, explain: 'The correct answer is: Cone cells.' },
  { q: 'The image formed on the human retina by the eye\'s optical system is:', opts: ['Virtual, upright, same size', 'Real, upright, magnified', 'Real, inverted (the brain corrects for this)', 'Virtual, inverted, diminished'], ans: 2, explain: 'The correct answer is: Real, inverted (the brain corrects for this).' },
  { q: 'Which of the following is TRUE about the cornea?', opts: ['It changes shape to adjust focus', 'It contains rods and cones', 'It controls the pupil size', 'It provides most of the eye\'s refractive (focusing) power'], ans: 3, explain: 'The correct answer is: It provides most of the eye\'s refractive (focusing) power.' },
  { q: 'A concave lens placed in front of a myopic eye corrects vision by:', opts: ['Diverging light rays so they converge correctly on the retina', 'Converging light rays more to increase focus', 'Reflecting excess light away', 'Changing the shape of the cornea'], ans: 0, explain: 'The correct answer is: Diverging light rays so they converge correctly on the retina.' },
  { q: 'A convex lens placed in front of a hyperopic eye corrects vision by:', opts: ['Diverging light rays to reduce convergence', 'Converging light rays so they focus correctly on the retina', 'Reducing the amount of light entering the eye', 'Changing the curvature of the cornea'], ans: 1, explain: 'The correct answer is: Converging light rays so they focus correctly on the retina.' }
];
