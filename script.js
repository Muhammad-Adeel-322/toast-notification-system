let btn = document.querySelector("button")
let msg = document.querySelector(".msg")
let input1 = document.querySelector("#txt")
let input2 = document.querySelector("#textarea")
let radioinput11 = document.querySelectorAll("#radioinput1")
let position = document.querySelectorAll("#position")
btn.addEventListener("click", () => {
    let inpValue1 = input1.value
    let area = input2.value

  
    
        let notify = document.createElement('div')
        notify.classList.add('notify')
        msg.appendChild(notify)

        let head = document.createElement("h2")
        if(inpValue1 == ''){
            head.innerText = 'hello world'
        }else{

            head.innerHTML = inpValue1
        }
        notify.append(head)
        let text1 = document.createElement("p")
        if(area == ""){
            text1.innerText = "this is notification"
        }
        else{
            text1.innerHTML = area 
        }
        notify.append(text1)
        setTimeout(() => {
            notify.style.display = 'none'
        }, 2000)

        for(let i = 0; i < radioinput11.length ; i++){
            if(radioinput11[i].checked){
                let inputValue= radioinput11[i].value
                console.log(inputValue);
                notify.classList.add(inputValue)
            }
        }

        for(let a=0 ; a < position.length ; a++){
            
            if(position[a].checked){
            
                let inputValue= position[a].value
                // console.log(inputValue);

                
                msg.className = inputValue
                
                msg.classList.add("msg")
                
                console.log( "Message" ,msg);
            }
        }
    input1.value = ''
    input2.value = ''
})