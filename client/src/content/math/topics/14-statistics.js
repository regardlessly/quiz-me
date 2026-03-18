export const notes = `
<div class="notes-card">
<h3>Types of Data</h3>
<ul>
<li><strong>Qualitative data</strong> describes qualities or categories (e.g. favourite colour, type of transport). Cannot be measured numerically.</li>
<li><strong>Quantitative data</strong> is numerical and can be measured or counted (e.g. height, number of siblings).</li>
<li><strong>Discrete data</strong> can only take specific countable values, often whole numbers (e.g. number of students = 3, 4, 5...).</li>
<li><strong>Continuous data</strong> can take any value within a range and is obtained by measuring (e.g. height = 1.62 m, temperature = 28.4 &deg;C).</li>
<li><strong>Primary data</strong> is collected first-hand by the researcher (surveys, experiments, observations).</li>
<li><strong>Secondary data</strong> is obtained from existing sources (books, websites, government reports).</li>
</ul>
</div>

<div class="notes-card">
<h3>Frequency Tables</h3>
<ul>
<li>A <strong>frequency table</strong> lists each data value (or category) with its tally and frequency (count).</li>
<li><strong>Tally marks</strong> are grouped in fives: |||| is 4, <s>||||</s> is 5.</li>
<li>A <strong>grouped frequency table</strong> organises data into <strong>class intervals</strong> (e.g. 1&ndash;5, 6&ndash;10, 11&ndash;15).</li>
<li>Class intervals must not overlap and must cover all data values.</li>
<li><strong>Total frequency</strong> = sum of all frequencies = total number of data items.</li>
<li><strong>Modal class</strong> = the class interval with the highest frequency.</li>
</ul>
</div>

<div class="notes-card">
<h3>Mean, Median, Mode</h3>
<ul>
<li><strong>Mean</strong> = sum of all values &divide; number of values. Affected by extreme values (outliers).</li>
<li><strong>Median</strong> = the middle value when data is arranged in order. For n values: if n is odd, median is the ((n+1)/2)th value; if n is even, median is the average of the (n/2)th and (n/2+1)th values.</li>
<li><strong>Mode</strong> = the value that appears most frequently. There can be more than one mode, or no mode if all values appear equally.</li>
<li>Use mean for numerical data without outliers; median when there are outliers; mode for categorical data or most popular item.</li>
<li>From a frequency table: Mean = &Sigma;(f &times; x) / &Sigma;f, where f = frequency and x = data value.</li>
</ul>
</div>

<div class="notes-card">
<h3>Mean from Grouped Data</h3>
<ul>
<li>For grouped data, we use the <strong>midpoint</strong> of each class interval to estimate the mean.</li>
<li>Midpoint = (lower boundary + upper boundary) / 2. Example: class 10&ndash;19 has midpoint (10+19)/2 = 14.5.</li>
<li><strong>Estimated mean</strong> = &Sigma;(f &times; midpoint) / &Sigma;f.</li>
<li>We cannot find the <strong>exact</strong> mean from grouped data because individual values are unknown &mdash; only an estimate.</li>
<li>The <strong>modal class</strong> is the class interval with the highest frequency (not an exact mode value).</li>
</ul>
</div>

<div class="notes-card">
<h3>Bar Charts and Pictograms</h3>
<ul>
<li><strong>Bar chart rules</strong>: bars have equal widths, gaps between bars (discrete data), labelled axes (x = categories, y = frequency), include a title.</li>
<li>Bars can be drawn vertically or horizontally.</li>
<li>A <strong>pictogram</strong> uses symbols to represent data. A <strong>key</strong> shows what each symbol represents (e.g. one icon = 5 people).</li>
<li>Half symbols represent half the key value. Quarter symbols may also be used.</li>
<li>When reading a bar chart, check the scale on the frequency axis carefully.</li>
</ul>
</div>

<div class="notes-card">
<h3>Pie Charts</h3>
<ul>
<li>A pie chart shows data as sectors of a circle. The full circle = 360&deg;.</li>
<li><strong>Angle of a sector</strong> = (frequency / total frequency) &times; 360&deg;.</li>
<li>To find frequency from an angle: frequency = (angle / 360&deg;) &times; total.</li>
<li>All sector angles must add up to 360&deg;.</li>
<li>When <strong>comparing</strong> two pie charts, you must know the total for each &mdash; a larger sector does not always mean a larger frequency if totals differ.</li>
</ul>
</div>

<div class="notes-card">
<h3>Line Graphs and Histograms</h3>
<ul>
<li><strong>Line graphs</strong> plot data points connected by straight lines. Best for showing <strong>trends over time</strong> (continuous data on x-axis).</li>
<li><strong>Histograms</strong> look like bar charts but have <strong>no gaps</strong> between bars because the data is continuous. Frequency is on the y-axis.</li>
<li>A <strong>dot plot</strong> places a dot above a number line for each data value &mdash; simple way to show distribution.</li>
<li><strong>Stem-and-leaf plots</strong>: the stem is the leading digit(s), the leaf is the last digit. Data must be <strong>ordered</strong> and a <strong>key</strong> must be provided (e.g. 3|5 = 35).</li>
<li>Back-to-back stem-and-leaf plots compare two data sets sharing the same stem.</li>
</ul>
</div>
`;

const defined_meta = { id: 14, sem: 2, title: 'Statistical Data Handling', desc: 'Charts, graphs, frequency tables, data interpretation' };

const questions = [
  { q: 'Which of the following is an example of qualitative data?', opts: ['Favourite colour of students', 'Heights of students in cm', 'Number of siblings', 'Temperature readings'], ans: 0, explain: 'Favourite colour describes a quality/category, not a numerical measurement.' },
  { q: 'The number of goals scored in a football match is an example of:', opts: ['Continuous data', 'Discrete data', 'Qualitative data', 'Secondary data'], ans: 1, explain: 'Goals are countable whole numbers, making this discrete quantitative data.' },
  { q: 'Which data type can take any value within a range?', opts: ['Discrete data', 'Qualitative data', 'Continuous data', 'Categorical data'], ans: 2, explain: 'Continuous data is obtained by measuring and can take any value in a range (e.g. 1.5, 1.52, 1.523...).' },
  { q: 'A researcher conducts a survey by interviewing students. This is an example of:', opts: ['Secondary data', 'Continuous data', 'Qualitative data', 'Primary data'], ans: 3, explain: 'Primary data is collected first-hand by the researcher through surveys, experiments, or observations.' },
  { q: 'Data obtained from a government website is classified as:', opts: ['Secondary data', 'Primary data', 'Discrete data', 'Continuous data'], ans: 0, explain: 'Secondary data is obtained from existing sources like books, websites, or government reports.' },
  { q: 'Which of the following is discrete data?', opts: ['Mass of a bag of rice', 'Number of cars in a car park', 'Time taken to run 100 m', 'Length of a ribbon'], ans: 1, explain: 'Number of cars is countable and takes whole number values, so it is discrete.' },
  { q: '\'The brand of mobile phone a person uses\' is an example of:', opts: ['Discrete data', 'Continuous data', 'Qualitative data', 'Primary data'], ans: 2, explain: 'Brand names are categories describing a quality, not numerical values.' },
  { q: 'The temperature of water measured every hour is:', opts: ['Discrete quantitative data', 'Qualitative data', 'Secondary data', 'Continuous quantitative data'], ans: 3, explain: 'Temperature is measured on a continuous scale and is numerical, so it is continuous quantitative data.' },
  { q: 'Which of the following CANNOT be classified as quantitative data?', opts: ['Type of pet owned', 'Shoe size', 'Number of books read', 'Height in metres'], ans: 0, explain: 'Type of pet is a category (qualitative), not a numerical value.' },
  { q: 'A student counts the number of red cars passing the school gate. The data collected is:', opts: ['Secondary and discrete', 'Primary and discrete', 'Primary and continuous', 'Secondary and continuous'], ans: 1, explain: 'The student collects the data first-hand (primary) and counts whole numbers (discrete).' },
  { q: 'Which is an example of continuous data?', opts: ['The number of students absent', 'The number of pages in a book', 'The mass of apples in a basket', 'The shoe size of a student'], ans: 2, explain: 'Mass is measured and can take any value within a range, making it continuous.' },
  { q: 'Data that describes categories or labels is called:', opts: ['Quantitative data', 'Continuous data', 'Discrete data', 'Qualitative data'], ans: 3, explain: 'Qualitative data describes qualities or categories such as colour, gender, or type.' },
  { q: 'Which statement about primary data is TRUE?', opts: ['It is collected directly by the researcher', 'It is always more accurate than secondary data', 'It comes from published reports', 'It is faster to collect than secondary data'], ans: 0, explain: 'Primary data is collected first-hand by the researcher through their own surveys or experiments.' },
  { q: 'The heights of 30 students measured to the nearest cm give:', opts: ['Discrete data', 'Continuous data', 'Qualitative data', 'Secondary data'], ans: 1, explain: 'Height is a measurement that can take any value in a range, so it is continuous even when rounded.' },
  { q: 'Which of the following is NOT a source of secondary data?', opts: ['A newspaper article', 'Census data from the government', 'Conducting a class survey', 'A textbook table'], ans: 2, explain: 'Conducting a survey yourself is collecting primary data. The other options are existing sources (secondary).' },
  { q: 'A variable that can only take integer values is:', opts: ['Continuous', 'Qualitative', 'Secondary', 'Discrete'], ans: 3, explain: 'Discrete data takes specific countable values, often integers like 0, 1, 2, 3...' },
  { q: 'Which best describes the data: \'ratings of a movie as Excellent, Good, Fair, Poor\'?', opts: ['Qualitative data', 'Discrete data', 'Continuous data', 'Primary data'], ans: 0, explain: 'These are descriptive categories, making the data qualitative.' },
  { q: 'The length of time students spend on homework each day is:', opts: ['Discrete data', 'Continuous data', 'Qualitative data', 'Categorical data'], ans: 1, explain: 'Time is measured and can take any value within a range, so it is continuous.' },
  { q: 'Which of the following is a key difference between discrete and continuous data?', opts: ['Discrete data uses decimals, continuous does not', 'Continuous data is always whole numbers', 'Discrete data is counted, continuous data is measured', 'There is no real difference'], ans: 2, explain: 'Discrete data involves counting (whole numbers), while continuous data involves measuring (any value in a range).' },
  { q: 'A student finds population data from a census report. This data is:', opts: ['Primary and quantitative', 'Secondary and qualitative', 'Primary and qualitative', 'Secondary and quantitative'], ans: 3, explain: 'Census data from a report is from an existing source (secondary) and population numbers are quantitative.' },
  { q: 'In a frequency table, the tally \'||||  ||\' represents:', opts: ['7', '6', '8', '5'], ans: 0, explain: '|||| = 5, || = 2, so the total is 5 + 2 = 7.' },
  { q: 'The total frequency in a frequency table represents:', opts: ['The number of categories', 'The total number of data items', 'The largest data value', 'The range of the data'], ans: 1, explain: 'Total frequency = sum of all individual frequencies = total number of data items collected.' },
  { q: 'In a grouped frequency table with classes 1-5, 6-10, 11-15, what is the class width?', opts: ['4', '6', '5', '10'], ans: 2, explain: 'Class width = upper boundary - lower boundary + 1 = 5 - 1 + 1 = 5 (or count: 1,2,3,4,5).' },
  { q: 'A frequency table shows scores: 2(f=3), 3(f=5), 4(f=7), 5(f=4), 6(f=1). What is the total frequency?', opts: ['25', '15', '30', '20'], ans: 3, explain: 'Total frequency = 3 + 5 + 7 + 4 + 1 = 20.' },
  { q: 'Which class interval contains the value 17 in the grouping 1-10, 11-20, 21-30?', opts: ['11-20', '1-10', '21-30', '17-20'], ans: 0, explain: '17 falls within the class interval 11-20.' },
  { q: 'The modal class in a grouped frequency table is:', opts: ['The class with the lowest frequency', 'The class with the highest frequency', 'The middle class', 'The class containing the median'], ans: 1, explain: 'The modal class is the class interval that has the highest frequency.' },
  { q: 'A frequency table has classes 0-4(f=6), 5-9(f=12), 10-14(f=8), 15-19(f=4). The modal class is:', opts: ['0-4', '10-14', '5-9', '15-19'], ans: 2, explain: 'The class 5-9 has the highest frequency of 12, so it is the modal class.' },
  { q: 'Why must class intervals in a grouped frequency table not overlap?', opts: ['To make the table look neat', 'To ensure all classes have equal frequency', 'To make calculations easier', 'So each data value belongs to exactly one class'], ans: 3, explain: 'Non-overlapping intervals ensure each data value can be placed in one and only one class.' },
  { q: 'In a frequency table, if the frequencies are 4, 8, 12, 6, what fraction of the data is in the third category?', opts: ['12/30 = 2/5', '12/4 = 3', '12/24 = 1/2', '12/20 = 3/5'], ans: 0, explain: 'Total frequency = 4 + 8 + 12 + 6 = 30. Fraction = 12/30 = 2/5.' },
  { q: 'A grouped frequency table shows: 1-10(f=5), 11-20(f=9), 21-30(f=14), 31-40(f=7). How many data items are 21 or above?', opts: ['14', '21', '7', '35'], ans: 1, explain: 'Data items 21 or above = frequency of 21-30 + frequency of 31-40 = 14 + 7 = 21.' },
  { q: 'The tally \'||||  ||||  |||\' represents the frequency:', opts: ['12', '14', '13', '15'], ans: 2, explain: '|||| = 5, |||| = 5, ||| = 3. Total = 5 + 5 + 3 = 13.' },
  { q: 'Which of the following is NOT a feature of a good frequency table?', opts: ['A tally column', 'A frequency column', 'A clear title', 'Overlapping class intervals'], ans: 3, explain: 'Class intervals must not overlap so each data point belongs to exactly one class.' },
  { q: 'In a frequency table with values 1(f=2), 2(f=5), 3(f=8), 4(f=5), the value with the lowest frequency is:', opts: ['1', '2', '3', '4'], ans: 0, explain: 'Value 1 has a frequency of 2, which is the lowest.' },
  { q: 'A data set has 50 items grouped into 5 equal classes. If four classes have frequencies 8, 12, 15, 7, what is the frequency of the fifth class?', opts: ['10', '8', '6', '12'], ans: 1, explain: 'Total = 50. Fifth class frequency = 50 - (8 + 12 + 15 + 7) = 50 - 42 = 8.' },
  { q: 'Grouped frequency tables are used when:', opts: ['The data is qualitative', 'There are very few data items', 'There is a large range of data values', 'The data has no pattern'], ans: 2, explain: 'Grouped frequency tables organise large ranges of data into manageable class intervals.' },
  { q: 'In the frequency table: Score 1(f=4), 2(f=6), 3(f=10), 4(f=6), 5(f=4), the percentage of students scoring 3 is:', opts: ['10%', '25%', '50%', '33.3%'], ans: 3, explain: 'Total = 4+6+10+6+4 = 30. Percentage = (10/30) x 100% = 33.3%.' },
  { q: 'A class interval is written as \'10 < x <= 20\'. This means:', opts: ['x is greater than 10 and at most 20', 'x is at least 10 and less than 20', 'x is exactly 10 or 20', 'x is between 10 and 20 inclusive'], ans: 0, explain: '\'10 < x <= 20\' means x is strictly greater than 10 and less than or equal to 20.' },
  { q: 'If a frequency table has 6 categories with frequencies 3, 7, 2, 9, 5, 4, the cumulative frequency up to the 4th category is:', opts: ['9', '21', '12', '30'], ans: 1, explain: 'Cumulative frequency = 3 + 7 + 2 + 9 = 21.' },
  { q: 'Which statement about frequency tables is FALSE?', opts: ['The sum of frequencies equals the total number of data items', 'Tally marks are grouped in fives', 'Each data value must appear in at least two classes', 'Class intervals should not have gaps'], ans: 2, explain: 'Each data value must appear in exactly one class, not at least two.' },
  { q: 'A frequency table for shoe sizes shows: 36(f=3), 37(f=8), 38(f=12), 39(f=7), 40(f=5). How many students have shoe size 38 or larger?', opts: ['12', '20', '27', '24'], ans: 3, explain: 'Shoe size >= 38: 12 + 7 + 5 = 24 students.' },
  { q: 'Find the mean of: 4, 7, 9, 12, 8.', opts: ['8', '7', '9', '12'], ans: 0, explain: 'Mean = (4 + 7 + 9 + 12 + 8) / 5 = 40 / 5 = 8.' },
  { q: 'Find the median of: 3, 7, 1, 9, 5.', opts: ['3', '5', '7', '9'], ans: 1, explain: 'Arrange in order: 1, 3, 5, 7, 9. The middle (3rd) value is 5.' },
  { q: 'Find the mode of: 2, 5, 3, 5, 7, 5, 8.', opts: ['2', '7', '5', '3'], ans: 2, explain: '5 appears 3 times, more than any other value. Mode = 5.' },
  { q: 'The mean of 6 numbers is 10. What is the sum of the 6 numbers?', opts: ['10', '16', '36', '60'], ans: 3, explain: 'Mean = sum / count, so sum = mean x count = 10 x 6 = 60.' },
  { q: 'Find the median of: 2, 4, 6, 8.', opts: ['5', '4', '6', '3'], ans: 0, explain: 'With an even number of values, median = average of 2nd and 3rd values = (4 + 6) / 2 = 5.' },
  { q: 'A data set has values: 1, 1, 2, 3, 3, 3, 4, 5. The mode is:', opts: ['1', '3', '2', '4'], ans: 1, explain: '3 appears 3 times, which is more than any other value. Mode = 3.' },
  { q: 'The mean of 5, 8, x, 12, 10 is 9. Find x.', opts: ['9', '8', '10', '7'], ans: 2, explain: 'Sum = 9 x 5 = 45. So 5 + 8 + x + 12 + 10 = 45, giving x = 45 - 35 = 10.' },
  { q: 'Find the median of: 12, 5, 8, 3, 15, 7.', opts: ['8', '7', '5', '7.5'], ans: 3, explain: 'Ordered: 3, 5, 7, 8, 12, 15. Median = (7 + 8) / 2 = 7.5.' },
  { q: 'Which measure of central tendency is most affected by extreme values?', opts: ['Mean', 'Median', 'Mode', 'Range'], ans: 0, explain: 'The mean is pulled towards extreme values (outliers), while median and mode are not.' },
  { q: 'A frequency table shows: 1(f=2), 2(f=4), 3(f=6), 4(f=3). Find the mean.', opts: ['2.5', '2.67', '3', '2'], ans: 1, explain: 'Mean = (1x2 + 2x4 + 3x6 + 4x3) / (2+4+6+3) = (2+8+18+12)/15 = 40/15 = 2.67.' },
  { q: 'The scores of 7 students are: 45, 62, 55, 70, 55, 80, 55. The mode is:', opts: ['45', '70', '55', '62'], ans: 2, explain: '55 appears 3 times, which is the most frequent. Mode = 55.' },
  { q: 'If every value in a data set is increased by 5, the mean will:', opts: ['Stay the same', 'Double', 'Increase by 25', 'Increase by 5'], ans: 3, explain: 'Adding 5 to every value increases the sum by 5n, so the mean increases by 5n/n = 5.' },
  { q: 'Find the mean from the frequency table: x=10(f=3), x=20(f=5), x=30(f=2).', opts: ['19', '20', '18', '15'], ans: 0, explain: 'Mean = (10x3 + 20x5 + 30x2) / (3+5+2) = (30+100+60)/10 = 190/10 = 19.' },
  { q: 'The median of 15 ordered values is the:', opts: ['7th value', '8th value', '7.5th value', '9th value'], ans: 1, explain: 'For 15 values, median position = (15+1)/2 = 8th value.' },
  { q: 'A class has test scores with mean 72 for 20 students and mean 68 for 30 students. The overall mean is:', opts: ['70', '71', '69.6', '68.8'], ans: 2, explain: 'Overall mean = (72x20 + 68x30) / (20+30) = (1440 + 2040) / 50 = 3480/50 = 69.6.' },
  { q: 'Which average is best for finding the most popular shoe size?', opts: ['Mean', 'Median', 'Range', 'Mode'], ans: 3, explain: 'Mode identifies the most frequently occurring value, which is best for finding the most popular item.' },
  { q: 'The mean of 10 numbers is 15. One number (25) is removed. What is the new mean?', opts: ['13.9 (to 1 d.p.)', '14', '15', '12.5'], ans: 0, explain: 'Sum = 15 x 10 = 150. New sum = 150 - 25 = 125. New mean = 125/9 = 13.9 (1 d.p.).' },
  { q: 'Data: 3, 3, 5, 7, 7, 7, 9. Which statement is correct?', opts: ['Mode = 3 and median = 5', 'Mode = 7 and median = 7', 'Mode = 7 and median = 5', 'Mode = 5 and median = 7'], ans: 1, explain: '7 appears 3 times (most frequent), so mode = 7. The 4th value (middle of 7) is 7, so median = 7.' },
  { q: 'In a frequency table: 2(f=5), 4(f=8), 6(f=7), 8(f=5). The median lies at which value?', opts: ['6', '2', '4', '8'], ans: 2, explain: 'Total = 25. Median is 13th value. Cumulative: 5, 13. The 13th value falls at x = 4.' },
  { q: 'The mean of a, a, a, b is 10, and a = 8. Find b.', opts: ['12', '14', '10', '16'], ans: 3, explain: 'Sum = 3a + b = 10 x 4 = 40. So 24 + b = 40, giving b = 16.' },
  { q: 'If the mean of 8, 12, 15, x, 20 is 14, what is x?', opts: ['15', '14', '13', '16'], ans: 0, explain: 'Sum = 14 x 5 = 70. So 8 + 12 + 15 + x + 20 = 70, giving x = 70 - 55 = 15.' },
  { q: 'Which measure of central tendency can have more than one value in a data set?', opts: ['Mean', 'Mode', 'Median', 'Range'], ans: 1, explain: 'A data set can be bimodal (two modes) or multimodal. Mean and median are always single values.' },
  { q: 'The marks of 5 students are 60, 70, 80, 90, 100. If each mark is doubled, the new median is:', opts: ['80', '150', '160', '170'], ans: 2, explain: 'Original median = 80 (middle value). Doubling each mark gives new median = 80 x 2 = 160.' },
  { q: 'A data set has no mode. This means:', opts: ['The data has only one value', 'The mean equals the median', 'The data is not numerical', 'All values appear the same number of times'], ans: 3, explain: 'When no value appears more frequently than others, there is no mode.' },
  { q: 'In a frequency table: 5(f=4), 10(f=6), 15(f=10), 20(f=5). Find the sum of f times x.', opts: ['330', '300', '350', '280'], ans: 0, explain: 'Sum(fx) = 5x4 + 10x6 + 15x10 + 20x5 = 20 + 60 + 150 + 100 = 330.' },
  { q: 'What is the midpoint of the class interval 10-19?', opts: ['15', '14.5', '14', '10'], ans: 1, explain: 'Midpoint = (10 + 19) / 2 = 29 / 2 = 14.5.' },
  { q: 'Why can we only find an estimated mean from grouped data?', opts: ['The data is always inaccurate', 'Grouped data has too few values', 'Individual data values are unknown', 'The formula does not work for groups'], ans: 2, explain: 'In grouped data, we only know frequencies per class, not the exact individual values, so we use midpoints as estimates.' },
  { q: 'For the class interval 20-29, the midpoint used in calculating estimated mean is:', opts: ['25', '24', '20', '24.5'], ans: 3, explain: 'Midpoint = (20 + 29) / 2 = 49 / 2 = 24.5.' },
  { q: 'A grouped table shows: 1-10(f=5), 11-20(f=10), 21-30(f=5). The estimated mean is:', opts: ['15.5', '16', '14', '17'], ans: 0, explain: 'Midpoints: 5.5, 15.5, 25.5. Est. mean = (5.5x5 + 15.5x10 + 25.5x5) / 20 = (27.5 + 155 + 127.5) / 20 = 310 / 20 = 15.5.' },
  { q: 'The modal class of a grouped frequency table is:', opts: ['The class containing the median', 'The class with the highest frequency', 'The class with the largest midpoint', 'The middle class interval'], ans: 1, explain: 'The modal class is the class interval with the greatest frequency, not a single mode value.' },
  { q: 'Given classes 0-4(f=3), 5-9(f=7), 10-14(f=10), 15-19(f=5), the modal class is:', opts: ['5-9', '15-19', '10-14', '0-4'], ans: 2, explain: 'Class 10-14 has the highest frequency of 10.' },
  { q: 'What is the midpoint of the class interval 30-39?', opts: ['35', '34', '30', '34.5'], ans: 3, explain: 'Midpoint = (30 + 39) / 2 = 69 / 2 = 34.5.' },
  { q: 'Estimated mean uses midpoints because:', opts: ['We assume data is evenly spread within each class', 'Midpoints are always exact', 'It gives the same result as using raw data', 'Grouped data has no other method'], ans: 0, explain: 'Using midpoints assumes values are evenly distributed within each class interval, giving a reasonable estimate.' },
  { q: 'A table shows: 0-9(f=6), 10-19(f=14), 20-29(f=10). Find the sum of f times midpoint.', opts: ['450', '475', '500', '460'], ans: 1, explain: 'Midpoints: 4.5, 14.5, 24.5. Sum = 6x4.5 + 14x14.5 + 10x24.5 = 27 + 203 + 245 = 475.' },
  { q: 'For the class \'50 < x <= 60\', the midpoint is:', opts: ['50', '60', '55', '54.5'], ans: 2, explain: 'Midpoint = (50 + 60) / 2 = 110 / 2 = 55.' },
  { q: 'A grouped table: 1-5(f=4), 6-10(f=6), 11-15(f=8), 16-20(f=2). Estimated mean is:', opts: ['9.1', '8.5', '11', '10'], ans: 3, explain: 'Midpoints: 3, 8, 13, 18. Est. mean = (3x4 + 8x6 + 13x8 + 18x2) / 20 = (12 + 48 + 104 + 36) / 20 = 200 / 20 = 10.' },
  { q: 'Which of the following CANNOT be determined exactly from grouped data?', opts: ['The exact mean', 'The modal class', 'The total frequency', 'An estimate of the mean'], ans: 0, explain: 'From grouped data, individual values are lost, so only an estimated mean can be found, not the exact mean.' },
  { q: 'The midpoint of the class interval 25-34 is:', opts: ['30', '29.5', '29', '25'], ans: 1, explain: 'Midpoint = (25 + 34) / 2 = 59 / 2 = 29.5.' },
  { q: 'If the sum of f times midpoint is 640 and total frequency is 40, the estimated mean is:', opts: ['15', '17', '16', '14'], ans: 2, explain: 'Estimated mean = 640 / 40 = 16.' },
  { q: 'In a grouped frequency table, a class interval with frequency 0 means:', opts: ['The midpoint is zero', 'The class should be removed', 'The mean is zero', 'No data values fall in that range'], ans: 3, explain: 'A frequency of 0 means no data values were recorded in that particular class interval.' },
  { q: 'A grouped frequency table has 4 classes with midpoints 5, 15, 25, 35 and frequencies 10, 20, 15, 5. The estimated mean is:', opts: ['18', '15', '20', '17'], ans: 0, explain: 'Est. mean = (5x10 + 15x20 + 25x15 + 35x5) / 50 = (50 + 300 + 375 + 175) / 50 = 900 / 50 = 18.' },
  { q: 'When calculating estimated mean, using class boundaries gives midpoints that are:', opts: ['Always larger', 'The same as using integer class limits', 'Always smaller', 'Completely different'], ans: 1, explain: 'For classes like 10-19, midpoint = (10+19)/2 = 14.5. Using boundaries 9.5-19.5, midpoint = 14.5. Same result.' },
  { q: 'A table: 0-4(f=2), 5-9(f=5), 10-14(f=8), 15-19(f=5). The total number of data items is:', opts: ['15', '25', '20', '19'], ans: 2, explain: 'Total frequency = 2 + 5 + 8 + 5 = 20.' },
  { q: 'The estimated mean of grouped data is 12.5 with total frequency 40. Find the sum of f times midpoint.', opts: ['480', '520', '450', '500'], ans: 3, explain: 'Sum(f x midpoint) = estimated mean x total frequency = 12.5 x 40 = 500.' },
  { q: 'A grouped table: 0-9(f=3), 10-19(f=7), 20-29(f=6), 30-39(f=4). The estimated mean is:', opts: ['20', '19.25', '15', '22'], ans: 0, explain: 'Midpoints: 4.5, 14.5, 24.5, 34.5. Est. mean = (4.5x3 + 14.5x7 + 24.5x6 + 34.5x4) / 20 = (13.5 + 101.5 + 147 + 138) / 20 = 400 / 20 = 20.' },
  { q: 'In a bar chart, bars must:', opts: ['Touch each other with no gaps', 'Have equal widths with gaps between them', 'Have varying widths', 'Not have labels'], ans: 1, explain: 'Bar charts for discrete/categorical data have equal-width bars with gaps between them.' },
  { q: 'A pictogram key shows one symbol = 10 students. Three and a half symbols represent:', opts: ['30 students', '40 students', '35 students', '25 students'], ans: 2, explain: '3.5 symbols x 10 students per symbol = 35 students.' },
  { q: 'Which axis in a bar chart typically shows the frequency?', opts: ['The horizontal (x) axis', 'Both axes', 'Neither axis', 'The vertical (y) axis'], ans: 3, explain: 'In a standard vertical bar chart, the y-axis shows frequency and the x-axis shows categories.' },
  { q: 'A bar chart shows: Math=15, Science=20, English=10, History=5. How many more students chose Science than English?', opts: ['10', '15', '5', '20'], ans: 0, explain: 'Science - English = 20 - 10 = 10 more students.' },
  { q: 'In a pictogram, a half symbol represents:', opts: ['Zero', 'Half the value of a full symbol', 'A quarter of the value', 'The same as a full symbol'], ans: 1, explain: 'A half symbol represents exactly half the value that one full symbol represents.' },
  { q: 'A bar chart must include all of the following EXCEPT:', opts: ['A title', 'Labelled axes', 'Bars touching each other', 'Equal bar widths'], ans: 2, explain: 'In a bar chart (for categorical/discrete data), bars should NOT touch — there must be gaps.' },
  { q: 'A pictogram key: one star = 8 books. To show 20 books, you would draw:', opts: ['2 stars', '3 stars', '20 stars', '2 and a half stars'], ans: 3, explain: '20 / 8 = 2.5, so you draw 2 full stars and one half star.' },
  { q: 'Looking at a bar chart, which category is the mode?', opts: ['The category with the tallest bar', 'The category with the shortest bar', 'The middle bar', 'The average of all bars'], ans: 0, explain: 'The tallest bar represents the highest frequency, which corresponds to the mode.' },
  { q: 'A bar chart has a scale of 1 cm = 5 students. A bar of height 7 cm represents:', opts: ['7 students', '35 students', '12 students', '25 students'], ans: 1, explain: '7 cm x 5 students/cm = 35 students.' },
  { q: 'Which statement about bar charts is TRUE?', opts: ['Bars must always be vertical', 'The x-axis always shows frequency', 'The bars can be drawn horizontally or vertically', 'Bars must touch each other'], ans: 2, explain: 'Bar charts can be drawn with horizontal or vertical bars. Both orientations are valid.' },
  { q: 'A pictogram shows data for 4 days. Mon: 3 symbols, Tue: 5 symbols, Wed: 2 symbols, Thu: 4 symbols. If one symbol = 6 items, what is the total?', opts: ['14', '70', '90', '84'], ans: 3, explain: 'Total symbols = 3 + 5 + 2 + 4 = 14. Total items = 14 x 6 = 84.' },
  { q: 'Why are gaps left between bars in a bar chart?', opts: ['To show the data is discrete or categorical', 'To save space on the page', 'To make it look nicer', 'Because the data is continuous'], ans: 0, explain: 'Gaps indicate that the categories are separate and distinct (discrete/categorical data).' },
  { q: 'A bar chart shows sales: Jan=40, Feb=55, Mar=35, Apr=60. The range of sales is:', opts: ['60', '25', '35', '40'], ans: 1, explain: 'Range = highest - lowest = 60 - 35 = 25.' },
  { q: 'In a pictogram with key: one circle = 20 people, a quarter circle represents:', opts: ['10 people', '15 people', '5 people', '4 people'], ans: 2, explain: 'A quarter of 20 = 20/4 = 5 people.' },
  { q: 'A bar chart comparing favourite fruits shows equal bar heights for Apple and Mango. This means:', opts: ['They are the most popular', 'Their frequencies add up to the total', 'One is double the other', 'Apple and Mango have the same frequency'], ans: 3, explain: 'Equal bar heights mean equal frequencies — the same number of people chose each.' },
  { q: 'A student draws a bar chart but forgets the title. Which problem does this cause?', opts: ['The reader does not know what the chart is about', 'The bars will be the wrong height', 'The frequencies will be incorrect', 'The categories cannot be read'], ans: 0, explain: 'Without a title, the reader cannot determine the subject or context of the bar chart.' },
  { q: 'In a pictogram, if you need to represent 15 items and each symbol = 4 items, you need:', opts: ['3 and a half symbols', '3 and three-quarter symbols', '4 symbols', '3 symbols'], ans: 1, explain: '15 / 4 = 3.75, so you need 3 full symbols and a three-quarter symbol.' },
  { q: 'A bar chart uses a broken axis (zigzag) on the y-axis. This indicates:', opts: ['The data is incorrect', 'The scale changes partway up', 'Values between zero and the first marked value are skipped', 'Some bars are missing'], ans: 2, explain: 'A broken axis indicates that part of the scale is omitted, usually between 0 and the lowest data value.' },
  { q: 'Which type of chart is best for comparing quantities across categories?', opts: ['Pie chart', 'Line graph', 'Histogram', 'Bar chart'], ans: 3, explain: 'Bar charts are ideal for comparing quantities across different discrete categories.' },
  { q: 'A pictogram has key: one tree = 50 trees planted. Two and a half trees shown for Park A means:', opts: ['125 trees', '100 trees', '150 trees', '50 trees'], ans: 0, explain: '2.5 symbols x 50 trees/symbol = 125 trees.' },
  { q: 'In a pie chart, the total angle of all sectors is:', opts: ['180 degrees', '360 degrees', '100 degrees', '270 degrees'], ans: 1, explain: 'A pie chart is a full circle, which has 360 degrees.' },
  { q: 'If 25 out of 100 students chose Math, the angle for Math in a pie chart is:', opts: ['25 degrees', '45 degrees', '90 degrees', '180 degrees'], ans: 2, explain: 'Angle = (25/100) x 360 = 90 degrees.' },
  { q: 'A pie chart shows a sector of 72 degrees for \'Bus\'. If the total is 200 students, how many travel by bus?', opts: ['72', '36', '50', '40'], ans: 3, explain: 'Frequency = (72/360) x 200 = 0.2 x 200 = 40 students.' },
  { q: 'The angles in a pie chart for four categories are 90, 120, x, and 60. Find x.', opts: ['90', '80', '100', '70'], ans: 0, explain: '90 + 120 + x + 60 = 360, so x = 360 - 270 = 90 degrees.' },
  { q: 'A sector in a pie chart represents 1/5 of the data. Its angle is:', opts: ['36 degrees', '72 degrees', '60 degrees', '45 degrees'], ans: 1, explain: 'Angle = (1/5) x 360 = 72 degrees.' },
  { q: 'Two pie charts have sectors of 90 degrees each. Chart A total = 200, Chart B total = 100. Which sector represents more?', opts: ['Chart B', 'They represent the same amount', 'Chart A', 'Cannot tell'], ans: 2, explain: 'A: (90/360) x 200 = 50. B: (90/360) x 100 = 25. Chart A represents more (50 vs 25).' },
  { q: 'A pie chart has 5 equal sectors. Each sector angle is:', opts: ['60 degrees', '45 degrees', '36 degrees', '72 degrees'], ans: 3, explain: '360 / 5 = 72 degrees per sector.' },
  { q: 'If 45 students out of 180 chose \'Cricket\', the angle for Cricket is:', opts: ['90 degrees', '45 degrees', '72 degrees', '60 degrees'], ans: 0, explain: 'Angle = (45/180) x 360 = (1/4) x 360 = 90 degrees.' },
  { q: 'A pie chart sector has angle 144 degrees and the total frequency is 50. The frequency represented is:', opts: ['14', '20', '25', '30'], ans: 1, explain: 'Frequency = (144/360) x 50 = 0.4 x 50 = 20.' },
  { q: 'When comparing two pie charts, you need to know:', opts: ['Only the angles', 'The colours used', 'The total for each pie chart', 'The number of sectors'], ans: 2, explain: 'A larger sector may represent fewer items if its total is smaller. You need totals to compare.' },
  { q: 'A pie chart angle of 30 degrees represents what fraction of the total?', opts: ['1/6', '1/10', '1/30', '1/12'], ans: 3, explain: 'Fraction = 30/360 = 1/12.' },
  { q: 'In a pie chart, category A has angle 150 degrees and category B has angle 60 degrees. A is how many times B?', opts: ['2.5 times', '2 times', '3 times', '90 times'], ans: 0, explain: '150 / 60 = 2.5, so category A is 2.5 times category B.' },
  { q: 'A pie chart for 60 students shows \'Walking\' as 120 degrees. How many students walk?', opts: ['12', '20', '30', '24'], ans: 1, explain: 'Frequency = (120/360) x 60 = (1/3) x 60 = 20 students.' },
  { q: 'To draw a pie chart sector for 35 out of 140 items, the angle needed is:', opts: ['35 degrees', '70 degrees', '90 degrees', '45 degrees'], ans: 2, explain: 'Angle = (35/140) x 360 = (1/4) x 360 = 90 degrees.' },
  { q: 'A pie chart has three sectors: Red = 180 degrees, Blue = 120 degrees, Green = 60 degrees. What fraction is Blue?', opts: ['1/2', '1/6', '1/4', '1/3'], ans: 3, explain: 'Fraction = 120/360 = 1/3.' },
  { q: 'If a pie chart has sector angles 100, 80, 70, 50, and x, find x.', opts: ['60', '50', '70', '40'], ans: 0, explain: '100 + 80 + 70 + 50 + x = 360, so x = 360 - 300 = 60 degrees.' },
  { q: 'The frequency for a 45-degree sector when total frequency is 160 is:', opts: ['45', '20', '40', '16'], ans: 1, explain: 'Frequency = (45/360) x 160 = (1/8) x 160 = 20.' },
  { q: 'A pie chart shows \'Football\' has twice the angle of \'Tennis\'. If Tennis = 40 degrees, Football is:', opts: ['120 degrees', '60 degrees', '80 degrees', '40 degrees'], ans: 2, explain: 'Football = 2 x 40 = 80 degrees.' },
  { q: 'What happens to pie chart angles if every frequency is doubled?', opts: ['The angles double', 'The angles halve', 'The angles increase by 360', 'The angles stay the same'], ans: 3, explain: 'Doubling all frequencies doubles the total too, so each fraction remains unchanged, keeping angles the same.' },
  { q: 'A pie chart sector of 216 degrees represents what percentage of the total?', opts: ['60%', '21.6%', '54%', '72%'], ans: 0, explain: 'Percentage = (216/360) x 100 = 60%.' },
  { q: 'A line graph is best used to show:', opts: ['Parts of a whole', 'Trends over time', 'Frequency of categories', 'Grouped continuous data'], ans: 1, explain: 'Line graphs connect data points over time to show trends and changes.' },
  { q: 'How does a histogram differ from a bar chart?', opts: ['A histogram has gaps between bars', 'A histogram uses symbols', 'A histogram has no gaps between bars', 'A histogram is always circular'], ans: 2, explain: 'Histograms display continuous data with no gaps between bars, while bar charts have gaps.' },
  { q: 'In a stem-and-leaf plot, the data value with stem 4 and leaf 7 represents:', opts: ['4.7', '74', '407', '47'], ans: 3, explain: 'Stem = tens digit, leaf = units digit. So stem 4, leaf 7 = 47.' },
  { q: 'Which chart type has NO gaps between the bars?', opts: ['Histogram', 'Bar chart', 'Pictogram', 'Pie chart'], ans: 0, explain: 'Histograms represent continuous data, so bars are drawn touching with no gaps.' },
  { q: 'A line graph shows temperatures: Mon=20, Tue=22, Wed=18, Thu=25, Fri=23. On which day was the biggest increase?', opts: ['Tuesday', 'Thursday', 'Wednesday', 'Friday'], ans: 1, explain: 'Increases: Mon-Tue=+2, Tue-Wed=-4, Wed-Thu=+7, Thu-Fri=-2. Biggest increase is +7 on Thursday.' },
  { q: 'In a dot plot, three dots above the number 5 means:', opts: ['The frequency is 5', 'The total is 15', 'The value 5 occurs 3 times', 'The value 3 occurs 5 times'], ans: 2, explain: 'In a dot plot, each dot represents one data item, so 3 dots above 5 means 5 appears 3 times.' },
  { q: 'A stem-and-leaf plot must always include:', opts: ['Colours', 'A pie chart', 'Bar widths', 'A key'], ans: 3, explain: 'A stem-and-leaf plot must include a key (e.g. 3|5 = 35) so the reader knows how to interpret values.' },
  { q: 'In a histogram, the y-axis shows:', opts: ['Frequency', 'Categories', 'Percentages only', 'Individual data values'], ans: 0, explain: 'The y-axis of a histogram shows frequency (how many data items fall in each interval).' },
  { q: 'A line graph shows: Jan=10, Feb=15, Mar=12, Apr=20, May=18. The overall trend is:', opts: ['Generally decreasing', 'Generally increasing', 'No change', 'Fluctuating with no pattern'], ans: 1, explain: 'From 10 to 18 overall, the trend is generally increasing despite minor fluctuations.' },
  { q: 'A stem-and-leaf plot has stem 3 with leaves 2, 5, 5, 8. The data values are:', opts: ['3.2, 3.5, 3.5, 3.8', '23, 53, 53, 83', '32, 35, 35, 38', '320, 350, 350, 380'], ans: 2, explain: 'With key 3|2 = 32. The values are 32, 35, 35, 38.' },
  { q: 'Which type of graph would best display the temperature of a city over 7 days?', opts: ['Pie chart', 'Bar chart', 'Pictogram', 'Line graph'], ans: 3, explain: 'Line graphs are ideal for showing how a continuous variable like temperature changes over time.' },
  { q: 'In a histogram for data grouped as 0-9, 10-19, 20-29, the bar for 10-19 spans:', opts: ['9.5 to 19.5 on the x-axis', '10 to 19 on the x-axis', '10 to 20 on the x-axis', '11 to 20 on the x-axis'], ans: 0, explain: 'Using class boundaries: lower = 9.5, upper = 19.5, so the bar spans 9.5 to 19.5.' },
  { q: 'A back-to-back stem-and-leaf plot is used to:', opts: ['Show three variables', 'Compare two sets of data', 'Display categorical data', 'Calculate the mean'], ans: 1, explain: 'Back-to-back stem-and-leaf plots share a common stem to compare two data sets side by side.' },
  { q: 'Which graph is most suitable for showing proportions in a data set?', opts: ['Line graph', 'Histogram', 'Pie chart', 'Dot plot'], ans: 2, explain: 'Pie charts show each category as a proportion of the whole, making proportions easy to visualise.' },
  { q: 'The leaves in a stem-and-leaf plot should be:', opts: ['Written in descending order', 'Written in any order', 'Grouped by colour', 'Written in ascending order'], ans: 3, explain: 'Leaves must be arranged in ascending order (smallest to largest) for each stem.' },
  { q: 'A histogram with class intervals 0-4, 5-9, 10-14 has frequencies 6, 10, 4. The total frequency is:', opts: ['20', '14', '16', '24'], ans: 0, explain: 'Total frequency = 6 + 10 + 4 = 20.' },
  { q: 'A line graph can mislead the reader by:', opts: ['Using too many data points', 'Starting the y-axis at a value other than zero', 'Having a title', 'Plotting data accurately'], ans: 1, explain: 'Starting the y-axis above zero can exaggerate differences, making small changes look dramatic.' },
  { q: 'In a stem-and-leaf plot with key \'2|3 = 2.3\', the stem 5 and leaf 9 represents:', opts: ['59', '0.59', '5.9', '590'], ans: 2, explain: 'Using the key pattern, stem|leaf = stem.leaf, so 5|9 = 5.9.' },
  { q: 'Which of the following is NOT displayed using a histogram?', opts: ['Heights of students', 'Masses of parcels', 'Times to complete a race', 'Favourite colours of students'], ans: 3, explain: 'Favourite colours is categorical (qualitative) data, which should use a bar chart, not a histogram.' },
  { q: 'A line graph shows profit from $50 in Year 1 to $200 in Year 5. The profit has:', opts: ['Quadrupled', 'Doubled', 'Tripled', 'Increased by $50'], ans: 0, explain: '200 / 50 = 4. The profit has quadrupled (multiplied by 4).' },
  { q: 'A dot plot and a bar chart both show frequency. A key difference is:', opts: ['They are identical', 'A dot plot shows individual data points while a bar chart shows grouped counts', 'Dot plots use continuous data only', 'Bar charts use dots'], ans: 1, explain: 'A dot plot places a dot for each individual value, while a bar chart uses bars for total counts per category.' },
  { q: 'In a stem-and-leaf plot: stem 1 has leaves 0,2,5,7 and stem 2 has leaves 1,3,6,8,9. The median is:', opts: ['19', '20', '21', '17'], ans: 2, explain: '9 values total. Median = 5th value. Ordered: 10,12,15,17,21,23,26,28,29. The 5th value is 21.' },
  { q: 'A histogram shows that the tallest bar is for class 20-29. This class is the:', opts: ['Median class', 'Mean class', 'Range class', 'Modal class'], ans: 3, explain: 'The tallest bar represents the class with the highest frequency, which is the modal class.' },
  { q: 'A line graph is NOT suitable for:', opts: ['Comparing favourite sports of students', 'Showing monthly rainfall', 'Displaying stock prices over a year', 'Tracking temperature changes'], ans: 0, explain: 'Favourite sports is categorical data without a time element, so a line graph is inappropriate.' },
  { q: 'The range of data in a stem-and-leaf plot with smallest value 23 and largest value 58 is:', opts: ['81', '35', '23', '58'], ans: 1, explain: 'Range = largest - smallest = 58 - 23 = 35.' }
];

export { defined_meta, questions };
