var random;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}



document.getElementById('enter').addEventListener('click', (event) => {
  let element_name = document.getElementById('name');
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('name').value);

  element_list.appendChild(new_li);
  random.push(getNumberOrString(document.getElementById('name').value));

});

document.getElementById('button').addEventListener('click', (event) => {
  let element_random = document.getElementById('random');
  element_random.innerText = randomMember(random);
  element_random.style.color = '#ffffff';
  element_random.style.backgroundColor = '#000000';
  let new_span = document.createElement('span');
  new_span.innerText = '👑';

  element_random.appendChild(new_span);

});
random = [];
