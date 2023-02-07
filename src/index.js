import buffer from './main.as'

WebAssembly.instantiate(buffer)
  .then((result) => {
    debugger;
    const exports = result.instance.exports;
    document.getElementById("container").textContent =
      "Result: " + exports.add(18, 22);
  })
  .catch(console.error);
