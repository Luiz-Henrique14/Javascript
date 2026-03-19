        // Pega usuários do localStorage
        function getUsers() {
            return JSON.parse(localStorage.getItem('users') || '[]');
        }

        // Salva usuários no localStorage
        function saveUsers(users) {
            localStorage.setItem('users', JSON.stringify(users));
        }

        // Mostra tela de cadastro
        function showRegister() {
            document.getElementById('loginScreen').classList.add('hidden');
            document.getElementById('registerScreen').classList.remove('hidden');
        }

        // Mostra tela de login
        function showLogin() {
            document.getElementById('registerScreen').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
        }

        // Logout
        function logout() {
            document.getElementById('dashboardScreen').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
        }

        // CADASTRO
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const idade = document.getElementById('idade').value;

            const users = getUsers();
            
            // Verifica se email já existe
            if (users.find(user => user.email === email)) {
                alert('❌ Este email já está cadastrado!');
                return;
            }
            
            // Salva novo usuário
            users.push({ nome, email, idade });
            saveUsers(users);
            
            alert('✅ Cadastro realizado com sucesso!');
            showLogin();
            this.reset(); // Limpa formulário
        });

        // LOGIN
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const users = getUsers();
            const user = users.find(u => u.email === email);
            
            if (user) {
                // Mostra dashboard com dados do usuário
                document.getElementById('userInfo').innerHTML = `
                    <strong>Nome:</strong> ${user.nome}<br><br>
                    <strong>Email:</strong> ${user.email}<br><br>
                    <strong>Idade:</strong> ${user.idade} anos
                `;
                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('dashboardScreen').classList.remove('hidden');
            } else {
                alert('❌ Usuário não encontrado! Cadastre-se primeiro.');
                showRegister();
            }
        });
    