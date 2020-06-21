# UPDATES
CustomerController.ts
- POST 
    > Registro de cliente/aluno atrelado ao id do profissional/professor.
    > Verificação de nome e sobrenome.

- GET
    > Seleciona todos os alunos de um profissional.


SessionController.ts
- POST
    > Controle de Sessão do profissional/professor. Inserção de usuario e senha para validação.
------------------------------------------------------------------------

# FUTURE IMPLEMENTATIONS FOR THIS UPDATE 
CustomerController.ts
- POST
    > Adicionar turma ou dias da semana contratados pelo aluno.

- ADD PUT
    > Atualizar dados do cliente/aluno

------------------------------------------------------------------------

# ROUTES

### /equipments
{ id, title, img_url}

### /users
{ id, name, username, password, email, whatsapp }

JSON body:
{
    "name":"",
	"username":"",
	"password":"",
	"email":"",
	"whatsapp":"",
	"equipments":[]
}

### /user_equipments
{ user_id, equipment_id }

### /session
{ username, password }

### /customers
{ id, name, lastname, email, whatsapp, user_id }

JSON body:
{
	"name":"",
	"lastname":"",
	"email":"",
	"whatsapp":""
}

Header:
Authorization: user_id