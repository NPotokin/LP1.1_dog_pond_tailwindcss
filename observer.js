let observants = document.querySelectorAll(".scrolly")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("isShown", entry.isIntersecting);
    }),
    {threshold: 0.5}
    console.log(entries);
})

observants.forEach(observant => {
    observer.observe(observant)
});
