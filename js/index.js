// implementación de fetch API

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let tabla = `  <tr>
                      <th>Nombre</th>
                      <th>Usuario</th>
                      <th>Email</th>
                      <th>Dirección</th>
                      <th>Teléfono</th>
                      <th>Sitio web</th>
                      <th>Compania</th>
                    </tr>`;

    for (let user of data) {
      tabla += ` <tr>
                  <td>${user.name}Juan</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.street}, ${user.address.suite}, 
                      ${user.address.city}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td>${user.company.name}</td>                
                </tr>`;
    }

    document.getElementById("tblUsers").innerHTML = tabla;
  });
