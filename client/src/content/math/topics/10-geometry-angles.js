export const meta = {
  id: 10, sem: 2,
  title: 'Basic Geometry (Angles)',
  desc: 'Angle types, parallel lines, transversals'
}

export const notes = `
  <h2>Basic Geometry (Angles)</h2>
  <p class="topic-desc">Angle types, parallel lines, transversals</p>

  <div class="notes-card">
    <h3>1. Types of Angles</h3>
    <p>Angles are classified by their size:</p>
    <div class="example">
      <strong>Acute angle:</strong> between 0&deg; and 90&deg;<br>
      <strong>Right angle:</strong> exactly 90&deg;<br>
      <strong>Obtuse angle:</strong> between 90&deg; and 180&deg;<br>
      <strong>Straight angle:</strong> exactly 180&deg;<br>
      <strong>Reflex angle:</strong> between 180&deg; and 360&deg;<br>
      <strong>Complete angle:</strong> exactly 360&deg; (full turn)<br><br>
      <strong>Measuring angles:</strong> use a protractor &mdash; align the baseline with one arm and the centre with the vertex.
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Angle Relationships at a Point</h3>
    <p>Key properties when angles meet at a point or on a line:</p>
    <div class="example">
      <strong>Adjacent angles on a straight line</strong> sum to <span class="highlight">180&deg;</span><br><br>
      <strong>Angles at a point</strong> sum to <span class="highlight">360&deg;</span><br><br>
      <strong>Vertically opposite angles</strong> are <span class="highlight">equal</span><br>
      (formed when two straight lines intersect)
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Complementary &amp; Supplementary Angles</h3>
    <p>Two angles that have a special sum:</p>
    <div class="example">
      <strong>Complementary angles:</strong> sum to <span class="highlight">90&deg;</span><br>
      e.g. 35&deg; and 55&deg; are complementary<br><br>
      <strong>Supplementary angles:</strong> sum to <span class="highlight">180&deg;</span><br>
      e.g. 110&deg; and 70&deg; are supplementary<br><br>
      <strong>Finding unknowns:</strong><br>
      Complement of x&deg; = (90 &minus; x)&deg;<br>
      Supplement of x&deg; = (180 &minus; x)&deg;
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Parallel Lines &amp; Transversals</h3>
    <p>When a <strong>transversal</strong> crosses two parallel lines, special angle pairs are formed:</p>
    <div class="example">
      <strong>Corresponding angles</strong> (F-shape): <span class="highlight">equal</span><br>
      Same position at each intersection<br><br>
      <strong>Alternate angles</strong> (Z-shape): <span class="highlight">equal</span><br>
      Opposite sides of transversal, between the parallel lines<br><br>
      <strong>Co-interior / Allied angles</strong> (C-shape / U-shape): sum to <span class="highlight">180&deg;</span><br>
      Same side of transversal, between the parallel lines
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Finding Unknown Angles</h3>
    <p>Multi-step problems often combine several angle properties.</p>
    <div class="example">
      <strong>Strategy:</strong><br>
      1. Identify which angle property applies<br>
      2. Write an equation using the property<br>
      3. Solve for the unknown<br><br>
      <strong>Worked example:</strong><br>
      Two parallel lines cut by a transversal. One angle is 65&deg;.<br>
      Alternate angle = 65&deg; (Z-shape)<br>
      Adjacent angle on line = 180&deg; &minus; 65&deg; = <span class="highlight">115&deg;</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Perpendicular &amp; Parallel Lines</h3>
    <p>Special line relationships and their notation:</p>
    <div class="example">
      <strong>Perpendicular (&perp;):</strong> lines that meet at 90&deg;<br>
      e.g. AB &perp; CD means AB is perpendicular to CD<br><br>
      <strong>Parallel (&parallel;):</strong> lines that never meet, always equidistant<br>
      e.g. PQ &parallel; RS means PQ is parallel to RS<br><br>
      A small square at the vertex denotes a <strong>right angle</strong>.
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Bearings</h3>
    <p>A bearing gives direction as an angle measured <strong>clockwise from North</strong>.</p>
    <div class="example">
      <strong>Rules:</strong> always written as a <span class="highlight">three-figure</span> number<br>
      North = 000&deg;, East = 090&deg;, South = 180&deg;, West = 270&deg;<br><br>
      <strong>Back bearing:</strong> bearing from B back to A<br>
      If bearing &lt; 180&deg;: add 180&deg;<br>
      If bearing &ge; 180&deg;: subtract 180&deg;<br><br>
      <div class="formula">Back bearing = bearing &plusmn; 180&deg;</div>
    </div>
  </div>
`

export const questions = [
  // ══════════════════════════════════════════════════
  // IDENTIFY ANGLE TYPES (Q1–Q20)
  // ══════════════════════════════════════════════════
  { q:"An angle of 45° is classified as:", opts:["Acute","Right","Obtuse","Reflex"], ans:0, explain:"45° is between 0° and 90°, so it is an acute angle." },
  { q:"An angle of 90° is classified as:", opts:["Acute","Right","Obtuse","Straight"], ans:1, explain:"An angle of exactly 90° is a right angle." },
  { q:"An angle of 135° is classified as:", opts:["Acute","Right","Obtuse","Reflex"], ans:2, explain:"135° is between 90° and 180°, so it is obtuse." },
  { q:"An angle of 270° is classified as:", opts:["Acute","Obtuse","Straight","Reflex"], ans:3, explain:"270° is between 180° and 360°, so it is a reflex angle." },
  { q:"An angle of 180° is called a:", opts:["Straight angle","Right angle","Obtuse angle","Reflex angle"], ans:0, explain:"An angle of exactly 180° is a straight angle." },
  { q:"An angle of 360° is called a:", opts:["Straight angle","Complete angle","Reflex angle","Right angle"], ans:1, explain:"360° is a full turn, called a complete angle." },
  { q:"An angle of 15° is classified as:", opts:["Right","Obtuse","Acute","Reflex"], ans:2, explain:"15° is between 0° and 90°, so it is acute." },
  { q:"An angle of 200° is classified as:", opts:["Acute","Obtuse","Straight","Reflex"], ans:3, explain:"200° is between 180° and 360°, so it is reflex." },
  { q:"Which of the following is an obtuse angle?", opts:["120°","80°","90°","200°"], ans:0, explain:"120° is between 90° and 180°, making it obtuse." },
  { q:"Which of the following is an acute angle?", opts:["95°","72°","180°","350°"], ans:1, explain:"72° is between 0° and 90°, so it is acute." },
  { q:"Which of the following is a reflex angle?", opts:["89°","175°","310°","90°"], ans:2, explain:"310° is between 180° and 360°, so it is reflex." },
  { q:"An angle of 89° is:", opts:["Obtuse","Right","Straight","Acute"], ans:3, explain:"89° is less than 90°, so it is acute." },
  { q:"An angle of 91° is:", opts:["Obtuse","Acute","Right","Straight"], ans:0, explain:"91° is between 90° and 180°, so it is obtuse." },
  { q:"An angle of 179° is:", opts:["Reflex","Obtuse","Acute","Right"], ans:1, explain:"179° is between 90° and 180°, so it is obtuse." },
  { q:"A quarter turn equals:", opts:["180°","360°","90°","270°"], ans:2, explain:"A quarter turn = 360° ÷ 4 = 90°." },
  { q:"A half turn equals:", opts:["90°","270°","360°","180°"], ans:3, explain:"A half turn = 360° ÷ 2 = 180°." },
  { q:"Which is NOT a type of angle?", opts:["Parallel","Acute","Obtuse","Reflex"], ans:0, explain:"Parallel describes lines, not angles." },
  { q:"An angle of 350° is classified as:", opts:["Obtuse","Reflex","Straight","Acute"], ans:1, explain:"350° is between 180° and 360°, so it is reflex." },
  { q:"Three-quarter turn equals:", opts:["90°","180°","270°","360°"], ans:2, explain:"Three-quarter turn = 360° × ¾ = 270°." },
  { q:"Which angle is exactly a straight line?", opts:["90°","270°","360°","180°"], ans:3, explain:"A straight line forms an angle of 180°." },
  // ══════════════════════════════════════════════════
  // ANGLES ON LINE / AT POINT / VERT OPP (Q21–Q40)
  // ══════════════════════════════════════════════════
  { q:"Angles on a straight line sum to:", opts:["180°","360°","90°","270°"], ans:0, explain:"Adjacent angles on a straight line always sum to 180°." },
  { q:"Angles at a point sum to:", opts:["180°","360°","90°","270°"], ans:1, explain:"All angles around a single point sum to 360°." },
  { q:"Two angles on a straight line are x° and 130°. Find x.", opts:["130","60","50","40"], ans:2, explain:"x + 130 = 180, so x = 50°." },
  { q:"Two angles on a straight line are 55° and y°. Find y.", opts:["55","65","115","125"], ans:3, explain:"55 + y = 180, so y = 125°." },
  { q:"Three angles at a point are 120°, 150° and x°. Find x.", opts:["90°","100°","80°","70°"], ans:0, explain:"120 + 150 + x = 360, so x = 90°." },
  { q:"Vertically opposite angles are:", opts:["supplementary","equal","complementary","90°"], ans:1, explain:"When two lines intersect, vertically opposite angles are always equal." },
  { q:"Two straight lines intersect. One angle is 72°. The vertically opposite angle is:", opts:["108°","18°","72°","144°"], ans:2, explain:"Vertically opposite angles are equal, so it is 72°." },
  { q:"Two straight lines intersect. One angle is 65°. An adjacent angle is:", opts:["65°","90°","130°","115°"], ans:3, explain:"Adjacent angles on a line: 180 − 65 = 115°." },
  { q:"Angles a° and b° are on a straight line. If a = 3b, find b.", opts:["45°","60°","90°","135°"], ans:0, explain:"3b + b = 180 → 4b = 180 → b = 45°." },
  { q:"Three angles on a straight line are 40°, 60° and x°. Find x.", opts:["60°","80°","100°","120°"], ans:1, explain:"40 + 60 + x = 180 → x = 80°." },
  { q:"Four angles at a point are 80°, 100°, 70° and y°. Find y.", opts:["90°","100°","110°","120°"], ans:2, explain:"80 + 100 + 70 + y = 360 → y = 110°." },
  { q:"Two lines intersect. One angle is 40°. Find the sum of all four angles.", opts:["160°","200°","320°","360°"], ans:3, explain:"All angles around the intersection point sum to 360°." },
  { q:"Angles on a straight line are (2x)° and (x + 30)°. Find x.", opts:["50","60","40","45"], ans:0, explain:"2x + x + 30 = 180 → 3x = 150 → x = 50." },
  { q:"Two angles at a point are each 90°. The remaining angle is:", opts:["90°","180°","270°","360°"], ans:1, explain:"90 + 90 + remaining = 360 → remaining = 180°." },
  { q:"Vertically opposite angles are (3x)° and (x + 40)°. Find x.", opts:["10","15","20","25"], ans:2, explain:"3x = x + 40 → 2x = 40 → x = 20." },
  { q:"Two straight lines cross. If one angle is 110°, the other three angles are:", opts:["110°, 110°, 110°","70°, 70°, 70°","110°, 110°, 70°","70°, 110°, 70°"], ans:3, explain:"Opposite = 110°, two adjacent = 180 − 110 = 70°. So: 70°, 110°, 70°." },
  { q:"Angles on a straight line are 2x°, 3x° and 40°. Find x.", opts:["28","30","32","35"], ans:0, explain:"2x + 3x + 40 = 180 → 5x = 140 → x = 28." },
  { q:"At a point, angles are x°, 2x°, 3x° and 4x°. Find x.", opts:["30","36","40","45"], ans:1, explain:"x + 2x + 3x + 4x = 360 → 10x = 360 → x = 36." },
  { q:"Two angles on a straight line are in ratio 2 : 7. Find the smaller angle.", opts:["20°","36°","40°","70°"], ans:2, explain:"2 + 7 = 9 parts. 180 ÷ 9 = 20. Smaller = 2 × 20 = 40°." },
  { q:"Two angles at a point are equal and a third angle is 120°. Find each equal angle.", opts:["60°","100°","110°","120°"], ans:3, explain:"2a + 120 = 360 → 2a = 240 → a = 120°." },
  // ══════════════════════════════════════════════════
  // COMPLEMENTARY & SUPPLEMENTARY (Q41–Q55)
  // ══════════════════════════════════════════════════
  { q:"Complementary angles sum to:", opts:["90°","180°","270°","360°"], ans:0, explain:"By definition, complementary angles sum to 90°." },
  { q:"Supplementary angles sum to:", opts:["90°","180°","270°","360°"], ans:1, explain:"By definition, supplementary angles sum to 180°." },
  { q:"The complement of 35° is:", opts:["145°","35°","55°","125°"], ans:2, explain:"Complement = 90 − 35 = 55°." },
  { q:"The supplement of 60° is:", opts:["30°","60°","90°","120°"], ans:3, explain:"Supplement = 180 − 60 = 120°." },
  { q:"The complement of 72° is:", opts:["18°","28°","72°","108°"], ans:0, explain:"Complement = 90 − 72 = 18°." },
  { q:"The supplement of 135° is:", opts:["135°","45°","55°","225°"], ans:1, explain:"Supplement = 180 − 135 = 45°." },
  { q:"Two complementary angles are x° and (x + 20)°. Find x.", opts:["45","40","35","25"], ans:2, explain:"x + x + 20 = 90 → 2x = 70 → x = 35." },
  { q:"Two supplementary angles are in ratio 1 : 5. Find the larger angle.", opts:["30°","36°","120°","150°"], ans:3, explain:"1 + 5 = 6 parts. 180 ÷ 6 = 30. Larger = 5 × 30 = 150°." },
  { q:"An angle is twice its complement. Find the angle.", opts:["60°","30°","45°","90°"], ans:0, explain:"Let angle = x. Complement = 90 − x. x = 2(90 − x) → x = 180 − 2x → 3x = 180 → x = 60°." },
  { q:"An angle is equal to its supplement. Find the angle.", opts:["45°","90°","135°","180°"], ans:1, explain:"x = 180 − x → 2x = 180 → x = 90°." },
  { q:"The supplement of an angle is three times the angle. Find it.", opts:["30°","60°","45°","90°"], ans:2, explain:"180 − x = 3x → 180 = 4x → x = 45°." },
  { q:"Two supplementary angles differ by 40°. Find the smaller angle.", opts:["80°","100°","110°","70°"], ans:3, explain:"x + (x + 40) = 180 → 2x = 140 → x = 70°." },
  { q:"The complement of the complement of 20° is:", opts:["20°","70°","160°","90°"], ans:0, explain:"Complement of 20° = 70°. Complement of 70° = 20°. Back to original." },
  { q:"If an angle and its complement are in ratio 2 : 3, find the angle.", opts:["54°","36°","45°","60°"], ans:1, explain:"2 + 3 = 5 parts. 90 ÷ 5 = 18. Angle = 2 × 18 = 36°." },
  { q:"An angle is 30° more than its supplement. Find the angle.", opts:["75°","100°","105°","115°"], ans:2, explain:"x = (180 − x) + 30 → 2x = 210 → x = 105°." },
  // ══════════════════════════════════════════════════
  // PARALLEL LINES (Q56–Q85)
  // ══════════════════════════════════════════════════
  { q:"Corresponding angles formed by a transversal cutting parallel lines are:", opts:["supplementary","complementary","co-interior","equal"], ans:3, explain:"Corresponding angles (F-shape) are equal when lines are parallel." },
  { q:"Alternate angles formed by a transversal cutting parallel lines are:", opts:["equal","supplementary","complementary","reflex"], ans:0, explain:"Alternate angles (Z-shape) are equal when lines are parallel." },
  { q:"Co-interior angles sum to:", opts:["90°","180°","270°","360°"], ans:1, explain:"Co-interior (allied) angles between parallel lines sum to 180°." },
  { q:"Corresponding angles are also known as:", opts:["Z-angles","C-angles","F-angles","U-angles"], ans:2, explain:"Corresponding angles follow an F-shape pattern." },
  { q:"Alternate angles are also known as:", opts:["F-angles","C-angles","U-angles","Z-angles"], ans:3, explain:"Alternate angles follow a Z-shape pattern." },
  { q:"Two parallel lines are cut by a transversal. A corresponding angle is 70°. Its partner is:", opts:["70°","110°","20°","140°"], ans:0, explain:"Corresponding angles are equal, so the partner is also 70°." },
  { q:"Two parallel lines are cut by a transversal. An alternate angle is 55°. Its partner is:", opts:["125°","55°","35°","145°"], ans:1, explain:"Alternate angles are equal, so the partner is 55°." },
  { q:"Co-interior angles: one is 75°. Find the other.", opts:["75°","15°","105°","285°"], ans:2, explain:"Co-interior angles sum to 180°. 180 − 75 = 105°." },
  { q:"A transversal crosses two parallel lines. One angle is 130°. Its co-interior partner is:", opts:["130°","230°","130°","50°"], ans:3, explain:"Co-interior angles sum to 180°. 180 − 130 = 50°." },
  { q:"A transversal makes an angle of 62° with one parallel line. The corresponding angle at the other line is:", opts:["62°","118°","28°","152°"], ans:0, explain:"Corresponding angles are equal → 62°." },
  { q:"Alternate angle to 48° is:", opts:["132°","48°","42°","138°"], ans:1, explain:"Alternate angles are equal → 48°." },
  { q:"Co-interior angle paired with 110° is:", opts:["110°","80°","70°","290°"], ans:2, explain:"Co-interior angles sum to 180°. 180 − 110 = 70°." },
  { q:"A transversal crosses parallel lines. Angle a = 85°. The corresponding angle b equals:", opts:["95°","5°","275°","85°"], ans:3, explain:"Corresponding angles are equal → b = 85°." },
  { q:"If two lines are parallel and a transversal angle is 140°, the alternate angle is:", opts:["140°","40°","220°","180°"], ans:0, explain:"Alternate angles are equal → 140°." },
  { q:"Co-interior angles are (2x)° and (3x + 30)°. Find x.", opts:["25","30","35","40"], ans:1, explain:"2x + 3x + 30 = 180 → 5x = 150 → x = 30." },
  { q:"Corresponding angles are (3x + 10)° and (5x − 20)°. Find x.", opts:["5","10","15","20"], ans:2, explain:"3x + 10 = 5x − 20 → 30 = 2x → x = 15." },
  { q:"Alternate angles are (4x − 5)° and (3x + 15)°. Find x.", opts:["5","10","15","20"], ans:3, explain:"4x − 5 = 3x + 15 → x = 20." },
  { q:"Which pair of angles are co-interior?", opts:["Same side, between parallels","Opposite sides, between parallels","Same position at each crossing","Vertically opposite"], ans:0, explain:"Co-interior angles are on the same side of the transversal, between the parallel lines." },
  { q:"Which pair of angles are alternate?", opts:["Same side, between parallels","Opposite sides, between parallels","Same position at each crossing","On a straight line"], ans:1, explain:"Alternate angles are on opposite sides of the transversal, between the parallel lines." },
  { q:"Two parallel lines cut by a transversal form 8 angles. How many pairs of corresponding angles?", opts:["2","3","4","8"], ans:2, explain:"There are 4 pairs of corresponding angles (one at each position)." },
  { q:"If lines are NOT parallel, corresponding angles are:", opts:["always equal","always 90°","always supplementary","not necessarily equal"], ans:3, explain:"Corresponding angles are only guaranteed equal when lines are parallel." },
  { q:"Co-interior angles are 3x° and (2x + 5)°. Find x.", opts:["35","40","30","25"], ans:0, explain:"3x + 2x + 5 = 180 → 5x = 175 → x = 35." },
  { q:"One angle at a transversal crossing is 58°. The alternate interior angle is:", opts:["122°","58°","32°","148°"], ans:1, explain:"Alternate interior angles are equal → 58°." },
  { q:"A transversal makes a 90° angle with one of two parallel lines. What angle does it make with the other?", opts:["180°","0°","90°","45°"], ans:2, explain:"Corresponding angles equal → the transversal is also perpendicular to the second line → 90°." },
  { q:"Angles p and q are co-interior. If p = 95°, find q.", opts:["95°","5°","265°","85°"], ans:3, explain:"Co-interior angles sum to 180°. q = 180 − 95 = 85°." },
  { q:"Corresponding angles are (x + 25)° and (2x − 5)°. Find x.", opts:["30","25","20","15"], ans:0, explain:"x + 25 = 2x − 5 → 30 = x." },
  { q:"Two parallel lines are cut by a transversal. One angle is 115°. How many of the 8 angles equal 115°?", opts:["2","4","6","8"], ans:1, explain:"There are 4 angles of 115° (corresponding and vertically opposite pairs) and 4 of 65°." },
  { q:"Co-interior angles are (x + 40)° and (2x + 20)°. Find x.", opts:["30","35","40","45"], ans:2, explain:"x + 40 + 2x + 20 = 180 → 3x + 60 = 180 → 3x = 120 → x = 40." },
  { q:"Alternate angles are (2x + 10)° and (4x − 30)°. Find x.", opts:["10","15","25","20"], ans:3, explain:"2x + 10 = 4x − 30 → 40 = 2x → x = 20." },
  { q:"A transversal crosses parallel lines. One angle is a°. Its co-interior partner is:", opts:["(180 − a)°","a°","(90 − a)°","(360 − a)°"], ans:0, explain:"Co-interior angles sum to 180°, so the partner is (180 − a)°." },
  // ══════════════════════════════════════════════════
  // FIND UNKNOWN ANGLES – MULTI-STEP (Q86–Q115)
  // ══════════════════════════════════════════════════
  { q:"In a diagram, angles on a straight line are 40°, x° and 70°. Find x.", opts:["60°","70°","80°","90°"], ans:1, explain:"40 + x + 70 = 180 → x = 70°." },
  { q:"Two lines intersect. One angle is 3x° and the vertically opposite angle is 75°. Find x.", opts:["15","20","25","30"], ans:2, explain:"Vertically opposite: 3x = 75 → x = 25." },
  { q:"Angles at a point are 2x°, 3x°, 4x° and 90°. Find x.", opts:["20°","25°","24°","30°"], ans:3, explain:"2x + 3x + 4x + 90 = 360 → 9x = 270 → x = 30°." },
  { q:"Parallel lines cut by a transversal: one angle is 52°. An angle on the same straight line as the alternate angle is:", opts:["128°","52°","38°","142°"], ans:0, explain:"Alternate angle = 52°. On same line: 180 − 52 = 128°." },
  { q:"Two angles on a straight line are (5x − 10)° and (3x + 30)°. Find x.", opts:["15","20","25","30"], ans:1, explain:"5x − 10 + 3x + 30 = 180 → 8x + 20 = 180 → 8x = 160 → x = 20." },
  { q:"Three angles at a point are equal. Find each angle.", opts:["90°","180°","120°","60°"], ans:2, explain:"3a = 360 → a = 120°." },
  { q:"On a straight line, angles are x°, 2x° and 3x°. Find the largest angle.", opts:["30°","60°","80°","90°"], ans:3, explain:"x + 2x + 3x = 180 → 6x = 180 → x = 30. Largest = 3(30) = 90°." },
  { q:"Vertically opposite angles are (2x + 15)° and (3x − 5)°. Find the angle.", opts:["55°","45°","50°","60°"], ans:0, explain:"2x + 15 = 3x − 5 → x = 20. Angle = 2(20) + 15 = 55°." },
  { q:"Parallel lines: angle a = 68°. Corresponding angle b = 68°. Angle c on the same line as b is:", opts:["68°","112°","22°","158°"], ans:1, explain:"b = 68° (corresponding). c + b = 180 (on a line) → c = 112°." },
  { q:"Co-interior angle is (x + 30)°. Its pair is (2x)°. Find x.", opts:["40","45","50","55"], ans:2, explain:"x + 30 + 2x = 180 → 3x = 150 → x = 50." },
  { q:"Angles on a straight line are (x + 10)°, (2x − 20)° and 70°. Find x.", opts:["30","35","45","40"], ans:3, explain:"x + 10 + 2x − 20 + 70 = 180 → 3x + 60 = 180 → 3x = 120 → x = 40." },
  { q:"Two intersecting lines form angles. If one angle is (4x − 20)° and its supplement is (2x + 20)°, find x.", opts:["30","25","35","40"], ans:0, explain:"4x − 20 + 2x + 20 = 180 → 6x = 180 → x = 30." },
  { q:"In a figure with parallel lines, alternate angle is 73°. A co-interior angle with another angle on the same transversal is:", opts:["73°","107°","17°","163°"], ans:1, explain:"Co-interior with the alternate angle: 180 − 73 = 107°." },
  { q:"Angles at a point: 5x°, 2x°, 3x° and 50°. Find x.", opts:["25","28","31","35"], ans:2, explain:"5x + 2x + 3x + 50 = 360 → 10x = 310 → x = 31." },
  { q:"On a straight line: (3x + 5)° and (2x + 25)°. Find the larger angle.", opts:["60°","89°","90°","95°"], ans:3, explain:"3x + 5 + 2x + 25 = 180 → 5x = 150 → x = 30. Larger = 3(30) + 5 = 95°." },
  { q:"Two lines cross. Adjacent angles are (3x + 10)° and (x + 50)°. Find x.", opts:["30","40","35","25"], ans:0, explain:"3x + 10 + x + 50 = 180 → 4x + 60 = 180 → 4x = 120 → x = 30." },
  { q:"Parallel lines: corresponding angle = (2x + 15)°, co-interior partner of the other = (3x + 5)°. Find x.", opts:["28","32","35","40"], ans:1, explain:"Corresponding = (2x + 15)°. Co-interior with it: 180 − (2x + 15) = (3x + 5). 165 − 2x = 3x + 5 → 160 = 5x → x = 32." },
  { q:"Four angles at a point are x°, (x + 30)°, (x + 60)° and (x + 90)°. Find x.", opts:["30","40","45","60"], ans:2, explain:"4x + 180 = 360 → 4x = 180 → x = 45." },
  { q:"On a straight line: 2x°, (x + 15)° and (x − 5)°. Find x in degrees.", opts:["32.5","40","50","42.5"], ans:3, explain:"2x + x + 15 + x − 5 = 180 → 4x + 10 = 180 → 4x = 170 → x = 42.5." },
  { q:"Vertically opposite angles are (5x − 30)° and (3x + 10)°. Find x.", opts:["20","15","25","10"], ans:0, explain:"5x − 30 = 3x + 10 → 2x = 40 → x = 20." },
  { q:"Two adjacent angles on a line are in ratio 3 : 7. Find the smaller angle.", opts:["63°","54°","36°","72°"], ans:1, explain:"3 + 7 = 10 parts. 180 ÷ 10 = 18. Smaller = 3 × 18 = 54°." },
  { q:"Parallel lines with transversal: alternate angle = 44°. An angle on the straight line with the alternate angle is:", opts:["44°","90°","136°","180°"], ans:2, explain:"On same line as alternate angle: 180 − 44 = 136°." },
  { q:"At a point: angles are 5x°, 4x°, 3x° and (2x + 10)°. Find x.", opts:["20","22","24","25"], ans:3, explain:"5x + 4x + 3x + 2x + 10 = 360 → 14x = 350 → x = 25." },
  { q:"Parallel lines: co-interior angles are (3x + 15)° and (2x + 25)°. Find x.", opts:["28","30","32","35"], ans:0, explain:"3x + 15 + 2x + 25 = 180 → 5x + 40 = 180 → 5x = 140 → x = 28." },
  { q:"Adjacent angles on a line are (x + 20)° and (3x)°. Find the larger angle.", opts:["40°","120°","60°","80°"], ans:1, explain:"x + 20 + 3x = 180 → 4x = 160 → x = 40. Larger = 3(40) = 120°." },
  { q:"Two straight lines cross forming four angles. One pair of vertically opposite angles is x° each and the other pair is (x + 40)° each. Find x.", opts:["60","65","70","75"], ans:2, explain:"2x + 2(x + 40) = 360 → 4x + 80 = 360 → 4x = 280 → x = 70." },
  { q:"Parallel lines: a co-interior angle is (2x + 10)° and its pair is (x + 50)°. Find x.", opts:["30","35","45","40"], ans:3, explain:"2x + 10 + x + 50 = 180 → 3x + 60 = 180 → 3x = 120 → x = 40." },
  { q:"Angles on a straight line are (2x + 5)°, (x + 10)° and (3x − 15)°. Find x.", opts:["30","25","35","40"], ans:0, explain:"2x + 5 + x + 10 + 3x − 15 = 180 → 6x = 180 → x = 30." },
  { q:"Parallel lines: alternate angle is (x + 20)° and a co-interior angle with another angle at the same crossing is (2x + 10)°. The alternate and co-interior are supplementary. Find x.", opts:["40","50","60","70"], ans:1, explain:"(x + 20) + (2x + 10) = 180 → 3x + 30 = 180 → 3x = 150 → x = 50." },
  { q:"At a point: angles are (x + 10)°, (2x)°, (3x − 10)° and (x + 10)°. Find x.", opts:["40","45","50","55"], ans:2, explain:"(x+10) + 2x + (3x−10) + (x+10) = 360 → 7x + 10 = 360 → 7x = 350 → x = 50." },
  // ══════════════════════════════════════════════════
  // BEARINGS (Q116–Q135)
  // ══════════════════════════════════════════════════
  { q:"A three-figure bearing is measured:", opts:["anticlockwise from East","clockwise from South","anticlockwise from North","clockwise from North"], ans:3, explain:"Bearings are always measured clockwise from North." },
  { q:"The bearing of due East is:", opts:["090°","180°","000°","270°"], ans:0, explain:"East is 90° clockwise from North → 090°." },
  { q:"The bearing of due South is:", opts:["090°","180°","270°","360°"], ans:1, explain:"South is 180° clockwise from North." },
  { q:"The bearing of due West is:", opts:["090°","180°","270°","360°"], ans:2, explain:"West is 270° clockwise from North." },
  { q:"The bearing of due North is:", opts:["090°","180°","270°","000°"], ans:3, explain:"North is 0° → written as 000° (three figures)." },
  { q:"The bearing of NE (North-East) is:", opts:["045°","090°","135°","315°"], ans:0, explain:"NE is halfway between N (000°) and E (090°) → 045°." },
  { q:"The back bearing of 060° is:", opts:["300°","240°","120°","060°"], ans:1, explain:"060° < 180°, so back bearing = 060° + 180° = 240°." },
  { q:"The back bearing of 200° is:", opts:["380°","200°","020°","160°"], ans:2, explain:"200° ≥ 180°, so back bearing = 200° − 180° = 020°." },
  { q:"The back bearing of 310° is:", opts:["310°","490°","180°","130°"], ans:3, explain:"310° ≥ 180°, so back bearing = 310° − 180° = 130°." },
  { q:"A ship sails on a bearing of 135°. What direction is this?", opts:["South-East","North-East","South-West","North-West"], ans:0, explain:"135° is halfway between E (090°) and S (180°) → SE." },
  { q:"The back bearing of 045° is:", opts:["135°","225°","315°","045°"], ans:1, explain:"045° < 180°, so back bearing = 045° + 180° = 225°." },
  { q:"A plane flies on bearing 270°. It is heading:", opts:["North","East","West","South"], ans:2, explain:"270° clockwise from North is due West." },
  { q:"Bearing of SW (South-West) is:", opts:["135°","180°","315°","225°"], ans:3, explain:"SW is halfway between S (180°) and W (270°) → 225°." },
  { q:"The back bearing of 090° is:", opts:["270°","180°","090°","000°"], ans:0, explain:"090° < 180°, so back bearing = 090° + 180° = 270°." },
  { q:"Bearing of NW (North-West) is:", opts:["225°","315°","045°","135°"], ans:1, explain:"NW is halfway between W (270°) and N (360°/000°) → 315°." },
  { q:"A bearing of 000° points:", opts:["East","South","North","West"], ans:2, explain:"000° is due North." },
  { q:"The back bearing of 180° is:", opts:["180°","090°","270°","000°"], ans:3, explain:"180° ≥ 180°, so back bearing = 180° − 180° = 000°." },
  { q:"Town B is on a bearing of 120° from Town A. What bearing is A from B?", opts:["300°","120°","060°","240°"], ans:0, explain:"120° < 180° → back bearing = 120° + 180° = 300°." },
  { q:"A hiker walks on bearing 225°. In which general direction is the hiker heading?", opts:["North-West","South-West","South-East","North-East"], ans:1, explain:"225° is between S (180°) and W (270°) → South-West." },
  { q:"Bearing of SE (South-East) is:", opts:["045°","090°","135°","225°"], ans:2, explain:"SE is halfway between S (180°) and E (090°) → 135°." },
  // ══════════════════════════════════════════════════
  // MIXED (Q136–Q150)
  // ══════════════════════════════════════════════════
  { q:"Two parallel lines are cut by a transversal. One angle is 48°. The co-interior angle on the other parallel line is:", opts:["48°","90°","42°","132°"], ans:3, explain:"Co-interior angles sum to 180°. 180 − 48 = 132°." },
  { q:"An angle is 5 times its complement. Find the angle.", opts:["75°","72°","80°","85°"], ans:0, explain:"x = 5(90 − x) → x = 450 − 5x → 6x = 450 → x = 75°." },
  { q:"Bearing of a point due North-East is 045°. Its back bearing is:", opts:["135°","225°","315°","045°"], ans:1, explain:"045° + 180° = 225°." },
  { q:"Angles at a point are 4x°, 5x° and (3x + 12)°. Find x.", opts:["25","27","29","31"], ans:2, explain:"4x + 5x + 3x + 12 = 360 → 12x = 348 → x = 29." },
  { q:"Two angles on a straight line are (x + 35)° and (2x + 25)°. Find x.", opts:["30","35","45","40"], ans:3, explain:"x + 35 + 2x + 25 = 180 → 3x + 60 = 180 → 3x = 120 → x = 40." },
  { q:"The supplement of an angle is 4 times the complement of the same angle. Find the angle.", opts:["60°","45°","30°","90°"], ans:0, explain:"180 − x = 4(90 − x) → 180 − x = 360 − 4x → 3x = 180 → x = 60°." },
  { q:"Parallel lines: alternate angle = (3x − 10)°. Its co-interior partner with another angle = (4x + 15)°. The two are supplementary. Find x.", opts:["20","25","30","35"], ans:1, explain:"(3x − 10) + (4x + 15) = 180 → 7x + 5 = 180 → 7x = 175 → x = 25." },
  { q:"A reflex angle and its related acute angle sum to:", opts:["180°","270°","360°","540°"], ans:2, explain:"A reflex angle and the angle on the other side of the arms sum to 360°." },
  { q:"Two intersecting lines create four angles. The angles, in order, are:", opts:["all equal","all different","two obtuse, two reflex","two pairs of equal angles"], ans:3, explain:"Two pairs of vertically opposite (equal) angles are formed." },
  { q:"Angles on a straight line: 55°, x° and 85°. Find x.", opts:["40°","45°","50°","55°"], ans:0, explain:"55 + x + 85 = 180 → x = 40°." },
  { q:"Two supplementary angles are in ratio 5 : 4. Find the larger angle.", opts:["80°","100°","120°","90°"], ans:1, explain:"5 + 4 = 9 parts. 180 ÷ 9 = 20. Larger = 5 × 20 = 100°." },
  { q:"The back bearing of 150° is:", opts:["030°","150°","330°","210°"], ans:2, explain:"150° < 180° → back bearing = 150° + 180° = 330°." },
  { q:"Vertically opposite angles are (6x − 12)° and (4x + 8)°. Find the angle.", opts:["38°","42°","50°","48°"], ans:3, explain:"6x − 12 = 4x + 8 → 2x = 20 → x = 10. Angle = 6(10) − 12 = 48°." },
  { q:"Co-interior angles with parallel lines: (5x − 20)° and (3x + 40)°. Find x.", opts:["20","25","30","35"], ans:0, explain:"5x − 20 + 3x + 40 = 180 → 8x + 20 = 180 → 8x = 160 → x = 20." },
  { q:"An angle of 320° is a ___ angle, and its related angle at the same point is ___.", opts:["obtuse, 40°","reflex, 40°","straight, 40°","acute, 40°"], ans:1, explain:"320° is reflex (between 180° and 360°). Related angle = 360 − 320 = 40°." }
]
