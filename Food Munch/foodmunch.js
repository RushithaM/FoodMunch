document.addEventListener("DOMContentLoaded", function() {
    var viewMenuButton = document.querySelector(".order-button");
    var exploreMenuSection = document.getElementById("explore-menu-section");
    if (viewMenuButton && exploreMenuSection) {
        viewMenuButton.addEventListener("click", function() {
            exploreMenuSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
    var orderNowButton = document.querySelector(".order-button");
    var deliveryAndPaymentSection = document.getElementById("dandp-section");

    if (orderNowButton && deliveryAndPaymentSection) {
        orderNowButton.addEventListener("click", function() {
            deliveryAndPaymentSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});