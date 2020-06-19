# UPDATES
- POST 
    > Registro de profissional com verificação de usuario e senha.
    > Escolha de equipamentos que o profissional possui.

- GET
    > Seleciona todos os profissionais

------------------------------------------------------------------------

# FUTURE IMPLEMENTATIONS FOR THIS UPDATE 
- ADD PUT
    > Atualizar usuario e senha. (Authorization Header)
    > Permitir adicionar ou remover equipamentos
- GET
    > Selecionar todos os profissionais e seus respectivos equipamentos

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

