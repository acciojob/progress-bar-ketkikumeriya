//your JS code here. If required.
        const circles = document.querySelectorAll(".circle");
        const progress = document.querySelector(".progress");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        let currentStep = 1;

        next.addEventListener("click", () => {
            currentStep++;
            updateProgress();
        });

        prev.addEventListener("click", () => {
            currentStep--;
            updateProgress();
        });

        function updateProgress() {
            circles.forEach((circle, index) => {
                if (index < currentStep) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }
            });
            
            progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + "%";
            
            prev.disabled = currentStep === 1;
            next.disabled = currentStep === circles.length;
        }
