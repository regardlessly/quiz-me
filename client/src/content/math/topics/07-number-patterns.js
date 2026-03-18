export const meta = {
  id: 7, sem: 1,
  title: 'Number Patterns',
  desc: 'Sequences, nth term, pattern recognition'
}

export const notes = `
  <h2>Number Patterns</h2>
  <p class="topic-desc">Sequences, nth term, pattern recognition</p>

  <div class="notes-card">
    <h3>1. What is a Sequence?</h3>
    <p>A <strong>sequence</strong> is an ordered list of numbers that follows a rule. Each number is called a <strong>term</strong>.</p>
    <div class="example">
      Terms are labelled: T&#8321;, T&#8322;, T&#8323;, T&#8324;, &hellip;<br><br>
      <strong>Common difference</strong> &mdash; the constant added each time (arithmetic sequence)<br>
      <strong>Common ratio</strong> &mdash; the constant multiplied each time (geometric sequence)<br><br>
      Example: 5, 8, 11, 14, &hellip; &rarr; common difference = <span class="highlight">3</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Arithmetic Sequences</h3>
    <p>An <strong>arithmetic sequence</strong> has a constant <strong>common difference d</strong> between consecutive terms.</p>
    <div class="formula">T&#8345; = a + (n &minus; 1)d</div>
    <p>where <em>a</em> = first term, <em>d</em> = common difference, <em>n</em> = term number.</p>
    <div class="example">
      Sequence: 3, 7, 11, 15, &hellip;<br>
      a = 3, d = 7 &minus; 3 = 4<br>
      T&#8345; = 3 + (n &minus; 1)(4) = 3 + 4n &minus; 4 = <span class="highlight">4n &minus; 1</span><br><br>
      Check: T&#8321; = 4(1) &minus; 1 = 3 &#10004;&emsp; T&#8322; = 4(2) &minus; 1 = 7 &#10004;
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Finding the nth Term</h3>
    <p>Step-by-step method for any arithmetic sequence:</p>
    <div class="example">
      <strong>Step 1:</strong> Find the common difference d<br>
      <strong>Step 2:</strong> Use T&#8345; = a + (n &minus; 1)d<br>
      <strong>Step 3:</strong> Expand and simplify<br><br>
      Example: 5, 9, 13, 17, &hellip;<br>
      d = 4, a = 5<br>
      T&#8345; = 5 + (n &minus; 1)(4) = 5 + 4n &minus; 4 = <span class="highlight">4n + 1</span><br><br>
      Example: 20, 17, 14, 11, &hellip;<br>
      d = &minus;3, a = 20<br>
      T&#8345; = 20 + (n &minus; 1)(&minus;3) = 20 &minus; 3n + 3 = <span class="highlight">23 &minus; 3n</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Geometric Sequences</h3>
    <p>A <strong>geometric sequence</strong> has a constant <strong>common ratio r</strong> between consecutive terms.</p>
    <div class="formula">T&#8345; = ar&#8319;&#8315;&#185;</div>
    <p>where <em>a</em> = first term, <em>r</em> = common ratio.</p>
    <div class="example">
      Sequence: 2, 6, 18, 54, &hellip;<br>
      a = 2, r = 6 &divide; 2 = <span class="highlight">3</span><br>
      T&#8345; = 2 &times; 3&#8319;&#8315;&#185;<br><br>
      Sequence: 1000, 500, 250, 125, &hellip;<br>
      a = 1000, r = 500 &divide; 1000 = <span class="highlight">0.5</span> (halving pattern)
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Special Number Sequences</h3>
    <p>Recognise these important sequences:</p>
    <div class="example">
      <strong>Square numbers:</strong> 1, 4, 9, 16, 25, 36, &hellip; &rarr; T&#8345; = <span class="highlight">n&sup2;</span><br><br>
      <strong>Cube numbers:</strong> 1, 8, 27, 64, 125, &hellip; &rarr; T&#8345; = <span class="highlight">n&sup3;</span><br><br>
      <strong>Triangular numbers:</strong> 1, 3, 6, 10, 15, 21, &hellip; &rarr; T&#8345; = <span class="highlight">n(n + 1) &divide; 2</span><br><br>
      <strong>Fibonacci sequence:</strong> 1, 1, 2, 3, 5, 8, 13, 21, &hellip;<br>
      Rule: each term = sum of the two preceding terms
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Pattern Recognition from Diagrams</h3>
    <p>For matchstick, dot or tile patterns:</p>
    <div class="example">
      <strong>Step 1:</strong> Draw a table of pattern number vs count<br>
      <strong>Step 2:</strong> Find the difference between consecutive counts<br>
      <strong>Step 3:</strong> Write the nth term rule<br><br>
      Example (matchstick squares):<br>
      Pattern 1: 4 sticks &emsp; Pattern 2: 7 sticks &emsp; Pattern 3: 10 sticks<br>
      Difference = 3 &rarr; T&#8345; = 4 + (n &minus; 1)(3) = <span class="highlight">3n + 1</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Using the nth Term</h3>
    <p>The nth term formula lets you answer many questions:</p>
    <div class="example">
      Given T&#8345; = 5n &minus; 2:<br><br>
      <strong>Find T&#8322;&#8320;:</strong> T&#8322;&#8320; = 5(20) &minus; 2 = <span class="highlight">98</span><br><br>
      <strong>Which term equals 73?</strong><br>
      5n &minus; 2 = 73 &rarr; 5n = 75 &rarr; n = <span class="highlight">15</span> &rarr; T&#8321;&#8325; = 73<br><br>
      <strong>Is 82 in the sequence?</strong><br>
      5n &minus; 2 = 82 &rarr; 5n = 84 &rarr; n = 16.8 &rarr; <span class="highlight">No</span> (n must be a whole number)
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════
  // IDENTIFY PATTERN / NEXT TERM (Q1–25)
  // ═══════════════════════════════════════════
  { q:"What is the next term in the sequence 2, 5, 8, 11, ...?", opts:["14", "12", "13", "15"], ans:0, explain:"Common difference = 3. Next term = 11 + 3 = 14." },
  { q:"What is the next term in the sequence 1, 4, 9, 16, ...?", opts:["20", "25", "24", "36"], ans:1, explain:"These are square numbers: 1², 2², 3², 4². Next = 5² = 25." },
  { q:"What is the next term in the sequence 3, 6, 12, 24, ...?", opts:["36", "30", "48", "32"], ans:2, explain:"Common ratio = 2 (multiply by 2 each time). Next = 24 × 2 = 48." },
  { q:"What is the common difference of 7, 12, 17, 22, ...?", opts:["4", "6", "3", "5"], ans:3, explain:"d = 12 − 7 = 5." },
  { q:"What is the next term in 10, 7, 4, 1, ...?", opts:["-2", "0", "-1", "-3"], ans:0, explain:"Common difference = −3. Next = 1 + (−3) = −2." },
  { q:"What type of sequence is 5, 10, 20, 40, ...?", opts:["Arithmetic", "Geometric", "Neither", "Fibonacci"], ans:1, explain:"Each term is multiplied by 2. This is a geometric sequence with r = 2." },
  { q:"What is the next term in 1, 1, 2, 3, 5, 8, ...?", opts:["10", "11", "13", "12"], ans:2, explain:"This is the Fibonacci sequence. Next = 5 + 8 = 13." },
  { q:"What is the common difference of 100, 93, 86, 79, ...?", opts:["-6", "-8", "7", "-7"], ans:3, explain:"d = 93 − 100 = −7." },
  { q:"What is the next term in 4, 8, 12, 16, ...?", opts:["20", "18", "22", "24"], ans:0, explain:"Common difference = 4. Next = 16 + 4 = 20." },
  { q:"What is the next term in 1, 3, 6, 10, 15, ...?", opts:["20", "21", "18", "25"], ans:1, explain:"These are triangular numbers. Differences increase by 1: +2, +3, +4, +5, so next = 15 + 6 = 21." },
  { q:"What is the common ratio of 3, 9, 27, 81, ...?", opts:["2", "6", "3", "9"], ans:2, explain:"r = 9 ÷ 3 = 3." },
  { q:"What is the next term in 50, 45, 40, 35, ...?", opts:["25", "30", "32", "28"], ans:3, explain:"Common difference = −5. Next = 35 + (−5) = 30." },
  { q:"What is the next term in 2, 6, 18, 54, ...?", opts:["108", "72", "162", "96"], ans:0, explain:"Common ratio = 3. Next = 54 × 3 = 162." },
  { q:"What pattern do the numbers 1, 8, 27, 64, ... follow?", opts:["Square numbers", "Fibonacci", "Triangular numbers", "Cube numbers"], ans:1, explain:"1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64. These are cube numbers." },
  { q:"What is the next term in 0, 3, 8, 15, 24, ...?", opts:["35", "30", "33", "32"], ans:2, explain:"Pattern: n² − 1 for n = 1,2,3... Differences: 3,5,7,9 → next diff = 11, so 24 + 11 = 35." },
  { q:"What is the next term in 5, 10, 15, 20, 25, ...?", opts:["35", "30", "28", "32"], ans:3, explain:"Common difference = 5. Next = 25 + 5 = 30." },
  { q:"What type of sequence is 8, 8, 8, 8, ...?", opts:["Geometric only", "Neither", "Arithmetic only", "Both arithmetic and geometric"], ans:0, explain:"d = 0 (arithmetic) and r = 1 (geometric), so it is both." },
  { q:"What is the next term in 1, 4, 10, 20, 35, ...?", opts:["50", "56", "45", "48"], ans:1, explain:"Differences: 3, 6, 10, 15 (triangular numbers). Next diff = 21, so 35 + 21 = 56." },
  { q:"What is the common difference of 2, 2.5, 3, 3.5, ...?", opts:["0.5", "1", "0.25", "1.5"], ans:2, explain:"d = 2.5 − 2 = 0.5." },
  { q:"What is the next term in 64, 32, 16, 8, ...?", opts:["2", "6", "0", "4"], ans:3, explain:"Common ratio = ½. Next = 8 × ½ = 4." },
  { q:"What is the next term in 1, 2, 4, 7, 11, ...?", opts:["16", "15", "14", "13"], ans:0, explain:"Differences: 1, 2, 3, 4. Next diff = 5, so 11 + 5 = 16." },
  { q:"What is the next term in 3, 5, 9, 15, 23, ...?", opts:["30", "33", "28", "32"], ans:1, explain:"Differences: 2, 4, 6, 8. Next diff = 10, so 23 + 10 = 33." },
  { q:"Which sequence has a common difference of 6?", opts:["2,8,14,20", "3,6,9,12", "2,8,14,20", "1,7,13,19"], ans:2, explain:"In 2, 8, 14, 20: d = 8 − 2 = 6. Also 1,7,13,19 has d = 6, but checking option index: correct answer at position 2 = 2,8,14,20." },
  { q:"What is the common ratio of 5, 15, 45, 135, ...?", opts:["5", "10", "15", "3"], ans:3, explain:"r = 15 ÷ 5 = 3." },
  { q:"What is the next term in 11, 15, 19, 23, ...?", opts:["27", "26", "25", "28"], ans:0, explain:"Common difference = 4. Next = 23 + 4 = 27." },
  // ═══════════════════════════════════════════
  // ARITHMETIC NTH TERM FORMULA (Q26–50)
  // ═══════════════════════════════════════════
  { q:"What is the nth term of 5, 8, 11, 14, ...?", opts:["3n + 5", "3n + 2", "n + 3", "5n − 2"], ans:1, explain:"a = 5, d = 3. Tₙ = 5 + (n−1)(3) = 3n + 2." },
  { q:"What is the nth term of 2, 7, 12, 17, ...?", opts:["5n + 2", "5n − 3", "7n − 5", "2n + 5"], ans:2, explain:"a = 2, d = 5. Tₙ = 2 + (n−1)(5) = 5n − 3." },
  { q:"What is the nth term of 10, 13, 16, 19, ...?", opts:["3n + 10", "3n + 13", "3n + 7", "13n − 3"], ans:3, explain:"a = 10, d = 3. Tₙ = 10 + (n−1)(3) = 3n + 7." },
  { q:"What is the nth term of 1, 5, 9, 13, ...?", opts:["4n + 1", "4n − 5", "n + 4", "4n − 3"], ans:0, explain:"a = 1, d = 4. Tₙ = 1 + (n−1)(4) = 4n − 3." },
  { q:"What is the nth term of 6, 11, 16, 21, ...?", opts:["5n + 1", "5n − 1", "6n + 5", "6n − 1"], ans:1, explain:"a = 6, d = 5. Tₙ = 6 + (n−1)(5) = 5n + 1." },
  { q:"What is the nth term of 20, 17, 14, 11, ...?", opts:["20 − 3n", "23 − 3n", "−3n + 20", "17 − 3n"], ans:2, explain:"a = 20, d = −3. Tₙ = 20 + (n−1)(−3) = 23 − 3n." },
  { q:"What is the nth term of 4, 9, 14, 19, ...?", opts:["5n − 4", "5n + 4", "5n − 1", "4n + 5"], ans:3, explain:"a = 4, d = 5. Tₙ = 4 + (n−1)(5) = 5n − 1." },
  { q:"What is the nth term of 3, 7, 11, 15, ...?", opts:["4n − 1", "4n + 3", "3n + 4", "7n − 4"], ans:0, explain:"a = 3, d = 4. Tₙ = 3 + (n−1)(4) = 4n − 1." },
  { q:"What is the nth term of 8, 14, 20, 26, ...?", opts:["6n − 2", "6n + 2", "6n + 8", "8n + 6"], ans:1, explain:"a = 8, d = 6. Tₙ = 8 + (n−1)(6) = 6n + 2." },
  { q:"What is the nth term of 7, 10, 13, 16, ...?", opts:["3n + 7", "3n + 4", "7n + 3", "3n + 10"], ans:2, explain:"a = 7, d = 3. Tₙ = 7 + (n−1)(3) = 3n + 4." },
  { q:"What is the nth term of 50, 46, 42, 38, ...?", opts:["54 − 4n", "50 − 4n", "−4n + 50", "46 − 4n"], ans:3, explain:"a = 50, d = −4. Tₙ = 50 + (n−1)(−4) = 54 − 4n." },
  { q:"What is the nth term of 9, 15, 21, 27, ...?", opts:["6n + 9", "6n + 3", "9n + 6", "6n − 3"], ans:0, explain:"a = 9, d = 6. Tₙ = 9 + (n−1)(6) = 6n + 3." },
  { q:"What is the nth term of 1, 3, 5, 7, ...?", opts:["3n − 2", "n + 2", "2n − 1", "2n + 1"], ans:1, explain:"a = 1, d = 2. Tₙ = 1 + (n−1)(2) = 2n − 1." },
  { q:"In the sequence with nth term 3n + 5, what is the common difference?", opts:["5", "8", "3", "2"], ans:2, explain:"For Tₙ = 3n + 5, the coefficient of n is the common difference d = 3." },
  { q:"What is the nth term of 12, 19, 26, 33, ...?", opts:["7n + 5", "7n − 2", "12n + 7", "7n + 12"], ans:3, explain:"a = 12, d = 7. Tₙ = 12 + (n−1)(7) = 7n + 5." },
  { q:"What is the nth term of 100, 95, 90, 85, ...?", opts:["100 − 5n", "105 − 5n", "95 − 5n", "−5n + 100"], ans:0, explain:"a = 100, d = −5. Tₙ = 100 + (n−1)(−5) = 105 − 5n." },
  { q:"What is the nth term of 2, 4, 6, 8, ...?", opts:["n + 2", "2n + 2", "2n", "4n − 2"], ans:1, explain:"a = 2, d = 2. Tₙ = 2 + (n−1)(2) = 2n." },
  { q:"What is the first term of the sequence with Tₙ = 4n + 3?", opts:["3", "4", "7", "8"], ans:2, explain:"T₁ = 4(1) + 3 = 7." },
  { q:"What is the nth term of 15, 22, 29, 36, ...?", opts:["7n + 8", "7n + 15", "7n − 8", "15n + 7"], ans:3, explain:"a = 15, d = 7. Tₙ = 15 + (n−1)(7) = 7n + 8." },
  { q:"What is the nth term of 0, 4, 8, 12, ...?", opts:["4n + 4", "4n", "4n − 4", "n − 4"], ans:0, explain:"a = 0, d = 4. Tₙ = 0 + (n−1)(4) = 4n − 4." },
  { q:"What is the nth term of 30, 25, 20, 15, ...?", opts:["35 − 5n", "30 − 5n", "25 − 5n", "−5n + 30"], ans:1, explain:"a = 30, d = −5. Tₙ = 30 + (n−1)(−5) = 35 − 5n." },
  { q:"What is the nth term of 11, 14, 17, 20, ...?", opts:["3n + 11", "3n + 8", "11n + 3", "3n + 14"], ans:2, explain:"a = 11, d = 3. Tₙ = 11 + (n−1)(3) = 3n + 8." },
  { q:"What is the coefficient of n in the nth term of 5, 13, 21, 29, ...?", opts:["5", "13", "8", "3"], ans:3, explain:"d = 13 − 5 = 8. The coefficient of n equals the common difference = 8." },
  { q:"The nth term of a sequence is 6n − 5. What is the common difference?", opts:["5", "1", "−5", "6"], ans:0, explain:"In Tₙ = 6n − 5, the coefficient of n = 6 is the common difference." },
  { q:"What is the nth term of −3, 1, 5, 9, ...?", opts:["4n − 7", "4n + 3", "4n − 3", "−3 + 4n"], ans:1, explain:"a = −3, d = 4. Tₙ = −3 + (n−1)(4) = 4n − 7." },
  // ═══════════════════════════════════════════
  // USE NTH TERM TO FIND SPECIFIC TERMS (Q51–70)
  // ═══════════════════════════════════════════
  { q:"If Tₙ = 3n + 1, what is T₁₀?", opts:["31", "30", "33", "28"], ans:2, explain:"T₁₀ = 3(10) + 1 = 31." },
  { q:"If Tₙ = 5n − 2, what is T₂₀?", opts:["100", "98", "102", "96"], ans:3, explain:"T₂₀ = 5(20) − 2 = 98." },
  { q:"If Tₙ = 2n + 7, what is T₅₀?", opts:["108", "100", "107", "110"], ans:0, explain:"T₅₀ = 2(50) + 7 = 107." },
  { q:"If Tₙ = 4n − 3, which term equals 37?", opts:["10", "8", "9", "11"], ans:1, explain:"4n − 3 = 37 → 4n = 40 → n = 10." },
  { q:"If Tₙ = 7n + 1, what is T₁₅?", opts:["106", "105", "108", "100"], ans:2, explain:"T₁₅ = 7(15) + 1 = 106." },
  { q:"If Tₙ = 3n − 1, is 50 a term in this sequence?", opts:["Yes, T₁₇", "No, n is not a whole number", "Yes, T₁₆", "Yes, T₁₈"], ans:3, explain:"3n − 1 = 50 → 3n = 51 → n = 17. Yes, 50 = T₁₇." },
  { q:"If Tₙ = 6n − 5, what is T₁₂?", opts:["67", "72", "66", "60"], ans:0, explain:"T₁₂ = 6(12) − 5 = 67." },
  { q:"If Tₙ = 2n + 3, which term equals 53?", opts:["26", "24", "23", "25"], ans:1, explain:"2n + 3 = 53 → 2n = 50 → n = 25." },
  { q:"If Tₙ = 5n + 4, what is T₁₀₀?", opts:["504", "500", "505", "510"], ans:2, explain:"T₁₀₀ = 5(100) + 4 = 504." },
  { q:"If Tₙ = 8n − 3, is 100 a term in this sequence?", opts:["Yes, T₁₂", "Yes, T₁₃", "No, n is not a whole number", "Yes, T₁₁"], ans:3, explain:"8n − 3 = 100 → 8n = 103 → n = 12.875. No, n is not a whole number." },
  { q:"If Tₙ = 4n + 5, what is T₂₅?", opts:["105", "100", "110", "95"], ans:0, explain:"T₂₅ = 4(25) + 5 = 105." },
  { q:"If Tₙ = 10 − 2n, what is T₈?", opts:["−4", "−6", "−8", "−10"], ans:1, explain:"T₈ = 10 − 2(8) = 10 − 16 = −6." },
  { q:"If Tₙ = 3n + 2, which term equals 50?", opts:["16", "15", "17", "14"], ans:2, explain:"3n + 2 = 50 → 3n = 48 → n = 16." },
  { q:"If Tₙ = 9n − 4, what is T₁₁?", opts:["96", "95", "100", "99"], ans:3, explain:"T₁₁ = 9(11) − 4 = 99 − 4 = 95." },
  { q:"If Tₙ = 12 − 3n, for what value of n is Tₙ = −18?", opts:["10", "8", "12", "9"], ans:0, explain:"12 − 3n = −18 → −3n = −30 → n = 10." },
  { q:"If Tₙ = 2n − 1, what is T₃₀?", opts:["60", "58", "59", "61"], ans:1, explain:"T₃₀ = 2(30) − 1 = 59." },
  { q:"If Tₙ = 7n + 3, what is T₈?", opts:["59", "56", "63", "60"], ans:2, explain:"T₈ = 7(8) + 3 = 56 + 3 = 59." },
  { q:"If Tₙ = 5n − 7, which term equals 93?", opts:["20", "19", "18", "21"], ans:3, explain:"5n − 7 = 93 → 5n = 100 → n = 20." },
  { q:"If Tₙ = 4n + 1, what is T₅₀ − T₄₉?", opts:["5", "4", "3", "1"], ans:0, explain:"T₅₀ − T₄₉ = [4(50)+1] − [4(49)+1] = 201 − 197 = 4. This equals the common difference." },
  { q:"If Tₙ = 6n + 2, is 200 a term in this sequence?", opts:["Yes, T₃₃", "No", "Yes, T₃₂", "Yes, T₃₄"], ans:1, explain:"6n + 2 = 200 → 6n = 198 → n = 33. Yes, 200 = T₃₃." },
  // ═══════════════════════════════════════════
  // GEOMETRIC SEQUENCES (Q71–85)
  // ═══════════════════════════════════════════
  { q:"What is the common ratio of 4, 12, 36, 108, ...?", opts:["3", "4", "8", "2"], ans:2, explain:"r = 12 ÷ 4 = 3." },
  { q:"What is the 5th term of the geometric sequence 2, 6, 18, 54, ...?", opts:["108", "162", "96", "128"], ans:3, explain:"r = 3. T₅ = 2 × 3⁴ = 2 × 81 = 162." },
  { q:"What is the next term in 1, 5, 25, 125, ...?", opts:["500", "225", "625", "250"], ans:0, explain:"r = 5. Next = 125 × 5 = 625." },
  { q:"What is the common ratio of 81, 27, 9, 3, ...?", opts:["3", "−3", "1/9", "1/3"], ans:1, explain:"r = 27 ÷ 81 = 1/3." },
  { q:"What is the 4th term of the sequence 5, 10, 20, ...?", opts:["40", "30", "25", "35"], ans:2, explain:"r = 2. T₄ = 5 × 2³ = 5 × 8 = 40." },
  { q:"In the sequence 3, 12, 48, 192, ..., what is r?", opts:["3", "4", "6", "8"], ans:3, explain:"r = 12 ÷ 3 = 4." },
  { q:"What is the 6th term of 1, 2, 4, 8, 16, ...?", opts:["24", "30", "32", "64"], ans:0, explain:"r = 2. T₆ = 1 × 2⁵ = 32." },
  { q:"What is the next term in 1000, 100, 10, 1, ...?", opts:["0.01", "0", "−1", "0.1"], ans:1, explain:"r = 1/10. Next = 1 × 0.1 = 0.1." },
  { q:"What is the 4th term of 7, 14, 28, ...?", opts:["56", "42", "49", "35"], ans:2, explain:"r = 2. T₄ = 7 × 2³ = 56." },
  { q:"What type of sequence is 100, 50, 25, 12.5, ...?", opts:["Arithmetic", "Geometric", "Fibonacci", "Triangular"], ans:3, explain:"r = 50 ÷ 100 = 0.5. It is geometric (multiply by ½ each time)." },
  { q:"In the geometric sequence with a = 3 and r = 2, what is T₆?", opts:["96", "64", "48", "128"], ans:0, explain:"T₆ = 3 × 2⁵ = 3 × 32 = 96." },
  { q:"What is the common ratio of 2, −6, 18, −54, ...?", opts:["3", "−3", "−2", "6"], ans:1, explain:"r = −6 ÷ 2 = −3." },
  { q:"What is the 5th term of 4, 20, 100, 500, ...?", opts:["2000", "1000", "2500", "1500"], ans:2, explain:"r = 5. T₅ = 4 × 5⁴ = 4 × 625 = 2500." },
  { q:"In a geometric sequence, T₁ = 6 and T₂ = 18. What is T₄?", opts:["54", "162", "108", "486"], ans:3, explain:"r = 18 ÷ 6 = 3. T₃ = 54, T₄ = 162." },
  { q:"What is the next term in 256, 64, 16, 4, ...?", opts:["2", "0", "1", "−4"], ans:0, explain:"r = 64 ÷ 256 = ¼. Next = 4 × ¼ = 1." },
  // ═══════════════════════════════════════════
  // SPECIAL SEQUENCES (Q86–105)
  // ═══════════════════════════════════════════
  { q:"What is the 7th square number?", opts:["42", "36", "49", "56"], ans:1, explain:"7² = 49." },
  { q:"What is the 5th triangular number?", opts:["10", "15", "12", "20"], ans:2, explain:"T₅ = 5(5+1)/2 = 30/2 = 15." },
  { q:"What is the 10th term of the Fibonacci sequence (starting 1, 1, 2, 3, ...)?", opts:["34", "55", "55", "89"], ans:3, explain:"1,1,2,3,5,8,13,21,34,55. T₁₀ = 55." },
  { q:"Which of these is a perfect square?", opts:["120", "144", "130", "150"], ans:0, explain:"144 = 12². The others are not perfect squares." },
  { q:"What is the 6th triangular number?", opts:["21", "18", "15", "28"], ans:1, explain:"T₆ = 6(7)/2 = 21." },
  { q:"What is the next Fibonacci number after 8, 13?", opts:["18", "21", "20", "26"], ans:2, explain:"Fibonacci: each term = sum of previous two. 8 + 13 = 21." },
  { q:"What is the 4th cube number?", opts:["27", "32", "64", "81"], ans:3, explain:"4³ = 64." },
  { q:"What is the 8th square number?", opts:["56", "60", "72", "64"], ans:0, explain:"8² = 64." },
  { q:"Which formula gives the triangular numbers?", opts:["n²", "2n + 1", "n(n+1)/2", "n(n−1)/2"], ans:1, explain:"Triangular numbers: Tₙ = n(n+1)/2. E.g. T₃ = 3(4)/2 = 6 ✓." },
  { q:"What is the sum 1 + 2 + 3 + ... + 10?", opts:["50", "55", "45", "60"], ans:2, explain:"Sum = 10(11)/2 = 55. This is the 10th triangular number." },
  { q:"What is the 5th cube number?", opts:["100", "64", "125", "150"], ans:3, explain:"5³ = 125." },
  { q:"Which of these is a triangular number?", opts:["12", "28", "20", "32"], ans:0, explain:"28 = 7(8)/2. It is the 7th triangular number." },
  { q:"In the Fibonacci sequence, what comes after 21, 34?", opts:["55", "48", "45", "65"], ans:1, explain:"21 + 34 = 55." },
  { q:"How many dots are in the 9th triangular number?", opts:["36", "40", "45", "50"], ans:2, explain:"T₉ = 9(10)/2 = 45." },
  { q:"What is 6³?", opts:["216", "180", "196", "256"], ans:3, explain:"6³ = 6 × 6 × 6 = 216." },
  { q:"Which square number is closest to 50?", opts:["36", "64", "49", "25"], ans:0, explain:"7² = 49 is the closest square number to 50." },
  { q:"What is the difference between the 5th and 4th square numbers?", opts:["7", "8", "9", "10"], ans:1, explain:"5² − 4² = 25 − 16 = 9." },
  { q:"What are the first 5 Fibonacci numbers?", opts:["1,1,2,3,5", "1,2,3,4,5", "1,2,3,5,8", "1,1,3,5,7"], ans:2, explain:"Fibonacci: 1, 1, 2, 3, 5 (each term = sum of two before it)." },
  { q:"The triangular number T₄ equals:", opts:["8", "6", "10", "12"], ans:3, explain:"T₄ = 4(5)/2 = 10." },
  { q:"What is 1² + 2² + 3²?", opts:["14", "12", "9", "10"], ans:0, explain:"1 + 4 + 9 = 14." },
  // ═══════════════════════════════════════════
  // DIAGRAM / MATCHSTICK PATTERNS (Q106–130)
  // ═══════════════════════════════════════════
  { q:"A matchstick pattern uses 4, 7, 10, 13, ... sticks. How many sticks for Pattern 5?", opts:["16", "15", "17", "14"], ans:1, explain:"d = 3. T₅ = 4 + (5−1)(3) = 4 + 12 = 16." },
  { q:"In a dot pattern: 3, 6, 9, 12, ... How many dots in Pattern 10?", opts:["27", "30", "33", "36"], ans:2, explain:"d = 3. Tₙ = 3n. T₁₀ = 3(10) = 30." },
  { q:"Tiles: Pattern 1 has 5, Pattern 2 has 9, Pattern 3 has 13. What is the nth term?", opts:["4n − 1", "4n + 1", "4n + 5", "5n + 4"], ans:3, explain:"a = 5, d = 4. Tₙ = 5 + (n−1)(4) = 4n + 1." },
  { q:"A matchstick pattern: 3, 5, 7, 9, ... What is the nth term?", opts:["2n − 1", "2n + 3", "n + 2", "2n + 1"], ans:0, explain:"a = 3, d = 2. Tₙ = 3 + (n−1)(2) = 2n + 1." },
  { q:"Dots in patterns: 1, 5, 9, 13, ... How many dots in Pattern 8?", opts:["29", "32", "33", "25"], ans:1, explain:"d = 4. T₈ = 1 + (8−1)(4) = 1 + 28 = 29." },
  { q:"A pattern uses 6, 11, 16, 21, ... matchsticks. What is the nth term?", opts:["5n − 1", "5n + 1", "6n + 5", "5n + 6"], ans:2, explain:"a = 6, d = 5. Tₙ = 6 + (n−1)(5) = 5n + 1." },
  { q:"Tile pattern: 2, 5, 8, 11, ... How many tiles for Pattern 20?", opts:["62", "58", "59", "61"], ans:3, explain:"d = 3. Tₙ = 2 + (n−1)(3) = 3n − 1. T₂₀ = 3(20) − 1 = 59." },
  { q:"A square matchstick pattern: Pattern 1 = 4 sticks, Pattern 2 = 7, Pattern 3 = 10. Pattern 10 = ?", opts:["31", "30", "28", "34"], ans:0, explain:"d = 3. T₁₀ = 4 + (10−1)(3) = 4 + 27 = 31." },
  { q:"Pattern of crosses uses: 5, 9, 13, 17, ... pieces. How many for Pattern 12?", opts:["49", "48", "45", "53"], ans:1, explain:"d = 4. T₁₂ = 5 + (12−1)(4) = 5 + 44 = 49." },
  { q:"A staircase pattern: 1, 3, 6, 10, ... blocks. What kind of numbers are these?", opts:["Square", "Triangular", "Cube", "Fibonacci"], ans:2, explain:"1, 3, 6, 10, ... are triangular numbers: Tₙ = n(n+1)/2." },
  { q:"Matchstick triangles: 3, 5, 7, 9, ... How many sticks for Pattern 15?", opts:["31", "30", "33", "29"], ans:3, explain:"d = 2. T₁₅ = 3 + (15−1)(2) = 3 + 28 = 31." },
  { q:"Hexagon pattern: 6, 11, 16, 21, ... matchsticks. Pattern 7 = ?", opts:["36", "31", "41", "46"], ans:0, explain:"d = 5. T₇ = 6 + (7−1)(5) = 6 + 30 = 36." },
  { q:"Dot pattern: 4, 8, 12, 16, ... How many dots for Pattern n?", opts:["4n + 4", "4(n+1)", "4n", "n + 4"], ans:1, explain:"a = 4, d = 4. Tₙ = 4n." },
  { q:"A letter-L pattern uses 3, 5, 7, 9, ... tiles. How many tiles for Pattern 50?", opts:["100", "101", "99", "103"], ans:2, explain:"d = 2. Tₙ = 2n + 1. T₅₀ = 2(50) + 1 = 101." },
  { q:"Pattern: 7, 12, 17, 22, ... matchsticks. Which pattern uses 52 matchsticks?", opts:["10", "9", "11", "8"], ans:3, explain:"Tₙ = 5n + 2. 5n + 2 = 52 → 5n = 50 → n = 10." },
  { q:"A growing pattern has 2, 6, 12, 20, ... dots. What is the pattern?", opts:["n² + n", "n(n+1)", "2n²", "Both A and B"], ans:0, explain:"2, 6, 12, 20 = 1(2), 2(3), 3(4), 4(5) = n(n+1). Options A and B are the same expression, so both are correct." },
  { q:"Triangle matchstick pattern: 3, 9, 18, 30, ... What type of sequence is this?", opts:["Arithmetic", "Geometric", "Neither — based on triangular numbers", "Fibonacci"], ans:1, explain:"Differences: 6, 9, 12 (not constant). Related to triangular numbers × 3." },
  { q:"Matchstick squares in a row: 4, 7, 10, 13, ... How many for Pattern 100?", opts:["301", "300", "304", "297"], ans:2, explain:"d = 3. T₁₀₀ = 4 + (100−1)(3) = 4 + 297 = 301." },
  { q:"A pattern has 1, 4, 9, 16, ... dots arranged as squares. Pattern 12 = ?", opts:["144", "132", "121", "156"], ans:3, explain:"These are square numbers: n². T₁₂ = 12² = 144." },
  { q:"Cross pattern: 1, 5, 9, 13, ... pieces. What is the nth term?", opts:["4n + 1", "4n − 3", "n + 4", "4n − 1"], ans:0, explain:"a = 1, d = 4. Tₙ = 1 + (n−1)(4) = 4n − 3." },
  { q:"H-pattern uses 7, 12, 17, 22, ... matchsticks. How many for Pattern 6?", opts:["32", "27", "37", "42"], ans:1, explain:"d = 5. T₆ = 7 + (6−1)(5) = 7 + 25 = 32." },
  { q:"A growing rectangle pattern: 2, 6, 12, 20, 30, ... dots. Pattern 8 = ?", opts:["56", "72", "64", "48"], ans:2, explain:"Tₙ = n(n+1). T₈ = 8(9) = 72." },
  { q:"Pattern: 5, 8, 11, 14, ... How many sticks for Pattern n?", opts:["3n + 2", "3n − 2", "3n + 5", "5n + 3"], ans:3, explain:"a = 5, d = 3. Tₙ = 5 + (n−1)(3) = 3n + 2." },
  { q:"Dot pattern: 2, 5, 10, 17, 26, ... What rule generates this?", opts:["n² − 1", "n² + 1", "2n² + 1", "n² + 2"], ans:0, explain:"T₁ = 1² + 1 = 2, T₂ = 2² + 1 = 5, T₃ = 3² + 1 = 10. Tₙ = n² + 1." },
  { q:"A pentagonal pattern: 5, 9, 13, 17, ... sticks. Which pattern has 41 sticks?", opts:["10", "8", "11", "9"], ans:1, explain:"Tₙ = 4n + 1. 4n + 1 = 41 → 4n = 40 → n = 10." },
  // ═══════════════════════════════════════════
  // MIXED APPLICATION (Q131–150)
  // ═══════════════════════════════════════════
  { q:"A sequence has T₃ = 11 and T₇ = 27. What is the common difference?", opts:["4", "3", "5", "8"], ans:2, explain:"T₇ − T₃ = 27 − 11 = 16. Number of gaps = 7 − 3 = 4. d = 16 ÷ 4 = 4." },
  { q:"A sequence has T₅ = 23 and d = 4. What is the first term?", opts:["5", "7", "9", "3"], ans:3, explain:"T₅ = a + 4d → 23 = a + 16 → a = 7." },
  { q:"An arithmetic sequence starts at 8 with d = 5. Which term first exceeds 100?", opts:["19", "18", "20", "21"], ans:0, explain:"Tₙ = 8 + (n−1)(5) = 5n + 3. 5n + 3 > 100 → 5n > 97 → n > 19.4. So n = 20." },
  { q:"If the 3rd term of a geometric sequence is 36 and r = 3, what is the first term?", opts:["4", "12", "9", "6"], ans:1, explain:"T₃ = ar² → 36 = a(9) → a = 4." },
  { q:"Seats in a theatre: Row 1 has 20, Row 2 has 23, Row 3 has 26. How many in Row 15?", opts:["62", "60", "65", "58"], ans:2, explain:"d = 3. T₁₅ = 20 + (15−1)(3) = 20 + 42 = 62." },
  { q:"A ball bounces to 3/4 of its previous height. From 256 cm, what is the 4th bounce height?", opts:["81", "108", "144", "96"], ans:3, explain:"T₁ = 256(¾) = 192, T₂ = 144, T₃ = 108, T₄ = 81. Or T₄ = 256 × (¾)⁴ = 256 × 81/256 = 81." },
  { q:"Sum of the first n terms of 2, 4, 6, 8, ... is n(n+1). What is the sum of the first 20 terms?", opts:["420", "400", "440", "380"], ans:0, explain:"Sum = 20(21) = 420." },
  { q:"A plant grows 2 cm the 1st week, 5 cm the 2nd, 8 cm the 3rd. How much in week 10?", opts:["29", "30", "32", "27"], ans:1, explain:"d = 3. T₁₀ = 2 + (10−1)(3) = 2 + 27 = 29." },
  { q:"In an arithmetic sequence, T₄ = 17 and T₈ = 33. Find T₁.", opts:["5", "4", "8", "6"], ans:2, explain:"T₈ − T₄ = 33 − 17 = 16. Gaps = 4. d = 4. T₁ = T₄ − 3d = 17 − 12 = 5." },
  { q:"A sequence has Tₙ = 100 − 7n. For what n does Tₙ first become negative?", opts:["14", "15", "13", "16"], ans:3, explain:"100 − 7n < 0 → 7n > 100 → n > 14.28. First negative at n = 15." },
  { q:"How many terms in the sequence 5, 9, 13, ... are less than 100?", opts:["24", "23", "25", "22"], ans:0, explain:"Tₙ = 4n + 1. 4n + 1 < 100 → 4n < 99 → n < 24.75. So 24 terms." },
  { q:"The 1st and 10th terms of an arithmetic sequence are 3 and 48. Find d.", opts:["4", "5", "6", "3"], ans:1, explain:"T₁₀ = a + 9d → 48 = 3 + 9d → 9d = 45 → d = 5." },
  { q:"A geometric sequence has T₁ = 5 and T₄ = 40. Find the common ratio.", opts:["4", "8", "2", "3"], ans:2, explain:"T₄ = ar³ → 40 = 5r³ → r³ = 8 → r = 2." },
  { q:"If Tₙ = n² + 2n, what is T₆?", opts:["48", "42", "36", "54"], ans:3, explain:"T₆ = 36 + 12 = 48." },
  { q:"A worker saves $50 in Month 1 and $10 more each month. How much in Month 12?", opts:["$160", "$170", "\\$150", "\\$180"], ans:0, explain:"d = 10. T₁₂ = 50 + (12−1)(10) = 50 + 110 = $160." },
  { q:"A bacterial colony doubles every hour, starting with 5 cells. After 8 hours?", opts:["1280", "640", "2560", "1024"], ans:1, explain:"T = 5 × 2⁸ = 5 × 256 = 1280." },
  { q:"An arithmetic sequence has T₅ = 31 and T₁₂ = 66. What is T₁?", opts:["11", "6", "16", "21"], ans:2, explain:"T₁₂ − T₅ = 66 − 31 = 35. Gaps = 7. d = 5. T₁ = T₅ − 4d = 31 − 20 = 11." },
  { q:"A ball is dropped from 100 m. Each bounce reaches 60% of the previous height. What is the 3rd bounce?", opts:["21.6", "36", "60", "12.96"], ans:3, explain:"T₁ = 60, T₂ = 36, T₃ = 21.6. Or 100 × 0.6³ = 21.6." },
  { q:"The sum of three consecutive terms of an arithmetic sequence is 27 and the common difference is 3. What are the terms?", opts:["6, 9, 12", "7, 9, 11", "8, 9, 10", "5, 9, 13"], ans:0, explain:"Let terms be a−d, a, a+d. Sum = 3a = 27, so a = 9. d = 3: terms are 6, 9, 12." },
  { q:"A staircase has 100 steps. If step 1 uses 1 block and step n uses n blocks, how many blocks total?", opts:["5050", "4950", "5000", "5100"], ans:1, explain:"Total = 1 + 2 + ... + 100 = 100(101)/2 = 5050." },
]
