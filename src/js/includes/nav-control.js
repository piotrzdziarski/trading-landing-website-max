const hamburger = document.getElementById('hamburger');
const hamburgerInner = document.getElementById('hamburger-inner');
const collapse = document.getElementById('collapse');
let collapseHeight;

addEventListener('load', () => {
    if (innerWidth < 768) {
        setUpCollapse();
    }
});

hamburger.onclick = () => {
    if (hamburgerInner.classList.contains('active')) {
        collapse.style.maxHeight = '0';
        hamburgerInner.classList.remove('active');
        collapse.classList.remove('active');
    } else {
        collapse.style.maxHeight = collapseHeight + 'px';
        hamburgerInner.classList.add('active');
        collapse.classList.add('active');
    }
};

addEventListener('resize', () => {
    if (!collapseHeight && innerWidth < 768) {
        setUpCollapse();
    }
});

function setUpCollapse() {
    collapseHeight = collapse.offsetHeight;
    collapse.style.maxHeight = '0';
}

