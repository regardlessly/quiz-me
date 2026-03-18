export const meta = {
  id: 5, sem: 1,
  title: 'Linear Equations',
  desc: 'Solving equations, word problems, changing subject'
}

export const notes = `
  <h2>Linear Equations</h2>
  <p class="topic-desc">Solving equations, word problems and changing the subject of a formula</p>

  <div class="notes-card">
    <h3>1. What is a Linear Equation?</h3>
    <p>A <strong>linear equation</strong> is an equation where the unknown variable has a power of <strong>1</strong> (no x&sup2;, x&sup3;, etc.).</p>
    <div class="example">
      <strong>Goal:</strong> Isolate the variable on one side of the equation.<br><br>
      The <strong>solution</strong> is the value that makes the equation <em>true</em>.<br>
      e.g. x + 3 = 7 &rarr; x = 4 is the solution because 4 + 3 = 7 &#10004;
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Solving One-Step &amp; Two-Step Equations</h3>
    <p>Use <strong>inverse operations</strong> to undo what has been done to the variable. Always do the <strong>same thing to both sides</strong> (balance method).</p>
    <div class="example">
      <strong>One-step:</strong><br>
      x + 5 = 12 &rarr; x = 12 &minus; 5 = <span class="highlight">7</span><br>
      3x = 18 &rarr; x = 18 &divide; 3 = <span class="highlight">6</span><br>
      x/4 = 7 &rarr; x = 7 &times; 4 = <span class="highlight">28</span><br><br>
      <strong>Two-step:</strong><br>
      2x + 3 = 11 &rarr; 2x = 8 &rarr; x = <span class="highlight">4</span>
    </div>
    <div class="formula">Inverse of + is &minus; &nbsp;|&nbsp; Inverse of &times; is &divide;</div>
  </div>

  <div class="notes-card">
    <h3>3. Equations with Brackets</h3>
    <p><strong>Expand</strong> the brackets first, then solve as normal.</p>
    <div class="example">
      3(x + 2) = 15<br>
      3x + 6 = 15<br>
      3x = 9<br>
      x = <span class="highlight">3</span><br><br>
      <strong>Multiple brackets:</strong> 2(x + 1) + 3(x &minus; 2) = 9<br>
      2x + 2 + 3x &minus; 6 = 9<br>
      5x &minus; 4 = 9 &rarr; 5x = 13 &rarr; x = <span class="highlight">13/5</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Equations with Fractions</h3>
    <p>Multiply <strong>every term</strong> by the <strong>LCD</strong> (lowest common denominator) to eliminate fractions.</p>
    <div class="example">
      x/2 + x/3 = 5 &nbsp;&nbsp;(LCD = 6)<br>
      3x + 2x = 30<br>
      5x = 30 &rarr; x = <span class="highlight">6</span><br><br>
      <strong>Cross-multiplication</strong> for proportion equations:<br>
      x/3 = 8/4 &rarr; 4x = 24 &rarr; x = <span class="highlight">6</span>
    </div>
    <div class="formula">To clear fractions: multiply ALL terms by the LCD</div>
  </div>

  <div class="notes-card">
    <h3>5. Variables on Both Sides</h3>
    <p>Collect all variable terms on <strong>one side</strong> and all constants on the <strong>other side</strong>.</p>
    <div class="example">
      5x + 3 = 2x + 15<br>
      5x &minus; 2x = 15 &minus; 3<br>
      3x = 12<br>
      x = <span class="highlight">4</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Word Problems</h3>
    <p>Translate English into algebra. <strong>Always define the variable first.</strong></p>
    <div class="example">
      &ldquo;3 more than twice a number is 17&rdquo;<br>
      Let the number be x. &rarr; 2x + 3 = 17 &rarr; x = <span class="highlight">7</span><br><br>
      <strong>Common types:</strong> age problems, perimeter problems, consecutive number problems.<br>
      <strong>Consecutive integers:</strong> x, x + 1, x + 2, &hellip;
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Changing the Subject (Transposing Formulae)</h3>
    <p>Rearrange a formula to make a <strong>different variable</strong> the subject. Use inverse operations just like solving equations.</p>
    <div class="example">
      A = &pi;r&sup2; &rarr; r&sup2; = A/&pi; &rarr; r = <span class="highlight">&radic;(A/&pi;)</span><br>
      v = u + at &rarr; t = <span class="highlight">(v &minus; u)/a</span><br>
      C = 2&pi;r &rarr; r = <span class="highlight">C/(2&pi;)</span><br>
      A = &frac12;bh &rarr; h = <span class="highlight">2A/b</span>
    </div>
    <div class="formula">Treat every other variable as a constant; isolate the target variable</div>
  </div>
`

export const questions = [
  // ═════════════════════════════════════════════
  // ONE-STEP & TWO-STEP EQUATIONS (Q1–Q25)
  // ═════════════════════════════════════════════
  { q:"Solve x + 5 = 12.", opts:["x = 7","x = 17","x = 5","x = −7"], ans:0, explain:"Subtract 5 from both sides: x = 12 − 5 = 7." },
  { q:"Solve x − 3 = 10.", opts:["x = 7","x = 13","x = −13","x = 30"], ans:1, explain:"Add 3 to both sides: x = 10 + 3 = 13." },
  { q:"Solve 4x = 28.", opts:["x = 32","x = 24","x = 7","x = 112"], ans:2, explain:"Divide both sides by 4: x = 28 ÷ 4 = 7." },
  { q:"Solve x/5 = 6.", opts:["x = 1.2","x = 11","x = −30","x = 30"], ans:3, explain:"Multiply both sides by 5: x = 6 × 5 = 30." },
  { q:"Solve 2x + 1 = 9.", opts:["x = 4","x = 5","x = 16","x = 10"], ans:0, explain:"2x = 9 − 1 = 8, so x = 8 ÷ 2 = 4." },
  { q:"Solve 3x − 4 = 11.", opts:["x = 7","x = 5","x = 3","x = 15"], ans:1, explain:"3x = 11 + 4 = 15, so x = 15 ÷ 3 = 5." },
  { q:"Solve x + 8 = 20.", opts:["x = 28","x = 160","x = 12","x = −12"], ans:2, explain:"Subtract 8 from both sides: x = 20 − 8 = 12." },
  { q:"Solve 7x = 42.", opts:["x = 49","x = 35","x = 294","x = 6"], ans:3, explain:"Divide both sides by 7: x = 42 ÷ 7 = 6." },
  { q:"Solve x/3 = 9.", opts:["x = 27","x = 3","x = 12","x = 6"], ans:0, explain:"Multiply both sides by 3: x = 9 × 3 = 27." },
  { q:"Solve 5x + 2 = 22.", opts:["x = 24","x = 4","x = 120","x = 5"], ans:1, explain:"5x = 22 − 2 = 20, so x = 20 ÷ 5 = 4." },
  { q:"Solve x − 7 = −2.", opts:["x = −9","x = 9","x = 5","x = −5"], ans:2, explain:"Add 7 to both sides: x = −2 + 7 = 5." },
  { q:"Solve 6x = −18.", opts:["x = −108","x = −12","x = 3","x = −3"], ans:3, explain:"Divide both sides by 6: x = −18 ÷ 6 = −3." },
  { q:"Solve x/4 = −3.", opts:["x = −12","x = −7","x = 12","x = −0.75"], ans:0, explain:"Multiply both sides by 4: x = −3 × 4 = −12." },
  { q:"Solve 2x − 5 = 1.", opts:["x = −2","x = 3","x = −3","x = 12"], ans:1, explain:"2x = 1 + 5 = 6, so x = 6 ÷ 2 = 3." },
  { q:"Solve 4x + 3 = 19.", opts:["x = 5.5","x = 88","x = 4","x = 16"], ans:2, explain:"4x = 19 − 3 = 16, so x = 16 ÷ 4 = 4." },
  { q:"Solve x + 15 = 9.", opts:["x = 24","x = 135","x = −24","x = −6"], ans:3, explain:"Subtract 15 from both sides: x = 9 − 15 = −6." },
  { q:"Solve 8x = 56.", opts:["x = 7","x = 48","x = 64","x = 448"], ans:0, explain:"Divide both sides by 8: x = 56 ÷ 8 = 7." },
  { q:"Solve x/6 = 5.", opts:["x = 11","x = 30","x = −1","x = 0.833"], ans:1, explain:"Multiply both sides by 6: x = 5 × 6 = 30." },
  { q:"Solve 3x + 7 = 22.", opts:["x = 87","x = 29","x = 5","x = 9.67"], ans:2, explain:"3x = 22 − 7 = 15, so x = 15 ÷ 3 = 5." },
  { q:"Solve 9x − 1 = 26.", opts:["x = 225","x = 2.78","x = 25","x = 3"], ans:3, explain:"9x = 26 + 1 = 27, so x = 27 ÷ 9 = 3." },
  { q:"Solve x − 12 = 0.", opts:["x = 12","x = −12","x = 0","x = 24"], ans:0, explain:"Add 12 to both sides: x = 0 + 12 = 12." },
  { q:"Solve 10x = 70.", opts:["x = 80","x = 7","x = 700","x = 60"], ans:1, explain:"Divide both sides by 10: x = 70 ÷ 10 = 7." },
  { q:"Solve x/2 = 11.", opts:["x = 5.5","x = 13","x = 22","x = 9"], ans:2, explain:"Multiply both sides by 2: x = 11 × 2 = 22." },
  { q:"Solve 5x − 3 = 17.", opts:["x = 70","x = 2.8","x = 14","x = 4"], ans:3, explain:"5x = 17 + 3 = 20, so x = 20 ÷ 5 = 4." },
  { q:"Solve 7x + 2 = 30.", opts:["x = 4","x = 224","x = 32","x = 28"], ans:0, explain:"7x = 30 − 2 = 28, so x = 28 ÷ 7 = 4." },
  // ═════════════════════════════════════════════
  // EQUATIONS WITH BRACKETS (Q26–Q45)
  // ═════════════════════════════════════════════
  { q:"Solve 2(x + 3) = 14.", opts:["x = 5.5","x = 4","x = 8.5","x = 10"], ans:1, explain:"2x + 6 = 14, 2x = 8, x = 4." },
  { q:"Solve 3(x − 1) = 12.", opts:["x = 3.67","x = 4","x = 5","x = 13"], ans:2, explain:"3x − 3 = 12, 3x = 15, x = 5." },
  { q:"Solve 5(x + 2) = 30.", opts:["x = 8","x = 5.6","x = 32","x = 4"], ans:3, explain:"5x + 10 = 30, 5x = 20, x = 4." },
  { q:"Solve 4(2x − 1) = 20.", opts:["x = 3","x = 2.5","x = 5.25","x = 21"], ans:0, explain:"8x − 4 = 20, 8x = 24, x = 3." },
  { q:"Solve 2(x + 4) = 16.", opts:["x = 6","x = 4","x = 10","x = 8"], ans:1, explain:"2x + 8 = 16, 2x = 8, x = 4." },
  { q:"Solve 3(2x + 1) = 21.", opts:["x = 7","x = 3.33","x = 3","x = 10"], ans:2, explain:"6x + 3 = 21, 6x = 18, x = 3." },
  { q:"Solve 2(x − 5) = 6.", opts:["x = 5.5","x = −2","x = 3","x = 8"], ans:3, explain:"2x − 10 = 6, 2x = 16, x = 8." },
  { q:"Solve 4(x + 1) = 24.", opts:["x = 5","x = 6.25","x = 23","x = 100"], ans:0, explain:"4x + 4 = 24, 4x = 20, x = 5." },
  { q:"Solve 5(x − 3) = 10.", opts:["x = 2.6","x = 5","x = 13","x = 2"], ans:1, explain:"5x − 15 = 10, 5x = 25, x = 5." },
  { q:"Solve 3(x + 4) − 2 = 16.", opts:["x = 6","x = 18","x = 2","x = 4.67"], ans:2, explain:"3x + 12 − 2 = 16, 3x + 10 = 16, 3x = 6, x = 2." },
  { q:"Solve 2(3x − 2) = 14.", opts:["x = 2.67","x = 16","x = 9","x = 3"], ans:3, explain:"6x − 4 = 14, 6x = 18, x = 3." },
  { q:"Solve 4(x + 3) − 5 = 15.", opts:["x = 2","x = 5","x = 4.25","x = 20"], ans:0, explain:"4x + 12 − 5 = 15, 4x + 7 = 15, 4x = 8, x = 2." },
  { q:"Solve 2(x + 1) + 3(x − 1) = 9.", opts:["x = 1.8","x = 2","x = 9","x = 10"], ans:1, explain:"2x + 2 + 3x − 3 = 9, 5x − 1 = 9, 5x = 10, x = 2." },
  { q:"Solve 3(x − 2) + 2(x + 1) = 11.", opts:["x = 15","x = 2.2","x = 3","x = 13"], ans:2, explain:"3x − 6 + 2x + 2 = 11, 5x − 4 = 11, 5x = 15, x = 3." },
  { q:"Solve 5(x − 1) − 2(x + 3) = 4.", opts:["x = 15","x = 3","x = 1","x = 5"], ans:3, explain:"5x − 5 − 2x − 6 = 4, 3x − 11 = 4, 3x = 15, x = 5." },
  { q:"Solve 2(4x + 3) = 30.", opts:["x = 3","x = 3.75","x = 33","x = 13.5"], ans:0, explain:"8x + 6 = 30, 8x = 24, x = 3." },
  { q:"Solve 6(x − 2) = 3(x + 1).", opts:["x = −3","x = 5","x = 15","x = 3"], ans:1, explain:"6x − 12 = 3x + 3, 3x = 15, x = 5." },
  { q:"Solve −2(x + 4) = 6.", opts:["x = 1","x = 5","x = −7","x = 7"], ans:2, explain:"−2x − 8 = 6, −2x = 14, x = −7." },
  { q:"Solve 3(2x − 5) = 2(x + 1) + 3.", opts:["x = 20","x = 2.5","x = 10","x = 5"], ans:3, explain:"6x − 15 = 2x + 2 + 3, 6x − 15 = 2x + 5, 4x = 20, x = 5." },
  { q:"Solve 4(x − 3) = 2(x − 1).", opts:["x = 5","x = 24","x = 8","x = −5"], ans:0, explain:"4x − 12 = 2x − 2, 2x = 10, x = 5." },
  // ═════════════════════════════════════════════
  // EQUATIONS WITH FRACTIONS (Q46–Q65)
  // ═════════════════════════════════════════════
  { q:"Solve x/2 + x/3 = 5.", opts:["x = 5","x = 6","x = 10","x = 2.5"], ans:1, explain:"LCD = 6: 3x + 2x = 30, 5x = 30, x = 6." },
  { q:"Solve x/3 = 4.", opts:["x = 1.33","x = 7","x = 12","x = 4/3"], ans:2, explain:"Multiply both sides by 3: x = 4 × 3 = 12." },
  { q:"Solve x/4 + 1 = 3.", opts:["x = 16","x = 1","x = 12","x = 8"], ans:3, explain:"x/4 = 2, x = 2 × 4 = 8." },
  { q:"Solve x/5 − 2 = 1.", opts:["x = 15","x = 0.6","x = 5","x = 10"], ans:0, explain:"x/5 = 3, x = 3 × 5 = 15." },
  { q:"Solve x/2 − x/6 = 2.", opts:["x = 4","x = 6","x = 12","x = 3"], ans:1, explain:"LCD = 6: 3x − x = 12, 2x = 12, x = 6." },
  { q:"Solve (x + 1)/3 = 4.", opts:["x = 12","x = 1","x = 11","x = 13"], ans:2, explain:"x + 1 = 12, x = 11." },
  { q:"Solve (2x − 1)/5 = 3.", opts:["x = 7.5","x = 14","x = 16","x = 8"], ans:3, explain:"2x − 1 = 15, 2x = 16, x = 8." },
  { q:"Solve x/3 + x/4 = 7.", opts:["x = 12","x = 84","x = 21","x = 28"], ans:0, explain:"LCD = 12: 4x + 3x = 84, 7x = 84, x = 12." },
  { q:"Solve 2x/3 = 8.", opts:["x = 16/3","x = 12","x = 5.33","x = 24"], ans:1, explain:"Multiply both sides by 3: 2x = 24, x = 12." },
  { q:"Solve x/2 + 3 = 7.", opts:["x = 20","x = 2","x = 8","x = 14"], ans:2, explain:"x/2 = 4, x = 4 × 2 = 8." },
  { q:"Solve x/6 − 1 = 2.", opts:["x = 6","x = 12","x = 3","x = 18"], ans:3, explain:"x/6 = 3, x = 3 × 6 = 18." },
  { q:"Solve (x − 3)/4 = 2.", opts:["x = 11","x = 8","x = 5","x = −1"], ans:0, explain:"x − 3 = 8, x = 11." },
  { q:"Solve x/2 + x/5 = 7.", opts:["x = 35","x = 10","x = 7","x = 14"], ans:1, explain:"LCD = 10: 5x + 2x = 70, 7x = 70, x = 10." },
  { q:"Solve 3x/4 − 1 = 5.", opts:["x = 5.33","x = 16","x = 8","x = 24"], ans:2, explain:"3x/4 = 6, 3x = 24, x = 8." },
  { q:"Solve (x + 5)/2 = 7.", opts:["x = 19","x = 7","x = 2","x = 9"], ans:3, explain:"x + 5 = 14, x = 9." },
  { q:"Solve x/3 − x/6 = 1.", opts:["x = 6","x = 2","x = 3","x = 18"], ans:0, explain:"LCD = 6: 2x − x = 6, x = 6." },
  { q:"Solve (3x + 2)/4 = 5.", opts:["x = 18","x = 6","x = 7.33","x = 22"], ans:1, explain:"3x + 2 = 20, 3x = 18, x = 6." },
  { q:"Solve 5x/6 = 10.", opts:["x = 50","x = 8.33","x = 12","x = 60"], ans:2, explain:"Multiply both sides by 6: 5x = 60, x = 12." },
  { q:"Solve x/4 + x/6 = 5.", opts:["x = 60","x = 30","x = 20","x = 12"], ans:3, explain:"LCD = 12: 3x + 2x = 60, 5x = 60, x = 12." },
  { q:"Solve (2x + 3)/5 = 3.", opts:["x = 6","x = 7.5","x = 15","x = 9"], ans:0, explain:"2x + 3 = 15, 2x = 12, x = 6." },
  // ═════════════════════════════════════════════
  // VARIABLES ON BOTH SIDES (Q66–Q85)
  // ═════════════════════════════════════════════
  { q:"Solve 5x + 3 = 2x + 15.", opts:["x = 6","x = 4","x = 18","x = 12/7"], ans:1, explain:"5x − 2x = 15 − 3, 3x = 12, x = 4." },
  { q:"Solve 7x − 2 = 3x + 14.", opts:["x = 3","x = 12","x = 4","x = 16"], ans:2, explain:"7x − 3x = 14 + 2, 4x = 16, x = 4." },
  { q:"Solve 6x + 1 = 4x + 9.", opts:["x = 5","x = 1","x = 10","x = 4"], ans:3, explain:"6x − 4x = 9 − 1, 2x = 8, x = 4." },
  { q:"Solve 8x − 5 = 3x + 10.", opts:["x = 3","x = 1","x = 15","x = 5"], ans:0, explain:"8x − 3x = 10 + 5, 5x = 15, x = 3." },
  { q:"Solve 9x + 2 = 5x + 18.", opts:["x = 5","x = 4","x = 20","x = 2.5"], ans:1, explain:"9x − 5x = 18 − 2, 4x = 16, x = 4." },
  { q:"Solve 3x + 7 = x + 15.", opts:["x = 11","x = 8","x = 4","x = 22"], ans:2, explain:"3x − x = 15 − 7, 2x = 8, x = 4." },
  { q:"Solve 10x − 4 = 6x + 12.", opts:["x = 2","x = 8","x = 16","x = 4"], ans:3, explain:"10x − 6x = 12 + 4, 4x = 16, x = 4." },
  { q:"Solve 4x + 9 = x + 24.", opts:["x = 5","x = 33","x = 15","x = 3"], ans:0, explain:"4x − x = 24 − 9, 3x = 15, x = 5." },
  { q:"Solve 2x + 11 = 5x − 1.", opts:["x = 10/3","x = 4","x = 12","x = 3.33"], ans:1, explain:"11 + 1 = 5x − 2x, 12 = 3x, x = 4." },
  { q:"Solve 7x − 3 = 4x + 9.", opts:["x = 2","x = 6","x = 4","x = 12"], ans:2, explain:"7x − 4x = 9 + 3, 3x = 12, x = 4." },
  { q:"Solve 8x + 1 = 3x + 21.", opts:["x = 22","x = 5","x = 4.4","x = 4"], ans:3, explain:"8x − 3x = 21 − 1, 5x = 20, x = 4." },
  { q:"Solve 6x − 7 = 2x + 5.", opts:["x = 3","x = −0.5","x = 12","x = 2"], ans:0, explain:"6x − 2x = 5 + 7, 4x = 12, x = 3." },
  { q:"Solve 9x − 1 = 6x + 8.", opts:["x = 7/3","x = 3","x = 9","x = 7"], ans:1, explain:"9x − 6x = 8 + 1, 3x = 9, x = 3." },
  { q:"Solve 5x + 4 = 3x + 12.", opts:["x = 8","x = 16","x = 4","x = 2"], ans:2, explain:"5x − 3x = 12 − 4, 2x = 8, x = 4." },
  { q:"Solve 11x − 6 = 7x + 10.", opts:["x = 1","x = 16","x = 0.25","x = 4"], ans:3, explain:"11x − 7x = 10 + 6, 4x = 16, x = 4." },
  { q:"Solve 3x + 8 = 7x − 4.", opts:["x = 3","x = 1","x = 12","x = 4"], ans:0, explain:"8 + 4 = 7x − 3x, 12 = 4x, x = 3." },
  { q:"Solve 2x + 9 = 6x − 3.", opts:["x = 1.5","x = 3","x = 6","x = 12"], ans:1, explain:"9 + 3 = 6x − 2x, 12 = 4x, x = 3." },
  { q:"Solve 4x + 5 = x + 20.", opts:["x = 25","x = 15","x = 5","x = 6.67"], ans:2, explain:"4x − x = 20 − 5, 3x = 15, x = 5." },
  { q:"Solve 8x − 2 = 5x + 7.", opts:["x = 5","x = 9","x = 1","x = 3"], ans:3, explain:"8x − 5x = 7 + 2, 3x = 9, x = 3." },
  { q:"Solve 12x + 1 = 9x + 10.", opts:["x = 3","x = 11/3","x = 11","x = 9"], ans:0, explain:"12x − 9x = 10 − 1, 3x = 9, x = 3." },
  // ═════════════════════════════════════════════
  // WORD PROBLEMS (Q86–Q115)
  // ═════════════════════════════════════════════
  { q:"A number plus 7 equals 15. What is the number?", opts:["x = 22","x = 8","x = −8","x = 7"], ans:1, explain:"x + 7 = 15, x = 15 − 7 = 8." },
  { q:"Twice a number is 18. Find the number.", opts:["x = 36","x = 16","x = 9","x = 20"], ans:2, explain:"2x = 18, x = 9." },
  { q:"3 more than twice a number is 17. Find the number.", opts:["x = 10","x = 6","x = 20","x = 7"], ans:3, explain:"2x + 3 = 17, 2x = 14, x = 7." },
  { q:"5 less than 3 times a number is 16. Find the number.", opts:["x = 7","x = 3.67","x = 11","x = 21"], ans:0, explain:"3x − 5 = 16, 3x = 21, x = 7." },
  { q:"The sum of three consecutive integers is 36. What is the smallest?", opts:["x = 12","x = 11","x = 13","x = 10"], ans:1, explain:"x + (x+1) + (x+2) = 36, 3x + 3 = 36, 3x = 33, x = 11." },
  { q:"A rectangle has length 2x and width x. Its perimeter is 30. Find x.", opts:["x = 15","x = 10","x = 5","x = 6"], ans:2, explain:"2(2x + x) = 30, 6x = 30, x = 5." },
  { q:"Tom is x years old. His father is 3x years old. Together their ages total 52. Find x.", opts:["x = 17.3","x = 26","x = 52","x = 13"], ans:3, explain:"x + 3x = 52, 4x = 52, x = 13." },
  { q:"A number decreased by 4 equals 11. What is the number?", opts:["x = 15","x = 7","x = 44","x = −7"], ans:0, explain:"x − 4 = 11, x = 15." },
  { q:"Half a number plus 3 is 10. Find the number.", opts:["x = 20","x = 14","x = 7","x = 26"], ans:1, explain:"x/2 + 3 = 10, x/2 = 7, x = 14." },
  { q:"4 times a number minus 1 equals 19. Find the number.", opts:["x = 72","x = 4.5","x = 5","x = 20"], ans:2, explain:"4x − 1 = 19, 4x = 20, x = 5." },
  { q:"The sum of two consecutive even numbers is 26. Find the smaller one.", opts:["x = 14","x = 10","x = 13","x = 12"], ans:3, explain:"x + (x + 2) = 26, 2x + 2 = 26, 2x = 24, x = 12." },
  { q:"A triangle has sides x, (x + 2), and (x + 4) cm. The perimeter is 30 cm. Find x.", opts:["x = 8","x = 10","x = 24","x = 6"], ans:0, explain:"x + (x+2) + (x+4) = 30, 3x + 6 = 30, 3x = 24, x = 8." },
  { q:"Twice a number increased by 5 is 21. Find the number.", opts:["x = 13","x = 8","x = 52","x = 16"], ans:1, explain:"2x + 5 = 21, 2x = 16, x = 8." },
  { q:"Amy has $x. Ben has $(x + 5). Together they have $29. Find x.", opts:["x = 17","x = 34","x = 12","x = 24"], ans:2, explain:"x + (x + 5) = 29, 2x + 5 = 29, 2x = 24, x = 12." },
  { q:"A number multiplied by 6 then decreased by 7 gives 29. Find the number.", opts:["x = 132","x = 3.67","x = 22","x = 6"], ans:3, explain:"6x − 7 = 29, 6x = 36, x = 6." },
  { q:"The perimeter of a square is 48 cm. Find the side length.", opts:["x = 12","x = 192","x = 4","x = 16"], ans:0, explain:"4x = 48, x = 12." },
  { q:"Three times a number is equal to the number plus 10. Find it.", opts:["x = 10/3","x = 5","x = 3.33","x = 30"], ans:1, explain:"3x = x + 10, 2x = 10, x = 5." },
  { q:"Ali is 5 years older than Bala. Their combined age is 35. Find Ali's age.", opts:["x = 15","x = 30","x = 20","x = 25"], ans:2, explain:"Let Bala = b, Ali = b + 5. b + (b+5) = 35, 2b = 30, b = 15, Ali = 20." },
  { q:"A number divided by 3 gives 8. What is the number?", opts:["x = 2.67","x = 11","x = 5","x = 24"], ans:3, explain:"x/3 = 8, x = 24." },
  { q:"The sum of three consecutive odd numbers is 33. Find the middle number.", opts:["x = 11","x = 9","x = 10","x = 12"], ans:0, explain:"Let numbers be (x−2), x, (x+2). Sum = 3x = 33, x = 11." },
  { q:"A pen costs $x. A book costs $3 more. Together they cost $11. Find x.", opts:["x = 7","x = 4","x = 14","x = 5.5"], ans:1, explain:"x + (x + 3) = 11, 2x + 3 = 11, 2x = 8, x = 4." },
  { q:"Seven less than four times a number is 13. Find the number.", opts:["x = 1.5","x = 20","x = 5","x = 6"], ans:2, explain:"4x − 7 = 13, 4x = 20, x = 5." },
  { q:"A rectangle's length is 3 cm more than its width. Its perimeter is 22 cm. Find the width.", opts:["x = 7","x = 5.5","x = 19","x = 4"], ans:3, explain:"2(x + x + 3) = 22, 4x + 6 = 22, 4x = 16, x = 4." },
  { q:"Double a number decreased by 9 is 5. Find the number.", opts:["x = 7","x = −2","x = 2","x = 28"], ans:0, explain:"2x − 9 = 5, 2x = 14, x = 7." },
  { q:"There are x boys and (x + 8) girls in a class. The total is 36. Find x.", opts:["x = 28","x = 14","x = 22","x = 44"], ans:1, explain:"x + (x + 8) = 36, 2x + 8 = 36, 2x = 28, x = 14." },
  { q:"A number is tripled and then 4 is added. The result is 25. Find it.", opts:["x = 87","x = 63","x = 7","x = 29"], ans:2, explain:"3x + 4 = 25, 3x = 21, x = 7." },
  { q:"Two numbers differ by 6. Their sum is 20. Find the larger number.", opts:["x = 26","x = 14","x = 7","x = 13"], ans:3, explain:"x + (x + 6) = 20, 2x + 6 = 20, 2x = 14, x = 7. Larger = 13." },
  { q:"One fifth of a number plus 2 equals 5. Find the number.", opts:["x = 15","x = 1","x = 35","x = 25"], ans:0, explain:"x/5 + 2 = 5, x/5 = 3, x = 15." },
  { q:"Six more than half a number is 15. Find the number.", opts:["x = 42","x = 18","x = 4.5","x = 9"], ans:1, explain:"x/2 + 6 = 15, x/2 = 9, x = 18." },
  { q:"The sum of four consecutive integers is 50. What is the largest?", opts:["x = 12","x = 11","x = 14","x = 50"], ans:2, explain:"x + (x+1) + (x+2) + (x+3) = 50, 4x + 6 = 50, 4x = 44, x = 11. Largest = 14." },
  // ═════════════════════════════════════════════
  // CHANGING THE SUBJECT (Q116–Q135)
  // ═════════════════════════════════════════════
  { q:"Make x the subject: y = 3x + 2.", opts:["x = 3y − 2","x = y/3 − 2","x = (y + 2)/3","x = (y − 2)/3"], ans:3, explain:"y − 2 = 3x, x = (y − 2)/3." },
  { q:"Make r the subject: C = 2πr.", opts:["r = C/(2π)","r = 2πC","r = C − 2π","r = 2C/π"], ans:0, explain:"Divide both sides by 2π: r = C/(2π)." },
  { q:"Make h the subject: A = ½bh.", opts:["h = 2Ab","h = 2A/b","h = A/(2b)","h = Ab/2"], ans:1, explain:"2A = bh, h = 2A/b." },
  { q:"Make t the subject: v = u + at.", opts:["t = v − u − a","t = (v − u)a","t = (v − u)/a","t = a/(v − u)"], ans:2, explain:"v − u = at, t = (v − u)/a." },
  { q:"Make b the subject: P = 2a + 2b.", opts:["b = P − 2a","b = P/2 − a","b = 2P − a","b = (P − 2a)/2"], ans:3, explain:"P − 2a = 2b, b = (P − 2a)/2." },
  { q:"Make x the subject: y = 5x − 1.", opts:["x = (y + 1)/5","x = 5y + 1","x = y/5 + 1","x = (y − 1)/5"], ans:0, explain:"y + 1 = 5x, x = (y + 1)/5." },
  { q:"Make a the subject: s = ½at².", opts:["a = st²/2","a = 2s/t²","a = 2st²","a = s/(2t²)"], ans:1, explain:"2s = at², a = 2s/t²." },
  { q:"Make x the subject: y = (x − 3)/4.", opts:["x = 4y − 3","x = (y − 3)/4","x = 4y + 3","x = y/4 + 3"], ans:2, explain:"4y = x − 3, x = 4y + 3." },
  { q:"Make m the subject: F = ma.", opts:["m = Fa","m = a/F","m = F − a","m = F/a"], ans:3, explain:"Divide both sides by a: m = F/a." },
  { q:"Make b the subject: A = bh.", opts:["b = A/h","b = A − h","b = Ah","b = h/A"], ans:0, explain:"Divide both sides by h: b = A/h." },
  { q:"Make x the subject: y = 2(x + 3).", opts:["x = 2y − 3","x = y/2 − 3","x = (y − 3)/2","x = y − 6"], ans:1, explain:"y/2 = x + 3, x = y/2 − 3." },
  { q:"Make l the subject: P = 2l + 2w.", opts:["l = P − 2w","l = 2P − w","l = (P − 2w)/2","l = P/2 + w"], ans:2, explain:"P − 2w = 2l, l = (P − 2w)/2." },
  { q:"Make y the subject: x = 3y − 7.", opts:["y = 3x + 7","y = (x − 7)/3","y = x/3 − 7","y = (x + 7)/3"], ans:3, explain:"x + 7 = 3y, y = (x + 7)/3." },
  { q:"Make r the subject: A = πr².", opts:["r = √(A/π)","r = A/π","r = A²/π","r = √(Aπ)"], ans:0, explain:"r² = A/π, r = √(A/π)." },
  { q:"Make u the subject: v = u + at.", opts:["u = v + at","u = v − at","u = at − v","u = v/(at)"], ans:1, explain:"u = v − at." },
  { q:"Make c the subject: a² + b² = c².", opts:["c = a² + b²","c = √(a² − b²)","c = √(a² + b²)","c = a + b"], ans:2, explain:"c² = a² + b², c = √(a² + b²)." },
  { q:"Make x the subject: y = x/5 + 2.", opts:["x = 5y − 10","x = (y − 2)/5","x = y/5 − 2","x = 5(y − 2)"], ans:3, explain:"y − 2 = x/5, x = 5(y − 2)." },
  { q:"Make w the subject: V = lwh.", opts:["w = V/(lh)","w = V − lh","w = Vlh","w = lh/V"], ans:0, explain:"Divide both sides by lh: w = V/(lh)." },
  { q:"Make x the subject: y = 4 − 3x.", opts:["x = (y − 4)/3","x = (4 − y)/3","x = 4 − y/3","x = 3(4 − y)"], ans:1, explain:"3x = 4 − y, x = (4 − y)/3." },
  { q:"Make h the subject: V = πr²h.", opts:["h = Vπr²","h = V/(πr)","h = V/(πr²)","h = πr²/V"], ans:2, explain:"Divide both sides by πr²: h = V/(πr²)." },
  // ═════════════════════════════════════════════
  // MIXED (Q136–Q150)
  // ═════════════════════════════════════════════
  { q:"Solve 3(x + 4) = 2x + 17.", opts:["x = 29","x = 1","x = −5","x = 5"], ans:3, explain:"3x + 12 = 2x + 17, x = 5." },
  { q:"Solve x/3 + 2 = x/4 + 4.", opts:["x = 24","x = 6","x = 8","x = 2"], ans:0, explain:"LCD 12: 4x + 24 = 3x + 48, x = 24." },
  { q:"Make y the subject: x = 2y + 5.", opts:["y = (x + 5)/2","y = (x − 5)/2","y = 2x − 5","y = x/2 − 5"], ans:1, explain:"x − 5 = 2y, y = (x − 5)/2." },
  { q:"A number plus its double is 27. Find the number.", opts:["x = 27","x = 13.5","x = 9","x = 54"], ans:2, explain:"x + 2x = 27, 3x = 27, x = 9." },
  { q:"Solve 5(x − 2) = 3(x + 4).", opts:["x = 22","x = 1","x = 7","x = 11"], ans:3, explain:"5x − 10 = 3x + 12, 2x = 22, x = 11." },
  { q:"Solve x/2 − 3 = x/5.", opts:["x = 10","x = −1","x = 30","x = 5"], ans:0, explain:"LCD 10: 5x − 30 = 2x, 3x = 30, x = 10." },
  { q:"Make t the subject: d = st.", opts:["t = d − s","t = d/s","t = ds","t = s/d"], ans:1, explain:"Divide both sides by s: t = d/s." },
  { q:"Three consecutive even numbers sum to 48. Find the middle number.", opts:["x = 14","x = 48","x = 16","x = 24"], ans:2, explain:"(x − 2) + x + (x + 2) = 48, 3x = 48, x = 16." },
  { q:"Solve 4(2x + 1) − 3(x − 2) = 25.", opts:["x = 15","x = 19","x = 5","x = 3"], ans:3, explain:"8x + 4 − 3x + 6 = 25, 5x + 10 = 25, 5x = 15, x = 3." },
  { q:"Solve (x + 2)/3 = (x − 1)/2.", opts:["x = 7","x = −1","x = 5","x = 3"], ans:0, explain:"Cross multiply: 2(x + 2) = 3(x − 1), 2x + 4 = 3x − 3, 7 = x." },
  { q:"Make n the subject: S = n/2(a + l).", opts:["n = S(a + l)/2","n = 2S/(a + l)","n = S/(a + l)","n = 2S(a + l)"], ans:1, explain:"2S = n(a + l), n = 2S/(a + l)." },
  { q:"Twice a number minus 7 equals the number plus 3. Find it.", opts:["x = −4","x = −10","x = 10","x = 4"], ans:2, explain:"2x − 7 = x + 3, x = 10." },
  { q:"Solve 2(x + 3)/5 = 4.", opts:["x = 17","x = 10","x = 13","x = 7"], ans:3, explain:"2(x + 3) = 20, x + 3 = 10, x = 7." },
  { q:"Make x the subject: y = √(x + 1).", opts:["x = y² − 1","x = y² + 1","x = (y + 1)²","x = √(y − 1)"], ans:0, explain:"y² = x + 1, x = y² − 1." },
  { q:"Solve 6x − 5 = 4x + 3.", opts:["x = −1","x = 4","x = 8","x = 2"], ans:1, explain:"6x − 4x = 3 + 5, 2x = 8, x = 4." }
]
