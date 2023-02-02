console.info('Hi Ridzi');

// buat sebuah array yang menampung banyak object

let noteData = [
  {
    id: 1,
    note: 'Ini adalah note pertama',
  },
  {
    id: 2,
    note: 'ini adalah note kedua',
  },
  {
    id: 3,
    note: 'ini adalah note ketiga',
  },
  {
    id: 4,
    note: 'ini adalah note keempat',
  },
];

let root = document.getElementById('root');
// console.info(elem);

// buat element dengan String
// elem.note akan menimpa ke parameter content
let Card = function (id, content) {
  return `<div class="card"> ${id} ${content} </div> `;
};

// render object pada array ke halaman html
noteData.forEach((elem) => {
  root.innerHTML += Card(elem.id, elem.note);
});
