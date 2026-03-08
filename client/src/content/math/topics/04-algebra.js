export const meta = {
  id: 4, sem: 1,
  title: 'Basic Algebra & Manipulation',
  desc: 'Algebraic expressions, like terms, expansion, factorisation'
}

export const notes = `
  <h2>Basic Algebra &amp; Manipulation</h2>
  <p class="topic-desc">Algebraic expressions, like terms, expansion and factorisation</p>

  <div class="notes-card">
    <h3>1. Algebraic Expressions</h3>
    <p>An <strong>algebraic expression</strong> is a combination of numbers, variables (letters), and operations. It has no equals sign.</p>
    <div class="example">
      3x + 5 &nbsp;&nbsp; 2a&sup2; &minus; 4b &nbsp;&nbsp; 7(m + n)<br><br>
      <strong>Term:</strong> a single number, variable, or product &rarr; e.g. 3x, &minus;4b, 7<br>
      <strong>Coefficient:</strong> the number in front of a variable &rarr; in 3x, the coefficient is <span class="highlight">3</span><br>
      <strong>Constant:</strong> a term with no variable &rarr; e.g. 5, &minus;2
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Like Terms</h3>
    <p><strong>Like terms</strong> have exactly the same variable(s) and power(s). Only like terms can be added or subtracted.</p>
    <div class="example">
      <strong>Like:</strong> 3x and 5x &rarr; can combine: <span class="highlight">8x</span><br>
      <strong>Unlike:</strong> 3x and 5x&sup2; &rarr; cannot combine (different powers)<br>
      <strong>Unlike:</strong> 3x and 5y &rarr; cannot combine (different variables)<br><br>
      Simplify 5a + 3b &minus; 2a + b:<br>
      = (5a &minus; 2a) + (3b + b) = <span class="highlight">3a + 4b</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Expansion (Removing Brackets)</h3>
    <p>Multiply the term outside the bracket by <strong>every term</strong> inside.</p>
    <div class="example">
      <strong>a(b + c) = ab + ac</strong><br><br>
      3(x + 4) = 3x + 12<br>
      &minus;2(y &minus; 5) = &minus;2y + 10<br>
      x(x + 3) = x&sup2; + 3x<br><br>
      <strong>Expand and simplify:</strong> 2(3a + 1) + 4(a &minus; 2)<br>
      = 6a + 2 + 4a &minus; 8 = <span class="highlight">10a &minus; 6</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Factorisation (Inserting Brackets)</h3>
    <p>Factorisation is the reverse of expansion. Find the <strong>highest common factor (HCF)</strong> of all terms, then place it outside the bracket.</p>
    <div class="example">
      6x + 9 &rarr; HCF is 3 &rarr; <span class="highlight">3(2x + 3)</span><br>
      4a&sup2; &minus; 8a &rarr; HCF is 4a &rarr; <span class="highlight">4a(a &minus; 2)</span><br>
      5xy + 10y &rarr; HCF is 5y &rarr; <span class="highlight">5y(x + 2)</span><br><br>
      <strong>Check:</strong> Always expand back to verify your answer.
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Substitution</h3>
    <p>Replace each variable with its given value, then evaluate using BODMAS.</p>
    <div class="example">
      If a = 3 and b = &minus;2, find 2a&sup2; &minus; 3b:<br>
      = 2(3)&sup2; &minus; 3(&minus;2)<br>
      = 2(9) + 6<br>
      = 18 + 6 = <span class="highlight">24</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>Quick Reference</h3>
    <div class="formula">Like terms: same variable &amp; same power</div>
    <div class="formula">Expansion: a(b + c) = ab + ac</div>
    <div class="formula">Factorisation: ab + ac = a(b + c)</div>
  </div>
`

export const questions = [
  // --- LIKE TERMS ---
  { q:"Simplify 7x + 3x.", opts:["10x","10x²","21x","4x"], ans:0, explain:"7x and 3x are like terms. 7 + 3 = 10, so the answer is 10x." },
  { q:"Simplify 9a − 4a.", opts:["5a","13a","5","36a"], ans:0, explain:"9a − 4a: subtract coefficients → 9 − 4 = 5, so 5a." },
  { q:"Simplify 4x + 3y − x + 2y.", opts:["3x + 5y","7x + 5y","3x + y","5x + 5y"], ans:0, explain:"Collect x terms: 4x − x = 3x. Collect y terms: 3y + 2y = 5y. Answer: 3x + 5y." },
  { q:"Simplify 6a − 2b + a − 3b.", opts:["7a − 5b","5a − 5b","7a + b","5a + b"], ans:0, explain:"6a + a = 7a; −2b − 3b = −5b. Answer: 7a − 5b." },
  // --- EXPANSION ---
  { q:"Expand 3(x + 4).", opts:["3x + 4","3x + 7","3x + 12","x + 12"], ans:2, explain:"Multiply 3 by each term inside: 3×x = 3x, 3×4 = 12. Answer: 3x + 12." },
  { q:"Expand −2(y − 5).", opts:["−2y − 10","−2y + 10","2y − 10","2y + 5"], ans:1, explain:"−2 × y = −2y; −2 × −5 = +10. Answer: −2y + 10." },
  { q:"Expand and simplify 2(3a + 1) + 4(a − 2).", opts:["10a − 6","10a + 6","10a − 2","14a − 6"], ans:0, explain:"2(3a+1) = 6a+2; 4(a−2) = 4a−8. Combine: 6a+4a = 10a; 2−8 = −6. Answer: 10a − 6." },
  // --- FACTORISATION ---
  { q:"Factorise 6x + 9.", opts:["3(2x + 3)","6(x + 3)","3(2x + 9)","9(x + 1)"], ans:0, explain:"HCF of 6 and 9 is 3. 6x ÷ 3 = 2x; 9 ÷ 3 = 3. Answer: 3(2x + 3)." },
  { q:"Factorise 4a² − 8a.", opts:["4(a² − 8)","4a(a − 2)","2a(2a − 4)","4a(a² − 2)"], ans:1, explain:"HCF is 4a. 4a² ÷ 4a = a; −8a ÷ 4a = −2. Answer: 4a(a − 2)." },
  // --- SUBSTITUTION ---
  { q:"If x = 4, find 3x − 5.", opts:["7","17","12","2"], ans:0, explain:"3(4) − 5 = 12 − 5 = 7." },
]
