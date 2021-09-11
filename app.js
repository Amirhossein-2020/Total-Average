// let submit = document.getElementsByClassName("submit")[0];
// submit.onclick = function submited() {
//     let weight = [];
//     let grade = [];
//     let lesson = [];
//     let totalWeight = 0;
//     let gw = [];
//     let sumgw = 0;
//     let lForm = document.getElementsByClassName("grade").length;
//     for (i = 0; i < lForm; i++){
//         weight.push(Number(document.getElementsByClassName("weight")[i].value));
//         grade.push(Number(document.getElementsByClassName("grade")[i].value));
//         lesson.push(document.getElementsByClassName("lesson")[i].value);
//         gw.push(grade[i] * weight[i]);
//         sumgw += gw[i];
//         totalWeight += weight[i];
//     };

//     console.log('weight', weight);
//     console.log('grade', grade);
//     console.log('lesson', lesson);
//     console.log('totalWeight', totalWeight); 
//     console.log('gw', gw); 
//     console.log('sumgw', sumgw);
//     let average = sumgw/totalWeight;
//     document.getElementById("average").innerHTML = average.toFixed(2);
//     console.log('average', average);
// }
let table = document.getElementById("table");
let submit = document.getElementsByClassName("submit")[0];
let calculate = document.getElementsByClassName("calculate")[0];
let list = [];
let totalWeight = 0;
let gw = [];
let sumgw = 0;
let average;
submit.addEventListener("click", function submited() {
    let lesson = document.getElementsByClassName("lesson")[0].value;
    let grade = parseFloat(document.getElementsByClassName("grade")[0].value);
    let weight = parseFloat(document.getElementsByClassName("weight")[0].value);
    let each = {};
    console.log("lesson", lesson);
    console.log("grade", grade);
    console.log("weight", weight);
    if (!lesson || Number.isNaN(grade + weight)) {
        alert("لطفاً تمام فیلدها را پر کنید.");
    } else if (20 < grade || grade < 0) {
        alert("لطفاً نمره ی بین 0 تا 20 وارد کنید.");
    } else if (weight <= 0) {
        alert("لطفاً واحد صحیح وارد بکنید.")
    } else {
        each.lesson = lesson;
        each.grade = grade;
        each.weight = weight;
        each.number = list.length + 1;
        each.gw = grade * weight;
        list.push(each);
        table.innerHTML += "<tr><td>" + each.number + "<td>" + lesson + "</td><td>" + grade + "</td><td>" + weight + "</td></tr>";
        document.getElementsByClassName("lesson")[0].value = "";
        document.getElementsByClassName("grade")[0].value = null;
        document.getElementsByClassName("weight")[0].value = null;
    };
    console.log("each", each);
    console.log("list", list);
});
console.log("list", list);
calculate.addEventListener("click", function calculate() {
    for(i = 0; i < list.length; i++){
        totalWeight += list[i].weight;
        sumgw += list[i].gw;
    };
    average = sumgw/totalWeight;
    document.getElementById("average").innerHTML = average.toFixed(2);
    console.log("total weight", totalWeight);
    console.log("sumgw", sumgw);
});