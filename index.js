function validate() {
    var FirstName = document.getElementById('firstname').value;
    var LastName = document.getElementById('lastName').value;
    var Email = document.getElementById('email').value;
    var ContactNo = document.getElementById('contactNo').value;
    var city = document.getElementById('city').value;


    // console.log(user);	

    if (FirstName == null || FirstName == "") {
        // alert("enter d username");
        document.getElementById('fname').innerHTML = "Please fill the username feild";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    if ((FirstName.length <= 2) || (FirstName.length >= 30)) {
        // alert("enter d username");
        document.getElementById('fname').innerHTML = "Username lenght must be between 3 and 30 ";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    if (!isNaN(FirstName)) {
        // alert("enter d username");
        document.getElementById('fname').innerHTML = "only character is allowed ";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    // if(user.indexOf(isNaN) <= 0){
    // 		// alert("enter d username");
    // 		document.getElementById('uname').innerHTML ="only  is allowed ";
    // 		return false;
    // 	}
    if (LastName == null || LastName == "") {
        // alert("enter d username");
        document.getElementById('lname').innerHTML = "Please fill the username feild";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    if ((LastName.length <= 2) || (LastName.length >= 30)) {
        // alert("enter d username");
        document.getElementById('lname').innerHTML = "Username lenght must be between 3 and 30 ";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    if (!isNaN(LastName)) {
        // alert("enter d username");
        document.getElementById('lname').innerHTML = "only character is allowed ";
        return false;
    }
    // else{
    // 	document.getElementById('uname').innerHTML ="";
    // 	return false;
    // }

    if (ContactNo == null || ContactNo == "") {
        // alert("enter d username");
        document.getElementById('contact').innerHTML = "Please fill the mobilenumber feild";
        return false;
    }
    // else{
    // 	document.getElementById('mobileno').innerHTML ="";
    // 	return false;
    // }


    if (isNaN(ContactNo)) {
        // alert("enter d username");
        document.getElementById('contact').innerHTML = "mobile number should be in digits";
        return false;
    }
    // else{
    // 	document.getElementById('mobileno').innerHTML ="";
    // 	return false;
    // }

    if (ContactNo.length != 10) {
        // alert("enter d username");
        document.getElementById('contact').innerHTML = "mobile number should be in 10 digits not more or less than 10.";
        return false;
    }
    // else{
    // 	document.getElementById('mobileno').innerHTML ="";
    // 	return false;
    // }


    if (Email == null || Email == "") {
        // alert("enter d username");
        document.getElementById('emailid').innerHTML = "Please fill the email feild";
        return false;
    }
    // else{
    // 	document.getElementById('emailid').innerHTML ="";
    // 	return false;
    // }


    if (Email.indexOf('@') <= 0) {
        // alert("enter d username");
        document.getElementById('emailid').innerHTML = "@ indvalid position";
        return false;
    }
    //  else{
    // 	document.getElementById('emailid').innerHTML ="";
    // 	return false;
    // }

    if ((Email.charAt(email.length - 4) != ".") && (Email.charAt(Email.length - 3) != ".")) {
        // alert("enter d username");
        document.getElementById('emailid').innerHTML = " . invalid position";
        return false;
    }
    //  else{
    // 	document.getElementById('emailid').innerHTML ="";
    // 	return false;
    // }
    return true;
}