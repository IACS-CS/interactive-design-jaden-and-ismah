console.log("Hello, Interactive Graphic Design!");
// Select all buttons with data-action
document.querySelectorAll("button[data-action]").
forEach(button => {
// Add click event listener to each button
  button.addEventListener("click", event => {
    const action = event.target.getAttribute("data-action");
    // Hide all feedback messages
    document.querySelectorAll("div[data-feedback]").forEach(feedback => {
      feedback.classList.remove("active");
    });
    // Show the feedback message corresponding to the clicked button
    const feedbackToShow = document.querySelector(`div[data-feedback="${action}"]
      `);
    if (feedbackToShow) {
      feedbackToShow.classList.add('active');
    }
  });
});
