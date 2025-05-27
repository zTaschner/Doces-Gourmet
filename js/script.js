// Carregar a navbar JavaScript
      document.getElementById('navbar').innerHTML = fetch('componentes/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })