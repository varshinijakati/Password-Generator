const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","@","#","%","&","_","-","+","="];

function generatePwd1(){
    let ans='';
    for(let i=0;i<8;i++){
        let char = Math.floor(Math.random() * characters.length);
        ans += characters[char];
        
    }
    document.getElementById("ans1").textContent=ans;
}
function generatePwd2(){
    let ans='';
    for(let i=0;i<8;i++){
        let char = Math.floor(Math.random() * characters.length);
        ans += characters[char];
        
    }
    document.getElementById("ans2").textContent=ans; 
}
function generatePwd3(){
    let ans='';
    for(let i=0;i<8;i++){
        let char = Math.floor(Math.random() * characters.length);
        ans += characters[char];
          
    }
    document.getElementById("ans3").textContent=ans; 
}
