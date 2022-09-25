const checkboxes = [
  'cb128',
  'cb64',
  'cb32',
  'cb16',
  'cb8',
  'cb4',
  'cb2',
  'cb1',
];
const ui = [...checkboxes, 'lblsum'].reduce((table, id) => {
  return { ...table, [id]: document.querySelector(`#${id}`) };
}, {});
const state = { byte: 0 };
for (const id of checkboxes) {
  ui[id].addEventListener(
    'input',
    (e) => {
      const bit = +e.target.dataset.bit;
      if (e.target.checked) {
        state.byte |= bit;
      } else {
        state.byte ^= bit & 0xff;
      }
      ui.lblsum.innerText = `${state.byte.toString(10)}`;
    },
    false
  );
}
