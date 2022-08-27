let n=require("readline-sync")
function question() {
    let que= [
        "How many continents are there?",              // pehla question

        "What is the capital of India?",            // doosra question

        "NG mei kaun se course padhaya jaata hai?"    //teesra question
    ]
    return que
}
let question_list=question()
function options() {
    let opt= [
        // #pehle question ke liye options

        ["Four", "Nine", "Seven", "Eight"],

        // #second question ke liye options

        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],

        // #third question ke liye options

        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return opt
}
let options_list=options()
function lifline(){
    let lif=[
        ["2.nine","3.seven"],
        ["3.bhopal","4.delhi"],
        ["1.Software Engineering","2.Counseling"]
    ]
    return lif
}
let lifeline_list=lifline()
// # har ek question ke liye, uski solution key (yeh index nahi hai)
function solution(){
    let solu= [3, 4, 1]
    return solu
}
let solution_list=solution()

let count=0
let price=0
for (let i=0;i<question_list.length;i++){
    console.log(question_list[i]);
    let j=i
    for (let serial=0; serial < options_list[i].length; serial++) {
        const k = options_list[j][serial];
        console.log(serial+1,k);
        
    }
    let lifeline=n.question("Do you want 50-50 lifeline..yes/no:")
    if (lifeline==="yes"){
        console.log(".....you choose 50-50 lifline.....");
        if (count<1){
            a=i
            for (let serial=0;serial<lifeline_list[i].length;serial++){
                b=lifeline_list[a][serial]
                console.log(b);
            }
            ans=n.questionInt("choose your answer:")
            if (ans==solution_list[i]){
                price+=10000
                console.log(`right answer and your wining price is ${price}`)
            }
            else{
                console.log("your answer is wrong,you lost the game")
                break
            }
            count+=1
            
        }
        else{
            console.log("you already use your life line");
            ans=n.questionInt("choose your answer:")
            if (ans==solution_list[i]){
                price+=10000
                console.log(`right answer and your wining price is ${price}`)
            }
            else{
                console.log("your answer is wrong,you lost the game")
                break
            }
            count+=1
        }
    }
    else{
        ans=n.questionInt("choose your answer:")
        if (ans==solution_list[i]){
            price+=10000
            console.log(`right answer and your wining price is ${price}`)
        }
        else{
            console.log("your answer is wrong,you lost the game")
            break
        }
    }
}   