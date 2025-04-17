// agent-toolkit1.js
(function() {
  function init() {
    alert('🚀 Toolkit demo carregado com sucesso!');
  }

  function waitForToolkit() {
    if (window.Toolkit && typeof Toolkit.getToolbar === 'function') {
      init();
    } else {
      setTimeout(waitForToolkit, 200);
    }
  }

  waitForToolkit();
})();
