"use strict"

var list = (condition) => {
    let elements = [];
    todoList.forEach((listItem, index) => {
        let timeAndTitle,
            hours = listItem.dateTime.getHours(),
            minutes = listItem.dateTime.getMinutes();
        //Time formatting
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Time & title
        timeAndTitle = hours + ':' + minutes + ' - ' + listItem.title;
        //List the items by priorities, urgency
        if (condition === 'all') {
            console.log((index + 1) + '. List item: ' + JSON.stringify(timeAndTitle));
        } else if (condition === 'high' && listItem.priority === 'high') {
            console.log((index + 1) + '. High priority task: ' + JSON.stringify(timeAndTitle));
        } else if (condition === 'normal' && listItem.priority === 'normal') {
            console.log((index + 1) + '. Normal priority task: ' + JSON.stringify(timeAndTitle));
        } else if (condition === 'low' && listItem.priority === 'low') {
            console.log((index + 1) + '. Low priority task: ' + JSON.stringify(timeAndTitle));
        } else if (condition === 'urgent' && listItem.urgent === true) {
            console.log((index + 1) + '. Urgency task: ' + JSON.stringify(timeAndTitle));
        } else if (condition === 'time') {
            elements.push(JSON.stringify(timeAndTitle));
        } else if (condition === 'abc') {
            elements.push(listItem.title);
        }
    });
    if (condition === 'abc') {
        console.log('ABC sort: \n' + elements.sort().toString().split(',').join('\n'));
    } else if (condition === 'time') {
        console.log('Time sort: \n' + elements.sort().toString().split(',').join('\n'));
    } else if (condition === 'everything') {
        console.log('Every object: \n' + JSON.stringify(todoList).split(',').join('\n'));
    }
};