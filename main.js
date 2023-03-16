const $ = (s) => document.querySelector(s);
const $a = $("#app");
const $t = $("#name");
const $h = $("#html");
const $c = $("#css");
const $j = $("#js");
const $p = $("#preview");
let u = "",
  h = "",
  c = "",
  j = "",
  t = "",
  hc = "";
const _e = (e) => window.btoa(e);
const _d = (d) => window.atob(d);
const _r = (r) => history.replaceState(null, null, `/skayeditor/#${r}`);

function i() {
  const { hash: p } = window.location;
  const [_h, _c, _j, _t] = p.slice(1).split("%7C");
  h = _d(_h);
  c = _d(_c);
  j = _d(_j);
  t = _d(_t);
  $h.value = h;
  $c.value = c;
  $j.value = j;
  $t.value = t;
  $p.srcdoc = __h(h, c, j, t);
}
$a.addEventListener("input", (e) => {
  const { id: i, value: v } = e.target;
  t = $t.value;
  if (i === "html") h = v;
  if (i === "css") c = v;
  if (i === "js") j = v;
  hc =
    h != "" || c != "" || j != ""
      ? `${_e(h)}%7C${_e(c)}%7C${_e(j)}%7C${_e(t)}`
      : "";
  _r(hc);
  $p.srcdoc = __h(h, c, j, t);
});
const __h = (h, c, j, t) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>${t || "Skay editor"}</title>
    <style>${c}</style>
</head>
<body>
    ${h}
    <script>${j}</script>
</body>`;
};
i();
