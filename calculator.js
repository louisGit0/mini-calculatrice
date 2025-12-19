function add(a, b) {
  return a + b; 
}

function sub(a, b) {
  return null; // sera implémenté plus tard
}

function mul(a, b) {
  return null; // sera implémenté plus tard
}

document.getElementById("btn").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const op = document.getElementById("op").value;

  let result = null;

  if (op === "add") result = add(a, b);
  if (op === "sub") result = sub(a, b);
  if (op === "mul") result = mul(a, b);

  document.getElementById("result").textContent = result;
});
