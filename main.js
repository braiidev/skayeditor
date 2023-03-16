const $ = (s) => document.querySelector(s);
const $a = $("#app");
const $h = $("#html");
const $c = $("#css");
const $j = $("#js");
const $p = $("#preview");
let u = "",
  h = "",
  c = "",
  j = "",
  hc = "";
const _e = (e) => window.btoa(e);
const _d = (d) => window.atob(d);
const _r = (r) => history.replaceState(null, null, `/#${r}`);

function i() {
  const { hash: p } = window.location;
  const [_h, _c, _j] = p.slice(1).split("%7C");
  h = _d(_h);
  c = _d(_c);
  j = _d(_j);
  $h.value = h;
  $c.value = c;
  $j.value = j;
  $p.srcdoc = __h(h, c, j);
}
$a.addEventListener("input", (e) => {
  const { id: i, value: v } = e.target;
  if (i === "html") h = v;
  if (i === "css") c = v;
  if (i === "js") j = v;
  hc = h != "" || c != "" || j != "" ? `${_e(h)}%7C${_e(c)}%7C${_e(j)}` : "";
  _r(hc);
  $p.srcdoc = __h(h, c, j);
});
const __h = (h, c, j) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Skay online-editor</title>
    <style>${c}</style>
</head>
<body>
    ${h}
    <script>${j}</script>
</body>`;
};
i();
