export const meta = {
  id: 9, sem: 2,
  title: 'Direct & Reported Speech',
  desc: 'Converting direct speech to reported speech with correct tense and pronoun changes'
}


export const notes = `
  <h2>Direct &amp; Reported Speech</h2>
  <p class="topic-desc">Direct speech · Reported speech · Tense backshift · Pronoun &amp; time changes · Reporting questions · Reporting commands</p>

  <div class="notes-card">
    <h3>1. Direct vs Reported Speech</h3>
    <p><strong>Direct speech</strong> uses the speaker's exact words, enclosed in quotation marks.</p>
    <p><strong>Reported (indirect) speech</strong> paraphrases what was said, without quotation marks.</p>
    <div class="example">
      <strong>Direct:</strong> She said, "I am hungry."<br>
      <strong>Reported:</strong> She said that she was hungry.<br><br>
      <strong>Common reporting verbs:</strong> said, told, asked, explained, suggested, ordered
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Tense Changes (Backshift)</h3>
    <p>When the reporting verb is in the past tense, the tense in the reported clause shifts back.</p>
    <div class="example">
      <table class="notes-table" style="width:100%;border-collapse:collapse;">
        <tr><th style="text-align:left;padding:4px 8px;">Direct Speech</th><th style="text-align:left;padding:4px 8px;">Reported Speech</th></tr>
        <tr><td style="padding:4px 8px;">present simple (eat)</td><td style="padding:4px 8px;">past simple (ate)</td></tr>
        <tr><td style="padding:4px 8px;">present continuous (is eating)</td><td style="padding:4px 8px;">past continuous (was eating)</td></tr>
        <tr><td style="padding:4px 8px;">present perfect (has eaten)</td><td style="padding:4px 8px;">past perfect (had eaten)</td></tr>
        <tr><td style="padding:4px 8px;">past simple (ate)</td><td style="padding:4px 8px;">past perfect (had eaten)</td></tr>
        <tr><td style="padding:4px 8px;">will</td><td style="padding:4px 8px;">would</td></tr>
        <tr><td style="padding:4px 8px;">can</td><td style="padding:4px 8px;">could</td></tr>
        <tr><td style="padding:4px 8px;">may</td><td style="padding:4px 8px;">might</td></tr>
        <tr><td style="padding:4px 8px;">must</td><td style="padding:4px 8px;">had to</td></tr>
      </table>
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Pronoun Changes</h3>
    <p>Pronouns change to match the perspective of the reporter.</p>
    <div class="example">
      <strong>I</strong> → he / she<br>
      <strong>we</strong> → they<br>
      <strong>my</strong> → his / her<br>
      <strong>our</strong> → their<br>
      <strong>you</strong> → I / he / she / they (depends on context)<br>
      <strong>me</strong> → him / her<br><br>
      <em>Direct:</em> "I will bring <strong>my</strong> book."<br>
      <em>Reported:</em> He said he would bring <strong>his</strong> book.
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Time &amp; Place Changes</h3>
    <p>Time and place references shift when reported at a different time or location.</p>
    <div class="example">
      <strong>today</strong> → that day<br>
      <strong>tomorrow</strong> → the next day / the following day<br>
      <strong>yesterday</strong> → the day before / the previous day<br>
      <strong>now</strong> → then<br>
      <strong>here</strong> → there<br>
      <strong>this</strong> → that<br>
      <strong>these</strong> → those<br>
      <strong>ago</strong> → before<br>
      <strong>last week</strong> → the week before<br>
      <strong>next week</strong> → the following week
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Reporting Questions</h3>
    <p>Questions change to statement word order in reported speech.</p>
    <div class="example">
      <strong>Yes/No questions:</strong> Use <em>asked if</em> or <em>asked whether</em> + statement order (no question mark).<br>
      "Are you coming?" → She asked if I was coming.<br><br>
      <strong>Wh-questions:</strong> Use <em>asked</em> + wh-word + statement order.<br>
      "Where do you live?" → He asked where I lived.<br><br>
      <strong>Important:</strong> Remove "do/does/did" inversion in reported questions.<br>
      "What did she say?" → He asked what she had said.
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Reporting Commands &amp; Requests</h3>
    <p>Commands and requests use the infinitive form in reported speech.</p>
    <div class="example">
      <strong>Positive command:</strong> told / ordered + object + to + infinitive<br>
      "Sit down." → The teacher told them to sit down.<br><br>
      <strong>Negative command:</strong> told + object + not to + infinitive<br>
      "Don't run." → She told them not to run.<br><br>
      <strong>Request:</strong> asked / requested + object + to + infinitive<br>
      "Please help me." → He asked me to help him.
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Common Errors</h3>
    <p>Watch out for these frequent mistakes in reported speech.</p>
    <div class="example">
      <strong>✗</strong> Forgetting tense backshift: He said he <em>is</em> tired. → <strong>✓</strong> He said he <em>was</em> tired.<br>
      <strong>✗</strong> Keeping question word order: He asked where <em>was she</em>. → <strong>✓</strong> He asked where <em>she was</em>.<br>
      <strong>✗</strong> Keeping quotation marks in reported speech.<br>
      <strong>✗</strong> "say me" → <strong>✓</strong> say <em>to</em> me / tell me
    </div>
  </div>
`

export const questions = [
  // ═══════════════════════════════════════════════
  // DIRECT vs REPORTED SPEECH (Q1–Q25)
  // ═══════════════════════════════════════════════
  { q: 'Which sentence is in direct speech?', opts: ['Tom said, "I love football."', 'He told me he would come.', 'She said that she was tired.', 'They explained that it was late.'], ans: 0, explain: 'Direct speech uses the speaker\'s exact words in quotation marks.' },
  { q: 'Which sentence is in reported speech?', opts: ['"I am leaving," she said.', 'He said that he was leaving.', '"We will win!" they shouted.', '"Please sit down," the teacher said.'], ans: 1, explain: 'Reported speech paraphrases without quotation marks: "He said that he was leaving."' },
  { q: 'Identify the direct speech sentence.', opts: ['She mentioned she was ill.', 'He explained that he had finished.', 'Mum said, "Dinner is ready."', 'They told us to hurry.'], ans: 2, explain: 'Direct speech quotes exact words with quotation marks.' },
  { q: 'Which of these is reported speech?', opts: ['"Where is my bag?" she asked.', '"I can swim," said Ali.', '"Come here!" he shouted.', 'She asked where her bag was.'], ans: 3, explain: 'Reported speech restates the question without quotation marks using statement order.' },
  { q: '"I enjoy reading," said Priya. What type of speech is this?', opts: ['Direct speech', 'Indirect speech', 'Reported speech', 'Passive speech'], ans: 0, explain: 'The sentence uses quotation marks with the speaker\'s exact words — this is direct speech.' },
  { q: 'She said that she had already eaten. What type of speech is this?', opts: ['Direct speech', 'Reported speech', 'A command', 'A question'], ans: 1, explain: 'No quotation marks and the words are paraphrased — this is reported speech.' },
  { q: 'Which is a feature of direct speech?', opts: ['No quotation marks', 'The word "that" after the reporting verb', 'Quotation marks around the speaker\'s words', 'Statement word order for questions'], ans: 2, explain: 'Direct speech always encloses the speaker\'s exact words in quotation marks.' },
  { q: 'Which is a feature of reported speech?', opts: ['Quotation marks around the words', 'Exact words of the speaker', 'A comma before the closing quotation mark', 'Often uses "that" after the reporting verb'], ans: 3, explain: 'Reported speech often introduces the clause with "that" and has no quotation marks.' },
  { q: '"Don\'t touch that!" she shouted. This is an example of:', opts: ['Direct speech', 'A reported command', 'Reported speech', 'Indirect question'], ans: 0, explain: 'Quotation marks and exclamation mark with exact words indicate direct speech.' },
  { q: 'He told me not to be late. This is an example of:', opts: ['Direct speech', 'A reported command', 'Direct question', 'A direct command'], ans: 1, explain: 'The structure "told + object + not to" is a reported command.' },
  { q: 'Which sentence uses reported speech correctly?', opts: ['"She is happy," he said.', 'He said, "She is happy."', 'He said that she was happy.', 'He said "that she was happy."'], ans: 2, explain: 'Reported speech removes quotation marks and backshifts tense: is → was.' },
  { q: '"Can you help me?" she asked. This is:', opts: ['A reported question', 'Indirect speech', 'A reported command', 'Direct speech'], ans: 3, explain: 'The speaker\'s exact words are in quotation marks — this is direct speech.' },
  { q: 'The teacher explained that the test would be on Friday. This is:', opts: ['Reported speech', 'A direct command', 'Direct speech', 'A direct question'], ans: 0, explain: 'No quotation marks and tense backshift (would) indicate reported speech.' },
  { q: '"We are going to the zoo," they announced. Identify the speech type.', opts: ['Reported speech', 'Direct speech', 'Passive voice', 'Indirect command'], ans: 1, explain: 'Quotation marks with exact words show this is direct speech.' },
  { q: 'She mentioned that she had visited Japan before. This is:', opts: ['Direct speech', 'A direct question', 'Reported speech', 'A command'], ans: 2, explain: 'No quotation marks and "had visited" (backshifted) show reported speech.' },
  { q: 'Which reporting verb requires an object after it?', opts: ['said', 'explained', 'mentioned', 'told'], ans: 3, explain: '"Told" must be followed by an object (told me/him/her). "Said" does not require one.' },
  { q: '"I will call you later," promised David. What type of speech is this?', opts: ['Direct speech', 'Reported promise', 'Indirect speech', 'Reported command'], ans: 0, explain: 'Quotation marks enclose David\'s exact words — this is direct speech.' },
  { q: 'She asked whether I could lend her a pen. This is:', opts: ['Direct speech', 'A reported question', 'A direct question', 'A direct command'], ans: 1, explain: '"Asked whether" with statement order and no quotation marks is a reported question.' },
  { q: 'Which sentence is an example of direct speech?', opts: ['He said that he liked ice cream.', 'She told me to wait.', '"I like ice cream," he said.', 'They asked if I was free.'], ans: 2, explain: 'The words "I like ice cream" are in quotation marks — direct speech.' },
  { q: 'Which sentence is an example of reported speech?', opts: ['"Pass the salt," she requested.', '"I will be late," he said.', '"Are you coming?" she asked.', 'He mentioned that he would be late.'], ans: 3, explain: '"He mentioned that he would be late" — no quotation marks, tense backshifted.' },
  { q: '"Please close the window," said Mr Lim. What type of speech is this?', opts: ['Direct speech', 'Reported request', 'Indirect command', 'Passive voice'], ans: 0, explain: 'Quotation marks with Mr Lim\'s exact words indicate direct speech.' },
  { q: 'The coach told them to run faster. This is:', opts: ['Direct speech', 'A reported command', 'A direct command', 'A direct question'], ans: 1, explain: '"Told + object + to infinitive" is the structure for a reported command.' },
  { q: '"Where did you put my keys?" asked Mum. Identify the speech type.', opts: ['Reported question', 'Indirect speech', 'Direct speech', 'Reported command'], ans: 2, explain: 'Quotation marks with exact words and a question mark indicate direct speech.' },
  { q: 'He asked me where I had put his keys. This is:', opts: ['Direct speech', 'A direct question', 'A direct command', 'A reported question'], ans: 3, explain: '"Asked + wh-word + statement order" without quotation marks is a reported question.' },
  { q: 'Which word signals that a sentence is likely reported speech?', opts: ['The conjunction "that" after a reporting verb', 'An exclamation mark', 'Quotation marks', 'A question mark inside quotes'], ans: 0, explain: 'The word "that" after a reporting verb typically introduces reported speech.' },
  // ═══════════════════════════════════════════════
  // TENSE BACKSHIFT (Q26–Q50)
  // ═══════════════════════════════════════════════
  { q: '"I like mangoes." → She said that she ______ mangoes.', opts: ['likes', 'liked', 'is liking', 'has liked'], ans: 1, explain: 'Present simple "like" backshifts to past simple "liked".' },
  { q: '"I am studying." → He said that he ______ studying.', opts: ['is', 'has been', 'was', 'had been'], ans: 2, explain: 'Present continuous "am studying" backshifts to past continuous "was studying".' },
  { q: '"I have finished my homework." → She said she ______ her homework.', opts: ['has finished', 'finished', 'was finishing', 'had finished'], ans: 3, explain: 'Present perfect "have finished" backshifts to past perfect "had finished".' },
  { q: '"I ate lunch already." → He said he ______ lunch already.', opts: ['had eaten', 'has eaten', 'ate', 'eats'], ans: 0, explain: 'Past simple "ate" backshifts to past perfect "had eaten".' },
  { q: '"I will come tomorrow." → She said she ______ come the next day.', opts: ['will', 'would', 'shall', 'should'], ans: 1, explain: '"Will" backshifts to "would" in reported speech.' },
  { q: '"I can swim." → He said he ______ swim.', opts: ['can', 'may', 'could', 'was able'], ans: 2, explain: '"Can" backshifts to "could" in reported speech.' },
  { q: '"I may visit you." → She said she ______ visit me.', opts: ['may', 'would', 'could', 'might'], ans: 3, explain: '"May" backshifts to "might" in reported speech.' },
  { q: '"I must leave now." → He said he ______ leave then.', opts: ['had to', 'must', 'has to', 'should'], ans: 0, explain: '"Must" backshifts to "had to" in reported speech.' },
  { q: '"We are playing football." → They said they ______ football.', opts: ['are playing', 'were playing', 'had played', 'play'], ans: 1, explain: 'Present continuous backshifts to past continuous.' },
  { q: '"She has been waiting for an hour." → He said she ______ for an hour.', opts: ['has been waiting', 'was waiting', 'had been waiting', 'is waiting'], ans: 2, explain: 'Present perfect continuous backshifts to past perfect continuous.' },
  { q: '"I wrote the letter yesterday." → She said she ______ the letter the day before.', opts: ['wrote', 'writes', 'has written', 'had written'], ans: 3, explain: 'Past simple "wrote" backshifts to past perfect "had written".' },
  { q: '"We will finish by Friday." → They said they ______ finish by Friday.', opts: ['would', 'will', 'shall', 'can'], ans: 0, explain: '"Will" backshifts to "would".' },
  { q: '"I don\'t know the answer." → He said he ______ the answer.', opts: ['doesn\'t know', 'didn\'t know', 'don\'t know', 'hadn\'t known'], ans: 1, explain: 'Present simple negative "don\'t know" backshifts to past simple "didn\'t know".' },
  { q: '"She is cooking dinner." → He told me she ______ dinner.', opts: ['is cooking', 'has cooked', 'was cooking', 'cooks'], ans: 2, explain: 'Present continuous "is cooking" backshifts to past continuous "was cooking".' },
  { q: '"I have never been to Japan." → She said she ______ to Japan.', opts: ['has never been', 'never was', 'was never', 'had never been'], ans: 3, explain: 'Present perfect backshifts to past perfect: "had never been".' },
  { q: '"We can see the mountains from here." → They said they ______ the mountains from there.', opts: ['could see', 'can see', 'may see', 'saw'], ans: 0, explain: '"Can" backshifts to "could".' },
  { q: '"I am going to buy a new phone." → He said he ______ to buy a new phone.', opts: ['is going', 'was going', 'has been going', 'goes'], ans: 1, explain: '"Am going" backshifts to "was going".' },
  { q: '"She sings beautifully." → He said she ______ beautifully.', opts: ['sings', 'has sung', 'sang', 'is singing'], ans: 2, explain: 'Present simple "sings" backshifts to past simple "sang".' },
  { q: '"I will not forget this." → She said she ______ not forget that.', opts: ['will', 'might', 'shall', 'would'], ans: 3, explain: '"Will" backshifts to "would".' },
  { q: '"They are waiting outside." → She said they ______ outside.', opts: ['were waiting', 'are waiting', 'had waited', 'wait'], ans: 0, explain: 'Present continuous backshifts to past continuous.' },
  { q: '"I may be wrong." → He admitted he ______ be wrong.', opts: ['may', 'might', 'could', 'would'], ans: 1, explain: '"May" backshifts to "might".' },
  { q: '"We must hurry." → She said they ______ hurry.', opts: ['must', 'have to', 'had to', 'should'], ans: 2, explain: '"Must" backshifts to "had to".' },
  { q: '"I don\'t like spicy food." → He said he ______ like spicy food.', opts: ['doesn\'t', 'won\'t', 'hadn\'t', 'didn\'t'], ans: 3, explain: 'Present simple negative backshifts to past simple negative: "didn\'t".' },
  { q: 'What does "present perfect" backshift to in reported speech?', opts: ['Past perfect', 'Past simple', 'Present simple', 'Past continuous'], ans: 0, explain: 'Present perfect backshifts to past perfect (e.g. "have eaten" → "had eaten").' },
  { q: 'What does "will" become in reported speech (past reporting verb)?', opts: ['shall', 'would', 'can', 'should'], ans: 1, explain: '"Will" backshifts to "would" when the reporting verb is past tense.' },
  // ═══════════════════════════════════════════════
  // PRONOUN + TIME/PLACE CHANGES (Q51–Q75)
  // ═══════════════════════════════════════════════
  { q: '"I will do it today." → She said she would do it ______.', opts: ['today', 'this day', 'that day', 'the day'], ans: 2, explain: '"Today" changes to "that day" in reported speech.' },
  { q: '"We are leaving tomorrow." → They said they were leaving ______.', opts: ['tomorrow', 'that morning', 'today', 'the next day'], ans: 3, explain: '"Tomorrow" changes to "the next day" or "the following day".' },
  { q: '"I saw him yesterday." → She said she had seen him ______.', opts: ['the day before', 'yesterday', 'last day', 'the other day'], ans: 0, explain: '"Yesterday" changes to "the day before" or "the previous day".' },
  { q: '"I am here now." → He said he was ______ then.', opts: ['here', 'there', 'near', 'around'], ans: 1, explain: '"Here" changes to "there" in reported speech.' },
  { q: '"This book is mine." → She said ______ book was hers.', opts: ['this', 'the', 'that', 'these'], ans: 2, explain: '"This" changes to "that" in reported speech.' },
  { q: '"I finished these exercises." → He said he had finished ______ exercises.', opts: ['these', 'this', 'the', 'those'], ans: 3, explain: '"These" changes to "those" in reported speech.' },
  { q: '"I saw her two days ago." → He said he had seen her two days ______.', opts: ['before', 'ago', 'earlier', 'past'], ans: 0, explain: '"Ago" changes to "before" in reported speech.' },
  { q: '"I will visit you next week." → She said she would visit me ______.', opts: ['next week', 'the following week', 'this week', 'that week'], ans: 1, explain: '"Next week" changes to "the following week".' },
  { q: '"We went there last month." → They said they had gone there ______.', opts: ['last month', 'past month', 'the month before', 'that month'], ans: 2, explain: '"Last month" changes to "the month before" or "the previous month".' },
  { q: '"I am doing my homework now." → He said he was doing ______ homework then.', opts: ['my', 'your', 'their', 'his'], ans: 3, explain: '"My" changes to "his" when reporting a male speaker\'s words.' },
  { q: '"We love our new house." → They said they loved ______ new house.', opts: ['their', 'our', 'his', 'my'], ans: 0, explain: '"Our" changes to "their" in reported speech.' },
  { q: '"You can borrow my pen." → She told me I could borrow ______ pen.', opts: ['my', 'her', 'your', 'their'], ans: 1, explain: '"My" (the speaker\'s) changes to "her" when reporting a female speaker.' },
  { q: '"I will bring my sister." → He said he would bring ______ sister.', opts: ['my', 'her', 'his', 'their'], ans: 2, explain: '"My" changes to "his" for a male speaker in reported speech.' },
  { q: '"Come to my house tonight." → She invited me to ______ house that night.', opts: ['my', 'his', 'your', 'her'], ans: 3, explain: '"My" changes to "her" and "tonight" changes to "that night".' },
  { q: '"I spoke to you last Friday." → He said he had spoken to me ______.', opts: ['the Friday before', 'last Friday', 'on Friday', 'that Friday'], ans: 0, explain: '"Last Friday" changes to "the Friday before" or "the previous Friday".' },
  { q: '"Give me your book." → She asked me to give ______ my book.', opts: ['me', 'her', 'him', 'them'], ans: 1, explain: '"Me" (the speaker) changes to "her" when reporting a female speaker.' },
  { q: '"We will meet you here tomorrow." → They said they would meet us ______ the next day.', opts: ['here', 'near', 'there', 'around'], ans: 2, explain: '"Here" changes to "there" in reported speech.' },
  { q: '"I bought this yesterday." → She said she had bought ______ the day before.', opts: ['this', 'it', 'these', 'that'], ans: 3, explain: '"This" changes to "that" in reported speech.' },
  { q: 'In reported speech, "now" usually changes to:', opts: ['then', 'today', 'here', 'soon'], ans: 0, explain: '"Now" changes to "then" in reported speech.' },
  { q: 'In reported speech, "tonight" usually changes to:', opts: ['this night', 'that night', 'the night', 'last night'], ans: 1, explain: '"Tonight" changes to "that night" in reported speech.' },
  { q: '"I want to go there." → She said she wanted to go ______.', opts: ['that place', 'here', 'there', 'this place'], ans: 2, explain: '"There" remains "there" in this case since the reference point is already distant.' },
  { q: '"Bring your umbrella." → Mum told me to bring ______ umbrella.', opts: ['his', 'your', 'her', 'my'], ans: 3, explain: '"Your" (addressed to the reporter) becomes "my" in reported speech.' },
  { q: '"These are our tickets." → They said ______ were their tickets.', opts: ['those', 'these', 'this', 'that'], ans: 0, explain: '"These" changes to "those" in reported speech.' },
  { q: '"I am coming to your party tonight." → He said he was going to ______ party that night.', opts: ['your', 'my', 'his', 'their'], ans: 1, explain: '"Your" (the listener who is now reporting) changes to "my".' },
  { q: '"We moved here last year." → They said they had moved there ______.', opts: ['last year', 'past year', 'the year before', 'that year'], ans: 2, explain: '"Last year" changes to "the year before" or "the previous year".' },
  // ═══════════════════════════════════════════════
  // REPORTING QUESTIONS (Q76–Q100)
  // ═══════════════════════════════════════════════
  { q: '"Are you happy?" → She asked ______ I was happy.', opts: ['that', 'when', 'what', 'if'], ans: 3, explain: 'Yes/no questions use "if" or "whether" in reported speech.' },
  { q: '"Where do you live?" → He asked me where I ______.', opts: ['lived', 'live', 'do live', 'am living'], ans: 0, explain: '"Do you live" backshifts to "lived" with no inversion in reported speech.' },
  { q: '"What is your name?" → She asked me what ______ name was.', opts: ['your', 'my', 'his', 'her'], ans: 1, explain: '"Your" changes to "my" when the person asked is reporting.' },
  { q: '"Did you finish the work?" → He asked if I ______ the work.', opts: ['did finish', 'finished', 'had finished', 'have finished'], ans: 2, explain: 'Past simple "did finish" backshifts to past perfect "had finished".' },
  { q: '"Can you help me?" → She asked if I ______ help her.', opts: ['can', 'will', 'may', 'could'], ans: 3, explain: '"Can" backshifts to "could" in reported speech.' },
  { q: '"When will the bus arrive?" → He asked when the bus ______.', opts: ['would arrive', 'will arrive', 'arrives', 'is arriving'], ans: 0, explain: '"Will" backshifts to "would" in reported speech.' },
  { q: '"Why are you crying?" → Mum asked me why I ______.', opts: ['am crying', 'was crying', 'cry', 'cried'], ans: 1, explain: 'Present continuous backshifts to past continuous in reported speech.' },
  { q: '"Have you eaten?" → She asked whether I ______.', opts: ['have eaten', 'ate', 'had eaten', 'eat'], ans: 2, explain: 'Present perfect "have eaten" backshifts to past perfect "had eaten".' },
  { q: '"Do you know the way?" → He asked if I ______ the way.', opts: ['do know', 'know', 'had known', 'knew'], ans: 3, explain: '"Do you know" backshifts to "knew" in reported speech.' },
  { q: '"Is she coming to the party?" → They asked ______ she was coming to the party.', opts: ['whether', 'what', 'that', 'when'], ans: 0, explain: 'Yes/no questions use "if" or "whether" in reported speech.' },
  { q: '"Where did you buy this?" → She asked where I ______ that.', opts: ['bought', 'had bought', 'did buy', 'buy'], ans: 1, explain: 'Past simple "did buy" backshifts to past perfect "had bought".' },
  { q: '"How old are you?" → He asked me how old I ______.', opts: ['am', 'had been', 'was', 'were'], ans: 2, explain: '"Am" backshifts to "was" in reported speech.' },
  { q: 'Which word order is correct for a reported question?', opts: ['He asked where was she.', 'He asked where she is.', 'He asked where is she.', 'He asked where she was.'], ans: 3, explain: 'Reported questions use statement word order: subject before verb.' },
  { q: 'In a reported yes/no question, we use:', opts: ['if or whether', 'do/does', 'that', 'what'], ans: 0, explain: 'Yes/no questions in reported speech use "if" or "whether".' },
  { q: '"What time does the shop close?" → She asked what time the shop ______.', opts: ['closes', 'closed', 'does close', 'had closed'], ans: 1, explain: '"Does close" backshifts to "closed" in reported speech.' },
  { q: '"Will you marry me?" → He asked her ______ she would marry him.', opts: ['that', 'what', 'if', 'when'], ans: 2, explain: 'Yes/no questions use "if" or "whether" in reported speech.' },
  { q: '"Who broke the vase?" → She asked who ______ the vase.', opts: ['broke', 'has broken', 'breaks', 'had broken'], ans: 3, explain: '"Broke" backshifts to "had broken" in reported speech.' },
  { q: 'Which reported question is correct?', opts: ['He asked if I liked pizza.', 'He asked if did I like pizza.', 'He asked did I like pizza.', 'He asked that I liked pizza.'], ans: 0, explain: 'Reported yes/no questions use "if" + statement order: "if I liked pizza".' },
  { q: '"How much does it cost?" → She asked how much it ______.', opts: ['does cost', 'cost', 'costs', 'had cost'], ans: 1, explain: '"Does it cost" backshifts to "it cost" (past simple) in reported speech.' },
  { q: '"Are these your shoes?" → He asked if ______ were my shoes.', opts: ['these', 'this', 'those', 'that'], ans: 2, explain: '"These" changes to "those" in reported speech.' },
  { q: '"Why didn\'t you call me?" → She asked why I ______ her.', opts: ['didn\'t call', 'don\'t call', 'haven\'t called', 'hadn\'t called'], ans: 3, explain: 'Past simple "didn\'t call" backshifts to past perfect "hadn\'t called".' },
  { q: '"Shall I open the window?" → He asked ______ he should open the window.', opts: ['if', 'what', 'that', 'why'], ans: 0, explain: '"Shall I" questions use "if" or "whether" + "should" in reported speech.' },
  { q: 'Do reported questions end with a question mark?', opts: ['Yes, always', 'No, they end with a full stop', 'Only wh-questions do', 'Only yes/no questions do'], ans: 1, explain: 'Reported questions are statements, so they end with a full stop, not a question mark.' },
  { q: '"What are you reading?" → The teacher asked me what I ______.', opts: ['am reading', 'read', 'was reading', 'have read'], ans: 2, explain: 'Present continuous backshifts to past continuous in reported speech.' },
  { q: '"Does she play the piano?" → He asked if she ______ the piano.', opts: ['does play', 'plays', 'had played', 'played'], ans: 3, explain: '"Does she play" backshifts to "she played" in reported speech.' },
  // ═══════════════════════════════════════════════
  // REPORTING COMMANDS / REQUESTS (Q101–Q120)
  // ═══════════════════════════════════════════════
  { q: '"Sit down." → The teacher told us ______.', opts: ['to sit down', 'sit down', 'that sit down', 'sitting down'], ans: 0, explain: 'Commands are reported with "told + object + to infinitive".' },
  { q: '"Don\'t run in the corridor." → She told them ______ in the corridor.', opts: ['don\'t run', 'not to run', 'to not run', 'not running'], ans: 1, explain: 'Negative commands use "told + object + not to + infinitive".' },
  { q: '"Please help me carry this box." → He asked me ______ him carry that box.', opts: ['please help', 'helping', 'to help', 'that I help'], ans: 2, explain: 'Requests use "asked + object + to infinitive".' },
  { q: '"Close the door." → She told him ______.', opts: ['close the door', 'that close the door', 'closing the door', 'to close the door'], ans: 3, explain: 'Commands use "told + object + to infinitive".' },
  { q: '"Don\'t be late." → Mum told me ______ late.', opts: ['not to be', 'don\'t be', 'to not be', 'not being'], ans: 0, explain: 'Negative commands: "told + object + not to + infinitive".' },
  { q: '"Open your textbooks to page 10." → The teacher told us ______ our textbooks to page 10.', opts: ['open', 'to open', 'opening', 'opened'], ans: 1, explain: 'Commands are reported with "to + infinitive".' },
  { q: '"Please pass the salt." → She asked him ______ the salt.', opts: ['pass', 'passing', 'to pass', 'that pass'], ans: 2, explain: 'Polite requests use "asked + object + to + infinitive".' },
  { q: '"Don\'t touch the wet paint." → He warned them ______ the wet paint.', opts: ['don\'t touch', 'not touching', 'to not touch', 'not to touch'], ans: 3, explain: 'Negative commands use "not to + infinitive".' },
  { q: '"Stand up straight!" → The sergeant ordered them ______ up straight.', opts: ['to stand', 'stand', 'standing', 'stood'], ans: 0, explain: 'Orders use "ordered + object + to + infinitive".' },
  { q: '"Please don\'t make noise." → She requested us ______ noise.', opts: ['don\'t make', 'not to make', 'not making', 'to not make'], ans: 1, explain: 'Negative requests: "requested + object + not to + infinitive".' },
  { q: '"Bring your homework tomorrow." → The teacher told them ______ their homework the next day.', opts: ['bring', 'bringing', 'to bring', 'brought'], ans: 2, explain: 'Commands: "told + object + to + infinitive". "Tomorrow" → "the next day".' },
  { q: '"Don\'t forget your umbrella." → She reminded me ______ my umbrella.', opts: ['don\'t forget', 'forgetting', 'to not forget', 'not to forget'], ans: 3, explain: '"Reminded + object + not to + infinitive" for negative reminders.' },
  { q: '"Clean up your room immediately." → Dad ordered me ______ up my room immediately.', opts: ['to clean', 'clean', 'cleaning', 'cleaned'], ans: 0, explain: 'Orders: "ordered + object + to + infinitive".' },
  { q: '"Could you lend me your notes?" → She asked me ______ her my notes.', opts: ['could lend', 'to lend', 'lending', 'lend'], ans: 1, explain: 'Polite requests with "could you" are reported as "asked + object + to + infinitive".' },
  { q: '"Don\'t eat in the library." → The librarian told us ______ in the library.', opts: ['don\'t eat', 'to not eat', 'not to eat', 'not eating'], ans: 2, explain: 'Negative commands: "told + object + not to + infinitive".' },
  { q: '"Please wait here." → He asked us ______ there.', opts: ['please wait', 'wait', 'waiting', 'to wait'], ans: 3, explain: 'Requests: "asked + object + to + infinitive". "Here" → "there".' },
  { q: '"Stop talking!" → The teacher told us ______.', opts: ['to stop talking', 'stop talking', 'not talk', 'stopped talking'], ans: 0, explain: 'Commands: "told + object + to + infinitive".' },
  { q: '"Please don\'t tell anyone." → She begged me ______ anyone.', opts: ['don\'t tell', 'not to tell', 'to not tell', 'not telling'], ans: 1, explain: 'Negative requests: "begged + object + not to + infinitive".' },
  { q: '"Write your name on the paper." → He instructed us ______ our names on the paper.', opts: ['write', 'writing', 'to write', 'wrote'], ans: 2, explain: '"Instructed + object + to + infinitive" for formal commands.' },
  { q: '"Don\'t park here." → The guard told the driver ______ there.', opts: ['don\'t park', 'not parking', 'to not park', 'not to park'], ans: 3, explain: 'Negative commands: "told + object + not to + infinitive". "Here" → "there".' },
  // ═══════════════════════════════════════════════
  // FULL SENTENCE CONVERSION (Q121–Q140)
  // ═══════════════════════════════════════════════
  { q: '"I am tired," said Tom. Choose the correct reported form.', opts: ['Tom said that he was tired.', 'Tom said that he is tired.', 'Tom said that I was tired.', 'Tom said that he had been tired.'], ans: 0, explain: '"Am" backshifts to "was", "I" → "he". Tom said that he was tired.' },
  { q: '"We will go to the beach tomorrow," they said. Choose the correct reported form.', opts: ['They said they will go to the beach tomorrow.', 'They said they would go to the beach the next day.', 'They said we would go to the beach tomorrow.', 'They said they had gone to the beach.'], ans: 1, explain: '"Will" → "would", "we" → "they", "tomorrow" → "the next day".' },
  { q: '"I can speak French," she told me. Choose the correct reported form.', opts: ['She told me she can speak French.', 'She told me I could speak French.', 'She told me she could speak French.', 'She told me she spoke French.'], ans: 2, explain: '"Can" → "could", "I" → "she". She told me she could speak French.' },
  { q: '"Do you like pizza?" he asked. Choose the correct reported form.', opts: ['He asked if I like pizza.', 'He asked that I liked pizza.', 'He asked did I like pizza.', 'He asked if I liked pizza.'], ans: 3, explain: 'Yes/no → "if" + statement order + backshift: "liked".' },
  { q: '"Where is the library?" she asked. Choose the correct reported form.', opts: ['She asked where the library was.', 'She asked where the library is.', 'She asked where was the library.', 'She asked where is the library.'], ans: 0, explain: 'Wh-question → statement order + backshift: "where the library was".' },
  { q: '"I have been to Paris," said Li Wei. Choose the correct reported form.', opts: ['Li Wei said that he has been to Paris.', 'Li Wei said that he had been to Paris.', 'Li Wei said that I had been to Paris.', 'Li Wei said that he went to Paris.'], ans: 1, explain: '"Have been" → "had been", "I" → "he".' },
  { q: '"Don\'t open the door," she said. Choose the correct reported form.', opts: ['She said not to open the door.', 'She said don\'t open the door.', 'She told me not to open the door.', 'She told me to not open the door.'], ans: 2, explain: 'Commands need an object: "told me not to open the door".' },
  { q: '"I bought a new phone yesterday," he said. Choose the correct reported form.', opts: ['He said he bought a new phone yesterday.', 'He said he has bought a new phone.', 'He said I had bought a new phone.', 'He said he had bought a new phone the day before.'], ans: 3, explain: '"Bought" → "had bought", "yesterday" → "the day before", "I" → "he".' },
  { q: '"Are you coming tonight?" she asked. Choose the correct reported form.', opts: ['She asked if I was coming that night.', 'She asked if you are coming tonight.', 'She asked was I coming tonight.', 'She asked if I am coming.'], ans: 0, explain: '"Are" → "was", "you" → "I", "tonight" → "that night", + "if".' },
  { q: '"We must leave now," they said. Choose the correct reported form.', opts: ['They said they must leave now.', 'They said they had to leave then.', 'They said we must leave.', 'They said they have to leave now.'], ans: 1, explain: '"Must" → "had to", "we" → "they", "now" → "then".' },
  { q: '"I saw this movie last week," said Priya. Choose the correct reported form.', opts: ['Priya said she saw this movie last week.', 'Priya said I had seen this movie.', 'Priya said she had seen that movie the week before.', 'Priya said she has seen that movie.'], ans: 2, explain: '"Saw" → "had seen", "this" → "that", "last week" → "the week before".' },
  { q: '"Please lend me your pen," he said. Choose the correct reported form.', opts: ['He said please lend me your pen.', 'He told to lend him my pen.', 'He asked to lend me my pen.', 'He asked me to lend him my pen.'], ans: 3, explain: 'Requests: "asked + object + to infinitive". Pronouns adjusted.' },
  { q: '"What did you eat for lunch?" she asked. Choose the correct reported form.', opts: ['She asked what I had eaten for lunch.', 'She asked what I ate for lunch.', 'She asked what did I eat for lunch.', 'She asked what had I eaten for lunch.'], ans: 0, explain: '"Did eat" → "had eaten", statement word order: "what I had eaten".' },
  { q: '"I will not help you," he said. Choose the correct reported form.', opts: ['He said he will not help me.', 'He said he would not help me.', 'He said he will not help you.', 'He said I would not help you.'], ans: 1, explain: '"Will" → "would", "I" → "he", "you" → "me".' },
  { q: '"We are enjoying ourselves here," they said. Choose the correct reported form.', opts: ['They said they are enjoying themselves here.', 'They said we were enjoying ourselves there.', 'They said they were enjoying themselves there.', 'They said they had enjoyed themselves.'], ans: 2, explain: '"Are" → "were", "we" → "they", "ourselves" → "themselves", "here" → "there".' },
  { q: '"May I use your phone?" she asked. Choose the correct reported form.', opts: ['She asked if I might use her phone.', 'She asked may I use your phone.', 'She asked if she may use my phone.', 'She asked if she could use my phone.'], ans: 3, explain: '"May" → "could/might", "I" → "she", "your" → "my", + "if".' },
  { q: '"I have never seen snow," he told me. Choose the correct reported form.', opts: ['He told me he had never seen snow.', 'He told me he has never seen snow.', 'He told me I had never seen snow.', 'He told me he never saw snow.'], ans: 0, explain: '"Have seen" → "had seen", "I" → "he".' },
  { q: '"How many books do you have?" she asked. Choose the correct reported form.', opts: ['She asked how many books do I have.', 'She asked how many books I had.', 'She asked how many books did I have.', 'She asked how many books I have.'], ans: 1, explain: 'Wh-question → statement order + backshift: "how many books I had".' },
  { q: '"I was watching TV when you called," she said. Choose the correct reported form.', opts: ['She said she was watching TV when I called.', 'She said I was watching TV.', 'She said she had been watching TV when I had called.', 'She said she is watching TV.'], ans: 2, explain: '"Was watching" → "had been watching", "you" → "I", "called" → "had called".' },
  { q: '"Finish your work before you leave," the boss said. Choose the correct reported form.', opts: ['The boss said finish your work.', 'The boss said to finish your work before leaving.', 'The boss told to finish our work.', 'The boss told us to finish our work before we left.'], ans: 3, explain: 'Commands: "told + object + to infinitive". Pronouns and tense adjusted.' },
  // ═══════════════════════════════════════════════
  // ERROR IDENTIFICATION (Q141–Q150)
  // ═══════════════════════════════════════════════
  { q: 'Which reported sentence contains an error?', opts: ['He said me that he was busy.', 'She told me she had arrived.', 'He said that he was happy.', 'They asked if I was coming.'], ans: 0, explain: '"Said me" is wrong. It should be "said to me" or "told me".' },
  { q: 'Which reported sentence contains an error?', opts: ['She asked where I lived.', 'He asked where was the station.', 'They told us to wait.', 'She said she was tired.'], ans: 1, explain: 'Reported questions need statement order: "where the station was", not "where was the station".' },
  { q: 'Which reported sentence contains an error?', opts: ['He told her to sit down.', 'She said that she was fine.', 'He said that "he was leaving."', 'They asked if we could help.'], ans: 2, explain: 'Reported speech should not have quotation marks around the reported clause.' },
  { q: 'Which reported sentence contains an error?', opts: ['She told me not to worry.', 'He asked if I had eaten.', 'They said they were leaving.', 'He said he can swim.'], ans: 3, explain: '"Can" should backshift to "could": "He said he could swim."' },
  { q: 'Which reported sentence contains an error?', opts: ['He told not to run.', 'She asked what my name was.', 'They said they would come.', 'She said she had finished.'], ans: 0, explain: '"Told" needs an object: "He told me/us not to run."' },
  { q: 'Which reported sentence contains an error?', opts: ['He asked if I liked tea.', 'She said she is coming tomorrow.', 'They told us to be quiet.', 'He said he had lost his key.'], ans: 1, explain: 'Tense should backshift: "She said she was coming the next day."' },
  { q: 'Which reported sentence contains an error?', opts: ['She said she had been waiting.', 'They asked whether I wanted tea.', 'He told me that he will help.', 'She told us to leave immediately.'], ans: 2, explain: '"Will" should backshift to "would": "He told me that he would help."' },
  { q: 'Which reported sentence contains an error?', opts: ['He mentioned that he had moved.', 'She said she was nervous.', 'They told us to hurry.', 'He asked if did I know the answer.'], ans: 3, explain: 'Remove "did" inversion: "He asked if I knew the answer."' },
  { q: 'Which reported sentence contains an error?', opts: ['He said she must leave now.', 'She asked where I had gone.', 'They said they were happy.', 'She told me to close the window.'], ans: 0, explain: '"Must" should become "had to" and "now" should become "then": "He said she had to leave then."' },
  { q: 'Which reported sentence contains an error?', opts: ['He said he didn\'t know.', 'She asked me what was my hobby.', 'They told us to sit down.', 'He said he could not come.'], ans: 1, explain: 'Reported questions use statement order: "what my hobby was", not "what was my hobby".' },
]
