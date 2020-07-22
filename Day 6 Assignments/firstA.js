let i = 0;
function change() {
  let doc = document.getElementById("dark");
  let color = ["black", "blue", "brown", "green","yellow","red"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change,5000);

