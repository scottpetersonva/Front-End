var questions = ["What is the deepest lake in the world?", "What is America's oldest national park?", "Which US state has a unicameral legislature?", "This US president signed into law the Antiquities Act allowing the president to designate landmarks, structures, and objects of historic or scientific interest as National Monuments", "What is the longest river in the United States?", "What is the most populated state capital in the US?", "Texas was an Independent Republic for how many years?", "Pluto was discovered at an observatory in which US State?"]

var aAnwsers = ["Lake Baikal", "Yosimite", "Maine", "Woodrow Wilson", "Colorado", "Denver", "5 years", "Washington"];

var bAnswers = ["Lake Michigan", "Glacier", "Nebraska", "William McKinley", "Missouri", "Indianapolis", "10 years", "Maine"];

var cAnswers = ["Lake Titicaca", "Yellowstone", "Louisiana", "William Taft", "Yukon", "Phoenix", "15 years", "Arizona"];

var dAnswers = ["Lake Victoria", "Acadia", "California", "Theodore Roosevelt", "Rio Grande", "Atlanta", "20 years", "California"];



var score = 0;
function begin(){

var targetDiv = document.getElementById("questions");
var aAnswersDiv = document.getElementById("a-answers");
var bAnswersDiv = document.getElementById("b-answers");
var cAnswersDiv = document.getElementById("c-answers");
var dAnswersDiv = document.getElementById("d-answers");

targetDiv.innerHTML = questions[0];
aAnswersDiv.innerHTML = aAnswers[0];
bAnswersDiv.innerHTML = bAnswers[0];
cAnswersDiv.innerHTML = cAnswers[0];
dAnswersDiv.innerHTML = dAnswers[0];

questions + 1;
aAnswers + 1;
bAnswers + 1;
cAnswers + 1;
};



