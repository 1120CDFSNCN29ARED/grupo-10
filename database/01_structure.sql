create database dunder_mifflin_db;

use dunder_mifflin_db;

create table user_type (
id         int primary key auto_increment,
name       varchar(35)
);

create table location (
id         int primary key auto_increment,
street     varchar(40),
street_number int,
flat       int,
postal_code int,
locality   varchar(40),
state      varchar(40),
country    varchar(40)
);

create table users (
id        int primary key auto_increment,
first_name varchar(35) not null,
last_name varchar(35) not null,
email     varchar(60) not null,
nickname  varchar(35) not null,
profile_img varchar(100) not null,
password  varchar(35) not null,
user_type_id int,
location_id int,
foreign key (user_type_id) references user_type(id),
foreign key (location_id) references location(id)
);

create table category (
id       int primary key auto_increment,
name     varchar(35) not null
);

create table products (
id       int primary key auto_increment,
name     varchar(75) not null,
description varchar(150)  not null,
product_img varchar(100) not null,
price    decimal not null,
category_id int(100),
foreign key (category_id) references category(id)
);

create table cart (
id       int primary key auto_increment,
user_id  int(100),
total_price decimal not null,
total_items int(50) not null,
foreign key (user_id) references users(id)
);

create table product_cart(
id       int primary key auto_increment,
product_id int(100),
cart_id int(100),
foreign key (product_id) references products(id),
foreign key (cart_id) references cart(id)
);