import { IsEmail, Length } from 'class-validator';
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	Index,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcrypt';
import { classToPlain, Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
	constructor(user: Partial<User>) {
		super();
		Object.assign(this, user);
	}
	@Exclude()
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeInsert()
	async hashPassword() {
		// this.password = await bcrypt.hash(this.password, 6);
	}
	toJSON() {
		return classToPlain(this);
	}
}
