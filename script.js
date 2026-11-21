let idVal = document.querySelector("#userId")
let searchBtn = document.querySelector("#searchBtn")
let showRes = document.querySelector("#result")
let load = document.querySelector("#loading")

function searchUser() {
    if(idVal.value.trim() === "") {
        load.textContent = "Please enter user ID"
    } else {
        load.textContent = "Loading..."
        let id = Number(idVal.value)
        idVal.value = ""
        searchBtn.disabled = true
        new Promise((resolve, reject) => {
            setTimeout(() => {
                searchBtn.disabled = false
                if (id >= 1 && id <= 10) {
                    resolve(`User found! ID: ${id}`)
                } else {
                    reject("User not found!")
                }
            }, 2000)
        })
        .then(data => {
            showRes.textContent = data
        })
        .catch(error => {
            showRes.textContent = error
        })
        .finally(() => {
            load.textContent = ""
        })
    }
}
searchBtn.addEventListener("click", searchUser)