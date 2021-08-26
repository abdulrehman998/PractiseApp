const Orders = () => {

    var div1 = document.getElementById("div1")
    var dateToday = new Date();
    div1 = dateToday.getDate() + "/" + dateToday.getMonth() + "/" + dateToday.getFullYear();

    firebase.database().ref(`accepted`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`accepted1`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`accepted2`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`accepted3`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`rejected`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post1"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`rejected1`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post1"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`rejected2`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post1"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`rejected3`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post1"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`delivered`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post2"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })
    
    firebase.database().ref(`delivered1`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post2"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`delivered2`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post2"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

    firebase.database().ref(`delivered3`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><div class = "post2"><p id="div1">${div1}</p><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></div></li>`

    })

}



