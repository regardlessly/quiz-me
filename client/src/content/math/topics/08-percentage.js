export const meta = {
  id: 8, sem: 2,
  title: 'Percentage',
  desc: 'Increase/decrease, reverse percentage, GST, profit & loss'
}

export const notes = `
  <h2>Percentage</h2>
  <p class="topic-desc">Increase/decrease, reverse percentage, GST, profit &amp; loss</p>

  <div class="notes-card">
    <h3>1. Percentage Basics</h3>
    <p><em>Per cent</em> means <strong>per hundred</strong>. A percentage expresses a number as a fraction of 100.</p>
    <div class="example">
      <strong>Converting forms:</strong><br>
      Fraction &rarr; Decimal &rarr; Percentage<br>
      &frac34; = 0.75 = 75%<br>
      &frac25; = 0.4 = 40%<br><br>
      <strong>Percentage &rarr; Decimal:</strong> divide by 100<br>
      45% = 45 &divide; 100 = 0.45<br><br>
      <strong>Decimal &rarr; Percentage:</strong> multiply by 100<br>
      0.06 = 0.06 &times; 100 = 6%
    </div>
    <div class="example">
      <strong>Finding percentage of a quantity:</strong><br>
      30% of $200 = 0.3 &times; 200 = <span class="highlight">$60</span><br>
      15% of 80 kg = 0.15 &times; 80 = <span class="highlight">12 kg</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Percentage Change (Increase / Decrease)</h3>
    <div class="formula">% Change = (Change &divide; Original) &times; 100</div>
    <div class="example">
      <strong>Percentage increase:</strong><br>
      New value = Original &times; (1 + % &divide; 100)<br>
      A shirt costs $40. After a 25% increase, new price = 40 &times; 1.25 = <span class="highlight">$50</span><br><br>
      <strong>Percentage decrease:</strong><br>
      New value = Original &times; (1 &minus; % &divide; 100)<br>
      A bag costs $60. After a 15% decrease, new price = 60 &times; 0.85 = <span class="highlight">$51</span>
    </div>
    <div class="example">
      <strong>Finding % change:</strong><br>
      Price went from $50 to $65. Change = $15.<br>
      % increase = (15 &divide; 50) &times; 100 = <span class="highlight">30%</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Reverse Percentage</h3>
    <p>Finding the <strong>original value</strong> when you know the final value after a percentage change.</p>
    <div class="formula">After increase: Original = Final &divide; (1 + % &divide; 100)</div>
    <div class="formula">After decrease: Original = Final &divide; (1 &minus; % &divide; 100)</div>
    <div class="example">
      <strong>After 20% discount, price is $80. Find original.</strong><br>
      80% of original = $80<br>
      Original = $80 &divide; 0.8 = <span class="highlight">$100</span><br><br>
      <strong>After 7% GST, price is $107. Find price before GST.</strong><br>
      107% of original = $107<br>
      Original = $107 &divide; 1.07 = <span class="highlight">$100</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>4. GST (Goods &amp; Services Tax)</h3>
    <p>Singapore&rsquo;s GST is currently <strong>9%</strong>.</p>
    <div class="formula">Price after GST = Price before GST &times; 1.09</div>
    <div class="formula">Price before GST = Price after GST &divide; 1.09</div>
    <div class="example">
      <strong>GST-exclusive price $200:</strong><br>
      GST = 9% of $200 = $18<br>
      Total = $200 + $18 = <span class="highlight">$218</span><br>
      Or: $200 &times; 1.09 = <span class="highlight">$218</span><br><br>
      <strong>GST-inclusive price $327:</strong><br>
      Price before GST = $327 &divide; 1.09 = <span class="highlight">$300</span><br>
      GST amount = $327 &minus; $300 = <span class="highlight">$27</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Profit and Loss</h3>
    <div class="formula">Profit = Selling Price (SP) &minus; Cost Price (CP)</div>
    <div class="formula">Loss = Cost Price (CP) &minus; Selling Price (SP)</div>
    <div class="formula">Profit% = (Profit &divide; CP) &times; 100</div>
    <div class="formula">Loss% = (Loss &divide; CP) &times; 100</div>
    <div class="example">
      <strong>CP = $80, SP = $100:</strong><br>
      Profit = $100 &minus; $80 = $20<br>
      Profit% = (20 &divide; 80) &times; 100 = <span class="highlight">25%</span><br><br>
      <strong>CP = $120, SP = $90:</strong><br>
      Loss = $120 &minus; $90 = $30<br>
      Loss% = (30 &divide; 120) &times; 100 = <span class="highlight">25%</span><br><br>
      <strong>Finding SP:</strong> CP = $60, profit% = 30%<br>
      SP = 60 &times; 1.3 = <span class="highlight">$78</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Discount</h3>
    <div class="formula">Discount = Marked Price (MP) &minus; Selling Price (SP)</div>
    <div class="formula">Discount% = (Discount &divide; MP) &times; 100</div>
    <div class="example">
      <strong>MP = $150, discount = 20%:</strong><br>
      SP = $150 &times; 0.8 = <span class="highlight">$120</span><br><br>
      <strong>Successive discounts (20% then 10%):</strong><br>
      After 20%: $100 &times; 0.8 = $80<br>
      After 10%: $80 &times; 0.9 = <span class="highlight">$72</span><br>
      This is NOT the same as 30%! ($100 &times; 0.7 = $70)<br>
      Effective single discount = 100% &minus; (80% &times; 90%) = 100% &minus; 72% = <span class="highlight">28%</span>
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Simple Interest</h3>
    <div class="formula">Simple Interest: I = PRT &divide; 100</div>
    <p>P = principal, R = rate (% per year), T = time (years)</p>
    <div class="formula">Total Amount = P + I</div>
    <div class="example">
      <strong>P = $5000, R = 4%, T = 3 years:</strong><br>
      I = 5000 &times; 4 &times; 3 &divide; 100 = <span class="highlight">$600</span><br>
      Amount = $5000 + $600 = <span class="highlight">$5600</span><br><br>
      <strong>P = $2000, R = 6%, T = 8 months:</strong><br>
      T = 8/12 = 2/3 year<br>
      I = 2000 &times; 6 &times; (2/3) &divide; 100 = <span class="highlight">$80</span>
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════
  // PERCENTAGE BASICS (Q1–20)
  // ═══════════════════════════════════════════
  { q:"Express 3/5 as a percentage.", opts:["60%","50%","65%","35%"], ans:0, explain:"3/5 = 3 ÷ 5 = 0.6 = 60%." },
  { q:"Convert 0.45 to a percentage.", opts:["4.5%","45%","450%","0.45%"], ans:1, explain:"0.45 × 100 = 45%." },
  { q:"Express 7/20 as a percentage.", opts:["70%","30%","35%","37%"], ans:2, explain:"7/20 = 7 ÷ 20 = 0.35 = 35%." },
  { q:"Convert 125% to a decimal.", opts:["0.125","12.5","0.0125","1.25"], ans:3, explain:"125% = 125 ÷ 100 = 1.25." },
  { q:"Find 25% of $160.", opts:["$40","$45","$35","$50"], ans:0, explain:"25% of $160 = 0.25 × 160 = $40." },
  { q:"Find 40% of 250 kg.", opts:["120 kg","100 kg","80 kg","150 kg"], ans:1, explain:"40% of 250 = 0.4 × 250 = 100 kg." },
  { q:"What is 12.5% of 400?", opts:["40","45","50","60"], ans:2, explain:"12.5% of 400 = 0.125 × 400 = 50." },
  { q:"Express 0.08 as a percentage.", opts:["80%","0.8%","0.08%","8%"], ans:3, explain:"0.08 × 100 = 8%." },
  { q:"Express 2/25 as a percentage.", opts:["8%","6%","4%","10%"], ans:0, explain:"2/25 = 2 ÷ 25 = 0.08 = 8%." },
  { q:"Convert 72% to a fraction in simplest form.", opts:["72/10","18/25","36/100","7/2"], ans:1, explain:"72% = 72/100 = 18/25." },
  { q:"Find 15% of $300.", opts:["$30","$35","$45","$50"], ans:2, explain:"15% of $300 = 0.15 × 300 = $45." },
  { q:"What percentage is 12 out of 48?", opts:["20%","30%","12%","25%"], ans:3, explain:"12/48 = 1/4 = 0.25 = 25%." },
  { q:"Find 5% of $840.", opts:["$42","$44","$40","$48"], ans:0, explain:"5% of $840 = 0.05 × 840 = $42." },
  { q:"What is 33⅓% of 90?", opts:["33","30","20","45"], ans:1, explain:"33⅓% = 1/3. 1/3 × 90 = 30." },
  { q:"Express 17/50 as a percentage.", opts:["17%","35%","34%","37%"], ans:2, explain:"17/50 = 0.34 = 34%." },
  { q:"What percentage is 9 out of 60?", opts:["12%","20%","10%","15%"], ans:3, explain:"9/60 = 0.15 = 15%." },
  { q:"Find 80% of 55.", opts:["44","42","46","48"], ans:0, explain:"80% of 55 = 0.8 × 55 = 44." },
  { q:"Convert 3/8 to a percentage.", opts:["38%","37.5%","36%","35%"], ans:1, explain:"3/8 = 0.375 = 37.5%." },
  { q:"What is 150% of 60?", opts:["75","80","90","100"], ans:2, explain:"150% of 60 = 1.5 × 60 = 90." },
  { q:"Express 0.006 as a percentage.", opts:["6%","0.06%","0.006%","0.6%"], ans:3, explain:"0.006 × 100 = 0.6%." },

  // ═══════════════════════════════════════════
  // PERCENTAGE INCREASE/DECREASE (Q21–40)
  // ═══════════════════════════════════════════
  { q:"A price increases from $40 to $50. What is the percentage increase?", opts:["25%","20%","15%","10%"], ans:0, explain:"Change = $10. % increase = (10/40) × 100 = 25%." },
  { q:"A shirt costing $60 is increased by 15%. What is the new price?", opts:["$66","$69","$72","$75"], ans:1, explain:"New price = 60 × 1.15 = $69." },
  { q:"A population decreased from 800 to 680. Find the percentage decrease.", opts:["20%","12%","15%","18%"], ans:2, explain:"Change = 120. % decrease = (120/800) × 100 = 15%." },
  { q:"$250 is decreased by 12%. What is the new amount?", opts:["$218","$225","$230","$220"], ans:3, explain:"New = 250 × 0.88 = $220." },
  { q:"A laptop costs $1200 after a 20% increase. What was the increase in dollars?", opts:["$200","$240","$180","$220"], ans:0, explain:"Original = $1200/1.2 = $1000. Increase = $1200 − $1000 = $200." },
  { q:"The price of rice increased from $2.50 to $3.00 per kg. Find the percentage increase.", opts:["25%","20%","15%","10%"], ans:1, explain:"Change = $0.50. % increase = (0.50/2.50) × 100 = 20%." },
  { q:"After a 30% decrease, a TV costs $350. What was the decrease in dollars?", opts:["$100","$105","$150","$120"], ans:2, explain:"Original = $350/0.7 = $500. Decrease = $500 − $350 = $150." },
  { q:"A car depreciates by 10% each year. If it cost $20 000, what is its value after 1 year?", opts:["$19 000","$17 000","$16 000","$18 000"], ans:3, explain:"Value = 20000 × 0.9 = $18 000." },
  { q:"A shop raises all prices by 5%. A book was $14. What is the new price?", opts:["$14.70","$14.50","$15.00","$14.05"], ans:0, explain:"New = 14 × 1.05 = $14.70." },
  { q:"Water usage dropped from 500 litres to 425 litres. Find the percentage decrease.", opts:["20%","15%","10%","25%"], ans:1, explain:"Change = 75. % decrease = (75/500) × 100 = 15%." },
  { q:"A salary of $3000 is increased by 8%. What is the new salary?", opts:["$3080","$3180","$3240","$3300"], ans:2, explain:"New salary = 3000 × 1.08 = $3240." },
  { q:"The number of students increased from 120 to 156. What is the percentage increase?", opts:["25%","20%","36%","30%"], ans:3, explain:"Change = 36. % increase = (36/120) × 100 = 30%." },
  { q:"A dress is reduced by 35%. It originally cost $80. What is the sale price?", opts:["$52","$56","$48","$45"], ans:0, explain:"Sale price = 80 × 0.65 = $52." },
  { q:"A company's revenue went from $50 000 to $42 500. Find the percentage decrease.", opts:["20%","15%","10%","25%"], ans:1, explain:"Change = $7500. % decrease = (7500/50000) × 100 = 15%." },
  { q:"Increase $450 by 40%.", opts:["$540","$600","$630","$580"], ans:2, explain:"450 × 1.4 = $630." },
  { q:"A 50 kg bag of rice now weighs 44 kg after drying. Find the percentage decrease in weight.", opts:["10%","14%","6%","12%"], ans:3, explain:"Change = 6. % decrease = (6/50) × 100 = 12%." },
  { q:"Decrease $600 by 45%.", opts:["$330","$270","$350","$360"], ans:0, explain:"600 × 0.55 = $330." },
  { q:"A stock price went from $8 to $10. Find the percentage increase.", opts:["20%","25%","30%","15%"], ans:1, explain:"Change = $2. % increase = (2/8) × 100 = 25%." },
  { q:"The temperature dropped from 40°C to 34°C. Find the percentage decrease.", opts:["20%","12%","15%","18%"], ans:2, explain:"Change = 6. % decrease = (6/40) × 100 = 15%." },
  { q:"A town's population increased by 6% from 25 000. What is the new population?", opts:["25 600","26 000","25 150","26 500"], ans:3, explain:"25000 × 1.06 = 26 500." },

  // ═══════════════════════════════════════════
  // REVERSE PERCENTAGE (Q41–60)
  // ═══════════════════════════════════════════
  { q:"After a 20% increase, a price is $60. What was the original price?", opts:["$50","$48","$52","$55"], ans:0, explain:"Original = $60 ÷ 1.2 = $50." },
  { q:"After a 25% discount, the selling price is $45. Find the original price.", opts:["$55","$60","$56.25","$65"], ans:1, explain:"Original = $45 ÷ 0.75 = $60." },
  { q:"A bag costs $66 after a 10% increase. What was the original price?", opts:["$56","$58","$60","$62"], ans:2, explain:"Original = $66 ÷ 1.1 = $60." },
  { q:"After a 15% decrease, a quantity is 170. Find the original quantity.", opts:["195.5","190","195","200"], ans:3, explain:"Original = 170 ÷ 0.85 = 200." },
  { q:"After adding 9% GST, the bill is $327. Find the price before GST.", opts:["$300","$310","$295","$320"], ans:0, explain:"Price before GST = $327 ÷ 1.09 = $300." },
  { q:"A shop offers 30% off. The sale price of a jacket is $105. Find the original price.", opts:["$135","$150","$140","$145"], ans:1, explain:"Original = $105 ÷ 0.7 = $150." },
  { q:"After a 40% increase, the value is $280. Find the original value.", opts:["$168","$180","$200","$210"], ans:2, explain:"Original = $280 ÷ 1.4 = $200." },
  { q:"After a 5% decrease, the temperature is 38°C. What was the original temperature?", opts:["39°C","39.5°C","41°C","40°C"], ans:3, explain:"Original = 38 ÷ 0.95 = 40°C." },
  { q:"A membership increased by 12% to 560 members. How many members were there originally?", opts:["500","510","520","480"], ans:0, explain:"Original = 560 ÷ 1.12 = 500." },
  { q:"After a 35% discount, a sofa costs $390. What was the marked price?", opts:["$550","$600","$580","$650"], ans:1, explain:"Original = $390 ÷ 0.65 = $600." },
  { q:"A sum of money increased by 8% to $540. Find the original sum.", opts:["$480","$490","$500","$510"], ans:2, explain:"Original = $540 ÷ 1.08 = $500." },
  { q:"After a 50% increase, a price is $225. Find the original price.", opts:["$112.50","$130","$140","$150"], ans:3, explain:"Original = $225 ÷ 1.5 = $150." },
  { q:"After a 16% decrease, a weight is 210 g. What was the original weight?", opts:["250 g","240 g","245 g","255 g"], ans:0, explain:"Original = 210 ÷ 0.84 = 250 g." },
  { q:"After a 45% discount, a computer costs $1100. Find the original price.", opts:["$1800","$2000","$1900","$2100"], ans:1, explain:"Original = $1100 ÷ 0.55 = $2000." },
  { q:"After a 4% increase, rent is $1560. What was the rent before the increase?", opts:["$1480","$1490","$1500","$1510"], ans:2, explain:"Original = $1560 ÷ 1.04 = $1500." },
  { q:"A price after 9% GST is $1090. Find the price before GST.", opts:["$990","$995","$980","$1000"], ans:3, explain:"Price before GST = $1090 ÷ 1.09 = $1000." },
  { q:"After an 18% decrease, a length is 164 cm. Find the original length.", opts:["200 cm","190 cm","195 cm","185 cm"], ans:0, explain:"Original = 164 ÷ 0.82 = 200 cm." },
  { q:"After a 75% increase, a quantity is 350. Find the original quantity.", opts:["180","200","210","190"], ans:1, explain:"Original = 350 ÷ 1.75 = 200." },
  { q:"After a 22% discount, a camera costs $624. Find the original price.", opts:["$780","$790","$800","$810"], ans:2, explain:"Original = $624 ÷ 0.78 = $800." },
  { q:"After a 60% increase, a bill is $400. What was the original bill?", opts:["$200","$240","$230","$250"], ans:3, explain:"Original = $400 ÷ 1.6 = $250." },

  // ═══════════════════════════════════════════
  // GST CALCULATIONS (Q61–80)
  // ═══════════════════════════════════════════
  { q:"A meal costs $50 before GST (9%). What is the price after GST?", opts:["$54.50","$55.00","$54.00","$59.00"], ans:0, explain:"50 × 1.09 = $54.50." },
  { q:"Find the GST amount on a $200 item (GST = 9%).", opts:["$20","$18","$16","$22"], ans:1, explain:"9% of $200 = 0.09 × 200 = $18." },
  { q:"A laptop costs $1090 inclusive of 9% GST. Find the price before GST.", opts:["$990","$995","$1000","$1010"], ans:2, explain:"$1090 ÷ 1.09 = $1000." },
  { q:"A bill before GST is $80. What is the GST amount at 9%?", opts:["$6.40","$8.00","$7.00","$7.20"], ans:3, explain:"9% of $80 = 0.09 × 80 = $7.20." },
  { q:"An item costs $109 after 9% GST. How much was the GST?", opts:["$9","$10","$10.90","$9.90"], ans:0, explain:"Before GST = $109 ÷ 1.09 = $100. GST = $109 − $100 = $9." },
  { q:"A phone costs $654 inclusive of 9% GST. Find the price before GST.", opts:["$590","$600","$610","$620"], ans:1, explain:"$654 ÷ 1.09 = $600." },
  { q:"Restaurant bill before GST is $120. What is the total bill after 9% GST?", opts:["$128.80","$129.00","$130.80","$132.00"], ans:2, explain:"120 × 1.09 = $130.80." },
  { q:"A TV costs $763 inclusive of 9% GST. What is the GST amount?", opts:["$63.70","$60","$62","$63"], ans:3, explain:"Before GST = $763 ÷ 1.09 = $700. GST = $763 − $700 = $63." },
  { q:"Before GST, a watch costs $450. What is the price inclusive of 9% GST?", opts:["$490.50","$495","$500","$504.50"], ans:0, explain:"450 × 1.09 = $490.50." },
  { q:"A haircut costs $43.60 inclusive of 9% GST. Find the price before GST.", opts:["$38","$40","$42","$39"], ans:1, explain:"$43.60 ÷ 1.09 = $40." },
  { q:"A furniture set costs $3000 before GST. How much GST (9%) is charged?", opts:["$250","$260","$270","$280"], ans:2, explain:"9% of $3000 = 0.09 × 3000 = $270." },
  { q:"A bill inclusive of 9% GST is $218. Find the price before GST.", opts:["$190","$195","$198","$200"], ans:3, explain:"$218 ÷ 1.09 = $200." },
  { q:"A taxi fare before GST is $15. What is the total fare with 9% GST?", opts:["$16.35","$16.50","$15.90","$16.00"], ans:0, explain:"15 × 1.09 = $16.35." },
  { q:"A gym membership costs $872 per year inclusive of 9% GST. What is the monthly cost before GST?", opts:["$60","$66.67","$70","$72"], ans:1, explain:"Before GST = $872 ÷ 1.09 = $800/year. Monthly = $800 ÷ 12 = $66.67." },
  { q:"Total bill inclusive of 9% GST is $545. What is the GST amount?", opts:["$40","$42","$45","$50"], ans:2, explain:"Before GST = $545 ÷ 1.09 = $500. GST = $545 − $500 = $45." },
  { q:"A dress costs $150 before GST. Service charge is 10% and GST is 9%. What is the total bill if GST applies on the subtotal including service charge?", opts:["$172.50","$175.00","$176.50","$179.85"], ans:3, explain:"Subtotal = $150 × 1.10 = $165. With GST: $165 × 1.09 = $179.85." },
  { q:"A computer costs $1635 inclusive of 9% GST. Find the price before GST.", opts:["$1500","$1510","$1520","$1490"], ans:0, explain:"$1635 ÷ 1.09 = $1500." },
  { q:"If GST increases from 7% to 9%, how much more GST is paid on a $500 item?", opts:["$8","$10","$12","$15"], ans:1, explain:"Old GST = 0.07 × 500 = $35. New GST = 0.09 × 500 = $45. Difference = $10." },
  { q:"A repair bill is $163.50 inclusive of 9% GST. What is the bill before GST?", opts:["$140","$145","$150","$155"], ans:2, explain:"$163.50 ÷ 1.09 = $150." },
  { q:"A buffet charges $40 per person before 10% service charge and 9% GST (on subtotal with service). Find total per person.", opts:["$46.80","$47.00","$47.20","$47.96"], ans:3, explain:"With service: $40 × 1.10 = $44. With GST: $44 × 1.09 = $47.96." },

  // ═══════════════════════════════════════════
  // PROFIT AND LOSS (Q81–100)
  // ═══════════════════════════════════════════
  { q:"CP = $60, SP = $78. Find the profit.", opts:["$18","$20","$16","$15"], ans:0, explain:"Profit = SP − CP = $78 − $60 = $18." },
  { q:"CP = $200, SP = $250. Find the profit percentage.", opts:["20%","25%","30%","50%"], ans:1, explain:"Profit = $50. Profit% = (50/200) × 100 = 25%." },
  { q:"CP = $150, SP = $120. Find the loss.", opts:["$20","$25","$30","$35"], ans:2, explain:"Loss = CP − SP = $150 − $120 = $30." },
  { q:"CP = $80, SP = $60. Find the loss percentage.", opts:["20%","30%","15%","25%"], ans:3, explain:"Loss = $20. Loss% = (20/80) × 100 = 25%." },
  { q:"A trader buys goods for $500 and sells them at a profit of 20%. Find the selling price.", opts:["$600","$620","$580","$550"], ans:0, explain:"SP = 500 × 1.2 = $600." },
  { q:"A shopkeeper buys a bag for $40 and sells it for $52. Find the profit percentage.", opts:["20%","30%","25%","35%"], ans:1, explain:"Profit = $12. Profit% = (12/40) × 100 = 30%." },
  { q:"A phone was bought for $800 and sold at a loss of 15%. Find the selling price.", opts:["$700","$720","$680","$660"], ans:2, explain:"SP = 800 × 0.85 = $680." },
  { q:"CP = $120, SP = $90. Find the loss percentage.", opts:["20%","30%","15%","25%"], ans:3, explain:"Loss = $30. Loss% = (30/120) × 100 = 25%." },
  { q:"A bicycle was bought for $250 and sold at a profit of 12%. What is the profit in dollars?", opts:["$30","$25","$35","$28"], ans:0, explain:"Profit = 12% of $250 = 0.12 × 250 = $30." },
  { q:"SP = $462, profit = $42. Find the cost price.", opts:["$400","$420","$440","$450"], ans:1, explain:"CP = SP − Profit = $462 − $42 = $420." },
  { q:"A merchant sells an item for $360 at a loss of 10%. Find the cost price.", opts:["$380","$390","$400","$410"], ans:2, explain:"SP = CP × 0.9. CP = $360 ÷ 0.9 = $400." },
  { q:"A trader marks up goods by 50% on CP of $200. What is the marked price?", opts:["$250","$280","$290","$300"], ans:3, explain:"MP = 200 × 1.5 = $300." },
  { q:"CP = $75, profit% = 40%. Find the selling price.", opts:["$105","$100","$110","$115"], ans:0, explain:"SP = 75 × 1.4 = $105." },
  { q:"A book costing $18 is sold for $21.60. Find the profit percentage.", opts:["15%","20%","18%","25%"], ans:1, explain:"Profit = $3.60. Profit% = (3.60/18) × 100 = 20%." },
  { q:"A car is bought for $40 000 and sold for $34 000. What is the loss percentage?", opts:["10%","12%","15%","20%"], ans:2, explain:"Loss = $6000. Loss% = (6000/40000) × 100 = 15%." },
  { q:"An item is sold at a profit of 35% for $540. Find the cost price.", opts:["$380","$390","$395","$400"], ans:3, explain:"CP = $540 ÷ 1.35 = $400." },
  { q:"CP = $300, loss% = 8%. Find the selling price.", opts:["$276","$280","$272","$284"], ans:0, explain:"SP = 300 × 0.92 = $276." },
  { q:"A watch is bought for $160 and sold for $200. Find the profit percentage.", opts:["20%","25%","30%","40%"], ans:1, explain:"Profit = $40. Profit% = (40/160) × 100 = 25%." },
  { q:"A seller buys 10 pens for $50 and sells each for $4. Find the total loss.", opts:["$5","$8","$10","$12"], ans:2, explain:"Total SP = 10 × $4 = $40. Loss = $50 − $40 = $10." },
  { q:"An article with CP $240 is sold at a profit of 25%. What is the selling price?", opts:["$280","$290","$295","$300"], ans:3, explain:"SP = 240 × 1.25 = $300." },

  // ═══════════════════════════════════════════
  // DISCOUNT (Q101–120)
  // ═══════════════════════════════════════════
  { q:"A shirt has a marked price of $50 and is sold at a 20% discount. Find the selling price.", opts:["$40","$42","$45","$38"], ans:0, explain:"SP = 50 × 0.8 = $40." },
  { q:"MP = $120, SP = $96. Find the discount percentage.", opts:["15%","20%","25%","30%"], ans:1, explain:"Discount = $24. Discount% = (24/120) × 100 = 20%." },
  { q:"A toy with MP $80 is sold after a 15% discount. Find the discount in dollars.", opts:["$8","$10","$12","$15"], ans:2, explain:"Discount = 15% of $80 = 0.15 × 80 = $12." },
  { q:"A bag has MP $200. After discount, SP = $150. Find the discount percentage.", opts:["20%","30%","15%","25%"], ans:3, explain:"Discount = $50. Discount% = (50/200) × 100 = 25%." },
  { q:"Successive discounts of 20% and 10% on MP $500. Find the final selling price.", opts:["$360","$350","$370","$380"], ans:0, explain:"After 20%: 500 × 0.8 = $400. After 10%: 400 × 0.9 = $360." },
  { q:"MP = $300, discount = 25%. Find the selling price.", opts:["$200","$225","$220","$230"], ans:1, explain:"SP = 300 × 0.75 = $225." },
  { q:"A dress has successive discounts of 10% and 20%. What is the single equivalent discount?", opts:["30%","25%","28%","32%"], ans:2, explain:"Effective = 1 − (0.9 × 0.8) = 1 − 0.72 = 0.28 = 28%." },
  { q:"MP = $160. Successive discounts of 25% and 20%. Find the final SP.", opts:["$88","$90","$92","$96"], ans:3, explain:"After 25%: 160 × 0.75 = $120. After 20%: 120 × 0.8 = $96." },
  { q:"A store offers \"Buy 1 Get 1 at 50% off\" on $40 shirts. What is the effective discount for 2 shirts?", opts:["25%","30%","20%","50%"], ans:0, explain:"Full price for 2 = $80. You pay $40 + $20 = $60. Discount = $20/$80 = 25%." },
  { q:"Successive discounts of 30% and 10% on MP $200. Find the selling price.", opts:["$120","$126","$130","$140"], ans:1, explain:"After 30%: 200 × 0.7 = $140. After 10%: 140 × 0.9 = $126." },
  { q:"A laptop MP is $1500. A 10% discount followed by a 5% discount is applied. What is the final price?", opts:["$1260","$1270","$1282.50","$1290"], ans:2, explain:"After 10%: 1500 × 0.9 = $1350. After 5%: 1350 × 0.95 = $1282.50." },
  { q:"Which gives a lower final price on a $400 item: a single 30% discount, or successive discounts of 20% then 10%?", opts:["Successive discounts","Same price","Cannot tell","Single 30% discount"], ans:3, explain:"Single 30%: 400 × 0.7 = $280. Successive: 400 × 0.8 × 0.9 = $288. Single 30% gives the lower price ($280 < $288)." },
  { q:"MP = $90, discount% = 40%. Find the selling price.", opts:["$54","$56","$50","$60"], ans:0, explain:"SP = 90 × 0.6 = $54." },
  { q:"SP = $72 after a discount of $18. Find the discount percentage.", opts:["15%","20%","25%","30%"], ans:1, explain:"MP = $72 + $18 = $90. Discount% = (18/90) × 100 = 20%." },
  { q:"Successive discounts of 15% and 10% on $600. Find the final price.", opts:["$450","$460","$459","$465"], ans:2, explain:"After 15%: 600 × 0.85 = $510. After 10%: 510 × 0.9 = $459." },
  { q:"A store gives 20% off for members. An item is marked at $250. What does a member pay?", opts:["$210","$190","$195","$200"], ans:3, explain:"SP = 250 × 0.8 = $200." },
  { q:"Successive discounts of 10%, 10%, and 10% on $1000. Find the final price.", opts:["$729","$700","$730","$750"], ans:0, explain:"1000 × 0.9 × 0.9 × 0.9 = 1000 × 0.729 = $729." },
  { q:"An item MP $480 is discounted by 35%. Find the discount amount.", opts:["$158","$168","$178","$148"], ans:1, explain:"Discount = 35% of $480 = 0.35 × 480 = $168." },
  { q:"After successive discounts of 25% and 20%, the final price is $240. Find the marked price.", opts:["$380","$390","$400","$420"], ans:2, explain:"MP × 0.75 × 0.8 = $240. MP × 0.6 = $240. MP = $240 ÷ 0.6 = $400." },
  { q:"A 50% discount followed by a 50% discount on $800 gives a final price of:", opts:["$0","$400","$100","$200"], ans:3, explain:"After first 50%: 800 × 0.5 = $400. After second 50%: 400 × 0.5 = $200. Not 100% off!" },

  // ═══════════════════════════════════════════
  // SIMPLE INTEREST (Q121–140)
  // ═══════════════════════════════════════════
  { q:"Find the simple interest on $2000 at 5% per annum for 3 years.", opts:["$300","$250","$350","$200"], ans:0, explain:"I = PRT/100 = 2000 × 5 × 3/100 = $300." },
  { q:"P = $5000, R = 4%, T = 2 years. Find the total amount.", opts:["$5200","$5400","$5600","$5800"], ans:1, explain:"I = 5000 × 4 × 2/100 = $400. Amount = $5000 + $400 = $5400." },
  { q:"Find the simple interest on $1200 at 6% for 5 years.", opts:["$300","$320","$360","$400"], ans:2, explain:"I = 1200 × 6 × 5/100 = $360." },
  { q:"P = $800, R = 3%, T = 4 years. Find the simple interest.", opts:["$72","$84","$108","$96"], ans:3, explain:"I = 800 × 3 × 4/100 = $96." },
  { q:"P = $10 000, R = 2.5%, T = 6 years. Find the total amount.", opts:["$11 500","$11 000","$12 000","$12 500"], ans:0, explain:"I = 10000 × 2.5 × 6/100 = $1500. Amount = $10000 + $1500 = $11 500." },
  { q:"Find the simple interest on $3000 at 8% for 9 months.", opts:["$200","$180","$240","$160"], ans:1, explain:"T = 9/12 = 0.75 years. I = 3000 × 8 × 0.75/100 = $180." },
  { q:"P = $4000, I = $480 over 2 years. Find the rate of interest.", opts:["4%","5%","6%","8%"], ans:2, explain:"R = (I × 100)/(P × T) = (480 × 100)/(4000 × 2) = 6%." },
  { q:"$6000 is invested at 5% simple interest. How long to earn $900 interest?", opts:["2 years","2.5 years","4 years","3 years"], ans:3, explain:"T = (I × 100)/(P × R) = (900 × 100)/(6000 × 5) = 3 years." },
  { q:"P = $1500, R = 4%, T = 6 months. Find the simple interest.", opts:["$30","$36","$45","$60"], ans:0, explain:"T = 0.5 years. I = 1500 × 4 × 0.5/100 = $30." },
  { q:"An investment of $2500 earned $375 interest over 3 years. Find the annual rate.", opts:["4%","5%","6%","3%"], ans:1, explain:"R = (375 × 100)/(2500 × 3) = 5%." },
  { q:"P = $7000, R = 3%, T = 5 years. Find the total amount.", opts:["$7700","$7900","$8050","$8100"], ans:2, explain:"I = 7000 × 3 × 5/100 = $1050. Amount = $7000 + $1050 = $8050." },
  { q:"Find the simple interest on $900 at 10% for 8 months.", opts:["$50","$72","$80","$60"], ans:3, explain:"T = 8/12 = 2/3. I = 900 × 10 × (2/3)/100 = $60." },
  { q:"P = $12 000, R = 3.5%, T = 2 years. Find the total amount.", opts:["$12 840","$12 800","$12 700","$12 900"], ans:0, explain:"I = 12000 × 3.5 × 2/100 = $840. Amount = $12000 + $840 = $12 840." },
  { q:"$4000 is deposited at 6% for 15 months. Find the interest.", opts:["$250","$300","$350","$400"], ans:1, explain:"T = 15/12 = 1.25 years. I = 4000 × 6 × 1.25/100 = $300." },
  { q:"A loan of $8000 at 7% simple interest for 2 years. Find the total repayment.", opts:["$9000","$9100","$9120","$9200"], ans:2, explain:"I = 8000 × 7 × 2/100 = $1120. Total = $8000 + $1120 = $9120." },
  { q:"P = $500, R = 12%, T = 6 months. Find the simple interest.", opts:["$20","$25","$35","$30"], ans:3, explain:"T = 0.5 years. I = 500 × 12 × 0.5/100 = $30." },
  { q:"$15 000 earns $2250 simple interest in 3 years. Find the rate.", opts:["5%","4%","6%","3%"], ans:0, explain:"R = (2250 × 100)/(15000 × 3) = 5%." },
  { q:"How long will it take $2000 to earn $240 interest at 4% per annum?", opts:["2 years","3 years","4 years","5 years"], ans:1, explain:"T = (240 × 100)/(2000 × 4) = 3 years." },
  { q:"P = $3600, R = 5%, T = 10 months. Find the simple interest.", opts:["$120","$140","$150","$180"], ans:2, explain:"T = 10/12 = 5/6. I = 3600 × 5 × (5/6)/100 = $150." },
  { q:"The total amount after 4 years at 5% simple interest is $6000. Find the principal.", opts:["$4800","$4900","$4500","$5000"], ans:3, explain:"Amount = P(1 + RT/100). 6000 = P(1 + 5×4/100) = 1.2P. P = $6000/1.2 = $5000." },

  // ═══════════════════════════════════════════
  // MIXED WORD PROBLEMS (Q141–150)
  // ═══════════════════════════════════════════
  { q:"A shopkeeper buys an item for $500, marks it up by 40%, then gives a 10% discount. Find the selling price.", opts:["$630","$650","$600","$680"], ans:0, explain:"MP = 500 × 1.4 = $700. SP after 10% discount = 700 × 0.9 = $630." },
  { q:"A salary of $2500 is first increased by 10%, then the new salary is decreased by 10%. What is the final salary?", opts:["$2500","$2475","$2450","$2525"], ans:1, explain:"After +10%: 2500 × 1.1 = $2750. After −10%: 2750 × 0.9 = $2475. Not the same as original!" },
  { q:"A coat with CP $200 is marked up by 50% and then given a 20% discount. Find the profit percentage.", opts:["10%","15%","20%","25%"], ans:2, explain:"MP = 200 × 1.5 = $300. SP = 300 × 0.8 = $240. Profit = $40. Profit% = (40/200) × 100 = 20%." },
  { q:"A price increased by 20% then decreased by 20%. The final price is what percentage of the original?", opts:["100%","104%","98%","96%"], ans:3, explain:"Let original = 100. After +20%: 120. After −20%: 120 × 0.8 = 96. Final is 96% of original." },
  { q:"Mei Ling saves 20% of her $3000 salary. She spends 15% of her savings on a book (inclusive of 9% GST). Find the book price before GST.", opts:["$82.57","$85","$88","$90"], ans:0, explain:"Savings = 20% of $3000 = $600. Book cost = 15% of $600 = $90 (inclusive of GST). Before GST = $90 ÷ 1.09 ≈ $82.57." },
  { q:"A trader bought 100 oranges at $0.50 each. 20 were spoilt. He sold the rest at $0.80 each. Find the profit percentage.", opts:["20%","28%","30%","25%"], ans:1, explain:"CP = 100 × $0.50 = $50. SP = 80 × $0.80 = $64. Profit = $14. Profit% = (14/50) × 100 = 28%." },
  { q:"$6000 is deposited at 5% simple interest for 2 years. The amount is used to buy a laptop at 10% discount. What is the laptop's marked price?", opts:["$7000","$7200","$7333.33","$7400"], ans:2, explain:"I = 6000 × 5 × 2/100 = $600. Amount = $6600. If SP = $6600 and discount = 10%, MP × 0.9 = $6600. MP = $6600/0.9 ≈ $7333.33." },
  { q:"A watch is sold for $540 after successive discounts of 10% and 25% on the marked price. Find the marked price.", opts:["$720","$750","$780","$800"], ans:3, explain:"MP × 0.9 × 0.75 = $540. MP × 0.675 = $540. MP = $540 ÷ 0.675 = $800." },
  { q:"A shopkeeper bought an article for $400. He spent $50 on repairs. He then sold it at a profit of 20% on overall cost. Find the selling price.", opts:["$540","$530","$520","$480"], ans:0, explain:"Total CP = $400 + $50 = $450. SP = 450 × 1.2 = $540." },
  { q:"A principal of $4000 amounts to $4800 in 4 years at simple interest. A second investment at 6% for 3 years on the same principal earns how much interest?", opts:["$600","$720","$800","$840"], ans:1, explain:"First investment: I = $800, so R = (800 × 100)/(4000 × 4) = 5%. Second investment: I = 4000 × 6 × 3/100 = $720." }
]
