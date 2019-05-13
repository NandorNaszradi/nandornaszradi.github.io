"use strict"

$(function(){
    //Function for inserting the TODO list elements into the DOM
    var todoListItemAppender = function (time, title, description, itemIndex) {
        $('.todo-list').append(
            '<li class="todo-list-item">' +
                '<p class="todo-list-item-text">' + time + ' - ' + title + '</p>' +
                '<div class="todo-list-item-buttons">' +
                    '<button type="button" class="delete">Delete<i class="fas fa-trash-alt"></i></button>' +
                    '<button type="button" class="edit">Edit<i class="fas fa-edit"></i></button>' +
                    '<button type="button" class="finished">Finished<i class="fas fa-check"></i></button>' +
                    '<input type="checkbox" name="checkbox-toggle-'+ (itemIndex + 1) +'"id="checkbox-toggle-'+ (itemIndex + 1) +'">' +
                    '<label for="checkbox-toggle-'+ (itemIndex + 1) +'">Details<i class="fas fa-info-circle"></i></label>' +
                    '<p class="todo-list-item-buttons-details">'+ description +'</p>' +
                '</div>' +    
            '</li>'
        );
    };

    //Function for stringify and format the new task's form input values
    var stringFormatter = function (element) {
        return JSON.stringify($(element).val()).slice(1, -1);
    };

    //Add new todo list items
    $('#add-new-item').click(function(){

        var lisItemData = {
            time: stringFormatter('#time'),
            title: stringFormatter('#task-title'),
            description: stringFormatter('#task-description')
        },
            listItemNumber = $('.todo-list-item').length + 1;  

        todoListItemAppender(lisItemData.time, lisItemData.title, lisItemData.description, listItemNumber);
        event.preventDefault();

    });

    //Build the list from model.js
    todoList.forEach(function(listItem, index){

        //Get hours and minutes
        var hours = listItem.dateTime.getHours(),
            minutes = listItem.dateTime.getMinutes();

        //Time formatting
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        todoListItemAppender(hours + ':' + minutes, listItem.title, listItem.description, index);

        if (listItem.urgent === true) $('.todo-list-item:nth-of-type(' + (index + 1) + ')').addClass('urgent');

    });

    //Remove task from the list
    $('.todo-list').on('click', '.delete', function(){
        $(this).parents('.todo-list-item').remove();
    });

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
});