document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-button");
    const publishButton = document.querySelector(".publish-button");
    const searchSection = document.getElementById("search-section");
    const publishSection = document.getElementById("publish-section");
    const featuresSection = document.querySelector(".features");

    // Function to toggle sections
    function toggleSection(sectionToShow, sectionToHide) {
        if (sectionToShow.classList.contains("hidden")) {
            featuresSection.style.display = "none";
            sectionToHide.classList.add("hidden"); // Hide the other section
            sectionToShow.classList.remove("hidden");
            window.scrollTo({
                top: sectionToShow.offsetTop,
                behavior: "smooth"
            });
        } else {
            featuresSection.style.display = "flex";
            sectionToShow.classList.add("hidden");
        }
    }

    // Search Button Functionality
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        toggleSection(searchSection, publishSection);
    });

    // Publish Button Functionality
    publishButton.addEventListener("click", function(event) {
        event.preventDefault();
        toggleSection(publishSection, searchSection);
    });

    // Back Button Functionality
    const backButton = document.createElement("button");
    backButton.innerText = "Back to Home";
    backButton.classList.add("back-button");
    backButton.style.display = "none";
    backButton.style.position = "fixed";
    backButton.style.bottom = "20px";
    backButton.style.right = "20px";
    backButton.style.padding = "10px 20px";
    backButton.style.backgroundColor = "#008cba";
    backButton.style.color = "white";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    document.body.appendChild(backButton);

    backButton.addEventListener("click", function() {
        featuresSection.style.display = "flex";
        searchSection.classList.add("hidden");
        publishSection.classList.add("hidden");
        backButton.style.display = "none";
    });

    // Show Back Button when a section is visible
    [searchButton, publishButton].forEach(button => {
        button.addEventListener("click", function() {
            if (!searchSection.classList.contains("hidden") || !publishSection.classList.contains("hidden")) {
                backButton.style.display = "block";
            } else {
                backButton.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const userButton = document.querySelector(".user-button");
    const authSection = document.getElementById("auth-section");
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Show the auth section when the user button is clicked
    userButton.addEventListener("click", function(event) {
        event.preventDefault();
        authSection.classList.remove("hidden");
    });

    // Switch to the login tab
    loginTab.addEventListener("click", function() {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    });

    // Switch to the signup tab
    signupTab.addEventListener("click", function() {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Hide the auth section when clicking outside the container
    window.addEventListener("click", function(event) {
        if (event.target === authSection) {
            authSection.classList.add("hidden");
        }
    });
});
