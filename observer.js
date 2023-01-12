const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        entry.target.classList.add = intersecting ? "bg-slate-500 " : "opacity-0"
    }),
    {threshold: 0.5}
})

observer.observe(document.getElementsByClassName("scrolly"));