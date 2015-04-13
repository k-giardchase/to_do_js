$(document).ready(function() {
  $("form#new_task").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#new-name").val();
    var inputNotes = $("input#new-notes").val();
    var inputDueDate = $("input#new-due-date").val();

    var newTask = { name: inputName, notes: inputNotes, duedate: inputDueDate };

    $("ul#tasks").append("<span class='task'><li>" + newTask.name + "</li></span>");

    $("input#new-name").val("");
    $("input#new-notes").val("");
    $("input#new-due-date").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.name);
      $(".notes").text(newTask.notes);
      $(".due-date").text(newTask.duedate);

      //   $(function(){
      //     $('.task').on('click', function() {
      //       var b = $('<input type="button" class="btn-info complete-btn"/>');
      //     $("#show-task").append(b)
      //     });
      //   });
      // });

    $(".complete-btn").last().click(function() {
      $(this).remove();
      $("#complete").show();
      $("ul#finished").append("<li><span class='completed-task'>" + newTask.name + "</span></li>");

    });
  });
});
