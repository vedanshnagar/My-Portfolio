// Initialize EmailJS
emailjs.init("-a5f-Vf_Ir80ue-LO");

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 1600) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Aspiring Full Stack Developer",
      "Lifelong Learner",
      "Graphics Designer",
      "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Aspiring Full Stack Developer",
      "Lifelong Learner",
      "Graphics Designer",
      "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submit-btn');
  const originalText = submitBtn.textContent;
 emailjs.send('service_ad5ko24', 'template_ft35oge', {
  submitBtn.disabled = true;

  const name = document.getElementById('user_name').value;
  const email = document.getElementById('user_email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    user_name: name,
    user_email: email,
    subject: subject,
    message: message
  }).then(function() {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, function(error) {
    alert('Error sending message');
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
});