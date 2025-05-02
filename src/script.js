document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('order-form');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const tel = document.getElementById('tel').value.trim();
            const email = document.getElementById('email').value.trim();
            const location = document.getElementById('location').value.trim();
            const design = document.getElementById('design').value.trim();
    
            if (!tel || !email || !location || !design) {
                alert('Please fill in all the fields.');
                return;
            }
    
            alert('Thank you for your order! We will get in touch soon.');
            form.reset();
        });
    });
