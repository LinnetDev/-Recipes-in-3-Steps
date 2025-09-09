'use strict';

const modal = document.querySelector('.modal'); //modal window
const overlay = document.querySelector('.overlay'); //overlay
const btnCloseModal = document.querySelector('.close-modal'); //x
const btnShowModal = document.querySelectorAll('.show-modal'); //buttons to show

//elements inside modal
const titleModal = document.querySelector('.modal-title');
const textModal = document.querySelector('.modal-text');
const imageModal = document.querySelector('.modal-img');

const recipes = [
  {
    title: '🥑 Avocado Toast',
    img: 'images/avocado-toast.webp',
    text: `Ingredients: bread, avocado, salt, pepper, olive oil.<br>
    1. Toast the bread.<br>
    2. Mash avocado with seasoning.<br>
    3. Spread and drizzle with olive oil.`,
  },
  {
    title: '🍓 Smoothie',
    img: 'images/smoothie.webp',
    text: `Ingredients: banana, berries, milk or yogurt, honey.<br>
    1. Add fruits to blender.<br>
    2. Pour in milk/yogurt.<br>
    3. Blend until smooth.`,
  },
  {
    title: '🥗 Greek Salad',
    img: 'images/salad.webp',
    text: `Ingredients: cucumber, tomato, feta cheese, olives, olive oil.<br>
    1. Chop veggies.<br>
    2. Add feta and olives.<br>
    3. Drizzle with olive oil and mix.`,
  },
];

// ----------------------
// FUNCTIONS
// ----------------------

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function (id) {
  const recipe = recipes[id];
  titleModal.textContent = recipe.title;
  textModal.innerHTML = recipe.text;
  imageModal.src = recipe.img;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// ----------------------
// EVENT LISTENERS
// ----------------------

btnShowModal.forEach(btn => {
  btn.addEventListener('click', function () {
    const id = btn.getAttribute('data-id');
    openModal(id);
  });
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
