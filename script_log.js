// LOGIN com e-mail
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const validUser = users.find(user => user.email === email && user.password === password);
  
    if (validUser) {
        // Salva o "usuário logado" no localStorage
        localStorage.setItem('loggedUser', JSON.stringify(validUser));
        // Redireciona para a dashboard
        window.location.href = 'pagina-principl.html';
      } else {
        alert('E-mail ou senha incorretos!');
      }
  
    document.getElementById('form-cadastro').reset();
  });