// agent-toolkit.js
(function(){
  // 1) Banner no topo
  const banner = document.createElement('div');
  banner.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: #ffffff;
    border-bottom: 1px solid #ddd;
  `;
  const img = document.createElement('img');
  img.src = 'https://makeone.com.br/wp-content/uploads/2023/12/Camada_1.png';
  img.alt = 'MakeOne';
  img.style.maxHeight = '40px';
  banner.appendChild(img);
  document.body.insertBefore(banner, document.body.firstChild);

  // 2) Botão “MakeOne” na toolbar
  const toolbar = window.Toolkit && Toolkit.getToolbar && Toolkit.getToolbar();
  if (toolbar) {
    toolbar.addButton({
      id: 'btnMakeOne',
      label: 'MakeOne',
      tooltip: 'Visitar MakeOne',
      onClick: () => window.open('https://makeone.com.br/', '_blank')
    });
  }
})();
