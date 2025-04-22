
// CADASTRO
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    const usernameExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);
  
    if (usernameExists) {
      alert('Este usuário já está cadastrado!');
      return;
    }
  
    if (emailExists) {
      alert('Esse email já está cadastrado!');
      return;
    }
  
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Cadastro realizado com sucesso!');
    document.getElementById('form-cadastro').reset();
  });
  