export const meta = {
  id: 6, sem: 1,
  title: 'Linear Functions \\& Graphs',
  desc: 'Cartesian plane, y = mx + c, gradients'
}

export const notes = `

  <h2>Linear Functions &amp; Graphs</h2>
  <p class="topic-desc">Cartesian plane, y = mx + c, gradients</p>

  <div class="notes-card">
    <h3>1. Cartesian Coordinate System</h3>
    <p>The <strong>Cartesian plane</strong> is formed by two perpendicular number lines.</p>
    <div class="example">
      <strong>x-axis</strong> — horizontal line<br>
      <strong>y-axis</strong> — vertical line<br>
      <strong>Origin</strong> — the point (0, 0) where the axes meet<br><br>
      <strong>4 Quadrants:</strong><br>
      Quadrant I: x &gt; 0, y &gt; 0 (top-right)<br>
      Quadrant II: x &lt; 0, y &gt; 0 (top-left)<br>
      Quadrant III: x &lt; 0, y &lt; 0 (bottom-left)<br>
      Quadrant IV: x &gt; 0, y &lt; 0 (bottom-right)<br><br>
      Every point is an <strong>ordered pair (x, y)</strong>. Move right/left for x, then up/down for y.
    </div>
  </div>

  <div class="notes-card">
    <h3>2. What is a Function</h3>
    <p>A <strong>function</strong> is a rule that maps each input to exactly one output.</p>
    <div class="example">
      <strong>Function notation:</strong> f(x) means "the output when x is the input"<br><br>
      <strong>Function machine:</strong> Input &rarr; Rule &rarr; Output<br>
      e.g. f(x) = 2x + 1: &nbsp; 3 &rarr; &times;2 + 1 &rarr; <span class="highlight">7</span><br><br>
      <strong>Input-output table:</strong><br>
      x &nbsp;| &nbsp;1 &nbsp;| &nbsp;2 &nbsp;| &nbsp;3 &nbsp;| &nbsp;4<br>
      f(x)| &nbsp;3 &nbsp;| &nbsp;5 &nbsp;| &nbsp;7 &nbsp;| &nbsp;9<br>
      (Rule: f(x) = 2x + 1)
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Linear Functions y = mx + c</h3>
    <p>A <strong>linear function</strong> produces a straight-line graph. Its general form is <span class="highlight">y = mx + c</span>.</p>
    <div class="example">
      <strong>m</strong> = gradient (slope) — how steep the line is<br>
      <strong>c</strong> = y-intercept — where the line crosses the y-axis<br><br>
      Example: y = 3x &minus; 2 &rarr; m = 3, c = &minus;2<br>
      Example: y = &minus;x + 5 &rarr; m = &minus;1, c = 5<br><br>
      <strong>Plotting by table of values:</strong><br>
      Choose at least 2 x-values, calculate y, plot points, draw line.
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Gradient (Slope)</h3>
    <p>The <strong>gradient</strong> measures how steep a line is.</p>
    <div class="example">
      <div class="formula">m = (y₂ &minus; y₁) / (x₂ &minus; x₁)</div>
      <strong>Positive gradient:</strong> line goes up from left to right ↗<br>
      <strong>Negative gradient:</strong> line goes down from left to right ↘<br>
      <strong>Zero gradient:</strong> horizontal line (y = k)<br>
      <strong>Undefined gradient:</strong> vertical line (x = k)<br><br>
      The larger |m|, the <strong>steeper</strong> the line.<br>
      e.g. Points (1, 2) and (4, 8): m = (8 &minus; 2)/(4 &minus; 1) = 6/3 = <span class="highlight">2</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>5. y-intercept and x-intercept</h3>
    <p>Intercepts are the points where a line crosses the axes.</p>
    <div class="example">
      <strong>y-intercept:</strong> set x = 0 and solve for y<br>
      y = 2x + 3 &rarr; y-intercept = <span class="highlight">(0, 3)</span><br><br>
      <strong>x-intercept:</strong> set y = 0 and solve for x<br>
      0 = 2x + 3 &rarr; x = &minus;3/2 &rarr; x-intercept = <span class="highlight">(&minus;1.5, 0)</span><br><br>
      The y-intercept is always the value of c in y = mx + c.
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Sketching Linear Graphs</h3>
    <p>Two main methods to sketch a straight line:</p>
    <div class="example">
      <strong>Method 1 — Table of values:</strong><br>
      Pick at least 2 x-values, calculate y, plot points, join with a straight line.<br><br>
      <strong>Method 2 — Gradient-intercept:</strong><br>
      1. Start at the y-intercept (0, c)<br>
      2. Use the gradient: rise/run to find the next point<br>
      3. Draw the line through both points<br><br>
      <strong>Special lines:</strong><br>
      Horizontal line: <span class="highlight">y = k</span> (gradient = 0)<br>
      Vertical line: <span class="highlight">x = k</span> (gradient is undefined)
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Parallel Lines &amp; Special Lines</h3>
    <p><strong>Parallel lines</strong> have the same gradient but different y-intercepts.</p>
    <div class="example">
      y = 2x + 1 and y = 2x &minus; 3 are parallel (both have m = 2)<br><br>
      <strong>Special lines:</strong><br>
      y = 0 is the <strong>x-axis</strong><br>
      x = 0 is the <strong>y-axis</strong><br><br>
      <strong>Real-life examples:</strong><br>
      Taxi fare: Cost = 3.90 + 0.22 &times; distance (linear with m = 0.22, c = 3.90)<br>
      Phone plan: Bill = 20 + 0.05 &times; minutes (linear with m = 0.05, c = 20)
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════
  // COORDINATES & QUADRANTS (Q1–Q20)
  // ═══════════════════════════════════════════
  { q:"The point (3, 5) lies in which quadrant?", opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"], ans:0, explain:"Both x = 3 and y = 5 are positive, so the point is in Quadrant I (top-right)." },
  { q:"The point (−4, 2) lies in which quadrant?", opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"], ans:1, explain:"x is negative and y is positive, so the point is in Quadrant II (top-left)." },
  { q:"The point (−3, −7) lies in which quadrant?", opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"], ans:2, explain:"Both x and y are negative, so the point is in Quadrant III (bottom-left)." },
  { q:"The point (5, −2) lies in which quadrant?", opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"], ans:3, explain:"x is positive and y is negative, so the point is in Quadrant IV (bottom-right)." },
  { q:"What are the coordinates of the origin?", opts:["(0, 0)","(1, 1)","(0, 1)","(1, 0)"], ans:0, explain:"The origin is the point where the x-axis and y-axis meet, which is (0, 0)." },
  { q:"A point on the y-axis has which x-coordinate?", opts:["Any value","0","1","−1"], ans:1, explain:"Every point on the y-axis has x = 0." },
  { q:"A point on the x-axis has which y-coordinate?", opts:["1","−1","0","Any value"], ans:2, explain:"Every point on the x-axis has y = 0." },
  { q:"Which point lies on the x-axis?", opts:["(0, 5)","(3, 3)","(−2, 1)","(4, 0)"], ans:3, explain:"A point is on the x-axis when y = 0. Only (4, 0) has y = 0." },
  { q:"Which point lies on the y-axis?", opts:["(0, −3)","(2, 0)","(−1, 4)","(3, 3)"], ans:0, explain:"A point is on the y-axis when x = 0. Only (0, −3) has x = 0." },
  { q:"The point (−6, 0) lies on which axis?", opts:["y-axis","x-axis","Neither","Both"], ans:1, explain:"Since y = 0, the point lies on the x-axis." },
  { q:"What is the x-coordinate of the point (7, −3)?", opts:["−3","3","7","−7"], ans:2, explain:"In the ordered pair (x, y), the first number is the x-coordinate. So x = 7." },
  { q:"What is the y-coordinate of the point (−2, 9)?", opts:["−2","2","−9","9"], ans:3, explain:"In the ordered pair (x, y), the second number is the y-coordinate. So y = 9." },
  { q:"Which quadrant contains points where x > 0 and y < 0?", opts:["Quadrant IV","Quadrant I","Quadrant II","Quadrant III"], ans:0, explain:"x positive and y negative corresponds to the bottom-right region: Quadrant IV." },
  { q:"The horizontal axis is called the:", opts:["y-axis","x-axis","z-axis","origin"], ans:1, explain:"The horizontal axis is the x-axis." },
  { q:"The vertical axis is called the:", opts:["x-axis","origin","y-axis","z-axis"], ans:2, explain:"The vertical axis is the y-axis." },
  { q:"Which point is 4 units to the left of the origin and 3 units up?", opts:["(4, 3)","(3, −4)","(−3, 4)","(−4, 3)"], ans:3, explain:"Left means negative x, up means positive y. The point is (−4, 3)." },
  { q:"The distance from (0, 0) to (3, 0) along the x-axis is:", opts:["3 units","0 units","6 units","9 units"], ans:0, explain:"Moving from x = 0 to x = 3 is 3 units along the x-axis." },
  { q:"If a point has coordinates (0, 0), it is called the:", opts:["x-intercept","origin","y-intercept","quadrant"], ans:1, explain:"The point (0, 0) is called the origin." },
  { q:"In which quadrant is x < 0 and y > 0?", opts:["Quadrant I","Quadrant IV","Quadrant II","Quadrant III"], ans:2, explain:"Negative x and positive y is Quadrant II (top-left)." },
  { q:"Which of these points is furthest from the origin along the x-axis?", opts:["(2, 5)","(3, −1)","(−4, 0)","(−7, 0)"], ans:3, explain:"(−7, 0) is 7 units from the origin along the x-axis, which is the furthest." },
  // ═══════════════════════════════════════════
  // FUNCTION TABLES / f(x) (Q21–Q40)
  // ═══════════════════════════════════════════
  { q:"If f(x) = 2x + 1, find f(3).", opts:["7","5","8","6"], ans:0, explain:"f(3) = 2(3) + 1 = 6 + 1 = 7." },
  { q:"If f(x) = 3x − 2, find f(4).", opts:["8","10","14","12"], ans:1, explain:"f(4) = 3(4) − 2 = 12 − 2 = 10." },
  { q:"If f(x) = x + 5, find f(−3).", opts:["8","−2","2","3"], ans:2, explain:"f(−3) = −3 + 5 = 2." },
  { q:"If f(x) = 4x, find f(−2).", opts:["8","−2","2","−8"], ans:3, explain:"f(−2) = 4(−2) = −8." },
  { q:"If f(x) = 2x + 3, find f(0).", opts:["3","0","2","5"], ans:0, explain:"f(0) = 2(0) + 3 = 0 + 3 = 3." },
  { q:"If f(x) = −x + 4, find f(6).", opts:["10","−2","2","−10"], ans:1, explain:"f(6) = −6 + 4 = −2." },
  { q:"A function machine doubles the input then subtracts 3. What is the output when input = 5?", opts:["10","13","7","8"], ans:2, explain:"2(5) − 3 = 10 − 3 = 7." },
  { q:"If f(x) = 5x + 2, which input gives f(x) = 17?", opts:["2","4","5","3"], ans:3, explain:"5x + 2 = 17 → 5x = 15 → x = 3." },
  { q:"For f(x) = 3x − 1, complete: f(2) = ?", opts:["5","7","3","4"], ans:0, explain:"f(2) = 3(2) − 1 = 6 − 1 = 5." },
  { q:"For the table x: 1,2,3,4 and y: 4,7,10,13, what is the rule?", opts:["y = 2x + 1","y = 3x + 1","y = 4x","y = x + 3"], ans:1, explain:"When x = 1: 3(1)+1 = 4 ✓. When x = 2: 3(2)+1 = 7 ✓. The rule is y = 3x + 1." },
  { q:"If f(x) = −2x + 10, find f(5).", opts:["20","−10","0","5"], ans:2, explain:"f(5) = −2(5) + 10 = −10 + 10 = 0." },
  { q:"If f(x) = x − 7, for what value of x is f(x) = 0?", opts:["0","−7","1","7"], ans:3, explain:"x − 7 = 0 → x = 7." },
  { q:"A function triples the input and adds 2. Find the output for input −1.", opts:["−1","5","1","−5"], ans:0, explain:"3(−1) + 2 = −3 + 2 = −1." },
  { q:"For f(x) = 2x + 4, what is f(−2)?", opts:["−8","0","8","2"], ans:1, explain:"f(−2) = 2(−2) + 4 = −4 + 4 = 0." },
  { q:"If the rule is y = x/2 + 1, find y when x = 6.", opts:["2","3","4","7"], ans:2, explain:"y = 6/2 + 1 = 3 + 1 = 4." },
  { q:"For the table x: 0,1,2,3 and y: −2,1,4,7, what is the rule?", opts:["y = 2x − 2","y = x − 2","y = 4x − 2","y = 3x − 2"], ans:3, explain:"When x = 0: 3(0)−2 = −2 ✓. When x = 1: 3(1)−2 = 1 ✓. Rule is y = 3x − 2." },
  { q:"If f(x) = 10 − x, find f(10).", opts:["0","10","20","−10"], ans:0, explain:"f(10) = 10 − 10 = 0." },
  { q:"If g(x) = 4x − 3, what is g(0)?", opts:["4","−3","3","0"], ans:1, explain:"g(0) = 4(0) − 3 = −3." },
  { q:"If f(x) = 2x + 1 and g(x) = x − 3, find f(2) + g(2).", opts:["3","6","4","8"], ans:2, explain:"f(2) = 2(2)+1 = 5. g(2) = 2−3 = −1. Sum = 5 + (−1) = 4." },
  { q:"The input-output table shows x: 2,4,6 → y: 5,9,13. What is y when x = 8?", opts:["15","16","18","17"], ans:3, explain:"The rule is y = 2x + 1. When x = 8: y = 2(8)+1 = 17." },
  // ═══════════════════════════════════════════
  // IDENTIFY m AND c FROM EQUATIONS (Q41–Q65)
  // ═══════════════════════════════════════════
  { q:"For y = 3x + 2, what is the gradient?", opts:["3","2","−3","−2"], ans:0, explain:"In y = mx + c, the coefficient of x is the gradient. m = 3." },
  { q:"For y = −2x + 5, what is the y-intercept?", opts:["−2","5","2","−5"], ans:1, explain:"In y = mx + c, c is the y-intercept. c = 5." },
  { q:"For y = 4x − 1, what are the gradient and y-intercept?", opts:["m = −1, c = 4","m = 4, c = 1","m = 4, c = −1","m = −4, c = 1"], ans:2, explain:"y = 4x − 1: m = 4 (gradient) and c = −1 (y-intercept)." },
  { q:"What is the gradient of y = −x + 3?", opts:["3","0","1","−1"], ans:3, explain:"y = −x + 3 means y = (−1)x + 3, so m = −1." },
  { q:"What is the y-intercept of y = 7x?", opts:["0","7","−7","1"], ans:0, explain:"y = 7x can be written as y = 7x + 0. So c = 0." },
  { q:"For y = ½x + 4, the gradient is:", opts:["4","½","2","−½"], ans:1, explain:"The coefficient of x is ½, so m = ½." },
  { q:"Which equation has gradient 5 and y-intercept −3?", opts:["y = −3x + 5","y = 3x − 5","y = 5x − 3","y = −5x + 3"], ans:2, explain:"m = 5 and c = −3 gives y = 5x − 3." },
  { q:"For y = −3x − 4, the y-intercept is:", opts:["3","−3","4","−4"], ans:3, explain:"In y = −3x − 4, c = −4." },
  { q:"What is the gradient of y = 6?", opts:["0","6","−6","Undefined"], ans:0, explain:"y = 6 is a horizontal line. It can be written as y = 0x + 6, so m = 0." },
  { q:"The equation y = −4x + 1 represents a line that slopes:", opts:["Upward","Downward","Horizontal","Vertical"], ans:1, explain:"The gradient m = −4 is negative, so the line slopes downward (left to right)." },
  { q:"Which equation has the steepest line?", opts:["y = 2x + 1","y = 3x − 2","y = 5x + 4","y = x − 1"], ans:2, explain:"Steepness is determined by |m|. |5| = 5 is the largest, so y = 5x + 4 is steepest." },
  { q:"For y = −½x + 6, what is the gradient?", opts:["6","½","−6","−½"], ans:3, explain:"The coefficient of x is −½, so m = −½." },
  { q:"Rewrite 2y = 6x + 4 in the form y = mx + c. What is m?", opts:["3","6","2","4"], ans:0, explain:"Divide both sides by 2: y = 3x + 2. So m = 3." },
  { q:"Rewrite 3y = 9x − 6 in the form y = mx + c. What is c?", opts:["9","−2","3","−6"], ans:1, explain:"Divide both sides by 3: y = 3x − 2. So c = −2." },
  { q:"Which line passes through the origin?", opts:["y = x + 1","y = 2x − 3","y = 4x","y = −x + 2"], ans:2, explain:"A line passes through the origin when c = 0. y = 4x has c = 0." },
  { q:"For the equation y − 2x = 3, what is the gradient?", opts:["3","−3","−2","2"], ans:3, explain:"Rearrange: y = 2x + 3. So m = 2." },
  { q:"What is the y-intercept of y = −x?", opts:["0","1","−1","Undefined"], ans:0, explain:"y = −x means y = −1·x + 0. So c = 0." },
  { q:"The line y = 2x + 7 crosses the y-axis at:", opts:["(2, 0)","(0, 7)","(7, 0)","(0, 2)"], ans:1, explain:"The y-intercept is c = 7, so the line crosses the y-axis at (0, 7)." },
  { q:"Which of these is NOT in the form y = mx + c?", opts:["y = 3x + 1","y = −x − 4","x = 2y + 3","y = 5x"], ans:2, explain:"x = 2y + 3 has x as the subject, not y. It is not in the form y = mx + c." },
  { q:"For y = ¾x − 5, the gradient and y-intercept are:", opts:["m = −5, c = ¾","m = 5, c = ¾","m = ¾, c = 5","m = ¾, c = −5"], ans:3, explain:"In y = ¾x − 5: m = ¾ and c = −5." },
  { q:"Which equation has a negative gradient and positive y-intercept?", opts:["y = −2x + 3","y = 2x + 3","y = −2x − 3","y = 2x − 3"], ans:0, explain:"y = −2x + 3 has m = −2 (negative) and c = 3 (positive)." },
  { q:"A line has equation y = mx + c. If it goes through (0, −4), what is c?", opts:["0","−4","4","Cannot tell"], ans:1, explain:"The point (0, −4) means when x = 0, y = −4. Since y-intercept = c, c = −4." },
  { q:"Rearrange x + y = 5 into the form y = mx + c. What is m?", opts:["1","5","−1","0"], ans:2, explain:"y = −x + 5, so m = −1." },
  { q:"The line y = 0.5x + 2 has a gradient of:", opts:["2","−0.5","−2","0.5"], ans:3, explain:"The coefficient of x is 0.5, so m = 0.5." },
  { q:"For 4x + 2y = 10, express in y = mx + c form. What is m?", opts:["−2","4","2","5"], ans:0, explain:"2y = −4x + 10 → y = −2x + 5. So m = −2." },
  // ═══════════════════════════════════════════
  // GRADIENT CALCULATIONS (Q66–Q90)
  // ═══════════════════════════════════════════
  { q:"Find the gradient of the line passing through (1, 2) and (3, 6).", opts:["1","2","3","4"], ans:1, explain:"m = (6−2)/(3−1) = 4/2 = 2." },
  { q:"Find the gradient of the line through (0, 0) and (4, 12).", opts:["4","12","3","1/3"], ans:2, explain:"m = (12−0)/(4−0) = 12/4 = 3." },
  { q:"Find the gradient of the line through (2, 5) and (4, 5).", opts:["1","5","Undefined","0"], ans:3, explain:"m = (5−5)/(4−2) = 0/2 = 0. This is a horizontal line." },
  { q:"Find the gradient of the line through (3, 3) and (3, 7).", opts:["Undefined","0","4","1"], ans:0, explain:"m = (7−3)/(3−3) = 4/0. Division by zero means the gradient is undefined (vertical line)." },
  { q:"Find the gradient of the line through (1, 4) and (5, 0).", opts:["1","−1","4","−4"], ans:1, explain:"m = (0−4)/(5−1) = −4/4 = −1." },
  { q:"Find the gradient of the line through (−2, 1) and (2, 9).", opts:["1","−2","2","4"], ans:2, explain:"m = (9−1)/(2−(−2)) = 8/4 = 2." },
  { q:"A line rises 6 units for every 2 units it runs. What is its gradient?", opts:["2","6","1/3","3"], ans:3, explain:"Gradient = rise/run = 6/2 = 3." },
  { q:"Find the gradient of the line through (0, 5) and (10, 0).", opts:["−½","½","−2","2"], ans:0, explain:"m = (0−5)/(10−0) = −5/10 = −½." },
  { q:"A line drops 3 units for every 1 unit it moves right. Its gradient is:", opts:["3","−3","1/3","−1/3"], ans:1, explain:"The line drops (negative rise), so gradient = −3/1 = −3." },
  { q:"Find the gradient of the line through (−1, −3) and (3, 5).", opts:["−2","½","2","−½"], ans:2, explain:"m = (5−(−3))/(3−(−1)) = 8/4 = 2." },
  { q:"Which line has the steepest gradient: m = 2, m = −3, m = 1, m = −4?", opts:["m = 2","m = −3","m = 1","m = −4"], ans:3, explain:"Steepness is |m|. |−4| = 4 is the largest, so m = −4 is steepest." },
  { q:"Find the gradient of the line through (4, 1) and (6, 7).", opts:["3","−3","1/3","2"], ans:0, explain:"m = (7−1)/(6−4) = 6/2 = 3." },
  { q:"The gradient of a horizontal line is:", opts:["Undefined","0","1","−1"], ans:1, explain:"A horizontal line has no rise: m = 0/run = 0." },
  { q:"The gradient of a vertical line is:", opts:["0","1","Undefined","−1"], ans:2, explain:"A vertical line has run = 0, so m = rise/0 which is undefined." },
  { q:"Find the gradient of the line through (−3, 2) and (1, −6).", opts:["½","1","−½","−2"], ans:3, explain:"m = (−6−2)/(1−(−3)) = −8/4 = −2." },
  { q:"Find the gradient of the line through (0, −4) and (2, 0).", opts:["2","−2","½","4"], ans:0, explain:"m = (0−(−4))/(2−0) = 4/2 = 2." },
  { q:"A line has gradient ⅓. If it passes through (0, 0) and (6, y), what is y?", opts:["3","2","6","18"], ans:1, explain:"m = y/6 = ⅓, so y = 6 × ⅓ = 2." },
  { q:"Find the gradient of the line through (−4, −1) and (0, 3).", opts:["−1","−4","1","4"], ans:2, explain:"m = (3−(−1))/(0−(−4)) = 4/4 = 1." },
  { q:"If a line passes through (2, 3) and (5, 3), the gradient is:", opts:["1","3","Undefined","0"], ans:3, explain:"m = (3−3)/(5−2) = 0/3 = 0. Same y-values mean horizontal line." },
  { q:"Find the gradient of the line through (1, −1) and (4, 8).", opts:["3","−3","9","1/3"], ans:0, explain:"m = (8−(−1))/(4−1) = 9/3 = 3." },
  { q:"A line goes through (0, 2) and (3, 2). What kind of line is it?", opts:["Vertical","Horizontal","Diagonal going up","Diagonal going down"], ans:1, explain:"Both y-values are 2, so it's a horizontal line (y = 2)." },
  { q:"Find the gradient of the line through (−2, 6) and (4, −6).", opts:["2","0","−2","6"], ans:2, explain:"m = (−6−6)/(4−(−2)) = −12/6 = −2." },
  { q:"If a line has gradient 4 and passes through (1, 2), what is y when x = 3?", opts:["6","8","4","10"], ans:3, explain:"From (1,2) to (3,y): m = (y−2)/(3−1) = 4, so y−2 = 8, y = 10." },
  { q:"Find the gradient of the line through (−1, 5) and (3, −3).", opts:["−2","2","−½","½"], ans:0, explain:"m = (−3−5)/(3−(−1)) = −8/4 = −2." },
  { q:"The gradient between (0, 0) and (5, 5) is:", opts:["5","1","0","Undefined"], ans:1, explain:"m = (5−0)/(5−0) = 5/5 = 1." },
  // ═══════════════════════════════════════════
  // INTERCEPTS (Q91–Q115)
  // ═══════════════════════════════════════════
  { q:"Find the y-intercept of y = 3x + 7.", opts:["3","−7","7","0"], ans:2, explain:"The y-intercept is c = 7. The line crosses the y-axis at (0, 7)." },
  { q:"Find the y-intercept of y = −2x − 5.", opts:["2","−2","5","−5"], ans:3, explain:"The y-intercept is c = −5. The line crosses the y-axis at (0, −5)." },
  { q:"Find the x-intercept of y = 2x − 4.", opts:["2","4","−4","−2"], ans:0, explain:"Set y = 0: 0 = 2x − 4, so 2x = 4, x = 2. The x-intercept is (2, 0)." },
  { q:"Find the x-intercept of y = 3x + 6.", opts:["6","−2","2","−6"], ans:1, explain:"Set y = 0: 0 = 3x + 6, so 3x = −6, x = −2. The x-intercept is (−2, 0)." },
  { q:"Find the x-intercept of y = −x + 5.", opts:["−5","−1","5","1"], ans:2, explain:"Set y = 0: 0 = −x + 5, so x = 5. The x-intercept is (5, 0)." },
  { q:"The line y = 4x crosses the y-axis at:", opts:["(4, 0)","(0, 4)","(1, 4)","(0, 0)"], ans:3, explain:"y = 4x has c = 0, so it crosses the y-axis at the origin (0, 0)." },
  { q:"Find the y-intercept of 2x + y = 8.", opts:["8","−8","2","4"], ans:0, explain:"Rearrange: y = −2x + 8. So c = 8. The y-intercept is (0, 8)." },
  { q:"Find the x-intercept of y = ½x − 3.", opts:["3","6","−3","−6"], ans:1, explain:"Set y = 0: 0 = ½x − 3, ½x = 3, x = 6. The x-intercept is (6, 0)." },
  { q:"A line crosses the y-axis at (0, −2). Its y-intercept is:", opts:["0","2","−2","Undefined"], ans:2, explain:"The y-intercept is the y-coordinate where the line meets the y-axis: −2." },
  { q:"Find the x-intercept of y = −4x + 8.", opts:["−4","4","8","2"], ans:3, explain:"Set y = 0: 0 = −4x + 8, 4x = 8, x = 2. The x-intercept is (2, 0)." },
  { q:"For y = 5x − 10, at what point does the line cross the x-axis?", opts:["(2, 0)","(0, −10)","(−2, 0)","(10, 0)"], ans:0, explain:"Set y = 0: 5x − 10 = 0, 5x = 10, x = 2. So the line crosses at (2, 0)." },
  { q:"For y = −3x + 9, where does the line cross the y-axis?", opts:["(−3, 0)","(0, 9)","(3, 0)","(9, 0)"], ans:1, explain:"The y-intercept is c = 9, so the line crosses the y-axis at (0, 9)." },
  { q:"Find the x-intercept of y = x − 3.", opts:["−3","0","3","1"], ans:2, explain:"Set y = 0: 0 = x − 3, x = 3. The x-intercept is (3, 0)." },
  { q:"The line y = 2x + 10 has x-intercept at x = ?", opts:["10","2","−2","−5"], ans:3, explain:"Set y = 0: 0 = 2x + 10, 2x = −10, x = −5." },
  { q:"For y = −x − 1, the y-intercept is:", opts:["−1","1","0","Undefined"], ans:0, explain:"c = −1. The line crosses the y-axis at (0, −1)." },
  { q:"Find the x-intercept of y = 4x − 12.", opts:["4","3","12","−3"], ans:1, explain:"Set y = 0: 4x − 12 = 0, 4x = 12, x = 3. The x-intercept is (3, 0)." },
  { q:"Which line has a y-intercept of 0?", opts:["y = x + 1","y = 2x − 1","y = −3x","y = 4"], ans:2, explain:"y = −3x = −3x + 0 has c = 0. The line passes through the origin." },
  { q:"The line y = ⅔x − 2 crosses the x-axis when x = ?", opts:["−3","−2","2","3"], ans:3, explain:"Set y = 0: ⅔x = 2, x = 2 × 3/2 = 3. x-intercept is (3, 0)." },
  { q:"For 3x + y = 9, find the y-intercept.", opts:["9","3","−3","−9"], ans:0, explain:"When x = 0: y = 9. The y-intercept is (0, 9)." },
  { q:"For 3x + y = 9, find the x-intercept.", opts:["9","3","−3","−9"], ans:1, explain:"When y = 0: 3x = 9, x = 3. The x-intercept is (3, 0)." },
  { q:"If a line has y-intercept 4 and x-intercept 2, which point does it NOT pass through?", opts:["(0, 4)","(2, 0)","(1, 4)","(1, 2)"], ans:2, explain:"The line passes through (0,4) and (2,0). m = (0−4)/(2−0) = −2. At x=1: y = −2(1)+4 = 2, so (1,2) is on the line. (1,4) is NOT on the line." },
  { q:"What is the y-intercept of x + 2y = 6?", opts:["6","1","2","3"], ans:3, explain:"When x = 0: 2y = 6, y = 3. The y-intercept is (0, 3)." },
  { q:"What is the x-intercept of y = −5x + 10?", opts:["2","−2","10","5"], ans:0, explain:"Set y = 0: 5x = 10, x = 2. The x-intercept is (2, 0)." },
  { q:"A line passes through (0, 6) and (3, 0). What is the y-intercept?", opts:["3","6","0","−6"], ans:1, explain:"The point (0, 6) is on the y-axis, so the y-intercept is 6." },
  { q:"A line passes through (0, 6) and (3, 0). What is the x-intercept?", opts:["6","0","3","−3"], ans:2, explain:"The point (3, 0) is on the x-axis, so the x-intercept is 3." },
  // ═══════════════════════════════════════════
  // GRAPH SKETCHING / READING (Q116–Q135)
  // ═══════════════════════════════════════════
  { q:"To plot y = 2x + 1, you need at least how many points?", opts:["1","3","4","2"], ans:3, explain:"A straight line is determined by 2 points. You need at least 2 points to draw a line." },
  { q:"Using the gradient-intercept method, where do you start plotting y = 3x − 2?", opts:["(0, −2)","(−2, 0)","(0, 3)","(3, 0)"], ans:0, explain:"Start at the y-intercept (0, c) = (0, −2)." },
  { q:"The line y = 5 is:", opts:["Vertical","Horizontal","Diagonal upward","Diagonal downward"], ans:1, explain:"y = 5 is a horizontal line passing through all points where y = 5." },
  { q:"The line x = −3 is:", opts:["Horizontal","Diagonal","Vertical","Curved"], ans:2, explain:"x = −3 is a vertical line passing through all points where x = −3." },
  { q:"For y = 2x + 1, when x = 3, y = ?", opts:["5","6","8","7"], ans:3, explain:"y = 2(3) + 1 = 6 + 1 = 7." },
  { q:"For y = −x + 4, when x = 2, y = ?", opts:["2","−2","6","4"], ans:0, explain:"y = −2 + 4 = 2." },
  { q:"Which table matches y = x + 3? x: 0,1,2 → y: ?", opts:["0, 1, 2","3, 4, 5","3, 5, 7","0, 3, 6"], ans:1, explain:"x=0: y=3, x=1: y=4, x=2: y=5. The table is 3, 4, 5." },
  { q:"For the gradient-intercept method on y = −2x + 3, from (0, 3) you move:", opts:["Up 2, right 1","Right 2, up 1","Down 2, right 1","Right 1, up 2"], ans:2, explain:"Gradient = −2 = −2/1. Move right 1 and down 2 from the y-intercept." },
  { q:"The equation of the x-axis is:", opts:["x = 0","x = 1","y = 1","y = 0"], ans:3, explain:"The x-axis is the horizontal line where y = 0." },
  { q:"The equation of the y-axis is:", opts:["x = 0","y = 0","x = 1","y = 1"], ans:0, explain:"The y-axis is the vertical line where x = 0." },
  { q:"A horizontal line passing through (2, −4) has equation:", opts:["x = 2","y = −4","y = 2","x = −4"], ans:1, explain:"A horizontal line has constant y-value. Since it passes through y = −4, the equation is y = −4." },
  { q:"A vertical line passing through (5, 3) has equation:", opts:["y = 3","y = 5","x = 5","x = 3"], ans:2, explain:"A vertical line has constant x-value. Since it passes through x = 5, the equation is x = 5." },
  { q:"For y = ½x + 2, which table is correct? x: 0, 2, 4 → y: ?", opts:["0, 2, 4","1, 2, 3","0, 1, 2","2, 3, 4"], ans:3, explain:"x=0: y=2, x=2: y=1+2=3, x=4: y=2+2=4. The table is 2, 3, 4." },
  { q:"What is the equation of a horizontal line through (0, 7)?", opts:["y = 7","x = 7","y = 0","x = 0"], ans:0, explain:"A horizontal line through y = 7 has equation y = 7." },
  { q:"What is the equation of a vertical line through (−6, 0)?", opts:["y = −6","x = −6","y = 0","x = 0"], ans:1, explain:"A vertical line through x = −6 has equation x = −6." },
  { q:"Using a table of values for y = −3x + 6, what is y when x = 1?", opts:["−3","6","3","9"], ans:2, explain:"y = −3(1) + 6 = −3 + 6 = 3." },
  { q:"For y = 2x − 3, which point lies on the line?", opts:["(1, 0)","(0, 2)","(3, 0)","(2, 1)"], ans:3, explain:"Check (2, 1): y = 2(2)−3 = 4−3 = 1 ✓. So (2, 1) is on the line." },
  { q:"A line passes through (1, 3) and (2, 5). Its equation is:", opts:["y = 2x + 1","y = 2x − 1","y = x + 2","y = 3x"], ans:0, explain:"m = (5−3)/(2−1) = 2. Using (1,3): 3 = 2(1)+c, c = 1. So y = 2x + 1." },
  { q:"For y = −x + 2, when x = −1, y = ?", opts:["1","3","−3","−1"], ans:1, explain:"y = −(−1) + 2 = 1 + 2 = 3." },
  { q:"Which graph would be a horizontal straight line?", opts:["y = x","y = 2x + 1","y = −3","x = 4"], ans:2, explain:"y = −3 is a horizontal line. x = 4 is vertical, not horizontal." },
  // ═══════════════════════════════════════════
  // PARALLEL LINES / MIXED (Q136–Q150)
  // ═══════════════════════════════════════════
  { q:"Which line is parallel to y = 3x + 1?", opts:["y = −3x + 1","y = x + 3","y = 3 + x","y = 3x − 5"], ans:3, explain:"Parallel lines have the same gradient. y = 3x − 5 also has m = 3." },
  { q:"Which line is parallel to y = −2x + 4?", opts:["y = −2x − 1","y = 2x + 4","y = −x + 4","y = 2x − 1"], ans:0, explain:"Parallel lines share the same gradient. y = −2x − 1 has m = −2, same as the given line." },
  { q:"Are y = 5x + 2 and y = 5x − 3 parallel?", opts:["No, different gradients","Yes, same gradient","No, same y-intercept","Cannot tell"], ans:1, explain:"Both have gradient m = 5. Since they have different y-intercepts, they are parallel." },
  { q:"Which pair of lines are parallel?", opts:["y = 2x + 1 and y = 3x + 1","y = x and y = −x","y = 4x − 2 and y = 4x + 7","y = x + 1 and y = 2x + 1"], ans:2, explain:"y = 4x − 2 and y = 4x + 7 both have m = 4 with different c values, so they are parallel." },
  { q:"The equation y = 0 represents which line?", opts:["The y-axis","A vertical line","A diagonal line","The x-axis"], ans:3, explain:"y = 0 is the equation of the x-axis." },
  { q:"The equation x = 0 represents which line?", opts:["The y-axis","The x-axis","The origin","A horizontal line"], ans:0, explain:"x = 0 is the equation of the y-axis." },
  { q:"A taxi charges $3 plus $2 per km. Which equation models the cost C for d km?", opts:["C = 3d + 2","C = 2d + 3","C = 5d","C = d + 5"], ans:1, explain:"Fixed charge c = $3, rate m = $2/km. So C = 2d + 3." },
  { q:"A phone plan charges $15 per month plus $0.10 per minute. What is the gradient?", opts:["15","$15.10","0.10","0.15"], ans:2, explain:"The gradient is the rate per minute = $0.10." },
  { q:"Which two lines will never intersect?", opts:["y = x and y = −x","y = 2x and y = 3x","y = x + 1 and y = −x + 1","y = 4x + 1 and y = 4x − 3"], ans:3, explain:"Parallel lines (same gradient, different intercept) never intersect. Both have m = 4." },
  { q:"A line has gradient 3 and passes through (0, −1). Its equation is:", opts:["y = 3x − 1","y = −x + 3","y = 3x + 1","y = −3x − 1"], ans:0, explain:"m = 3 and c = −1 (from the y-intercept). So y = 3x − 1." },
  { q:"A line passes through (0, 4) and (2, 0). Its equation is:", opts:["y = 2x + 4","y = −2x + 4","y = −2x − 4","y = 2x − 4"], ans:1, explain:"m = (0−4)/(2−0) = −2. c = 4. So y = −2x + 4." },
  { q:"Which line is NOT parallel to y = ½x + 1?", opts:["y = ½x − 3","y = ½x + 5","y = 2x + 1","y = ½x"], ans:2, explain:"y = 2x + 1 has m = 2, not ½. It is not parallel to y = ½x + 1." },
  { q:"A water tank starts with 50 litres and loses 5 litres per hour. The equation is:", opts:["V = 5t + 50","V = 50t − 5","V = −50t + 5","V = −5t + 50"], ans:3, explain:"Starting value c = 50, rate m = −5 (losing). V = −5t + 50." },
  { q:"Two lines y = mx + 1 and y = 3x + 5 are parallel. What is m?", opts:["3","5","1","−3"], ans:0, explain:"Parallel lines have equal gradients. The second line has m = 3, so m = 3." },
  { q:"A line is parallel to y = −x + 2 and passes through (0, 5). Its equation is:", opts:["y = x + 5","y = −x + 5","y = −x − 5","y = 5x − 1"], ans:1, explain:"Parallel to y = −x + 2 means m = −1. Passing through (0, 5) means c = 5. So y = −x + 5." }
]
