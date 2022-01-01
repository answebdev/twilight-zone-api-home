// Logic to remove anchor link hash from url

const handleHashUrl = () => {
  // When the DOM is ready
  document.addEventListener('DOMContentLoaded', function (event) {
    // Get the anchor link buttons
    const menuBtn = document.querySelectorAll('.hashed');
    // Loop through buttons - when each button is clicked
    menuBtn.forEach(function (el) {
      el.addEventListener('click', function () {
        setTimeout(() => {
          // Call removeHash function after set timeout
          removeHash();
        }, 5); // 5 milliseconds - needed to give it enough time to actually do the anchor scroll
      });
    });

    // removeHash function
    // Uses HTML5 history API to manipulate the location bar
    function removeHash() {
      window.history.replaceState(
        '',
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }
  });
};

export default handleHashUrl;
