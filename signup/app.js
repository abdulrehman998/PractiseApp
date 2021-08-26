function onSignup() {
    // get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");


    if (email != "" && password != "") {
        const obj = {
            email: email,
            password: password
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
                location.href = "../index.html"
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                if (errorMessage) {
                    var warning = document.createElement('div')
                    var warnText = document.createTextNode("Invalid credentials!")
                    warning.appendChild(warnText)
                    warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

                    message.appendChild(warning)
                }
                setTimeout(() => {
                    message.innerHTML = "";
                }, 2000);
                // ..
            });
    }else{
        alert("Please Fill All the Fields")
    }
}


function onLogin() {
    // get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var user = {
        email: email,
        password: password,
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            if (document.getElementById('r1').checked) {
                alert("You have logged In as a Restaurant's Employ")
                location.href = "restaurant dashboard/restaurant.html"

            }
            if (document.getElementById('r2').checked) {
                alert("You have logged In as an User")
                location.href = "user dashboard/index.html"
            }

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            if (errorMessage) {
                var warning = document.createElement('div')
                var warnText = document.createTextNode("Invalid credentials!")
                warning.appendChild(warnText)
                warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

                message.appendChild(warning)
            }
            setTimeout(() => {
                message.innerHTML = "";
            }, 2000);
        });
}

function signOut() {
    var message = document.getElementById("message");


    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        if(signOut){
            var warning = document.createElement('div')
            var warnText = document.createTextNode("Logging Out!")
            warning.appendChild(warnText)
            warning.setAttribute("class", "alert alert-danger d-flex align-items-center")
            message.appendChild(warning)
            // clear state
            setTimeout(() => {
                location.href = "../index.html";
            }, 2000);
        }
    }).catch((error) => {
        // An error happened.
        var errorMessage = error.message;
        console.log(errorMessage)
    });
}