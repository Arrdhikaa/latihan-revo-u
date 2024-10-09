var calcdisplay = ""

function btnclick(e) {
  if(e == "1" || e == "2" || e == "3" || e == "4" || e == "/" || e == "*") {
    if(e == "Ac") {
        calcdisplay=""
    } else{
        calcdisplay = calcdisplay + e
        console.log(calcdisplay)
    }
    document.getElementById("display").value = calcdisplay 
  } else {
    console.log("input harus berupa angka dan simbol")
  }
} 

document.getElementById("display").addEventListener('change', displaychange)

function displaychange(){
    console.log("this.value")
}