"use strict"

var list = () => {
    todoList.forEach((listItem, index) => {

        let hours = listItem.dateTime.getHours(),
            minutes = listItem.dateTime.getMinutes();
        //Time formatting
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        console.log((index + 1) + '. List item: ' + JSON.stringify(hours + ':' + minutes + ' - ' + listItem.title));
    });
};

document.addEventListener('DOMContentLoaded', event => {
    list();
});