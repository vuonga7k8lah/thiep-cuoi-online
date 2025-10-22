// tabbar.js
(function () {
    // 1. Tạo nội dung HTML cho thanh điều hướng
    const tabbarHTML = `
        <div id="left-tabbar">
            <nav>
                <ul>
                    <li><a href="index.html">Mẫu 1</a></li>
                    <li><a href="index2.html">Mẫu 2</a></li>
                    <li><a href="index1.html">Mẫu 3</a></li>
                </ul>
            </nav>
        </div>
    `;

    // 2. Chèn HTML vào đầu thẻ body
    document.body.insertAdjacentHTML("afterbegin", tabbarHTML);

    // 3. Đánh dấu trang hiện tại là "active"
    document.addEventListener("DOMContentLoaded", function () {
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll("#left-tabbar nav ul li a");

        navLinks.forEach((link) => {
            const linkPage = link.getAttribute("href").split("/").pop();
            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    });
})();
