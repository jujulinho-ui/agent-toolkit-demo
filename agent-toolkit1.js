// agent‑toolkit.js
(function() {
  function init() {
    alert('🚀 Toolkit demo carregado com sucesso!');
  }

  function waitForToolkit() {
    // Quando a API do Toolkit estiver disponível, chama o init()
    if (window.Toolkit && typeof Toolkit.getToolbar === 'function') {
      init();
    } else {
      // Se não, tenta de novo em 200ms
      setTimeout(waitForToolkit, 200);
    }
  }

  // Inicia o loop de espera
  waitForToolkit();
})();
