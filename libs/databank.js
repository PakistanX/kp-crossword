var wordsStr = "{\"Words\":[{\"word\":\"Summative\",\"hint\":\"___ assessments are conducted at the end of a learning term. \",\"hintType\":\"text\"},{\"word\":\"Formative\",\"hint\":\"___ assessments are conducted throughout the learning term. \",\"hintType\":\"text\"},{\"word\":\"feedback\",\"hint\":\"telling students what they did well and what they did wrong\",\"hintType\":\"text\"},{\"word\":\"knowledge\",\"hint\":\"awareness or understanding of something|Assessments are used to identify ___ gaps. \",\"hintType\":\"text\"},{\"word\":\"evaluated\",\"hint\":\"tested|Students can be ___ during any stage of the 5E model. \",\"hintType\":\"text\"},{\"word\":\"important\",\"hint\":\"essential|Telling students how to do better is an ___ part of feedback.   \",\"hintType\":\"text\"},{\"word\":\"specific \",\"hint\":\"antonym of generic\",\"hintType\":\"text\"},{\"word\":\"rubric\",\"hint\":\"a set of instructions or rules|A grading ___ helps students better understand the teacher's expectations. \",\"hintType\":\"text\"},{\"word\":\"assess\",\"hint\":\"to test someone's existing knowledge \",\"hintType\":\"text\"},{\"word\":\"Evaluate\",\"hint\":\"the fifth stage of the 5E model\",\"hintType\":\"text\"},{\"word\":\"poor\",\"hint\":\"poor.png\",\"hintType\":\"image\"},{\"word\":\"written \",\"hint\":\"Feedback can be ___ or verbal. \",\"hintType\":\"text\"},{\"word\":\"kind\",\"hint\":\"generous and considerate|Teachers should give honest but ___ feedback. \",\"hintType\":\"text\"},{\"word\":\"effective\",\"hint\":\"effective.png\",\"hintType\":\"image\"},{\"word\":\"enough\",\"hint\":\"sufficient|Just highlighting mistakes is not ___ for proper feedback. \",\"hintType\":\"text\"}]}";
var wordsJSON = JSON.parse(wordsStr).Words;


var words = [];
var hints = wordsJSON;

for (var i in wordsJSON) {
    words.push(wordsJSON[i].word);
}

