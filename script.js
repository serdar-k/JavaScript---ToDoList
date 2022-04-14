const liDOM = document.querySelector('#list');
const taskDOM = document.querySelector('#task');
const buttonDOM = document.querySelector('.button');
const toDoList = [];

/////
// YAPILACAKLAR LİSTESİNE VE LOCAL STORAGE'A EKLEME FONKSİYONU
const addToDo = function () {
  liElement = document.createElement('li');
  liElement.classList.add('toDoLi');
  if (taskDOM.value.length > 0 && taskDOM.value !== ' ') {
    liElement.innerHTML = taskDOM.value + `<button class="buttonx">x</button>`;
    liDOM.appendChild(liElement);
    success();
    toDoList.push(taskDOM.value);
    localStorage.setItem('Yapılacaklar', JSON.stringify(toDoList));
  } else {
    if (taskDOM.value.length === 0) {
      error();
    }
  }

  taskDOM.value = '';
};

buttonDOM.addEventListener('click', addToDo);

/////
// ENTER İLE GİRİŞ İŞLEMİ
taskDOM.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    addToDo();
  }
});

/////
// YAPILACAKLAR LİSTESİNDEN SİLME - YAPILDI OLARAK İŞARETLEME FONKSİYONU
document.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('buttonx')) {
    e.target.parentElement.remove();
  } else if (target.classList.contains('toDoLi')) {
    target.classList.toggle('checked');
  }
});

/////
// TOAST FONKSİYONLARI
function success() {
  let toast = document.querySelector('.success');
  let toastAdd = new bootstrap.Toast(toast);
  toastAdd.show();
}

function error() {
  let toast = document.querySelector('.error');
  let toastAdd = new bootstrap.Toast(toast);
  toastAdd.show();
}
