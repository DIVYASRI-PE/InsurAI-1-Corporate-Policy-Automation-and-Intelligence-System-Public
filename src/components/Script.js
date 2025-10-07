// ----- REGISTER -----
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Grab all form values
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("regEmail").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const country = document.getElementById("country").value;
  const role = document.getElementById("role").value || "employee";
  const department = document.getElementById("department").value;
  const empId = document.getElementById("empId").value;
  const policyPref = document.getElementById("policyPref").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Password validation
  const strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/;
  if (!strongPass.test(password)) {
    alert("❌ Password must have 8 chars, uppercase, lowercase, number, and special symbol.");
    return;
  }

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  // Store user in localStorage (mock)
  const user = {
    name, dob, gender, email, phone, address, city, state, zip, country,
    role, department, empId, policyPref
  };
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("✅ Registration successful! Redirecting to dashboard...");
  window.location.href = "dashboard.html";
});

// ----- LOGIN -----
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Mock login: allow any input
  let user = localStorage.getItem("loggedInUser");
  if (user) {
    user = JSON.parse(user);
  } else {
    // If no registered user, create a default mock user
    user = {
      name: "User",
      email,
      role: "employee",
      dob: "",
      gender: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      department: "",
      empId: "",
      policyPref: ""
    };
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }

  alert("✅ Login successful! Redirecting to dashboard...");
  window.location.href = "dashboard.html";
});

