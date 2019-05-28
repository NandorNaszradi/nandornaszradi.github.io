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

    //Function for show modals
    var showModal = function (questionText, detailsText) {
        $('body').append(
            '<div class="modal-overlay">' +
                '<div class="modal">' +
                    '<i class="fas fa-times-circle close"></i>' +
                    '<h2>Delete item</h2>' +
                    '<p>' + questionText + '</p><br/><p>' + detailsText + '</p>' +
                    '<div class="modal-buttons">' +
                        '<button type="button" class="delete">Yes<i class="fas fa-trash-alt"></i></button>' +
                        '<button type="button" class="finished no-delete">No<i class="fas fa-times"></i></button>' +
                    '</div>' +
                '</div>' +
            '</div>'
        ).css('overflow', 'hidden');
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
            minutes = listItem.dateTime.getMinutes(),
            year = listItem.dateTime.getUTCFullYear(),
            month = listItem.dateTime.getUTCMonth(),
            day = listItem.dateTime.getUTCDate();
        
        //Time and date formatting
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        //console.log('DATE: ' + year + '.' + month + '.' + day);

        todoListItemAppender(hours + ':' + minutes, listItem.title, listItem.description, index);
        //Add urgent class to urgency items
        if (listItem.urgent === true) $('.todo-list-item:nth-of-type(' + (index + 1) + ')').addClass('urgent');
        //Add priorities to the items
        $('.todo-list-item:nth-of-type(' + (index + 1) + ')').attr('priority', listItem.priority);
    });

    //Remove task from the list
    $('.todo-list').on('click', '.delete', function(){
        var actualItem = $(this).closest('.todo-list-item');
        showModal('Do you want to delete this task?', actualItem.find('.todo-list-item-text').text());
        $('.modal-buttons .delete').click(function(){
            actualItem.remove();
            $('.modal-overlay').remove();
            $('body').css('overflow', 'auto');
        });
        $('.modal-buttons .no-delete, .modal .close').click(function(){
            $('.modal-overlay').remove();
            $('body').css('overflow', 'auto');
        });
        event.preventDefault();
    });

    //Set items finished
    $('.todo-list').on('click', '.finished', function(){
        $(this).closest('.todo-list-item').addClass('finished-item');
        $(this).parent().find('button, :checkbox').prop('disabled', true);
        event.preventDefault();
    });

    //Edit the existing list items
    $('.todo-list').on('click', '.edit', function(){
        var actualItem = $(this).closest('.todo-list-item'),
            description = actualItem.find('.todo-list-item-buttons-details').text(),
            timeAndTitle = actualItem.find('.todo-list-item-text').text().split(' - ');
            
        //Show the edit modal
        $('body').append(
            '<div class="modal-overlay">' +
                '<div class="modal">' +
                    '<i class="fas fa-times-circle close"></i>' +
                    '<h2>Edit item</h2>' +
                    '<div class="edit-form-block">' +
                        '<label for="edit-task-title">Task title:<abbr title="required">*</abbr></label>' +
                        '<input type="text" id="edit-task-title" name="edit-task-title" value="'+ timeAndTitle[1] +'" minlength="3" maxlength="100" required/>' +
                    '</div>' +
                    '<div class="edit-form-block">' +
                        '<label for="edit-task-time">Time:<abbr title="required">*</abbr></label>' +
                        '<input type="time" id="edit-task-time" name="edit-task-time" value="'+ timeAndTitle[0] +'" min="00:00" max="23:59" required/>' +
                    '</div>' +
                    '<div class="edit-form-block">' +
                        '<label for="edit-task-description">Description:<abbr title="required">*</abbr></label>' +
                        '<textarea id="edit-task-description" name="edit-task-description" minlength="3" maxlength="500" required>' + description + '</textarea>' +
                    '</div>' +
                    '<div class="modal-buttons">' +
                        '<button type="button" class="finished">Yes<i class="fas fa-check"></i></button>' +
                        '<button type="button" class="delete">No<i class="fas fa-times"></i></button>' +
                    '</div>' +
                '</div>' +
            '</div>'
        ).css('overflow', 'hidden');
        $('.modal-buttons .finished').click(function(){
            var taskTime = $('#edit-task-time').val(),
                taskTitle = $('#edit-task-title').val(),
                taskDesc = $('#edit-task-description').val();
            
            $('.modal-overlay').remove();
            $('body').css('overflow', 'auto');
        });
        $('.modal-buttons .delete, .modal .close').click(function(){
            $('.modal-overlay').remove();
            $('body').css('overflow', 'auto');
        });
        event.preventDefault();
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