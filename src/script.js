var _a;
(_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name && email && message) {
        console.log("Name: ".concat(name, ", Email: ").concat(email, ", Message: ").concat(message));
        alert('お問い合わせありがとうございます！');
    }
    else {
        alert('全てのフィールドを入力してください。');
    }
});
window.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var headerOffsetTop = (header === null || header === void 0 ? void 0 : header.offsetTop) || 0;
    window.addEventListener('scroll', function () {
        if (header) {
            if (window.scrollY > headerOffsetTop) {
                header.classList.add('fixed');
            }
            else {
                header.classList.remove('fixed');
            }
        }
    });
});
