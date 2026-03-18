export const meta = {
  id: 9, sem: 2,
  title: 'Ratio, Rate \& Speed',
  desc: 'Simplifying ratios, rates, speed-distance-time'
}

export const notes = `
  <h2>Ratio, Rate &amp; Speed</h2>
  <p class="topic-desc">Simplifying ratios, rates, speed-distance-time</p>

  <div class="notes-card">
    <h3>1. Ratio Basics</h3>
    <p>A <strong>ratio</strong> compares two or more quantities <em>in the same units</em>.</p>
    <div class="example">
      <strong>Simplifying:</strong> Divide all parts by the HCF.<br>
      12 : 18 &rarr; HCF = 6 &rarr; <span class="highlight">2 : 3</span><br><br>
      <strong>Equivalent ratios:</strong> Multiply or divide all parts by the same number.<br>
      2 : 5 = 4 : 10 = 6 : 15<br><br>
      <strong>Three-part ratios:</strong> a : b : c &mdash; make the common term equal.<br>
      A : B = 2 : 3 and B : C = 3 : 5 &rarr; A : B : C = <span class="highlight">2 : 3 : 5</span><br><br>
      <strong>Order matters:</strong> 3 : 5 &ne; 5 : 3
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Ratio Problems</h3>
    <p>Sharing a quantity in a given ratio.</p>
    <div class="example">
      Share $120 in the ratio 3 : 5<br>
      Total parts = 3 + 5 = 8<br>
      1 part = $120 &divide; 8 = <span class="highlight">$15</span><br>
      Amounts: 3 &times; $15 = <span class="highlight">$45</span> and 5 &times; $15 = <span class="highlight">$75</span><br><br>
      <strong>Finding unknowns:</strong> If x : 12 = 3 : 4, then x = 12 &times; 3 &divide; 4 = <span class="highlight">9</span><br><br>
      <strong>Increasing in ratio:</strong> Increase 40 in the ratio 5 : 8 &rarr; 40 &times; 8 &divide; 5 = <span class="highlight">64</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Map Scales</h3>
    <p>A <strong>representative fraction</strong> (RF) expresses scale as a ratio.</p>
    <div class="example">
      Scale 1 : 25 000 means 1 cm on map = 25 000 cm = <span class="highlight">250 m</span> actual.<br><br>
      <strong>Map &rarr; Actual:</strong> Multiply map distance by scale factor.<br>
      4 cm on a 1 : 50 000 map = 4 &times; 50 000 = 200 000 cm = <span class="highlight">2 km</span><br><br>
      <strong>Actual &rarr; Map:</strong> Divide actual distance by scale factor.<br>
      3 km = 300 000 cm &rarr; 300 000 &divide; 50 000 = <span class="highlight">6 cm</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Rate</h3>
    <p>A <strong>rate</strong> compares quantities in <em>different units</em>.</p>
    <div class="example">
      Examples: km/h, $/kg, litres/min<br><br>
      <strong>Unit rate:</strong> Rate per 1 unit.<br>
      360 km in 4 hours &rarr; 360 &divide; 4 = <span class="highlight">90 km/h</span><br><br>
      <strong>Comparing rates:</strong> Find unit rate for each, then compare.<br>
      Shop A: 3 kg for $12 &rarr; $4/kg<br>
      Shop B: 5 kg for $18 &rarr; $3.60/kg &rarr; <span class="highlight">Shop B is cheaper</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Speed</h3>
    <p>Speed measures how fast something moves.</p>
    <div class="example">
      <div class="formula">Speed = Distance &divide; Time</div>
      <div class="formula">Distance = Speed &times; Time</div>
      <div class="formula">Time = Distance &divide; Speed</div><br>
      <strong>Unit conversions:</strong><br>
      km/h &rarr; m/s: <span class="highlight">divide by 3.6</span><br>
      m/s &rarr; km/h: <span class="highlight">multiply by 3.6</span><br><br>
      72 km/h = 72 &divide; 3.6 = <span class="highlight">20 m/s</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Average Speed</h3>
    <p>Average speed = <strong>Total distance &divide; Total time</strong>. It is NOT the average of two speeds!</p>
    <div class="example">
      A car travels 60 km at 40 km/h, then 60 km at 60 km/h.<br>
      Time 1 = 60 &divide; 40 = 1.5 h &nbsp;&nbsp; Time 2 = 60 &divide; 60 = 1 h<br>
      Total distance = 120 km &nbsp;&nbsp; Total time = 2.5 h<br>
      Average speed = 120 &divide; 2.5 = <span class="highlight">48 km/h</span> (not 50!)
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Speed Word Problems</h3>
    <p>Common problem types involving speed.</p>
    <div class="example">
      <strong>Meeting (towards each other):</strong> Combined speed = sum of speeds.<br>
      Two cars 300 km apart, speeds 60 &amp; 40 km/h &rarr; meet in 300 &divide; 100 = <span class="highlight">3 h</span><br><br>
      <strong>Catching up (same direction):</strong> Relative speed = difference.<br>
      Gap = 20 km, speeds 80 &amp; 60 km/h &rarr; catch up in 20 &divide; 20 = <span class="highlight">1 h</span><br><br>
      <strong>Time conversion:</strong> 45 min = 45 &divide; 60 = <span class="highlight">0.75 h</span>
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════
  // SIMPLIFYING RATIOS / EQUIVALENT RATIOS (Q1–25)
  // ═══════════════════════════════════════════
  { q:"Simplify the ratio 12 : 18.", opts:["2 : 3", "3 : 4", "4 : 6", "6 : 9"], ans:0, explain:"HCF of 12 and 18 is 6. 12 ÷ 6 = 2, 18 ÷ 6 = 3. Ratio = 2 : 3." },
  { q:"Simplify 20 : 35.", opts:["2 : 5", "4 : 7", "5 : 8", "3 : 7"], ans:1, explain:"HCF of 20 and 35 is 5. 20 ÷ 5 = 4, 35 ÷ 5 = 7. Ratio = 4 : 7." },
  { q:"Simplify 45 : 60.", opts:["2 : 3", "4 : 5", "3 : 4", "9 : 10"], ans:2, explain:"HCF of 45 and 60 is 15. 45 ÷ 15 = 3, 60 ÷ 15 = 4. Ratio = 3 : 4." },
  { q:"Simplify 24 : 36 : 48.", opts:["3 : 4 : 6", "4 : 6 : 8", "1 : 2 : 3", "2 : 3 : 4"], ans:3, explain:"HCF of 24, 36, 48 is 12. Dividing each: 2 : 3 : 4." },
  { q:"Simplify 0.6 : 0.9.", opts:["2 : 3", "3 : 4", "1 : 2", "6 : 8"], ans:0, explain:"Multiply both by 10: 6 : 9. HCF = 3 → 2 : 3." },
  { q:"Express the ratio ½ : ¾ in simplest form.", opts:["3 : 4", "2 : 3", "1 : 2", "4 : 3"], ans:1, explain:"Multiply both by 4: 2 : 3." },
  { q:"Find the missing value: 3 : 5 = ? : 20.", opts:["8", "10", "12", "15"], ans:2, explain:"5 × 4 = 20, so multiply 3 × 4 = 12." },
  { q:"Find the missing value: 7 : ? = 21 : 27.", opts:["3", "7", "12", "9"], ans:3, explain:"21 ÷ 7 = 3, so ? = 27 ÷ 3 = 9." },
  { q:"Simplify 150 : 200.", opts:["3 : 4", "4 : 5", "5 : 6", "2 : 3"], ans:0, explain:"HCF of 150 and 200 is 50. 150 ÷ 50 = 3, 200 ÷ 50 = 4." },
  { q:"Simplify the ratio 1.2 : 1.8 : 2.4.", opts:["1 : 2 : 3", "2 : 3 : 4", "3 : 4 : 5", "4 : 5 : 6"], ans:1, explain:"Multiply by 10: 12 : 18 : 24. HCF = 6 → 2 : 3 : 4." },
  { q:"Which ratio is equivalent to 5 : 8?", opts:["10 : 14", "20 : 30", "15 : 24", "25 : 35"], ans:2, explain:"5 × 3 = 15, 8 × 3 = 24. So 15 : 24 is equivalent." },
  { q:"Simplify 2 hours : 45 minutes.", opts:["2 : 1", "4 : 3", "45 : 120", "8 : 3"], ans:3, explain:"Convert to same units: 120 min : 45 min. HCF = 15 → 8 : 3." },
  { q:"Simplify 500 g : 2 kg.", opts:["1 : 4", "1 : 2", "2 : 5", "5 : 2"], ans:0, explain:"Convert: 500 g : 2000 g. HCF = 500 → 1 : 4." },
  { q:"Simplify ⅓ : ⅕.", opts:["3 : 5", "5 : 3", "1 : 3", "3 : 1"], ans:1, explain:"Multiply both by 15 (LCM of 3 and 5): 5 : 3." },
  { q:"If A : B = 3 : 4 and B : C = 4 : 5, find A : B : C.", opts:["3 : 5 : 4", "4 : 3 : 5", "3 : 4 : 5", "5 : 4 : 3"], ans:2, explain:"B is common at 4. A : B : C = 3 : 4 : 5." },
  { q:"If A : B = 2 : 3 and B : C = 6 : 7, find A : B : C.", opts:["2 : 3 : 7", "2 : 6 : 7", "6 : 3 : 7", "4 : 6 : 7"], ans:3, explain:"Make B equal: A : B = 4 : 6, B : C = 6 : 7. So A : B : C = 4 : 6 : 7." },
  { q:"Simplify 1.5 : 2.5.", opts:["3 : 5", "5 : 3", "2 : 3", "1 : 2"], ans:0, explain:"Multiply by 2: 3 : 5." },
  { q:"Express 40 cm : 1.2 m as a ratio in simplest form.", opts:["2 : 3", "1 : 3", "3 : 1", "1 : 4"], ans:1, explain:"Convert: 40 cm : 120 cm. HCF = 40 → 1 : 3." },
  { q:"Simplify 16 : 24 : 40.", opts:["4 : 6 : 8", "8 : 12 : 20", "2 : 3 : 5", "16 : 24 : 40"], ans:2, explain:"HCF of 16, 24, 40 is 8. 16÷8=2, 24÷8=3, 40÷8=5." },
  { q:"Find the missing value: 4 : 9 = 16 : ?", opts:["18", "27", "32", "36"], ans:3, explain:"4 × 4 = 16, so ? = 9 × 4 = 36." },
  { q:"Simplify 250 ml : 1 litre.", opts:["1 : 4", "1 : 2", "2 : 5", "4 : 1"], ans:0, explain:"Convert: 250 ml : 1000 ml. HCF = 250 → 1 : 4." },
  { q:"Express ¼ : ⅔ in simplest form.", opts:["1 : 3", "3 : 8", "4 : 6", "2 : 3"], ans:1, explain:"Multiply by 12 (LCM of 4 and 3): 3 : 8." },
  { q:"Simplify 72 : 96.", opts:["2 : 3", "4 : 5", "3 : 4", "6 : 7"], ans:2, explain:"HCF of 72 and 96 is 24. 72÷24=3, 96÷24=4." },
  { q:"If P : Q = 5 : 6, express Q : P in simplest form.", opts:["5 : 6", "1 : 1", "6 : 1", "6 : 5"], ans:3, explain:"Swap the order: Q : P = 6 : 5. Order matters in ratios." },
  { q:"Simplify 3 km : 600 m.", opts:["5 : 1", "1 : 5", "3 : 6", "6 : 3"], ans:0, explain:"Convert: 3000 m : 600 m. HCF = 600 → 5 : 1." },
  // ═══════════════════════════════════════════
  // SHARING IN RATIO / FINDING UNKNOWNS (Q26–45)
  // ═══════════════════════════════════════════
  { q:"Share $120 in the ratio 3 : 5. What is the larger share?", opts:["$45", "$75", "$60", "$80"], ans:1, explain:"Total parts = 8. 1 part = $120 ÷ 8 = $15. Larger = 5 × $15 = $75." },
  { q:"Share $200 in the ratio 2 : 3. What is the smaller share?", opts:["$60", "$100", "$80", "$120"], ans:2, explain:"Total parts = 5. 1 part = $200 ÷ 5 = $40. Smaller = 2 × $40 = $80." },
  { q:"Share 60 sweets in the ratio 1 : 2 : 3. How many does the largest share get?", opts:["10", "20", "25", "30"], ans:3, explain:"Total parts = 6. 1 part = 10. Largest = 3 × 10 = 30." },
  { q:"The ratio of boys to girls is 4 : 5. If there are 36 students, how many boys?", opts:["16", "18", "20", "24"], ans:0, explain:"Total parts = 9. 1 part = 36 ÷ 9 = 4. Boys = 4 × 4 = 16." },
  { q:"A and B share money in ratio 3 : 7. B gets $56. How much does A get?", opts:["$21", "$24", "$28", "$32"], ans:1, explain:"7 parts = $56, so 1 part = $8. A = 3 × $8 = $24." },
  { q:"$450 is shared among X, Y, Z in the ratio 2 : 3 : 4. How much does Y get?", opts:["$100", "$200", "$150", "$180"], ans:2, explain:"Total parts = 9. 1 part = $50. Y = 3 × $50 = $150." },
  { q:"The ratio of red to blue marbles is 5 : 3. There are 40 red marbles. How many blue?", opts:["15", "16", "20", "24"], ans:3, explain:"5 parts = 40, 1 part = 8. Blue = 3 × 8 = 24." },
  { q:"If x : 15 = 4 : 5, find x.", opts:["12", "10", "8", "20"], ans:0, explain:"x = 15 × 4 ÷ 5 = 12." },
  { q:"Increase 30 in the ratio 3 : 5.", opts:["18", "50", "45", "36"], ans:1, explain:"New value = 30 × 5 ÷ 3 = 50." },
  { q:"Decrease 80 in the ratio 7 : 4.", opts:["70", "56", "45.7", "35"], ans:2, explain:"New value = 80 × 4 ÷ 7 ≈ 45.7." },
  { q:"$360 is shared between P and Q in the ratio 5 : 4. How much more does P get than Q?", opts:["$20", "$36", "$80", "$40"], ans:3, explain:"Total parts = 9. 1 part = $40. Difference = (5−4) × $40 = $40." },
  { q:"The ratio of men to women at a party is 3 : 4. There are 28 women. How many men?", opts:["21", "24", "12", "16"], ans:0, explain:"4 parts = 28, 1 part = 7. Men = 3 × 7 = 21." },
  { q:"A recipe uses flour and sugar in ratio 5 : 2. If 250 g of flour is used, how much sugar?", opts:["50 g", "100 g", "125 g", "150 g"], ans:1, explain:"5 parts = 250 g, 1 part = 50 g. Sugar = 2 × 50 = 100 g." },
  { q:"Share 72 pencils among A, B, C in ratio 2 : 3 : 4. How many pencils does C get?", opts:["16", "24", "32", "36"], ans:2, explain:"Total parts = 9. 1 part = 8. C = 4 × 8 = 32." },
  { q:"If a : b = 2 : 3 and a = 10, find a + b.", opts:["15", "20", "12", "25"], ans:3, explain:"2 parts = 10, 1 part = 5. b = 3 × 5 = 15. a + b = 25." },
  { q:"Increase $60 in the ratio 2 : 5.", opts:["$150", "$120", "$100", "$24"], ans:0, explain:"New value = 60 × 5 ÷ 2 = $150." },
  { q:"The ratio of cats to dogs is 5 : 8. If the total is 78, how many dogs?", opts:["30", "48", "40", "52"], ans:1, explain:"Total parts = 13. 1 part = 6. Dogs = 8 × 6 = 48." },
  { q:"Share $540 in the ratio 4 : 5. What is the difference between the two shares?", opts:["$40", "$100", "$60", "$80"], ans:2, explain:"Total parts = 9. 1 part = $60. Difference = 1 × $60 = $60." },
  { q:"If 3 : x = 12 : 20, find x.", opts:["3", "4", "15", "5"], ans:3, explain:"3/x = 12/20. x = 3 × 20 ÷ 12 = 5." },
  { q:"A sum of money is divided among Tom, Jerry, and Spike in ratio 1 : 3 : 5. Spike gets $75. What is the total?", opts:["$135", "$120", "$150", "$100"], ans:0, explain:"5 parts = $75, 1 part = $15. Total = 9 × $15 = $135." },
  // ═══════════════════════════════════════════
  // MAP SCALES (Q46–60)
  // ═══════════════════════════════════════════
  { q:"A map scale is 1 : 25 000. What actual distance does 1 cm represent?", opts:["25 m", "250 m", "2.5 km", "25 km"], ans:1, explain:"1 cm = 25 000 cm = 250 m." },
  { q:"On a 1 : 50 000 map, two towns are 4 cm apart. What is the actual distance in km?", opts:["0.2 km", "20 km", "2 km", "200 km"], ans:2, explain:"4 × 50 000 = 200 000 cm = 2 km." },
  { q:"The actual distance between two places is 3 km. On a 1 : 50 000 map, what is the map distance?", opts:["0.6 cm", "3 cm", "15 cm", "6 cm"], ans:3, explain:"3 km = 300 000 cm. 300 000 ÷ 50 000 = 6 cm." },
  { q:"A map scale is 1 : 100 000. What does 5 cm on the map represent?", opts:["5 km", "50 km", "500 m", "50 m"], ans:0, explain:"5 × 100 000 = 500 000 cm = 5 km." },
  { q:"On a 1 : 20 000 map, a park is 3.5 cm long. What is the actual length?", opts:["70 m", "700 m", "7 km", "7000 m"], ans:1, explain:"3.5 × 20 000 = 70 000 cm = 700 m." },
  { q:"A road is 8 km long. On a 1 : 200 000 map, how long is it?", opts:["0.4 cm", "0.8 cm", "4 cm", "8 cm"], ans:2, explain:"8 km = 800 000 cm. 800 000 ÷ 200 000 = 4 cm." },
  { q:"1 cm on a map represents 500 m. Express this as a ratio.", opts:["1 : 5 000", "1 : 500", "1 : 5 000 000", "1 : 50 000"], ans:3, explain:"500 m = 50 000 cm. Scale = 1 : 50 000." },
  { q:"On a 1 : 40 000 map, 2 cm represents what actual distance?", opts:["800 m", "400 m", "8 km", "80 m"], ans:0, explain:"2 × 40 000 = 80 000 cm = 800 m." },
  { q:"A field is 1.5 km long. On a 1 : 25 000 map, what is the length?", opts:["3 cm", "6 cm", "15 cm", "60 cm"], ans:1, explain:"1.5 km = 150 000 cm. 150 000 ÷ 25 000 = 6 cm." },
  { q:"A map scale is 1 : 10 000. How many metres does 1 cm represent?", opts:["10 m", "1 000 m", "100 m", "1 m"], ans:2, explain:"1 cm = 10 000 cm = 100 m." },
  { q:"On a 1 : 250 000 map, a lake is 2 cm wide. What is the actual width?", opts:["2.5 km", "25 km", "250 m", "5 km"], ans:3, explain:"2 × 250 000 = 500 000 cm = 5 km." },
  { q:"A map has scale 1 cm : 5 km. Express as a representative fraction.", opts:["1 : 500 000", "1 : 50 000", "1 : 5 000", "1 : 5 000 000"], ans:0, explain:"5 km = 500 000 cm. RF = 1 : 500 000." },
  { q:"The actual distance is 12 km. On a 1 : 400 000 map, what is the map distance?", opts:["0.3 cm", "3 cm", "30 cm", "12 cm"], ans:1, explain:"12 km = 1 200 000 cm. 1 200 000 ÷ 400 000 = 3 cm." },
  { q:"On a 1 : 75 000 map, a river is 8 cm long. What is the actual length in km?", opts:["0.6 km", "60 km", "6 km", "0.06 km"], ans:2, explain:"8 × 75 000 = 600 000 cm = 6 km." },
  { q:"If 2 cm on a map represents 1 km, what is the scale?", opts:["1 : 100 000", "1 : 10 000", "1 : 500", "1 : 50 000"], ans:3, explain:"1 km = 100 000 cm. 2 cm : 100 000 cm = 1 : 50 000." },
  // ═══════════════════════════════════════════
  // RATES / UNIT RATES (Q61–80)
  // ═══════════════════════════════════════════
  { q:"A car uses 40 litres of petrol to travel 480 km. What is the rate of fuel consumption?", opts:["12 km/l", "48 km/l", "8 km/l", "10 km/l"], ans:0, explain:"480 ÷ 40 = 12 km per litre." },
  { q:"Shop A sells 3 kg of rice for $6. Shop B sells 5 kg for $9. Which is cheaper per kg?", opts:["Shop A ($2/kg)", "Shop B ($1.80/kg)", "Both same", "Cannot tell"], ans:1, explain:"A: $6 ÷ 3 = $2/kg. B: $9 ÷ 5 = $1.80/kg. Shop B is cheaper." },
  { q:"A tap fills 15 litres in 3 minutes. What is the rate in litres per minute?", opts:["3 l/min", "15 l/min", "5 l/min", "45 l/min"], ans:2, explain:"15 ÷ 3 = 5 litres per minute." },
  { q:"A printer prints 120 pages in 8 minutes. How many pages per minute?", opts:["12", "16", "20", "15"], ans:3, explain:"120 ÷ 8 = 15 pages per minute." },
  { q:"Water flows at 2.5 litres/min. How much flows in 12 minutes?", opts:["30 litres", "25 litres", "24 litres", "14.5 litres"], ans:0, explain:"2.5 × 12 = 30 litres." },
  { q:"A worker earns $960 for 8 days of work. What is the daily rate?", opts:["$100", "$120", "$96", "$80"], ans:1, explain:"$960 ÷ 8 = $120 per day." },
  { q:"Brand A: 500 ml for $3.50. Brand B: 750 ml for $4.50. Which is better value?", opts:["Brand A", "Same value", "Brand B", "Cannot tell"], ans:2, explain:"A: $3.50/500 = $0.70/100ml. B: $4.50/750 = $0.60/100ml. Brand B is cheaper." },
  { q:"A car travels 350 km using 25 litres. What is the fuel consumption in litres per 100 km?", opts:["14.3 l/100km", "10 l/100km", "25 l/100km", "7.14 l/100km"], ans:3, explain:"25 litres for 350 km. Per 100 km: 25 × 100 ÷ 350 ≈ 7.14 l/100km." },
  { q:"A heart beats 75 times per minute. How many beats in 1 hour?", opts:["4 500", "750", "7 500", "450"], ans:0, explain:"75 × 60 = 4 500 beats." },
  { q:"A machine produces 240 items in 4 hours. What is the rate per hour?", opts:["48", "60", "80", "120"], ans:1, explain:"240 ÷ 4 = 60 items per hour." },
  { q:"6 kg of apples cost $15. What is the cost per kg?", opts:["$3.00", "$2.00", "$2.50", "$3.50"], ans:2, explain:"$15 ÷ 6 = $2.50 per kg." },
  { q:"A pump removes 8 litres per minute. How long to empty a 200-litre tank?", opts:["20 min", "16 min", "40 min", "25 min"], ans:3, explain:"200 ÷ 8 = 25 minutes." },
  { q:"John types 240 words in 6 minutes. What is his typing speed?", opts:["40 words/min", "36 words/min", "48 words/min", "30 words/min"], ans:0, explain:"240 ÷ 6 = 40 words per minute." },
  { q:"Convert 72 km/h to m/min.", opts:["72 m/min", "1 200 m/min", "720 m/min", "120 m/min"], ans:1, explain:"72 km/h = 72 000 m ÷ 60 min = 1 200 m/min." },
  { q:"A factory uses 450 kWh of electricity in 5 days. What is the daily usage?", opts:["45 kWh", "50 kWh", "90 kWh", "100 kWh"], ans:2, explain:"450 ÷ 5 = 90 kWh per day." },
  { q:"Store X: 4 notebooks for $10. Store Y: 6 notebooks for $13.50. Which store is cheaper per notebook?", opts:["Store X ($2.50)", "Same price", "Store X ($2.00)", "Store Y ($2.25)"], ans:3, explain:"X: $10 ÷ 4 = $2.50. Y: $13.50 ÷ 6 = $2.25. Store Y is cheaper." },
  { q:"A leaking tap drips 0.5 ml per second. How much water is wasted in 1 hour?", opts:["1 800 ml", "180 ml", "3 000 ml", "500 ml"], ans:0, explain:"0.5 × 3 600 = 1 800 ml." },
  { q:"Convert $4.80 per kg to cents per 100 g.", opts:["4.8 cents", "48 cents", "480 cents", "0.48 cents"], ans:1, explain:"$4.80/kg = 480 cents/1000g = 48 cents/100g." },
  { q:"A bus uses 30 litres of diesel for 150 km. What is the fuel efficiency?", opts:["3 km/l", "15 km/l", "5 km/l", "0.2 km/l"], ans:2, explain:"150 ÷ 30 = 5 km per litre." },
  { q:"Pipe A fills 3 litres/min. Pipe B fills 5 litres/min. Combined, how long to fill 120 litres?", opts:["20 min", "24 min", "40 min", "15 min"], ans:3, explain:"Combined rate = 8 l/min. Time = 120 ÷ 8 = 15 min." },
  // ═══════════════════════════════════════════
  // SPEED CALCULATIONS (Q81–105)
  // ═══════════════════════════════════════════
  { q:"A car travels 240 km in 3 hours. What is its speed?", opts:["80 km/h", "60 km/h", "120 km/h", "90 km/h"], ans:0, explain:"Speed = 240 ÷ 3 = 80 km/h." },
  { q:"A cyclist rides at 15 km/h for 2.5 hours. What distance is covered?", opts:["30 km", "37.5 km", "45 km", "25 km"], ans:1, explain:"Distance = 15 × 2.5 = 37.5 km." },
  { q:"How long does it take to travel 180 km at 60 km/h?", opts:["2 h", "2.5 h", "3 h", "3.5 h"], ans:2, explain:"Time = 180 ÷ 60 = 3 hours." },
  { q:"Convert 90 km/h to m/s.", opts:["9 m/s", "36 m/s", "90 m/s", "25 m/s"], ans:3, explain:"90 ÷ 3.6 = 25 m/s." },
  { q:"Convert 20 m/s to km/h.", opts:["72 km/h", "60 km/h", "36 km/h", "200 km/h"], ans:0, explain:"20 × 3.6 = 72 km/h." },
  { q:"A train travels 450 km in 5 hours. What is the speed?", opts:["80 km/h", "90 km/h", "100 km/h", "85 km/h"], ans:1, explain:"Speed = 450 ÷ 5 = 90 km/h." },
  { q:"A runner covers 100 m in 10 seconds. What is the speed in m/s?", opts:["5 m/s", "20 m/s", "10 m/s", "100 m/s"], ans:2, explain:"Speed = 100 ÷ 10 = 10 m/s." },
  { q:"At 54 km/h, how far does a car travel in 40 minutes?", opts:["54 km", "27 km", "40 km", "36 km"], ans:3, explain:"40 min = 2/3 h. Distance = 54 × 2/3 = 36 km." },
  { q:"A bus takes 45 minutes to cover 60 km. What is the speed in km/h?", opts:["80 km/h", "60 km/h", "75 km/h", "90 km/h"], ans:0, explain:"45 min = 0.75 h. Speed = 60 ÷ 0.75 = 80 km/h." },
  { q:"How long to travel 210 km at 70 km/h?", opts:["2 h", "3 h", "2.5 h", "4 h"], ans:1, explain:"Time = 210 ÷ 70 = 3 hours." },
  { q:"Convert 36 km/h to m/s.", opts:["3.6 m/s", "36 m/s", "10 m/s", "100 m/s"], ans:2, explain:"36 ÷ 3.6 = 10 m/s." },
  { q:"A plane flies 1 800 km in 2.5 hours. What is the speed?", opts:["600 km/h", "900 km/h", "360 km/h", "720 km/h"], ans:3, explain:"Speed = 1800 ÷ 2.5 = 720 km/h." },
  { q:"At 12 m/s, how far does a person run in 25 seconds?", opts:["300 m", "250 m", "120 m", "312 m"], ans:0, explain:"Distance = 12 × 25 = 300 m." },
  { q:"A snail moves at 0.03 km/h. How far does it travel in 2 hours?", opts:["0.3 km", "0.06 km", "0.6 km", "0.003 km"], ans:1, explain:"Distance = 0.03 × 2 = 0.06 km." },
  { q:"How long to walk 4.5 km at 6 km/h?", opts:["30 min", "60 min", "45 min", "40 min"], ans:2, explain:"Time = 4.5 ÷ 6 = 0.75 h = 45 min." },
  { q:"Convert 15 m/s to km/h.", opts:["45 km/h", "150 km/h", "5.4 km/h", "54 km/h"], ans:3, explain:"15 × 3.6 = 54 km/h." },
  { q:"A boat travels 72 km in 1 h 30 min. What is the speed?", opts:["48 km/h", "72 km/h", "36 km/h", "54 km/h"], ans:0, explain:"1 h 30 min = 1.5 h. Speed = 72 ÷ 1.5 = 48 km/h." },
  { q:"At 60 km/h, how many minutes to travel 30 km?", opts:["20 min", "30 min", "45 min", "60 min"], ans:1, explain:"Time = 30 ÷ 60 = 0.5 h = 30 min." },
  { q:"A jogger runs at 8 km/h for 1 h 15 min. What distance is covered?", opts:["8 km", "9 km", "10 km", "12 km"], ans:2, explain:"1 h 15 min = 1.25 h. Distance = 8 × 1.25 = 10 km." },
  { q:"A car travels 150 km. If speed increases from 50 km/h to 75 km/h, how much time is saved?", opts:["30 min", "45 min", "2 h", "1 h"], ans:3, explain:"At 50: 150÷50 = 3h. At 75: 150÷75 = 2h. Saved = 1h." },
  { q:"Convert 108 km/h to m/s.", opts:["30 m/s", "36 m/s", "10.8 m/s", "3 m/s"], ans:0, explain:"108 ÷ 3.6 = 30 m/s." },
  { q:"A helicopter flies at 200 km/h. How far in 45 minutes?", opts:["100 km", "150 km", "200 km", "90 km"], ans:1, explain:"45 min = 0.75 h. Distance = 200 × 0.75 = 150 km." },
  { q:"A marathon runner completes 42 km in 3.5 hours. What is the speed?", opts:["10 km/h", "14 km/h", "12 km/h", "15 km/h"], ans:2, explain:"Speed = 42 ÷ 3.5 = 12 km/h." },
  { q:"At 80 km/h, how long to travel 100 km? Express in hours and minutes.", opts:["1 h", "1 h 30 min", "1 h 20 min", "1 h 15 min"], ans:3, explain:"Time = 100 ÷ 80 = 1.25 h = 1 h 15 min." },
  { q:"A ship sails 360 km at 24 km/h. How long is the journey?", opts:["15 h", "12 h", "18 h", "20 h"], ans:0, explain:"Time = 360 ÷ 24 = 15 hours." },
  // ═══════════════════════════════════════════
  // AVERAGE SPEED (Q106–125)
  // ═══════════════════════════════════════════
  { q:"A car travels 100 km at 50 km/h, then 100 km at 100 km/h. What is the average speed?", opts:["75 km/h", "66⅔ km/h", "80 km/h", "50 km/h"], ans:1, explain:"Time1 = 2h, Time2 = 1h. Total = 200 km in 3h. Avg = 200÷3 ≈ 66⅔ km/h." },
  { q:"A cyclist rides 30 km in 1.5 h, then 20 km in 1 h. What is the average speed?", opts:["25 km/h", "30 km/h", "20 km/h", "50 km/h"], ans:2, explain:"Total dist = 50 km. Total time = 2.5 h. Avg = 50 ÷ 2.5 = 20 km/h." },
  { q:"A car travels 60 km at 40 km/h, then 60 km at 60 km/h. What is the average speed?", opts:["50 km/h", "45 km/h", "52 km/h", "48 km/h"], ans:3, explain:"Time1 = 1.5h, Time2 = 1h. Total = 120 km in 2.5h. Avg = 120÷2.5 = 48 km/h." },
  { q:"John walks 4 km in 1 h, then jogs 6 km in 0.5 h. What is his average speed?", opts:["6⅔ km/h", "5 km/h", "8 km/h", "10 km/h"], ans:0, explain:"Total = 10 km in 1.5 h. Avg = 10 ÷ 1.5 ≈ 6⅔ km/h." },
  { q:"True or false: Average speed is always the average of two speeds.", opts:["True", "False", "Only for equal distances", "Only for equal times"], ans:1, explain:"False. Average speed = total distance ÷ total time, not the mean of two speeds." },
  { q:"A bus travels 90 km at 45 km/h, then 60 km at 40 km/h. Find the average speed.", opts:["43 km/h", "42 km/h", "42.86 km/h", "45 km/h"], ans:2, explain:"Time1 = 2h, Time2 = 1.5h. Avg = 150 ÷ 3.5 ≈ 42.86 km/h." },
  { q:"A car travels at 60 km/h for 2 h, then at 80 km/h for 3 h. Find the average speed.", opts:["70 km/h", "75 km/h", "68 km/h", "72 km/h"], ans:3, explain:"Dist = 120 + 240 = 360 km. Time = 5h. Avg = 360 ÷ 5 = 72 km/h." },
  { q:"Ali walks 2 km at 4 km/h, then cycles 10 km at 20 km/h. What is the average speed?", opts:["12 km/h", "8 km/h", "10 km/h", "6 km/h"], ans:0, explain:"Time1 = 0.5h, Time2 = 0.5h. Total = 12 km in 1h. Avg = 12 km/h." },
  { q:"A runner runs the first half of a race at 10 km/h and the second half at 15 km/h. If total distance is 12 km, find average speed.", opts:["11 km/h", "12 km/h", "12.5 km/h", "13 km/h"], ans:1, explain:"Each half = 6 km. Time1 = 0.6h, Time2 = 0.4h. Avg = 12 ÷ 1 = 12 km/h." },
  { q:"A car drives 80 km at 40 km/h, rests for 30 min, then drives 40 km at 80 km/h. Average speed for entire journey?", opts:["48 km/h", "60 km/h", "40 km/h", "36 km/h"], ans:2, explain:"Time = 2h + 0.5h + 0.5h = 3h. Dist = 120 km. Avg = 120 ÷ 3 = 40 km/h." },
  { q:"A train covers 150 km at 75 km/h and 90 km at 45 km/h. What is the average speed?", opts:["66 km/h", "65 km/h", "64 km/h", "60 km/h"], ans:3, explain:"Time1 = 2h, Time2 = 2h. Total = 240 km in 4h. Avg = 60 km/h." },
  { q:"A vehicle goes 200 km at 100 km/h then returns at 50 km/h. Average speed for the round trip?", opts:["66⅔ km/h", "75 km/h", "80 km/h", "50 km/h"], ans:0, explain:"Time there = 2h, back = 4h. Total = 400 km in 6h. Avg ≈ 66⅔ km/h." },
  { q:"Peter drives 50 km in 1 hour, then 70 km in 2 hours. What is his average speed?", opts:["60 km/h", "40 km/h", "35 km/h", "45 km/h"], ans:1, explain:"Total = 120 km in 3h. Avg = 120 ÷ 3 = 40 km/h." },
  { q:"A car travels at 50 km/h for 30 min and 70 km/h for 30 min. What is the average speed?", opts:["50 km/h", "70 km/h", "60 km/h", "55 km/h"], ans:2, explain:"Dist = 25 + 35 = 60 km. Time = 1h. Avg = 60 km/h. (Equal time → average of speeds works.)" },
  { q:"A cyclist covers the first 20 km at 10 km/h and the next 20 km at 20 km/h. Find average speed.", opts:["12 km/h", "14 km/h", "16 km/h", "13⅓ km/h"], ans:3, explain:"Time1 = 2h, Time2 = 1h. Avg = 40 ÷ 3 ≈ 13⅓ km/h." },
  { q:"A trip of 240 km takes 4 hours total, with a 30-minute rest. What is the average moving speed?", opts:["68.6 km/h", "60 km/h", "80 km/h", "48 km/h"], ans:0, explain:"Moving time = 3.5h. Avg moving speed = 240 ÷ 3.5 ≈ 68.6 km/h." },
  { q:"A van travels 60 km at 40 km/h, then 60 km at 120 km/h. What is the average speed?", opts:["70 km/h", "60 km/h", "80 km/h", "50 km/h"], ans:1, explain:"Time1 = 60/40 = 1.5 h. Time2 = 60/120 = 0.5 h. Total = 120 km in 2 h. Avg = 60 km/h." },
  { q:"A jogger runs 5 km at 10 km/h, then walks 3 km at 6 km/h. What is the average speed?", opts:["7 km/h", "9 km/h", "8 km/h", "7.5 km/h"], ans:2, explain:"Time1 = 0.5h, Time2 = 0.5h. Total = 8 km in 1h. Avg = 8 km/h." },
  { q:"A man drives 120 km. First 60 km at 30 km/h, next 60 km at 60 km/h. Average speed?", opts:["45 km/h", "50 km/h", "42 km/h", "40 km/h"], ans:3, explain:"Time1 = 2h, Time2 = 1h. Total = 120 km in 3h. Avg = 40 km/h." },
  { q:"Two towns are 300 km apart. A car goes there at 100 km/h and returns at 60 km/h. Average speed?", opts:["75 km/h", "80 km/h", "70 km/h", "85 km/h"], ans:0, explain:"Time1 = 3h, Time2 = 5h. Total = 600 km in 8h. Avg = 75 km/h." },
  // ═══════════════════════════════════════════
  // SPEED WORD PROBLEMS (Q126–150)
  // ═══════════════════════════════════════════
  { q:"Two cars start 400 km apart and drive towards each other at 70 km/h and 80 km/h. When do they meet?", opts:["3 h", "2 h 40 min", "2 h", "4 h"], ans:1, explain:"Combined speed = 150 km/h. Time = 400 ÷ 150 = 2⅔ h = 2 h 40 min." },
  { q:"Car A is 50 km ahead of Car B. A travels at 60 km/h, B at 80 km/h. How long for B to catch A?", opts:["1 h", "1.5 h", "2.5 h", "3 h"], ans:2, explain:"Relative speed = 80 − 60 = 20 km/h. Time = 50 ÷ 20 = 2.5 h." },
  { q:"A train 200 m long passes a pole at 20 m/s. How long does it take?", opts:["20 s", "5 s", "100 s", "10 s"], ans:3, explain:"Time = 200 ÷ 20 = 10 seconds." },
  { q:"Convert 45 minutes to hours.", opts:["0.75 h", "0.45 h", "0.5 h", "1.25 h"], ans:0, explain:"45 ÷ 60 = 0.75 hours." },
  { q:"A man walks at 5 km/h and starts 30 min before a cyclist going at 15 km/h. When does the cyclist catch up?", opts:["30 min", "15 min", "20 min", "45 min"], ans:1, explain:"Head start = 5 × 0.5 = 2.5 km. Relative speed = 10 km/h. Time = 2.5 ÷ 10 = 0.25h = 15 min." },
  { q:"Two trains leave the same station in opposite directions at 50 km/h and 70 km/h. How far apart are they after 2 h?", opts:["200 km", "140 km", "240 km", "120 km"], ans:2, explain:"Combined speed = 120 km/h. Distance = 120 × 2 = 240 km." },
  { q:"A car leaves Town A at 9:00 am at 60 km/h. It reaches Town B at 11:30 am. How far is Town B?", opts:["120 km", "180 km", "200 km", "150 km"], ans:3, explain:"Time = 2.5 h. Distance = 60 × 2.5 = 150 km." },
  { q:"A 150 m train passes through a 350 m tunnel at 25 m/s. How long does it take?", opts:["20 s", "14 s", "6 s", "10 s"], ans:0, explain:"Total distance = 150 + 350 = 500 m. Time = 500 ÷ 25 = 20 s." },
  { q:"Two cyclists start from the same point. One goes north at 12 km/h, the other goes south at 18 km/h. How far apart after 1.5 h?", opts:["27 km", "45 km", "36 km", "18 km"], ans:1, explain:"Combined speed = 30 km/h. Distance = 30 × 1.5 = 45 km." },
  { q:"A car travels for 2 h at 80 km/h, then 1.5 h at 60 km/h. Total distance?", opts:["200 km", "240 km", "250 km", "280 km"], ans:2, explain:"160 + 90 = 250 km." },
  { q:"Ali leaves home at 7:30 am walking at 4 km/h. His school is 2 km away. What time does he arrive?", opts:["7:45 am", "8:15 am", "7:50 am", "8:00 am"], ans:3, explain:"Time = 2 ÷ 4 = 0.5 h = 30 min. 7:30 + 30 min = 8:00 am." },
  { q:"A bus and a car start from the same place going the same direction. Bus at 40 km/h, car at 60 km/h. How far apart after 3 h?", opts:["60 km", "120 km", "80 km", "180 km"], ans:0, explain:"Difference in speed = 20 km/h. Distance = 20 × 3 = 60 km." },
  { q:"Two towns are 180 km apart. A car leaves Town A at 60 km/h and another leaves Town B at 30 km/h towards each other. When do they meet?", opts:["3 h", "2 h", "1.5 h", "2.5 h"], ans:1, explain:"Combined = 90 km/h. Time = 180 ÷ 90 = 2 h." },
  { q:"A boat goes upstream at 8 km/h and downstream at 12 km/h. It travels 24 km upstream and returns. Total time?", opts:["4 h", "3.5 h", "5 h", "6 h"], ans:2, explain:"Upstream: 24÷8 = 3h. Downstream: 24÷12 = 2h. Total = 5h." },
  { q:"Express 2 hours 20 minutes in hours.", opts:["2.2 h", "2.5 h", "2.25 h", "2⅓ h"], ans:3, explain:"20 min = 20/60 = 1/3 h. Total = 2⅓ h." },
  { q:"A car leaves Town P at 8 am at 50 km/h. Another car leaves at 9 am at 70 km/h from the same town in the same direction. When does the second car overtake?", opts:["11:30 am", "10:30 am", "12:00 pm", "11:00 am"], ans:0, explain:"Head start = 50 km (1h). Relative speed = 20 km/h. Time = 50÷20 = 2.5h after 9am = 11:30 am." },
  { q:"A train takes 2 minutes to pass through a 1.6 km tunnel at constant speed. The train is 200 m long. Find the speed.", opts:["48 km/h", "54 km/h", "60 km/h", "45 km/h"], ans:1, explain:"Total distance = 1600 + 200 = 1800 m. Speed = 1800 ÷ 120 = 15 m/s = 54 km/h." },
  { q:"Siti walks from home to school at 5 km/h and takes 24 min. If she cycles at 15 km/h, how long would it take?", opts:["12 min", "6 min", "8 min", "10 min"], ans:2, explain:"Distance = 5 × 24/60 = 2 km. Time = 2 ÷ 15 = 2/15 h = 8 min." },
  { q:"A car travels from A to B at 80 km/h in 3 hours. On the return, it takes 4 hours. What is the return speed?", opts:["50 km/h", "70 km/h", "80 km/h", "60 km/h"], ans:3, explain:"Distance = 80 × 3 = 240 km. Return speed = 240 ÷ 4 = 60 km/h." },
  { q:"Two runners start at the same time from opposite ends of a 2 km track. They run towards each other at 10 km/h and 15 km/h. When do they meet?", opts:["4.8 min", "8 min", "12 min", "6 min"], ans:0, explain:"Combined = 25 km/h. Time = 2 ÷ 25 = 0.08 h = 4.8 min." },
  { q:"A car goes 40 km in 30 min, then stops for 15 min, then goes 20 km in 15 min. What is the average speed for the whole journey?", opts:["80 km/h", "60 km/h", "40 km/h", "100 km/h"], ans:1, explain:"Total dist = 60 km. Total time = 30+15+15 = 60 min = 1h. Avg = 60 km/h." },
  { q:"A ship sailing at 18 km/h takes 5 hours. If it increases speed to 30 km/h, how much time is saved?", opts:["1 h", "1.5 h", "2 h", "3 h"], ans:2, explain:"Distance = 18 × 5 = 90 km. New time = 90 ÷ 30 = 3h. Saved = 5 − 3 = 2h." },
  { q:"Two cars start from the same point at the same time. Car A goes east at 50 km/h. Car B goes west at 40 km/h. How long until they are 270 km apart?", opts:["2 h", "2.5 h", "4 h", "3 h"], ans:3, explain:"Combined speed = 90 km/h. Time = 270 ÷ 90 = 3 h." },
  { q:"A man rows upstream at 6 km/h. The stream flows at 2 km/h. What is his speed in still water?", opts:["8 km/h", "4 km/h", "6 km/h", "10 km/h"], ans:0, explain:"Upstream speed = still water speed − stream speed. 6 = x − 2, x = 8 km/h." },
  { q:"A car leaves at 10:00 am at 80 km/h and arrives at 12:45 pm. How far did it travel?", opts:["200 km", "220 km", "240 km", "160 km"], ans:1, explain:"Time = 2 h 45 min = 2.75 h. Distance = 80 × 2.75 = 220 km." }
]
