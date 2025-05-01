document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const tel = document.getElementById("tel").value.trim();
    const email = document.getElementById("email").value.trim();

    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phonePattern.test(tel)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your order has been received. We'll be in touch shortly.");
    document.getElementById("order-form").reset();
  });