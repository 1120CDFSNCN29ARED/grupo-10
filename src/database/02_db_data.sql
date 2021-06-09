insert into category (name) values ('Resmas');
insert into category (name) values ('Equipamiento de Oficina');
insert into category (name) values ('Merchandising');
insert into category (name) values ('Libreria');

insert into user_type (id, name) values ('1', 'Regular User');
insert into user_type (id, name) values ('2', 'Admin');

insert into products (id, name, description, product_img, price, category_id) values (1, 'Resma 500 hojas Color Blanco', 'Resma de 500 hojas tamaño A4, gramaje de 80g, color Blanco. Superficie super lisa para proporcionar buenas impresiones', 'Resmas/ResmaBlanco.jpg', 30, 1);
insert into products (id, name, description, product_img, price, category_id) values (2, 'Resma 500 hojas Color Amarillo', 'Resma de 500 hojas tamaño A4, gramaje de 80g, color Amarillo. Superficie super lisa para proporcionar buenas impresiones', 'Resmas/ResmaAmarillo.jpg', 25, 1);
insert into products (id, name, description, product_img, price, category_id) values (3, 'Resma 500 hojas Gramaje Fino', 'Resma de 500 hojas tamaño A4, gramaje de 70g, color Blanco. Superficie mas fina ideal para la escritura.', 'Resmas/ResmaFina.jpg', 20, 1);
insert into products (id, name, description, product_img, price, category_id) values (4, 'Resma 500 hojas Premium', 'Resma de 500 hojas tamaño A4, gramaje de 80g, color Blanco. Calidad superior al resto para mayor duracion.', 'Resmas/ResmaPremium.jpg', 35, 1);
insert into products (id, name, description, product_img, price, category_id) values (5, 'Resma 500 hojas Ecologica', 'Resma de 500 hojas tamaño A4, gramaje de 75g, color Blanco. Hoja hecha de materiales 100% reciclado.', 'Resmas/ResmaEcologica.jpg', 25, 1);
insert into products (id, name, description, product_img, price, category_id) values (6, 'Resma 500 hojas Varios Colores', 'Resma de 500 hojas tamaño A4, gramaje de 80g, varios colores. Resma compuesta con hojas de hasta 6 colores.', 'Resmas/ResmaColores.jpg', 40, 1);

insert into products (id, name, description, product_img, price, category_id) values (7, 'Caja 12 Resmas Color Blanco', 'Caja con 12 Resmas tamaño A4, gramaje de 80g, color Blanco. Superficie super lisa para proporcionar buenas impresiones', 'Resmas/CajaBlanco.jpg', 330, 1);
insert into products (id, name, description, product_img, price, category_id) values (8, 'Caja 12 Resmas Color Amarillo', 'Caja con 12 Resmas tamaño A4, gramaje de 80g, color Amarillo. Superficie super lisa para proporcionar buenas impresiones', 'Resmas/CajaAmarillo.jpg', 275, 1);
insert into products (id, name, description, product_img, price, category_id) values (9, 'Caja 12 Resmas Gramaje Fino', 'Caja con 12 Resmas tamaño A4, gramaje de 70g, color Blanco. Superficie mas fina ideal para la escritura.', 'Resmas/CajaFina.jpg', 220, 1);
insert into products (id, name, description, product_img, price, category_id) values (10, 'Caja 12 Resmas Premium', 'Caja con 12 Resmas tamaño A4, gramaje de 80g, color Blanco. Calidad superior al resto para mayor duracion.', 'Resmas/CajaPremium.jpg', 385, 1);
insert into products (id, name, description, product_img, price, category_id) values (11, 'Caja 12 Resmas Ecologica', 'Caja con 12 Resmas tamaño A4, gramaje de 75g, color Blanco. Hoja hecha de materiales 100% reciclado.', 'Resmas/CajaEcologica.jpg', 275, 1);
insert into products (id, name, description, product_img, price, category_id) values (12, 'Caja 12 Resmas Varios Colores', 'Caja con 12 Resmas tamaño A4, gramaje de 80g, varios colores. Resma compuesta con hojas de hasta 6 colores.', 'Resmas/CajaColores.jpg', 440, 1);

insert into products (id, name, description, product_img, price, category_id) values (13, 'Impresora', 'La forma simple de obtener lo esencial. Con la configuración impecable desde la PC e impresión confiable.', 'Equipamiento_de_Oficina/EqImpresora.jpg', 350, 2);
insert into products (id, name, description, product_img, price, category_id) values (14, 'Fotocopiadora', 'Hacé todas las fotocopias que necesités con esta Fotocopiadora multifunción, siempre lista para facilitar tu rutina de trabajo o estudio.', 'Equipamiento_de_Oficina/EqFotoco.jpg', 550, 2);
insert into products (id, name, description, product_img, price, category_id) values (15, 'PC para la Oficina', 'Esta PC Completa es un equipo específicamente diseñado para trabajos 24x7.', 'Equipamiento_de_Oficina/EqPc.jpg', 250, 2);
insert into products (id, name, description, product_img, price, category_id) values (16, 'Proyector', 'Éste proyector tiene un diseño intuitivo, fácil de usar y un elegante chasis Negro.', 'Equipamiento_de_Oficina/EqProyector.jpg', 375, 2);
insert into products (id, name, description, product_img, price, category_id) values (17, 'Destructora de Papeles', 'Destructora de papeles en tiras, indispensable para oficinas e industrias donde se necesite achicar los residuos.', 'Equipamiento_de_Oficina/EqTrituradora.jpg', 295, 2);

insert into products (id, name, description, product_img, price, category_id) values (18, 'Bobble-Head Dwight K. Schrute', 'Este The Office Dwight Bobblehead mide 7 pulgadas de alto. Es el artículo perfecto para comenzar una colección de recuerdos de TV.', 'Merch/MerchBobbleHead.jpg', 30, 3);
insert into products (id, name, description, product_img, price, category_id) values (19, 'Botella Metalica Sabre', 'Botellla Metalica Oficial de Sabre. Posee una capacidad de 750 cc, una tapa con rosca y resulta ideal para actividades al aire libre.', 'Merch/MerchBotella.jpg', 15, 3);
insert into products (id, name, description, product_img, price, category_id) values (20, 'Libro "Somehow I Manage", Michael G. Scott', 'El libro original de "Somehow I Manage" por Michael Gary Scott.', 'Merch/MerchLibro.jpg', 25, 3);
insert into products (id, name, description, product_img, price, category_id) values (21, 'Poster Oficial de la Pelicula "Threat Level Midnight" ', 'Poster oficial de la pelicula, "Threat Level Midnight", guionada y dirigida por Michael Scott.', 'Merch/MerchPoster.jpg', 5, 3);
insert into products (id, name, description, product_img, price, category_id) values (22, 'Taza "Worlds Best Boss"', 'Taza de ceramica con la frase: "Worlds Best Boss".', 'Merch/MerchTaza.jpg', 8, 3);

insert into products (id, name, description, product_img, price, category_id) values (23, 'Calculadora', 'Calculadora ideal para la oficia y corroborar todas tus cuentas matematicas.', 'Libreria/LibCalc.jpg', 12, 4);
insert into products (id, name, description, product_img, price, category_id) values (24, 'Carpeta A4', 'Carpeta A4 ideal para guardar y administrar todos tus documentos importantes.', 'Libreria/LibCarpeta.jpg', 6, 4);
insert into products (id, name, description, product_img, price, category_id) values (25, 'Engrapadora Metalica', 'Engrapadora metalica, profundidad de engrapado de 45mm', 'Libreria/LibEngranpadora.jpg', 5, 4);
insert into products (id, name, description, product_img, price, category_id) values (26, 'Post-It', 'Post-It de varios colores, ideal para capturar esos pensamientos esporaneos.', 'Libreria/LibPostIt.jpg', 4, 4);
insert into products (id, name, description, product_img, price, category_id) values (27, 'Sobre A4', 'Sobre de papel madera tamaño A4.', 'Libreria/LibSobre.jpg', 2, 4);

insert into users (id, first_name, last_name, email, nickname, profile_img, password ) values (1, 'Dwight Kurt', 'Schrute', 'dwight.k.Schrute@gmail.com', 'D_Schrute', 'avatar4.jpg', '123456789');
insert into users (id, first_name, last_name, email, nickname, profile_img, password ) values (2, 'Jim', 'Halpert', 'jim.halpert@gmail.com', 'J_Halpert', 'avatar5.jpg', '123456789');
insert into users (id, first_name, last_name, email, nickname, profile_img, password ) values (3, 'Pam', 'Beesley', 'pam.Beesley@gmail.com', 'P_Beesley', 'avatar2.jpg', '123456789');
insert into users (id, first_name, last_name, email, nickname, profile_img, password ) values (4, 'Michael Gary', 'Scott', 'michael.g.Scott@gmail.com', 'MG_Scott', 'avatar1.jpg', '123456789');
insert into users (id, first_name, last_name, email, nickname, profile_img, password ) values (5, 'Jim', 'Schrute', 'jim.Schrute@gmail.com', 'J_Schrute', 'avatar6.jpg', '123456789');