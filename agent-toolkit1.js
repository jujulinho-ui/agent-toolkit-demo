console.log('🔥 agent-toolkit1.js foi injetado');
(function() {
  function init() {
    console.log('✅ Toolkit está disponível');
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
