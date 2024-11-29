        function handleLogin() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'london' && password === '123456') {
                alert('Usuario y password correctos! Bienvenido!');
            } else {
                alert('Usuario o password incorrectos!');
            }
        }

        function handleCancel() {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            alert('¡Hasta luego!');
        }