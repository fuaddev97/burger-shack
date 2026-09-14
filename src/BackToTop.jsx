export default function BackToTop() {
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <button type="button" className="back-to-top" onClick={handleBackToTop}>
      <span><i className="fa-solid fa-arrow-up"></i></span>
      Back to top
    </button>
  );
}