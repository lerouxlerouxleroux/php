var questions = [  
{ 
    ques: "Est-ce que tu aimes le Javascript?",
    ans: "Oui"
},
{
    ques: "Le JavaScript est souvent utilisé côté client?",
    ans:"Oui"
},

{
    ques : "Le JavaScript est souvent utilisé côté client et serveur?",
    ans :"Oui"
}
];

for (i=0; i<questions.length; i++) {
    if (prompt(questions[i].ques).toLowerCase() === questions[i].ans.toLowerCase()) {
        alert("Bonne réponse" + questions[i].ques)
    }
    else

    {alert("Faux. La bonne réponse à la question" + questions[i].ques + "était" + questions[i].ans) 
        
    }
    }
