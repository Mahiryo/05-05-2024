create database Re_Re_05;
use Re_Re_05;

create table users(
	idUser int primary key auto_increment,
    email varchar(50) not null,
    username varchar(33) not null,
    userPass varchar(33) not null
);

create table saveStates(
	idState int primary key auto_increment,
    fkUser int not null,
    timeSave datetime default current_timestamp,
    slot_01 tinyint not null default 0,
    slot_02 tinyint not null default 0,
    slot_03 tinyint not null default 0,
    slot_04 tinyint not null default 0,
	timeSlot char(4),
    constraint FK_USER
		foreign key (fkUser)
        references users(idUser)
);
drop table userScore;


create table userScore(
idScore int not null unique,
scorePoints int not null,
timeScore datetime default current_timestamp,
constraint FK_USER_SCORE
	foreign key (idScore)
    references users(idUser),
constraint PK_USER_SCORE
	primary key (idScore)
)