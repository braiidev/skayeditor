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

  //const $html = document.querySelector("#html>textarea");
  //const $css = document.querySelector("#css>textarea");
  //const $js = document.querySelector("#js>textarea");
  //
  //const $iframe = document.querySelector("#preview>iframe");
  //[$html, $css, $js].forEach(($e) =>
  //  $e.addEventListener("input", () => {
  //    let rendering =
  //      $html.value +
  //      "<style>" +
  //      $css.value +
  //      "</style>" +
  //      "<scri" +
  //      "pt>" +
  //      $js.value +
  //      "</scri" +
  //      "pt>";
  //    $iframe.setAttribute("srcdoc", rendering);
  //  })
  //);
});


const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-e"), {
      mode: "html",
      theme: "darcula",
      lineNumbers: true,
      autoCloseTags: true,
    });

    const cssEditor = CodeMirror.fromTextArea(document.getElementById("css-e"), {
      mode: "css",
      theme: "darcula",
      lineNumbers: true,
      autoCloseBrackets: true,
    });

    const jsEditor = CodeMirror.fromTextArea(document.getElementById("js-e"), {
      mode: "javascript",
      theme: "darcula",
      lineNumbers: true,
      autoCloseBrackets: true,
    });

    const previewFrame = document.getElementById("preview-e");
    function updatePreview() {
      const html = htmlEditor.getValue();
      const css = `<style>${cssEditor.getValue()}</style>`;
      const js = `<script>${jsEditor.getValue()}<\/script>`;
      const previewContent = `${html}${css}${js}`;

      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      doc.open();
      doc.write(previewContent);
      doc.close();
    }

    htmlEditor.on("change", updatePreview);
    cssEditor.on("change", updatePreview);
    jsEditor.on("change", updatePreview);

