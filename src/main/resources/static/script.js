const policies = [
  { name: "Health Insurance", premium: "₹5000/year", years: 5, benefits: "Covers hospital bills, medicines, and surgeries" },
  { name: "Vehicle Insurance", premium: "₹3000/year", years: 3, benefits: "Covers car/bike accidents, damages, third-party liability" },
  { name: "Life Insurance", premium: "₹8000/year", years: 10, benefits: "Financial support to family, accidental death cover" }
];

window.onload = function() {
    const policiesDiv = document.getElementById("policies");
    if(!policiesDiv) return;
    policies.forEach(policy => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${policy.name}</strong><br>
                          Premium: ${policy.premium}<br>
                          Duration: ${policy.years} years<br>
                          Benefits: ${policy.benefits}`;
        policiesDiv.appendChild(card);
    });
};
