let fullname =document.getElementById("fullname");
let username =document.getElementById("username");
let email =document.getElementById("email");
let password =document.getElementById("password");
let loginEmailOrUsername =document.getElementById("register_email_username");
let loginPassword =document.getElementById("register_password");
let toDoListDiv =document.getElementsByClassName("main1")[0];
let task =document.getElementById("task");

let dataArray =JSON.parse(localStorage.getItem("users") )|| [];
let taskArray=[]

function checkValidations(event){
    event.preventDefault();

    if(!fullname.value.trim() || !username.value.trim() || !email.value.trim() || !password.value.trim()){
        alert("please fill all fields");
    }
    else{
        let isCorrectName = false;
        if(fullname.value.length >3){
            isCorrectName =true;
            console.log("Right name");
            
        }
        else{
            isCorrectName=false;
            alert("wrong name")
        }
        console.log(taskArray);
        
        let isSpecialCharacter =false;
        let isNumber =false;
        for(let i =0;i<username.value.length;i++){
            if(username.value[i]>=0 && username.value[i]<=9){
                isNumber =true;
            }
            if(username.value[i]==="@" || username.value[i] ==="%" || username.value[i]==="$" || username[i]==="#"){
                isSpecialCharacter =true;
            }
        }
        
        let isUsername =false;
        if(username.value.length >=5){
            if(isSpecialCharacter || isNumber){
                isUsername =true;
                console.log("right username");
                
            }
            else{
                alert("Username not have any number or special character");
                isUsername =false;
            }
        }
        else{
            alert("Username length must greater than 4");
            isUsername =false;
        }
        
        let aderate =email.value.indexOf("@");
        let dot =email.value.lastIndexOf(".");
        let isCorrectEmail =false;
        if(email.value.length >=6){
            if(aderate > 0 && dot>aderate+1 &&dot <email.value.length-1){
                isCorrectEmail =true;
                console.log("right email");
                
            }
            else{
                alert("Please enter the correct email");
                isCorrectEmail =false;
            }
        }
        else{
            alert("Your email length is less than 6");
            isCorrectEmail =false;
        }
        
        let isCorrectPassword =false;
        let isNumberInPassword =false;
        let isSpecialCharacterInPassword =false;
        let isUpperLetterInPassword =false;
        let isLowerLetterInPassword =false;
        
        for(let i =0;i<=password.value.length ;i++){
            if(password.value[i]>="A" && password.value[i]<="Z"){
                isUpperLetterInPassword =true;
            }
            if(password.value[i]>="a" && password.value[i]<="z"){
                isLowerLetterInPassword =true;
            }
            if(password.value[i]>=0 && password.value[i]<=9){
                isNumberInPassword =true;
            }
            if(password.value[i]==="@" || password.value[i]==="%" ||password.value[i]==="$"){
                isSpecialCharacterInPassword =true;
            }
        }
        if(password.value.length >=8){
            isLowerLetterInPassword ? console.log("haslowerletter"): console.log("notlowerletter");
            isUpperLetterInPassword ? console.log("hasupperletter"): console.log("notupperletter");
            isSpecialCharacterInPassword ? console.log("hasspecialcharacter"): console.log("notspecialcharacter");
            isNumberInPassword ? console.log("hasNumber"): console.log("notnumber");
            
            if(isLowerLetterInPassword && isNumberInPassword && isSpecialCharacterInPassword && isUpperLetterInPassword){
                isCorrectPassword =true;
                console.log("right passsword");
                
            }
            else{
                alert("Password must contain special character and number and one upperletter and five more lower letters");
                isCorrectPassword =false;
            }
        }
        else{
            alert("your password length is less than 8")
        }
        
        if(isCorrectEmail && isCorrectName && isUsername && isCorrectPassword){
            let isMatchEmail =false;
            let key =localStorage.getItem("users");
            let values =JSON.parse(key);
            let emailMatch =0;
            for(let j in values){
                if(email.value.trim()!=values[j].email){
                    console.log(values[j]);
                    isMatchEmail =false;
                }
                else{
                    isMatchEmail =true;
                    emailMatch+=1;
                }
            }
            if(emailMatch === 0){
                const person1 ={
                    name:fullname.value.trim(),
                    username:username.value.trim(),
                    email:email.value.trim(),
                    password:password.value.trim(),
                    task: taskArray
                }
                dataArray.push(person1);
                
                const a =localStorage.setItem("users" ,JSON.stringify(dataArray));
                alert("Successfully Signup");
                window.location.href ="index.html";
                fullname.value ="";
                username.value ="";
                email.value ="";
                password.value ="";
            }
            else{
                alert("this email is already register go to login page")
            }
        }
    }
}

function matchData(event){
    event.preventDefault();
    
    if(!loginEmailOrUsername.value.trim() || !loginPassword.value.trim()){
        alert("please fill all fields")
    }
    else{
        let localStorageData =JSON.parse(localStorage.getItem("users"));
        let loginFound =false;
        for(let i in localStorageData){
            if((loginEmailOrUsername.value.trim() === localStorageData[i].email || loginEmailOrUsername.value.trim() === localStorageData[i].username) && loginPassword.value.trim() === localStorageData[i].password){
                alert("Login Successfully");
                window.location.href ="home.html";
                loginFound =true;
            }   
        }
        if(!loginFound){
            alert("Incorrect email or password");
            loginEmailOrUsername.value ="";
            loginPassword.value ="";
        }
    }
}

function logOut(){
    window.location.href ="index.html"
}

