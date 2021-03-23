import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Olx extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    userURL: string;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    price: string;

    @Column({nullable: true})
    description: string;

    @Column({unique: true})
    offerId: string
}