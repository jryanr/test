/*
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
*/



document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("sApM9WRQD-j-3WLz3"); // Replace with your EmailJS public key

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const serviceID = 'service_zzgu78s'; // Replace with your EmailJS service ID
        const templateID = 'template_z0n8rxh'; // Replace with your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, '#contact-form')
            .then(function() {
                alert('Email successfully sent!');
            }, function(error) {
                alert('Email sending failed: ' + JSON.stringify(error));
            });
    });
});

function buyNow(productName, productImage, productPrice, productQuantity) {
    const url = `payment.html?name=${encodeURIComponent(productName)}&image=${encodeURIComponent(productImage)}&price=${encodeURIComponent(productPrice)}&quantity=${encodeURIComponent(productQuantity)}`;
    window.location.href = url;
}