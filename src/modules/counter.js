export default {
  init() {
    const span = document.querySelector('.counter .number');

    function startCounter(element, speed) {
      let currentNumber = parseInt(element.textContent);
      
      function updateNumber() {
        currentNumber = (currentNumber >= 777) ? 0 : currentNumber + 1;
        element.textContent = currentNumber;
      }

      setInterval(updateNumber, speed);
    }

      const numberSpan = document.querySelector('.number');
      startCounter(numberSpan, 50); // Передайте нужную скорость (в миллисекундах)
  }
}