let y = 1
let z = 0
function roll(){
    var audio = new Audio('dice-142528.mp3');
    audio.play();
    let x = Math.floor(Math.random(0,1)*6+1)
    console.log(x)
    document.getElementById('dice_value').innerHTML = x
    if(x===1){
        document.getElementById('d').src='1.jpg'
        }
        else if(x===2){
            document.getElementById('d').src='2.jpg'
        }
        else if(x===3){
            document.getElementById('d').src='3.jpg'
        }
        else if(x===4){
            document.getElementById('d').src='4.jpg'
        }
        else if(x===5){
            document.getElementById('d').src='5.jpg'
        }
        else if(x===6){
            document.getElementById('d').src='6.jpg'
            
        }

    if(y%2===0){
        console.log("JIN")
       let num1= Number(document.getElementById('p1_Score').innerHTML)
        num1 = num1 + x
        document.getElementById('p1_Score').innerHTML = num1
        y = 1
        if(num1>=50){
            z=1
            document.getElementById('result').innerHTML = 'JIN Won'
        }
    }else{
        console.log("Paul")
       let num2 = Number(document.getElementById('p2_Score').innerHTML)
        num2 = num2 + x
        document.getElementById('p2_Score').innerHTML = num2
        y = y+1
        if(num2 >= 50){
            z=1
        }
    }
    if(z===1){
        addEventListener('click', function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
        let num1= Number(document.getElementById('p1_Score').innerHTML)
        let num2= Number(document.getElementById('p2_Score').innerHTML)
        if(num1>num2){
            document.getElementById('result').innerHTML = 'JIN won'
            document.getElementById('result').className = 'alert alert-success'
            document.getElementById('roll').disabled = true
        }
        if(num2 > num1){
            document.getElementById('result').innerHTML = 'Paul won'
            document.getElementById('result').className = 'alert alert-success'
            document.getElementById('roll').disabled = true
            
        }
    }
   
}
