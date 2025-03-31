document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const resultDiv = document.getElementById("result");
    const addCourseButton = document.getElementById("addCourse");
    const coursesDiv = document.getElementById("courses");

    // Add new course input field
    addCourseButton.addEventListener("click", function () {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "course";
        newInput.classList.add("course-input");

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.type = "button";
        deleteButton.classList.add("deleteCourse");

        const courseWrapper = document.createElement("div");
        courseWrapper.appendChild(newInput);
        courseWrapper.appendChild(deleteButton);
        coursesDiv.appendChild(courseWrapper);

        deleteButton.addEventListener("click", function () {
            coursesDiv.removeChild(courseWrapper);
        });
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Validate form fields
        if (!document.getElementById("agreement").checked) {
            alert("You must agree to the terms.");
            return;
        }

        // Gather form data
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const imageCaption = document.getElementById("imageCaption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webDevBackground = document.getElementById("webDevBackground").value;
        const computerPlatform = document.getElementById("computerPlatform").value;
        const funnyThing = document.getElementById("funnyThing").value;
        const anythingElse = document.getElementById("anythingElse").value;

        const courses = Array.from(document.querySelectorAll(".course-input"))
            .map(input => input.value)
            .filter(value => value.trim() !== "");

        // Display results
        resultDiv.innerHTML = `
            <h2>${name}'s Introduction Page</h2>
            <p><strong>Mascot:</strong> ${mascot}</p>
            <p><strong>Image Caption:</strong> ${imageCaption}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
            <p><strong>Primary Computer Platform:</strong> ${computerPlatform}</p>
            <p><strong>Courses Currently Taking:</strong> ${courses.join(", ")}</p>
            <p><strong>Funny Thing:</strong> ${funnyThing}</p>
            <p><strong>Anything Else:</strong> ${anythingElse}</p>
            <br>
            <button id="resetPage">Reset</button>
        `;

        // Show result and hide form
        form.style.display = "none";
        resultDiv.style.display = "block";

        // Add event listener for reset button
        document.getElementById("resetPage").addEventListener("click", function () {
            form.reset();
            form.style.display = "block";
            resultDiv.style.display = "none";
        });
    });
});
