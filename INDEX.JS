const checklist = document.getElementById("checklist");

// Add a new item to the list
function addItem() {
  const input = document.getElementById("newItemInput");
  const text = input.value.trim();

  if (text) {
    const li = document.createElement("li");
    
    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      checklist.removeChild(li); // Remove the item when checked
    });

    // Create the label
    const label = document.createElement("span");
    label.textContent = text;

    // Create the color picker
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.className = "color-picker";
    colorPicker.addEventListener("input", (e) => {
      li.style.backgroundColor = e.target.value;
    });

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      checklist.removeChild(li);
    });

    // Assemble the list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(colorPicker);
    li.appendChild(deleteBtn);

    checklist.appendChild(li);
    input.value = ""; // Clear the input field
  }
}

const chatbox = document.getElementById("chatbox");

// Add a new note to the chatbox
function addNote() {
  const input = document.getElementById("newNoteInput");
  const text = input.value.trim();

  if (text) {
    const li = document.createElement("li");
    
    // Create the note content
    const note = document.createElement("span");
    note.textContent = text;

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      chatbox.removeChild(li);
    });

    // Create the color picker for the note
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.className = "color-picker";
    colorPicker.addEventListener("input", (e) => {
      li.style.backgroundColor = e.target.value;
    });

    // Assemble the chat note
    li.appendChild(note);
    li.appendChild(colorPicker);
    li.appendChild(deleteBtn);

    chatbox.appendChild(li);
    input.value = ""; // Clear the input field
  }
}

