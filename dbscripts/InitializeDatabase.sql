CREATE TABLE "User" (
	user_id serial,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	phone_number varchar(30),
	address varchar,
	username varchar(30),
	password varchar(30),
	is_active boolean DEFAULT true,
	PRIMARY KEY (user_id)
);

CREATE TABLE "Role" (
	role_id serial PRIMARY KEY,
	role_name varchar(30) NOT NULL
);

CREATE TABLE "UserRole" (
	user_id int,
	role_id int,
	PRIMARY KEY (user_id, role_id),
	FOREIGN KEY (user_id) REFERENCES "User"(user_id),
	FOREIGN KEY (role_id) REFERENCES "Role"(role_id)
);

CREATE TABLE "TimeBlock" (
	timeblock_id int,
	start_time time,
	end_time time,
	PRIMARY KEY (timeblock_id)
);

CREATE TABLE "Availability" (
	timeblock_id int,
	day_of_week time,
	clinician_id int,
	is_active boolean DEFAULT true,
	PRIMARY KEY (timeblock_id, day_of_week, clinician_id),
	FOREIGN KEY (timeblock_id) REFERENCES "TimeBlock"(timeblock_id),
	FOREIGN KEY (clinician_id) REFERENCES "User"(user_id)
);

CREATE TABLE "Appointment" (
	appointment_id serial,
	date time,
	timeblock_id int,
	patient_id int,
	clinician_id int,
	PRIMARY KEY (appointment_id),
	UNIQUE (date, timeblock_id, patient_id, clinician_id),
	FOREIGN KEY (timeblock_id) REFERENCES "TimeBlock"(timeblock_id),
	FOREIGN KEY (patient_id) REFERENCES "User"(user_id),
	FOREIGN KEY (clinician_id) REFERENCES "User"(user_id)
);

CREATE TABLE "AppointmentRecord" (
	appointment_id int,
	patient_id int,
	notes varchar,
	PRIMARY KEY (appointment_id),
	FOREIGN KEY (appointment_id) REFERENCES "Appointment"(appointment_id) ON DELETE CASCADE,
	FOREIGN KEY (patient_id) REFERENCES "User"(user_id)
);

CREATE TABLE "UserHealthInfo" (
	user_id int,
	phn int,
	dob time,
	height int,
	blood_type varchar(5),
	sex varchar(2),
	PRIMARY KEY (user_id),
	UNIQUE (phn),
	FOREIGN KEY (user_id) REFERENCES "User"(user_id)
);

CREATE TABLE "BillingHistory" (
	patient_id int,
	appointment_id int,
	amount int,
	date_paid time,
	PRIMARY KEY (patient_id, appointment_id),
	FOREIGN KEY (patient_id) REFERENCES "User"(user_id),
	FOREIGN KEY (appointment_id) REFERENCES "Appointment"(appointment_id)
);

CREATE TABLE "Medication" (
	medication_id serial,
	name varchar(30) NOT NULL,
	inventory int,
	unit_price int,
	PRIMARY KEY (medication_id)
);

CREATE TABLE "Prescription" (
	patient_id int,
	clinician_id int,
	medication_id int,
	date_prescribed time,
	dosage int NOT NULL,
	filled_by int,
	PRIMARY KEY (patient_id, clinician_id, medication_id, date_prescribed),
	FOREIGN KEY (patient_id) REFERENCES "User"(user_id),
	FOREIGN KEY (clinician_id) REFERENCES "User"(user_id),
	FOREIGN KEY (medication_id) REFERENCES "Medication"(medication_id),
	FOREIGN KEY (filled_by) REFERENCES "User"(user_id)
);