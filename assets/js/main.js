addEventListener("DOMContentLoaded", () => {
  const $menu = document.getElementById("menu");
  function menuHandler({ name, checked }) {
    if (checked) document.getElementById(name).classList.add("show");
    else document.getElementById(name).classList.remove("show");
  }
  $menu.querySelectorAll("input").forEach((i) => {
    menuHandler(i);
    i.addEventListener("click", () => menuHandler(i));
  });

  const $html = document.querySelector("#html>textarea");
  const $css = document.querySelector("#css>textarea");
  const $js = document.querySelector("#js>textarea");

  const $iframe = document.querySelector("#preview>iframe");
  [$html, $css, $js].forEach(($e) =>
    $e.addEventListener("input", () => {
      let rendering =
        $html.value +
        "<style>" +
        $css.value +
        "</style>" +
        "<scri" +
        "pt>" +
        $js.value +
        "</scri" +
        "pt>";
      $iframe.contentWindow.document.open();
      $iframe.contentWindow.document.write(rendering);
      $iframe.contentWindow.document.close();
    })
  );
});
