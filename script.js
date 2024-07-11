document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users-container');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `<strong>ID:</strong> ${user.id} <br> <strong>Name:</strong> ${user.name} <br> <strong>Email:</strong> ${user.email}`;
                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});