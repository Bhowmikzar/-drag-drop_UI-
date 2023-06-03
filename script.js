// Get the items
var items = document.querySelectorAll(".list-card ul li");

// Add event listeners to each item
items.forEach(function (item) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

// Drag functions
function dragStart(e) {
  this.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null);
}

function dragEnd() {
  this.classList.remove("dragging");
}

// Drop functions
var columns = document.querySelectorAll(".column");

columns.forEach(function (column) {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  this.classList.add("over");
  e.dataTransfer.dropEffect = "move";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.preventDefault();
  if (e.target.classList.contains("column")) {
    this.classList.remove("over");
  }
}

function dragDrop(e) {
  e.preventDefault();
  this.classList.remove("over");
  var draggedItem = document.querySelector(".dragging");
  var originalColumn = draggedItem.parentNode.parentNode;

  // Check if the item has been dropped into a different column
  if (this !== originalColumn) {
    // Move the dragged item to the new column
    this.querySelector("ul").appendChild(draggedItem);
  }
}
