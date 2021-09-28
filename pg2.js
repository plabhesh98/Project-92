player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;


function send() {
    number_1 = document.getElementById("number_1_input").value;
    console.log(number_1);
    number_2 = document.getElementById("number_2_input").value;
    console.log(number_2);
    actual_answer = parseInt(number_1) * parseInt(number_2);
    
    Question_box = "<h4 id='word_display'> Q. " + number_1 + " X " + number_2 + "</h4>" ;
    input = "<br> Answer: <input type='number' id='answer'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = Question_box + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1_input").value = "";
    document.getElementById("number_2_input").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("answer").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player_1_score;
        } else {
            update_player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player_2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
    }
    if (answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
    } else {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
    }
    document.getElementById("output").innerHTML = "";
}