// $(document).ready(function() {

//   //sticky header
//     $(window).scroll(function() {
//       if ($(this).scrollTop() > 1) {
//         $(".header-area").addClass("sticky");
//       } else {
//         $(".header-area").removeClass("sticky");
//       }
  
//       // Update the active section in the header
//       updateActiveSection();
//     });
  
//     $(".header ul li a").click(function(e) {
//       e.preventDefault(); 
  
//       var target = $(this).attr("href");
  
//       if ($(target).hasClass("active-section")) {
//         return; 
//       }
  
//       if (target === "#home") {
//         $("html, body").animate(
//           {
//             scrollTop: 0 
//           },
//           500
//         );
//       } else {
//         var offset = $(target).offset().top - 40; 
  
//         $("html, body").animate(
//           {
//             scrollTop: offset
//           },
//           500
//         );
//       }
  
//       $(".header ul li a").removeClass("active");
//       $(this).addClass("active");
//     });
  

//     //Initial content revealing js
//     ScrollReveal({
//       distance: "100px",
//       duration: 2000,
//       delay: 200
//     });
  
//     ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
//       origin: "left"
//     });
//     ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
//       origin: "right"
//     });
//     ScrollReveal().reveal(".project-title, .contact-title", {
//       origin: "top"
//     });
//     ScrollReveal().reveal(".projects, .contact", {
//       origin: "bottom"
//     });

//   //contact form to excel sheet
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
//   const form = document.forms['submitToGoogleSheet']
//   const msg = document.getElementById("msg")

//   form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//           .then(response => {
//               msg.innerHTML = "Message sent successfully"
//               setTimeout(function () {
//                   msg.innerHTML = ""
//               }, 5000)
//               form.reset()
//           })
//           .catch(error => console.error('Error!', error.message))
//   })
    
//   });
  
//   function updateActiveSection() {
//     var scrollPosition = $(window).scrollTop();
  
//     // Checking if scroll position is at the top of the page
//     if (scrollPosition === 0) {
//       $(".header ul li a").removeClass("active");
//       $(".header ul li a[href='#home']").addClass("active");
//       return;
//     }
  
//     // Iterate through each section and update the active class in the header
//     $("section").each(function() {
//       var target = $(this).attr("id");
//       var offset = $(this).offset().top;
//       var height = $(this).outerHeight();
  
//       if (
//         scrollPosition >= offset - 40 &&
//         scrollPosition < offset + height - 40
//       ) {
//         $(".header ul li a").removeClass("active");
//         $(".header ul li a[href='#" + target + "']").addClass("active");
//       }
//     });
//   }
function submitForm(formData) {
  try {
      var data = formData.split('&').reduce(function(prev, curr) {
          var p = curr.split('=');
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});

      var recipient = 'sharathpoojari456@gmail.com'; // Enter your email address here
      var emailSubject = 'New message from your website';
      var emailBody = 'Name: ' + data.NAME + '\n' +
                      'Email: ' + data.EMAIL + '\n' +
                      'Subject: ' + data.SUBJECT + '\n' +
                      'Message: ' + data.MESSAGE;

      MailApp.sendEmail(recipient, emailSubject, emailBody);

      return 'Success';
  } catch (error) {
      return 'Error: ' + error.toString();
  }
}


 // Google Apps Script Code.gs
//  $(document).ready(function() {
//   // Form submission handling
//   $('form[name="submitToGoogleSheet"]').submit(function(e) {
//       e.preventDefault(); // Prevent the default form submission behavior
      
//       // Add your form submission logic here
      
//       // Display thank you message
//       alert('Thank you for your message!');
//   });
// });
// function doPost(e) {
//   try {
//     var formData = e.parameter;
    
//     // Extract form data
//     var name = formData.NAME;
//     var email = formData.EMAIL;
//     var subject = formData.SUBJECT;
//     var message = formData.MESSAGE;
    
//     // Send email notification
//     var recipient = 'sharathpoojari456@gmail.com'; // Enter your email address here
//     var emailSubject = 'New message from your website';
//     var emailBody = 'Name: ' + name + '\n' +
//                     'Email: ' + email + '\n' +
//                     'Subject: ' + subject + '\n' +
//                     'Message: ' + message;
    
//     MailApp.sendEmail(recipient, emailSubject, emailBody);
    
//     return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
//   } catch (error) {
//     return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
//   }
// }
