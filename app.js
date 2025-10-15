// Cricket Question Bank - 20 Questions
const cricketQuestions = [
  {question: "Who is known as the 'God of Cricket'?",options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],answer: "Sachin Tendulkar"},
  {question: "Which country won the first ICC Cricket World Cup in 1975?", options: ["India", "Australia", "West Indies", "England"],    answer: "West Indies"},
  {question: "Who was the captain of India during the 2011 World Cup win?",options: ["Sourav Ganguly", "Rahul Dravid", "MS Dhoni", "Virat Kohli"],answer: "MS Dhoni"},
  {question: "Which bowler has taken the most Test wickets?", options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan"
  },
  {
    question: "Which Indian player is nicknamed 'The Hitman'?",
    options: ["Shikhar Dhawan", "Rohit Sharma", "Virat Kohli", "Hardik Pandya"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who scored the first double century in ODIs?",
    options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "Chris Gayle"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country hosts 'The Ashes' series with England?",
    options: ["India", "Australia", "South Africa", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "Who holds the record for the fastest ODI century?",
    options: ["AB de Villiers", "Corey Anderson", "Chris Gayle", "Shahid Afridi"],
    answer: "AB de Villiers"
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1983", "2003", "2007", "2011"],
    answer: "1983"
  },
  {
    question: "Who is the highest run scorer in Test cricket?",
    options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Steve Smith"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who is known as 'Captain Cool' of Indian cricket?",
    options: ["MS Dhoni", "Virat Kohli", "Rahul Dravid", "Sourav Ganguly"],
    answer: "MS Dhoni"
  },
  {
    question: "Which Indian cricketer is called 'The Wall'?",
    options: ["Rahul Dravid", "Sourav Ganguly", "VVS Laxman", "Anil Kumble"],
    answer: "Rahul Dravid"
  },
  {
    question: "Which player hit six sixes in an over in a T20 World Cup match?",
    options: ["Chris Gayle", "Yuvraj Singh", "Kieron Pollard", "Ben Stokes"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Who was the first Indian to take a hat-trick in Test cricket?",
    options: ["Harbhajan Singh", "Kapil Dev", "Irfan Pathan", "Chetan Sharma"],
    answer: "Harbhajan Singh"
  },
  {
    question: "Who won the 2019 ICC Cricket World Cup?",
    options: ["Australia", "India", "New Zealand", "England"],
    answer: "England"
  },
  {
    question: "Which player is known for the 'Helicopter Shot'?",
    options: ["Rohit Sharma", "Hardik Pandya", "MS Dhoni", "Virat Kohli"],
    answer: "MS Dhoni"
  },
  {
    question: "Who was the first Indian to score a triple century in Test cricket?",
    options: ["Virender Sehwag", "Sunil Gavaskar", "Sachin Tendulkar", "Rahul Dravid"],
    answer: "Virender Sehwag"
  },
  {
    question: "Who holds the record for the most sixes in international cricket?",
    options: ["Chris Gayle", "Rohit Sharma", "MS Dhoni", "AB de Villiers"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which Indian bowler is nicknamed 'Boom Boom'?",
    options: ["Jasprit Bumrah", "Hardik Pandya", "Yuzvendra Chahal", "Bhuvneshwar Kumar"],
    answer: "Jasprit Bumrah"
  },
  {
    question: "Which Indian player won the ICC Cricketer of the Decade award (2010–2020)?",
    options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Yuvraj Singh"],
    answer: "Virat Kohli"
  }
];

// Example: Display all questions
cricketQuestions.forEach((q, index) => {
  console.log(`${index + 1}. ${q.question}`);
  q.options.forEach((opt, i) => console.log(`   ${String.fromCharCode(65 + i)}. ${opt}`));
  console.log(`Answer: ${q.answer}\n`);
});



function randomQuestion() {
    // const answer = [];
    
    const data = new Set();

    // Hum yahan par set() ka use isliye kar rahe hain kyonki Hamara Question repeat na ho
    while (data.size != 5) {
        // jaise hi hamare data ka size 5 ho jayega hamara ye loop ruk jayege
        let index =  Math.floor(Math.random()*20)
        data.add(cricketQuestions[index]);

        
    }

    // convert set into array   //yahan par hamne  jo question store hua hai use return mein array mein convert karenge
    return [...data];
}


// Select the form and insert all the element into it

let form = document.getElementById("quizForm");

const problem = randomQuestion()


// para.data[1]
// div_element.append(para)



{/* <div>
    <P></P>
    <label>
        <input> <text node></text>
    </label>


</div> */}

//  upar wale html ko hum neeche bana rahe hain



const original_answer={};

problem.forEach((obj,index)=>{
    const div_element = document.createElement("div");
    div_element.className = "question";
form.appendChild(div_element)
    let para = document.createElement("p");
    para.className ="para"
    para.textContent = ` ${index+1} . ${obj['question']}`
    original_answer[`q${index+1}`]= obj['answer']

div_element.appendChild(para)
    
//    create Four option

console.log(original_answer);


// yahan par hum options ko apne label aur input mein store karenge



//  ye hum jo for each lagaye hain isse hum 4  options ko ek ke baad ek label mein store karake hum use div_element mein store kara dete hai
// Ab hamara 4 option hai to 4 label ban jayenge
obj['options'].forEach(data=>{
    const label = document.createElement("label")
    label.className = "label"
    const input = document.createElement("input")
    input.className = "input"
    input.type= "radio";
    input.name= `q${index+1}`
    input.value =data;
    label.appendChild(input);
    

    //  yahan par hamne apne question ke option ko store kar diya hai
    label.appendChild(document.createTextNode(data))

    div_element.appendChild(label)
    div_element.appendChild(document.createElement("br"))
})

    
})



let button = document.createElement("button")
button.type= "submit";
button.className = "submit-btn";
button.textContent= "Submit"
form.appendChild(button)

// let reset = document.createElement("button")
// reset.type= "reset";
// reset.className = "reset-btn";
// reset.textContent= "reset"
// form.appendChild(reset)




let result = 0;
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data = new FormData(form);

    for (const [key,value] of data.entries()) {
        if (value===original_answer[key]) {
            result++
        }
    }

    
    console.log(result);
    let pa = document.getElementById("result");
    pa.textContent= `${result} correct out of 5`
    form.appendChild(pa)
    pa.className = "result-para"
})


