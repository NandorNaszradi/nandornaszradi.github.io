"use strict"

var list = function (sortingOption) {
    var elements = [];
    todoList.forEach(function (listItem, index) {
        var timeAndTitle,
            hours = listItem.dateTime.getHours(),
            minutes = listItem.dateTime.getMinutes();
        //Time formatting
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Time & title
        timeAndTitle = hours + ':' + minutes + ' - ' + listItem.title;
        //List the items by priorities, urgency
        switch (sortingOption) {
            case 'all':
                console.log((index + 1) + '. List item: ' + JSON.stringify(timeAndTitle));
                break;
            case 'high':
                if (listItem.priority === 'high') {
                    console.log((index + 1) + '. High priority task: ' + JSON.stringify(timeAndTitle));
                }
                break;
            case 'normal':
                if (listItem.priority === 'normal') {
                    console.log((index + 1) + '. Normal priority task: ' + JSON.stringify(timeAndTitle));
                }
                break;
            case 'low':
                if (listItem.priority === 'low') {
                    console.log((index + 1) + '. Low priority task: ' + JSON.stringify(timeAndTitle));
                }
                break;
            case 'urgent':
                if (listItem.urgent === true) {
                    console.log((index + 1) + '. Urgency task: ' + JSON.stringify(timeAndTitle));
                }
                break;
            case 'time':
                elements.push(JSON.stringify(timeAndTitle));
                break;
            case 'abc':
                elements.push(listItem.title);
                break;
            default:
                console.log('Wrong sorting option!');
                break;
        }
    });
    switch (sortingOption) {
        case 'abc':
            console.log('ABC sort: \n' + elements.sort().toString().split(',').join('\n'));
            break;
        case 'time':
            console.log('Time sort: \n' + elements.sort().toString().split(',').join('\n'));
            break;
        case 'everything':
            console.log('Every object: \n' + JSON.stringify(todoList).split(',').join('\n'));
            break;
    }
};