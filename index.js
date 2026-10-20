async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
    if (!response.ok) {
      throw new Error('Failed to fetch advice');
    }
    const data = await response.json();
    const adviceNumberElem = document.querySelector('.advice-number');
    const quoteElem = document.querySelector('.quote');

    adviceNumberElem.textContent = `ADVICE #${data.slip.id}`;
    quoteElem.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
    document.querySelector('.quote').textContent = 'Could not load advice.';
  }
}

fetchAdvice();

document.getElementById('new-advice-btn').addEventListener('click', fetchAdvice);