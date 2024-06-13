$('#btnAdd').click(function() {
    var newBook = $('#txtNewBook').val();
    var selectsBook = $('#selectsBook').append(new Option(newBook, newBook));
})