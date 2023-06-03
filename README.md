# -drag-drop_UI-

dragStart(e): This function is triggered when a drag operation starts on an item. It adds the CSS class "dragging" to the dragged item, sets the effectAllowed property to "move" to indicate that the item can be moved, and sets the data type of the drag data to plain text with an empty value.

dragEnd(): This function is triggered when the drag operation ends. It removes the CSS class "dragging" from the dragged item.

dragOver(e): This function is triggered when a dragged item is being dragged over a valid drop target. It prevents the default action of the event, adds the CSS class "over" to the drop target column, and sets the dropEffect property to "move" to indicate that the item can be moved.

dragEnter(e): This function is triggered when a dragged item enters a valid drop target. It prevents the default action of the event.

dragLeave(e): This function is triggered when a dragged item leaves a valid drop target. It prevents the default action of the event and removes the CSS class "over" from the drop target column. If the target element is a column (not a child element within the column), the "over" class is removed.

dragDrop(e): This function is triggered when a dragged item is dropped onto a valid drop target. It prevents the default action of the event, removes the CSS class "over" from the drop target column, and retrieves the dragged item using the CSS selector ".dragging". It also retrieves the original column of the dragged item. If the dragged item is dropped into a different column, it moves the dragged item to the new column by appending it to the <ul> element within the drop target column.
