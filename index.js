$(function(){
    console.log('Script ready!');
    // enter items in input element 
    // items entered need to be submitted with return or button
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const userInput = $('#shopping-list-entry').val()
        const li = `<li><span class="shopping-item">${userInput}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
        $('.shopping-list').append(li);
        $('#shopping-list-entry').val('');
    });
    // add line through by clicking check button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        event.preventDefault();
        const label = $(this).closest('li').find('.shopping-item');
        label.toggleClass('shopping-item__checked');
    });
    // remove items from list when clicking delete 
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        event.preventDefault();
        const remove = $(this).closest('li');
        remove.remove('li');
    });

});