use aquele_dia;

create table usuarios (
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(33) not null,
    emailUsuario varchar(33) not null,
    senhaUsuario varchar(99) not null,
    acessoUsuario tinyint not null default 0,
	constraint check_acessoUsuario
		check (acessoUsuario in (0, 1, 2, 3, 99))
);
describe usuarios;
insert into usuarios (nomeUsuario, emailUsuario, senhaUsuario, acessoUsuario) values
('SouEu', 'estouBem','estouBem', 99),
('MHY', '','', 0);

create table estados(
	idEstado int primary key auto_increment,
    estadoNome varchar(33) not null,
	dtEstado datetime default current_timestamp
);
describe estados;
insert into estados (estadoNome) values
('medo'),
('triste'),
('tristeza'),
('raiva'),
('desespero'),
('depressão'),
('cansada'),
('morta');


create table condicao(
	idCondicao int primary key auto_increment,
    fkUsuario int not null,
	constraint fk_usuario
        foreign key (fkUsuario)
        references usuarios(idUsuario),
    fkEstado int not null,
	constraint fk_estado
        foreign key (fkEstado)
        references estados(idEstado)
);

describe condicao;


















