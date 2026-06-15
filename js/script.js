/* ================= YEAR ================= */
		document.getElementById("year").textContent = new Date().getFullYear();


		/* ================= MOBILE MENU ================= */
		const menuToggle = document.getElementById("menuToggle");
		const navbar = document.getElementById("navbar");

		menuToggle.addEventListener("click", () => {
			navbar.classList.toggle("active");
			menuToggle.classList.toggle("active");

			const isOpen = navbar.classList.contains("active");
			menuToggle.setAttribute("aria-expanded", isOpen);
		});

		document.querySelectorAll(".nav-link").forEach(link => {
			link.addEventListener("click", () => {
				navbar.classList.remove("active");
				menuToggle.classList.remove("active");
				menuToggle.setAttribute("aria-expanded", "false");
			});
		});

		document.addEventListener("click", (e) => {
			if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
				navbar.classList.remove("active");
				menuToggle.classList.remove("active");
				menuToggle.setAttribute("aria-expanded", "false");
			}
		});


		/* ================= REVEAL ANIMATION ================= */
		const reveals = document.querySelectorAll(".reveal");

		function revealElements() {
			reveals.forEach((el) => {
				const top = el.getBoundingClientRect().top;
				const trigger = window.innerHeight - 100;

				if (top < trigger) {
					el.classList.add("active");
				}
			});
		}

		window.addEventListener("scroll", revealElements);
		window.addEventListener("load", revealElements);


		/* ================= ACTIVE NAV ================= */
		const sections = document.querySelectorAll("section[id]");
		const navLinks = document.querySelectorAll(".nav-link");

		function setActiveNav() {
			let current = "";

			sections.forEach(section => {
				const top = section.offsetTop;
				const height = section.clientHeight;

				if (window.scrollY >= top - height / 3) {
					current = section.id;
				}
			});

			navLinks.forEach(link => {
				link.classList.remove("active");

				if (link.getAttribute("href") === "#" + current) {
					link.classList.add("active");
				}
			});
		}

		window.addEventListener("scroll", setActiveNav);
		window.addEventListener("load", setActiveNav);

		
		/* ================= PROJECT SCROLL ================= */
		/*const projectsScroll = document.getElementById("projectsScroll");
		const projectCard = document.querySelector(".project-card");

		function getScrollAmount() 
		{
			const gap = parseInt(
				getComputedStyle(projectsScroll).gap
			) || 0;

			return projectCard.offsetWidth + gap;
		}

		document
			.getElementById("projectNext")
			.addEventListener("click", () => 
			{

				projectsScroll.scrollBy({
					left: getScrollAmount(),
					behavior: "smooth"
				});

			});

		document
			.getElementById("projectPrev")
			.addEventListener("click", () => 
			{

				projectsScroll.scrollBy({
					left: -getScrollAmount(),
					behavior: "smooth"
				});

			});*/
		
		/* ================= WHATSAPP FORM ================= */
		function sendToWhatsApp(e) 
		{
		  e.preventDefault();

		  const name = document.getElementById("name").value.trim();
		  const email = document.getElementById("email").value.trim();
		  const project = document.getElementById("project").value.trim();
		  const message = document.getElementById("message").value.trim();

		  document.getElementById("nameError").textContent = "";
		  document.getElementById("emailError").textContent = "";

		  let hasError = false;

		  // Name validation
		  if (name.length < 3) {
			document.getElementById("nameError").textContent =
			  "Name must be at least 3 characters.";
			hasError = true;
		  }

		  // Email validation
		  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

		  if (!emailPattern.test(email)) {
			document.getElementById("emailError").textContent =
			  "Enter a valid email address.";
			hasError = true;
		  }

		  if (hasError) return;

		  const phone = "919336620110";

		  const text = `✨ New Project Inquiry

		👤 Name: ${name}
		📧 Email: ${email}
		📁 Project: ${project}

		📝 Message:
		${message}`;

		  const url =
			`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

		  window.open(url, "_blank");
		}


		/* ================= CUSTOM CURSOR ================= */
		if (window.matchMedia("(pointer: fine)").matches) {

			const dot = document.querySelector(".cursor-dot");
			const ring = document.querySelector(".cursor-ring");

			let mouseX = 0, mouseY = 0;
			let ringX = 0, ringY = 0;

			document.addEventListener("mousemove", (e) => {
				mouseX = e.clientX;
				mouseY = e.clientY;

				dot.style.left = mouseX + "px";
				dot.style.top = mouseY + "px";
			});

			function animateCursor() {
				ringX += (mouseX - ringX) * 0.15;
				ringY += (mouseY - ringY) * 0.15;

				ring.style.left = ringX + "px";
				ring.style.top = ringY + "px";

				requestAnimationFrame(animateCursor);
			}

			animateCursor();

			document.querySelectorAll("a, button, input, textarea").forEach(el => {
				el.addEventListener("mouseenter", () => {
					ring.style.width = "60px";
					ring.style.height = "60px";
				});

				el.addEventListener("mouseleave", () => {
					ring.style.width = "40px";
					ring.style.height = "40px";
				});
			});
		}