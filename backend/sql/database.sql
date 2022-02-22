create database dblogin;
use dblogin;

create table usuarios(
    id int not null auto_increment primary key,
    username varchar(50) not null,
    password blob not null
);

ALTER TABLE usuarios ADD UNIQUE (username);

insert into usuarios(username, password) values('raquel', (aes_encrypt('123', 'salecita')));
select id, username, aes_decrypt(password, "salecita") from usuarios;

-- Procedimiento almacenado de crear
delimiter $$
create procedure crear_usuario(
	in nombre_usuario varchar(50),
	in contra blob,
	in sal varchar(50)
)
begin
insert into usuarios
(username, password)
values
(nombre_usuario, aes_encrypt(contra, sal));
end $$

call crear_usuario("bob_rulfo","123","salecita");
call crear_usuario("admin","admin","salecita");
call crear_usuario("usuario","usuario","salecita");
call crear_usuario("gonzales84","123456","salecita");
call crear_usuario("gonzales84","1234567","salecita"); -- ERROR: 1062: Duplicate entry 'gonzales84' for key 'usuarios.username'

-- Encontrar un usuario
delimiter $$
create procedure buscar_usuario(
	in inusername varchar(50),
	in inpass blob,
	in insal varchar(50)
)
begin
select id, username 
from usuarios
where username = inusername and password = aes_encrypt(inpass, insal);
end $$

call buscar_usuario("admin","admin","salecita");

-- cors
-- https://expressjs.com/en/resources/middleware/cors.html