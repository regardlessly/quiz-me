export const meta = {
  id: 11, sem: 2,
  title: 'Polygons \\& Constructions',
  desc: 'Triangles, quadrilaterals, angle sums, constructions'
}

export const notes = `
  <h2>Polygons &amp; Constructions</h2>
  <p class="topic-desc">Triangles, quadrilaterals, angle sums, constructions</p>

  <div class="notes-card">
    <h3>1. Triangles</h3>
    <p>Classified by <strong>sides</strong> and by <strong>angles</strong>.</p>
    <div class="example">
      <strong>By sides:</strong><br>
      &bull; <strong>Equilateral</strong> &mdash; all 3 sides equal, all angles 60&deg;<br>
      &bull; <strong>Isosceles</strong> &mdash; 2 sides equal, 2 base angles equal<br>
      &bull; <strong>Scalene</strong> &mdash; no sides equal, no angles equal<br><br>
      <strong>By angles:</strong><br>
      &bull; <strong>Acute</strong> &mdash; all angles &lt; 90&deg;<br>
      &bull; <strong>Right</strong> &mdash; one angle = 90&deg;<br>
      &bull; <strong>Obtuse</strong> &mdash; one angle &gt; 90&deg;<br><br>
      <div class="formula">Angle sum of a triangle = 180&deg;</div>
      <div class="formula">Exterior angle = sum of two opposite interior angles</div>
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Quadrilaterals</h3>
    <p>Four-sided polygons with <strong>angle sum = 360&deg;</strong>.</p>
    <div class="example">
      <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
        <tr style="background:#f0f0f0;"><th style="padding:4px;border:1px solid #ccc;">Shape</th><th style="padding:4px;border:1px solid #ccc;">Sides</th><th style="padding:4px;border:1px solid #ccc;">Angles</th><th style="padding:4px;border:1px solid #ccc;">Diagonals</th></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Square</strong></td><td style="padding:4px;border:1px solid #ccc;">All equal</td><td style="padding:4px;border:1px solid #ccc;">All 90&deg;</td><td style="padding:4px;border:1px solid #ccc;">Equal, bisect at 90&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Rectangle</strong></td><td style="padding:4px;border:1px solid #ccc;">Opp equal</td><td style="padding:4px;border:1px solid #ccc;">All 90&deg;</td><td style="padding:4px;border:1px solid #ccc;">Equal, bisect each other</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Parallelogram</strong></td><td style="padding:4px;border:1px solid #ccc;">Opp equal</td><td style="padding:4px;border:1px solid #ccc;">Opp equal</td><td style="padding:4px;border:1px solid #ccc;">Bisect each other</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Rhombus</strong></td><td style="padding:4px;border:1px solid #ccc;">All equal</td><td style="padding:4px;border:1px solid #ccc;">Opp equal</td><td style="padding:4px;border:1px solid #ccc;">Bisect at 90&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Trapezium</strong></td><td style="padding:4px;border:1px solid #ccc;">1 pair parallel</td><td style="padding:4px;border:1px solid #ccc;">Co-interior = 180&deg;</td><td style="padding:4px;border:1px solid #ccc;">Not equal in general</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;"><strong>Kite</strong></td><td style="padding:4px;border:1px solid #ccc;">2 pairs adj equal</td><td style="padding:4px;border:1px solid #ccc;">1 pair opp equal</td><td style="padding:4px;border:1px solid #ccc;">One bisects other at 90&deg;</td></tr>
      </table>
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Polygon Angle Sums</h3>
    <p>Formulas for <strong>interior</strong> and <strong>exterior</strong> angles of polygons.</p>
    <div class="example">
      <div class="formula">Interior angle sum = (n &minus; 2) &times; 180&deg;</div>
      <div class="formula">Each interior angle of regular polygon = (n &minus; 2) &times; 180&deg; &divide; n</div>
      <div class="formula">Exterior angles always sum to 360&deg;</div>
      <div class="formula">Each exterior angle of regular polygon = 360&deg; &divide; n</div>
      <br>
      <strong>Example:</strong> Regular hexagon (n = 6):<br>
      Interior sum = (6 &minus; 2) &times; 180&deg; = 720&deg;<br>
      Each interior angle = 720&deg; &divide; 6 = <span class="highlight">120&deg;</span><br>
      Each exterior angle = 360&deg; &divide; 6 = <span class="highlight">60&deg;</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Regular Polygons</h3>
    <p>All sides equal and all angles equal.</p>
    <div class="example">
      <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
        <tr style="background:#f0f0f0;"><th style="padding:4px;border:1px solid #ccc;">Name</th><th style="padding:4px;border:1px solid #ccc;">Sides</th><th style="padding:4px;border:1px solid #ccc;">Int. Angle</th><th style="padding:4px;border:1px solid #ccc;">Ext. Angle</th></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Pentagon</td><td style="padding:4px;border:1px solid #ccc;">5</td><td style="padding:4px;border:1px solid #ccc;">108&deg;</td><td style="padding:4px;border:1px solid #ccc;">72&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Hexagon</td><td style="padding:4px;border:1px solid #ccc;">6</td><td style="padding:4px;border:1px solid #ccc;">120&deg;</td><td style="padding:4px;border:1px solid #ccc;">60&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Heptagon</td><td style="padding:4px;border:1px solid #ccc;">7</td><td style="padding:4px;border:1px solid #ccc;">≈ 128.6&deg;</td><td style="padding:4px;border:1px solid #ccc;">≈ 51.4&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Octagon</td><td style="padding:4px;border:1px solid #ccc;">8</td><td style="padding:4px;border:1px solid #ccc;">135&deg;</td><td style="padding:4px;border:1px solid #ccc;">45&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Nonagon</td><td style="padding:4px;border:1px solid #ccc;">9</td><td style="padding:4px;border:1px solid #ccc;">140&deg;</td><td style="padding:4px;border:1px solid #ccc;">40&deg;</td></tr>
        <tr><td style="padding:4px;border:1px solid #ccc;">Decagon</td><td style="padding:4px;border:1px solid #ccc;">10</td><td style="padding:4px;border:1px solid #ccc;">144&deg;</td><td style="padding:4px;border:1px solid #ccc;">36&deg;</td></tr>
      </table>
      <br>
      <div class="formula">Interior angle + Exterior angle = 180&deg; (supplementary)</div>
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Symmetry</h3>
    <p><strong>Line symmetry</strong> and <strong>rotational symmetry</strong> of common shapes.</p>
    <div class="example">
      <strong>Line symmetry:</strong><br>
      &bull; Equilateral triangle &mdash; 3 lines<br>
      &bull; Isosceles triangle &mdash; 1 line<br>
      &bull; Square &mdash; 4 lines<br>
      &bull; Rectangle &mdash; 2 lines<br>
      &bull; Rhombus &mdash; 2 lines<br>
      &bull; Parallelogram &mdash; 0 lines<br>
      &bull; Kite &mdash; 1 line<br>
      &bull; Regular n-gon &mdash; n lines<br><br>
      <strong>Rotational symmetry (order):</strong><br>
      &bull; Equilateral triangle &mdash; order 3<br>
      &bull; Square &mdash; order 4<br>
      &bull; Rectangle &mdash; order 2<br>
      &bull; Rhombus &mdash; order 2<br>
      &bull; Parallelogram &mdash; order 2<br>
      &bull; Regular n-gon &mdash; order n
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Triangle Constructions</h3>
    <p>Using <strong>ruler</strong>, <strong>compass</strong>, and <strong>protractor</strong>.</p>
    <div class="example">
      <strong>SSS</strong> &mdash; all 3 sides given: draw one side, use compass arcs from each end<br>
      <strong>SAS</strong> &mdash; 2 sides and included angle: draw one side, measure angle with protractor, mark second side<br>
      <strong>ASA</strong> &mdash; 2 angles and included side: draw the side, measure angles at each end<br><br>
      <strong>Key constructions:</strong><br>
      &bull; <strong>Perpendicular bisector</strong> &mdash; compass arcs from both endpoints, join intersections<br>
      &bull; <strong>Angle bisector</strong> &mdash; compass arc from vertex, then arcs from both points, join to vertex<br>
      &bull; <strong>60&deg; angle</strong> &mdash; draw arc from point, same radius arc from intersection, join
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Congruence &amp; Similarity</h3>
    <p><strong>Congruent</strong> shapes have the same shape and size. <strong>Similar</strong> shapes have the same shape but different size.</p>
    <div class="example">
      <strong>Congruence conditions for triangles:</strong><br>
      &bull; <strong>SSS</strong> &mdash; 3 sides equal<br>
      &bull; <strong>SAS</strong> &mdash; 2 sides and included angle equal<br>
      &bull; <strong>ASA</strong> &mdash; 2 angles and included side equal<br>
      &bull; <strong>RHS</strong> &mdash; right angle, hypotenuse, one side equal<br><br>
      <strong>Similar triangles:</strong><br>
      &bull; Same shape, corresponding angles equal<br>
      &bull; Corresponding sides in the same ratio
    </div>
  </div>
`

export const questions = [
  // ═════════════════════════════════════════════
  // TRIANGLES (Q1–25)
  // ═════════════════════════════════════════════
  { q:"A triangle with all three sides equal is called:", opts:["Equilateral", "Isosceles", "Scalene", "Right-angled"], ans:0, explain:"An equilateral triangle has all 3 sides equal and all angles = 60°." },
  { q:"A triangle with two equal sides is called:", opts:["Equilateral", "Isosceles", "Scalene", "Obtuse"], ans:1, explain:"An isosceles triangle has exactly 2 equal sides and 2 equal base angles." },
  { q:"A triangle with no equal sides is called:", opts:["Equilateral", "Isosceles", "Scalene", "Right-angled"], ans:2, explain:"A scalene triangle has no equal sides and no equal angles." },
  { q:"What is the angle sum of any triangle?", opts:["90°", "270°", "360°", "180°"], ans:3, explain:"The interior angles of any triangle always add up to 180°." },
  { q:"In a triangle, the angles are 50°, 70° and x°. Find x.", opts:["60°", "50°", "70°", "80°"], ans:0, explain:"50 + 70 + x = 180, so x = 60°." },
  { q:"A triangle with one angle of 90° is called:", opts:["Acute", "Right-angled", "Obtuse", "Equilateral"], ans:1, explain:"A right-angled triangle has exactly one 90° angle." },
  { q:"A triangle with one angle greater than 90° is called:", opts:["Acute", "Right-angled", "Obtuse", "Equilateral"], ans:2, explain:"An obtuse triangle has one angle greater than 90°." },
  { q:"All angles of an equilateral triangle measure:", opts:["90°", "45°", "120°", "60°"], ans:3, explain:"Each angle = 180° ÷ 3 = 60°." },
  { q:"The exterior angle of a triangle equals the sum of:", opts:["The two opposite interior angles", "All three interior angles", "The two adjacent angles", "The base angles only"], ans:0, explain:"Exterior angle theorem: exterior angle = sum of the two non-adjacent interior angles." },
  { q:"In triangle PQR, angle P = 40° and angle Q = 60°. Find angle R.", opts:["100°", "80°", "60°", "40°"], ans:1, explain:"40 + 60 + R = 180, so R = 80°." },
  { q:"An exterior angle of a triangle is 120°. The two opposite interior angles are 50° and x°. Find x.", opts:["50°", "60°", "70°", "80°"], ans:2, explain:"Exterior angle = sum of opposite interior angles: 120 = 50 + x, so x = 70°." },
  { q:"A triangle has angles in the ratio 1:2:3. What is the largest angle?", opts:["30°", "60°", "120°", "90°"], ans:3, explain:"1 + 2 + 3 = 6 parts. Largest = (3/6) × 180° = 90°." },
  { q:"Which triangle has all angles less than 90°?", opts:["Acute", "Right-angled", "Obtuse", "Reflex"], ans:0, explain:"An acute triangle has all three angles less than 90°." },
  { q:"In an isosceles triangle, the base angles are each 65°. Find the apex angle.", opts:["65°", "50°", "55°", "70°"], ans:1, explain:"65 + 65 + apex = 180, so apex = 50°." },
  { q:"A triangle has angles 3x°, 4x° and 5x°. Find x.", opts:["10", "20", "15", "25"], ans:2, explain:"3x + 4x + 5x = 180, 12x = 180, x = 15." },
  { q:"An exterior angle of a triangle is 130°. One opposite interior angle is 55°. Find the other.", opts:["55°", "60°", "65°", "75°"], ans:3, explain:"130 = 55 + x, so x = 75°." },
  { q:"How many lines of symmetry does an equilateral triangle have?", opts:["3", "1", "2", "0"], ans:0, explain:"An equilateral triangle has 3 lines of symmetry, one through each vertex to the midpoint of the opposite side." },
  { q:"Which type of triangle can be both isosceles and right-angled?", opts:["Equilateral", "Isosceles right-angled", "Scalene", "Obtuse"], ans:1, explain:"An isosceles right triangle has angles 90°, 45°, 45° with two equal legs." },
  { q:"The base of an isosceles triangle is 10 cm and each equal side is 13 cm. The triangle is:", opts:["Equilateral", "Right-angled only", "Isosceles", "Scalene"], ans:2, explain:"It has two equal sides (13 cm each), so it is isosceles." },
  { q:"A triangle with sides 5 cm, 5 cm and 5 cm is:", opts:["Isosceles only", "Scalene", "Right-angled", "Equilateral"], ans:3, explain:"All three sides are equal, so it is equilateral." },
  { q:"In triangle ABC, angle A = 90° and angle B = 35°. Find angle C.", opts:["55°", "65°", "45°", "35°"], ans:0, explain:"90 + 35 + C = 180, so C = 55°." },
  { q:"An isosceles triangle has an apex angle of 40°. Each base angle is:", opts:["40°", "70°", "80°", "60°"], ans:1, explain:"40 + 2b = 180, 2b = 140, b = 70°." },
  { q:"Which of these angle sets can form a triangle?", opts:["90°, 100°, 70°", "60°, 60°, 70°", "40°, 60°, 80°", "50°, 50°, 50°"], ans:2, explain:"40 + 60 + 80 = 180°. The others don't sum to 180°." },
  { q:"The exterior angle at vertex A of a triangle is 140°. The interior angle at A is:", opts:["140°", "50°", "60°", "40°"], ans:3, explain:"Interior + exterior = 180°, so interior = 180 - 140 = 40°." },
  { q:"A triangle has angles 2x°, (x+20)° and (x+40)°. Find x.", opts:["30", "20", "25", "35"], ans:0, explain:"2x + x + 20 + x + 40 = 180, 4x + 60 = 180, 4x = 120, x = 30." },

  // ═════════════════════════════════════════════
  // QUADRILATERAL PROPERTIES (Q26–45)
  // ═════════════════════════════════════════════
  { q:"What is the angle sum of any quadrilateral?", opts:["180°", "360°", "540°", "720°"], ans:1, explain:"The interior angles of any quadrilateral sum to (4-2)×180° = 360°." },
  { q:"Which quadrilateral has all sides equal and all angles 90°?", opts:["Rectangle", "Rhombus", "Square", "Parallelogram"], ans:2, explain:"A square has all sides equal and all angles 90°." },
  { q:"Which quadrilateral has opposite sides equal and all angles 90°?", opts:["Rhombus", "Trapezium", "Parallelogram", "Rectangle"], ans:3, explain:"A rectangle has opposite sides equal and all angles 90°." },
  { q:"In a parallelogram, opposite angles are:", opts:["Equal", "Supplementary", "Complementary", "Right angles"], ans:0, explain:"Opposite angles of a parallelogram are equal." },
  { q:"The diagonals of a rhombus:", opts:["Are equal in length", "Bisect each other at 90°", "Do not bisect each other", "Are parallel"], ans:1, explain:"The diagonals of a rhombus bisect each other at right angles." },
  { q:"A quadrilateral with exactly one pair of parallel sides is a:", opts:["Parallelogram", "Rectangle", "Trapezium", "Rhombus"], ans:2, explain:"A trapezium has exactly one pair of parallel sides." },
  { q:"A kite has:", opts:["All sides equal", "All angles equal", "No equal sides", "Two pairs of adjacent equal sides"], ans:3, explain:"A kite has two pairs of adjacent sides that are equal." },
  { q:"The diagonals of a rectangle are:", opts:["Equal and bisect each other", "Perpendicular", "Unequal", "Parallel"], ans:0, explain:"Rectangle diagonals are equal in length and bisect each other." },
  { q:"In a parallelogram, consecutive angles are:", opts:["Equal", "Supplementary (sum to 180°)", "Complementary", "Right angles"], ans:1, explain:"Co-interior angles between parallel sides are supplementary." },
  { q:"Which quadrilateral has all sides equal but angles not necessarily 90°?", opts:["Square", "Rectangle", "Rhombus", "Trapezium"], ans:2, explain:"A rhombus has all sides equal. Its angles are equal in opposite pairs but not necessarily 90°." },
  { q:"How many lines of symmetry does a rectangle have?", opts:["0", "1", "4", "2"], ans:3, explain:"A rectangle has 2 lines of symmetry (through midpoints of opposite sides)." },
  { q:"The diagonals of a square:", opts:["Are equal and bisect at 90°", "Are unequal", "Do not bisect each other", "Are parallel"], ans:0, explain:"Square diagonals are equal, bisect each other at 90°." },
  { q:"Three angles of a quadrilateral are 80°, 90° and 110°. The fourth angle is:", opts:["100°", "80°", "70°", "90°"], ans:1, explain:"80 + 90 + 110 + x = 360, so x = 80°." },
  { q:"Which shape is both a rectangle and a rhombus?", opts:["Parallelogram", "Trapezium", "Square", "Kite"], ans:2, explain:"A square satisfies both: all sides equal (rhombus) and all angles 90° (rectangle)." },
  { q:"In a kite, one pair of opposite angles is equal. Which pair?", opts:["Both pairs", "The pair between unequal sides", "Neither pair", "The pair between equal sides"], ans:3, explain:"In a kite, the angles between the pairs of equal sides are equal." },
  { q:"A parallelogram has one angle of 70°. The adjacent angle is:", opts:["110°", "70°", "140°", "90°"], ans:0, explain:"Adjacent angles in a parallelogram are supplementary: 180 - 70 = 110°." },
  { q:"How many lines of symmetry does a parallelogram have?", opts:["2", "0", "1", "4"], ans:1, explain:"A parallelogram has 0 lines of symmetry (unless it is a rectangle or rhombus)." },
  { q:"The diagonals of a kite:", opts:["Are equal", "Are parallel", "Intersect at 90°", "Bisect each other"], ans:2, explain:"The diagonals of a kite are perpendicular. The longer diagonal bisects the shorter one." },
  { q:"Which quadrilateral has rotational symmetry of order 2 but no line symmetry?", opts:["Rectangle", "Rhombus", "Square", "Parallelogram"], ans:3, explain:"A parallelogram (non-rectangular, non-rhombus) has order 2 rotational symmetry and 0 lines of symmetry." },
  { q:"The angles of a quadrilateral are x°, 2x°, 3x° and 4x°. Find x.", opts:["36", "40", "30", "45"], ans:0, explain:"x + 2x + 3x + 4x = 360, 10x = 360, x = 36." },

  // ═════════════════════════════════════════════
  // POLYGON ANGLE SUMS (Q46–70)
  // ═════════════════════════════════════════════
  { q:"The interior angle sum of a pentagon is:", opts:["360°", "540°", "720°", "900°"], ans:1, explain:"(5-2)×180° = 3×180° = 540°." },
  { q:"The interior angle sum of a hexagon is:", opts:["540°", "600°", "720°", "900°"], ans:2, explain:"(6-2)×180° = 4×180° = 720°." },
  { q:"The interior angle sum of a heptagon (7 sides) is:", opts:["720°", "540°", "360°", "900°"], ans:3, explain:"(7-2)×180° = 5×180° = 900°." },
  { q:"The interior angle sum of an octagon is:", opts:["1080°", "1260°", "900°", "720°"], ans:0, explain:"(8-2)×180° = 6×180° = 1080°." },
  { q:"The sum of exterior angles of any convex polygon is:", opts:["180°", "360°", "540°", "720°"], ans:1, explain:"The exterior angles of any convex polygon always sum to 360°." },
  { q:"Each exterior angle of a regular hexagon is:", opts:["30°", "45°", "60°", "72°"], ans:2, explain:"360° ÷ 6 = 60°." },
  { q:"Each interior angle of a regular hexagon is:", opts:["60°", "90°", "108°", "120°"], ans:3, explain:"(6-2)×180° ÷ 6 = 720° ÷ 6 = 120°." },
  { q:"Each exterior angle of a regular pentagon is:", opts:["72°", "60°", "108°", "90°"], ans:0, explain:"360° ÷ 5 = 72°." },
  { q:"Each interior angle of a regular pentagon is:", opts:["72°", "108°", "120°", "135°"], ans:1, explain:"(5-2)×180° ÷ 5 = 540° ÷ 5 = 108°." },
  { q:"Each interior angle of a regular octagon is:", opts:["120°", "108°", "135°", "144°"], ans:2, explain:"(8-2)×180° ÷ 8 = 1080° ÷ 8 = 135°." },
  { q:"Each exterior angle of a regular octagon is:", opts:["30°", "36°", "60°", "45°"], ans:3, explain:"360° ÷ 8 = 45°." },
  { q:"A polygon has an interior angle sum of 1440°. How many sides does it have?", opts:["10", "8", "9", "12"], ans:0, explain:"(n-2)×180 = 1440, n-2 = 8, n = 10." },
  { q:"A polygon has an interior angle sum of 1800°. How many sides?", opts:["10", "12", "14", "16"], ans:1, explain:"(n-2)×180 = 1800, n-2 = 10, n = 12." },
  { q:"A regular polygon has each exterior angle = 40°. How many sides?", opts:["6", "8", "9", "10"], ans:2, explain:"n = 360° ÷ 40° = 9." },
  { q:"A regular polygon has each interior angle = 144°. How many sides?", opts:["8", "9", "12", "10"], ans:3, explain:"Exterior = 180 - 144 = 36°. n = 360 ÷ 36 = 10." },
  { q:"The interior angle sum of a decagon (10 sides) is:", opts:["1440°", "1080°", "1260°", "1800°"], ans:0, explain:"(10-2)×180° = 8×180° = 1440°." },
  { q:"Each exterior angle of a regular decagon is:", opts:["30°", "36°", "40°", "45°"], ans:1, explain:"360° ÷ 10 = 36°." },
  { q:"Each interior angle of a regular decagon is:", opts:["120°", "135°", "144°", "150°"], ans:2, explain:"(10-2)×180° ÷ 10 = 1440° ÷ 10 = 144°." },
  { q:"Each interior angle of a regular nonagon is:", opts:["120°", "135°", "144°", "140°"], ans:3, explain:"(9-2)×180° ÷ 9 = 1260° ÷ 9 = 140°." },
  { q:"A regular polygon has each exterior angle = 30°. How many sides?", opts:["12", "10", "8", "15"], ans:0, explain:"n = 360° ÷ 30° = 12." },
  { q:"If each interior angle of a regular polygon is 150°, how many sides?", opts:["10", "12", "15", "18"], ans:1, explain:"Exterior = 180 - 150 = 30°. n = 360 ÷ 30 = 12." },
  { q:"The interior angle sum of a polygon with 15 sides is:", opts:["2160°", "2520°", "2340°", "2700°"], ans:2, explain:"(15-2)×180° = 13×180° = 2340°." },
  { q:"For any polygon, interior angle + exterior angle at any vertex equals:", opts:["90°", "270°", "360°", "180°"], ans:3, explain:"An interior angle and its adjacent exterior angle are supplementary, summing to 180°." },
  { q:"A regular polygon has each interior angle = 120°. The polygon is a:", opts:["Hexagon", "Pentagon", "Octagon", "Decagon"], ans:0, explain:"Exterior = 180 - 120 = 60°. n = 360 ÷ 60 = 6 → hexagon." },
  { q:"The interior angle sum of a nonagon (9 sides) is:", opts:["1080°", "1260°", "1440°", "900°"], ans:1, explain:"(9-2)×180° = 7×180° = 1260°." },

  // ═════════════════════════════════════════════
  // REGULAR POLYGONS (Q71–90)
  // ═════════════════════════════════════════════
  { q:"A regular polygon has all sides equal and:", opts:["Only 2 angles equal", "No angles equal", "All angles equal", "One right angle"], ans:2, explain:"A regular polygon has all sides AND all angles equal." },
  { q:"A regular pentagon has how many sides?", opts:["3", "4", "6", "5"], ans:3, explain:"Pentagon = 5 sides." },
  { q:"What is the name of a regular polygon with 6 sides?", opts:["Hexagon", "Heptagon", "Octagon", "Pentagon"], ans:0, explain:"A 6-sided polygon is a hexagon." },
  { q:"A regular heptagon has how many sides?", opts:["6", "7", "8", "9"], ans:1, explain:"Heptagon = 7 sides." },
  { q:"What is the name of a regular polygon with 8 sides?", opts:["Hexagon", "Heptagon", "Octagon", "Nonagon"], ans:2, explain:"An 8-sided polygon is an octagon." },
  { q:"A regular nonagon has how many sides?", opts:["7", "8", "10", "9"], ans:3, explain:"Nonagon = 9 sides." },
  { q:"What is the name of a regular polygon with 10 sides?", opts:["Decagon", "Nonagon", "Dodecagon", "Octagon"], ans:0, explain:"A 10-sided polygon is a decagon." },
  { q:"Each interior angle of a regular polygon is 108°. The polygon is a:", opts:["Hexagon", "Pentagon", "Octagon", "Square"], ans:1, explain:"Exterior = 180 - 108 = 72°. n = 360 ÷ 72 = 5 → pentagon." },
  { q:"Each exterior angle of a regular polygon is 72°. The polygon is a:", opts:["Hexagon", "Square", "Pentagon", "Octagon"], ans:2, explain:"n = 360 ÷ 72 = 5 → pentagon." },
  { q:"How many diagonals does a regular hexagon have?", opts:["6", "3", "12", "9"], ans:3, explain:"Diagonals = n(n-3)/2 = 6×3/2 = 9." },
  { q:"How many diagonals does a regular pentagon have?", opts:["5", "6", "8", "10"], ans:0, explain:"Diagonals = 5(5-3)/2 = 5×2/2 = 5." },
  { q:"The sum of one interior and its adjacent exterior angle at any vertex is:", opts:["360°", "180°", "90°", "270°"], ans:1, explain:"They form a straight line, so they sum to 180°." },
  { q:"A regular polygon has 12 sides. Each exterior angle is:", opts:["24°", "36°", "30°", "40°"], ans:2, explain:"360° ÷ 12 = 30°." },
  { q:"A regular polygon has 12 sides. Each interior angle is:", opts:["120°", "135°", "144°", "150°"], ans:3, explain:"180° - 30° = 150°." },
  { q:"How many diagonals does a quadrilateral have?", opts:["2", "3", "4", "1"], ans:0, explain:"Diagonals = 4(4-3)/2 = 4×1/2 = 2." },
  { q:"How many diagonals does an octagon have?", opts:["16", "20", "24", "28"], ans:1, explain:"Diagonals = 8(8-3)/2 = 8×5/2 = 20." },
  { q:"A regular polygon has 20 sides. Each exterior angle is:", opts:["15°", "20°", "18°", "24°"], ans:2, explain:"360° ÷ 20 = 18°." },
  { q:"A regular polygon has 20 sides. Each interior angle is:", opts:["156°", "160°", "164°", "162°"], ans:3, explain:"180° - 18° = 162°." },
  { q:"The number of triangles formed by drawing all diagonals from one vertex of an n-gon is:", opts:["n − 2", "n − 1", "n", "n − 3"], ans:0, explain:"From one vertex, you draw (n-3) diagonals, dividing the polygon into (n-2) triangles." },
  { q:"A regular polygon has each exterior angle = 24°. How many sides?", opts:["12", "15", "18", "20"], ans:1, explain:"n = 360 ÷ 24 = 15." },

  // ═════════════════════════════════════════════
  // SYMMETRY (Q91–110)
  // ═════════════════════════════════════════════
  { q:"How many lines of symmetry does a square have?", opts:["2", "3", "4", "1"], ans:2, explain:"A square has 4 lines of symmetry: 2 through midpoints of opposite sides, 2 through opposite vertices." },
  { q:"What is the order of rotational symmetry of a square?", opts:["1", "2", "3", "4"], ans:3, explain:"A square maps onto itself 4 times in a full 360° turn → order 4." },
  { q:"How many lines of symmetry does an equilateral triangle have?", opts:["3", "1", "2", "0"], ans:0, explain:"An equilateral triangle has 3 lines of symmetry." },
  { q:"The order of rotational symmetry of an equilateral triangle is:", opts:["1", "3", "2", "6"], ans:1, explain:"An equilateral triangle maps onto itself 3 times in 360° → order 3." },
  { q:"How many lines of symmetry does an isosceles triangle have?", opts:["0", "2", "1", "3"], ans:2, explain:"An isosceles triangle has 1 line of symmetry through the apex and the midpoint of the base." },
  { q:"How many lines of symmetry does a scalene triangle have?", opts:["1", "2", "3", "0"], ans:3, explain:"A scalene triangle has no lines of symmetry." },
  { q:"What is the order of rotational symmetry of a rectangle?", opts:["2", "1", "4", "3"], ans:0, explain:"A rectangle maps onto itself 2 times in 360° → order 2." },
  { q:"How many lines of symmetry does a rhombus have?", opts:["0", "2", "4", "1"], ans:1, explain:"A rhombus has 2 lines of symmetry along its diagonals." },
  { q:"The order of rotational symmetry of a rhombus is:", opts:["1", "4", "2", "3"], ans:2, explain:"A rhombus maps onto itself 2 times in 360° → order 2." },
  { q:"How many lines of symmetry does a parallelogram have?", opts:["2", "1", "4", "0"], ans:3, explain:"A parallelogram (non-rectangle, non-rhombus) has 0 lines of symmetry." },
  { q:"The order of rotational symmetry of a parallelogram is:", opts:["2", "1", "4", "0"], ans:0, explain:"A parallelogram maps onto itself 2 times in 360° → order 2." },
  { q:"How many lines of symmetry does a kite have?", opts:["0", "1", "2", "4"], ans:1, explain:"A kite has 1 line of symmetry along the main diagonal." },
  { q:"A regular pentagon has how many lines of symmetry?", opts:["3", "4", "5", "6"], ans:2, explain:"A regular n-gon has n lines of symmetry. Pentagon → 5 lines." },
  { q:"The order of rotational symmetry of a regular pentagon is:", opts:["3", "4", "10", "5"], ans:3, explain:"A regular n-gon has rotational symmetry of order n. Pentagon → order 5." },
  { q:"A regular octagon has how many lines of symmetry?", opts:["8", "4", "6", "10"], ans:0, explain:"A regular octagon has 8 lines of symmetry." },
  { q:"The order of rotational symmetry of a regular hexagon is:", opts:["3", "6", "4", "12"], ans:1, explain:"A regular hexagon maps onto itself 6 times in 360° → order 6." },
  { q:"A regular decagon has how many lines of symmetry?", opts:["5", "8", "10", "12"], ans:2, explain:"A regular decagon has 10 lines of symmetry." },
  { q:"The order of rotational symmetry of a regular decagon is:", opts:["5", "8", "12", "10"], ans:3, explain:"A regular decagon has rotational symmetry of order 10." },
  { q:"Which shape has exactly 1 line of symmetry and no rotational symmetry (order 1)?", opts:["Kite", "Square", "Rectangle", "Parallelogram"], ans:0, explain:"A kite has 1 line of symmetry and rotational symmetry of order 1 (no rotational symmetry)." },
  { q:"A regular n-gon has rotational symmetry of order:", opts:["2n", "n", "n − 1", "n + 1"], ans:1, explain:"A regular n-gon maps onto itself n times in 360° → order n." },

  // ═════════════════════════════════════════════
  // CONSTRUCTIONS & CONGRUENCE (Q111–130)
  // ═════════════════════════════════════════════
  { q:"To construct a triangle given all 3 sides, which method is used?", opts:["SAS", "ASA", "SSS", "RHS"], ans:2, explain:"When all 3 sides are given, we use the SSS construction." },
  { q:"To construct a triangle given 2 sides and the included angle, which method is used?", opts:["SSS", "ASA", "RHS", "SAS"], ans:3, explain:"Two sides and the included angle → SAS construction." },
  { q:"To construct a triangle given 2 angles and the included side, which method is used?", opts:["ASA", "SSS", "SAS", "RHS"], ans:0, explain:"Two angles and the included side → ASA construction." },
  { q:"A perpendicular bisector of a line segment divides it into:", opts:["Three equal parts", "Two equal parts at 90°", "Two unequal parts", "Two parts at 60°"], ans:1, explain:"A perpendicular bisector cuts a line segment into two equal halves at right angles." },
  { q:"An angle bisector divides an angle into:", opts:["Three equal parts", "Two unequal parts", "Two equal parts", "Four equal parts"], ans:2, explain:"An angle bisector divides an angle into two equal halves." },
  { q:"To construct a 60° angle using a compass, you:", opts:["Draw a semicircle", "Use a protractor only", "Draw two perpendicular lines", "Draw an arc, then with same radius draw an arc from the intersection"], ans:3, explain:"Draw an arc from the vertex, then using the same radius, draw an arc from the point where the first arc crosses the ray. Join the intersection to the vertex for 60°." },
  { q:"Congruent shapes have:", opts:["Same shape and same size", "Same shape but different size", "Different shape and different size", "Same size but different shape"], ans:0, explain:"Congruent = identical in shape and size." },
  { q:"Similar shapes have:", opts:["Same shape and same size", "Same shape but different size", "Different shape and different size", "Same size but different shape"], ans:1, explain:"Similar = same shape, but sizes may differ (corresponding sides in the same ratio)." },
  { q:"Which is NOT a valid congruence condition for triangles?", opts:["SSS", "SAS", "SSA", "ASA"], ans:2, explain:"SSA (two sides and a non-included angle) is not a valid congruence condition — it can produce two different triangles (ambiguous case)." },
  { q:"RHS congruence applies when a triangle has:", opts:["Two equal sides", "Three equal angles", "Two right angles", "A right angle, hypotenuse and one other side equal"], ans:3, explain:"RHS: Right angle, Hypotenuse, Side → guarantees congruence for right-angled triangles." },
  { q:"Two triangles with sides 3 cm, 4 cm, 5 cm and 3 cm, 4 cm, 5 cm are:", opts:["Congruent by SSS", "Congruent by SAS", "Similar only", "Neither congruent nor similar"], ans:0, explain:"All three corresponding sides are equal → SSS congruence." },
  { q:"Two triangles have angles 40°, 60°, 80° each. They are necessarily:", opts:["Congruent", "Similar", "Neither", "Congruent by ASA"], ans:1, explain:"Equal angles means same shape → similar. They are not necessarily congruent (could be different sizes)." },
  { q:"In SSS construction, which tool is essential besides a ruler?", opts:["Protractor only", "Set square only", "Compass", "Calculator"], ans:2, explain:"A compass is needed to draw arcs of the correct side lengths." },
  { q:"In SAS construction, which tool is needed to measure the included angle?", opts:["Compass only", "Ruler only", "Set square", "Protractor"], ans:3, explain:"A protractor is needed to measure and draw the included angle." },
  { q:"To construct a perpendicular bisector, you need:", opts:["Compass and ruler", "Protractor only", "Set square only", "Calculator"], ans:0, explain:"Open compass to more than half the segment length, draw arcs from both endpoints, join the intersections with a ruler." },
  { q:"Two triangles are congruent. One has sides 5, 7, 8. The other must have sides:", opts:["5, 5, 8", "5, 7, 8", "5, 7, 10", "7, 7, 8"], ans:1, explain:"Congruent triangles have exactly the same side lengths: 5, 7, 8." },
  { q:"Which congruence condition involves a right angle?", opts:["SSS", "SAS", "RHS", "ASA"], ans:2, explain:"RHS stands for Right angle–Hypotenuse–Side." },
  { q:"Triangles ABC and PQR have AB = PQ, angle B = angle Q, BC = QR. They are congruent by:", opts:["SSS", "ASA", "RHS", "SAS"], ans:3, explain:"Two sides and the included angle are equal → SAS congruence." },
  { q:"To bisect an angle, after drawing an arc from the vertex, the next step is:", opts:["Draw arcs of equal radius from the two points where the first arc crosses the arms", "Measure with a protractor", "Draw a perpendicular line", "Connect the two points directly"], ans:0, explain:"From the two points on the arms, draw equal arcs to find the intersection, then join to vertex." },
  { q:"A triangle with sides 6, 8, 10 and another with sides 3, 4, 5 are:", opts:["Congruent", "Similar", "Neither", "Congruent by RHS"], ans:1, explain:"The sides are in the ratio 2:1 (6/3 = 8/4 = 10/5 = 2). Same shape, different size → similar." },

  // ═════════════════════════════════════════════
  // MIXED (Q131–150)
  // ═════════════════════════════════════════════
  { q:"The interior angle sum of a polygon with 20 sides is:", opts:["2880°", "3060°", "3240°", "3600°"], ans:2, explain:"(20-2)×180° = 18×180° = 3240°." },
  { q:"A triangle has angles (2x+10)°, (3x)° and (x+20)°. Find x.", opts:["20", "30", "35", "25"], ans:3, explain:"2x+10 + 3x + x+20 = 180, 6x + 30 = 180, 6x = 150, x = 25." },
  { q:"The exterior angle of a regular polygon is 20°. How many sides?", opts:["18", "15", "20", "12"], ans:0, explain:"n = 360 ÷ 20 = 18." },
  { q:"A rhombus has one angle of 50°. The other three angles are:", opts:["50°, 130°, 50°", "130°, 50°, 130°", "50°, 50°, 50°", "130°, 130°, 130°"], ans:1, explain:"Opposite angles are equal (50° and 50°). Adjacent angles are supplementary (130° and 130°). So 130°, 50°, 130°." },
  { q:"How many lines of symmetry does a regular hexagon have?", opts:["3", "4", "6", "8"], ans:2, explain:"A regular hexagon has 6 lines of symmetry." },
  { q:"Which construction uses all three sides to draw a unique triangle?", opts:["ASA", "SAS", "RHS", "SSS"], ans:3, explain:"Given all 3 sides → SSS construction yields a unique triangle." },
  { q:"The angle sum of a triangle is 180°. This means the sum for a quadrilateral is:", opts:["360°", "270°", "540°", "180°"], ans:0, explain:"A quadrilateral can be divided into 2 triangles: 2 × 180° = 360°." },
  { q:"In an isosceles trapezium, the base angles are:", opts:["Supplementary", "Equal", "Right angles", "Complementary"], ans:1, explain:"In an isosceles trapezium, the two base angles are equal." },
  { q:"A regular polygon has rotational symmetry of order 8. Each interior angle is:", opts:["120°", "108°", "135°", "144°"], ans:2, explain:"Order 8 → 8 sides. Each interior angle = (8-2)×180° ÷ 8 = 135°." },
  { q:"Two right-angled triangles have hypotenuse = 10 cm and one leg = 6 cm. They are congruent by:", opts:["SSS", "SAS", "ASA", "RHS"], ans:3, explain:"Right angle, hypotenuse 10, one side 6 → RHS congruence." },
  { q:"A polygon with interior angle sum 1620° has how many sides?", opts:["11", "10", "12", "9"], ans:0, explain:"(n-2)×180 = 1620, n-2 = 9, n = 11." },
  { q:"The diagonals of a rectangle bisect each other. This means they:", opts:["Are perpendicular", "Cut each other into equal halves", "Are parallel", "Do not intersect"], ans:1, explain:"'Bisect each other' means each diagonal is cut into two equal halves at the point of intersection." },
  { q:"A scalene triangle has rotational symmetry of order:", opts:["2", "3", "1", "0"], ans:2, explain:"A scalene triangle has no rotational symmetry, meaning its order of rotational symmetry is 1 (identity only)." },
  { q:"Which pair of triangles is congruent: AB = 5, BC = 7, angle B = 50° and PQ = 5, QR = 7, angle Q = 50°?", opts:["SSS", "ASA", "RHS", "SAS"], ans:3, explain:"Two sides (5 and 7) and the included angle (50°) → SAS congruence." },
  { q:"A regular 15-gon has each exterior angle of:", opts:["24°", "20°", "30°", "36°"], ans:0, explain:"360° ÷ 15 = 24°." },
  { q:"How many diagonals does a decagon have?", opts:["30", "35", "40", "45"], ans:1, explain:"Diagonals = 10(10-3)/2 = 10×7/2 = 35." },
  { q:"A kite has angles 100°, 60°, 100° and x°. Find x.", opts:["80°", "120°", "100°", "60°"], ans:2, explain:"Angle sum = 360°. 100 + 60 + 100 + x = 360, x = 100°." },
  { q:"A triangle is constructed using ASA. Which elements are known?", opts:["3 sides", "2 sides and 1 angle", "3 angles", "2 angles and the included side"], ans:3, explain:"ASA = 2 Angles and the included Side." },
  { q:"Each interior angle of a regular polygon is 156°. How many sides?", opts:["15", "12", "18", "20"], ans:0, explain:"Exterior = 180 - 156 = 24°. n = 360 ÷ 24 = 15." },
  { q:"Two similar triangles have corresponding sides in ratio 3:1. If the smaller triangle has perimeter 12 cm, the larger has perimeter:", opts:["24 cm", "36 cm", "48 cm", "60 cm"], ans:1, explain:"Ratio of perimeters = ratio of sides = 3:1. Larger perimeter = 12 × 3 = 36 cm." }
]
