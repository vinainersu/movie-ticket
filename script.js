const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.querySelector('.book-btn');

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

bookBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  if(selectedSeats.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
  alert(`Booking successful!\n\nMovie: ${movieSelect.options[movieSelect.selectedIndex].text}\nShow: ${document.getElementById('showtime').value}\nSeats: ${selectedSeats.length}\nTotal: $${selectedSeats.length * ticketPrice}`);
});
