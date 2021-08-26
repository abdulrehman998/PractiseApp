const insertButton = () => {
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;
    var delType = document.getElementById("delType").value;
    var category = document.getElementById("category").value;

    if (title && price && image && delType && category != '') {

        const obj = {
            title: title,
            price: price,
            image: image,
            delType: delType,
            category: category
        }

        let key = Math.round(Math.random() * 136598937);

        firebase.database().ref('dishes/add' + key).set(obj)
            .then(() => {
                alert("Menu Updataed")
            })

    } else {
        alert("empty post can not be shared")
    }
}





var list = document.getElementById("list");


const showOrder = () => {


    firebase.database().ref(`order`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a>
        <a class="btn btn-danger btn-lg" href="#" role="button" onclick="removeOrder(this)">Reject</a></li>`

        userOrder = () => {

            const obj = {
                user: "Accepted"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('accepted/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
            firebase.database().ref('order').remove()
                .then(() => {
                    location.reload();
                })

        }

        removeOrder = () => {

            const obj = {
                user: "Rejected"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('rejected/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Rejected")
                })


            firebase.database().ref('order').remove()
                .then(() => {
                    location.reload();
                })
        }

    })
    firebase.database().ref(`order1`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a>
        <a class="btn btn-danger btn-lg" href="#" role="button" onclick="removeOrder()">Reject</a></li>`

        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)

            const obj = {
                user: "Accepted"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('accepted1/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
            firebase.database().ref('order1').remove()
                .then(() => {
                    location.reload();
                })

        }
        removeOrder = () => {

            const obj = {
                user: "Rejected"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('rejected1/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })

            firebase.database().ref('order1').remove()
                .then(() => {
                    location.reload();
                })
        }

    })

    firebase.database().ref(`order2`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a>
        <a class="btn btn-danger btn-lg" href="#" role="button" onclick="removeOrder()">Reject</a></li>`

        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)

            const obj = {
                user: "Accepted"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('accepted2/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
            firebase.database().ref('order2').remove()
                .then(() => {
                    location.reload();
                })

        }
        removeOrder = () => {

            const obj = {
                user: "Rejected"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('rejected2/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })

            firebase.database().ref('order2').remove()
                .then(() => {
                    location.reload();
                })
        }
    })


    firebase.database().ref('order3').on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a>
        <a class="btn btn-danger btn-lg" href="#" role="button" onclick="removeOrder()">Reject</a></li>`


        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)

            const obj = {
                user: "Accepted"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('accepted3/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })

            firebase.database().ref('order3').remove()
                .then(() => {
                    location.reload();
                })

        }
        removeOrder = () => {

            const obj = {
                user: "Rejected"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('rejected3/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })

            firebase.database().ref('order3').remove()
                .then(() => {
                    location.reload();
                })
        }
    })


}

function signOut() {
    var message = document.getElementById("message");


    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        if (signOut) {
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


const acceptedOrders = () => {

    firebase.database().ref(`accepted`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list1");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p>
        <a class="btn btn-success btn-lg" href="#" role="button" onclick="deliveryOrder()">Delivered</a></li>`


        deliveryOrder = () => {

            const obj = {
                user: "Delivered"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('delivered/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Delivered")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        }
    })

    firebase.database().ref(`accepted1`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list1");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p>
        <a class="btn btn-success btn-lg" href="#" role="button" onclick="deliveryOrder()">Delivered</a></li>`


        deliveryOrder = () => {

            const obj = {
                user: "Delivered"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('delivered1/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Delivered")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        }
    })

    firebase.database().ref(`accepted2`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list1");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p>
        <a class="btn btn-success btn-lg" href="#" role="button" onclick="deliveryOrder()">Delivered</a></li>`


        deliveryOrder = () => {

            const obj = {
                user: "Delivered"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('delivered2/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Delivered")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        }
    })

    firebase.database().ref(`accepted3`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list1");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p>
        <a class="btn btn-success btn-lg" href="#" role="button" onclick="deliveryOrder()">Delivered</a></li>`


        deliveryOrder = () => {

            const obj = {
                user: "Delivered"
            }

            let key = Math.round(Math.random() * 1265677837);

            firebase.database().ref('delivered3/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Delivered")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        }
    })
}

