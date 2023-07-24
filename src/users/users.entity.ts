import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Profile} from "./profile.entity";


@Entity({ name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
    password:string;

    @Column({type:'datetime'})
    createdAt:Date;

    @Column({nullable:true})
    authStrategy:string;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile
}