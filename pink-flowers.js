onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

onload = () => {
  // Existing code to remove 'not-loaded' class
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  // New code to hide the overlay text after 5 seconds
  setTimeout(() => {
      document.querySelector(".overlay-text").classList.add("fade-out");
  }, 5000); // 5000 ms = 5 seconds
};
