//Student name: Kei Wai Tsui
//Student id:300361374
//CSIS 3380 lab 2

//ref the data in data.js file
const usersData = users;

//set the current page to page 1 for pagination
const currentPage = 1;

//Calculate the no of user and ref it
const noOfUsers = usersData.length;
const noOfPage = Math.ceil(noOfUsers/10);

//function that adds button on html for pagination
function addButton() {
    //ref the div element
    let page = document.querySelector(".page")
    //variable that stores content for adding to the div later
    let newContent =""
    newContent += `<div class="pagination">`
    for(let i=1; i<=noOfPage; i++){
        newContent += `<li><a onclick="changeContactList(${i})">${i}</a></li>`
    }
    newContent +=`</div>`
    //add the content to the div
    page.innerHTML += newContent
}

//function that changes the total number shpwn on the html
function changeTotalNumber(){
    //ref and change the h3 element that shows the total number of users
    let totalNumber = document.querySelector("h3");
    totalNumber.innerHTML = `Total: ${usersData.length}`
}

//function that shows and changes the users on the html
function changeContactList(currentPage){
    //ref the ul element and delete the users list first
    let contactList = document.querySelector(".contact-list");
    contactList.innerHTML = ""

    //array that stores the content of all the users data and innerhtml 
    let arrayForUsers = []
    for(let i=0; i<usersData.length; i++){
        arrayForUsers.push(`<li class="contact-item cf">
    <div class="contact-details">
        <img class="avatar" src="${usersData[i].image}">
        <h3>${usersData[i].name}</h3>
        <span class="email">${usersData[i].name.replace(" ", ".")}@example.com</span>
    </div>
    <div class="joined-details">
        <span class="date">Joined ${usersData[i].joined}</span>
    </div>
    </li>`)}
    
    //slice the array according to the currentPage and store it to the new array for adding to the ul later
    let newArrayForUsers = arrayForUsers.slice((currentPage-1)*10, ((currentPage-1)*10 +10))

    //add the content to the ul
    for(i=0; i<newArrayForUsers.length; i++){
        contactList.innerHTML += newArrayForUsers[i]
    }
}

//call the functions
addButton();
changeTotalNumber();
changeContactList(currentPage);
