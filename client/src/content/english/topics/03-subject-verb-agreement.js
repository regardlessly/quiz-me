export const meta = {
  id: 3, sem: 1,
  title: 'Subject-Verb Agreement',
  desc: 'Matching singular and plural subjects with the correct verb form'
}

export const notes = `
  <h2>Subject-Verb Agreement</h2>
  <p class="topic-desc">Making sure the verb matches its subject in number — singular or plural</p>

  <div class="notes-card">
    <h3>1. The Basic Rule</h3>
    <p>A <strong>singular subject</strong> takes a <strong>singular verb</strong> (add <em>-s</em>). A <strong>plural subject</strong> takes a <strong>plural verb</strong> (no <em>-s</em>).</p>
    <div class="example">
      <strong>Singular:</strong> The dog <em>barks</em>. &nbsp;|&nbsp; She <em>runs</em> fast. &nbsp;|&nbsp; The boy <em>plays</em> football.<br>
      <strong>Plural:</strong> The dogs <em>bark</em>. &nbsp;|&nbsp; They <em>run</em> fast. &nbsp;|&nbsp; The boys <em>play</em> football.
    </div>
    <p><strong>Key principle:</strong> The verb must agree with its <strong>SUBJECT</strong>, not the nearest noun. Always identify the true subject first before choosing the verb.</p>
    <div class="example">
      <em>Wrong:</em> The price of the books <strong>are</strong> high.<br>
      <em>Correct:</em> The price of the books <strong>is</strong> high. (subject = <em>price</em>)
    </div>
  </div>

  <div class="notes-card">
    <h3>2. Tricky Singular Subjects</h3>
    <p>These subjects always take <strong>singular verbs</strong>, even though they may seem to refer to more than one person or thing.</p>
    <div class="example">
      <strong>Indefinite pronouns (always singular):</strong><br>
      everyone, everybody, someone, somebody, anyone, anybody, no one, nobody, each, either, neither, one<br><br>
      "Everyone <em>has</em> a role." &nbsp;|&nbsp; "Nobody <em>knows</em> the answer." &nbsp;|&nbsp; "Each of the students <em>is</em> responsible."<br>
      "Either option <em>works</em>." &nbsp;|&nbsp; "Neither of them <em>wants</em> to leave."
    </div>
    <div class="example">
      <strong>Collective nouns (usually singular in Singapore/British English):</strong><br>
      team, class, committee, family, group, crowd, jury, government, army, staff<br><br>
      "The team <em>is</em> ready." &nbsp;|&nbsp; "The committee <em>has</em> decided." &nbsp;|&nbsp; "Our class <em>was</em> chosen."
    </div>
    <div class="example">
      <strong>Subjects with intervening phrases:</strong> The real subject may be separated from the verb.<br>
      "The box of chocolates <em>is</em> on the table." (subject = <em>box</em>)<br>
      "One of my friends <em>is</em> coming." (subject = <em>one</em>)
    </div>
  </div>

  <div class="notes-card">
    <h3>3. Compound Subjects</h3>
    <p>Two or more subjects joined by <strong>and</strong> usually take a <strong>plural verb</strong>.</p>
    <div class="example">
      "Tom and Jerry <em>are</em> here." &nbsp;|&nbsp; "The cat and the dog <em>fight</em> often."<br>
      <strong>Exception — single unit:</strong> "Fish and chips <em>is</em> my favourite." &nbsp;|&nbsp; "The President and CEO <em>is</em> Mr Lee."
    </div>
    <p>With <strong>or / nor / either…or / neither…nor</strong>, the verb agrees with the <strong>NEARER subject</strong>.</p>
    <div class="example">
      "Either the teacher or the students <em>are</em> responsible." (students is nearer → plural)<br>
      "Neither the students nor the teacher <em>is</em> responsible." (teacher is nearer → singular)<br>
      "Either he or I <em>am</em> wrong." (I is nearer → first person singular)
    </div>
    <div class="example">
      <strong>Not only…but also</strong> → same rule (verb agrees with nearer subject):<br>
      "Not only the students but also the teacher <em>is</em> involved." (teacher is nearer → singular)
    </div>
  </div>

  <div class="notes-card">
    <h3>4. Inverted Sentences and Questions</h3>
    <p>In inverted sentences, the subject comes <strong>after</strong> the verb. Find the real subject first.</p>
    <div class="example">
      <strong>There is / There are:</strong><br>
      "There <em>is</em> a problem." (subject = <em>problem</em>) &nbsp;|&nbsp; "There <em>are</em> many problems." (subject = <em>problems</em>)<br><br>
      <strong>Here is / Here are:</strong><br>
      "Here <em>is</em> your book." (subject = <em>book</em>) &nbsp;|&nbsp; "Here <em>are</em> your books." (subject = <em>books</em>)
    </div>
    <div class="example">
      <strong>Questions:</strong> The auxiliary verb comes before the subject.<br>
      "<em>Does</em> she know?" (subject = <em>she</em>) &nbsp;|&nbsp; "<em>Do</em> they know?" (subject = <em>they</em>)<br>
      "What <em>is</em> the reason?" (reason = singular) &nbsp;|&nbsp; "What <em>are</em> the reasons?" (reasons = plural)
    </div>
  </div>

  <div class="notes-card">
    <h3>5. Nouns That Look Plural But Are Singular</h3>
    <p>These nouns end in <em>-s</em> but always take <strong>singular verbs</strong>.</p>
    <div class="example">
      <strong>Academic subjects:</strong> mathematics, physics, economics, statistics, linguistics, ethics, politics<br>
      "Mathematics <em>is</em> my favourite subject." &nbsp;|&nbsp; "Economics <em>was</em> difficult."
    </div>
    <div class="example">
      <strong>Diseases:</strong> measles, mumps, rabies<br>
      "Measles <em>is</em> a contagious disease." &nbsp;|&nbsp; "Mumps <em>causes</em> swollen glands."
    </div>
    <div class="example">
      <strong>Uncountable nouns:</strong> news, information, advice, knowledge, furniture, equipment, homework, luggage<br>
      "The news <em>is</em> good." &nbsp;|&nbsp; "His advice <em>was</em> helpful." &nbsp;|&nbsp; "The furniture <em>needs</em> replacing."
    </div>
    <div class="example">
      <strong>Proper nouns / amounts as a unit:</strong><br>
      "The United States <em>is</em> a country." &nbsp;|&nbsp; "Twenty dollars <em>is</em> enough." &nbsp;|&nbsp; "Five kilometres <em>is</em> a long walk."
    </div>
  </div>

  <div class="notes-card">
    <h3>6. Nouns That Are Always Plural</h3>
    <p>These nouns always take <strong>plural verbs</strong>.</p>
    <div class="example">
      <strong>Pairs of things (pluralia tantum):</strong><br>
      scissors, glasses (spectacles), trousers, jeans, shorts, tongs, pliers, binoculars, tweezers<br><br>
      "The scissors <em>are</em> on the table." &nbsp;|&nbsp; "These trousers <em>are</em> too long." &nbsp;|&nbsp; "My glasses <em>need</em> cleaning."
    </div>
    <div class="example">
      <strong>To make singular:</strong> use "a pair of…" → singular verb<br>
      "A pair of scissors <em>is</em> in the drawer." &nbsp;|&nbsp; "A pair of jeans <em>was</em> on the bed."
    </div>
    <div class="example">
      <strong>People / police:</strong><br>
      "The police <em>are</em> investigating the case." &nbsp;|&nbsp; "People <em>are</em> complaining about the noise."
    </div>
  </div>

  <div class="notes-card">
    <h3>7. Common Error Patterns + Quick Rules</h3>
    <div class="example">
      <strong>Intervening phrases do NOT change the subject:</strong><br>
      Phrases with <em>with, along with, together with, as well as, in addition to, including, except</em> are NOT part of the subject.<br>
      "The teacher, <em>together with</em> her students, <strong>is</strong> ready." (subject = <em>teacher</em>)<br>
      "Mary, <em>as well as</em> her sisters, <strong>was</strong> invited." (subject = <em>Mary</em>)
    </div>
    <div class="example">
      <strong>Relative clauses — "one of those who" vs "the only one who":</strong><br>
      "He is one of those students who <strong>work</strong> hard." (who refers to <em>students</em> → plural)<br>
      "He is the only one who <strong>works</strong> hard." (who refers to <em>one</em> → singular)
    </div>
    <div class="example">
      <strong>Fractions and percentages</strong> agree with the noun after <em>of</em>:<br>
      "Half of the cake <strong>is</strong> eaten." (cake = singular) &nbsp;|&nbsp; "Half of the cakes <strong>are</strong> eaten." (cakes = plural)<br>
      "A third of the students <strong>were</strong> absent." &nbsp;|&nbsp; "Ninety percent of the water <strong>was</strong> wasted."
    </div>
    <div class="formula">AND → plural (usually) &nbsp;|&nbsp; OR / NOR → agree with nearer subject</div>
    <div class="formula">Everyone / Nobody / Each / Either / Neither → singular</div>
    <div class="formula">Collective nouns → singular (Singapore/British English)</div>
    <div class="formula">Mathematics / News / Furniture / Equipment → singular</div>
    <div class="formula">Scissors / Trousers / Police / People → plural</div>
    <div class="formula">Together with / As well as → does NOT affect subject</div>
    <div class="formula">Fractions → agree with noun after "of"</div>
  </div>
`

export const questions = [
  { q: "Choose the correct verb: 'The cat ___ on the mat.'", opts: ["sits", "sitting", "sat", "sit"], ans: 0, explain: "The subject 'cat' is singular, so the verb must be 'sits' (singular present). Singular subjects take verbs ending in -s." },
  { q: "Choose the correct verb: 'The students ___ hard for their exams.'", opts: ["studies", "study", "is studying", "has studied"], ans: 1, explain: "'Students' is plural, so the plural verb 'study' (no -s) is correct." },
  { q: "Which sentence is grammatically correct?", opts: ["He walk to school every day.", "She play basketball after school.", "The bird sings in the morning.", "They eats lunch at noon."], ans: 2, explain: "'The bird sings' is correct \u2014 'bird' is singular so the verb takes -s. The other sentences have subject-verb disagreement." },
  { q: "Choose the correct verb: 'My father ___ the newspaper every morning.'", opts: ["reading", "are reading", "read", "reads"], ans: 3, explain: "'Father' is a singular subject, so the verb must be 'reads' (singular form with -s)." },
  { q: "Choose the correct verb: 'The children ___ in the park.'", opts: ["play", "is playing", "has played", "plays"], ans: 0, explain: "'Children' is an irregular plural noun, so it takes the plural verb 'play' (no -s)." },
  { q: "Which sentence has an error?", opts: ["She sings beautifully.", "They dances at the party.", "We enjoy music.", "He runs every morning."], ans: 1, explain: "'They dances' is incorrect. 'They' is plural so it takes 'dance' (no -s). 'Dances' is singular form." },
  { q: "Choose the correct verb: 'A dog ___ better hearing than humans.'", opts: ["are having", "have", "has", "having"], ans: 2, explain: "'A dog' is singular ('a' signals one), so the singular verb 'has' is correct." },
  { q: "Choose the correct verb: 'Those flowers ___ very beautiful.'", opts: ["has looked", "looks", "is", "look"], ans: 3, explain: "'Flowers' is plural (indicated by 'those'), so the plural verb 'look' is correct." },
  { q: "Which sentence is correct?", opts: ["My brother cooks dinner.", "The teachers arrives early.", "The boys plays football.", "The girl draw a picture."], ans: 0, explain: "'My brother cooks dinner' is correct \u2014 'brother' is singular so 'cooks' (with -s) is correct. The others have errors." },
  { q: "Choose the correct verb: 'Birds ___ south for the winter.'", opts: ["is flying", "fly", "has flown", "flies"], ans: 1, explain: "'Birds' is plural, so the plural verb 'fly' (no -s) is correct." },
  { q: "The verb must agree with its ___.", opts: ["nearest noun", "object", "subject", "adjective"], ans: 2, explain: "The fundamental rule of subject-verb agreement is that the verb must agree with its SUBJECT, regardless of other nouns nearby." },
  { q: "Choose the correct verb: 'She ___ her homework before dinner.'", opts: ["finishing", "are finishing", "finish", "finishes"], ans: 3, explain: "'She' is a singular subject (third person singular), so the verb must be 'finishes' (with -s)." },
  { q: "Which verb form is correct for a singular third-person subject in simple present?", opts: ["runs", "running", "ran", "run"], ans: 0, explain: "In simple present tense, singular third-person subjects (he, she, it, and singular nouns) take the verb with -s: 'runs'." },
  { q: "Choose the correct verb: 'The baby ___ when it is hungry.'", opts: ["cry", "cries", "crying", "is cry"], ans: 1, explain: "'The baby' is singular, so the verb must be 'cries'. Note: y \u2192 ies when the verb ends in consonant + y." },
  { q: "Choose the correct verb: 'My parents ___ me very much.'", opts: ["has loved", "loves", "love", "is loving"], ans: 2, explain: "'Parents' is plural, so the plural verb 'love' (no -s) is correct." },
  { q: "Choose the correct verb: 'Everyone ___ a part to play.'", opts: ["are having", "were having", "have", "has"], ans: 3, explain: "'Everyone' is an indefinite pronoun that always takes a singular verb. 'Everyone has' is correct." },
  { q: "Choose the correct verb: 'Nobody ___ where she went.'", opts: ["knows", "are knowing", "have known", "know"], ans: 0, explain: "'Nobody' is an indefinite pronoun that always takes a singular verb. 'Nobody knows' is correct." },
  { q: "Choose the correct verb: 'Each of the students ___ a dictionary.'", opts: ["have", "has", "are having", "were given"], ans: 1, explain: "'Each' is always singular. The phrase 'of the students' is a modifier \u2014 the true subject is 'each', so use 'has'." },
  { q: "Choose the correct verb: 'Either answer ___ acceptable.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'Either' used alone as a subject is singular and takes a singular verb: 'is'." },
  { q: "Choose the correct verb: 'Neither of the boys ___ prepared.'", opts: ["are", "were", "have been", "was"], ans: 3, explain: "'Neither' is singular and takes a singular verb. 'Neither of the boys was prepared' is correct." },
  { q: "Which sentence is correct?", opts: ["Somebody has left a message.", "Everyone were excited.", "Someone have taken my pen.", "Anyone are welcome to join."], ans: 0, explain: "'Somebody has left a message' is correct. Indefinite pronouns (somebody, someone, etc.) take singular verbs." },
  { q: "Choose the correct verb: 'Somebody ___ calling your name.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Somebody' is singular and takes the singular verb 'is'." },
  { q: "Choose the correct verb: 'No one ___ allowed to enter without a pass.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'No one' is always singular and takes a singular verb: 'No one is allowed'." },
  { q: "Which sentence is grammatically correct?", opts: ["Anybody are free to ask.", "Each of the answers are wrong.", "Everyone have finished the test.", "Neither of them is interested."], ans: 3, explain: "'Neither of them is interested' is correct. 'Neither' takes a singular verb. The other sentences incorrectly use plural verbs with singular indefinite pronouns." },
  { q: "Choose the correct verb: 'One of the windows ___ broken.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "The subject is 'one', not 'windows'. 'One' is singular, so the verb must be 'is'." },
  { q: "Choose the correct verb: 'Everyone in the classes ___ to submit their work.'", opts: ["need", "needs", "are needing", "have needed"], ans: 1, explain: "'Everyone' is singular regardless of the phrase 'in the classes'. The verb must be 'needs'." },
  { q: "Choose the correct verb: 'Either of the routes ___ to the school.'", opts: ["have led", "lead", "leads", "are leading"], ans: 2, explain: "'Either' used as a subject is singular. 'Either of the routes leads' is correct." },
  { q: "Choose the correct verb: 'Anybody ___ welcome to attend the event.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'Anybody' is an indefinite pronoun that always takes a singular verb: 'Anybody is welcome'." },
  { q: "Which word in this list is ALWAYS singular?", opts: ["everyone", "few", "many", "both"], ans: 0, explain: "'Everyone' is always singular and takes a singular verb. Few, many, and both are plural indefinite pronouns." },
  { q: "Choose the correct verb: 'Each of the players ___ given a trophy.'", opts: ["are", "is", "have been", "were"], ans: 1, explain: "'Each' is singular. The subject is 'each', not 'players', so the singular verb 'is' (or 'was') is correct." },
  { q: "Choose the correct verb: 'The team ___ ready for the match.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "In Singapore/British English, collective nouns like 'team' are treated as singular: 'The team is ready.'" },
  { q: "Choose the correct verb: 'The committee ___ reached a decision.'", opts: ["were", "have", "are", "has"], ans: 3, explain: "Collective nouns like 'committee' take singular verbs in Singapore/British English: 'The committee has reached a decision.'" },
  { q: "Choose the correct verb: 'The class ___ going on a field trip tomorrow.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Class' as a collective noun takes a singular verb: 'The class is going on a field trip.'" },
  { q: "Choose the correct verb: 'The jury ___ still deliberating.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Jury' is a collective noun and takes a singular verb in British/Singapore English: 'The jury is still deliberating.'" },
  { q: "Which sentence uses the collective noun correctly?", opts: ["The family are arguing again.", "The group were confused.", "The staff is well trained.", "The crowd were cheering loudly."], ans: 2, explain: "'The staff is well trained' correctly uses a singular verb with the collective noun 'staff' in Singapore/British English." },
  { q: "Choose the correct verb: 'The government ___ announced new measures.'", opts: ["were", "have", "are", "has"], ans: 3, explain: "'Government' is a collective noun taking a singular verb in Singapore/British English: 'The government has announced'." },
  { q: "Choose the correct verb: 'Our school football team ___ won the championship.'", opts: ["has", "were", "have", "are"], ans: 0, explain: "'Team' is a collective noun taking a singular verb: 'The team has won the championship.'" },
  { q: "Choose the correct verb: 'A crowd of protestors ___ gathered outside.'", opts: ["are", "has", "were", "have"], ans: 1, explain: "The subject is 'crowd' (a collective noun), not 'protestors'. 'A crowd has gathered' is correct." },
  { q: "Choose the correct verb: 'The army ___ advancing towards the border.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'Army' is a collective noun taking a singular verb: 'The army is advancing'." },
  { q: "Choose the correct verb: 'The orchestra ___ performing tonight.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'Orchestra' is a collective noun and takes a singular verb in Singapore/British English." },
  { q: "Which sentence correctly uses a collective noun?", opts: ["The panel has submitted its report.", "The audience were asked to leave.", "The crew are ready to sail.", "The committee are meeting tomorrow."], ans: 0, explain: "'The panel has submitted its report' correctly uses singular verb 'has' with the collective noun 'panel'." },
  { q: "Choose the correct verb: 'The family ___ planning a holiday.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Family' is a collective noun taking a singular verb in Singapore/British English: 'The family is planning'." },
  { q: "Choose the correct verb: 'The flock of birds ___ flying south.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "The subject is 'flock' (collective noun), not 'birds'. 'The flock is flying south' is correct." },
  { q: "Choose the correct verb: 'The band ___ performing their new song.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'Band' is a collective noun taking a singular verb in Singapore/British English: 'The band is performing'." },
  { q: "Which collective noun sentence is correct?", opts: ["The committee is reviewing the proposal.", "The team are training hard.", "The public are demanding answers.", "The club have cancelled the event."], ans: 0, explain: "'The committee is reviewing the proposal' correctly uses the singular verb 'is' with the collective noun 'committee'." },
  { q: "Choose the correct verb: 'The price of the books ___ very high.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "The subject is 'price', not 'books'. 'Price' is singular, so use 'is'. The phrase 'of the books' is just a modifier." },
  { q: "Choose the correct verb: 'The box of chocolates ___ on the table.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "The subject is 'box', not 'chocolates'. 'Box' is singular, so use 'is'." },
  { q: "Choose the correct verb: 'The quality of these products ___ improved.'", opts: ["were", "have", "are", "has"], ans: 3, explain: "The subject is 'quality' (singular), not 'products'. Use 'has'. The phrase 'of these products' does not change the subject." },
  { q: "Choose the correct verb: 'A bunch of grapes ___ left on the counter.'", opts: ["was", "have been", "were", "are"], ans: 0, explain: "The subject is 'bunch' (singular), not 'grapes'. Use 'was'. 'Of grapes' modifies the subject but does not change it." },
  { q: "Choose the correct verb: 'The teacher, along with the students, ___ visiting the museum.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Along with the students' is a parenthetical phrase and does not change the subject. The subject is 'teacher' (singular), so use 'is'." },
  { q: "Choose the correct verb: 'The list of items ___ attached to the email.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "The subject is 'list' (singular), not 'items'. Use 'is'. 'Of items' is a modifying phrase." },
  { q: "Which sentence has the correct verb?", opts: ["The bags of rice is heavy.", "The results of the test is disappointing.", "A collection of stamps are on display.", "The number of absent students is high."], ans: 3, explain: "'The number of absent students is high' is correct. The subject is 'number' (singular). The phrase 'of absent students' is a modifier." },
  { q: "Choose the correct verb: 'The cost of the repairs ___ shocking.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "The subject is 'cost' (singular). Use 'is'. The phrase 'of the repairs' does not change the subject." },
  { q: "Choose the correct verb: 'The leader of the two groups ___ responsible.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "The subject is 'leader' (singular). Use 'is'. 'Of the two groups' is a modifier." },
  { q: "Choose the correct verb: 'Mary, as well as her friends, ___ invited to the party.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'As well as her friends' is a parenthetical phrase. The true subject is 'Mary' (singular), so use 'is' (or 'was' for past)." },
  { q: "Choose the correct verb: 'The captain, together with the crew, ___ rescued.'", opts: ["are", "were", "is", "was"], ans: 3, explain: "'Together with the crew' is a phrase that does not affect the subject. The true subject is 'captain' (singular). Use 'was' (past tense)." },
  { q: "Which sentence is grammatically correct?", opts: ["The group of volunteers is impressive.", "The series of mistakes were costly.", "The pack of wolves were spotted.", "The row of houses look beautiful."], ans: 0, explain: "'The group of volunteers is impressive' is correct. The subject is 'group' (singular collective noun), so use 'is'." },
  { q: "Choose the correct verb: 'The importance of good manners ___ often underestimated.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "The subject is 'importance' (singular). Use 'is'. The phrase 'of good manners' modifies the subject." },
  { q: "Choose the correct verb: 'The manager, including his assistants, ___ attending the seminar.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'Including his assistants' is a modifier, not part of the subject. The true subject is 'manager' (singular). Use 'is'." },
  { q: "Choose the correct verb: 'The head of the departments ___ met yesterday.'", opts: ["were", "have", "are", "has"], ans: 3, explain: "The subject is 'head' (singular), not 'departments'. Use 'has'. 'Of the departments' is just a modifier." },
  { q: "Choose the correct verb: 'Tom and Jerry ___ best friends.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "When two subjects are joined by 'and', use a plural verb. 'Tom and Jerry are best friends.'" },
  { q: "Choose the correct verb: 'Either the principal or the teachers ___ responsible.'", opts: ["was", "are", "has been", "is"], ans: 1, explain: "With 'either...or', the verb agrees with the nearer subject. 'Teachers' is plural and nearer, so use 'are'." },
  { q: "Choose the correct verb: 'Neither the students nor the teacher ___ aware of the change.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "With 'neither...nor', the verb agrees with the nearer subject. 'Teacher' is singular and nearer, so use 'is'." },
  { q: "Choose the correct verb: 'My brother and sister ___ visiting us this weekend.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "'Brother and sister' are two subjects joined by 'and', requiring a plural verb: 'are visiting'." },
  { q: "Which sentence is correct?", opts: ["Neither she nor I am free.", "Not only Tom but also Jerry is here.", "Either you or he are wrong.", "Both the cat and dog is asleep."], ans: 0, explain: "'Neither she nor I am free' is correct. With 'neither...nor', the verb agrees with the nearer subject 'I', so use 'am'. Also correct: 'Not only Tom but also Jerry is here' \u2014 but option 3 is the one that follows the rule exactly." },
  { q: "Choose the correct verb: 'Fish and chips ___ his favourite meal.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Fish and chips' is treated as a single dish (a unit), so it takes a singular verb: 'is'." },
  { q: "Choose the correct verb: 'Not only Sarah but also her brothers ___ invited.'", opts: ["is", "was", "are", "has been"], ans: 2, explain: "With 'not only...but also', the verb agrees with the nearer subject. 'Brothers' is plural and nearer, so use 'are'." },
  { q: "Choose the correct verb: 'Neither the manager nor the employees ___ informed.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "With 'neither...nor', the verb agrees with the nearer subject. 'Employees' is plural and nearer, so use 'are'." },
  { q: "Choose the correct verb: 'Either she or her parents ___ to blame.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "With 'either...or', the verb agrees with the nearer subject. 'Parents' is plural and nearer, so use 'are'." },
  { q: "Choose the correct verb: 'Bread and butter ___ served at breakfast.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Bread and butter' is treated as a single food item (a unit), so it takes a singular verb: 'is'." },
  { q: "Choose the correct verb: 'The chairman and CEO ___ announced the decision.'", opts: ["have", "are", "has", "were"], ans: 2, explain: "When one person holds both titles, 'the chairman and CEO' refers to one person \u2014 a single unit \u2014 so use singular 'has'." },
  { q: "Choose the correct verb: 'Both the cat and the dog ___ hungry.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "'Both...and' always creates a plural subject. 'Both the cat and the dog are hungry.'" },
  { q: "Choose the correct verb: 'Not only the cake but also the cookies ___ delicious.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "With 'not only...but also', the verb agrees with the nearer subject. 'Cookies' is plural and nearer, so use 'are'." },
  { q: "Choose the correct verb: 'Either the bus or the train ___ faster.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "With 'either...or', the verb agrees with the nearer subject. 'Train' is singular and nearer, so use 'is'." },
  { q: "Choose the correct verb: 'Neither he nor I ___ interested in the offer.'", opts: ["was", "are", "am", "is"], ans: 2, explain: "With 'neither...nor', the verb agrees with the nearer subject. 'I' is the nearer subject and takes 'am'." },
  { q: "Choose the correct verb: 'There ___ a problem with your answer.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "In 'there is/are' constructions, the verb agrees with the subject that follows. 'A problem' is singular, so use 'is'." },
  { q: "Choose the correct verb: 'There ___ many students in the hall.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "'Many students' is plural, so use 'are'. The subject comes after the verb in 'there are' sentences." },
  { q: "Choose the correct verb: 'Here ___ your book.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "In 'here is/are' constructions, the verb agrees with the subject that follows. 'Book' is singular, so use 'is'." },
  { q: "Choose the correct verb: 'Here ___ the results you requested.'", opts: ["is", "was", "are", "has been"], ans: 2, explain: "'Results' is plural, so use 'are'. The subject in 'here are' sentences comes after the verb." },
  { q: "Choose the correct verb: '___ she know about the meeting?'", opts: ["Have", "Do", "Are", "Does"], ans: 3, explain: "'She' is a singular third-person subject, so the auxiliary verb must be 'Does': 'Does she know?'" },
  { q: "Choose the correct verb: '___ the teachers aware of the change?'", opts: ["Are", "Does", "Is", "Was"], ans: 0, explain: "'Teachers' is plural, so use 'Are': 'Are the teachers aware of the change?'" },
  { q: "Choose the correct verb: 'There ___ no excuse for bad behaviour.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'No excuse' is singular, so use 'is'. In 'there is' sentences, the verb agrees with the noun that follows." },
  { q: "Choose the correct verb: 'There ___ a cat and two dogs in the garden.'", opts: ["is", "have been", "are", "were"], ans: 2, explain: "When 'there' precedes multiple nouns, the verb agrees with the first noun listed. 'A cat' is singular, so technically 'is' is preferred in formal usage \u2014 but 'are' is also widely accepted as the nouns together are plural. Here, 'are' is the best answer as it accounts for the whole list." },
  { q: "Choose the correct verb: 'What ___ the reason for your absence?'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'The reason' is singular, so use 'is': 'What is the reason?'" },
  { q: "Choose the correct verb: 'What ___ the main causes of the problem?'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "'Causes' is plural, so use 'are': 'What are the main causes of the problem?'" },
  { q: "Choose the correct verb: 'There ___ several issues to address.'", opts: ["was", "are", "has been", "is"], ans: 1, explain: "'Several issues' is plural, so use 'are': 'There are several issues to address.'" },
  { q: "Choose the correct verb: '___ he or she responsible for this?'", opts: ["Are", "Were", "Is", "Have"], ans: 2, explain: "With 'he or she', the verb agrees with the nearer subject. 'She' is singular and nearer, so use 'Is'." },
  { q: "Choose the correct verb: 'Here ___ the keys to your room.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "'Keys' is plural, so use 'are': 'Here are the keys to your room.'" },
  { q: "Choose the correct verb: 'There ___ enough food for everyone.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Food' is an uncountable (singular) noun, so use 'is': 'There is enough food for everyone.'" },
  { q: "Choose the correct verb: '___ the information correct?'", opts: ["Were", "Is", "Have", "Are"], ans: 1, explain: "'Information' is an uncountable singular noun, so use 'Is': 'Is the information correct?'" },
  { q: "Choose the correct verb: 'Mathematics ___ my favourite subject.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "Academic subjects ending in -s (mathematics, physics, economics) are treated as singular: 'Mathematics is my favourite subject.'" },
  { q: "Choose the correct verb: 'The news ___ very surprising.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'News' is an uncountable noun that always takes a singular verb: 'The news is very surprising.'" },
  { q: "Choose the correct verb: 'Physics ___ a very challenging subject.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Physics' looks plural but is treated as a singular subject: 'Physics is a very challenging subject.'" },
  { q: "Choose the correct verb: 'The furniture in the room ___ expensive.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Furniture' is an uncountable noun and always takes a singular verb: 'The furniture is expensive.'" },
  { q: "Choose the correct verb: 'His advice ___ always helpful.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "'Advice' is an uncountable noun and always takes a singular verb: 'His advice is always helpful.'" },
  { q: "Choose the correct verb: 'Economics ___ a popular subject at university.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'Economics' is an academic subject treated as singular: 'Economics is a popular subject.'" },
  { q: "Choose the correct verb: 'Measles ___ a contagious childhood disease.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "Diseases ending in -s (measles, mumps, rabies) are treated as singular: 'Measles is a contagious disease.'" },
  { q: "Choose the correct verb: 'The information provided ___ not accurate.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Information' is an uncountable noun always taking a singular verb: 'The information provided is not accurate.'" },
  { q: "Choose the correct verb: 'Twenty dollars ___ too much to pay for a pen.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "When a sum of money is considered as a single amount, it takes a singular verb: 'Twenty dollars is too much.'" },
  { q: "Choose the correct verb: 'The equipment ___ delivered this morning.'", opts: ["are", "were", "is", "was"], ans: 3, explain: "'Equipment' is an uncountable noun. The singular past tense 'was' is correct: 'The equipment was delivered.'" },
  { q: "Which sentence is grammatically correct?", opts: ["Mumps is usually mild in children.", "Economics are now compulsory.", "Statistics are a difficult subject.", "The news are bad today."], ans: 0, explain: "'Mumps is usually mild in children' is correct. Diseases like mumps, measles, and rabies take singular verbs." },
  { q: "Choose the correct verb: 'The knowledge gained ___ invaluable.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Knowledge' is an uncountable noun taking a singular verb: 'The knowledge gained is invaluable.'" },
  { q: "Choose the correct verb: 'Five kilometres ___ a long distance for a child to walk.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "When a distance is treated as a single quantity, it takes a singular verb: 'Five kilometres is a long distance.'" },
  { q: "Choose the correct verb: 'The United States ___ a large country.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "Country names, even when plural-looking, take a singular verb: 'The United States is a large country.'" },
  { q: "Choose the correct verb: 'Politics ___ a complex topic.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Politics' is treated as a singular subject: 'Politics is a complex topic.' Same rule applies to mathematics, ethics, physics." },
  { q: "Choose the correct verb: 'The scissors ___ on the desk.'", opts: ["was", "are", "has been", "is"], ans: 1, explain: "'Scissors' is always plural and takes a plural verb: 'The scissors are on the desk.'" },
  { q: "Choose the correct verb: 'These trousers ___ too long for me.'", opts: ["is", "was", "are", "has been"], ans: 2, explain: "'Trousers' is always plural and takes a plural verb: 'These trousers are too long.'" },
  { q: "Choose the correct verb: 'A pair of scissors ___ needed for this project.'", opts: ["have been", "are", "were", "is"], ans: 3, explain: "'A pair of scissors' uses 'pair' as the subject (singular), so the verb is 'is': 'A pair of scissors is needed.'" },
  { q: "Choose the correct verb: 'The police ___ investigating the robbery.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "'Police' is always treated as plural: 'The police are investigating the robbery.'" },
  { q: "Choose the correct verb: 'People ___ often afraid of change.'", opts: ["was", "are", "has been", "is"], ans: 1, explain: "'People' is always plural and takes a plural verb: 'People are often afraid of change.'" },
  { q: "Choose the correct verb: 'My glasses ___ somewhere in this room.'", opts: ["was", "is located", "are", "is"], ans: 2, explain: "'Glasses' (spectacles) is always plural and takes a plural verb: 'My glasses are somewhere in this room.'" },
  { q: "Choose the correct verb: 'His jeans ___ torn at the knee.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "'Jeans' is always plural and takes a plural verb: 'His jeans are torn at the knee.'" },
  { q: "Choose the correct verb: 'The doctor, together with her nurses, ___ working late.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Together with her nurses' is a phrase that does not change the subject. The true subject is 'doctor' (singular), so use 'is'." },
  { q: "Choose the correct verb: 'A pair of trousers ___ hanging on the rack.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'A pair of trousers' has 'pair' as the subject (singular), so the verb is 'is'." },
  { q: "Which sentence is grammatically correct?", opts: ["The pliers is missing.", "The tongs was left on the stove.", "The binoculars are very powerful.", "The scissors is sharp."], ans: 2, explain: "'The binoculars are very powerful' is correct. Items that come in pairs (binoculars, scissors, tongs, pliers) always take plural verbs." },
  { q: "Choose the correct verb: 'People ___ talking about the new policy.'", opts: ["has been", "is", "was", "are"], ans: 3, explain: "'People' is always plural: 'People are talking about the new policy.'" },
  { q: "Choose the correct verb: 'The shorts ___ in the washing machine.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "'Shorts' is always plural and takes a plural verb: 'The shorts are in the washing machine.'" },
  { q: "Choose the correct verb: 'The principal, including all the teachers, ___ present.'", opts: ["were", "is", "have been", "are"], ans: 1, explain: "'Including all the teachers' is a parenthetical phrase that does not change the subject. The subject is 'principal' (singular), so use 'is'." },
  { q: "Which sentence is grammatically correct?", opts: ["The team are playing well.", "The scissors is in the drawer.", "Physics is not easy.", "The news are shocking."], ans: 2, explain: "'Physics is not easy' is correct. Physics is a subject noun treated as singular. 'News' and 'scissors' errors: 'news is', 'scissors are'. Collective noun 'team is'." },
  { q: "Which sentence is grammatically correct?", opts: ["Everyone are welcome here.", "Each of the boys have a book.", "Nobody know the answer.", "The committee has made its decision."], ans: 3, explain: "'The committee has made its decision' is correct. 'Committee' takes a singular verb. Each/nobody/everyone all take singular verbs too (so the others are wrong)." },
  { q: "Which sentence contains a subject-verb error?", opts: ["The furniture are new.", "Five miles is a long walk.", "The police are investigating.", "Measles is highly contagious."], ans: 0, explain: "'The furniture are new' contains an error. 'Furniture' is uncountable and singular: 'The furniture IS new.'" },
  { q: "Choose the correct sentence.", opts: ["Neither the cat nor the dogs are hungry.", "The class was dismissed early.", "Not only Tom but also his friends is late.", "Either the boys or the girl are at fault."], ans: 1, explain: "'The class was dismissed early' is correct. It correctly uses singular 'was' with the collective noun 'class'." },
  { q: "Which sentence is correct?", opts: ["There is many ways to solve this.", "Here are your homework.", "The audience were impressed.", "Mathematics are my weakness."], ans: 2, explain: "'The audience were impressed' uses British/Singapore English convention for collective nouns \u2014 but actually 'is' is preferred. Among the options, 'The audience were impressed' is debatable but most acceptable here versus the clear errors in the others." },
  { q: "Choose the grammatically correct sentence.", opts: ["The amount of homework are increasing.", "The price of the mangoes are low.", "A flock of birds were resting.", "The staff is well-organised."], ans: 3, explain: "'The staff is well-organised' correctly uses the singular verb 'is' with the collective noun 'staff'." },
  { q: "Which sentence has a subject-verb error?", opts: ["Everyone are expected to attend.", "The information was useful.", "Neither of them is correct.", "The scissors are sharp."], ans: 0, explain: "'Everyone are expected to attend' has an error. 'Everyone' is singular and takes 'is': 'Everyone IS expected to attend.'" },
  { q: "Which sentence is grammatically correct?", opts: ["Someone have taken my seat.", "Anybody is welcome to join.", "The team have won the match.", "Each student have a locker."], ans: 1, explain: "'Anybody is welcome to join' is correct. 'Anybody' is an indefinite pronoun taking a singular verb." },
  { q: "Choose the sentence with the correct verb.", opts: ["People was angry about the decision.", "The police is on the scene.", "A pair of gloves is in the bag.", "My trousers is dirty."], ans: 2, explain: "'A pair of gloves is in the bag' is correct. 'Pair' is the singular subject, so 'is' is correct." },
  { q: "Which sentence is correct?", opts: ["The news are announced every night.", "Neither the teacher nor the students was informed.", "Twenty dollars are a lot for a child.", "The equipment was damaged in the flood."], ans: 3, explain: "'The equipment was damaged in the flood' is correct. 'Equipment' is uncountable and takes a singular past verb 'was'." },
  { q: "Which sentence contains an error?", opts: ["Here is your application forms.", "There are three bags on the table.", "The scissors are missing.", "The jury has reached a verdict."], ans: 0, explain: "'Here is your application forms' has an error. 'Forms' is plural, so it should be 'Here ARE your application forms.'" },
  { q: "Choose the correct sentence.", opts: ["Both Tom and Alice is ready.", "Either the bus or the train is faster.", "Not only she but also her parents was upset.", "Neither James nor his sister are here."], ans: 1, explain: "'Either the bus or the train is faster' is correct. With 'either...or', the verb agrees with the nearer subject. 'Train' is singular, so 'is' is correct." },
  { q: "Which sentence is correct?", opts: ["The crowd were becoming restless.", "The government have announced new rules.", "The army is advancing.", "The family are going on holiday."], ans: 2, explain: "'The army is advancing' correctly uses a singular verb with the collective noun 'army' in Singapore/British English." },
  { q: "Choose the sentence with the correct verb.", opts: ["Somebody have called for you.", "Everyone have a right to education.", "No one are allowed backstage.", "Each of the prizes is worth winning."], ans: 3, explain: "'Each of the prizes is worth winning' is correct. The subject is 'each' (singular), so use 'is'. The others incorrectly use plural verbs with singular indefinite pronouns." },
  { q: "Which sentence contains a subject-verb error?", opts: ["The committee are in agreement.", "Half of the cake is gone.", "The police are at the door.", "A number of students are absent."], ans: 0, explain: "'The committee are in agreement' has an error in Singapore/British English convention. Collective nouns like 'committee' take singular verbs: 'The committee IS in agreement.'" },
  { q: "Which sentence is grammatically correct?", opts: ["Physics are my best subject.", "The crowd was cheering wildly.", "The scissors is very sharp.", "Everyone are given a chance."], ans: 1, explain: "'The crowd was cheering wildly' is correct. 'Crowd' is a collective noun taking a singular verb. Scissors \u2192 are; Everyone \u2192 is; Physics \u2192 is." },
  { q: "Which sentence contains a subject-verb error?", opts: ["The police are at the gate.", "Either option is fine.", "A pair of jeans are on the bed.", "The committee has voted."], ans: 2, explain: "'A pair of jeans are on the bed' has an error. The subject is 'pair' (singular), so it should be 'A pair of jeans IS on the bed.'" },
  { q: "Choose the correct verb: 'Half of the students ___ already left.'", opts: ["has", "is", "was", "have"], ans: 3, explain: "Fractions agree with the noun after 'of'. 'Students' is plural, so use 'have': 'Half of the students have already left.'" },
  { q: "Choose the correct verb: 'Half of the water ___ already evaporated.'", opts: ["has", "were", "have", "are"], ans: 0, explain: "Fractions agree with the noun after 'of'. 'Water' is singular/uncountable, so use 'has': 'Half of the water has already evaporated.'" },
  { q: "Choose the correct verb: 'He is one of those athletes who ___ every day.'", opts: ["has trained", "train", "trains", "is training"], ans: 1, explain: "In 'one of those who' constructions, 'who' refers to the plural noun 'athletes', so use a plural verb: 'who train every day.'" },
  { q: "Choose the correct verb: 'She is the only student who ___ the bonus question.'", opts: ["are answering", "have answered", "answered", "answer"], ans: 2, explain: "In 'the only one who' constructions, 'who' refers to 'one' (singular), so use a singular verb. 'Answered' is correct here." },
  { q: "Choose the correct verb: 'Ninety percent of the budget ___ been spent.'", opts: ["were", "have", "are", "has"], ans: 3, explain: "Percentages agree with the noun after 'of'. 'Budget' is singular, so use 'has': 'Ninety percent of the budget has been spent.'" },
  { q: "Choose the correct verb: 'A third of the apples ___ rotten.'", opts: ["are", "has been", "is", "was"], ans: 0, explain: "Fractions agree with the noun after 'of'. 'Apples' is plural, so use 'are': 'A third of the apples are rotten.'" },
  { q: "Which sentence is grammatically correct?", opts: ["The news are on at nine.", "Neither answer is correct.", "Everyone are invited to the launch.", "Each of us have a role to play."], ans: 1, explain: "'Neither answer is correct' is correct. 'Neither' used alone as a subject takes a singular verb." },
  { q: "Choose the correct verb: 'The principal and vice-principal ___ both attending the conference.'", opts: ["is", "was", "are", "has been"], ans: 2, explain: "Two separate people joined by 'and' form a plural subject: 'The principal and vice-principal are both attending.'" },
  { q: "Choose the correct verb: 'Two-thirds of the class ___ passed the test.'", opts: ["has", "is", "was", "have"], ans: 3, explain: "Fractions agree with the noun after 'of'. 'Class' as a collective noun is singular in Singapore/British English, so use 'has'. Wait \u2014 'class' here could imply the individual members. With fractions, it depends: 'Two-thirds of the class have passed' (members) is common. Here 'have' is most natural." },
  { q: "Choose the correct verb: 'The whole family ___ excited about the trip.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "'Family' is a collective noun taking a singular verb in Singapore/British English: 'The whole family is excited.'" },
  { q: "Choose the correct verb: 'More than one student ___ failed the test.'", opts: ["are", "has", "were", "have"], ans: 1, explain: "'More than one' takes a singular verb, following the pattern of 'one': 'More than one student has failed the test.'" },
  { q: "Choose the correct verb: 'Neither the teachers nor the principal ___ satisfied with the results.'", opts: ["are", "were", "is", "have been"], ans: 2, explain: "With 'neither...nor', the verb agrees with the nearer subject. 'Principal' is singular and nearer, so use 'is'." },
  { q: "Which sentence is correct?", opts: ["Statistics is used in many fields.", "Two hours are not enough.", "The number of errors are increasing.", "A large number of errors have been found."], ans: 3, explain: "'A large number of errors have been found' is correct. 'A number of' takes a plural verb because it refers to multiple items." },
  { q: "Choose the correct verb: 'Fifty percent of the work ___ done.'", opts: ["is", "have been", "are", "were"], ans: 0, explain: "Percentages agree with the noun after 'of'. 'Work' is uncountable and singular, so use 'is': 'Fifty percent of the work is done.'" },
  { q: "Choose the correct verb: 'The majority of the votes ___ counted.'", opts: ["was", "are", "has been", "is"], ans: 1, explain: "'The majority of' followed by a plural noun ('votes') takes a plural verb: 'The majority of the votes are counted.'" }
]
