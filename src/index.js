window.addEventListener('load', () => {
  let check1 = true;
  let check2 = true;
  const input1 = document.createElement('input');
  document.body.appendChild(input1);
  input1.style.display = 'block';
  const input2 = document.createElement('input');
  document.body.appendChild(input2);
  input2.style.display = 'block';
  const button = document.createElement('button');
  document.body.appendChild(button);
  button.textContent = 'Посчитать';
  button.addEventListener('click', buttonEvent);
  const div = document.createElement('div');
  div.className = 'error message';
  div.innerHTML = 'Это не число';
  const div3 = document.createElement('div');
  div3.className = 'error message';
  div3.innerHTML = 'Это не число';
  const div2 = document.createElement('div');
  div2.className = 'result message';
  div2.style.display = 'none';
  document.body.appendChild(div2);
  function buttonEvent() {
    const arr1 = input1.value.split('');
    const arr2 = input2.value.split('');
    for (let a = 0; a < arr1.length; a += 1) {
      if (arr1[a] === '.' || arr1[a] === '0' || arr1[a] === '1' || arr1[a] === '2' || arr1[a] === '3' || arr1[a] === '4' || arr1[a] === '5' || arr1[a] === '6' || arr1[a] === '7' || arr1[a] === '8' || arr1[a] === '9') {

      } else {
        check1 = false;
        input1.after(div);
        a = arr1.length;
      }
    }
    for (let a = 0; a < arr2.length; a += 1) {
      if (arr2[a] === '.' || arr2[a] === '0' || arr2[a] === '1' || arr2[a] === '2' || arr2[a] === '3' || arr2[a] === '4' || arr2[a] === '5' || arr2[a] === '6' || arr2[a] === '7' || arr2[a] === '8' || arr2[a] === '9') {

      } else {
        input2.after(div3);
        check2 = false;
        a = arr2.length;
      }
    }
    if (check1 === true && check2 === true) {
      const result = Number(input1.value) + Number(input2.value);
      div2.innerHTML = `result = ${result}`;
      div2.style.display = 'block';
    } else {
      div2.style.display = 'none';
    }
  }
});

