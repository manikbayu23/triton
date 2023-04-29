//navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById('header').style.backgroundColor = '#3C4192';
        document.getElementById('header').style.borderBottomColor = 'white';
        document.getElementById('header').style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

    } else {
        document.getElementById('header').style.backgroundColor = 'transparent';
        document.getElementById('header').style.borderBottomColor = 'transparent';
        document.getElementById('header').style.boxShadow = 'none';

    }
});

var h2 = document.querySelector('h2');
window.addEventListener('load', function () {
    h2.classList.add('show');
});

//tahun footer
const tahunSpan = document.getElementById('tahun');
const tahunSekarang = new Date().getFullYear();
tahunSpan.textContent = tahunSekarang;

const MyNamespace = {
    init: function () {
        const comments = document.querySelector('.comments');

        setInterval(function () {
            comments.scrollBy(0, 1);
            if (comments.scrollTop >= comments.scrollHeight - comments.offsetHeight) {
                comments.scrollTop = 0;
            }
        }, 20);
    }
};


//loader
var loader = function () {
    setTimeout(function () {
        if ($('#triton-loader').length > 0) {
            $('#triton-loader').removeClass('show');
            $('.animate-home').addClass('animate__animated animate__fadeInUp');
            $('.animate-home-left').addClass('animate__animated animate__zoomIn');
        }
    }, 1000);
};

loader();


// var buttonHome = document.querySelector(".button-home");

// // Tambahkan event listener untuk window dan menentukan kapan elemen akan muncul
// window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 500) {
//         buttonHome.classList.add("home-scroll");
//     } else {
//         buttonHome.classList.remove("home-scroll");
//     }
// });