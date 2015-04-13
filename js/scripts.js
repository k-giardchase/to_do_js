$(document).ready(function() {
  $("form#new_task").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#new-name").val();
    var inputNotes = $("input#new-notes").val();
    var inputDueDate = $("input#new-due-date").val();

    var newTask = { name: inputName, notes: inputNotes, duedate: inputDueDate };

    $("ul#tasks").append("<li><span class='task'" + "id='" + newTask.name + "'>" + newTask.name + "</li><input type='checkbox'" + "id='" + newTask.name + "'></span>");

    $("input#new-name").val("");
    $("input#new-notes").val("");
    $("input#new-due-date").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.name);
      $(".notes").text(newTask.notes);
      $(".due-date").text(newTask.duedate);

    });

    $('#' + $(this).name).click(function() {
      $("#complete").show();
      $("ul#finished").append("<li><span class='task'>" + newTask.name + "</span></li>");

    });
  });
});
