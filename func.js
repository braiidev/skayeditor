const { style: $s } = document.documentElement;
const _sp = (a, b) => $s.setProperty(a, b);
const btn = $("#menu-btn");
const m = $("#modal");
btn.addEventListener("click", (e) => _t(btn, m));
m.addEventListener("click", (e) => _ev(e));
function _ev(e) {
  const { target: t } = e;
  t.id == "dm"
    ? _dm(t.checked)
    : t.id == "size"
    ? _rf(t.value)
    : t.id == "reset"
    ? _rst("#name", "#html", "#css", "#js")
    : (t.id = "copy")
    ? _c(window.location.href)
    : _t(btn, m);
}
function _dm(v) {
  if (v) {
    _sp("--font-color", "var(--dark-font-color)");
    _sp("--background-color", "var(--dark-background-color)");
    _sp("--textarea-bg", "var(--dark-textarea-bg)");
    _sp("--textarea-bg-focus", "var(--dark-textarea-bg-focus)");
    _sp("--textarea-bg-hover", "var(--dark-textarea-bg-hover)");
  } else {
    _sp("--font-color", "var(--light-font-color)");
    _sp("--background-color", "var(--light-background-color)");
    _sp("--textarea-bg", "var(--light-textarea-bg)");
    _sp("--textarea-bg-focus", "var(--light-textarea-bg-focus)");
    _sp("--textarea-bg-hover", "var(--light-textarea-bg-hover)");
  }
}
function _rf(v) {
  if (v > 0 && v < 20) _sp("--default-size", `${v}px`);
}
function _t(...l) {
  l.forEach((_l) => {
    _l.classList.toggle("opened");
  });
}
function _rst(...l) {
  l.forEach((_l) => {
    $(_l).value = "";
  });
}

const _c = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    const t = $("#copy");
    t.className = "success";
    setInterval(function () {
      t.className = "";
    }, 3000);
    return navigator.clipboard.writeText(str);
  }
  return Promise.reject("The Clipboard API is not available.");
};
