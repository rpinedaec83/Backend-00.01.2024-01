DROP DATABASE IF EXISTS pacha2401;
create database pacha2401;

-- drop table Usuario
create table Usuario(
	id serial primary key,
	username varchar(254) not null,
	password varchar(254) not null,
	email varchar(245) unique not null,
	activo bool default false,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP default CURRENT_TIMESTAMP not null,
	usuarioModificacion int null,
	fechaModificacion timestamp null,
	CONSTRAINT fk_usrcreacion
      FOREIGN KEY(usuarioCreacion) 
	  REFERENCES Usuario(id)
	  ON DELETE CASCADE,
	CONSTRAINT fk_usrModificacion
      FOREIGN KEY(usuarioModificacion) 
	  REFERENCES Usuario(id)
	  ON DELETE CASCADE
)
insert into Usuario(username, password, email, usuarioCreacion)
values('rpineda', '0987654321', 'rpineda@x-codec.net', 1)

select * from USuario
update Usuario set activo = true, usuarioModificacion = 1, fechaModificacion = CURRENT_TIMESTAMP
where id = 1;
-- drop table Especie
create table Especie(
	id serial not null primary key,
	descripcion varchar(50) not null,
	activo bool default true,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP default CURRENT_TIMESTAMP not null,
	usuarioModificacion int null,
	fechaModificacion timestamp null,
	CONSTRAINT fk_usrcreacion
      FOREIGN KEY(usuarioCreacion) 
	  REFERENCES Usuario(id)
	  ON DELETE CASCADE,
	CONSTRAINT fk_usrModificacion
      FOREIGN KEY(usuarioModificacion) 
	  REFERENCES Usuario(id)
	  ON DELETE CASCADE
);

