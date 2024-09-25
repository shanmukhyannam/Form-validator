document.getElementById("submit").addEventListener("click",function submitform(){
    const name=document.getElementById("name").value;
    const phonenum=document.getElementById("phonenum").value;
    const password=document.getElementById("password").value;
    const conpass=document.getElementById("conpass").value;
    const containsAlphabets = (str) => /[a-zA-Z]/.test(str);
    const containsNumbers = (str) => /\d/.test(str);
    const containsSpChars = (str) => /[^a-zA-Z0-9]/.test(str);


    if(name.length<5){
        alert("invalid username, enter a valid username");
    }
    if(phonenum<1000000000 || phonenum>=10000000000 || phonenum==='123456789'){
        alert("invaid mobile number, enter a valid mobile number");
    }
    if(password==='password' || password===name){
        alert("invalid password, enter a valid password");
    }
    if(password!=conpass){
        alert("password mismatch, enter same value in passwrord and confirm password fields");
    }
    if(!containsAlphabets(password)){
        alert("please include some alphabets in your password");
    }
    if(!containsNumbers(password)){
        alert("please include some numbers in your password");
    }
    if(!containsSpChars(password)){
        alert("please include some special charecters in your password");
    }
    if(password.length<=9){
        alert("password must contain minimum 9 values")
    }
    else{
        alert("valid form, form submitted successfully");
        const x=`<h1>Hello ${name}</h1>
        <p>Submitted form is valid under specified conditions.</p>
        <button><a href="/form.html">logout</a></button><br>`
        document.getElementById("afsub").innerHTML=x;
    }
})