var student_name= [];
function submit () {
    var name_one= document.getElementById("name_of_student_1").value;
    var name_two= document.getElementById("name_of_student_2").value;
    var name_three= document.getElementById("name_of_student_3").value;
    var name_four= document.getElementById("name_of_student_4").value;

    student_name.push(name_one);
    student_name.push(name_two);
    student_name.push(name_three);
    student_name.push(name_four);

    console.log(student_name);
    document.getElementById("display_name").innerHTML= student_name;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    student_name.sort();
console.log(student_name);
document.getElementById("display_name").innerHTML= student_name;

}