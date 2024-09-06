
        document.getElementById("hamburger-btn").onclick = function() { 
            var navegation = document.querySelector(".nvgtn-btn");
    
            
            if (navegation.classList.contains("active")) {
                navegation.classList.remove("active");
                navegation.classList.add("inactive");
            } else {
                navegation.classList.remove("inactive");
                navegation.classList.add("active");
                navegation.style.display = "flex"; 
            }
        }
    
        document.addEventListener("click", function(event) {
            var navegation = document.querySelector(".nvgtn-btn");
            var hamburgerBtn = document.getElementById("hamburger-btn");
    
            if (navegation.classList.contains("active") && 
                !navegation.contains(event.target) && 
                !hamburgerBtn.contains(event.target)) {
                
                navegation.classList.remove("active");
                navegation.classList.add("inactive");
            }
        });
    
       
        document.querySelector(".nvgtn-btn").addEventListener("animationend", function() {
            if (this.classList.contains("inactive")) {
                this.style.display = "none";
            }
        });
        
            function animateValue(element, start, end, duration) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.innerText = value;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            const numbers = document.querySelectorAll('.numbers-content h2');
            let hasAnimated = false;  // Tekrar tekrar animasyon olmaması için
            
            const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        // Animasyonu sadece bir kez başlat
                        animateValue(numbers[0], 0, 12000, 2000);
                        animateValue(numbers[1], 0, 84, 2000);
                        animateValue(numbers[2], 0, 307, 2000); // 3.07 olarak ayarlayacağız
                        animateValue(numbers[3], 0, 24, 2000);
                        hasAnimated = true; // Animasyon tekrar başlamasın
                    }
                });
            }, { threshold: 0.7 });  // Elemanın en az %50'si görünür olduğunda 
    
            const target = document.querySelector('.numbers');
            observer.observe(target);
        });
        
        document.addEventListener('DOMContentLoaded', function () {
            const options = {
                threshold: 0.9 // Elementin %50'si görünür olduğunda 
            };
        
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Bir kere animasyon yaptır, sonra gözlemlemeyi bırak
                    }
                });
            }, options);
        
            // Tüm .hidden elementlerini gözlemleyelim
            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach(el => observer.observe(el));
        });


       // Modal elemanları
        const loginModal = document.getElementById("loginModal");
        const signupModal = document.getElementById("signupModal");
        const loginBtn = document.querySelector(".btn.login-btn");
        const closeBtns = document.querySelectorAll(".close");
        const showSignupLink = document.getElementById("showSignup");
        const showLoginLink = document.getElementById("showLogin");
        
      
        loginBtn.onclick = function() {
          loginModal.style.display = "flex";
        }
        
        
        closeBtns.forEach(btn => {
          btn.onclick = function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
          }
        });
        
        // Signup linkine tıklayınca signup modalı açılır, login modalı kapanır
        showSignupLink.onclick = function(e) {
          e.preventDefault();
          loginModal.style.display = "none";
          signupModal.style.display = "flex";
        }
        
        // Login linkine tıklayınca login modalı açılır, signup modalı kapanır
        showLoginLink.onclick = function(e) {
          e.preventDefault();
          signupModal.style.display = "none";
          loginModal.style.display = "flex";
        }
        
        // Modalın dışına tıklanırsa modal kapanır
        window.onclick = function(event) {
          if (event.target == loginModal) {
            loginModal.style.display = "none";
          }
          if (event.target == signupModal) {
            signupModal.style.display = "none";
          }
        }

